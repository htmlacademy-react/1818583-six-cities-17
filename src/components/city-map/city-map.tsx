import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.ts';
import {Point} from '../../types.ts';
import leaflet, {layerGroup} from 'leaflet';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const.ts';

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

type Props = {
  points: Point[];
  activeOfferId: string | null;
}

function CityMap() {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  // useEffect(() => {
  //   if (map) {
  //     const markerLayer = layerGroup().addTo(map);
  // points.forEach((point) => {
  //   const marker = new Marker({
  //     lat: point.lat,
  //     lng: point.lng
  //   });
  //
  //   marker
  //     .setIcon(
  //       selectedPoint !== undefined && point.title === selectedPoint.title
  //         ? currentCustomIcon
  //         : defaultCustomIcon
  //     )
  //     .addTo(markerLayer);
  // });
  //
  //     return () => {
  //       map.removeLayer(markerLayer);
  //     };
  //   }
  // }, [map]);

  return (
    <section className="cities__map" ref={mapRef}></section>
  );
}

export default CityMap;
