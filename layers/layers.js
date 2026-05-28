ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3067").setExtent([401018.666798, 6858111.040070, 406194.368457, 6861738.454909]);
var wms_layers = [];

var lyr_Aerialview_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://tiles.kartat.kapsi.fi/ortokuva?",
                              attributions: '<a href="">National Land Survey, CC-BY-4.0 via kartat.kapsi.fi</a>',
                              params: {
                                "LAYERS": "ortokuva",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Aerial view',
                            popuplayertitle: 'Aerial view',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Aerialview_0, 0]);

        var lyr_Voyager_1 = new ol.layer.Tile({
            'title': 'Voyager',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png'
            })
        });

        var lyr_Positronretina_2 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Solarpowerplantarea_3 = new ol.format.GeoJSON();
var features_Solarpowerplantarea_3 = format_Solarpowerplantarea_3.readFeatures(json_Solarpowerplantarea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Solarpowerplantarea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solarpowerplantarea_3.addFeatures(features_Solarpowerplantarea_3);
var lyr_Solarpowerplantarea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solarpowerplantarea_3, 
                style: style_Solarpowerplantarea_3,
                popuplayertitle: 'Solar power plant area',
                interactive: false,
                title: '<img src="styles/legend/Solarpowerplantarea_3.png" /> Solar power plant area'
            });
var format_Solarpanels_4 = new ol.format.GeoJSON();
var features_Solarpanels_4 = format_Solarpanels_4.readFeatures(json_Solarpanels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Solarpanels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solarpanels_4.addFeatures(features_Solarpanels_4);
var lyr_Solarpanels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solarpanels_4, 
                style: style_Solarpanels_4,
                popuplayertitle: 'Solar panels',
                interactive: false,
                title: '<img src="styles/legend/Solarpanels_4.png" /> Solar panels'
            });
var format_DCtestfitdcsite_5 = new ol.format.GeoJSON();
var features_DCtestfitdcsite_5 = format_DCtestfitdcsite_5.readFeatures(json_DCtestfitdcsite_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitdcsite_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitdcsite_5.addFeatures(features_DCtestfitdcsite_5);
var lyr_DCtestfitdcsite_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitdcsite_5, 
                style: style_DCtestfitdcsite_5,
                popuplayertitle: 'DC-testfit — dcsite',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitdcsite_5.png" /> DC-testfit — dcsite'
            });
var format_DCtestfitDCareas_6 = new ol.format.GeoJSON();
var features_DCtestfitDCareas_6 = format_DCtestfitDCareas_6.readFeatures(json_DCtestfitDCareas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitDCareas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitDCareas_6.addFeatures(features_DCtestfitDCareas_6);
var lyr_DCtestfitDCareas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitDCareas_6, 
                style: style_DCtestfitDCareas_6,
                popuplayertitle: 'DC-testfit — DC-areas',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitDCareas_6.png" /> DC-testfit — DC-areas'
            });
var format_DCtestfitdcbuilding_7 = new ol.format.GeoJSON();
var features_DCtestfitdcbuilding_7 = format_DCtestfitdcbuilding_7.readFeatures(json_DCtestfitdcbuilding_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitdcbuilding_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitdcbuilding_7.addFeatures(features_DCtestfitdcbuilding_7);
var lyr_DCtestfitdcbuilding_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitdcbuilding_7, 
                style: style_DCtestfitdcbuilding_7,
                popuplayertitle: 'DC-testfit — dcbuilding',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitdcbuilding_7.png" /> DC-testfit — dcbuilding'
            });
var format_DCtestfitroad_areas_8 = new ol.format.GeoJSON();
var features_DCtestfitroad_areas_8 = format_DCtestfitroad_areas_8.readFeatures(json_DCtestfitroad_areas_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitroad_areas_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitroad_areas_8.addFeatures(features_DCtestfitroad_areas_8);
var lyr_DCtestfitroad_areas_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitroad_areas_8, 
                style: style_DCtestfitroad_areas_8,
                popuplayertitle: 'DC-testfit — road_areas',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitroad_areas_8.png" /> DC-testfit — road_areas'
            });
var format_DCtestfitauxbuilding_9 = new ol.format.GeoJSON();
var features_DCtestfitauxbuilding_9 = format_DCtestfitauxbuilding_9.readFeatures(json_DCtestfitauxbuilding_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitauxbuilding_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitauxbuilding_9.addFeatures(features_DCtestfitauxbuilding_9);
var lyr_DCtestfitauxbuilding_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitauxbuilding_9, 
                style: style_DCtestfitauxbuilding_9,
                popuplayertitle: 'DC-testfit — auxbuilding',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitauxbuilding_9.png" /> DC-testfit — auxbuilding'
            });
var format_DCtestfitsubstation_10 = new ol.format.GeoJSON();
var features_DCtestfitsubstation_10 = format_DCtestfitsubstation_10.readFeatures(json_DCtestfitsubstation_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitsubstation_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitsubstation_10.addFeatures(features_DCtestfitsubstation_10);
var lyr_DCtestfitsubstation_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitsubstation_10, 
                style: style_DCtestfitsubstation_10,
                popuplayertitle: 'DC-testfit — substation',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitsubstation_10.png" /> DC-testfit — substation'
            });
var format_DCtestfitDClabels_11 = new ol.format.GeoJSON();
var features_DCtestfitDClabels_11 = format_DCtestfitDClabels_11.readFeatures(json_DCtestfitDClabels_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitDClabels_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitDClabels_11.addFeatures(features_DCtestfitDClabels_11);
var lyr_DCtestfitDClabels_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitDClabels_11, 
                style: style_DCtestfitDClabels_11,
                popuplayertitle: 'DC-testfit — DC-labels',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitDClabels_11.png" /> DC-testfit — DC-labels'
            });
var format_DCtestfitgridconnection_12 = new ol.format.GeoJSON();
var features_DCtestfitgridconnection_12 = format_DCtestfitgridconnection_12.readFeatures(json_DCtestfitgridconnection_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCtestfitgridconnection_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCtestfitgridconnection_12.addFeatures(features_DCtestfitgridconnection_12);
var lyr_DCtestfitgridconnection_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCtestfitgridconnection_12, 
                style: style_DCtestfitgridconnection_12,
                popuplayertitle: 'DC-testfit — grid connection',
                interactive: false,
                title: '<img src="styles/legend/DCtestfitgridconnection_12.png" /> DC-testfit — grid connection'
            });
var format_DCsubstation_13 = new ol.format.GeoJSON();
var features_DCsubstation_13 = format_DCsubstation_13.readFeatures(json_DCsubstation_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DCsubstation_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DCsubstation_13.addFeatures(features_DCsubstation_13);
var lyr_DCsubstation_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DCsubstation_13,
maxResolution:28004.466152261964,
 
                style: style_DCsubstation_13,
                popuplayertitle: 'DC substation',
                interactive: false,
                title: '<img src="styles/legend/DCsubstation_13.png" /> DC substation'
            });
var format_FingridToivila_14 = new ol.format.GeoJSON();
var features_FingridToivila_14 = format_FingridToivila_14.readFeatures(json_FingridToivila_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_FingridToivila_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FingridToivila_14.addFeatures(features_FingridToivila_14);
var lyr_FingridToivila_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FingridToivila_14,
maxResolution:28004.466152261964,
 
                style: style_FingridToivila_14,
                popuplayertitle: 'Fingrid Toivila',
                interactive: false,
                title: '<img src="styles/legend/FingridToivila_14.png" /> Fingrid Toivila'
            });
var format_110kVpowerline_15 = new ol.format.GeoJSON();
var features_110kVpowerline_15 = format_110kVpowerline_15.readFeatures(json_110kVpowerline_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_110kVpowerline_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_110kVpowerline_15.addFeatures(features_110kVpowerline_15);
var lyr_110kVpowerline_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_110kVpowerline_15, 
                style: style_110kVpowerline_15,
                popuplayertitle: '110 kV powerline',
                interactive: false,
                title: '<img src="styles/legend/110kVpowerline_15.png" /> 110 kV powerline'
            });
var format_FingridToivilasubstation_16 = new ol.format.GeoJSON();
var features_FingridToivilasubstation_16 = format_FingridToivilasubstation_16.readFeatures(json_FingridToivilasubstation_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_FingridToivilasubstation_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FingridToivilasubstation_16.addFeatures(features_FingridToivilasubstation_16);
var lyr_FingridToivilasubstation_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FingridToivilasubstation_16, 
                style: style_FingridToivilasubstation_16,
                popuplayertitle: 'Fingrid Toivila substation',
                interactive: false,
                title: '<img src="styles/legend/FingridToivilasubstation_16.png" /> Fingrid Toivila substation'
            });
var format_DistancetoTampere_17 = new ol.format.GeoJSON();
var features_DistancetoTampere_17 = format_DistancetoTampere_17.readFeatures(json_DistancetoTampere_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DistancetoTampere_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistancetoTampere_17.addFeatures(features_DistancetoTampere_17);
var lyr_DistancetoTampere_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistancetoTampere_17,
maxResolution:28004.466152261964,
 
                style: style_DistancetoTampere_17,
                popuplayertitle: 'Distance to Tampere',
                interactive: false,
                title: '<img src="styles/legend/DistancetoTampere_17.png" /> Distance to Tampere'
            });
var format_DistancetoHelsinki_18 = new ol.format.GeoJSON();
var features_DistancetoHelsinki_18 = format_DistancetoHelsinki_18.readFeatures(json_DistancetoHelsinki_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DistancetoHelsinki_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistancetoHelsinki_18.addFeatures(features_DistancetoHelsinki_18);
var lyr_DistancetoHelsinki_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistancetoHelsinki_18,
maxResolution:28004.466152261964,
 
                style: style_DistancetoHelsinki_18,
                popuplayertitle: 'Distance to Helsinki',
                interactive: false,
                title: '<img src="styles/legend/DistancetoHelsinki_18.png" /> Distance to Helsinki'
            });
var format_DistancetoJmscitycentre_19 = new ol.format.GeoJSON();
var features_DistancetoJmscitycentre_19 = format_DistancetoJmscitycentre_19.readFeatures(json_DistancetoJmscitycentre_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_DistancetoJmscitycentre_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistancetoJmscitycentre_19.addFeatures(features_DistancetoJmscitycentre_19);
var lyr_DistancetoJmscitycentre_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistancetoJmscitycentre_19,
maxResolution:28004.466152261964,
 
                style: style_DistancetoJmscitycentre_19,
                popuplayertitle: 'Distance to Jämsä city centre',
                interactive: false,
                title: '<img src="styles/legend/DistancetoJmscitycentre_19.png" /> Distance to Jämsä city centre'
            });
var format_Tampere_20 = new ol.format.GeoJSON();
var features_Tampere_20 = format_Tampere_20.readFeatures(json_Tampere_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Tampere_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tampere_20.addFeatures(features_Tampere_20);
var lyr_Tampere_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tampere_20, 
                style: style_Tampere_20,
                popuplayertitle: 'Tampere',
                interactive: false,
                title: '<img src="styles/legend/Tampere_20.png" /> Tampere'
            });
var format_Helsinki_21 = new ol.format.GeoJSON();
var features_Helsinki_21 = format_Helsinki_21.readFeatures(json_Helsinki_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3067'});
var jsonSource_Helsinki_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Helsinki_21.addFeatures(features_Helsinki_21);
var lyr_Helsinki_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Helsinki_21, 
                style: style_Helsinki_21,
                popuplayertitle: 'Helsinki',
                interactive: false,
                title: '<img src="styles/legend/Helsinki_21.png" /> Helsinki'
            });
var group_Cities = new ol.layer.Group({
                                layers: [lyr_Tampere_20,lyr_Helsinki_21,],
                                fold: 'close',
                                title: 'Cities'});
var group_Distances = new ol.layer.Group({
                                layers: [lyr_DistancetoTampere_17,lyr_DistancetoHelsinki_18,lyr_DistancetoJmscitycentre_19,],
                                fold: 'close',
                                title: 'Distances'});
var group_Substations = new ol.layer.Group({
                                layers: [lyr_FingridToivilasubstation_16,],
                                fold: 'close',
                                title: 'Substations'});
var group_Gridconnectionoptions = new ol.layer.Group({
                                layers: [lyr_DCsubstation_13,lyr_FingridToivila_14,],
                                fold: 'close',
                                title: 'Grid connection options'});
var group_Datacenter = new ol.layer.Group({
                                layers: [lyr_DCtestfitdcsite_5,lyr_DCtestfitDCareas_6,lyr_DCtestfitdcbuilding_7,lyr_DCtestfitroad_areas_8,lyr_DCtestfitauxbuilding_9,lyr_DCtestfitsubstation_10,lyr_DCtestfitDClabels_11,lyr_DCtestfitgridconnection_12,],
                                fold: 'close',
                                title: 'Data center'});
var group_Solar = new ol.layer.Group({
                                layers: [lyr_Solarpowerplantarea_3,lyr_Solarpanels_4,],
                                fold: 'close',
                                title: 'Solar'});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_Aerialview_0,lyr_Voyager_1,lyr_Positronretina_2,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_Aerialview_0.setVisible(true);lyr_Voyager_1.setVisible(true);lyr_Positronretina_2.setVisible(true);lyr_Solarpowerplantarea_3.setVisible(true);lyr_Solarpanels_4.setVisible(true);lyr_DCtestfitdcsite_5.setVisible(true);lyr_DCtestfitDCareas_6.setVisible(true);lyr_DCtestfitdcbuilding_7.setVisible(true);lyr_DCtestfitroad_areas_8.setVisible(true);lyr_DCtestfitauxbuilding_9.setVisible(true);lyr_DCtestfitsubstation_10.setVisible(true);lyr_DCtestfitDClabels_11.setVisible(true);lyr_DCtestfitgridconnection_12.setVisible(true);lyr_DCsubstation_13.setVisible(true);lyr_FingridToivila_14.setVisible(true);lyr_110kVpowerline_15.setVisible(true);lyr_FingridToivilasubstation_16.setVisible(true);lyr_DistancetoTampere_17.setVisible(true);lyr_DistancetoHelsinki_18.setVisible(true);lyr_DistancetoJmscitycentre_19.setVisible(true);lyr_Tampere_20.setVisible(true);lyr_Helsinki_21.setVisible(true);
var layersList = [group_Basemap,group_Solar,group_Datacenter,group_Gridconnectionoptions,lyr_110kVpowerline_15,group_Substations,group_Distances,group_Cities];
lyr_Solarpowerplantarea_3.set('fieldAliases', {'fid': 'fid', });
lyr_Solarpanels_4.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHandle': 'EntityHandle', 'Text': 'Text', });
lyr_DCtestfitdcsite_5.set('fieldAliases', {'fid': 'fid', });
lyr_DCtestfitDCareas_6.set('fieldAliases', {'fid': 'fid', });
lyr_DCtestfitdcbuilding_7.set('fieldAliases', {'fid': 'fid', 'label': 'label', });
lyr_DCtestfitroad_areas_8.set('fieldAliases', {'fid': 'fid', });
lyr_DCtestfitauxbuilding_9.set('fieldAliases', {'fid': 'fid', });
lyr_DCtestfitsubstation_10.set('fieldAliases', {'fid': 'fid', });
lyr_DCtestfitDClabels_11.set('fieldAliases', {'fid': 'fid', 'labels': 'labels', });
lyr_DCtestfitgridconnection_12.set('fieldAliases', {'fid': 'fid', });
lyr_DCsubstation_13.set('fieldAliases', {'fid': 'fid', 'Selite': 'Selite', });
lyr_FingridToivila_14.set('fieldAliases', {'fid': 'fid', 'Selite': 'Selite', });
lyr_110kVpowerline_15.set('fieldAliases', {'fid': 'fid', 'Nimi': 'Nimi', });
lyr_FingridToivilasubstation_16.set('fieldAliases', {'fid': 'fid', 'Nimi': 'Nimi', });
lyr_DistancetoTampere_17.set('fieldAliases', {'fid': 'fid', 'Selite': 'Selite', });
lyr_DistancetoHelsinki_18.set('fieldAliases', {'fid': 'fid', 'Selite': 'Selite', });
lyr_DistancetoJmscitycentre_19.set('fieldAliases', {'fid': 'fid', 'Selite': 'Selite', });
lyr_Tampere_20.set('fieldAliases', {'fid': 'fid', 'Nimi': 'Nimi', });
lyr_Helsinki_21.set('fieldAliases', {'fid': 'fid', 'Nimi': 'Nimi', });
lyr_Solarpowerplantarea_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_Solarpanels_4.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'PaperSpace': 'CheckBox', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHandle': 'TextEdit', 'Text': 'TextEdit', });
lyr_DCtestfitdcsite_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_DCtestfitDCareas_6.set('fieldImages', {'fid': 'TextEdit', });
lyr_DCtestfitdcbuilding_7.set('fieldImages', {'fid': 'TextEdit', 'label': 'TextEdit', });
lyr_DCtestfitroad_areas_8.set('fieldImages', {'fid': 'TextEdit', });
lyr_DCtestfitauxbuilding_9.set('fieldImages', {'fid': 'TextEdit', });
lyr_DCtestfitsubstation_10.set('fieldImages', {'fid': 'TextEdit', });
lyr_DCtestfitDClabels_11.set('fieldImages', {'fid': 'TextEdit', 'labels': 'TextEdit', });
lyr_DCtestfitgridconnection_12.set('fieldImages', {'fid': 'TextEdit', });
lyr_DCsubstation_13.set('fieldImages', {'fid': 'TextEdit', 'Selite': 'TextEdit', });
lyr_FingridToivila_14.set('fieldImages', {'fid': 'TextEdit', 'Selite': 'TextEdit', });
lyr_110kVpowerline_15.set('fieldImages', {'fid': 'TextEdit', 'Nimi': 'TextEdit', });
lyr_FingridToivilasubstation_16.set('fieldImages', {'fid': 'TextEdit', 'Nimi': 'TextEdit', });
lyr_DistancetoTampere_17.set('fieldImages', {'fid': 'TextEdit', 'Selite': 'TextEdit', });
lyr_DistancetoHelsinki_18.set('fieldImages', {'fid': 'TextEdit', 'Selite': 'TextEdit', });
lyr_DistancetoJmscitycentre_19.set('fieldImages', {'fid': 'TextEdit', 'Selite': 'TextEdit', });
lyr_Tampere_20.set('fieldImages', {'fid': '', 'Nimi': '', });
lyr_Helsinki_21.set('fieldImages', {'fid': 'TextEdit', 'Nimi': 'TextEdit', });
lyr_Solarpowerplantarea_3.set('fieldLabels', {'fid': 'no label', });
lyr_Solarpanels_4.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'PaperSpace': 'no label', 'SubClasses': 'no label', 'Linetype': 'no label', 'EntityHandle': 'no label', 'Text': 'no label', });
lyr_DCtestfitdcsite_5.set('fieldLabels', {'fid': 'no label', });
lyr_DCtestfitDCareas_6.set('fieldLabels', {'fid': 'no label', });
lyr_DCtestfitdcbuilding_7.set('fieldLabels', {'fid': 'no label', 'label': 'no label', });
lyr_DCtestfitroad_areas_8.set('fieldLabels', {'fid': 'no label', });
lyr_DCtestfitauxbuilding_9.set('fieldLabels', {'fid': 'no label', });
lyr_DCtestfitsubstation_10.set('fieldLabels', {'fid': 'no label', });
lyr_DCtestfitDClabels_11.set('fieldLabels', {'fid': 'no label', 'labels': 'no label', });
lyr_DCtestfitgridconnection_12.set('fieldLabels', {'fid': 'no label', });
lyr_DCsubstation_13.set('fieldLabels', {'fid': 'hidden field', 'Selite': 'inline label - always visible', });
lyr_FingridToivila_14.set('fieldLabels', {'fid': 'hidden field', 'Selite': 'inline label - always visible', });
lyr_110kVpowerline_15.set('fieldLabels', {'fid': 'no label', 'Nimi': 'no label', });
lyr_FingridToivilasubstation_16.set('fieldLabels', {'fid': 'no label', 'Nimi': 'no label', });
lyr_DistancetoTampere_17.set('fieldLabels', {'fid': 'hidden field', 'Selite': 'inline label - always visible', });
lyr_DistancetoHelsinki_18.set('fieldLabels', {'fid': 'hidden field', 'Selite': 'inline label - always visible', });
lyr_DistancetoJmscitycentre_19.set('fieldLabels', {'fid': 'hidden field', 'Selite': 'inline label - always visible', });
lyr_Tampere_20.set('fieldLabels', {'fid': 'no label', 'Nimi': 'no label', });
lyr_Helsinki_21.set('fieldLabels', {'fid': 'no label', 'Nimi': 'no label', });
lyr_Helsinki_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});