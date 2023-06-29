import GoogleMapReact from 'google-map-react';

const MapMarker = () => (
	// <div className="bg-red-400 text-blue-400">{text}</div>
	<img
		src="/images/icon-map-marker.png"
		alt="map marker icon"
		className="w-12"
	/>
);

export function Map() {
	const defaultProps = {
		center: [25.064096199999998, 55.123757],
		zoom: 9,
	};

	return (
		<section className="mb-24">
			<div className="grid place-items-center ">
				<div
					id="map"
					style={{ height: '60vh', width: '90%' }}
					className="overflow-hidden rounded-xl"
				>
					<GoogleMapReact
						center={defaultProps.center}
						defaultZoom={defaultProps.zoom}
						yesIWantToUseGoogleMapApiInternals
					>
						<MapMarker
							lat={defaultProps.center[0]}
							lng={defaultProps.center[1]}
						/>
					</GoogleMapReact>
				</div>
				<div id="location-details"></div>
			</div>
		</section>
	);
}
