import {
  Images,
  MapView,
  ShapeSource,
  SymbolLayer,
} from "@vietmap/vietmap-gl-react-native";
import { useState } from "react";
import { vietmapStyle } from "../../vietmap_config";
import mapIcon from "../../assets/images/vietmap.png";
import { FEATURE_COLLECTION } from "../../constants/GEOMETRIES";
import { sheet } from "../../styles/sheet";

export function ShapeSourceIcon() {
  const [images, setImages] = useState({
    [FEATURE_COLLECTION.features[0]!.properties.name]: mapIcon,
  });

  return (
    <MapView style={sheet.matchParent} mapStyle={vietmapStyle}>
      <Images
        images={images}
        onImageMissing={(imageKey) =>
          setImages((prevState) => ({
            ...prevState,
            [imageKey]: mapIcon,
          }))
        }
      />
      <ShapeSource id="shape-source" shape={FEATURE_COLLECTION}>
        <SymbolLayer
          id="symbol-layer"
          style={{
            iconImage: ["get", "name"],
          }}
        />
      </ShapeSource>
    </MapView>
  );
}
