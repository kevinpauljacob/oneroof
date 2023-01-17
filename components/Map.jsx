import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function MapComponent() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="h-full w-full"
    >
      <Marker position={{ lat: 44, lng: -80 }} />
    </GoogleMap>
  );
}

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });
  
  if (!isLoaded) return <div>Loading...</div>;
  return <MapComponent/>;
}
