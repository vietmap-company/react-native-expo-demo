import { Camera, MapView } from "@vietmap/vietmap-gl-react-native";
import React, { Component } from "react";
import { Text } from "react-native";

import { Bubble } from "../../components/Bubble";
import { vietmapStyle } from "../../vietmap_config";

const styles = {
  mapView: { flex: 1 },
};

export class PointInMapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pointInView: null,
    };

    this.onPress = this.onPress.bind(this);
  }

  async onPress(e) {
    const pointInView = await this._map.getPointInView(e.geometry.coordinates);
    this.setState({ pointInView });
  }

  renderPointInView() {
    if (!this.state.pointInView) {
      return <Text>Touch map to see xy pixel location</Text>;
    }

    return [
      <Text key="x">x: {this.state.pointInView[0]}</Text>,
      <Text key="y">y: {this.state.pointInView[1]}</Text>,
    ];
  }

  render() {
    return (
      <>
        <MapView
          ref={(c) => (this._map = c)}
          onPress={this.onPress}
          style={styles.mapView}
          mapStyle={vietmapStyle}
        >
          <Camera zoomLevel={9} centerCoordinate={[106.970895, 10.723279]} />
        </MapView>

        <Bubble>{this.renderPointInView()}</Bubble>
      </>
    );
  }
}
