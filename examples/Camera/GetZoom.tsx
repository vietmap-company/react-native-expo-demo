import { MapView, type MapViewRef } from "@vietmap/vietmap-gl-react-native";
import { useRef, useState } from "react";
import { Text } from "react-native";

import { Bubble } from "../../components/Bubble";
import { sheet } from "../../styles/sheet";
import { vietmapAPIKey, vietmapStyle } from "../../vietmap_config";

export function GetZoom() {
  const [zoom, setZoom] = useState<number>();
  const mapViewRef = useRef<MapViewRef>(null);

  return (
    <>
      <MapView
        ref={mapViewRef}
        onRegionDidChange={async () => {
          setZoom(await mapViewRef.current?.getZoom());
        }}
        mapStyle={vietmapStyle}
        style={sheet.matchParent}
      />
      <Bubble>
        <Text>Zoom: {zoom}</Text>
      </Bubble>
    </>
  );
}
