import {
  Camera,
  LocationManager,
  MapView,
  UserLocation,
} from "@vietmap/vietmap-gl-react-native";
import { useEffect, useState } from "react";
import { vietmapStyle } from "../../vietmap_config";
import { TabBarView } from "../../components/TabBarView";
import { sheet } from "../../styles/sheet";

const OPTIONS = [5, 10, 15].map((data) => ({ label: data + " FPS", data }));

export function SetAndroidPreferredFramesPerSecond() {
  const [androidPreferredFramesPerSecond, setAndroidPreferredFramesPerSecond] =
    useState(OPTIONS[0]?.data);

  useEffect(() => {
    LocationManager.start();

    return () => {
      LocationManager.stop();
    };
  }, []);

  return (
    <TabBarView
      options={OPTIONS}
      onOptionPress={(_index, data) => {
        setAndroidPreferredFramesPerSecond(data);
      }}
    >
      <MapView style={sheet.matchParent} mapStyle={vietmapStyle}>
        <Camera followZoomLevel={16} followUserLocation />

        <UserLocation
          animated
          renderMode="native"
          androidPreferredFramesPerSecond={androidPreferredFramesPerSecond}
        />
      </MapView>
    </TabBarView>
  );
}
