import { memo } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapKey = "AIzaSyAxmvhJY5oYbOfH0_TeHqlIukl_XKfkfmY";

const containerStyle = {
    width: "100%",
    height: "30em",
};

const center = {
    lat: 38.8816,
    lng: -77.0911,
};

function MyMap() {
    return (
        <LoadScript googleMapsApiKey={mapKey}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <></>
            </GoogleMap>
        </LoadScript>
    );
}

export default memo(MyMap);
