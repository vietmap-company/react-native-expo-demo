import { Camera, MapView } from "@vietmap/vietmap-gl-react-native";
import { useEffect, useState } from "react";

import { sheet } from "../../styles/sheet";
import { vietmapStyle } from "../../vietmap_config";
export function YoYo() {
  const [zoomLevel, setZoomLevel] = useState(2);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const cameraLoop = () => {
      requestAnimationFrame(() => {
        setZoomLevel((prevState) => (prevState === 4 ? 0 : 4));
        timeout = setTimeout(() => cameraLoop(), 2000);
      });
    };
    cameraLoop();

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <MapView style={sheet.matchParent} mapStyle={vietmapStyle}>
      <Camera
        animationDuration={2000}
        animationMode="easeTo"
        zoomLevel={zoomLevel}
      />
    </MapView>
  );
}
