var lastLayer = null;
var zoomToDelete = null;
let viewBounds = [[-410, -410], [410, 410]];
let backgroundBounds = [[-340, -340], [340, 340]];
let backgroundImage = 'assets/img/galaxy.jpg';
let fireEventTime = 1;

function displayName(text) {
    return text.replace(/_/g," ").toUpperCase();
};

function hideTooltips() {
    $('.leaflet-tooltip').css('opacity', '0');
    $('.leaflet-marker-icon').css('opacity', '0');
    
    zones.eachLayer(layer => layer.unbindTooltip());
    zoomToDelete = map.getZoom();
};

function refreshToolTips() {
    $('.leaflet-tooltip').removeClass('zoomZones' + zoomToDelete);
    $('.leaflet-tooltip').addClass('zoomZones' + map.getZoom());
    $('.leaflet-marker-icon').removeClass('zoomClusters' + zoomToDelete);
    $('.leaflet-marker-icon').addClass('zoomClusters' + map.getZoom());
    $('.leaflet-marker-icon').css('opacity', '1');
}
function showTooltip(activeLayer) {
    if(settingZoneHighlight){
        zones.eachLayer(layer => {
            setTooltipData(layer);
            setTimeout(() => layer.fire('click'), fireEventTime);
        });
    } else {
        if(activeLayer != null) {
            setTooltipData(activeLayer);
            setTimeout(() => activeLayer.fire('click'), fireEventTime);
        }
    }

    refreshToolTips();
};

function getTooltipData(layerName){
    let offset = styles[layerName].offset[map.getZoom()];
    return [displayName(layerName), {opacity: (settingZoneName ? '0' : '1'), offset: offset, direction: "center", className: layerName}];
};

function setTooltipData(layer) {
    let zoneName = layer.feature.properties.name;
    let tooltipdata = getTooltipData(zoneName);

    layer.unbindTooltip();
    layer.setStyle(styles[zoneName]);
    layer.bindTooltip(tooltipdata[0], tooltipdata[1]).openTooltip();
};

function getClusterPolylines(data) {
    let clusterCoordinates = [];
    let clusterPolygons = [];
    for (const [key, value] of Object.entries(data.features)) {
        let clusterName = value.properties.name;
        let clusterCoords =  value.geometry.coordinates;
        clusterCoordinates[clusterName] = clusterCoords.reverse();
    }
    for (const [key, value] of Object.entries(data.features)) {
        for (const [key2, value2] of Object.entries(value.properties.connections)) {
            let cluster1 = value.properties.name;
            let cluster2 = value2;
            if(cluster1[0] > cluster2[0]) {
                clusterPolygons.push([clusterCoordinates[cluster1], clusterCoordinates[cluster2]]);
            } else {
                clusterPolygons.push([clusterCoordinates[cluster2], clusterCoordinates[cluster1]]);
            }
        }
    }

    let uniquePolygons = clusterPolygons.map(JSON.stringify).filter((e,i,a) => i === a.indexOf(e)).map(JSON.parse);
    
    return uniquePolygons;
};

function highlightBackgroundPolygon(layer) {
    if(settingZoneHighlight) {
        return;
    }
    
    let zoneNameTarget = layer.feature.properties.zone;
    zones.eachLayer(zone => {
        let zoneName = zone.feature.properties.name;
        if(zoneNameTarget == zoneName) {
            showTooltip(zone);
        }
    });
};

function getSystemNames(data) {
    let systemNames = [];
    for (const [key, value] of Object.entries(data.features)) {
        let ownerName = [];
        for (const [key2, value2] of Object.entries(value.properties.planets)) {
            if (value2=='') {
                continue;
            }
            ownerName.push(value2);
        }
        let clusterName = value.properties.cluster;
        let systemName = value.properties.name;
        
        if (!systemNames[clusterName]){
            systemNames[clusterName] = [];
        }
        if (!systemNames[clusterName][systemName]){
            systemNames[clusterName][systemName] = [];
        }
        
        systemNames[clusterName][systemName] = ownerName;
    }

    return systemNames;
};

function generateSystemHTML(systems) {
    let html = [];
    html.push('<ul>');
    for (const [key, value] of Object.entries(systems)) {
        let systemName = key;
        let systemOwnerIcon = '';
        $.each(value, ( index2, value2 ) => {
            systemOwnerIcon = systemOwnerIcon + '<img class="displaySystemOwnerIcon" src="assets/icon/' + value2 + '.svg" /> ';
        });
        systemName = displayName(systemName).toLowerCase();
        systemName = systemName.split(" ");
        for (let i = 0; i < systemName.length; i++) {
            systemName[i] = systemName[i][0].toUpperCase() + systemName[i].substr(1);
        }
        systemName = systemName.join(" ");
        html.push('<li>' + systemOwnerIcon + systemName + '</li>');
    }

    html.push('</ul>');

    return html.join('');
};

function refreshSystemMarker() {
    $('.displaySystemOwnerIcon').css('height', map.getZoom()*0.4*24 + 'px');
    $('.displaySystemOwnerIcon').css('width', map.getZoom()*0.4*24 + 'px');
    $('.displaySystemOwnerIcon').css('left', 36-(map.getZoom()*12) + 'px');
    //$('.displaySystemOwnerIcon').css('top', 5+Math.pow(2.2, map.getZoom()) + 'px');
    $('.iconTextDivSystems').css('margin-top', 15+Math.pow(4, map.getZoom()) + 'px');
    $('.iconTextDivSystems').css('margin-left', (50+Math.pow(3, map.getZoom()))*-1 + 'px');
};

function createSystemsMarker(layer) {
    let systemName = layer.feature.properties.name;
    let zoneCoords = layer.feature.geometry.coordinates;
    
    currentSystem = L.marker(zoneCoords, {
        icon: L.divIcon({
            html: generateSystemHTML(systems[systemName]), 
            iconAnchor: [50+Math.pow(3, map.getZoom()), -20+(Math.pow(3.5, map.getZoom())*-1)], 
            iconSize: [0, 0], 
            className: 'iconTextDivSystems'
        })
    }).addTo(map);

    refreshSystemMarker();
};

function removeSystemsMarker() {
    map.removeLayer(currentSystem);
};


//* --- Setup Map --- *//
let map = L.map('map', {
    crs: L.CRS.Simple,
    renderer: L.svg({ padding: 1000 }),
    center: [0, 0],
    maxBounds: viewBounds,
    minZoom: 0,
    maxZoom: 3
}).setView(new L.LatLng(0, 0), 0);
map.on('drag', () => map.panInsideBounds(viewBounds, { animate: false }));
map.on('zoomstart', () => hideTooltips());
map.on('zoomend', () => {
    showTooltip(lastLayer);
    refreshSystemMarker();
});
map.on('click', () => showTooltip(lastLayer));


//* --- Setup Background --- *//
let background = L.imageOverlay(backgroundImage, backgroundBounds);


//* --- Setup Zones --- *//
let zones = L.geoJson(geodataZones, {
    style: styles.default,
    onEachFeature: (feature, layer) => {
      layer.on('mouseover', () => {
        if(settingZoneHighlight) {
            return;
        }

        lastLayer = layer;

        showTooltip(lastLayer);
      });
      layer.on('mouseout', () => {
        if(settingZoneHighlight) {
            showTooltip(lastLayer);
            return;
        }
        
        lastLayer = null;

        layer.setStyle(styles.default);
        layer.unbindTooltip();
        layer.closeTooltip();
      });
    }
});


//* --- Setup Clusters --- *//
let systems = getSystemNames(geodataSystems);
let currentSystem = null;
let clustersIcons = L.geoJson(geodataClusters, {
    onEachFeature: (feature, layer) => {
        layer.on('mouseover', () => {
            createSystemsMarker(layer);
            highlightBackgroundPolygon(layer);
            refreshToolTips();
        });
        layer.on('mouseout', () => {
            removeSystemsMarker();
        });
        layer.on('click', () => highlightBackgroundPolygon(layer));
    },
    pointToLayer: function(geoJsonPoint, latlng) {
        return L.circle(latlng, {radius: 3, color: 'white', opacity: 0.5, fillOpacity: 0.5});
    },
});
let clustersTexts = L.geoJson(geodataClusters, {
    onEachFeature: (feature, layer) => {
        layer.on('mouseover', () => {
            createSystemsMarker(layer);
            highlightBackgroundPolygon(layer);
            refreshToolTips();
        });
        layer.on('mouseout', () => {
            removeSystemsMarker();
        });
        layer.on('click', () => highlightBackgroundPolygon(layer));
    },
    pointToLayer: function(geoJsonPoint, latlng) {
        return L.marker(latlng, {icon: L.divIcon({html: displayName(geoJsonPoint.properties.name),iconAnchor: [210, -13], iconSize: [420, 0], className: 'iconTextDiv'})});
    },
});


//* --- Setup Lines --- *//
let clusterPolylines = getClusterPolylines(geodataClusters);
let clusterConnections = L.polyline(clusterPolylines, {color: 'white', opacity: 0.5});


//* --- Setup Legend --- *//
let collapse = false;
let legend = null;
function makeLegend() {
    if(legend != null) {
        map.removeControl(legend);
        legend = null;
    }
    collapse = !collapse;
    legend = L.control.Legend({
        collapsed: collapse,
        position: "bottomleft",
        legends: legends
    }).addTo(map);
    $('.leaflet-legend').click(() => {
        makeLegend();
    });
};
makeLegend();

//* --- Load the map in correct order --- *//
background.setZIndex(0).addTo(map);
clusterConnections.addTo(map);
clustersTexts.setZIndex(2).addTo(map);
zones.setZIndex(3).addTo(map);
clustersIcons.setZIndex(4).addTo(map);


//* --- Settings --- *//
var settingZoneHighlight = false;
$('#zoneHighlight').change(() => {
    settingZoneHighlight = !settingZoneHighlight;
    
    zones.eachLayer(layer => {
        if(settingZoneHighlight) {
            showTooltip(layer);
        } else {
            layer.setStyle(styles.default);
            layer.unbindTooltip();
            layer.closeTooltip();
        }
        setTimeout(() => layer.fire('click'), fireEventTime);
    });
});
var settingZoneName = true;
$('#zoneName').change(() => {
    settingZoneName = !settingZoneName;
    
    zones.eachLayer(layer => {
        if(settingZoneHighlight) {
            showTooltip(layer);
        } else {
            layer.setStyle(styles.default);
            layer.unbindTooltip();
            layer.closeTooltip();
        }
        setTimeout(() => layer.fire('click'), fireEventTime);
    });
});

L.control.Legend({
    title: "Settings",
    position: "bottomright",
    legends: [
        {
            label: "<b>eee</b>",
            type: "image",
            url: "assets/icon/volus.svg",
        },]
}).addTo(map);