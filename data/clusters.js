var geodataClusters = {
    "type": "FeatureCollection",
    "name": "Galaxy Clusters",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:EPSG::2180" } },
    "features": [
        /* --- Geth Space --- */
        {
            "type": "Feature", 
            "properties": { "zone": "geth_space", "name": "far_rim", "connections": ["perseus_veil"] },
            "geometry": { "type": "Point", "coordinates": [276, 112] } 
        },
        {
            "type": "Feature", 
            "properties": { "zone": "geth_space", "name": "perseus_veil", "connections": ["far_rim"] },
            "geometry": { "type": "Point", "coordinates": [297, 41],  }
        },
        /* --- Batarian Hegemony --- */
        {
            "type": "Feature", 
            "properties": { "zone": "batarian_hegemony", "name": "kite's_nest", "connections": ["exodus_cluster"] },
            "geometry": { "type": "Point", "coordinates": [-3, -252] } 
        },
        {
            "type": "Feature", 
            "properties": { "zone": "batarian_hegemony", "name": "viper_nebula", "connections": ["local_cluster"] },
            "geometry": { "type": "Point", "coordinates": [-60, -294] } 
        },
        /* --- Alliance Space  --- */
        {
            "type": "Feature", 
            "properties": { "zone": "earth_systems_alliance_space", "name": "local_cluster", "connections": ["serpent_nebula", "viper_nebula", "arcturus_stream", "exodus_cluster"] },
            "geometry": { "type": "Point", "coordinates": [-96, -140] } 
        },
        {
            "type": "Feature", 
            "properties": { "zone": "earth_systems_alliance_space", "name": "arcturus_stream", "connections": ["local_cluster", "exodus_cluster"] },
            "geometry": { "type": "Point", "coordinates": [-65, -191] } 
        },
        {
            "type": "Feature", 
            "properties": { "zone": "earth_systems_alliance_space", "name": "exodus_cluster", "connections": ["annos_basin", "hades_gamma", "horse_head_nebula", "petra_nebula", "local_cluster", "arcturus_stream", "kite's_nest"] },
            "geometry": { "type": "Point", "coordinates": [-22, -180] } 
        },
        {
            "type": "Feature", 
            "properties": { "zone": "earth_systems_alliance_space", "name": "petra_nebula", "connections": ["exodus_cluster"] },
            "geometry": { "type": "Point", "coordinates": [-28, -215] } 
        },
        {
            "type": "Feature", 
            "properties": { "zone": "earth_systems_alliance_space", "name": "horse_head_nebula", "connections": ["annos_basin", "exodus_cluster"] },
            "geometry": { "type": "Point", "coordinates": [20, -100] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "earth_systems_alliance_space", "name": "argos_rho", "connections": ["horse_head_nebula"] },
            "geometry": { "type": "Point", "coordinates": [45, -132] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "earth_systems_alliance_space", "name": "hades_gamma", "connections": ["attican_beta", "gemini_sigma", "voyager_cluster", "artemis_tau", "exodus_cluster"] },
            "geometry": { "type": "Point", "coordinates": [118, -216] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "earth_systems_alliance_space", "name": "artemis_tau", "connections": ["hades_gamma"] },
            "geometry": { "type": "Point", "coordinates": [97, -243] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "earth_systems_alliance_space", "name": "voyager_cluster", "connections": ["hades_gamma"] },
            "geometry": { "type": "Point", "coordinates": [182, -199] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "earth_systems_alliance_space", "name": "gemini_sigma", "connections": ["hades_gamma"] },
            "geometry": { "type": "Point", "coordinates": [95, -188] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "earth_systems_alliance_space", "name": "attican_beta", "connections": ["maroon_sea", "hades_gamma"] },
            "geometry": { "type": "Point", "coordinates": [149, -162] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "earth_systems_alliance_space", "name": "maroon_sea", "connections": ["attican_beta"] },
            "geometry": { "type": "Point", "coordinates": [107, -137] }
        },
        /* --- Inner Council Space --- */
        {
            "type": "Feature", 
            "properties": { "zone": "inner_council_space", "name": "annos_basin", "connections": ["serpent_nebula", "exodus_cluster", "horse_head_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-96, -74] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "inner_council_space", "name": "serpent_nebula", "connections": ["minos_wasteland", "athena_nebula", "silean_nebula", "apien_crest", "krogan_dmz", "annos_basin", "local_cluster"] },
            "geometry": { "type": "Point", "coordinates": [-143, -28] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "inner_council_space", "name": "krogan_dmz", "connections": ["serpent_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-152, -70] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "inner_council_space", "name": "apien_crest", "connections": ["aethon_cluster", "serpent_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-220, -115] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "inner_council_space", "name": "aethon_cluster", "connections": ["apien_crest"] },
            "geometry": { "type": "Point", "coordinates": [-206, -160] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "outer_council_space", "name": "olyn_protectorate", "connections": ["serpent_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-275, -75] } 
        },
        /* --- Outer Council Space --- */
        {
            "type": "Feature", 
            "properties": { "zone": "outer_council_space", "name": "vesuvius_nebula", "connections": ["olyn_protectorate", "nimbus_cluster"] },
            "geometry": { "type": "Point", "coordinates": [-290, 20] } 
        },
        {
            "type": "Feature", 
            "properties": { "zone": "outer_council_space", "name": "silean_nebula", "connections": ["serpent_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-268, -32] } 
        },
        {
            "type": "Feature", 
            "properties": { "zone": "outer_council_space", "name": "athena_nebula", "connections": ["nimbus_cluster", "serpent_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-228, 4] } 
        },
        {
            "type": "Feature", 
            "properties": { "zone": "outer_council_space", "name": "nimbus_cluster", "connections": ["athena_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-266, 66] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "outer_council_space", "name": "minos_wasteland", "connections": ["serpent_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-225, 103] }
        },
        /* --- Terminus Systems --- */
        {
            "type": "Feature", 
            "properties": { "zone": "terminus_systems", "name": "crescent_nebula", "connections": ["hourglass_nebula", "shrike_abyssal", "minos_wasteland"] },
            "geometry": { "type": "Point", "coordinates": [-151, 191] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "terminus_systems", "name": "shrike_abyssal", "connections": ["valhallan_threshold", "hourglass_nebula", "crescent_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-122, 267] },
        },
        {
            "type": "Feature", 
            "properties": { "zone": "terminus_systems", "name": "hourglass_nebula", "connections": ["valhallan_threshold", "shrike_abyssal", "omega_nebula", "crescent_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-37, 197] },
        },
        {
            "type": "Feature", 
            "properties": { "zone": "terminus_systems", "name": "omega_nebula", "connections": ["crescent_nebula", "titan_nebula", "rosetta_nebula", "valhallan_threshold", "hourglass_nebula"] },
            "geometry": { "type": "Point", "coordinates": [55, 131] },
        },
        {
            "type": "Feature", 
            "properties": { "zone": "terminus_systems", "name": "valhallan_threshold", "connections": ["sigurd's_cradle", "hourglass_nebula", "shrike_abyssal", "omega_nebula", "hourglass_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-25, 274] },
        },
        {
            "type": "Feature", 
            "properties": { "zone": "terminus_systems", "name": "rosetta_nebula", "connections": ["sigurd's_cradle", "omega_nebula"] },
            "geometry": { "type": "Point", "coordinates": [174, 223] },
        },
        {
            "type": "Feature", 
            "properties": { "zone": "terminus_systems", "name": "titan_nebula", "connections": ["omega_nebula"] },
            "geometry": { "type": "Point", "coordinates": [60, 283] },
        },
        {
            "type": "Feature", 
            "properties": { "zone": "terminus_systems", "name": "sigurd's_cradle", "connections": ["rosetta_nebula", "valhallan_threshold", "omega_nebula"] },
            "geometry": { "type": "Point", "coordinates": [95, 197] },
        },
        {
            "type": "Feature", 
            "properties": { "zone": "terminus_systems", "name": "phoneix_massing", "connections": ["far_rim", "omega_nebula"] },
            "geometry": { "type": "Point", "coordinates": [214, 102] },
        },
        /* --- Attican Traverse --- */
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "ismar_frontier", "connections": ["shrike_abyssal", "omega_nebula", "serpent_nebula", "minos_wasteland", "eagle_nebula", "crescent_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-241, 170] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "eagle_nebula", "connections": ["shrike_abyssal", "omega_nebula", "serpent_nebula", "minos_wasteland", "ismar_frontier", "crescent_nebula"] },
            "geometry": { "type": "Point", "coordinates": [-128, 83] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "pylos_nebula", "connections": ["far_rim", "omega_nebula", "phoneix_massing"] },
            "geometry": { "type": "Point", "coordinates": [132, 153] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "hawking_eta", "connections": ["horse_head_nebula", "omega_nebula"] },
            "geometry": { "type": "Point", "coordinates": [81, 67] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "pangaea_expanse", "connections": ["hawking_eta"] },
            "geometry": { "type": "Point", "coordinates": [118, 106] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "caleston_rift", "connections": ["local_cluster", "far_rim", "phoneix_massing", "pylos_nebula", "hawking_eta", "omega_nebula"] },
            "geometry": { "type": "Point", "coordinates": [174, 57] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "hades_nexus", "connections": ["phoneix_massing", "far_rim", "caleston_rift"] },
            "geometry": { "type": "Point", "coordinates": [286,1] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": " ninmah_cluster", "connections": ["hawking_eta"] },
            "geometry": { "type": "Point", "coordinates": [106,46] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "shadow_sea", "connections": ["far_rim", "omega_nebula", "local_cluster", "caleston_rift"] },
            "geometry": { "type": "Point", "coordinates": [105,-95] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "styx_theta", "connections": ["horse_head_nebula"] },
            "geometry": { "type": "Point", "coordinates": [115,-9] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "armstrong_nebula", "connections": ["attican_beta"] },
            "geometry": { "type": "Point", "coordinates": [235,-136] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "kepler_verge", "connections": ["shadow_sea", "attican_beta"] },
            "geometry": { "type": "Point", "coordinates": [160,-50] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "nubian_expanse", "connections": ["hades_nexus", "far_rim", "caleston_rift", "kepler_verge", "shadow_sea", "attican_beta"] },
            "geometry": { "type": "Point", "coordinates": [238,-63] }
        },
        {
            "type": "Feature", 
            "properties": { "zone": "attican_traverse", "name": "sentry_omega", "connections": ["attican_beta"] },
            "geometry": { "type": "Point", "coordinates": [214,12] }
        },
    ]
};