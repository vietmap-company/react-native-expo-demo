import { MapView } from "@vietmap/vietmap-gl-react-native";
import React from "react";

export function ShowMap() {
  return <MapView mapStyle={"https://maps.vietmap.vn/api/maps/light/styles.json?apikey=YOUR_API_KEY_HERE"} style={{flex:1}} 
   />;
}