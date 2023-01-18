import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

function MapComponent() {
  return (
    <GoogleMap
      zoom={16}
      center={{ lat: 12.827649, lng: 80.048997 }}
      mapContainerClassName="max-[1199px]:rounded-xl rounded-tr-xl h-full w-full"
    >
      <MarkerF position={{ lat: 12.827649, lng: 80.048997 }} />
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
