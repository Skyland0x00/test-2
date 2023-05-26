{
  "Value": {
    "$type": "OFT.Platform.Settings.Charting.ChartSettings, OFT.Platform",
    "ScaleByLowerValue": false,
    "ChartTraderIsEnabled": false,
    "SelectedAccount": "SBE02725",
    "Volume": 1.0,
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
          "IsNew": false,
          "OldSettings": {
            "$type": "Advanced_Time_And_Sales.Indicators.IndicatorsParameters.DOMSettings, OFT.Controls",
            "BuyColor": "0, 128, 0",
            "SellColor": "255, 0, 0",
            "BuyBG": "0, 255, 255, 255",
            "SellBg": "0, 255, 255, 255",
            "TextColor": "255, 255, 255",
            "PanelN": 1,
            "Height": 60,
            "_showLegend": true,
            "IsSupportedSpreadCharts": false,
            "IsSupportedRussianMarket": true,
            "IsSupportedAmericanMarket": true,
            "AutoProportion": true,
            "Proportion": 100,
            "Width": 100,
            "RightToLeft": true,
            "buycolor": "#FF008000",
            "textcolor": "#FFFFFFFF",
            "sellcolor": "#FFFF0000",
            "buybg": "#00FFFFFF",
            "sellbg": "#00FFFFFF",
            "BestBidBackGround": "#00FFFFFF",
            "BestAskBackGround": "#00FFFFFF",
            "ShowCumulativeValues": true,
            "UseScale": true,
            "CustomScale": 20,
            "CustomPriceLevelsHeight": 0
          },
          "SerializedIndicators": [],
          "Height": 60
        },
        {
          "IsNew": true,
          "SerializedIndicators": [
            "{\r\n  \"Type\": \"ATAS.Indicators.Technical.ClusterStatistic, ATAS.Indicators.Technical, Version=5.7.19.2, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n  \"Settings\": \"{\\r\\n  \\\"HeaderBackground\\\": \\\"#FF877F7F\\\",\\r\\n  \\\"BackGroundColor\\\": \\\"#78FFFFFF\\\",\\r\\n  \\\"AskColor\\\": \\\"#FF008000\\\",\\r\\n  \\\"BidColor\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"VolumeColor\\\": \\\"#FF808080\\\",\\r\\n  \\\"TextColor\\\": \\\"#FF000000\\\",\\r\\n  \\\"GridColor\\\": \\\"#FFA5A5A5\\\",\\r\\n  \\\"VisibleProportion\\\": false,\\r\\n  \\\"ShowAsk\\\": true,\\r\\n  \\\"ShowBid\\\": true,\\r\\n  \\\"ShowDelta\\\": true,\\r\\n  \\\"ShowDeltaPerVolume\\\": true,\\r\\n  \\\"ShowSessionDelta\\\": true,\\r\\n  \\\"ShowSessionDeltaPerVolume\\\": true,\\r\\n  \\\"ShowMaximumDelta\\\": true,\\r\\n  \\\"ShowMinimumDelta\\\": true,\\r\\n  \\\"ShowVolume\\\": true,\\r\\n  \\\"ShowVolumePerSecond\\\": false,\\r\\n  \\\"ShowSessionVolume\\\": true,\\r\\n  \\\"ShowTime\\\": true,\\r\\n  \\\"ShowDuration\\\": false,\\r\\n  \\\"HideRowsDescription\\\": false,\\r\\n  \\\"DenyToChangePanel\\\": true,\\r\\n  \\\"ShowDescription\\\": false,\\r\\n  \\\"Name\\\": \\\"Cluster Statistic\\\",\\r\\n  \\\"Panel\\\": \\\"1\\\",\\r\\n  \\\"IsVerticalIndicator\\\": false\\r\\n}\",\r\n  \"SourceType\": \"bars\",\r\n  \"SourceSeriesId\": 0,\r\n  \"DataSeries\": [\r\n    {\r\n      \"Type\": \"ATAS.Indicators.ValueDataSeries, ATAS.Indicators, Version=5.7.19.2, Culture=neutral, PublicKeyToken=330427d8594115c7\",\r\n      \"Settings\": \"{\\r\\n  \\\"Digits\\\": 4,\\r\\n  \\\"StringFormat\\\": \\\"{0:G}\\\",\\r\\n  \\\"ShowZeroValue\\\": true,\\r\\n  \\\"ShowCurrentValue\\\": true,\\r\\n  \\\"Width\\\": 1,\\r\\n  \\\"LineDashStyle\\\": \\\"solid\\\",\\r\\n  \\\"VisualType\\\": \\\"line\\\",\\r\\n  \\\"Color\\\": \\\"#FFFF0000\\\",\\r\\n  \\\"ScaleIt\\\": true,\\r\\n  \\\"Type\\\": \\\"value\\\",\\r\\n  \\\"Name\\\": \\\"Cluster Statistic\\\"\\r\\n}\"\r\n    }\r\n  ],\r\n  \"LineSeries\": [],\r\n  \"ShowDescription\": false\r\n}"
          ],
          "Height": 165
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
        "Foreground": "#FF000000",
        "AutoSize": true,
        "FontSize": 9.0,
        "CutLongText": true,
        "MinimumClusterWidthToShowText": 10,
        "DigitsAfterComma": 2,
        "ValueAreaColor": "#64C8D8FF",
        "ShowValueArea": false,
        "ImbalanceBid": "#FFFF0000",
        "ImbalanceAsk": "#FF008000",
        "MinimumImbalanceDifference": 0,
        "IgnoreZeroValues": false,
        "ImbalanceVolumeFilter": 0,
        "ImbalanceRate": 150,
        "ShowDirectionMarker": true,
        "DirectionMakerWidth": 0,
        "ClusterBorderPen": {
          "Color": "#FF000000",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "BorderColorByDirection": false,
        "ClustersContentMode": "volume",
        "ClustersMode": "fullRow",
        "UseBorderOfEachPriceLevel": false,
        "ColorScheme": "delta",
        "ClusterBG": "#00FFFFFF",
        "VolumeColor": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": "#FF6495ED"
        },
        "BidColor": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": "#FFFF0000"
        },
        "AskColor": {
          "EnabledVisible": false,
          "Enabled": false,
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
        "BorderType": "candle",
        "BorderColorByDirectionFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": false
        },
        "ClusterBorderPenFilter": {
          "EnabledVisible": false,
          "Enabled": true,
          "Value": {
            "Color": "#FF000000",
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
        "MaxVolType": "trades",
        "MaxVolColor": "#FF000000",
        "MaxVolSelectionWidth": 1,
        "MaxVolTextColor": "#FF000000",
        "MaxLevelBold": true,
        "ValueAreaColorFilter": {
          "EnabledVisible": true,
          "Enabled": false,
          "Value": "#64C8D8FF"
        },
        "ProportionalMode": "visibleRegion",
        "ProportionByAllBars": false,
        "GradientRate": 50,
        "CustomProportionValue": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": 0.0
        },
        "CustomproportionVolume": 0.0,
        "EnableBidAskImbalance": false,
        "ImbalanceBidFilter": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": "#FFFF0000"
        },
        "ImbalanceAskFilter": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": "#FF008000"
        },
        "ImbalanceRateFilter": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": 150
        },
        "ImbalanceVolumeFilterInt": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": 0
        },
        "MinimumImbalanceDifferenceFilter": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": 0
        },
        "IgnoreZeroValuesFilter": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": false
        },
        "BoldFontForImbalances": {
          "EnabledVisible": false,
          "Enabled": false,
          "Value": false
        },
        "CustomRowHeight": {
          "EnabledVisible": true,
          "Enabled": false,
          "Value": 16
        },
        "Filters": []
      },
      "colorsettings": {
        "Caption": "Chart Color Settings",
        "BackgroundBrushSettings": {
          "StartColor": "#FFFFFFFF",
          "EndColor": "#FFADD8E6",
          "UseEndColor": false
        },
        "BackGround": "#FFFFFFFF",
        "CrosshairPen": {
          "Color": "#FF808080",
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
          "Color": "#FFEFE3E5",
          "LineDashStyle": "solid",
          "Width": 1
        },
        "ShowVHorizontalGrid": true,
        "CustomGridStep": 0,
        "ShowVericalGrid": true,
        "CustomVertGridStep": 0,
        "NewSessionPen": {
          "Color": "#FF808080",
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
        "CellBorderColor": "#FF808080",
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
        "NewSessionLineColor": "#FF808080",
        "Сl_crosshair": "#FF808080",
        "PriceLineColor": "#3FFFFFFF",
        "GridColor": "#FFEFE3E5",
        "HistogramLinesColor": "#C8ADD8E6",
        "HistogramColor": "#FF808080",
        "ShowCumulativeValues": true,
        "BidColor": "#FFFF0000",
        "AskColor": "#FF00FF00",
        "ValueAreaColor": "#FFC8D8FF",
        "PocColor": "#FFC8D8FF",
        "HistogramTextColor": "#FFFFFFFF",
        "ExtendPoc": false,
        "ExtendValueArea": false
      },
      "histogramInterval": "contract",
      "typeHistogram": "volume",
      "ShowHistogram": false,
      "ShowingDigital": false,
      "UseOpacility": false,
      "ShowTxtMouse": true,
      "VisibleCrossHair": true,
      "ShowValueArea": true,
      "ShowPoc": false,
      "AlwaysOnTop": false,
      "BarsType": "clusters",
      "ClusterWidth": 129.31233157179271146856504061,
      "TypeCluster": "volume",
      "RowHeight": 13.4,
      "ChangeHeightmanualy": false,
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
      "ClusterVisualizationType": "bidAskProfile",
      "Version": 0
    },
    "TimeFrame": {
      "Period": "timeFrame",
      "PeriodParameters": {
        "$type": "OFT.Controls.Chart.MinuteTimeFrame, OFT.Controls",
        "TimeFrame": "m10",
        "CustomTimeFrame": 1,
        "Label": "@value",
        "DefaultDaysToLoad": 7,
        "VisualName": "M10"
      },
      "LoadCustomDaysCount": false,
      "CustomDaysCount": 1,
      "LoadCustomEndDate": false,
      "CustomEndDate": "2019-02-13T13:12:14.633+07:00"
    },
    "Canvas": {
      "Elements": [
        {
          "Name": "BuyMarketBtn",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 0.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 80.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "SellMarketBtn",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 90.0,
          "Y": 0.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 80.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "BuyAskBtn",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 40.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 80.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "SellAskBtn",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 90.0,
          "Y": 40.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 80.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "BuyBidBtn",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 80.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 80.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "SellBidBtn",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 90.0,
          "Y": 80.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 80.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "CancelBidsBtn",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 120.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 80.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "CancelAsksBtn",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 90.0,
          "Y": 120.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 80.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "CancelAllBtn",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 160.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 80.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "ReverseBtn",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 90.0,
          "Y": 160.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 80.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "Close",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 200.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 170.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "bid",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 240.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 90.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "ask",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 90.0,
          "Y": 240.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 90.0,
          "Height": 35.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "PnL",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 274.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 170.0,
          "Height": 25.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "Flat",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 299.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 90.0,
          "Height": 25.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "Entry",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 90.0,
          "Y": 299.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 80.0,
          "Height": 25.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "AccountSettings",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 330.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 170.0,
          "Height": 90.0,
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "Strategies",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 421.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 170.0,
          "Height": "NaN",
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "TradingFromChartSettings",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 489.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 170.0,
          "Height": "NaN",
          "Visibility": "visible",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "RoutesBorder",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 557.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 170.0,
          "Height": "NaN",
          "Visibility": "hidden",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        },
        {
          "Name": "TPlusLimitBorder",
          "DesignX": "NaN",
          "DesignY": "NaN",
          "DesignWidth": "NaN",
          "DesignHeight": "NaN",
          "X": 0.0,
          "Y": 557.0,
          "FixedX": true,
          "FixedY": true,
          "Width": 170.0,
          "Height": "NaN",
          "Visibility": "hidden",
          "StretchHorizontally": false,
          "StretchVertically": false,
          "Background": {
            "Custom": false
          },
          "Foreground": {
            "Custom": false
          },
          "FontSize": 11.0,
          "Volume": 0.0
        }
      ],
      "ActualSize": "0,0"
    },
    "LinkedPanels": {
      "$type": "System.String[], mscorlib",
      "$values": []
    },
    "Width": 129.31233157179271146856504061,
    "StrategySettings": [],
    "TraderSettings": {
      "VolumeByCurrency": {},
      "IsPercentMode": false,
      "MarketOrderFlags": {},
      "LimitOrderFlags": {},
      "ConditionalMarketOrderFlags": {},
      "ConditionalLimitOrderFlags": {}
    }
  },
  "IsSystem": false
}