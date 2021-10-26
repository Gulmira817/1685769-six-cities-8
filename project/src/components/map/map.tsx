import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../constants/const';
import useMap from '../../hooks/useMap';
import { City, Offer, Offers } from '../../types';
type MapProps = {
  offers: Offers;
  selectedPoint: Offer | undefined;
  city:City
};


function Map(props:MapProps) {
  const{offers,selectedPoint,city}=props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  useEffect(() => {
    if (map) {
      offers.forEach((offer:Offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: (offer.city.name === selectedPoint?.city.name)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map,selectedPoint,offers]);
  return (
    <div
      style={{height: '600px'}}
      ref={mapRef}
    >
    </div>
  );
}
export default Map;
