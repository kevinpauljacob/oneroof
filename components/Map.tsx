import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { PropertyType } from '../typings'
interface Props {
    property: PropertyType,
}

interface Location {
  lat: number,
  lng: number
}

function MapComponent({ lat, lng }: Location) {

  return (
    <GoogleMap
      zoom={16}
      center={{ lat, lng }}
      mapContainerClassName="rounded-xl sm:rounded-none h-full w-full"
    >
      <MarkerF position={{ lat, lng }} />
    </GoogleMap>
  );
}

export default function Map({ property }: Props) {
  const lat = property.latitude;
  const lng = property.longitude;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  
  if (!isLoaded) return <div>Loading...</div>;
  return <MapComponent lat={lat} lng={lng}/>;
}
