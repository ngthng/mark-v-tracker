const fs = require('fs');

const rawData = `
{
  "type": "FeatureCollection",
  "generator": "overpass-turbo",
  "copyright": "The data included in this document is from www.openstreetmap.org. The data is made available under ODbL.",
  "timestamp": "2026-11-11T01:38:36Z",
  "features": [
    {
      "type": "Feature",
      "id": "way/84971614",
      "properties": {
        "@id": "way/84971614",
        "addr:housenumber": "1710",
        "addr:street": "East Broadway",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "bridge": "yes",
        "check_date": "2025-10-15",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "layer": "1",
        "level": "1",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "3;4",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "surveillance": "yes",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -123.0692025,
              49.2614603
            ],
            [
              -123.0690884,
              49.2614593
            ],
            [
              -123.0690798,
              49.2621941
            ],
            [
              -123.0691089,
              49.2621944
            ],
            [
              -123.0691382,
              49.2621947
            ],
            [
              -123.0691674,
              49.2621949
            ],
            [
              -123.0691937,
              49.2621952
            ],
            [
              -123.0692025,
              49.2614603
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/85233938",
      "properties": {
        "@id": "way/85233938",
        "area": "yes",
        "bridge": "yes",
        "layer": "2",
        "level": "2",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "1",
        "shelter": "yes",
        "start_date": "1994-03-28",
        "subway": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.844104,
              49.1825747
            ],
            [
              -122.8440813,
              49.1825988
            ],
            [
              -122.844235,
              49.1826609
            ],
            [
              -122.8443112,
              49.1826915
            ],
            [
              -122.8447372,
              49.1828632
            ],
            [
              -122.8447062,
              49.182896
            ],
            [
              -122.8449386,
              49.1829866
            ],
            [
              -122.844963,
              49.1829598
            ],
            [
              -122.8450603,
              49.1829953
            ],
            [
              -122.8450842,
              49.18297
            ],
            [
              -122.844104,
              49.1825747
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/85233945",
      "properties": {
        "@id": "way/85233945",
        "area": "yes",
        "bridge": "yes",
        "layer": "2",
        "level": "2",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "2",
        "shelter": "yes",
        "start_date": "1994-03-28",
        "subway": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.8441644,
              49.1825133
            ],
            [
              -122.8451382,
              49.1829097
            ],
            [
              -122.8451593,
              49.1828876
            ],
            [
              -122.8448356,
              49.1827558
            ],
            [
              -122.8448603,
              49.1827299
            ],
            [
              -122.8447527,
              49.1826861
            ],
            [
              -122.8447278,
              49.1827123
            ],
            [
              -122.844483,
              49.1826127
            ],
            [
              -122.8444561,
              49.1826017
            ],
            [
              -122.8441852,
              49.1824915
            ],
            [
              -122.8441644,
              49.1825133
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/86370385",
      "properties": {
        "@id": "way/86370385",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "bridge": "yes",
        "check_date": "2025-10-23",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "indoor": "no",
        "layer": "1",
        "level": "1",
        "lit": "yes",
        "name": "Sapperton",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "1",
        "start_date": "2002-01-05",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.8893751,
              49.2247303
            ],
            [
              -122.8894231,
              49.2247551
            ],
            [
              -122.8895818,
              49.2246224
            ],
            [
              -122.8901235,
              49.2241636
            ],
            [
              -122.8901148,
              49.2241592
            ],
            [
              -122.890075,
              49.2241392
            ],
            [
              -122.8894612,
              49.224659
            ],
            [
              -122.8893751,
              49.2247303
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/86370386",
      "properties": {
        "@id": "way/86370386",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "bridge": "yes",
        "check_date": "2025-10-23",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "indoor": "no",
        "layer": "1",
        "level": "1",
        "lit": "yes",
        "name": "Sapperton",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "2",
        "start_date": "2002-01-05",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.8899975,
              49.2241036
            ],
            [
              -122.8899804,
              49.224095
            ],
            [
              -122.889949,
              49.2240792
            ],
            [
              -122.8894081,
              49.2245384
            ],
            [
              -122.8892557,
              49.2246665
            ],
            [
              -122.889304,
              49.2246909
            ],
            [
              -122.8893836,
              49.2246259
            ],
            [
              -122.8899975,
              49.2241036
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87222354",
      "properties": {
        "@id": "way/87222354",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "bridge": "yes",
        "check_date": "2025-10-23",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "layer": "2",
        "level": "2",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "2",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.9482438,
              49.2002192
            ],
            [
              -122.949298,
              49.1999483
            ],
            [
              -122.9492842,
              49.1999257
            ],
            [
              -122.9492513,
              49.1999339
            ],
            [
              -122.9492414,
              49.1999179
            ],
            [
              -122.9492309,
              49.1999009
            ],
            [
              -122.9491867,
              49.1999123
            ],
            [
              -122.9492058,
              49.1999461
            ],
            [
              -122.9489089,
              49.2000224
            ],
            [
              -122.9489001,
              49.2000063
            ],
            [
              -122.9488904,
              49.1999885
            ],
            [
              -122.948838,
              49.2000019
            ],
            [
              -122.948858,
              49.2000352
            ],
            [
              -122.94823,
              49.2001963
            ],
            [
              -122.9482438,
              49.2002192
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87222355",
      "properties": {
        "@id": "way/87222355",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "bridge": "yes",
        "check_date": "2025-10-23",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "layer": "2",
        "level": "2",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "1",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.9482717,
              49.200275
            ],
            [
              -122.9482856,
              49.2002984
            ],
            [
              -122.948921,
              49.2001351
            ],
            [
              -122.948943,
              49.2001702
            ],
            [
              -122.9489824,
              49.2001601
            ],
            [
              -122.9489769,
              49.2001504
            ],
            [
              -122.9489693,
              49.2001372
            ],
            [
              -122.9489619,
              49.2001243
            ],
            [
              -122.9492652,
              49.2000478
            ],
            [
              -122.9492855,
              49.2000822
            ],
            [
              -122.94933,
              49.2000708
            ],
            [
              -122.9493202,
              49.2000533
            ],
            [
              -122.9493105,
              49.2000361
            ],
            [
              -122.9493454,
              49.2000271
            ],
            [
              -122.949333,
              49.2000065
            ],
            [
              -122.9482717,
              49.200275
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87222474",
      "properties": {
        "@id": "way/87222474",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "check_date": "2025-10-23",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "layer": "4",
        "level": "4",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "1",
        "source": "bing",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.9131556,
              49.2011817
            ],
            [
              -122.912278,
              49.2016531
            ],
            [
              -122.9123045,
              49.2016742
            ],
            [
              -122.9127698,
              49.2014314
            ],
            [
              -122.9128204,
              49.2014721
            ],
            [
              -122.9130936,
              49.2013315
            ],
            [
              -122.9130503,
              49.201297
            ],
            [
              -122.9131978,
              49.2012153
            ],
            [
              -122.9131767,
              49.201199
            ],
            [
              -122.9131556,
              49.2011817
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87222475",
      "properties": {
        "@id": "way/87222475",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "check_date": "2025-10-23",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "layer": "4",
        "level": "4",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "2",
        "source": "bing",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.9131026,
              49.2011402
            ],
            [
              -122.9130754,
              49.2011194
            ],
            [
              -122.9130308,
              49.2010839
            ],
            [
              -122.9128171,
              49.2012006
            ],
            [
              -122.9128655,
              49.2012388
            ],
            [
              -122.9122002,
              49.2015913
            ],
            [
              -122.9122268,
              49.201613
            ],
            [
              -122.9131026,
              49.2011402
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87222575",
      "properties": {
        "@id": "way/87222575",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "check_date": "2025-10-18",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "indoor": "no",
        "level": "0",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "1",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.958858,
              49.2116707
            ],
            [
              -122.9588199,
              49.2116827
            ],
            [
              -122.958955,
              49.2118662
            ],
            [
              -122.9590536,
              49.2120001
            ],
            [
              -122.9591432,
              49.2121219
            ],
            [
              -122.9591909,
              49.2121868
            ],
            [
              -122.959235,
              49.2122467
            ],
            [
              -122.959291,
              49.2123228
            ],
            [
              -122.9593291,
              49.2123108
            ],
            [
              -122.9592683,
              49.2122282
            ],
            [
              -122.9592441,
              49.2121954
            ],
            [
              -122.9589923,
              49.2118532
            ],
            [
              -122.958858,
              49.2116707
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87222576",
      "properties": {
        "@id": "way/87222576",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "check_date": "2025-10-18",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "indoor": "no",
        "level": "0",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "2",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.9589437,
              49.2116486
            ],
            [
              -122.9590729,
              49.2118295
            ],
            [
              -122.9593181,
              49.2121727
            ],
            [
              -122.9593416,
              49.2122057
            ],
            [
              -122.9594031,
              49.2122918
            ],
            [
              -122.9594427,
              49.2122797
            ],
            [
              -122.9594142,
              49.2122398
            ],
            [
              -122.9593952,
              49.2122132
            ],
            [
              -122.9592748,
              49.2120447
            ],
            [
              -122.9592647,
              49.2120306
            ],
            [
              -122.9591129,
              49.2118182
            ],
            [
              -122.9589831,
              49.2116366
            ],
            [
              -122.9589437,
              49.2116486
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87222660",
      "properties": {
        "@id": "way/87222660",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "bridge": "yes",
        "check_date": "2025-10-15",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "layer": "2",
        "level": "1",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "shelter": "yes",
        "source": "bing",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -123.0561426,
              49.2483081
            ],
            [
              -123.0561165,
              49.2482973
            ],
            [
              -123.0560847,
              49.2483292
            ],
            [
              -123.0559931,
              49.2482923
            ],
            [
              -123.05586,
              49.2482372
            ],
            [
              -123.0558917,
              49.2482045
            ],
            [
              -123.0557796,
              49.2481591
            ],
            [
              -123.0557503,
              49.24819
            ],
            [
              -123.0554143,
              49.248052
            ],
            [
              -123.0553945,
              49.2480725
            ],
            [
              -123.0561128,
              49.2483676
            ],
            [
              -123.0561318,
              49.2483484
            ],
            [
              -123.0561112,
              49.2483399
            ],
            [
              -123.0561285,
              49.2483225
            ],
            [
              -123.0561426,
              49.2483081
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87222661",
      "properties": {
        "@id": "way/87222661",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "bridge": "yes",
        "check_date": "2025-10-15",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "layer": "2",
        "level": "1",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "shelter": "yes",
        "source": "bing",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -123.0559751,
              49.2484519
            ],
            [
              -123.0559913,
              49.2484584
            ],
            [
              -123.0559986,
              49.2484614
            ],
            [
              -123.0560107,
              49.2484484
            ],
            [
              -123.056027,
              49.2484312
            ],
            [
              -123.0560447,
              49.2484381
            ],
            [
              -123.0560651,
              49.2484171
            ],
            [
              -123.0553468,
              49.248122
            ],
            [
              -123.055327,
              49.2481425
            ],
            [
              -123.0556631,
              49.2482806
            ],
            [
              -123.0556335,
              49.2483113
            ],
            [
              -123.0557498,
              49.2483583
            ],
            [
              -123.0557781,
              49.248328
            ],
            [
              -123.0559064,
              49.2483813
            ],
            [
              -123.0560039,
              49.248422
            ],
            [
              -123.0559751,
              49.2484519
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87223070",
      "properties": {
        "@id": "way/87223070",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "bridge": "yes",
        "check_date": "2025-10-23",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "indoor": "no",
        "layer": "2",
        "level": "2",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "start_date": "2002-01-05",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.8828496,
              49.233666
            ],
            [
              -122.8827007,
              49.23298
            ],
            [
              -122.8826539,
              49.2329847
            ],
            [
              -122.8827087,
              49.2332354
            ],
            [
              -122.8828038,
              49.23367
            ],
            [
              -122.8828496,
              49.233666
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87223071",
      "properties": {
        "@id": "way/87223071",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "bridge": "yes",
        "check_date": "2025-10-23",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "indoor": "no",
        "layer": "2",
        "level": "2",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "start_date": "2002-01-05",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.882992,
              49.2336525
            ],
            [
              -122.8829354,
              49.2334022
            ],
            [
              -122.8828989,
              49.2332407
            ],
            [
              -122.8828376,
              49.2329698
            ],
            [
              -122.8827938,
              49.2329744
            ],
            [
              -122.8829493,
              49.2336564
            ],
            [
              -122.882992,
              49.2336525
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87223387",
      "properties": {
        "@id": "way/87223387",
        "area": "yes",
        "bicycle": "designated",
        "check_date": "2025-10-15",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "layer": "-2",
        "level": "-2",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "2",
        "source": "bing",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -123.1120388,
              49.2861032
            ],
            [
              -123.1120232,
              49.2861192
            ],
            [
              -123.1120307,
              49.2861223
            ],
            [
              -123.1120196,
              49.2861339
            ],
            [
              -123.1129459,
              49.2865109
            ],
            [
              -123.1129726,
              49.2864829
            ],
            [
              -123.1120388,
              49.2861032
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/551326985",
      "properties": {
        "@id": "way/551326985",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "check_date": "2025-10-23",
        "check_date:bench": "2025-04-23",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "indoor": "no",
        "layer": "-1",
        "level": "-1",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "2",
        "start_date": "1989-02-14",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.9059374,
              49.2048801
            ],
            [
              -122.906614,
              49.2045558
            ],
            [
              -122.9065993,
              49.2045426
            ],
            [
              -122.9061721,
              49.204745
            ],
            [
              -122.9059313,
              49.204859
            ],
            [
              -122.9059195,
              49.2048646
            ],
            [
              -122.9059374,
              49.2048801
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/551326986",
      "properties": {
        "@id": "way/551326986",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "check_date": "2025-10-23",
        "check_date:bench": "2025-04-23",
        "covered": "yes",
        "departures_board": "timetable",
        "foot": "designated",
        "indoor": "no",
        "layer": "-1",
        "level": "-1",
        "lit": "yes",
        "network": "TransLink",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "1",
        "start_date": "1989-02-14",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -122.9066542,
              49.2045959
            ],
            [
              -122.9063133,
              49.2047579
            ],
            [
              -122.905978,
              49.2049172
            ],
            [
              -122.9059933,
              49.2049307
            ],
            [
              -122.9060093,
              49.2049231
            ],
            [
              -122.9062492,
              49.2048085
            ],
            [
              -122.9066676,
              49.2046088
            ],
            [
              -122.9066542,
              49.2045959
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/551342757",
      "properties": {
        "@id": "way/551342757",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "check_date": "2025-10-15",
        "departures_board": "realtime",
        "description": "Granville Outbound",
        "fixme": "location approximate",
        "foot": "designated",
        "indoor": "yes",
        "layer": "-3",
        "level": "-3",
        "lit": "yes",
        "location": "underground",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "2",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -123.1151687,
              49.2828781
            ],
            [
              -123.1160658,
              49.2834526
            ],
            [
              -123.1160999,
              49.28343
            ],
            [
              -123.1152027,
              49.2828555
            ],
            [
              -123.1151687,
              49.2828781
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/667980382",
      "properties": {
        "@id": "way/667980382",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "bridge": "yes",
        "check_date": "2025-10-15",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "layer": "1",
        "level": "1",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "railway:ref": "BWS",
        "ref": "5",
        "shelter": "yes",
        "start_date": "2019-02-02",
        "subway": "yes",
        "surface": "paving_stones",
        "surveillance": "yes",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -123.0690484,
              49.261459
            ],
            [
              -123.0689267,
              49.2614589
            ],
            [
              -123.068914,
              49.2621583
            ],
            [
              -123.0689127,
              49.2621981
            ],
            [
              -123.0689563,
              49.2621985
            ],
            [
              -123.0689925,
              49.2621989
            ],
            [
              -123.0690291,
              49.2621992
            ],
            [
              -123.0690368,
              49.2621992
            ],
            [
              -123.0690484,
              49.261459
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/783525511",
      "properties": {
        "@id": "way/783525511",
        "area": "yes",
        "bicycle": "designated",
        "check_date": "2025-10-15",
        "covered": "yes",
        "departures_board": "realtime",
        "foot": "designated",
        "layer": "-2",
        "level": "-2",
        "lit": "yes",
        "network": "TransLink",
        "network:short": "TL",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "1",
        "source": "bing",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -123.112999,
              49.2864553
            ],
            [
              -123.1120727,
              49.2860784
            ],
            [
              -123.1120671,
              49.2860846
            ],
            [
              -123.1120597,
              49.2860817
            ],
            [
              -123.1120388,
              49.2861032
            ],
            [
              -123.1129726,
              49.2864829
            ],
            [
              -123.112999,
              49.2864553
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923508924",
      "properties": {
        "@id": "way/923508924",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "check_date": "2025-10-15",
        "departures_board": "realtime",
        "fixme": "location approximate",
        "foot": "designated",
        "indoor": "yes",
        "layer": "-3",
        "level": "-3",
        "lit": "yes",
        "location": "underground",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "2",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -123.1189969,
              49.2852438
            ],
            [
              -123.119898,
              49.2858156
            ],
            [
              -123.1199319,
              49.2857929
            ],
            [
              -123.1190307,
              49.285221
            ],
            [
              -123.1189969,
              49.2852438
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923508925",
      "properties": {
        "@id": "way/923508925",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "bin": "yes",
        "check_date": "2025-10-15",
        "departures_board": "realtime",
        "fixme": "location approximate",
        "foot": "designated",
        "indoor": "yes",
        "layer": "-2",
        "level": "-2",
        "lit": "yes",
        "location": "underground",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "1",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -123.1189965,
              49.2852434
            ],
            [
              -123.1198976,
              49.2858153
            ],
            [
              -123.1199314,
              49.2857925
            ],
            [
              -123.1190303,
              49.2852207
            ],
            [
              -123.1189965,
              49.2852434
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923508926",
      "properties": {
        "@id": "way/923508926",
        "area": "yes",
        "bench": "yes",
        "bicycle": "designated",
        "check_date": "2025-10-16",
        "departures_board": "realtime",
        "description": "Granville inbound",
        "fixme": "location approximate",
        "foot": "designated",
        "indoor": "yes",
        "layer": "-2",
        "level": "-2",
        "lit": "yes",
        "location": "underground",
        "network": "TransLink",
        "network:short": "TL",
        "network:wikidata": "Q1142140",
        "not:network:wikidata": "Q1675085",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "public_transport": "platform",
        "railway": "platform",
        "ref": "1",
        "start_date": "1986-01-03",
        "subway": "yes",
        "surface": "paving_stones",
        "tactile_paving": "yes",
        "wheelchair": "yes"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -123.1151682,
              49.282879
            ],
            [
              -123.1160654,
              49.2834535
            ],
            [
              -123.1160994,
              49.2834309
            ],
            [
              -123.1152023,
              49.2828563
            ],
            [
              -123.1151682,
              49.282879
            ]
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/23424471",
      "properties": {
        "@id": "way/23424471",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-1",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-01-05",
        "tunnel": "yes",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8972903,
            49.2111236
          ],
          [
            -122.8980812,
            49.2105554
          ],
          [
            -122.8988201,
            49.2099604
          ],
          [
            -122.8989816,
            49.2098199
          ],
          [
            -122.8993682,
            49.2094834
          ],
          [
            -122.9013629,
            49.2073637
          ],
          [
            -122.9015087,
            49.2072164
          ],
          [
            -122.9017636,
            49.2069864
          ],
          [
            -122.9019668,
            49.206826
          ],
          [
            -122.9021434,
            49.2067208
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/23424474",
      "properties": {
        "@id": "way/23424474",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "25",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-01-05",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9021434,
            49.2067208
          ],
          [
            -122.9023951,
            49.2065975
          ],
          [
            -122.9028478,
            49.2064294
          ],
          [
            -122.9030863,
            49.2063345
          ],
          [
            -122.9033364,
            49.206225
          ],
          [
            -122.9037144,
            49.2060345
          ],
          [
            -122.904073,
            49.2058171
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/23424486",
      "properties": {
        "@id": "way/23424486",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1990-03-16",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.904045,
            49.2057921
          ],
          [
            -122.903553,
            49.206043
          ],
          [
            -122.9030896,
            49.2062598
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/36761350",
      "properties": {
        "@id": "way/36761350",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0691635,
            49.2568229
          ],
          [
            -123.0691634,
            49.2567211
          ],
          [
            -123.0691601,
            49.256569
          ],
          [
            -123.0691497,
            49.2564172
          ],
          [
            -123.0691408,
            49.2563266
          ],
          [
            -123.0691288,
            49.2562404
          ],
          [
            -123.0691071,
            49.2561308
          ],
          [
            -123.0690654,
            49.2559836
          ],
          [
            -123.0690017,
            49.2557637
          ],
          [
            -123.0689231,
            49.2555893
          ],
          [
            -123.068824,
            49.2553898
          ],
          [
            -123.0687386,
            49.2552287
          ],
          [
            -123.0686014,
            49.2550323
          ],
          [
            -123.0684528,
            49.2548451
          ],
          [
            -123.0682901,
            49.2546659
          ],
          [
            -123.0681298,
            49.2545026
          ],
          [
            -123.0674847,
            49.2539986
          ],
          [
            -123.0661173,
            49.2529506
          ],
          [
            -123.0657192,
            49.2526503
          ],
          [
            -123.0652955,
            49.2523436
          ],
          [
            -123.0648618,
            49.2520681
          ],
          [
            -123.0642939,
            49.2517773
          ],
          [
            -123.0634974,
            49.25143
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/36761358",
      "properties": {
        "@id": "way/36761358",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-2",
        "maxspeed": "60",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "covered",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1122005,
            49.2862207
          ],
          [
            -123.112959,
            49.2865308
          ],
          [
            -123.115285,
            49.2873844
          ],
          [
            -123.1157838,
            49.2875671
          ],
          [
            -123.1159034,
            49.2876127
          ],
          [
            -123.11603,
            49.2876476
          ],
          [
            -123.1170394,
            49.2878921
          ],
          [
            -123.1173379,
            49.2879588
          ],
          [
            -123.117876,
            49.2880462
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/37121745",
      "properties": {
        "@id": "way/37121745",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-1",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "yes",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9588449,
            49.211555
          ],
          [
            -122.9579474,
            49.210321
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/37121814",
      "properties": {
        "@id": "way/37121814",
        "bridge": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9584955,
            49.2048686
          ],
          [
            -122.9585998,
            49.2047271
          ],
          [
            -122.9586712,
            49.2046068
          ],
          [
            -122.9587253,
            49.2045038
          ],
          [
            -122.9587751,
            49.2043928
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/37122094",
      "properties": {
        "@id": "way/37122094",
        "bridge": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-01-05",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8947319,
            49.2133175
          ],
          [
            -122.895051,
            49.2128545
          ],
          [
            -122.8952462,
            49.2126608
          ],
          [
            -122.8955472,
            49.2123875
          ],
          [
            -122.8963708,
            49.2117796
          ],
          [
            -122.8972903,
            49.2111236
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/37226895",
      "properties": {
        "@id": "way/37226895",
        "bridge": "yes",
        "bridge:name": "SkyBridge",
        "bridge:structure": "cable-stayed",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1990-03-16",
        "usage": "main",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.901245,
            49.2065317
          ],
          [
            -122.9009642,
            49.2064989
          ],
          [
            -122.9006969,
            49.2064491
          ],
          [
            -122.9003992,
            49.2063794
          ],
          [
            -122.8983681,
            49.2058823
          ],
          [
            -122.8939809,
            49.204818
          ],
          [
            -122.8921805,
            49.2043924
          ],
          [
            -122.8914795,
            49.2042261
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/37226896",
      "properties": {
        "@id": "way/37226896",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1994-03-28",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8689062,
            49.2052194
          ],
          [
            -122.8660935,
            49.2059416
          ],
          [
            -122.8638451,
            49.2065163
          ],
          [
            -122.8622691,
            49.2069078
          ],
          [
            -122.8617124,
            49.207015
          ],
          [
            -122.8614868,
            49.2070492
          ],
          [
            -122.861235,
            49.2070833
          ],
          [
            -122.8610186,
            49.2071079
          ],
          [
            -122.8606857,
            49.2071238
          ],
          [
            -122.8603079,
            49.2071279
          ],
          [
            -122.8599643,
            49.2071199
          ],
          [
            -122.8595697,
            49.207088
          ],
          [
            -122.8590088,
            49.2070146
          ],
          [
            -122.8585861,
            49.2069232
          ],
          [
            -122.8581051,
            49.2067855
          ],
          [
            -122.8574932,
            49.2065642
          ],
          [
            -122.856865,
            49.2062733
          ],
          [
            -122.8566081,
            49.2061279
          ],
          [
            -122.8534982,
            49.2040804
          ],
          [
            -122.8526482,
            49.2035237
          ],
          [
            -122.8518338,
            49.2029712
          ],
          [
            -122.85148,
            49.2027029
          ],
          [
            -122.8510681,
            49.2022626
          ],
          [
            -122.8509194,
            49.2020443
          ],
          [
            -122.8508234,
            49.2018556
          ],
          [
            -122.8507346,
            49.2015482
          ],
          [
            -122.8506957,
            49.2013712
          ],
          [
            -122.8506748,
            49.2012596
          ],
          [
            -122.8506648,
            49.2011578
          ],
          [
            -122.8506558,
            49.2009496
          ],
          [
            -122.8506765,
            49.1989111
          ],
          [
            -122.850681,
            49.1983759
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/41841673",
      "properties": {
        "@id": "way/41841673",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9579474,
            49.210321
          ],
          [
            -122.9577156,
            49.2099919
          ],
          [
            -122.9575392,
            49.2097479
          ],
          [
            -122.957238,
            49.2093406
          ],
          [
            -122.9569718,
            49.2089714
          ],
          [
            -122.9568673,
            49.2088164
          ],
          [
            -122.9568198,
            49.2087406
          ],
          [
            -122.9567764,
            49.2086623
          ],
          [
            -122.9567337,
            49.2085751
          ],
          [
            -122.9566995,
            49.2084978
          ],
          [
            -122.9566716,
            49.208421
          ],
          [
            -122.9566467,
            49.2083417
          ],
          [
            -122.9566267,
            49.2082626
          ],
          [
            -122.9566101,
            49.2081756
          ],
          [
            -122.9566002,
            49.2080919
          ],
          [
            -122.9565915,
            49.208006
          ],
          [
            -122.9565904,
            49.2079309
          ],
          [
            -122.9565934,
            49.2078405
          ],
          [
            -122.956601,
            49.2077541
          ],
          [
            -122.9566141,
            49.2076687
          ],
          [
            -122.9566322,
            49.2075802
          ],
          [
            -122.9566563,
            49.2074951
          ],
          [
            -122.9566904,
            49.207395
          ],
          [
            -122.9567261,
            49.2073045
          ],
          [
            -122.9567737,
            49.207207
          ],
          [
            -122.9568229,
            49.2071177
          ],
          [
            -122.9568831,
            49.2070234
          ],
          [
            -122.9569456,
            49.2069314
          ],
          [
            -122.9570252,
            49.2068192
          ],
          [
            -122.9584955,
            49.2048686
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/46865560",
      "properties": {
        "@id": "way/46865560",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "85",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9422167,
            49.20125
          ],
          [
            -122.9419324,
            49.2012994
          ],
          [
            -122.9417623,
            49.2013327
          ],
          [
            -122.9415331,
            49.2013857
          ],
          [
            -122.9413547,
            49.2014335
          ],
          [
            -122.9411773,
            49.2014905
          ],
          [
            -122.940982,
            49.2015595
          ],
          [
            -122.9406839,
            49.2016798
          ],
          [
            -122.9400496,
            49.2019549
          ],
          [
            -122.9393485,
            49.2022532
          ],
          [
            -122.9387616,
            49.20248
          ],
          [
            -122.9381941,
            49.2026717
          ],
          [
            -122.9371373,
            49.2030109
          ],
          [
            -122.9354957,
            49.2035279
          ],
          [
            -122.9350561,
            49.203644
          ],
          [
            -122.9346572,
            49.2037285
          ],
          [
            -122.9343548,
            49.203774
          ],
          [
            -122.9340449,
            49.2038006
          ],
          [
            -122.9337878,
            49.2038109
          ],
          [
            -122.9335148,
            49.2038094
          ],
          [
            -122.933144,
            49.2037946
          ],
          [
            -122.9327983,
            49.2037641
          ],
          [
            -122.9316676,
            49.2036364
          ],
          [
            -122.9305325,
            49.2035107
          ],
          [
            -122.9295106,
            49.2033979
          ],
          [
            -122.9289534,
            49.2033264
          ],
          [
            -122.9286319,
            49.2032754
          ],
          [
            -122.9281686,
            49.2031703
          ],
          [
            -122.9278,
            49.20305
          ],
          [
            -122.9274196,
            49.2028776
          ],
          [
            -122.9271054,
            49.2026894
          ],
          [
            -122.9267655,
            49.2024444
          ],
          [
            -122.9264392,
            49.2021887
          ],
          [
            -122.9259218,
            49.201778
          ],
          [
            -122.9255759,
            49.2015235
          ],
          [
            -122.9251794,
            49.201284
          ],
          [
            -122.9247427,
            49.2010912
          ],
          [
            -122.9243274,
            49.2009655
          ],
          [
            -122.923875,
            49.2008558
          ],
          [
            -122.9227357,
            49.200648
          ],
          [
            -122.9218332,
            49.2004889
          ],
          [
            -122.9213947,
            49.2004083
          ],
          [
            -122.9209076,
            49.2003307
          ],
          [
            -122.9204877,
            49.2002867
          ],
          [
            -122.918719,
            49.200168
          ],
          [
            -122.9170761,
            49.2000646
          ],
          [
            -122.9167185,
            49.200041
          ],
          [
            -122.916342,
            49.2000345
          ],
          [
            -122.915955,
            49.2000439
          ],
          [
            -122.9155246,
            49.2000987
          ],
          [
            -122.9153536,
            49.2001335
          ],
          [
            -122.9150927,
            49.2001965
          ],
          [
            -122.914897,
            49.2002615
          ],
          [
            -122.9145174,
            49.2004079
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/46865581",
      "properties": {
        "@id": "way/46865581",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9588269,
            49.2028699
          ],
          [
            -122.9588052,
            49.2027412
          ],
          [
            -122.9587764,
            49.2026277
          ],
          [
            -122.9587179,
            49.2024516
          ],
          [
            -122.9585791,
            49.202118
          ],
          [
            -122.9585164,
            49.2020031
          ],
          [
            -122.9583931,
            49.2018092
          ],
          [
            -122.9583159,
            49.2017138
          ],
          [
            -122.9581032,
            49.2014651
          ],
          [
            -122.9577344,
            49.2011007
          ],
          [
            -122.9573576,
            49.2008075
          ],
          [
            -122.9570943,
            49.2006425
          ],
          [
            -122.9568642,
            49.2004953
          ],
          [
            -122.9565909,
            49.2003596
          ],
          [
            -122.9562402,
            49.2001938
          ],
          [
            -122.9558602,
            49.2000398
          ],
          [
            -122.9554724,
            49.1999041
          ],
          [
            -122.9550753,
            49.1997919
          ],
          [
            -122.9546704,
            49.19969
          ],
          [
            -122.954256,
            49.1996201
          ],
          [
            -122.9539281,
            49.1995703
          ],
          [
            -122.953687,
            49.1995424
          ],
          [
            -122.9532034,
            49.1995007
          ],
          [
            -122.9528076,
            49.1994836
          ],
          [
            -122.9524913,
            49.1994864
          ],
          [
            -122.9522076,
            49.1994927
          ],
          [
            -122.9519393,
            49.1995059
          ],
          [
            -122.9516815,
            49.1995222
          ],
          [
            -122.9513982,
            49.1995445
          ],
          [
            -122.9511239,
            49.1995772
          ],
          [
            -122.9508549,
            49.1996174
          ],
          [
            -122.9505919,
            49.1996644
          ],
          [
            -122.9502939,
            49.1997234
          ],
          [
            -122.9498839,
            49.1998217
          ],
          [
            -122.9494224,
            49.1999376
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/46865583",
      "properties": {
        "@id": "way/46865583",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9732983,
            49.2155175
          ],
          [
            -122.9727897,
            49.2153048
          ],
          [
            -122.9725341,
            49.2151984
          ],
          [
            -122.9722784,
            49.2151159
          ],
          [
            -122.9718887,
            49.2150059
          ],
          [
            -122.9714742,
            49.2149109
          ],
          [
            -122.9710089,
            49.2148411
          ],
          [
            -122.9706154,
            49.2148105
          ],
          [
            -122.9701441,
            49.214781
          ],
          [
            -122.9695292,
            49.2147737
          ],
          [
            -122.9689426,
            49.2147887
          ],
          [
            -122.9674852,
            49.2148281
          ],
          [
            -122.9660278,
            49.2148781
          ],
          [
            -122.963461,
            49.2149277
          ],
          [
            -122.962869,
            49.2149052
          ],
          [
            -122.9625032,
            49.2148615
          ],
          [
            -122.9621621,
            49.2147946
          ],
          [
            -122.961873,
            49.214717
          ],
          [
            -122.9616219,
            49.2146276
          ],
          [
            -122.9613711,
            49.214508
          ],
          [
            -122.9611381,
            49.2143742
          ],
          [
            -122.9609501,
            49.2142391
          ],
          [
            -122.960706,
            49.2140219
          ],
          [
            -122.9605015,
            49.2137994
          ],
          [
            -122.9598556,
            49.2129255
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/46865587",
      "properties": {
        "@id": "way/46865587",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0384727,
            49.2411099
          ],
          [
            -123.0372937,
            49.2405969
          ],
          [
            -123.0350522,
            49.2396837
          ],
          [
            -123.0332299,
            49.2389305
          ],
          [
            -123.0328184,
            49.2387647
          ],
          [
            -123.0318417,
            49.2383666
          ],
          [
            -123.0312567,
            49.2381236
          ],
          [
            -123.0307135,
            49.2379081
          ],
          [
            -123.0298075,
            49.2375643
          ],
          [
            -123.0281533,
            49.2367233
          ],
          [
            -123.026661,
            49.236022
          ],
          [
            -123.025526,
            49.2354937
          ],
          [
            -123.0241354,
            49.2348615
          ],
          [
            -123.0225546,
            49.2341323
          ],
          [
            -123.022119,
            49.2339508
          ],
          [
            -123.0208328,
            49.2334712
          ],
          [
            -123.0201542,
            49.2332034
          ],
          [
            -123.0173068,
            49.2319097
          ],
          [
            -123.0155451,
            49.2311085
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/51831873",
      "properties": {
        "@id": "way/51831873",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1990-03-16",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9042796,
            49.2056717
          ],
          [
            -122.904045,
            49.2057921
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/51831874",
      "properties": {
        "@id": "way/51831874",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-2",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1989-02-14",
        "tunnel": "yes",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9093219,
            49.2032018
          ],
          [
            -122.907732,
            49.2040022
          ],
          [
            -122.9062802,
            49.2047284
          ],
          [
            -122.9042796,
            49.2056717
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/63052565",
      "properties": {
        "@id": "way/63052565",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9598556,
            49.2129255
          ],
          [
            -122.959309,
            49.2121895
          ],
          [
            -122.9588449,
            49.211555
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/80676483",
      "properties": {
        "@id": "way/80676483",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9587751,
            49.2043928
          ],
          [
            -122.9588553,
            49.2041385
          ],
          [
            -122.9588847,
            49.2038687
          ],
          [
            -122.9588768,
            49.2035517
          ],
          [
            -122.9588662,
            49.2034019
          ],
          [
            -122.9588476,
            49.2030029
          ],
          [
            -122.9588269,
            49.2028699
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/83590063",
      "properties": {
        "@id": "way/83590063",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-01-05",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8846651,
            49.2369769
          ],
          [
            -122.884598,
            49.2369313
          ],
          [
            -122.8845155,
            49.2368718
          ],
          [
            -122.8844324,
            49.2368075
          ],
          [
            -122.8843605,
            49.236752
          ],
          [
            -122.8842739,
            49.236682
          ],
          [
            -122.8841789,
            49.2365987
          ],
          [
            -122.8840867,
            49.236511
          ],
          [
            -122.8840089,
            49.2364339
          ],
          [
            -122.8839526,
            49.2363735
          ],
          [
            -122.8838999,
            49.2363158
          ],
          [
            -122.8838458,
            49.2362524
          ],
          [
            -122.8838009,
            49.2361941
          ],
          [
            -122.8837395,
            49.2361136
          ],
          [
            -122.8836805,
            49.2360336
          ],
          [
            -122.8836486,
            49.2359863
          ],
          [
            -122.883609,
            49.2359269
          ],
          [
            -122.8835681,
            49.2358578
          ],
          [
            -122.8834958,
            49.2357283
          ],
          [
            -122.8834552,
            49.235651
          ],
          [
            -122.8834233,
            49.2355832
          ],
          [
            -122.8834034,
            49.2355341
          ],
          [
            -122.8833722,
            49.2354555
          ],
          [
            -122.8833496,
            49.2353924
          ],
          [
            -122.8833212,
            49.2353037
          ],
          [
            -122.8833013,
            49.2352387
          ],
          [
            -122.8832623,
            49.2350989
          ],
          [
            -122.8832362,
            49.2350001
          ],
          [
            -122.8832084,
            49.2348841
          ],
          [
            -122.8831829,
            49.2347721
          ],
          [
            -122.8830858,
            49.2343657
          ],
          [
            -122.8829446,
            49.2337428
          ],
          [
            -122.8828559,
            49.2333297
          ],
          [
            -122.8828044,
            49.2330992
          ],
          [
            -122.8826945,
            49.2326369
          ],
          [
            -122.8825873,
            49.2321861
          ],
          [
            -122.8825581,
            49.232057
          ],
          [
            -122.8825325,
            49.2319388
          ],
          [
            -122.882517,
            49.2318614
          ],
          [
            -122.8825079,
            49.2318086
          ],
          [
            -122.8824921,
            49.2317204
          ],
          [
            -122.8824849,
            49.2316398
          ],
          [
            -122.8824791,
            49.2315725
          ],
          [
            -122.8824778,
            49.2314688
          ],
          [
            -122.8824782,
            49.2314028
          ],
          [
            -122.8824807,
            49.2313354
          ],
          [
            -122.8824859,
            49.2312642
          ],
          [
            -122.8824931,
            49.2311971
          ],
          [
            -122.8825083,
            49.2310961
          ],
          [
            -122.8825353,
            49.2309736
          ],
          [
            -122.8825668,
            49.2308668
          ],
          [
            -122.8825913,
            49.2307976
          ],
          [
            -122.8826058,
            49.2307555
          ],
          [
            -122.8826216,
            49.230711
          ],
          [
            -122.8826565,
            49.2306255
          ],
          [
            -122.8827035,
            49.2305226
          ],
          [
            -122.8827307,
            49.2304715
          ],
          [
            -122.8827743,
            49.2303977
          ],
          [
            -122.8828193,
            49.230325
          ],
          [
            -122.8828532,
            49.2302704
          ],
          [
            -122.8829032,
            49.2301955
          ],
          [
            -122.8829653,
            49.2301125
          ],
          [
            -122.883008,
            49.2300604
          ],
          [
            -122.8830502,
            49.2300071
          ],
          [
            -122.8830929,
            49.2299569
          ],
          [
            -122.8831434,
            49.2299036
          ],
          [
            -122.8832019,
            49.2298442
          ],
          [
            -122.8832636,
            49.2297847
          ],
          [
            -122.8833075,
            49.2297442
          ],
          [
            -122.8833685,
            49.2296884
          ],
          [
            -122.8834279,
            49.2296343
          ],
          [
            -122.8835634,
            49.2295195
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87493028",
      "properties": {
        "@id": "way/87493028",
        "bridge": "yes",
        "bridge:structure": "beam",
        "disused": "subway",
        "disused:railway": "subway",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "name": "SkyTrain Expo Line",
        "opening_date": "2027-06",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "disused",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.894411,
            49.2470318
          ],
          [
            -122.8936227,
            49.2465896
          ],
          [
            -122.8933304,
            49.2464214
          ],
          [
            -122.89318,
            49.2462819
          ],
          [
            -122.8930493,
            49.2461169
          ],
          [
            -122.8929604,
            49.2459258
          ],
          [
            -122.8929265,
            49.2458093
          ],
          [
            -122.8929036,
            49.2456536
          ],
          [
            -122.8928917,
            49.245422
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/87493029",
      "properties": {
        "@id": "way/87493029",
        "bridge": "yes",
        "bridge:structure": "beam",
        "disused": "subway",
        "disused:railway": "subway",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "name": "SkyTrain Expo Line",
        "opening_date": "2027-06",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "disused",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8928917,
            49.245422
          ],
          [
            -122.8928556,
            49.2437496
          ],
          [
            -122.8928335,
            49.2428847
          ],
          [
            -122.8927887,
            49.2425785
          ],
          [
            -122.8927284,
            49.242355
          ],
          [
            -122.8925482,
            49.2420169
          ],
          [
            -122.8924905,
            49.2419173
          ],
          [
            -122.8924019,
            49.2417775
          ],
          [
            -122.8923024,
            49.2416433
          ],
          [
            -122.892185,
            49.2415165
          ],
          [
            -122.8920176,
            49.2413639
          ],
          [
            -122.8918439,
            49.241228
          ],
          [
            -122.8915938,
            49.2410563
          ],
          [
            -122.8913061,
            49.2408846
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/88774513",
      "properties": {
        "@id": "way/88774513",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "no",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.957237,
            49.2063732
          ],
          [
            -122.9570036,
            49.2066798
          ],
          [
            -122.9568388,
            49.2069021
          ],
          [
            -122.9567425,
            49.2070346
          ],
          [
            -122.9566785,
            49.207127
          ],
          [
            -122.9566296,
            49.2072041
          ],
          [
            -122.956581,
            49.2072929
          ],
          [
            -122.9565425,
            49.2073694
          ],
          [
            -122.9565077,
            49.207455
          ],
          [
            -122.9564754,
            49.2075423
          ],
          [
            -122.9564505,
            49.2076312
          ],
          [
            -122.9564312,
            49.2077213
          ],
          [
            -122.9564178,
            49.2078167
          ],
          [
            -122.9564112,
            49.2079206
          ],
          [
            -122.9564126,
            49.2080135
          ],
          [
            -122.9564205,
            49.2081114
          ],
          [
            -122.9564375,
            49.2082167
          ],
          [
            -122.9564591,
            49.2083105
          ],
          [
            -122.9564814,
            49.2083893
          ],
          [
            -122.9565119,
            49.2084669
          ],
          [
            -122.9565472,
            49.2085477
          ],
          [
            -122.9565902,
            49.208634
          ],
          [
            -122.9566449,
            49.2087245
          ],
          [
            -122.9566991,
            49.2088106
          ],
          [
            -122.9567565,
            49.2088884
          ],
          [
            -122.956925,
            49.2090985
          ],
          [
            -122.9571675,
            49.2093872
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/154646901",
      "properties": {
        "@id": "way/154646901",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0427777,
            49.2428812
          ],
          [
            -123.0384727,
            49.2411099
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/154646902",
      "properties": {
        "@id": "way/154646902",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0461076,
            49.2442265
          ],
          [
            -123.0458731,
            49.2441296
          ],
          [
            -123.0453903,
            49.2439246
          ],
          [
            -123.0449299,
            49.2437342
          ],
          [
            -123.0427777,
            49.2428812
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/312244690",
      "properties": {
        "@id": "way/312244690",
        "bridge": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "level": "3",
        "maxspeed": "60",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0066539,
            49.2270212
          ],
          [
            -123.0058424,
            49.2266622
          ],
          [
            -123.0050598,
            49.2262982
          ],
          [
            -123.0046637,
            49.2261188
          ],
          [
            -123.0041434,
            49.2258757
          ],
          [
            -123.0039065,
            49.2257663
          ],
          [
            -123.0038276,
            49.2257308
          ],
          [
            -123.0033027,
            49.2254948
          ],
          [
            -123.0031194,
            49.2254076
          ],
          [
            -123.0028602,
            49.2252875
          ],
          [
            -123.0025886,
            49.225157
          ],
          [
            -123.002459,
            49.2250887
          ],
          [
            -123.0018739,
            49.2247871
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/379234653",
      "properties": {
        "@id": "way/379234653",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-1",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "yes",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0473171,
            49.2447275
          ],
          [
            -123.0466378,
            49.2444437
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/379234656",
      "properties": {
        "@id": "way/379234656",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0532957,
            49.2472134
          ],
          [
            -123.0502142,
            49.2459304
          ],
          [
            -123.0481922,
            49.2450891
          ],
          [
            -123.0477364,
            49.244902
          ],
          [
            -123.0473171,
            49.2447275
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/379689170",
      "properties": {
        "@id": "way/379689170",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "65",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1060242,
            49.277836
          ],
          [
            -123.1061944,
            49.2778574
          ],
          [
            -123.1063052,
            49.2778756
          ],
          [
            -123.1063835,
            49.2778899
          ],
          [
            -123.1064629,
            49.2779066
          ],
          [
            -123.1065444,
            49.2779253
          ],
          [
            -123.1066128,
            49.2779419
          ],
          [
            -123.1067476,
            49.2779787
          ],
          [
            -123.1068816,
            49.2780211
          ],
          [
            -123.1069894,
            49.2780589
          ],
          [
            -123.1071031,
            49.2781009
          ],
          [
            -123.1072107,
            49.2781455
          ],
          [
            -123.1072938,
            49.2781845
          ],
          [
            -123.1074048,
            49.2782393
          ],
          [
            -123.1075043,
            49.2782929
          ],
          [
            -123.107589,
            49.278342
          ],
          [
            -123.1076796,
            49.2783977
          ],
          [
            -123.1079448,
            49.2785679
          ],
          [
            -123.108388,
            49.2788637
          ],
          [
            -123.1084426,
            49.2788993
          ],
          [
            -123.109242,
            49.2794219
          ],
          [
            -123.1096496,
            49.2796794
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/379690503",
      "properties": {
        "@id": "way/379690503",
        "bridge": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8953533,
            49.2476749
          ],
          [
            -122.895833,
            49.247937
          ],
          [
            -122.8968053,
            49.2484747
          ],
          [
            -122.8975814,
            49.2488969
          ],
          [
            -122.8977929,
            49.2489866
          ],
          [
            -122.8980274,
            49.2490664
          ],
          [
            -122.898356,
            49.2491805
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/379690504",
      "properties": {
        "@id": "way/379690504",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "name": "SkyTrain Expo and Millennium Lines",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.898501,
            49.2492336
          ],
          [
            -122.8990958,
            49.2494413
          ],
          [
            -122.899556,
            49.2496315
          ],
          [
            -122.9004944,
            49.2501283
          ],
          [
            -122.9009372,
            49.2503306
          ],
          [
            -122.9015834,
            49.2505713
          ],
          [
            -122.9023549,
            49.2508316
          ],
          [
            -122.9028869,
            49.250981
          ],
          [
            -122.9033241,
            49.2510878
          ],
          [
            -122.9039088,
            49.2512086
          ],
          [
            -122.9054287,
            49.2514357
          ],
          [
            -122.9063407,
            49.2515652
          ],
          [
            -122.9066608,
            49.2516235
          ],
          [
            -122.9073706,
            49.2517683
          ],
          [
            -122.9081029,
            49.2519294
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/379690565",
      "properties": {
        "@id": "way/379690565",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8846164,
            49.2370083
          ],
          [
            -122.8848657,
            49.2371756
          ],
          [
            -122.8850497,
            49.237297
          ],
          [
            -122.8852111,
            49.2373983
          ],
          [
            -122.8854981,
            49.2375675
          ],
          [
            -122.8862303,
            49.2380026
          ],
          [
            -122.8871988,
            49.238578
          ],
          [
            -122.8884911,
            49.2393161
          ],
          [
            -122.8891728,
            49.2397448
          ],
          [
            -122.8898196,
            49.2400833
          ],
          [
            -122.8901262,
            49.2402533
          ],
          [
            -122.8904627,
            49.2404505
          ],
          [
            -122.8912668,
            49.2409176
          ],
          [
            -122.8915583,
            49.241097
          ],
          [
            -122.8917957,
            49.2412566
          ],
          [
            -122.8919675,
            49.2413885
          ],
          [
            -122.8921289,
            49.2415341
          ],
          [
            -122.8922817,
            49.2417142
          ],
          [
            -122.892355,
            49.2418134
          ],
          [
            -122.892437,
            49.2419305
          ],
          [
            -122.8925184,
            49.2420657
          ],
          [
            -122.892667,
            49.2423593
          ],
          [
            -122.8927306,
            49.2425823
          ],
          [
            -122.8927692,
            49.2428875
          ],
          [
            -122.8927914,
            49.2437184
          ],
          [
            -122.8928093,
            49.2444951
          ],
          [
            -122.8928274,
            49.2454187
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/379842099",
      "properties": {
        "@id": "way/379842099",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "50",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1122977,
            49.2861531
          ],
          [
            -123.112088,
            49.2860676
          ],
          [
            -123.1115095,
            49.2858297
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/379898641",
      "properties": {
        "@id": "way/379898641",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-2",
        "maxspeed": "60",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "covered",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1178808,
            49.288026
          ],
          [
            -123.116595,
            49.2877188
          ],
          [
            -123.1161059,
            49.2876063
          ],
          [
            -123.1159924,
            49.287575
          ],
          [
            -123.1158491,
            49.2875323
          ],
          [
            -123.115768,
            49.2875022
          ],
          [
            -123.1140045,
            49.2868283
          ],
          [
            -123.1131147,
            49.2864884
          ],
          [
            -123.1122977,
            49.2861531
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/379898647",
      "properties": {
        "@id": "way/379898647",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "50",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.11171,
            49.2860202
          ],
          [
            -123.112021,
            49.2861459
          ],
          [
            -123.1122005,
            49.2862207
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/379898651",
      "properties": {
        "@id": "way/379898651",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "yes",
        "tunnel:name": "Dunsmuir Tunnel",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1097795,
            49.2797682
          ],
          [
            -123.1098703,
            49.279822
          ],
          [
            -123.1099299,
            49.2798525
          ],
          [
            -123.1099924,
            49.2798851
          ],
          [
            -123.1101149,
            49.2799499
          ],
          [
            -123.1102382,
            49.2800067
          ],
          [
            -123.1103341,
            49.2800435
          ],
          [
            -123.1104718,
            49.2800966
          ],
          [
            -123.1108166,
            49.2802073
          ],
          [
            -123.1109992,
            49.2802707
          ],
          [
            -123.1111515,
            49.2803397
          ],
          [
            -123.1113364,
            49.2804464
          ],
          [
            -123.1139513,
            49.2821323
          ],
          [
            -123.1160353,
            49.2834541
          ],
          [
            -123.1172607,
            49.2842311
          ],
          [
            -123.1174973,
            49.284381
          ],
          [
            -123.1190071,
            49.2852644
          ],
          [
            -123.1197805,
            49.2857621
          ],
          [
            -123.1201079,
            49.2859608
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/392377336",
      "properties": {
        "@id": "way/392377336",
        "bridge": "yes",
        "bridge:structure": "beam",
        "construction": "subway",
        "construction:electrified": "4th_rail",
        "construction:electrified:rail": "side",
        "construction:frequency": "0",
        "construction:railway": "subway",
        "construction:railway:ato": "uto",
        "construction:railway:cbtc": "IL",
        "construction:voltage": "600",
        "gauge": "1435",
        "layer": "2",
        "name": "SkyTrain Expo Line",
        "opening_date": "2027-06",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "construction",
        "start_date": "2002-08-31"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8913061,
            49.2408846
          ],
          [
            -122.8900817,
            49.2401655
          ],
          [
            -122.8885861,
            49.2392655
          ],
          [
            -122.8871346,
            49.2384241
          ],
          [
            -122.886868,
            49.238261
          ],
          [
            -122.8863229,
            49.2379405
          ],
          [
            -122.8856481,
            49.2375427
          ],
          [
            -122.8852457,
            49.2373145
          ],
          [
            -122.8850461,
            49.2372067
          ],
          [
            -122.8849444,
            49.2371477
          ],
          [
            -122.8847677,
            49.2370381
          ],
          [
            -122.8846651,
            49.2369769
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/425639371",
      "properties": {
        "@id": "way/425639371",
        "bridge": "yes",
        "bridge:name": "SkyBridge",
        "bridge:structure": "cable-stayed",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1990-03-16",
        "usage": "main",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8914546,
            49.2042714
          ],
          [
            -122.892155,
            49.2044371
          ],
          [
            -122.893959,
            49.2048756
          ],
          [
            -122.898341,
            49.2059351
          ],
          [
            -122.9003731,
            49.2064261
          ],
          [
            -122.9006693,
            49.2064932
          ],
          [
            -122.9009446,
            49.2065455
          ],
          [
            -122.9012454,
            49.2065793
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/425639374",
      "properties": {
        "@id": "way/425639374",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1989-02-14",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9093529,
            49.2032294
          ],
          [
            -122.9094878,
            49.2031607
          ],
          [
            -122.909688,
            49.2030509
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/425639376",
      "properties": {
        "@id": "way/425639376",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9583979,
            49.2048245
          ],
          [
            -122.958094,
            49.205234
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/425639377",
      "properties": {
        "@id": "way/425639377",
        "bridge": "viaduct",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1994-03-28",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8405763,
            49.1812071
          ],
          [
            -122.8418918,
            49.1817041
          ],
          [
            -122.8433116,
            49.1822397
          ],
          [
            -122.843934,
            49.1824901
          ],
          [
            -122.8440413,
            49.1825333
          ],
          [
            -122.844639,
            49.1827792
          ],
          [
            -122.845253,
            49.1830259
          ],
          [
            -122.8456905,
            49.1832066
          ],
          [
            -122.8459151,
            49.1832964
          ],
          [
            -122.846173,
            49.1834066
          ],
          [
            -122.846366,
            49.1835057
          ],
          [
            -122.8464968,
            49.1835896
          ],
          [
            -122.8465801,
            49.183656
          ],
          [
            -122.8466863,
            49.1837504
          ],
          [
            -122.8467609,
            49.1838318
          ],
          [
            -122.8468111,
            49.1838947
          ],
          [
            -122.8468539,
            49.1839607
          ],
          [
            -122.8469062,
            49.1840501
          ],
          [
            -122.8469394,
            49.1841257
          ],
          [
            -122.8469758,
            49.1842293
          ],
          [
            -122.8469921,
            49.1842954
          ],
          [
            -122.8470099,
            49.1844123
          ],
          [
            -122.8470177,
            49.1845255
          ],
          [
            -122.8470219,
            49.1847564
          ],
          [
            -122.847013,
            49.1855717
          ],
          [
            -122.8469943,
            49.1865692
          ],
          [
            -122.847005,
            49.1868935
          ],
          [
            -122.8470613,
            49.1871442
          ],
          [
            -122.8471418,
            49.1873633
          ],
          [
            -122.8472208,
            49.1874923
          ],
          [
            -122.8473805,
            49.1877332
          ],
          [
            -122.8475414,
            49.1879769
          ],
          [
            -122.8476352,
            49.1881339
          ],
          [
            -122.8477265,
            49.1883363
          ],
          [
            -122.8477739,
            49.1885118
          ],
          [
            -122.847804,
            49.1887141
          ],
          [
            -122.8478069,
            49.1889923
          ],
          [
            -122.8478013,
            49.1891612
          ],
          [
            -122.847795,
            49.1895198
          ],
          [
            -122.8477882,
            49.1899122
          ],
          [
            -122.8477718,
            49.1907844
          ],
          [
            -122.8477852,
            49.1910684
          ],
          [
            -122.8478177,
            49.1913426
          ],
          [
            -122.8478633,
            49.1915039
          ],
          [
            -122.8478986,
            49.1916028
          ],
          [
            -122.8479545,
            49.1917809
          ],
          [
            -122.8480561,
            49.1919799
          ],
          [
            -122.8482468,
            49.1922261
          ],
          [
            -122.8486328,
            49.192625
          ],
          [
            -122.8493651,
            49.1932525
          ],
          [
            -122.8500142,
            49.1938046
          ],
          [
            -122.8501566,
            49.1939579
          ],
          [
            -122.8502824,
            49.1941026
          ],
          [
            -122.850367,
            49.1942109
          ],
          [
            -122.850446,
            49.1943462
          ],
          [
            -122.8504916,
            49.1944532
          ],
          [
            -122.8505452,
            49.1945969
          ],
          [
            -122.8505908,
            49.1947967
          ],
          [
            -122.8506018,
            49.1949588
          ],
          [
            -122.8505796,
            49.1962593
          ],
          [
            -122.8505749,
            49.1965363
          ],
          [
            -122.8505462,
            49.1971565
          ],
          [
            -122.850547,
            49.1974623
          ],
          [
            -122.850546,
            49.1975888
          ],
          [
            -122.8505372,
            49.1984687
          ],
          [
            -122.8505437,
            49.1989111
          ],
          [
            -122.8505509,
            49.1994036
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/425639378",
      "properties": {
        "@id": "way/425639378",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9586903,
            49.2028863
          ],
          [
            -122.9587102,
            49.203162
          ],
          [
            -122.9587227,
            49.2034248
          ],
          [
            -122.9587341,
            49.2036893
          ],
          [
            -122.9587322,
            49.2038826
          ],
          [
            -122.9587219,
            49.2040144
          ],
          [
            -122.958699,
            49.2041604
          ],
          [
            -122.9586722,
            49.2042669
          ],
          [
            -122.9586451,
            49.2043563
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/425639381",
      "properties": {
        "@id": "way/425639381",
        "bridge": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9586451,
            49.2043563
          ],
          [
            -122.9586034,
            49.2044672
          ],
          [
            -122.9585581,
            49.2045614
          ],
          [
            -122.9585109,
            49.2046487
          ],
          [
            -122.9584474,
            49.2047503
          ],
          [
            -122.9583979,
            49.2048245
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/425639382",
      "properties": {
        "@id": "way/425639382",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1989-02-14",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9096504,
            49.2030223
          ],
          [
            -122.9094522,
            49.203132
          ],
          [
            -122.9093219,
            49.2032018
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/425639383",
      "properties": {
        "@id": "way/425639383",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1990-03-16",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.904073,
            49.2058171
          ],
          [
            -122.904191,
            49.2057592
          ],
          [
            -122.9043065,
            49.2057015
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/425639384",
      "properties": {
        "@id": "way/425639384",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-2",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1989-02-14",
        "tunnel": "yes",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9043065,
            49.2057015
          ],
          [
            -122.9063133,
            49.2047579
          ],
          [
            -122.9067002,
            49.2045649
          ],
          [
            -122.907335,
            49.2042433
          ],
          [
            -122.9078214,
            49.2039971
          ],
          [
            -122.9093529,
            49.2032294
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/425639387",
      "properties": {
        "@id": "way/425639387",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "85",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9145479,
            49.2004372
          ],
          [
            -122.9147866,
            49.2003405
          ],
          [
            -122.9150765,
            49.2002432
          ],
          [
            -122.9153027,
            49.2001845
          ],
          [
            -122.9156423,
            49.2001176
          ],
          [
            -122.9159768,
            49.2000819
          ],
          [
            -122.9163435,
            49.2000695
          ],
          [
            -122.9167192,
            49.200076
          ],
          [
            -122.9178287,
            49.2001463
          ],
          [
            -122.9191375,
            49.2002291
          ],
          [
            -122.9204924,
            49.2003198
          ],
          [
            -122.9209032,
            49.200366
          ],
          [
            -122.9213865,
            49.2004437
          ],
          [
            -122.9218663,
            49.200526
          ],
          [
            -122.9226166,
            49.2006638
          ],
          [
            -122.9238787,
            49.2008926
          ],
          [
            -122.9243242,
            49.2009983
          ],
          [
            -122.9247124,
            49.2011219
          ],
          [
            -122.9249223,
            49.2012092
          ],
          [
            -122.9251531,
            49.2013159
          ],
          [
            -122.9255262,
            49.2015387
          ],
          [
            -122.9258874,
            49.201803
          ],
          [
            -122.9266013,
            49.2023704
          ],
          [
            -122.9270982,
            49.2027397
          ],
          [
            -122.9273609,
            49.202888
          ],
          [
            -122.9275219,
            49.2029553
          ],
          [
            -122.9277365,
            49.2030552
          ],
          [
            -122.9279779,
            49.2031411
          ],
          [
            -122.9282435,
            49.2032182
          ],
          [
            -122.9285251,
            49.2032813
          ],
          [
            -122.9287584,
            49.2033321
          ],
          [
            -122.9291098,
            49.2033899
          ],
          [
            -122.9298152,
            49.2034653
          ],
          [
            -122.9308801,
            49.2035862
          ],
          [
            -122.9317142,
            49.2036861
          ],
          [
            -122.9327442,
            49.2038035
          ],
          [
            -122.9334579,
            49.2038516
          ],
          [
            -122.9336803,
            49.2038578
          ],
          [
            -122.9339324,
            49.2038491
          ],
          [
            -122.9341819,
            49.2038368
          ],
          [
            -122.9344152,
            49.2038035
          ],
          [
            -122.9346325,
            49.2037702
          ],
          [
            -122.9349519,
            49.2037219
          ],
          [
            -122.9352389,
            49.2036396
          ],
          [
            -122.9361989,
            49.2033496
          ],
          [
            -122.9369553,
            49.2031148
          ],
          [
            -122.9377465,
            49.2028484
          ],
          [
            -122.9384654,
            49.2026206
          ],
          [
            -122.9392405,
            49.2023472
          ],
          [
            -122.9397987,
            49.2021079
          ],
          [
            -122.9405387,
            49.2017741
          ],
          [
            -122.9407267,
            49.201703
          ],
          [
            -122.9411985,
            49.2015252
          ],
          [
            -122.941448,
            49.2014446
          ],
          [
            -122.9416438,
            49.2013885
          ],
          [
            -122.9420863,
            49.2013114
          ],
          [
            -122.9428722,
            49.201222
          ],
          [
            -122.9441865,
            49.2010906
          ],
          [
            -122.9449214,
            49.2010135
          ],
          [
            -122.9453535,
            49.2009477
          ],
          [
            -122.9457934,
            49.2008741
          ],
          [
            -122.9460375,
            49.2008268
          ],
          [
            -122.9466598,
            49.200683
          ],
          [
            -122.9471828,
            49.2005516
          ],
          [
            -122.9481356,
            49.2002944
          ],
          [
            -122.9489078,
            49.2000988
          ],
          [
            -122.9494404,
            49.199967
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/425639390",
      "properties": {
        "@id": "way/425639390",
        "bridge": "yes",
        "bridge:name": "Skybridge",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1990-03-16",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9012454,
            49.2065793
          ],
          [
            -122.9015622,
            49.2065912
          ],
          [
            -122.901772,
            49.2065879
          ],
          [
            -122.9019792,
            49.2065745
          ],
          [
            -122.902214,
            49.2065443
          ],
          [
            -122.9025594,
            49.2064729
          ],
          [
            -122.9028478,
            49.2063859
          ],
          [
            -122.9031159,
            49.2062805
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426638760",
      "properties": {
        "@id": "way/426638760",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9580297,
            49.2053184
          ],
          [
            -122.95732,
            49.2062618
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426638761",
      "properties": {
        "@id": "way/426638761",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9571675,
            49.2093872
          ],
          [
            -122.9574951,
            49.2097858
          ],
          [
            -122.9576648,
            49.2100069
          ],
          [
            -122.9579016,
            49.2103451
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426638762",
      "properties": {
        "@id": "way/426638762",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-1",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "yes",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9579016,
            49.2103451
          ],
          [
            -122.9588112,
            49.2115685
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426638763",
      "properties": {
        "@id": "way/426638763",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9588112,
            49.2115685
          ],
          [
            -122.95927,
            49.2122007
          ],
          [
            -122.9598078,
            49.2129412
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426638765",
      "properties": {
        "@id": "way/426638765",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "level": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9598078,
            49.2129412
          ],
          [
            -122.960072,
            49.213328
          ],
          [
            -122.9602969,
            49.213619
          ],
          [
            -122.9605289,
            49.2139195
          ],
          [
            -122.9606557,
            49.2140484
          ],
          [
            -122.9608998,
            49.2142541
          ],
          [
            -122.9611031,
            49.2144033
          ],
          [
            -122.9613213,
            49.2145363
          ],
          [
            -122.9615744,
            49.2146506
          ],
          [
            -122.9618632,
            49.2147582
          ],
          [
            -122.9621452,
            49.2148417
          ],
          [
            -122.9624979,
            49.214909
          ],
          [
            -122.9628561,
            49.2149528
          ],
          [
            -122.9634665,
            49.2149784
          ],
          [
            -122.9640118,
            49.214963
          ],
          [
            -122.9660179,
            49.2149034
          ],
          [
            -122.967244,
            49.2148676
          ],
          [
            -122.9685327,
            49.2148284
          ],
          [
            -122.9692162,
            49.2148131
          ],
          [
            -122.9696232,
            49.2148045
          ],
          [
            -122.9700067,
            49.2148079
          ],
          [
            -122.9703589,
            49.2148284
          ],
          [
            -122.9706563,
            49.2148454
          ],
          [
            -122.971058,
            49.2148897
          ],
          [
            -122.9715771,
            49.2149664
          ],
          [
            -122.9719293,
            49.2150516
          ],
          [
            -122.9723128,
            49.2151641
          ],
          [
            -122.9726128,
            49.2152697
          ],
          [
            -122.9748198,
            49.2162717
          ],
          [
            -122.977006,
            49.2173265
          ],
          [
            -122.9774625,
            49.2175395
          ],
          [
            -122.9781121,
            49.2178224
          ],
          [
            -122.9785608,
            49.217986
          ],
          [
            -122.9789208,
            49.2181087
          ],
          [
            -122.9793877,
            49.2182399
          ],
          [
            -122.9800008,
            49.218383
          ],
          [
            -122.9812713,
            49.218642
          ],
          [
            -122.9854583,
            49.219465
          ],
          [
            -122.985954,
            49.2195758
          ],
          [
            -122.9865748,
            49.2197189
          ],
          [
            -122.9870809,
            49.2198382
          ],
          [
            -122.9877983,
            49.2199967
          ],
          [
            -122.988497,
            49.2201395
          ],
          [
            -122.989254,
            49.2202948
          ],
          [
            -122.9903393,
            49.2205146
          ],
          [
            -122.9911245,
            49.2206714
          ],
          [
            -122.9922071,
            49.2208963
          ],
          [
            -122.9930419,
            49.2210718
          ],
          [
            -122.993595,
            49.2211979
          ],
          [
            -122.9939185,
            49.2212797
          ],
          [
            -122.9942237,
            49.2213717
          ],
          [
            -122.9945524,
            49.2214893
          ],
          [
            -122.9949124,
            49.2216136
          ],
          [
            -122.9952933,
            49.2217619
          ],
          [
            -122.9955307,
            49.2218675
          ],
          [
            -122.9964044,
            49.2222352
          ],
          [
            -122.9974744,
            49.2227298
          ],
          [
            -122.9988059,
            49.223342
          ],
          [
            -122.9995626,
            49.2237145
          ],
          [
            -122.999983,
            49.2239305
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426638766",
      "properties": {
        "@id": "way/426638766",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "level": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.000052,
            49.2238656
          ],
          [
            -122.9996279,
            49.2236705
          ],
          [
            -122.9988434,
            49.2233167
          ],
          [
            -122.9975006,
            49.2226967
          ],
          [
            -122.9964294,
            49.2222102
          ],
          [
            -122.9957603,
            49.2219236
          ],
          [
            -122.9950759,
            49.2216273
          ],
          [
            -122.9943018,
            49.2213545
          ],
          [
            -122.9938879,
            49.2212353
          ],
          [
            -122.993512,
            49.2211498
          ],
          [
            -122.9931445,
            49.2210648
          ],
          [
            -122.988524,
            49.2200544
          ],
          [
            -122.9856238,
            49.2194623
          ],
          [
            -122.9810764,
            49.218572
          ],
          [
            -122.9795953,
            49.2182611
          ],
          [
            -122.9789992,
            49.218106
          ],
          [
            -122.9784491,
            49.2179145
          ],
          [
            -122.9780245,
            49.2177559
          ],
          [
            -122.9776348,
            49.217584
          ],
          [
            -122.9772635,
            49.2174191
          ],
          [
            -122.9752966,
            49.2164572
          ],
          [
            -122.9732983,
            49.2155175
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426638767",
      "properties": {
        "@id": "way/426638767",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0155164,
            49.2311379
          ],
          [
            -123.0164215,
            49.2315411
          ],
          [
            -123.0175616,
            49.2320589
          ],
          [
            -123.0182491,
            49.2323795
          ],
          [
            -123.019286,
            49.2328533
          ],
          [
            -123.019753,
            49.2330685
          ],
          [
            -123.0201875,
            49.2332585
          ],
          [
            -123.020817,
            49.2335064
          ],
          [
            -123.0220843,
            49.2339815
          ],
          [
            -123.0225544,
            49.2341706
          ],
          [
            -123.0240957,
            49.234886
          ],
          [
            -123.026003,
            49.2357592
          ],
          [
            -123.02616,
            49.2358306
          ],
          [
            -123.0280122,
            49.2367008
          ],
          [
            -123.0284166,
            49.2369001
          ],
          [
            -123.0290948,
            49.2372544
          ],
          [
            -123.0297027,
            49.2375576
          ],
          [
            -123.0301853,
            49.2377858
          ],
          [
            -123.0309387,
            49.2381004
          ],
          [
            -123.0317729,
            49.2384444
          ],
          [
            -123.032361,
            49.2386868
          ],
          [
            -123.0328547,
            49.2388802
          ],
          [
            -123.0334512,
            49.2391065
          ],
          [
            -123.0338767,
            49.2392728
          ],
          [
            -123.0348445,
            49.239639
          ],
          [
            -123.0362585,
            49.2402147
          ],
          [
            -123.0371794,
            49.2405928
          ],
          [
            -123.0381994,
            49.2410271
          ],
          [
            -123.0384369,
            49.24113
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426638773",
      "properties": {
        "@id": "way/426638773",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0384369,
            49.24113
          ],
          [
            -123.0398846,
            49.2417305
          ],
          [
            -123.0449353,
            49.2438377
          ],
          [
            -123.0452967,
            49.2439873
          ],
          [
            -123.0458332,
            49.2442124
          ],
          [
            -123.0460383,
            49.2442974
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426638774",
      "properties": {
        "@id": "way/426638774",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-1",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "yes",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0465683,
            49.2445169
          ],
          [
            -123.0472497,
            49.2447941
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426638775",
      "properties": {
        "@id": "way/426638775",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0472497,
            49.2447941
          ],
          [
            -123.0478231,
            49.2450141
          ],
          [
            -123.0486683,
            49.2453343
          ],
          [
            -123.049518,
            49.2456841
          ],
          [
            -123.0512457,
            49.246397
          ],
          [
            -123.0522084,
            49.2468074
          ],
          [
            -123.0532623,
            49.2472451
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426638776",
      "properties": {
        "@id": "way/426638776",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0704257,
            49.2638989
          ],
          [
            -123.072928,
            49.2646878
          ],
          [
            -123.0750597,
            49.2653594
          ],
          [
            -123.0771589,
            49.2660322
          ],
          [
            -123.0775435,
            49.2661591
          ],
          [
            -123.0776568,
            49.2661993
          ],
          [
            -123.07776,
            49.2662366
          ],
          [
            -123.0778727,
            49.2662792
          ],
          [
            -123.0779618,
            49.2663158
          ],
          [
            -123.0780392,
            49.2663476
          ],
          [
            -123.0781306,
            49.2663897
          ],
          [
            -123.0782281,
            49.2664346
          ],
          [
            -123.0783083,
            49.2664757
          ],
          [
            -123.0783892,
            49.2665186
          ],
          [
            -123.0784519,
            49.2665536
          ],
          [
            -123.0785082,
            49.2665851
          ],
          [
            -123.0785646,
            49.2666194
          ],
          [
            -123.078627,
            49.2666587
          ],
          [
            -123.0786836,
            49.2666949
          ],
          [
            -123.0787374,
            49.2667315
          ],
          [
            -123.0788021,
            49.2667769
          ],
          [
            -123.0788595,
            49.2668193
          ],
          [
            -123.0789114,
            49.2668597
          ],
          [
            -123.0789751,
            49.2669094
          ],
          [
            -123.0790161,
            49.2669427
          ],
          [
            -123.0790585,
            49.2669793
          ],
          [
            -123.0791074,
            49.2670234
          ],
          [
            -123.0791635,
            49.2670751
          ],
          [
            -123.0792034,
            49.2671153
          ],
          [
            -123.0792539,
            49.2671673
          ],
          [
            -123.0793,
            49.267216
          ],
          [
            -123.0793535,
            49.2672762
          ],
          [
            -123.0793873,
            49.2673177
          ],
          [
            -123.0794391,
            49.2673799
          ],
          [
            -123.0794977,
            49.2674545
          ],
          [
            -123.0795639,
            49.2675383
          ],
          [
            -123.0797827,
            49.2678194
          ],
          [
            -123.080053,
            49.2681864
          ],
          [
            -123.0801005,
            49.2682493
          ],
          [
            -123.0801472,
            49.2683094
          ],
          [
            -123.0801978,
            49.2683682
          ],
          [
            -123.0802342,
            49.2684127
          ],
          [
            -123.0802833,
            49.2684687
          ],
          [
            -123.0803222,
            49.2685121
          ],
          [
            -123.0803519,
            49.2685447
          ],
          [
            -123.080386,
            49.268581
          ],
          [
            -123.0804294,
            49.2686247
          ],
          [
            -123.0804781,
            49.2686706
          ],
          [
            -123.0805287,
            49.2687169
          ],
          [
            -123.0805811,
            49.2687642
          ],
          [
            -123.0806306,
            49.2688065
          ],
          [
            -123.0806828,
            49.2688494
          ],
          [
            -123.0807215,
            49.2688803
          ],
          [
            -123.0807822,
            49.2689264
          ],
          [
            -123.0808236,
            49.2689556
          ],
          [
            -123.0808937,
            49.2690051
          ],
          [
            -123.0809637,
            49.2690505
          ],
          [
            -123.0810211,
            49.2690877
          ],
          [
            -123.0810979,
            49.2691353
          ],
          [
            -123.081172,
            49.2691789
          ],
          [
            -123.0812727,
            49.269235
          ],
          [
            -123.0813509,
            49.2692746
          ],
          [
            -123.0814539,
            49.2693253
          ],
          [
            -123.0815461,
            49.2693673
          ],
          [
            -123.0816719,
            49.2694216
          ],
          [
            -123.0817791,
            49.2694649
          ],
          [
            -123.0818698,
            49.2694985
          ],
          [
            -123.081998,
            49.269544
          ],
          [
            -123.0820657,
            49.2695659
          ],
          [
            -123.0821537,
            49.2695933
          ],
          [
            -123.0822465,
            49.2696201
          ],
          [
            -123.0823655,
            49.269653
          ],
          [
            -123.0824686,
            49.2696797
          ],
          [
            -123.0825895,
            49.2697087
          ],
          [
            -123.0827154,
            49.2697379
          ],
          [
            -123.0828061,
            49.269758
          ],
          [
            -123.0830145,
            49.2698049
          ],
          [
            -123.0852858,
            49.2702963
          ],
          [
            -123.0854941,
            49.270341
          ],
          [
            -123.0856133,
            49.2703661
          ],
          [
            -123.0857394,
            49.2703919
          ],
          [
            -123.0858891,
            49.2704225
          ],
          [
            -123.0860246,
            49.2704483
          ],
          [
            -123.0861247,
            49.2704667
          ],
          [
            -123.0862247,
            49.270485
          ],
          [
            -123.0863148,
            49.2705013
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426638780",
      "properties": {
        "@id": "way/426638780",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0863344,
            49.2704708
          ],
          [
            -123.0862454,
            49.270455
          ],
          [
            -123.08611,
            49.2704297
          ],
          [
            -123.0859721,
            49.2704039
          ],
          [
            -123.0858127,
            49.2703733
          ],
          [
            -123.0856453,
            49.2703386
          ],
          [
            -123.0855056,
            49.2703086
          ],
          [
            -123.0853266,
            49.2702697
          ],
          [
            -123.0841575,
            49.2700161
          ],
          [
            -123.083059,
            49.2697788
          ],
          [
            -123.0828277,
            49.2697276
          ],
          [
            -123.08269,
            49.2696959
          ],
          [
            -123.0826077,
            49.2696762
          ],
          [
            -123.0825403,
            49.2696594
          ],
          [
            -123.0824657,
            49.2696411
          ],
          [
            -123.0823921,
            49.2696219
          ],
          [
            -123.0822997,
            49.2695975
          ],
          [
            -123.0822171,
            49.2695742
          ],
          [
            -123.0821326,
            49.2695478
          ],
          [
            -123.0820481,
            49.2695203
          ],
          [
            -123.0819345,
            49.2694806
          ],
          [
            -123.0818476,
            49.2694489
          ],
          [
            -123.0817842,
            49.269424
          ],
          [
            -123.0817254,
            49.2694
          ],
          [
            -123.0816618,
            49.2693744
          ],
          [
            -123.0815969,
            49.2693466
          ],
          [
            -123.0815356,
            49.2693199
          ],
          [
            -123.081468,
            49.2692879
          ],
          [
            -123.0813577,
            49.2692333
          ],
          [
            -123.0812792,
            49.2691906
          ],
          [
            -123.0812025,
            49.2691489
          ],
          [
            -123.0811194,
            49.2690994
          ],
          [
            -123.0810649,
            49.2690659
          ],
          [
            -123.081009,
            49.2690305
          ],
          [
            -123.0809435,
            49.2689873
          ],
          [
            -123.0808843,
            49.2689467
          ],
          [
            -123.0808113,
            49.2688934
          ],
          [
            -123.080761,
            49.268855
          ],
          [
            -123.0806937,
            49.2688005
          ],
          [
            -123.0806327,
            49.2687505
          ],
          [
            -123.0805648,
            49.2686907
          ],
          [
            -123.0805062,
            49.2686355
          ],
          [
            -123.080452,
            49.2685807
          ],
          [
            -123.0804121,
            49.268541
          ],
          [
            -123.0803575,
            49.2684827
          ],
          [
            -123.0803013,
            49.2684179
          ],
          [
            -123.0802541,
            49.2683625
          ],
          [
            -123.08018,
            49.2682714
          ],
          [
            -123.0800471,
            49.2680969
          ],
          [
            -123.0796056,
            49.2675102
          ],
          [
            -123.0795528,
            49.2674428
          ],
          [
            -123.079483,
            49.2673554
          ],
          [
            -123.0793897,
            49.2672449
          ],
          [
            -123.0793372,
            49.2671875
          ],
          [
            -123.0792811,
            49.2671282
          ],
          [
            -123.0791757,
            49.2670252
          ],
          [
            -123.0790993,
            49.2669557
          ],
          [
            -123.079062,
            49.2669229
          ],
          [
            -123.0789434,
            49.2668251
          ],
          [
            -123.0788355,
            49.2667469
          ],
          [
            -123.0787868,
            49.2667134
          ],
          [
            -123.0787331,
            49.2666773
          ],
          [
            -123.078661,
            49.2666298
          ],
          [
            -123.0785694,
            49.266572
          ],
          [
            -123.0784972,
            49.2665302
          ],
          [
            -123.0784027,
            49.2664789
          ],
          [
            -123.0783137,
            49.2664337
          ],
          [
            -123.0781754,
            49.2663638
          ],
          [
            -123.0780091,
            49.2662922
          ],
          [
            -123.0778651,
            49.2662343
          ],
          [
            -123.0777027,
            49.2661713
          ],
          [
            -123.0775197,
            49.26611
          ],
          [
            -123.0771849,
            49.2660013
          ],
          [
            -123.0762404,
            49.2656957
          ],
          [
            -123.0705385,
            49.2638723
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426641640",
      "properties": {
        "@id": "way/426641640",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "25",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-01-05",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.904045,
            49.2057921
          ],
          [
            -122.9036084,
            49.2059604
          ],
          [
            -122.9030448,
            49.2061826
          ],
          [
            -122.9027879,
            49.2062896
          ],
          [
            -122.9026524,
            49.2063505
          ],
          [
            -122.9025151,
            49.2064212
          ],
          [
            -122.9022614,
            49.2065697
          ],
          [
            -122.902073,
            49.2066893
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426641641",
      "properties": {
        "@id": "way/426641641",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-1",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-01-05",
        "tunnel": "yes",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.902073,
            49.2066893
          ],
          [
            -122.9019109,
            49.2067994
          ],
          [
            -122.901707,
            49.2069605
          ],
          [
            -122.9014601,
            49.2071878
          ],
          [
            -122.901312,
            49.2073358
          ],
          [
            -122.8993242,
            49.2094427
          ],
          [
            -122.8987644,
            49.2099274
          ],
          [
            -122.8980451,
            49.210516
          ],
          [
            -122.8974017,
            49.210984
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/426641642",
      "properties": {
        "@id": "way/426641642",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-01-05",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8835159,
            49.2294932
          ],
          [
            -122.8834034,
            49.2295879
          ],
          [
            -122.8832995,
            49.2296807
          ],
          [
            -122.8832218,
            49.2297507
          ],
          [
            -122.883149,
            49.2298224
          ],
          [
            -122.8830838,
            49.2298881
          ],
          [
            -122.8830383,
            49.229936
          ],
          [
            -122.8829994,
            49.2299787
          ],
          [
            -122.8829666,
            49.2300171
          ],
          [
            -122.8829359,
            49.2300574
          ],
          [
            -122.8828855,
            49.2301221
          ],
          [
            -122.8828265,
            49.2302024
          ],
          [
            -122.8827738,
            49.2302838
          ],
          [
            -122.8826985,
            49.2304054
          ],
          [
            -122.8826534,
            49.2304863
          ],
          [
            -122.8826124,
            49.2305688
          ],
          [
            -122.8825888,
            49.2306242
          ],
          [
            -122.8825463,
            49.2307274
          ],
          [
            -122.8825263,
            49.230785
          ],
          [
            -122.8825113,
            49.2308256
          ],
          [
            -122.8824724,
            49.2309483
          ],
          [
            -122.8824529,
            49.2310376
          ],
          [
            -122.882439,
            49.2311287
          ],
          [
            -122.8824342,
            49.2311658
          ],
          [
            -122.8824295,
            49.2312219
          ],
          [
            -122.8824222,
            49.2313004
          ],
          [
            -122.8824201,
            49.2313795
          ],
          [
            -122.8824203,
            49.2314445
          ],
          [
            -122.8824251,
            49.2315477
          ],
          [
            -122.8824334,
            49.2316499
          ],
          [
            -122.8824399,
            49.2317322
          ],
          [
            -122.882453,
            49.2318226
          ],
          [
            -122.8824613,
            49.231871
          ],
          [
            -122.8824728,
            49.2319283
          ],
          [
            -122.8825057,
            49.2320794
          ],
          [
            -122.8825495,
            49.2322616
          ],
          [
            -122.8826354,
            49.2326467
          ],
          [
            -122.8827413,
            49.2331023
          ],
          [
            -122.8827927,
            49.2333355
          ],
          [
            -122.8828917,
            49.2337584
          ],
          [
            -122.883027,
            49.2343596
          ],
          [
            -122.883089,
            49.2346429
          ],
          [
            -122.8831295,
            49.2348291
          ],
          [
            -122.8831552,
            49.234938
          ],
          [
            -122.8831848,
            49.2350558
          ],
          [
            -122.8832287,
            49.2352141
          ],
          [
            -122.8832692,
            49.2353481
          ],
          [
            -122.8832954,
            49.2354187
          ],
          [
            -122.8833233,
            49.2354919
          ],
          [
            -122.8833595,
            49.2355736
          ],
          [
            -122.8833966,
            49.2356542
          ],
          [
            -122.8834347,
            49.2357271
          ],
          [
            -122.8834742,
            49.2357991
          ],
          [
            -122.8835264,
            49.2358914
          ],
          [
            -122.8835827,
            49.2359829
          ],
          [
            -122.883632,
            49.2360538
          ],
          [
            -122.8836754,
            49.2361152
          ],
          [
            -122.8837232,
            49.2361766
          ],
          [
            -122.8837747,
            49.2362438
          ],
          [
            -122.8838479,
            49.2363294
          ],
          [
            -122.8839495,
            49.2364393
          ],
          [
            -122.8840661,
            49.2365553
          ],
          [
            -122.8841258,
            49.2366111
          ],
          [
            -122.8841781,
            49.2366592
          ],
          [
            -122.8842486,
            49.2367203
          ],
          [
            -122.8843048,
            49.2367677
          ],
          [
            -122.8843847,
            49.2368342
          ],
          [
            -122.8844735,
            49.2369036
          ],
          [
            -122.8845375,
            49.2369525
          ],
          [
            -122.8846164,
            49.2370083
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/448440189",
      "properties": {
        "@id": "way/448440189",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "no",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.95732,
            49.2062618
          ],
          [
            -122.957237,
            49.2063732
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/487377795",
      "properties": {
        "@id": "way/487377795",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "75",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.958094,
            49.205234
          ],
          [
            -122.9580297,
            49.2053184
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/494075324",
      "properties": {
        "@id": "way/494075324",
        "bridge": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "name": "SkyTrain Expo and Millennium Lines",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.898356,
            49.2491805
          ],
          [
            -122.898501,
            49.2492336
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/494075325",
      "properties": {
        "@id": "way/494075325",
        "bridge": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "name": "SkyTrain Expo and Millennium Lines",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.899115,
            49.2494097
          ],
          [
            -122.8984623,
            49.2491736
          ],
          [
            -122.8980793,
            49.2490294
          ],
          [
            -122.897894,
            49.2489474
          ],
          [
            -122.8977017,
            49.2488488
          ],
          [
            -122.8968898,
            49.2484049
          ],
          [
            -122.896237,
            49.248049
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/494075326",
      "properties": {
        "@id": "way/494075326",
        "bridge": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "name": "SkyTrain Expo and Millennium Lines",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8951814,
            49.2475794
          ],
          [
            -122.8953533,
            49.2476749
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/494075327",
      "properties": {
        "@id": "way/494075327",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "name": "SkyTrain Expo and Millennium Lines",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9081512,
            49.2518816
          ],
          [
            -122.9069946,
            49.2516434
          ],
          [
            -122.9064844,
            49.2515496
          ],
          [
            -122.9041862,
            49.2512072
          ],
          [
            -122.9035371,
            49.251092
          ],
          [
            -122.9029619,
            49.2509612
          ],
          [
            -122.9021167,
            49.2507193
          ],
          [
            -122.901433,
            49.2504811
          ],
          [
            -122.9007905,
            49.2502282
          ],
          [
            -122.9003029,
            49.2499983
          ],
          [
            -122.8996865,
            49.2496517
          ],
          [
            -122.8994108,
            49.2495169
          ],
          [
            -122.899115,
            49.2494097
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/551361791",
      "properties": {
        "@id": "way/551361791",
        "bridge": "viaduct",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1994-03-28",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.850681,
            49.1983759
          ],
          [
            -122.8506745,
            49.1975031
          ],
          [
            -122.85067,
            49.1966888
          ],
          [
            -122.850671,
            49.1965115
          ],
          [
            -122.8506779,
            49.1950432
          ],
          [
            -122.8506604,
            49.1948646
          ],
          [
            -122.8506382,
            49.1946743
          ],
          [
            -122.850619,
            49.1945975
          ],
          [
            -122.8505762,
            49.1945058
          ],
          [
            -122.8504888,
            49.1943203
          ],
          [
            -122.850405,
            49.19419
          ],
          [
            -122.8503092,
            49.1940668
          ],
          [
            -122.8501913,
            49.1939387
          ],
          [
            -122.8500706,
            49.1938058
          ],
          [
            -122.8485918,
            49.1925183
          ],
          [
            -122.8483476,
            49.1922571
          ],
          [
            -122.8482431,
            49.1921057
          ],
          [
            -122.8481235,
            49.1919305
          ],
          [
            -122.8480323,
            49.1917383
          ],
          [
            -122.8479639,
            49.1915553
          ],
          [
            -122.8479204,
            49.1913283
          ],
          [
            -122.8478933,
            49.1909943
          ],
          [
            -122.8479137,
            49.1904599
          ],
          [
            -122.847929,
            49.1895232
          ],
          [
            -122.8479468,
            49.1889972
          ],
          [
            -122.8479342,
            49.1887181
          ],
          [
            -122.8478821,
            49.1885032
          ],
          [
            -122.8478062,
            49.1883232
          ],
          [
            -122.847686,
            49.1881197
          ],
          [
            -122.8472676,
            49.1874729
          ],
          [
            -122.8471823,
            49.1873207
          ],
          [
            -122.847123,
            49.1871828
          ],
          [
            -122.8470854,
            49.1870708
          ],
          [
            -122.8470614,
            49.1869405
          ],
          [
            -122.8470495,
            49.1866876
          ],
          [
            -122.8470632,
            49.1852648
          ],
          [
            -122.8470778,
            49.184755
          ],
          [
            -122.8470766,
            49.1845199
          ],
          [
            -122.8470648,
            49.1844094
          ],
          [
            -122.8470506,
            49.1842915
          ],
          [
            -122.8470377,
            49.1842258
          ],
          [
            -122.847006,
            49.1841289
          ],
          [
            -122.8469598,
            49.1840302
          ],
          [
            -122.8469156,
            49.1839482
          ],
          [
            -122.8468687,
            49.183876
          ],
          [
            -122.8468141,
            49.1838059
          ],
          [
            -122.8467384,
            49.1837282
          ],
          [
            -122.8466361,
            49.1836341
          ],
          [
            -122.8465362,
            49.1835565
          ],
          [
            -122.8464063,
            49.183475
          ],
          [
            -122.8462036,
            49.1833703
          ],
          [
            -122.8459505,
            49.1832569
          ],
          [
            -122.845849,
            49.1832174
          ],
          [
            -122.8451628,
            49.1829316
          ],
          [
            -122.84468,
            49.1827396
          ],
          [
            -122.8440759,
            49.182494
          ],
          [
            -122.843411,
            49.1822282
          ],
          [
            -122.8418086,
            49.1816236
          ],
          [
            -122.8405848,
            49.1811615
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/551763179",
      "properties": {
        "@id": "way/551763179",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-3",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "yes",
        "tunnel:name": "Dunsmuir Tunnel",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1201135,
            49.2859582
          ],
          [
            -123.1197866,
            49.2857575
          ],
          [
            -123.1190103,
            49.2852641
          ],
          [
            -123.1151647,
            49.2829007
          ],
          [
            -123.111165,
            49.2803361
          ],
          [
            -123.1110278,
            49.2802623
          ],
          [
            -123.1108411,
            49.2801854
          ],
          [
            -123.1104984,
            49.2800567
          ],
          [
            -123.11036,
            49.2799991
          ],
          [
            -123.1102379,
            49.2799382
          ],
          [
            -123.1101247,
            49.2798725
          ],
          [
            -123.1100697,
            49.2798388
          ],
          [
            -123.109987,
            49.2797803
          ],
          [
            -123.109875,
            49.2797016
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/809550055",
      "properties": {
        "@id": "way/809550055",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "65",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1097388,
            49.2796145
          ],
          [
            -123.109349,
            49.2793597
          ],
          [
            -123.1091582,
            49.2792354
          ],
          [
            -123.108073,
            49.2785359
          ],
          [
            -123.107914,
            49.2784286
          ],
          [
            -123.1078575,
            49.2783911
          ],
          [
            -123.1077999,
            49.278355
          ],
          [
            -123.1077485,
            49.2783231
          ],
          [
            -123.1076998,
            49.2782946
          ],
          [
            -123.1076299,
            49.2782559
          ],
          [
            -123.107541,
            49.2782105
          ],
          [
            -123.1074435,
            49.2781613
          ],
          [
            -123.1073735,
            49.2781301
          ],
          [
            -123.1072942,
            49.2780955
          ],
          [
            -123.107195,
            49.2780566
          ],
          [
            -123.1071444,
            49.2780375
          ],
          [
            -123.1070824,
            49.2780155
          ],
          [
            -123.1070265,
            49.2779969
          ],
          [
            -123.1069664,
            49.2779775
          ],
          [
            -123.1068985,
            49.2779564
          ],
          [
            -123.1068149,
            49.2779339
          ],
          [
            -123.1067369,
            49.2779143
          ],
          [
            -123.1066831,
            49.2779018
          ],
          [
            -123.1066247,
            49.2778881
          ],
          [
            -123.1065629,
            49.2778756
          ],
          [
            -123.1064833,
            49.2778599
          ],
          [
            -123.1064104,
            49.2778472
          ],
          [
            -123.1063297,
            49.2778347
          ],
          [
            -123.1062437,
            49.2778241
          ],
          [
            -123.1060463,
            49.277802
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/809550057",
      "properties": {
        "@id": "way/809550057",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "65",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1096496,
            49.2796794
          ],
          [
            -123.1097795,
            49.2797682
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/809550058",
      "properties": {
        "@id": "way/809550058",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "45",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.109875,
            49.2797016
          ],
          [
            -123.1097388,
            49.2796145
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/834757714",
      "properties": {
        "@id": "way/834757714",
        "bridge": "yes",
        "bridge:name": "Skybridge",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1990-03-16",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9030896,
            49.2062598
          ],
          [
            -122.9028241,
            49.2063582
          ],
          [
            -122.9025397,
            49.2064408
          ],
          [
            -122.9021901,
            49.2065044
          ],
          [
            -122.9019724,
            49.2065304
          ],
          [
            -122.9017573,
            49.2065439
          ],
          [
            -122.9015579,
            49.2065475
          ],
          [
            -122.901245,
            49.2065317
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/834757715",
      "properties": {
        "@id": "way/834757715",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1990-03-16",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9031159,
            49.2062805
          ],
          [
            -122.903623,
            49.2060455
          ],
          [
            -122.904073,
            49.2058171
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923211605",
      "properties": {
        "@id": "way/923211605",
        "bridge": "yes",
        "bridge:structure": "beam",
        "disused": "subway",
        "disused:railway": "subway",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "name": "SkyTrain Expo Line",
        "opening_date": "2027-06",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "disused",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.896237,
            49.248049
          ],
          [
            -122.894411,
            49.2470318
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573490",
      "properties": {
        "@id": "way/923573490",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0691087,
            49.2568243
          ],
          [
            -123.0690856,
            49.2586985
          ],
          [
            -123.0690721,
            49.2597105
          ],
          [
            -123.069063,
            49.260333
          ],
          [
            -123.0690542,
            49.2609846
          ],
          [
            -123.0690662,
            49.2614404
          ],
          [
            -123.0690633,
            49.2618642
          ],
          [
            -123.06906,
            49.2622079
          ],
          [
            -123.0690353,
            49.2626539
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573491",
      "properties": {
        "@id": "way/923573491",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0692092,
            49.2626578
          ],
          [
            -123.0692088,
            49.2624166
          ],
          [
            -123.069214,
            49.2621847
          ],
          [
            -123.0692225,
            49.2618701
          ],
          [
            -123.069224,
            49.2614485
          ],
          [
            -123.0691997,
            49.2605912
          ],
          [
            -123.0691773,
            49.2602629
          ],
          [
            -123.0691483,
            49.2599015
          ],
          [
            -123.0691321,
            49.2595422
          ],
          [
            -123.0691423,
            49.258715
          ],
          [
            -123.0691635,
            49.2568229
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573492",
      "properties": {
        "@id": "way/923573492",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0155451,
            49.2311085
          ],
          [
            -123.0147576,
            49.2307185
          ],
          [
            -123.0136696,
            49.2301923
          ],
          [
            -123.012736,
            49.2297489
          ],
          [
            -123.0119501,
            49.2293999
          ],
          [
            -123.0093507,
            49.2282736
          ],
          [
            -123.0066539,
            49.2270212
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573493",
      "properties": {
        "@id": "way/923573493",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0065246,
            49.2270064
          ],
          [
            -123.0093137,
            49.2282987
          ],
          [
            -123.0118801,
            49.229474
          ],
          [
            -123.012696,
            49.2298493
          ],
          [
            -123.0130265,
            49.2300009
          ],
          [
            -123.0135907,
            49.2302602
          ],
          [
            -123.0143828,
            49.2306255
          ],
          [
            -123.0147055,
            49.2307668
          ],
          [
            -123.0155164,
            49.2311379
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573494",
      "properties": {
        "@id": "way/923573494",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9122392,
            49.2016227
          ],
          [
            -122.9115161,
            49.2020099
          ],
          [
            -122.911055,
            49.2022578
          ],
          [
            -122.9103524,
            49.2026383
          ],
          [
            -122.9096504,
            49.2030223
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573495",
      "properties": {
        "@id": "way/923573495",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.909688,
            49.2030509
          ],
          [
            -122.9103838,
            49.2026695
          ],
          [
            -122.9111095,
            49.2022727
          ],
          [
            -122.9115253,
            49.2020484
          ],
          [
            -122.9122679,
            49.2016452
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573498",
      "properties": {
        "@id": "way/923573498",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "level": "1",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1985-12-11",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1010396,
            49.2732143
          ],
          [
            -123.100341,
            49.2730906
          ],
          [
            -123.0993937,
            49.2729357
          ],
          [
            -123.0993239,
            49.2729236
          ],
          [
            -123.0992494,
            49.2729094
          ],
          [
            -123.0991737,
            49.2728936
          ],
          [
            -123.0991192,
            49.2728829
          ],
          [
            -123.0990468,
            49.2728662
          ],
          [
            -123.0989765,
            49.2728501
          ],
          [
            -123.0989158,
            49.2728349
          ],
          [
            -123.098855,
            49.2728184
          ],
          [
            -123.098772,
            49.2727971
          ],
          [
            -123.0986544,
            49.2727633
          ],
          [
            -123.0984643,
            49.2727044
          ],
          [
            -123.0979768,
            49.2725459
          ],
          [
            -123.0977148,
            49.272463
          ],
          [
            -123.0975939,
            49.272427
          ],
          [
            -123.0975318,
            49.2724088
          ],
          [
            -123.0974492,
            49.2723848
          ],
          [
            -123.097354,
            49.27236
          ],
          [
            -123.0972711,
            49.2723402
          ],
          [
            -123.0972225,
            49.2723281
          ],
          [
            -123.0971687,
            49.2723164
          ],
          [
            -123.0970983,
            49.2723009
          ],
          [
            -123.0970039,
            49.2722821
          ],
          [
            -123.0968783,
            49.2722585
          ],
          [
            -123.0967697,
            49.2722391
          ],
          [
            -123.0966158,
            49.2722119
          ],
          [
            -123.0863344,
            49.2704708
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573499",
      "properties": {
        "@id": "way/923573499",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "level": "1",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1983",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0863148,
            49.2705013
          ],
          [
            -123.0881655,
            49.2708197
          ],
          [
            -123.0965935,
            49.2722407
          ],
          [
            -123.0967469,
            49.2722671
          ],
          [
            -123.0969844,
            49.272312
          ],
          [
            -123.0971144,
            49.2723395
          ],
          [
            -123.0972216,
            49.2723641
          ],
          [
            -123.0972966,
            49.272383
          ],
          [
            -123.0973706,
            49.2724024
          ],
          [
            -123.0974201,
            49.2724164
          ],
          [
            -123.0974696,
            49.2724304
          ],
          [
            -123.0975204,
            49.2724452
          ],
          [
            -123.0975714,
            49.2724613
          ],
          [
            -123.0976578,
            49.272489
          ],
          [
            -123.0977438,
            49.2725175
          ],
          [
            -123.0980909,
            49.272653
          ],
          [
            -123.0983941,
            49.2727527
          ],
          [
            -123.098644,
            49.2728377
          ],
          [
            -123.0988555,
            49.2729004
          ],
          [
            -123.0990214,
            49.2729417
          ],
          [
            -123.0991494,
            49.2729723
          ],
          [
            -123.0993769,
            49.2730151
          ],
          [
            -123.100315,
            49.2731741
          ],
          [
            -123.1010072,
            49.2732968
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573500",
      "properties": {
        "@id": "way/923573500",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "level": "2",
        "maxspeed": "45",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0692589,
            49.2630478
          ],
          [
            -123.0692359,
            49.2629681
          ],
          [
            -123.0692245,
            49.2629082
          ],
          [
            -123.0692139,
            49.2628412
          ],
          [
            -123.0692103,
            49.2627833
          ],
          [
            -123.0692092,
            49.2626578
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573501",
      "properties": {
        "@id": "way/923573501",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0634378,
            49.251491
          ],
          [
            -123.0641799,
            49.2517935
          ],
          [
            -123.064566,
            49.2519774
          ],
          [
            -123.0649938,
            49.2522107
          ],
          [
            -123.0653225,
            49.2524219
          ],
          [
            -123.0660008,
            49.2529276
          ],
          [
            -123.0668174,
            49.2535355
          ],
          [
            -123.067335,
            49.253925
          ],
          [
            -123.0679348,
            49.2544001
          ],
          [
            -123.0681582,
            49.254591
          ],
          [
            -123.0683859,
            49.2548488
          ],
          [
            -123.06853,
            49.2550021
          ],
          [
            -123.0686482,
            49.2551903
          ],
          [
            -123.0687246,
            49.255306
          ],
          [
            -123.0688097,
            49.2554518
          ],
          [
            -123.0688774,
            49.2555986
          ],
          [
            -123.0689408,
            49.2557425
          ],
          [
            -123.0690187,
            49.2560088
          ],
          [
            -123.0690701,
            49.2562214
          ],
          [
            -123.0690847,
            49.2563246
          ],
          [
            -123.0690912,
            49.2563804
          ],
          [
            -123.0691005,
            49.2564932
          ],
          [
            -123.069108,
            49.256655
          ],
          [
            -123.0691087,
            49.2568243
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573502",
      "properties": {
        "@id": "way/923573502",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "65",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1985-12-11",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1022171,
            49.2740457
          ],
          [
            -123.1023539,
            49.2749313
          ],
          [
            -123.102463,
            49.2756488
          ],
          [
            -123.1025346,
            49.2760921
          ],
          [
            -123.1025406,
            49.2761327
          ],
          [
            -123.1025473,
            49.276172
          ],
          [
            -123.1025598,
            49.2762376
          ],
          [
            -123.1025734,
            49.2763049
          ],
          [
            -123.1025858,
            49.2763576
          ],
          [
            -123.1026011,
            49.2764141
          ],
          [
            -123.1026141,
            49.2764577
          ],
          [
            -123.1026282,
            49.2765005
          ],
          [
            -123.1026479,
            49.2765479
          ],
          [
            -123.102667,
            49.276594
          ],
          [
            -123.102684,
            49.276628
          ],
          [
            -123.1027016,
            49.2766617
          ],
          [
            -123.1027283,
            49.2767082
          ],
          [
            -123.1027539,
            49.2767502
          ],
          [
            -123.1027842,
            49.2767956
          ],
          [
            -123.1028271,
            49.2768535
          ],
          [
            -123.1028616,
            49.2768963
          ],
          [
            -123.1028936,
            49.2769357
          ],
          [
            -123.1029332,
            49.2769789
          ],
          [
            -123.1029835,
            49.2770266
          ],
          [
            -123.1030346,
            49.2770708
          ],
          [
            -123.1031125,
            49.2771342
          ],
          [
            -123.1031953,
            49.2771975
          ],
          [
            -123.1032391,
            49.2772282
          ],
          [
            -123.1032824,
            49.2772578
          ],
          [
            -123.1033224,
            49.2772827
          ],
          [
            -123.1033711,
            49.2773117
          ],
          [
            -123.1034104,
            49.2773342
          ],
          [
            -123.1034883,
            49.2773758
          ],
          [
            -123.1035935,
            49.2774274
          ],
          [
            -123.1037018,
            49.2774743
          ],
          [
            -123.1038136,
            49.277515
          ],
          [
            -123.1039382,
            49.2775552
          ],
          [
            -123.1040408,
            49.2775824
          ],
          [
            -123.1041161,
            49.2776018
          ],
          [
            -123.1042105,
            49.2776228
          ],
          [
            -123.1043228,
            49.2776438
          ],
          [
            -123.1044123,
            49.2776588
          ],
          [
            -123.1044764,
            49.2776683
          ],
          [
            -123.1045474,
            49.2776779
          ],
          [
            -123.1046234,
            49.2776876
          ],
          [
            -123.1047534,
            49.2777025
          ],
          [
            -123.105244,
            49.2777552
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573503",
      "properties": {
        "@id": "way/923573503",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "35",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "building_passage",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1010072,
            49.2732968
          ],
          [
            -123.1014241,
            49.2733707
          ],
          [
            -123.1014663,
            49.2733798
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573504",
      "properties": {
        "@id": "way/923573504",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "35",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "building_passage",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1014715,
            49.2732923
          ],
          [
            -123.1014201,
            49.2732817
          ],
          [
            -123.1010396,
            49.2732143
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573505",
      "properties": {
        "@id": "way/923573505",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "65",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1985-12-11",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.105717,
            49.2777675
          ],
          [
            -123.1049784,
            49.2776905
          ],
          [
            -123.1047497,
            49.2776657
          ],
          [
            -123.1046453,
            49.2776539
          ],
          [
            -123.1045687,
            49.2776443
          ],
          [
            -123.1044854,
            49.2776322
          ],
          [
            -123.1044028,
            49.2776191
          ],
          [
            -123.1043183,
            49.2776046
          ],
          [
            -123.1042394,
            49.2775891
          ],
          [
            -123.1041811,
            49.2775763
          ],
          [
            -123.1041305,
            49.2775643
          ],
          [
            -123.1040655,
            49.2775473
          ],
          [
            -123.1039925,
            49.2775267
          ],
          [
            -123.1039214,
            49.2775063
          ],
          [
            -123.1038455,
            49.2774818
          ],
          [
            -123.1037771,
            49.2774576
          ],
          [
            -123.1036683,
            49.2774114
          ],
          [
            -123.1035927,
            49.2773776
          ],
          [
            -123.1035318,
            49.2773463
          ],
          [
            -123.1034696,
            49.2773116
          ],
          [
            -123.1034004,
            49.2772732
          ],
          [
            -123.1033342,
            49.2772342
          ],
          [
            -123.1032772,
            49.2771973
          ],
          [
            -123.1032075,
            49.2771494
          ],
          [
            -123.1031548,
            49.2771071
          ],
          [
            -123.1031084,
            49.2770671
          ],
          [
            -123.1030345,
            49.2770007
          ],
          [
            -123.1029935,
            49.2769608
          ],
          [
            -123.1029677,
            49.2769347
          ],
          [
            -123.1029333,
            49.2768977
          ],
          [
            -123.1028935,
            49.2768527
          ],
          [
            -123.1028562,
            49.276809
          ],
          [
            -123.1028319,
            49.2767766
          ],
          [
            -123.1028081,
            49.276741
          ],
          [
            -123.1027896,
            49.2767113
          ],
          [
            -123.1027724,
            49.2766823
          ],
          [
            -123.1027556,
            49.2766524
          ],
          [
            -123.1027354,
            49.2766172
          ],
          [
            -123.1027155,
            49.2765724
          ],
          [
            -123.1026939,
            49.2765217
          ],
          [
            -123.1026789,
            49.2764819
          ],
          [
            -123.1026646,
            49.2764376
          ],
          [
            -123.1026511,
            49.2763934
          ],
          [
            -123.1026326,
            49.2763192
          ],
          [
            -123.1026234,
            49.2762831
          ],
          [
            -123.1026124,
            49.2762238
          ],
          [
            -123.1026024,
            49.2761703
          ],
          [
            -123.1025953,
            49.2761304
          ],
          [
            -123.102589,
            49.2760905
          ],
          [
            -123.102459,
            49.2752215
          ],
          [
            -123.1022689,
            49.2740223
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573506",
      "properties": {
        "@id": "way/923573506",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "65",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.105244,
            49.2777552
          ],
          [
            -123.1060242,
            49.277836
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923573507",
      "properties": {
        "@id": "way/923573507",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "65",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1060463,
            49.277802
          ],
          [
            -123.105717,
            49.2777675
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923858785",
      "properties": {
        "@id": "way/923858785",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-01-05",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8974017,
            49.210984
          ],
          [
            -122.8967958,
            49.2114085
          ],
          [
            -122.896403,
            49.2116975
          ],
          [
            -122.8960739,
            49.2119171
          ],
          [
            -122.8956916,
            49.2122015
          ],
          [
            -122.8954616,
            49.2123888
          ],
          [
            -122.8952004,
            49.2126366
          ],
          [
            -122.8949619,
            49.2129026
          ],
          [
            -122.8948376,
            49.2130767
          ],
          [
            -122.8945737,
            49.2134935
          ],
          [
            -122.8942393,
            49.2141006
          ],
          [
            -122.8941426,
            49.2143058
          ],
          [
            -122.8939493,
            49.2147736
          ],
          [
            -122.8938153,
            49.2151639
          ],
          [
            -122.8936857,
            49.2155671
          ],
          [
            -122.8934727,
            49.2162745
          ],
          [
            -122.8931761,
            49.2172416
          ],
          [
            -122.8930048,
            49.2178141
          ],
          [
            -122.8928532,
            49.2183206
          ],
          [
            -122.8926467,
            49.2189778
          ],
          [
            -122.8925171,
            49.2194542
          ],
          [
            -122.8923985,
            49.2199578
          ],
          [
            -122.892324,
            49.2203718
          ],
          [
            -122.8922439,
            49.2207195
          ],
          [
            -122.8921656,
            49.220975
          ],
          [
            -122.892058,
            49.2214514
          ],
          [
            -122.8919965,
            49.221701
          ],
          [
            -122.8919262,
            49.2219406
          ],
          [
            -122.8918295,
            49.2221931
          ],
          [
            -122.8916867,
            49.2224614
          ],
          [
            -122.8915264,
            49.2227025
          ],
          [
            -122.8914165,
            49.2228301
          ],
          [
            -122.891131,
            49.22314
          ],
          [
            -122.8908805,
            49.2233624
          ],
          [
            -122.890114,
            49.2240133
          ],
          [
            -122.8895687,
            49.224476
          ],
          [
            -122.8890924,
            49.2248803
          ],
          [
            -122.8887212,
            49.2251945
          ],
          [
            -122.8884224,
            49.2254456
          ],
          [
            -122.8879194,
            49.2258688
          ],
          [
            -122.8871286,
            49.226533
          ],
          [
            -122.88605,
            49.2274425
          ],
          [
            -122.8857688,
            49.227685
          ],
          [
            -122.8852262,
            49.228124
          ],
          [
            -122.884983,
            49.2283245
          ],
          [
            -122.8847516,
            49.2285078
          ],
          [
            -122.88453,
            49.2286834
          ],
          [
            -122.8840185,
            49.2290885
          ],
          [
            -122.8836824,
            49.229358
          ],
          [
            -122.8835159,
            49.2294932
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923858786",
      "properties": {
        "@id": "way/923858786",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-01-05",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8835634,
            49.2295195
          ],
          [
            -122.8840648,
            49.2291202
          ],
          [
            -122.8850573,
            49.2283346
          ],
          [
            -122.8857255,
            49.2277814
          ],
          [
            -122.8883458,
            49.2255747
          ],
          [
            -122.8896067,
            49.2245158
          ],
          [
            -122.890568,
            49.2236935
          ],
          [
            -122.8906846,
            49.2235963
          ],
          [
            -122.8911618,
            49.2231831
          ],
          [
            -122.8915468,
            49.2227584
          ],
          [
            -122.8916316,
            49.2226391
          ],
          [
            -122.8917945,
            49.2223875
          ],
          [
            -122.8918609,
            49.2222433
          ],
          [
            -122.8919306,
            49.2221112
          ],
          [
            -122.8919797,
            49.2219488
          ],
          [
            -122.89206,
            49.2216924
          ],
          [
            -122.8921228,
            49.2214274
          ],
          [
            -122.892203,
            49.2211042
          ],
          [
            -122.8923902,
            49.2203797
          ],
          [
            -122.892702,
            49.2189974
          ],
          [
            -122.8929228,
            49.2182908
          ],
          [
            -122.8931392,
            49.2175929
          ],
          [
            -122.8932854,
            49.2171173
          ],
          [
            -122.8938605,
            49.2152274
          ],
          [
            -122.8939905,
            49.2148342
          ],
          [
            -122.8941155,
            49.2144597
          ],
          [
            -122.8944365,
            49.2138458
          ],
          [
            -122.8947319,
            49.2133175
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923938536",
      "properties": {
        "@id": "way/923938536",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "3",
        "level": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1990-03-16",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.86893,
            49.2052515
          ],
          [
            -122.8695147,
            49.2051101
          ],
          [
            -122.8699264,
            49.2050231
          ],
          [
            -122.8705327,
            49.2049136
          ],
          [
            -122.8710143,
            49.2048393
          ],
          [
            -122.8713985,
            49.2047906
          ],
          [
            -122.8724026,
            49.2046758
          ],
          [
            -122.873277,
            49.2045718
          ],
          [
            -122.874137,
            49.2044712
          ],
          [
            -122.8747389,
            49.2044009
          ],
          [
            -122.8755973,
            49.2043006
          ],
          [
            -122.8761881,
            49.2042279
          ],
          [
            -122.876697,
            49.2041651
          ],
          [
            -122.8776097,
            49.2040618
          ],
          [
            -122.8787226,
            49.2039359
          ],
          [
            -122.8793924,
            49.2038561
          ],
          [
            -122.8804306,
            49.2037217
          ],
          [
            -122.8812055,
            49.2036265
          ],
          [
            -122.8819271,
            49.2035424
          ],
          [
            -122.8826218,
            49.2034618
          ],
          [
            -122.8835927,
            49.2033567
          ],
          [
            -122.8841604,
            49.2033104
          ],
          [
            -122.8847338,
            49.2032881
          ],
          [
            -122.8855762,
            49.2032902
          ],
          [
            -122.8865605,
            49.2033362
          ],
          [
            -122.8878265,
            49.203472
          ],
          [
            -122.8885723,
            49.2035915
          ],
          [
            -122.8891137,
            49.2037025
          ],
          [
            -122.8897222,
            49.203847
          ],
          [
            -122.8905033,
            49.2040298
          ],
          [
            -122.8914546,
            49.2042714
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/923938537",
      "properties": {
        "@id": "way/923938537",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "3",
        "level": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1990-03-16",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8914795,
            49.2042261
          ],
          [
            -122.8905202,
            49.2040011
          ],
          [
            -122.8897436,
            49.2038146
          ],
          [
            -122.8891237,
            49.2036692
          ],
          [
            -122.8885845,
            49.2035629
          ],
          [
            -122.8878431,
            49.2034448
          ],
          [
            -122.8865661,
            49.203307
          ],
          [
            -122.8855765,
            49.203261
          ],
          [
            -122.8847258,
            49.2032589
          ],
          [
            -122.8841468,
            49.203277
          ],
          [
            -122.8835688,
            49.2033191
          ],
          [
            -122.8829939,
            49.2033747
          ],
          [
            -122.8821472,
            49.2034741
          ],
          [
            -122.8811327,
            49.2035943
          ],
          [
            -122.8804796,
            49.2036719
          ],
          [
            -122.8798362,
            49.2037428
          ],
          [
            -122.879153,
            49.203809
          ],
          [
            -122.8773424,
            49.2040208
          ],
          [
            -122.8749265,
            49.204293
          ],
          [
            -122.87412,
            49.2043891
          ],
          [
            -122.872077,
            49.2046273
          ],
          [
            -122.871431,
            49.2047021
          ],
          [
            -122.8708792,
            49.2047853
          ],
          [
            -122.870456,
            49.204862
          ],
          [
            -122.8697328,
            49.2050153
          ],
          [
            -122.8693869,
            49.2050976
          ],
          [
            -122.8689062,
            49.2052194
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/925300336",
      "properties": {
        "@id": "way/925300336",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8928274,
            49.2454187
          ],
          [
            -122.8928374,
            49.2456539
          ],
          [
            -122.8928637,
            49.2458248
          ],
          [
            -122.8928992,
            49.2459448
          ],
          [
            -122.8929832,
            49.2461242
          ],
          [
            -122.893127,
            49.2463124
          ],
          [
            -122.8932765,
            49.2464524
          ],
          [
            -122.8936468,
            49.2466712
          ],
          [
            -122.8940534,
            49.246893
          ],
          [
            -122.8947167,
            49.2472592
          ],
          [
            -122.894873,
            49.2473526
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/925300337",
      "properties": {
        "@id": "way/925300337",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "name": "SkyTrain Expo and Millennium Lines",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9081029,
            49.2519294
          ],
          [
            -122.9088163,
            49.2520712
          ],
          [
            -122.9092598,
            49.2521558
          ],
          [
            -122.9098168,
            49.2522463
          ],
          [
            -122.9103354,
            49.2523203
          ],
          [
            -122.9121593,
            49.2525917
          ],
          [
            -122.9132858,
            49.2527458
          ],
          [
            -122.9145812,
            49.2529185
          ],
          [
            -122.9154939,
            49.2530538
          ],
          [
            -122.9158998,
            49.2531206
          ],
          [
            -122.9165609,
            49.2532443
          ],
          [
            -122.9172889,
            49.2533526
          ],
          [
            -122.918123,
            49.2534613
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/925300338",
      "properties": {
        "@id": "way/925300338",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "name": "SkyTrain Expo and Millennium Lines",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9181633,
            49.2533813
          ],
          [
            -122.9172322,
            49.2532512
          ],
          [
            -122.9156681,
            49.2530299
          ],
          [
            -122.914591,
            49.2528741
          ],
          [
            -122.9131067,
            49.2526791
          ],
          [
            -122.9121753,
            49.2525422
          ],
          [
            -122.9108694,
            49.2523466
          ],
          [
            -122.9099843,
            49.2522212
          ],
          [
            -122.9093314,
            49.2521127
          ],
          [
            -122.9086,
            49.2519813
          ],
          [
            -122.9081512,
            49.2518816
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1011105221",
      "properties": {
        "@id": "way/1011105221",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-2",
        "maxspeed": "60",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "covered",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.117876,
            49.2880462
          ],
          [
            -123.1181613,
            49.2880823
          ],
          [
            -123.1183933,
            49.2880971
          ],
          [
            -123.1186408,
            49.2881042
          ],
          [
            -123.1188565,
            49.2881016
          ],
          [
            -123.1190749,
            49.2880962
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1011105222",
      "properties": {
        "@id": "way/1011105222",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-1",
        "maxspeed": "60",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "covered",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.119072,
            49.2880823
          ],
          [
            -123.1188557,
            49.2880894
          ],
          [
            -123.1186387,
            49.2880925
          ],
          [
            -123.1183978,
            49.2880838
          ],
          [
            -123.1181596,
            49.2880682
          ],
          [
            -123.1178808,
            49.288026
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1021891062",
      "properties": {
        "@id": "way/1021891062",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0463078,
            49.2444097
          ],
          [
            -123.0465683,
            49.2445169
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1021891063",
      "properties": {
        "@id": "way/1021891063",
        "covered": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0460383,
            49.2442974
          ],
          [
            -123.0463078,
            49.2444097
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1021908750",
      "properties": {
        "@id": "way/1021908750",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0466378,
            49.2444437
          ],
          [
            -123.0463805,
            49.244337
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1021908751",
      "properties": {
        "@id": "way/1021908751",
        "covered": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0463805,
            49.244337
          ],
          [
            -123.0461076,
            49.2442265
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1032751161",
      "properties": {
        "@id": "way/1032751161",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1994-03-28",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.8505509,
            49.1994036
          ],
          [
            -122.8505452,
            49.2001845
          ],
          [
            -122.850564,
            49.2007173
          ],
          [
            -122.8505991,
            49.2011054
          ],
          [
            -122.8506123,
            49.2013132
          ],
          [
            -122.8506498,
            49.2014902
          ],
          [
            -122.8507088,
            49.2017233
          ],
          [
            -122.8507571,
            49.2018389
          ],
          [
            -122.8508135,
            49.2019792
          ],
          [
            -122.850902,
            49.2021491
          ],
          [
            -122.8509985,
            49.2022876
          ],
          [
            -122.8512292,
            49.202547
          ],
          [
            -122.851417,
            49.20271
          ],
          [
            -122.851948,
            49.2031323
          ],
          [
            -122.8526266,
            49.2035845
          ],
          [
            -122.8541879,
            49.2046017
          ],
          [
            -122.8549926,
            49.2051414
          ],
          [
            -122.8559097,
            49.2057452
          ],
          [
            -122.8564303,
            49.2060737
          ],
          [
            -122.8567063,
            49.2062464
          ],
          [
            -122.8570952,
            49.2064637
          ],
          [
            -122.8572913,
            49.2065539
          ],
          [
            -122.8577231,
            49.2067151
          ],
          [
            -122.8580018,
            49.2068159
          ],
          [
            -122.8583561,
            49.2069201
          ],
          [
            -122.8587126,
            49.2069894
          ],
          [
            -122.8589293,
            49.2070374
          ],
          [
            -122.8591911,
            49.2070804
          ],
          [
            -122.8595467,
            49.2071226
          ],
          [
            -122.8599142,
            49.2071454
          ],
          [
            -122.8602567,
            49.2071625
          ],
          [
            -122.8606303,
            49.2071646
          ],
          [
            -122.8610434,
            49.2071489
          ],
          [
            -122.8613787,
            49.2071068
          ],
          [
            -122.8617264,
            49.2070601
          ],
          [
            -122.8623094,
            49.2069425
          ],
          [
            -122.8629639,
            49.2067914
          ],
          [
            -122.863743,
            49.206588
          ],
          [
            -122.8660927,
            49.2059861
          ],
          [
            -122.8673415,
            49.2056603
          ],
          [
            -122.86893,
            49.2052515
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1032751162",
      "properties": {
        "@id": "way/1032751162",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9494404,
            49.199967
          ],
          [
            -122.9501146,
            49.1998003
          ],
          [
            -122.9503702,
            49.1997423
          ],
          [
            -122.9506061,
            49.1996969
          ],
          [
            -122.9507946,
            49.1996612
          ],
          [
            -122.9510074,
            49.1996272
          ],
          [
            -122.9515568,
            49.199566
          ],
          [
            -122.9520293,
            49.1995361
          ],
          [
            -122.9523351,
            49.1995238
          ],
          [
            -122.9527785,
            49.1995203
          ],
          [
            -122.9531977,
            49.1995333
          ],
          [
            -122.9537459,
            49.1995799
          ],
          [
            -122.9541161,
            49.1996219
          ],
          [
            -122.9545533,
            49.1997043
          ],
          [
            -122.9551702,
            49.1998463
          ],
          [
            -122.9555057,
            49.1999487
          ],
          [
            -122.9557417,
            49.2000381
          ],
          [
            -122.9560529,
            49.2001538
          ],
          [
            -122.9563235,
            49.2002757
          ],
          [
            -122.9566108,
            49.2004026
          ],
          [
            -122.9568361,
            49.2005165
          ],
          [
            -122.9570772,
            49.2006735
          ],
          [
            -122.9573106,
            49.200826
          ],
          [
            -122.957501,
            49.2009697
          ],
          [
            -122.9576837,
            49.2011212
          ],
          [
            -122.9580592,
            49.201484
          ],
          [
            -122.9582547,
            49.2017145
          ],
          [
            -122.9583943,
            49.2019234
          ],
          [
            -122.958496,
            49.2021131
          ],
          [
            -122.9585524,
            49.2022525
          ],
          [
            -122.9586114,
            49.2024085
          ],
          [
            -122.958668,
            49.2027037
          ],
          [
            -122.9586903,
            49.2028863
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1032751163",
      "properties": {
        "@id": "way/1032751163",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "85",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9494224,
            49.1999376
          ],
          [
            -122.9488781,
            49.200076
          ],
          [
            -122.9481213,
            49.2002676
          ],
          [
            -122.9474457,
            49.2004337
          ],
          [
            -122.9460667,
            49.2007833
          ],
          [
            -122.9455691,
            49.2008745
          ],
          [
            -122.9450285,
            49.2009611
          ],
          [
            -122.9444927,
            49.2010237
          ],
          [
            -122.9423868,
            49.2012294
          ],
          [
            -122.9422167,
            49.20125
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1032776248",
      "properties": {
        "@id": "way/1032776248",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-2",
        "maxspeed": "60",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "radius": "141m",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "yes",
        "tunnel:name": "Dunsmuir Tunnel",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1201079,
            49.2859608
          ],
          [
            -123.1203557,
            49.2861211
          ],
          [
            -123.1204915,
            49.2862614
          ],
          [
            -123.120592,
            49.2864039
          ],
          [
            -123.1206523,
            49.2865478
          ],
          [
            -123.1206742,
            49.2866636
          ],
          [
            -123.1206854,
            49.2867824
          ],
          [
            -123.1206874,
            49.2868971
          ],
          [
            -123.1206718,
            49.2870232
          ],
          [
            -123.1206462,
            49.2871388
          ],
          [
            -123.1206059,
            49.287244
          ],
          [
            -123.1205095,
            49.287416
          ],
          [
            -123.1203666,
            49.287591
          ],
          [
            -123.1201468,
            49.2877632
          ],
          [
            -123.1199876,
            49.2878716
          ],
          [
            -123.1198176,
            49.2879576
          ],
          [
            -123.1196289,
            49.2880192
          ],
          [
            -123.1194351,
            49.2880582
          ],
          [
            -123.1192387,
            49.2880821
          ],
          [
            -123.119072,
            49.2880823
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1032776249",
      "properties": {
        "@id": "way/1032776249",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-3",
        "maxspeed": "60",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "radius": "141m",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "tunnel": "yes",
        "tunnel:name": "Dunsmuir Tunnel",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1190749,
            49.2880962
          ],
          [
            -123.1192403,
            49.2880871
          ],
          [
            -123.119438,
            49.2880651
          ],
          [
            -123.1196328,
            49.288022
          ],
          [
            -123.1198231,
            49.2879598
          ],
          [
            -123.1199904,
            49.2878762
          ],
          [
            -123.1201605,
            49.2877722
          ],
          [
            -123.1203829,
            49.2875978
          ],
          [
            -123.1205259,
            49.2874216
          ],
          [
            -123.1206211,
            49.2872457
          ],
          [
            -123.1206586,
            49.287142
          ],
          [
            -123.1206872,
            49.2870268
          ],
          [
            -123.120701,
            49.2869005
          ],
          [
            -123.1207006,
            49.2867742
          ],
          [
            -123.1206873,
            49.2866619
          ],
          [
            -123.1206648,
            49.2865515
          ],
          [
            -123.120606,
            49.2864051
          ],
          [
            -123.120502,
            49.2862628
          ],
          [
            -123.1203609,
            49.2861193
          ],
          [
            -123.1201135,
            49.2859582
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1044143593",
      "properties": {
        "@id": "way/1044143593",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "35",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1985-12-11",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1022689,
            49.2740223
          ],
          [
            -123.1022578,
            49.2739603
          ],
          [
            -123.1022457,
            49.2739012
          ],
          [
            -123.1022376,
            49.2738693
          ],
          [
            -123.10223,
            49.2738413
          ],
          [
            -123.1022189,
            49.2738054
          ],
          [
            -123.1022099,
            49.2737788
          ],
          [
            -123.1021972,
            49.2737503
          ],
          [
            -123.1021808,
            49.2737173
          ],
          [
            -123.1021616,
            49.2736868
          ],
          [
            -123.1021426,
            49.2736557
          ],
          [
            -123.1021237,
            49.2736292
          ],
          [
            -123.102101,
            49.2736029
          ],
          [
            -123.1020764,
            49.2735735
          ],
          [
            -123.1020464,
            49.2735455
          ],
          [
            -123.1020177,
            49.2735216
          ],
          [
            -123.1019786,
            49.2734923
          ],
          [
            -123.1019112,
            49.2734494
          ],
          [
            -123.1018768,
            49.2734288
          ],
          [
            -123.10182,
            49.2734001
          ],
          [
            -123.1017481,
            49.2733707
          ],
          [
            -123.1016684,
            49.2733422
          ],
          [
            -123.1015802,
            49.2733165
          ],
          [
            -123.1014919,
            49.2732965
          ],
          [
            -123.1014715,
            49.2732923
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1044143594",
      "properties": {
        "@id": "way/1044143594",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "maxspeed": "35",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1985-12-11",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.1014663,
            49.2733798
          ],
          [
            -123.1014808,
            49.2733829
          ],
          [
            -123.101562,
            49.2734021
          ],
          [
            -123.101615,
            49.2734173
          ],
          [
            -123.1016508,
            49.2734284
          ],
          [
            -123.1016913,
            49.2734433
          ],
          [
            -123.1017276,
            49.2734575
          ],
          [
            -123.1017707,
            49.2734767
          ],
          [
            -123.1018161,
            49.273499
          ],
          [
            -123.1018628,
            49.2735248
          ],
          [
            -123.1018983,
            49.2735474
          ],
          [
            -123.1019284,
            49.2735677
          ],
          [
            -123.1019676,
            49.2735973
          ],
          [
            -123.1020039,
            49.2736276
          ],
          [
            -123.1020366,
            49.2736576
          ],
          [
            -123.1020547,
            49.2736781
          ],
          [
            -123.1020748,
            49.2737015
          ],
          [
            -123.102093,
            49.2737271
          ],
          [
            -123.1021208,
            49.2737658
          ],
          [
            -123.1021367,
            49.2737926
          ],
          [
            -123.1021504,
            49.2738203
          ],
          [
            -123.1021618,
            49.273846
          ],
          [
            -123.1021739,
            49.273878
          ],
          [
            -123.1021884,
            49.2739253
          ],
          [
            -123.1022045,
            49.2739812
          ],
          [
            -123.1022171,
            49.2740457
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1044143595",
      "properties": {
        "@id": "way/1044143595",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "45",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0705385,
            49.2638723
          ],
          [
            -123.0703327,
            49.2638063
          ],
          [
            -123.0702003,
            49.2637615
          ],
          [
            -123.0700699,
            49.2637157
          ],
          [
            -123.0699621,
            49.2636744
          ],
          [
            -123.0698618,
            49.2636305
          ],
          [
            -123.0697895,
            49.2635931
          ],
          [
            -123.0697011,
            49.2635443
          ],
          [
            -123.0696521,
            49.2635133
          ],
          [
            -123.0695952,
            49.2634755
          ],
          [
            -123.0695201,
            49.2634161
          ],
          [
            -123.0694554,
            49.2633583
          ],
          [
            -123.0694063,
            49.2633018
          ],
          [
            -123.0693482,
            49.263222
          ],
          [
            -123.0693063,
            49.2631519
          ],
          [
            -123.069278,
            49.2630915
          ],
          [
            -123.0692589,
            49.2630478
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1044143596",
      "properties": {
        "@id": "way/1044143596",
        "bridge": "viaduct",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "level": "2",
        "maxspeed": "45",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0690353,
            49.2626539
          ],
          [
            -123.0690455,
            49.2628222
          ],
          [
            -123.0690659,
            49.2629744
          ],
          [
            -123.0691169,
            49.2631275
          ],
          [
            -123.0692073,
            49.263275
          ],
          [
            -123.0693632,
            49.2634385
          ],
          [
            -123.0696154,
            49.2636059
          ],
          [
            -123.0697174,
            49.2636507
          ],
          [
            -123.0704257,
            49.2638989
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1044150087",
      "properties": {
        "@id": "way/1044150087",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "60",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0018739,
            49.2247871
          ],
          [
            -123.000052,
            49.2238656
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1044150088",
      "properties": {
        "@id": "way/1044150088",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "60",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.999983,
            49.2239305
          ],
          [
            -123.0018103,
            49.2248448
          ],
          [
            -123.002394,
            49.2251481
          ],
          [
            -123.0025241,
            49.2252166
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1044150089",
      "properties": {
        "@id": "way/1044150089",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "level": "3",
        "maxspeed": "60",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0025241,
            49.2252166
          ],
          [
            -123.0027888,
            49.225351
          ],
          [
            -123.0030306,
            49.225472
          ],
          [
            -123.003227,
            49.2255655
          ],
          [
            -123.0037443,
            49.2258061
          ],
          [
            -123.0038325,
            49.2258471
          ],
          [
            -123.0040605,
            49.2259503
          ],
          [
            -123.0045997,
            49.2261906
          ],
          [
            -123.0049876,
            49.2263662
          ],
          [
            -123.0059654,
            49.2267628
          ],
          [
            -123.0065246,
            49.2270064
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1050410741",
      "properties": {
        "@id": "way/1050410741",
        "bridge": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0559013,
            49.2483401
          ],
          [
            -123.0563077,
            49.2485094
          ],
          [
            -123.0570898,
            49.2488343
          ],
          [
            -123.0585215,
            49.2494316
          ],
          [
            -123.0591789,
            49.2497058
          ],
          [
            -123.0596772,
            49.249905
          ],
          [
            -123.0602024,
            49.2501272
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1050410742",
      "properties": {
        "@id": "way/1050410742",
        "bridge": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0602548,
            49.2500732
          ],
          [
            -123.0594556,
            49.2497628
          ],
          [
            -123.0586558,
            49.2494475
          ],
          [
            -123.0566149,
            49.2485939
          ],
          [
            -123.0559883,
            49.2483339
          ],
          [
            -123.0559279,
            49.2483091
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1050410743",
      "properties": {
        "@id": "way/1050410743",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0634974,
            49.25143
          ],
          [
            -123.063381,
            49.2513813
          ],
          [
            -123.0624499,
            49.2509897
          ],
          [
            -123.0617303,
            49.2506855
          ],
          [
            -123.06089,
            49.2503299
          ],
          [
            -123.0602548,
            49.2500732
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1050410744",
      "properties": {
        "@id": "way/1050410744",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0602024,
            49.2501272
          ],
          [
            -123.060834,
            49.2503944
          ],
          [
            -123.062406,
            49.2510664
          ],
          [
            -123.063326,
            49.2514444
          ],
          [
            -123.0634378,
            49.251491
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1269089489",
      "properties": {
        "@id": "way/1269089489",
        "bridge": "yes",
        "bridge:structure": "beam",
        "covered": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9122679,
            49.2016452
          ],
          [
            -122.9127069,
            49.2014068
          ],
          [
            -122.9131434,
            49.2011729
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1269089490",
      "properties": {
        "@id": "way/1269089490",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "3",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9131434,
            49.2011729
          ],
          [
            -122.9134256,
            49.2010217
          ],
          [
            -122.914039,
            49.2006948
          ],
          [
            -122.9142761,
            49.2005685
          ],
          [
            -122.9145479,
            49.2004372
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1269089491",
      "properties": {
        "@id": "way/1269089491",
        "bridge": "yes",
        "bridge:structure": "beam",
        "covered": "yes",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "2",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9131153,
            49.2011509
          ],
          [
            -122.9126807,
            49.2013864
          ],
          [
            -122.9122392,
            49.2016227
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1269089492",
      "properties": {
        "@id": "way/1269089492",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "3",
        "maxspeed": "70",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.9145174,
            49.2004079
          ],
          [
            -122.9142393,
            49.2005422
          ],
          [
            -122.913589,
            49.2008938
          ],
          [
            -122.9133928,
            49.2010006
          ],
          [
            -122.9131153,
            49.2011509
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1326418831",
      "properties": {
        "@id": "way/1326418831",
        "bridge": "yes",
        "bridge:structure": "beam",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "1",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "2002-08-31",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -122.894873,
            49.2473526
          ],
          [
            -122.8951017,
            49.2475152
          ],
          [
            -122.8951814,
            49.2475794
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1499470323",
      "properties": {
        "@id": "way/1499470323",
        "cutting": "track",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-1",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0532623,
            49.2472451
          ],
          [
            -123.0540006,
            49.2475516
          ],
          [
            -123.0549788,
            49.2479576
          ],
          [
            -123.0559013,
            49.2483401
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "id": "way/1499470324",
      "properties": {
        "@id": "way/1499470324",
        "cutting": "track",
        "electrified": "4th_rail",
        "electrified:rail": "side",
        "frequency": "0",
        "gauge": "1435",
        "layer": "-1",
        "maxspeed": "90",
        "name": "SkyTrain Expo Line",
        "operator": "British Columbia Rapid Transit Company",
        "operator:short": "BCRTC",
        "operator:wikidata": "Q141170526",
        "railway": "subway",
        "railway:ato": "uto",
        "railway:cbtc": "IL",
        "start_date": "1986-01-03",
        "voltage": "600"
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -123.0559279,
            49.2483091
          ],
          [
            -123.0532957,
            49.2472134
          ]
        ]
      }
    }
  ]
}
`;

try {
  const geojson = JSON.parse(rawData);

  if (!geojson.features || geojson.features.length === 0) {
    throw new Error("No features found. Did you paste the JSON inside the backticks?");
  }

  const segments = geojson.features
    .filter(f => f.geometry && f.geometry.type === 'LineString' && f.geometry.coordinates)
    .map(f => f.geometry.coordinates.map(c => [c[1], c[0]]));

  console.log(`Found ${segments.length} track segments.`);

  const distSq = (p1, p2) => (p1[0] - p2[0])**2 + (p1[1] - p2[1])**2;
  const waterfront = [49.285908, -123.111584];
  
  let currentPoint = waterfront;
  let remaining = [...segments];
  let mainPath = [waterfront];

  while (remaining.length > 0) {
    let bestIdx = -1;
    let bestDist = Infinity;
    let reverse = false;

    for (let i = 0; i < remaining.length; i++) {
      const seg = remaining[i];
      if (seg.length < 2) continue;

      const dStart = distSq(currentPoint, seg[0]);
      const dEnd = distSq(currentPoint, seg[seg.length - 1]);

      if (dStart < bestDist) { bestDist = dStart; bestIdx = i; reverse = false; }
      if (dEnd < bestDist) { bestDist = dEnd; bestIdx = i; reverse = true; }
    }

    if (bestDist > 0.005 || bestIdx === -1) {
      console.warn(`Stopped stitching. Next segment is too far away.`);
      break;
    }

    let nextSeg = remaining.splice(bestIdx, 1)[0];
    if (reverse) nextSeg.reverse();
    
    mainPath.push(...nextSeg.slice(1));
    currentPoint = mainPath[mainPath.length - 1];
  }

  console.log(`Successfully stitched ${mainPath.length} points into one continuous path.`);

  const formatPath = (path) => path.map(p => `  [${p[0].toFixed(6)}, ${p[1].toFixed(6)}],`).join('\n');
  const finalCode = `const EXPO_LINE_PATH = [\n${formatPath(mainPath)}\n];`;

  // Write to a unique file so it never locks
  const filename = `path-${Date.now()}.txt`;
  fs.writeFileSync(filename, finalCode);
  
  console.log(`\n✅ Saved to ${filename} (you can also just copy the output below)\n`);
  console.log("--------------------------------------------------");
  console.log(finalCode);
  console.log("--------------------------------------------------");

} catch (e) {
  console.error("ERROR:", e.message);
}