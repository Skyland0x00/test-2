{
  "Value": {
    "$type": "OFT.Platform.Settings.Charting.ChartSettings, OFT.Platform",
    "ScaleByLowerValue": false,
    "ChartTraderIsEnabled": false,
    "SelectedAccount": "CRYPTO02882",
    "Volume": 0.001,
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
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.Delta, ATAS.Indicators.Technical, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"UseAlerts\\\": false,\\r\\n  \\\"AlertFile\\\": \\\"alert1\\\",\\r\\n  \\\"AlertForeColor\\\": \\\"#FFF7F9F9\\\",\\r\\n  \\\"AlertBGColor\\\": \\\"#FF4B4848\\\",\\r\\n  \\\"AlertFilter\\\": 0.0,\\r\\n  \\\"Mode\\\": \\\"candles\\\",\\r\\n  \\\"MinimizedMode\\\": false,\\r\\n  \\\"BarsDirection\\\": \\\"any\\\",\\r\\n  \\\"DeltaTypes\\\": \\\"any\\\",\\r\\n  \\\"Filter\\\": 0.0,\\r\\n  \\\"ShowDivergence\\\": false,\\r\\n  \\\"ShowVolume\\\": false,\\r\\n  \\\"VolLocation\\\": \\\"middle\\\",\\r\\n  \\\"Font\\\": {\\r\\n    \\\"Size\\\": 10,\\r\\n    \\\"FontFamily\\\": \\\"Arial\\\",\\r\\n    \\\"Bold\\\": false,\\r\\n    \\\"Italic\\\": false,\\r\\n    \\\"Underline\\\": false,\\r\\n    \\\"Strikeout\\\": false\\r\\n  },\\r\\n  \\\"FontColor\\\": \\\"#FF0000FF\\\",\\r\\n  \\\"DenyToChangePanel\\\": false,\\r\\n  \\\"ShowDescription\\\": true,\\r\\n  \\\"Name\\\": \\\"Delta\\\",\\r\\n  \\\"Panel\\\": \\\"1\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false\\r\\n}\",\r\n  \"SourceType\": \"bars\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": false,\\r\\n  \\\"ShowCurrentValue\\\": false,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF808080\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Delta range high\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": false,\\r\\n  \\\"ShowCurrentValue\\\": false,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF808080\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Delta range low\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF008000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Positive delta\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": false,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Negative delta\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.CandleDataSeries, ATAS.Indicators, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"UpCandleColor\\\": \\\"#FF008000\\\",\\r\\n  \\\"DownCandleColor\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"BorderColor\\\": \\\"#FF808080\\\",\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Mode\\\": \\\"candles\\\",\\r\\n  \\\"Type\\\": \\\"candle\\\",\\r\\n  \\\"Name\\\": \\\"Delta candles\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF008000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Up\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Down\\\"\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": true\r\n}"
          ],
          "Height": 61
        },
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.CumulativeDelta, ATAS.Indicators.Technical, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"Mode\\\": \\\"candles\\\",\\r\\n  \\\"SessionDeltaMode\\\": true,\\r\\n  \\\"UseScale\\\": true,\\r\\n  \\\"DenyToChangePanel\\\": false,\\r\\n  \\\"ShowDescription\\\": true,\\r\\n  \\\"Name\\\": \\\"Cumulative Delta\\\",\\r\\n  \\\"Panel\\\": \\\"2\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false\\r\\n}\",\r\n  \"SourceType\": \"bars\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 2,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"onlyValueOnAxis\\\",\\r\\n  \\\"Color\\\": \\\"#FF008000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Cumulative Delta\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.CandleDataSeries, ATAS.Indicators, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"UpCandleColor\\\": \\\"#FF008000\\\",\\r\\n  \\\"DownCandleColor\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"BorderColor\\\": \\\"#FF808080\\\",\\r\\n  \\\"Visible\\\": true,\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Mode\\\": \\\"candles\\\",\\r\\n  \\\"Type\\\": \\\"candle\\\",\\r\\n  \\\"Name\\\": \\\"Candles\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FF008000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Positive Histogram\\\"\\r\\n}\"\r\n    },\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.7.32.432, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:0.####}\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"hide\\\",\\r\\n  \\\"Color\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Negative Histogram\\\"\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [\r\n    {\r\n      \"Color\": \"#FF808080\",\r\n      \"LineDashStyle\": \"solid\",\r\n      \"Width\": 1,\r\n      \"UseScale\": true,\r\n      \"Value\": 0.0,\r\n      \"Text\": \"\",\r\n      \"Type\": \"line\",\r\n      \"Name\": \"Zero\"\r\n    }\r\n  ],\r\n  \"ShowDescription\": true\r\n}"
          ],
          "Height": 275
        }
      ],
      "Indicators": [],
      "clusterSettings": {
        "ClustersFormat": "{0:0.##}",
        "Caption": "Cluster Settings",
        "Volumes": "#FF6495ED",
        "Bid": "#FFFF0000",
        "Ask": "#FF32CD32",
        "ClusterBorderWidth": 1,
        "Foreground": "#FFFFFFFF",
        "AutoSize": true,
        "FontSize": 9.0,
        "CutLongText": true,
        "MinimumClusterWidthToShowText": 10,
        "DigitsAfterComma": 2,
        "ValueAreaColor": "#7A1C497F",
        "ShowValueArea": false,
        "ImbalanceBid": "#FFF2DD1F",
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
        "ClustersContentMode": "bidAskCentered",
        "ClustersMode": "volumeHistogram",
        "UseBorderOfEachPriceLevel": false,
        "ColorScheme": "delta",
        "ClusterBG": "#C8F2F2F2",
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
          "Value": 21
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
          "Value": "#FFFFFFFF"
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
        "DigitsAfterCommaFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": 2
        },
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
        "MaxVolType": "volume",
        "MaxVolColor": "#FF000000",
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
        "GradientRate": 70,
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
          "Value": "#FFF2DD1F"
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
        "CustomRowHeight": {
          "EnabledVisible": true,
          "Enabled": false,
          "Value": 16
        },
        "Filters": [
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
          "StartColor": "#00FFFFFF",
          "EndColor": "#FFADD8E6",
          "UseEndColor": false
        },
        "BackGround": "#00FFFFFF",
        "CrosshairPen": {
          "Color": "#AF808080",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "StateColor": "#FFCFA246",
        "TextHistogramColor": "#FF000000",
        "PriceLinePen": {
          "Color": "#3FFFFFFF",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "ExtendPriceLine": false,
        "GridPen": {
          "Color": "#00FFFFFF",
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
        "PriceOffset": 100,
        "ChartOffset": 30,
        "UseSmoothing": true,
        "MouseWheelBehavior": "zoom",
        "KeepSelectedObjects": false,
        "ObjectsSelectionDrawingColor": "30, 83, 228",
        "ObjectsSelectionColor": "#FF1E53E4",
        "Sensitivity": 0,
        "RedrawInterval": 100,
        "NewSessionLineColor": "#00FFFFFF",
        "Сl_crosshair": "#AF808080",
        "PriceLineColor": "#3FFFFFFF",
        "GridColor": "#00FFFFFF",
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
      "BarsType": "candles",
      "ClusterWidth": 8.083161896422942990852158840,
      "TypeCluster": "volume",
      "RowHeight": 1.5800587940293702,
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
      "LayoutString": "<XtraSerializer version=\"1.0\" application=\"\">\r\n  <property name=\"#LayoutVersion\">1.0</property>\r\n  <property name=\"$BarManager\" iskey=\"true\" value=\"BarManager\">\r\n    <property name=\"RuntimeCustomizations\" iskey=\"true\" value=\"3\">\r\n      <property name=\"Item1\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">DockInfo.ContainerName</property>\r\n        <property name=\"NewValue\" type=\"System.String\" />\r\n        <property name=\"OldValue\" isnull=\"true\" />\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">ClusterBar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">586664562</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n      <property name=\"Item2\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">DockInfo.ContainerName</property>\r\n        <property name=\"NewValue\" type=\"System.String\" />\r\n        <property name=\"OldValue\" type=\"System.String\" />\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">ClusterBar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">34366250</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n      <property name=\"Item3\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"PropertyName\">Visible</property>\r\n        <property name=\"NewValue\" type=\"System.Boolean\">false</property>\r\n        <property name=\"OldValue\" type=\"System.Boolean\">true</property>\r\n        <property name=\"ActOnHost\">false</property>\r\n        <property name=\"TargetName\">ClusterBar</property>\r\n        <property name=\"Overwrite\">true</property>\r\n        <property name=\"Timestamp\">34490953</property>\r\n        <property name=\"CustomizationType\">DevExpress.Xpf.Bars.RuntimePropertyCustomization</property>\r\n        <property name=\"AffectedTargets\" iskey=\"true\" value=\"0\" />\r\n      </property>\r\n    </property>\r\n  </property>\r\n  <property name=\"$BarManager$ChartLayoutControl\" iskey=\"true\" value=\"BarManager$ChartLayoutControl\">\r\n    <property name=\"Items\" iskey=\"true\" value=\"5\">\r\n      <property name=\"Item1\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"SerializableItem.TypeName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\">LayoutGroup</property>\r\n        <property name=\"SerializableItem.ParentName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n        <property name=\"SerializableItem.ParentCollectionName\" isnull=\"true\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n        <property name=\"Name\">_layoutItem1</property>\r\n      </property>\r\n      <property name=\"Item2\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"Name\">_layoutItem2</property>\r\n        <property name=\"TypeName\">Border</property>\r\n        <property name=\"ParentName\">_layoutItem1</property>\r\n        <property name=\"ParentCollectionName\" isnull=\"true\" />\r\n        <property name=\"HorizontalAlignment\">Stretch</property>\r\n        <property name=\"VerticalAlignment\">Stretch</property>\r\n        <property name=\"Width\">NaN</property>\r\n        <property name=\"Height\">NaN</property>\r\n      </property>\r\n      <property name=\"Item3\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"Orientation\">Vertical</property>\r\n        <property name=\"SerializableItem.TypeName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\">LayoutGroup</property>\r\n        <property name=\"SerializableItem.ParentName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n        <property name=\"SerializableItem.ParentCollectionName\" isnull=\"true\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n        <property name=\"VerticalAlignment\">Stretch</property>\r\n        <property name=\"Width\">250</property>\r\n        <property name=\"Name\">ChartTraderGroup</property>\r\n      </property>\r\n      <property name=\"Item4\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"SerializableItem.TypeName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\">LayoutGroup</property>\r\n        <property name=\"SerializableItem.ParentName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n        <property name=\"SerializableItem.ParentCollectionName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\">AvailableItems</property>\r\n        <property name=\"Width\">200</property>\r\n        <property name=\"Name\">_layoutItem3</property>\r\n      </property>\r\n      <property name=\"Item5\" isnull=\"true\" iskey=\"true\">\r\n        <property name=\"Name\">_layoutItem4</property>\r\n        <property name=\"TypeName\">ScrollViewer</property>\r\n        <property name=\"ParentName\" />\r\n        <property name=\"ParentCollectionName\">AvailableItems</property>\r\n        <property name=\"HorizontalAlignment\">Stretch</property>\r\n        <property name=\"VerticalAlignment\">Stretch</property>\r\n        <property name=\"Width\">NaN</property>\r\n        <property name=\"Height\">NaN</property>\r\n      </property>\r\n    </property>\r\n    <property name=\"Orientation\">Horizontal</property>\r\n    <property name=\"SerializableItem.TypeName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\">LayoutControl</property>\r\n  </property>\r\n  <property name=\"$ChartLayoutControl$BarManager$ChartTraderGroup\" iskey=\"true\" value=\"ChartLayoutControl$BarManager$ChartTraderGroup\">\r\n    <property name=\"SerializableItem.TypeName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\">LayoutGroup</property>\r\n    <property name=\"SerializableItem.ParentName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n    <property name=\"SerializableItem.ParentCollectionName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\">AvailableItems</property>\r\n    <property name=\"Width\">200</property>\r\n    <property name=\"Name\">_layoutItem3</property>\r\n  </property>\r\n  <property name=\"$ChartLayoutControl$BarManager$ChartGroup\" iskey=\"true\" value=\"ChartLayoutControl$BarManager$ChartGroup\">\r\n    <property name=\"SerializableItem.TypeName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\">LayoutGroup</property>\r\n    <property name=\"SerializableItem.ParentName\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n    <property name=\"SerializableItem.ParentCollectionName\" isnull=\"true\" OwnerType=\"DevExpress.Xpf.LayoutControl.Serialization.SerializableItem\" DependencyPropertyType=\"System.String\" />\r\n    <property name=\"Name\">_layoutItem1</property>\r\n  </property>\r\n</XtraSerializer>"
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
      "CustomEndDate": "2018-08-31T10:35:36.6642228+07:00"
    },
    "Canvas": {
      "Elements": []
    },
    "LinkedPanels": {
      "$type": "System.String[], mscorlib",
      "$values": []
    },
    "Width": 8.083161896422942990852158840,
    "StrategySettings": []
  },
  "IsSystem": false
}