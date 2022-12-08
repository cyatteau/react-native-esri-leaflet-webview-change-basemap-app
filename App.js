import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { WebView } from "react-native-webview";
import React, { useState } from "react";

export default function App() {
  const [style, setStyle] = useState("");

  const customHTML = `
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Esri Leaflet Tutorials: Display a map</title>
    <!-- Load Leaflet from CDN -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.8.0/dist/leaflet.js" crossorigin=""></script>
    <!-- Load Esri Leaflet from CDN -->
    <script src="https://unpkg.com/esri-leaflet@^3.0.8/dist/esri-leaflet.js"></script>
    <script src="https://unpkg.com/esri-leaflet-vector@4.0.0/dist/esri-leaflet-vector.js"></script>

    <style>
      #map {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
    const apiKey = "YOUR_API_KEY";

      const map = L.map("map", {
        minZoom: 2
      })
      map.setView([38.92, -78.75], 6);
      const basemapLayers = {

        Streets: L.esri.Vector.vectorBasemapLayer("ArcGIS:Streets", { apiKey: apiKey }).addTo(map),

        Navigation: L.esri.Vector.vectorBasemapLayer("ArcGIS:Navigation", { apiKey: apiKey }),
        Topographic: L.esri.Vector.vectorBasemapLayer("ArcGIS:Topographic", { apiKey: apiKey }),
        "Light Gray": L.esri.Vector.vectorBasemapLayer("ArcGIS:LightGray", { apiKey: apiKey }),
        "Dark gray": L.esri.Vector.vectorBasemapLayer("ArcGIS:DarkGray", { apiKey: apiKey }),
        "Streets Relief": L.esri.Vector.vectorBasemapLayer("ArcGIS:StreetsRelief", { apiKey: apiKey }),
        Imagery: L.esri.Vector.vectorBasemapLayer("ArcGIS:Imagery", { apiKey: apiKey }),
        ChartedTerritory: L.esri.Vector.vectorBasemapLayer("ArcGIS:ChartedTerritory", { apiKey: apiKey }),
        ColoredPencil: L.esri.Vector.vectorBasemapLayer("ArcGIS:ColoredPencil", { apiKey: apiKey }),
        Nova: L.esri.Vector.vectorBasemapLayer("ArcGIS:Nova", { apiKey: apiKey }),
        Midcentury: L.esri.Vector.vectorBasemapLayer("ArcGIS:Midcentury", { apiKey: apiKey }),
        OSM: L.esri.Vector.vectorBasemapLayer("OSM:Standard", { apiKey: apiKey }),
        "OSM:Streets": L.esri.Vector.vectorBasemapLayer("OSM:Streets", { apiKey: apiKey })
      };

      L.control.layers(basemapLayers, null, { collapsed: false }).addTo(map);
    </script>
  </body>`;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", height: "100%", postion: "absolute" }}>
        <WebView originWhitelist={["*"]} source={{ html: customHTML }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderColor: "black",
    borderWidth: 2,
    marginTop: 10,
    zIndex: 100,
    padding: 5,
  },
});
