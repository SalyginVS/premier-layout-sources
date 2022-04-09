<template>
  <div class="google-map">
    <div ref="map" class="google-map__inner"></div>
  </div>
</template>
<script>
import { MAP_STYLES, MAP_MARKER } from "~/plugins/utils/map-options";

export default {
  name: "GoogleMap",
  props: {
    // points: {
    //   type: Array,
    // },
  },
  data() {
    return {
      map: null,
      currentGeoPosition: {
        lat: 50.4367088,
        lng: 30.5140108,
      },
      //   groupMarkerIcon: "/img/icons/icon-map.svg",
    };
  },
  methods: {
    async initMap(mapContainer) {
      // const markerIcon = MAP_MARKER
      const options = {
        styles: MAP_STYLES,
        // отключаем возможность кликать на объекты карты и видеть информацию о них https://mapstyle.withgoogle.com/
        clickableIcons: false,
        // элементы управления картой
        // disableDefaultUI: true, // выключить все элементы
        zoomControl: false,
        zoom: 15,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        scrollwheel: false, // возможность масштабировать карту мышкой или тачпадом
      };
      const map = new google.maps.Map(mapContainer, options);

      return map;
    },
  },
  mounted() {
    const { map } = this.$refs;
    this.initMap(map).then((gMap) => {
      this.map = gMap;

      this.map.setCenter(this.currentGeoPosition);
    });
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/utils.scss";

.google-map {
  width: 100%;
  //height: 600px;
  height: 100%;
  position: relative;
  @include max(lg){
    //height: 530px;
  }
  @include max(md){
    //height: 600px;
  }
  @include max(sm){
    //height: 320px;
  }
}
.google-map__inner {
  width: 100%;
  height: 100%;
}

</style>
