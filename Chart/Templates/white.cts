{
  "Value": {
    "$type": "OFT.Platform.Settings.Charting.ChartSettings, OFT.Platform",
    "ScaleByLowerValue": false,
    "ChartTraderIsEnabled": false,
    "UseLocalVolumes": false,
    "TIF": 0,
    "TemplateType": "snapshot",
    "IsContinious": false,
    "PanelsIsHidden": false,
    "DrawingObjectses": [],
    "EndDate": "2000-01-01T00:00:00",
    "Template": {
      "TemplateType": "template",
      "ScaleByLowerValue": false,
      "ChartScale": 1,
      "Panels": [
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.ClusterStatistic, ATAS.Indicators.Technical, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"HeaderBackground\\\": \\\"#FF545454\\\",\\r\\n  \\\"BackGroundColor\\\": \\\"#78000000\\\",\\r\\n  \\\"AskColor\\\": \\\"#FF008000\\\",\\r\\n  \\\"BidColor\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"VolumeColor\\\": \\\"#FFA9A9A9\\\",\\r\\n  \\\"TextColor\\\": \\\"#FFFFFFFF\\\",\\r\\n  \\\"GridColor\\\": \\\"#00FFFFFF\\\",\\r\\n  \\\"VisibleProportion\\\": false,\\r\\n  \\\"Font\\\": {\\r\\n    \\\"Size\\\": 9,\\r\\n    \\\"FontFamily\\\": \\\"Arial\\\",\\r\\n    \\\"Bold\\\": false,\\r\\n    \\\"Italic\\\": false,\\r\\n    \\\"Underline\\\": false,\\r\\n    \\\"Strikeout\\\": false\\r\\n  },\\r\\n  \\\"ShowAsk\\\": false,\\r\\n  \\\"ShowBid\\\": false,\\r\\n  \\\"ShowDelta\\\": true,\\r\\n  \\\"ShowDeltaPerVolume\\\": false,\\r\\n  \\\"ShowSessionDelta\\\": false,\\r\\n  \\\"ShowSessionDeltaPerVolume\\\": false,\\r\\n  \\\"ShowMaximumDelta\\\": false,\\r\\n  \\\"ShowMinimumDelta\\\": false,\\r\\n  \\\"ShowDeltaChange\\\": false,\\r\\n  \\\"ShowVolume\\\": true,\\r\\n  \\\"ShowVolumePerSecond\\\": false,\\r\\n  \\\"ShowSessionVolume\\\": false,\\r\\n  \\\"ShowTicks\\\": false,\\r\\n  \\\"ShowHighLow\\\": false,\\r\\n  \\\"ShowTime\\\": false,\\r\\n  \\\"ShowDuration\\\": false,\\r\\n  \\\"HideRowsDescription\\\": false,\\r\\n  \\\"CenterAlign\\\": false,\\r\\n  \\\"UseVolumeAlert\\\": false,\\r\\n  \\\"VolumeAlertValue\\\": 0.0,\\r\\n  \\\"VolumeAlertFile\\\": \\\"alert1\\\",\\r\\n  \\\"UseDeltaAlert\\\": false,\\r\\n  \\\"DeltaAlertValue\\\": 0.0,\\r\\n  \\\"DeltaAlertFile\\\": \\\"alert1\\\",\\r\\n  \\\"DenyToChangePanel\\\": true,\\r\\n  \\\"ShowDescription\\\": false,\\r\\n  \\\"Name\\\": \\\"Cluster Statistic\\\",\\r\\n  \\\"Panel\\\": \\\"1\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false,\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"Locked\\\": false,\\r\\n  \\\"AllowedInteraction\\\": true\\r\\n}\",\r\n  \"SourceType\": \"bars\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.0000}\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Cluster Statistic\\\",\\r\\n  \\\"DrawAbovePrice\\\": true\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": false\r\n}"
          ],
          "Height": 104,
          "Collapsed": false
        },
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.Delta, ATAS.Indicators.Technical, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"UseAlerts\\\": false,\\r\\n  \\\"AlertFile\\\": \\\"alert1\\\",\\r\\n  \\\"AlertForeColor\\\": \\\"#FFF7F9F9\\\",\\r\\n  \\\"AlertBGColor\\\": \\\"#FF4B4848\\\",\\r\\n  \\\"AlertFilter\\\": 0.0,\\r\\n  \\\"Mode\\\": \\\"candles\\\",\\r\\n  \\\"MinimizedMode\\\": false,\\r\\n  \\\"BarsDirection\\\": \\\"any\\\",\\r\\n  \\\"DeltaTypes\\\": \\\"any\\\",\\r\\n  \\\"Filter\\\": 0.0,\\r\\n  \\\"ShowDivergence\\\": false,\\r\\n  \\\"ShowVolume\\\": false,\\r\\n  \\\"VolLocation\\\": \\\"middle\\\",\\r\\n  \\\"Font\\\": {\\r\\n    \\\"Size\\\": 10,\\r\\n    \\\"FontFamily\\\": \\\"Arial\\\",\\r\\n    \\\"Bold\\\": false,\\r\\n    \\\"Italic\\\": false,\\r\\n    \\\"Underline\\\": false,\\r\\n    \\\"Strikeout\\\": false\\r\\n  },\\r\\n  \\\"FontColor\\\": \\\"#FF0000FF\\\",\\r\\n  \\\"ShowCurrentValues\\\": true,\\r\\n  \\\"UpColor\\\": \\\"#FF008000\\\",\\r\\n  \\\"DownColor\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"NeutralColor\\\": \\\"#FF808080\\\",\\r\\n  \\\"DenyToChangePanel\\\": false,\\r\\n  \\\"ShowDescription\\\": true,\\r\\n  \\\"Name\\\": \\\"Delta\\\",\\r\\n  \\\"Panel\\\": \\\"2\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false,\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"Locked\\\": false,\\r\\n  \\\"AllowedInteraction\\\": true\\r\\n}\",\r\n  \"SourceType\": \"bars\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": false,\\r\\n  \\\"ShowCurrentValue\\\": false,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF808080\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Delta range high\\\",\\r\\n  \\\"DrawAbovePrice\\\": true\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": false,\\r\\n  \\\"ShowCurrentValue\\\": false,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF808080\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Delta range low\\\",\\r\\n  \\\"DrawAbovePrice\\\": true\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": false,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF008000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Positive delta\\\",\\r\\n  \\\"DrawAbovePrice\\\": true\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": false,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Negative delta\\\",\\r\\n  \\\"DrawAbovePrice\\\": true\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.CandleDataSeries, ATAS.Indicators, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowCurrentValue\\\": false,\\r\\n  \\\"UpCandleColor\\\": \\\"#FF008000\\\",\\r\\n  \\\"DownCandleColor\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"BorderColor\\\": \\\"#FF808080\\\",\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Mode\\\": \\\"candles\\\",\\r\\n  \\\"Type\\\": \\\"candle\\\",\\r\\n  \\\"Name\\\": \\\"Delta candles\\\",\\r\\n  \\\"DrawAbovePrice\\\": true\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF008000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Up\\\",\\r\\n  \\\"DrawAbovePrice\\\": true\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Down\\\",\\r\\n  \\\"DrawAbovePrice\\\": true\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": false,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"onlyValueOnAxis\\\",\\r\\n  \\\"Color\\\": \\\"#FF008000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Current Up Values\\\",\\r\\n  \\\"DrawAbovePrice\\\": true\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": false,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"onlyValueOnAxis\\\",\\r\\n  \\\"Color\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Current Down Values\\\",\\r\\n  \\\"DrawAbovePrice\\\": true\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": true\r\n}"
          ],
          "Height": 87,
          "Collapsed": false
        },
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.ImbalanceRatio, ATAS.Indicators.Technical, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"Ratio\\\": 4,\\r\\n  \\\"VolumeFilter\\\": 0,\\r\\n  \\\"BuyColor\\\": \\\"#FF0000FF\\\",\\r\\n  \\\"SellColor\\\": \\\"#FFEDFC17\\\",\\r\\n  \\\"TextColor\\\": \\\"#FFFFFFFF\\\",\\r\\n  \\\"Transparency\\\": 50,\\r\\n  \\\"ShowTop\\\": true,\\r\\n  \\\"ShowBot\\\": true,\\r\\n  \\\"DenyToChangePanel\\\": true,\\r\\n  \\\"ShowDescription\\\": true,\\r\\n  \\\"Name\\\": \\\"Imbalance Ratio\\\",\\r\\n  \\\"Panel\\\": \\\"Chart\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false,\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"Locked\\\": false,\\r\\n  \\\"AllowedInteraction\\\": true\\r\\n}\",\r\n  \"SourceType\": \"bars\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.PriceSelectionDataSeries, ATAS.Indicators, Version=5.8.1.452, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"Type\\\": \\\"priceSelection\\\",\\r\\n  \\\"Name\\\": \\\"Imbalance Range\\\",\\r\\n  \\\"DrawAbovePrice\\\": true\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": true\r\n}"
          ],
          "Height": 60,
          "Collapsed": false
        }
      ],
      "Indicators": [],
      "clusterSettings": {
        "Caption": "Cluster Settings",
        "Volumes": "#FF6495ED",
        "Bid": "#FFFF0000",
        "Ask": "#FF32CD32",
        "ClusterBorderWidth": 1,
        "Foreground": "#FF000000",
        "AutoSize": true,
        "FontSize": 9.0,
        "CutLongText": true,
        "MinimumClusterWidthToShowText": 10,
        "ValueAreaColor": "#7A1C497F",
        "ShowValueArea": false,
        "ImbalanceBid": "#FFFF0000",
        "ImbalanceAsk": "#FF008000",
        "MinimumImbalanceDifference": 0,
        "IgnoreZeroValues": false,
        "ImbalanceVolumeFilter": 0,
        "ImbalanceRate": 3000,
        "ShowDirectionMarker": true,
        "DirectionMakerWidth": 0,
        "ClusterBorderPen": {
          "Color": "#FF403D3D",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "BorderColorByDirection": false,
        "ClustersContentMode": "bidXAsk",
        "ClustersMode": "bidAskHistogram",
        "UseBorderOfEachPriceLevel": false,
        "ColorScheme": "volumeBasedBidAsk",
        "ClusterBG": "#00FFFFFF",
        "VolumeColor": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": "#FF6495ED"
        },
        "BidColor": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#FFFF0000"
        },
        "AskColor": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#FF32CD32"
        },
        "HeatmapType": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": 0
        },
        "UpperCutOff": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": 20
        },
        "Contrast": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": 0
        },
        "BorderType": "none",
        "BorderColorByDirectionFilter": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": false
        },
        "ClusterBorderPenFilter": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": {
            "Color": "#FF403D3D",
            "LineDashStyle": 0,
            "Width": 1
          }
        },
        "ShowDirectionMarkerFilter": {
          "EnabledVisible": true,
          "Enabled": true,
          "Value": 0
        },
        "Showtext": true,
        "ForegroundFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#FF000000"
        },
        "AutoSizeFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": true
        },
        "FontSizeFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 9.0
        },
        "Divider": 1.0,
        "CutLongTextFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": true
        },
        "MinimumClusterWidthToShowTextFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 10
        },
        "MaxVolType": "positiveDelta",
        "MaxVolColor": "#00FFFFFF",
        "MaxVolSelectionWidth": 1,
        "MaxVolTextColor": "#FF000000",
        "MaxLevelBold": true,
        "ValueAreaColorFilter": {
          "EnabledVisible": true,
          "Enabled": false,
          "Value": "#7A1C497F"
        },
        "ProportionalMode": "bar",
        "ProportionalHistogram": false,
        "ProportionByAllBars": false,
        "GradientRate": 30,
        "CustomProportionValue": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": 0.0
        },
        "CustomproportionVolume": 0.0,
        "EnableBidAskImbalance": true,
        "ImbalanceBidFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#FFFF0000"
        },
        "ImbalanceAskFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": "#FF008000"
        },
        "ImbalanceRateFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 3000
        },
        "ImbalanceVolumeFilterInt": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 0
        },
        "MinimumImbalanceDifferenceFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 0
        },
        "IgnoreZeroValuesFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": false
        },
        "BoldFontForImbalances": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": false
        },
        "CustomRowHeight": {
          "EnabledVisible": true,
          "Enabled": false,
          "Value": 16
        },
        "Filters": [
          {
            "EjectBid": true,
            "EjectAsk": false,
            "EjectionAsk": "Black",
            "EjectionBid": "83, 55, 117",
            "EjectionBackground": "83, 55, 117",
            "EjectionForeground": "0, 0, 0",
            "BackgroundCl": "83, 55, 117",
            "ForegroundCl": "0, 0, 0",
            "Caption": "",
            "Type": "bid",
            "Filter": 150.0,
            "Background": "#FF533775",
            "Foreground": "#FF000000"
          },
          {
            "EjectBid": false,
            "EjectAsk": true,
            "EjectionAsk": "79, 129, 189",
            "EjectionBid": "Black",
            "EjectionBackground": "79, 129, 189",
            "EjectionForeground": "0, 0, 0",
            "BackgroundCl": "79, 129, 189",
            "ForegroundCl": "0, 0, 0",
            "Caption": "",
            "Type": "ask",
            "Filter": 150.0,
            "Background": "#FF4F81BD",
            "Foreground": "#FF000000"
          },
          {
            "EjectBid": false,
            "EjectAsk": false,
            "EjectionAsk": "Black",
            "EjectionBid": "Black",
            "EjectionBackground": "",
            "EjectionForeground": "",
            "BackgroundCl": "0, 0, 0",
            "ForegroundCl": "0, 0, 0",
            "Caption": "",
            "Type": "bid",
            "Filter": 0.0,
            "Background": "#FF000000",
            "Foreground": "#FF000000"
          },
          {
            "EjectBid": false,
            "EjectAsk": false,
            "EjectionAsk": "Black",
            "EjectionBid": "Black",
            "EjectionBackground": "",
            "EjectionForeground": "",
            "BackgroundCl": "0, 0, 0",
            "ForegroundCl": "0, 0, 0",
            "Caption": "",
            "Type": "bid",
            "Filter": 0.0,
            "Background": "#FF000000",
            "Foreground": "#FF000000"
          }
        ]
      },
      "colorsettings": {
        "Caption": "Chart Color Settings",
        "BackgroundBrushSettings": {
          "StartColor": "#FFA5A5A5",
          "EndColor": "#FFADD8E6",
          "UseEndColor": false
        },
        "BackGround": "#FFA5A5A5",
        "CrosshairPen": {
          "Color": "#AF808080",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "StateColor": "#FFCFA246",
        "TextHistogramColor": "#FF000000",
        "PriceLinePen": {
          "Color": "#FF000000",
          "LineDashStyle": "dot",
          "Width": 1
        },
        "ExtendPriceLine": true,
        "GridPen": {
          "Color": "#FFEFE3E5",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "ShowVHorizontalGrid": false,
        "CustomGridStep": 0,
        "ShowVericalGrid": false,
        "CustomVertGridStep": 0,
        "NewSessionPen": {
          "Color": "#00FFFFFF",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "AxisColor": "#FFFFFFFF",
        "AxisTextColor": "#FF000000",
        "FontSize": 8,
        "AxisCurrentBackColor": "#FF000000",
        "AxisCurrentForeColor": "#FFFFFFE0",
        "TimeFormat": "auto",
        "HidePriceAxis": false,
        "BuyColor": "#FF008000",
        "SellColor": "#FFFF0000",
        "DrawCandleBorder": true,
        "CandleBorderColorAsBody": false,
        "CellBorderColor": "#FF403D3D",
        "CandleBorderWidth": 1,
        "BarsWidth": 1,
        "DojiBarColor": "#FF000000",
        "DownBarColor": "#FFFF0000",
        "UpBarColor": "#FF008000",
        "ShowOpenOfBar": true,
        "ShowCloseOfBar": true,
        "ChartLinePen": {
          "Color": "#FF6D6C6C",
          "LineDashStyle": "solid",
          "Width": 2
        },
        "MountainLinePen": {
          "Color": "#FF476B96",
          "LineDashStyle": "solid",
          "Width": 2
        },
        "MountainBrushSettings": {
          "StartColor": "#FF093367",
          "EndColor": "#649ACCFF",
          "UseEndColor": false
        },
        "UseSessionTime": false,
        "SessionStart": "00:00:00",
        "SessionEnd": "23:59:59",
        "PriceBorder": false,
        "ShowIndicatorsValuesOnMouseOver": true,
        "AutoTransFormCandles": true,
        "CandleSizeTotransformToClusters": 20,
        "HideClustersPanel": false,
        "AutoTransformHorizontalLines": false,
        "AutoTransformVerticalLines": false,
        "PriceOffset": 200,
        "ChartOffset": 30,
        "UseSmoothing": true,
        "MouseWheelBehavior": "zoom",
        "MinimizeValues": false,
        "DigitsAfterComma": 2,
        "KeepSelectedObjects": false,
        "ObjectsSelectionDrawingColor": "30, 83, 228",
        "ObjectsSelectionColor": "#FF1E53E4",
        "Sensitivity": 0,
        "IndicatorsListIsCollapsed": false,
        "VolumeValuesFormat": "{0:0.##}",
        "RedrawInterval": 100,
        "NewSessionLineColor": "#00FFFFFF",
        "Сl_crosshair": "#AF808080",
        "PriceLineColor": "#FF000000",
        "GridColor": "#FFEFE3E5",
        "HistogramLinesColor": "#C8ADD8E6",
        "HistogramColor": "#FF808080",
        "ShowCumulativeValues": true,
        "BidColor": "#FFE84548",
        "AskColor": "#FF49D149",
        "ValueAreaColor": "#FFC8D8FF",
        "PocColor": "#FFC8D8FF",
        "HistogramTextColor": "#FF35212E",
        "ExtendPoc": false,
        "ExtendValueArea": false
      },
      "histogramInterval": "contract",
      "typeHistogram": "bidAsk",
      "ShowHistogram": false,
      "ShowingDigital": false,
      "UseOpacility": false,
      "ShowTxtMouse": true,
      "VisibleCrossHair": true,
      "ShowValueArea": true,
      "ShowPoc": true,
      "AlwaysOnTop": false,
      "BarsType": "clusters",
      "ClusterWidth": 68.396235115458033396265869813,
      "TypeCluster": "volume",
      "RowHeight": 5.24771614078689,
      "ChangeHeightmanualy": true,
      "PaintingMode": "drawCrossHair",
      "TradingSettings": {
        "PnLMode": "money",
        "Caption": "",
        "ShowText": true,
        "OneClickMode": false,
        "TradingMode": "autoDetection",
        "StopMode": "stop",
        "Slippage": 5,
        "ShowTrades": "visible",
        "Size": 6,
        "TradesColor": "#FF000080",
        "TradesSellColor": "#FFFF0000",
        "ShowOrders": "visible",
        "OrdersOffset": 115,
        "LimitColors": "#FF87CEEB",
        "StopColor": "#FFFFA0A2",
        "OrderstextColor": "#FF000000",
        "ShowPosition": "visible",
        "PositionOffset": 115,
        "PositionPositiveVolumeColors": "#FF00FF00",
        "PositionNegativeVolumeColors": "#FFFF0000",
        "PositionTextColors": "#FFFFFFFF",
        "PositionBackGround": "#FF000000",
        "PositionPositive": "#FF008000",
        "PositionNegative": "#FFFF0000",
        "ClosepositionColor": "#FF87CEEB"
      },
      "ClusterVisualizationType": "bidAskLadder",
      "Version": 1,
      "UseAutoScale": true,
      "LayoutString": "<XtraSerializer version=\"1.0\" application=\"\">\r\n  <property name=\"#LayoutVersion\">1.1</property>\r\n  <property name=\"$BarManager\" iskey=\"true\" value=\"BarManager\">\r\n    <property name=\"RuntimeCustomizations\" iskey=\"true\" value=\"2\">\r\n      <property name=\"Item1\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">DockInfo.ContainerName</property>\r\n        <property name=\"NewValue\" type=\"System.String\" />\r\n        <property name=\"OldValue\" isnull=\"true\" />\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">ClusterBar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">176783484</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n      <property name=\"Item2\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">Visible</property>\r\n        <property name=\"NewValue\" type=\"System.Boolean\">true</property>\r\n        <property name=\"OldValue\" type=\"System.Boolean\">true</property>\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">ClusterBar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">176816281</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n    </property>\r\n  </property>\r\n  <property name=\"$BarManager$ChartLayoutControl\" iskey=\"true\" value=\"BarManager$ChartLayoutControl\">\r\n    <property name=\"Items\" iskey=\"true\" value=\"4\">\r\n      <property name=\"Item1\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"SerializableItem.TypeName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\">LayoutGroup</property>\r\n        <property name=\"SerializableItem.ParentName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n        <property name=\"SerializableItem.ParentCollectionName\" isnull=\"true\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n        <property name=\"Name\">_layoutItem1</property>\r\n      </property>\r\n      <property name=\"Item2\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"Name\">_layoutItem2</property>\r\n        <property name=\"TypeName\">Border</property>\r\n        <property name=\"ParentName\">_layoutItem1</property>\r\n        <property name=\"ParentCollectionName\" isnull=\"true\" />\r\n        <property name=\"HorizontalAlignment\">Stretch</property>\r\n        <property name=\"VerticalAlignment\">Stretch</property>\r\n        <property name=\"Width\">NaN</property>\r\n        <property name=\"Height\">NaN</property>\r\n      </property>\r\n      <property name=\"Item3\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"Orientation\">Vertical</property>\r\n        <property name=\"SerializableItem.TypeName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\">LayoutGroup</property>\r\n        <property name=\"SerializableItem.ParentName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n        <property name=\"SerializableItem.ParentCollectionName\" isnull=\"true\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n        <property name=\"VerticalAlignment\">Stretch</property>\r\n        <property name=\"Width\">250</property>\r\n        <property name=\"Name\">ChartTraderGroup</property>\r\n      </property>\r\n      <property name=\"Item4\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"Name\">ChartTraderLoadingDecorator</property>\r\n        <property name=\"TypeName\">LoadingDecorator</property>\r\n        <property name=\"ParentName\">ChartTraderGroup</property>\r\n        <property name=\"ParentCollectionName\" isnull=\"true\" />\r\n        <property name=\"HorizontalAlignment\">Stretch</property>\r\n        <property name=\"VerticalAlignment\">Stretch</property>\r\n        <property name=\"Width\">NaN</property>\r\n        <property name=\"Height\">NaN</property>\r\n      </property>\r\n    </property>\r\n    <property name=\"Orientation\">Horizontal</property>\r\n    <property name=\"SerializableItem.TypeName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\">LayoutControl</property>\r\n  </property>\r\n  <property name=\"$ChartLayoutControl$BarManager$ChartGroup\" iskey=\"true\" value=\"ChartLayoutControl$BarManager$ChartGroup\">\r\n    <property name=\"SerializableItem.TypeName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\">LayoutGroup</property>\r\n    <property name=\"SerializableItem.ParentName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n    <property name=\"SerializableItem.ParentCollectionName\" isnull=\"true\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n    <property name=\"Name\">_layoutItem1</property>\r\n  </property>\r\n</XtraSerializer>"
    },
    "TimeFrame": {
      "Period": "timeFrame",
      "PeriodParameters": {
        "$type": "OFT.Controls.Chart.MinuteTimeFrame, OFT.Controls",
        "TimeFrame": "m5",
        "CustomTimeFrame": 1,
        "Label": "@value",
        "DefaultDaysToLoad": 4,
        "VisualName": "M5"
      },
      "LoadCustomDaysCount": false,
      "CustomDaysCount": 1,
      "LoadCustomEndDate": false,
      "CustomEndDate": "2023-01-19T06:46:55.603721+07:00"
    },
    "Canvas": {
      "Elements": []
    },
    "LinkedPanels": {
      "$type": "System.String[], mscorlib",
      "$values": []
    },
    "Width": 68.396235115458033396265869813,
    "StrategySettings": [],
    "TraderSettings": {
      "SelectedTIF": "goodTillCancel",
      "SelectedOrderType": "market",
      "Volume": 0.0,
      "VolumeByCurrency": {},
      "IsPercentMode": false,
      "PercentVolume": 0.0,
      "StopPrice": 0.0,
      "StopTriggerPriceType": "none",
      "MarketOrderFlags": {},
      "LimitOrderFlags": {},
      "ConditionalMarketOrderFlags": {},
      "ConditionalLimitOrderFlags": {}
    }
  },
  "IsSystem": false
}