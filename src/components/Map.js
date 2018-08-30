import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';
class Map extends Component {
	render() {
		const GoogleMapExample = withGoogleMap(props => (
					<GoogleMap
					defaultCenter = { { lat: 25.038357847174, lng: 121.54770626982 } }
					defaultZoom = { 13 }
					>
					</GoogleMap>
					));
		return(
				<div>
				<GoogleMapExample
				containerElement={ <div style={{ height: `500px`, width: 'width-max' }} /> }
				mapElement={ <div style={{ height: `100%` }} /> }
				/>
				</div>
			  );
	}
};
export default Map;
