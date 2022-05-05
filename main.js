import 'ol/ol.css';
import MVT from 'ol/format/MVT';
import Map from 'ol/Map';
import OGCVectorTile from 'ol/source/OGCVectorTile';
import VectorTileLayer from 'ol/layer/VectorTile';
import View from 'ol/View';

const map = new Map({
  target: 'map',
  layers: [
    new VectorTileLayer({
      source: new OGCVectorTile({
        //url: 'https://maps.ecere.com/ogcapi/collections/NaturalEarth:cultural:ne_10m_admin_0_countries/tiles/WebMercatorQuad',
        //url: 'http://localhost/collections/shops/tiles?scheme=WorldCRS84Quad',
        url: 'https://demo.pygeoapi.io/collections/lakes/tiles/WorldCRS84Quad',
        format: new MVT(),
      }),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 1,
  }),
});
