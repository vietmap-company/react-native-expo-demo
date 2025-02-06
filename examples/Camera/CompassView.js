import { Camera, MapView } from "@vietmap/vietmap-gl-react-native";
import React from "react";

import { sheet } from "../../styles/sheet";
import { vietmapStyle } from "../../vietmap_config";

export function CompassView() {
  return (
    <MapView
      style={sheet.matchParent}
      compassEnabled
      logoEnabled={false}
      compassViewPosition={2}
      mapStyle={vietmapStyle}
    >
      <Camera heading={21} />
    </MapView>
  );
}
