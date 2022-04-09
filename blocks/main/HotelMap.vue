// <template>
  <div id="map">
    <div class="map_container">
      <div class="foreground"></div>
      <NewSvgSprite />
      <!-- <svg @click="toggleHotelDescription(null)" class="map-1440">
        <use href="#map-1440"></use>
      </svg>
      <svg @click="toggleHotelDescription(null)" class="map-1920">
        <use href="#map-1920"></use>
      </svg> -->

      <div
        class="hotels_wrapper"
        v-for="city in cities"
        :key="city.id"
        :data-id="city.id"
        :style="{
          left: `${city.left[breakpoints] || city.left['']}%`,
          bottom: `${city.bottom[breakpoints] || city.bottom['']}%`,
        }"
        :class="{ chosed_city: chosed_city === city.id, faded: is_marker_faded }"
      >
        <div class="hotels" v-show="chosed_city === city.id">
          <div class="one_hotel" v-for="hotel in city.hotels" :key="hotel.id">
            <img
              src="~/static/images/hotel_image.svg"
              alt
              class="hotel_image"
            />
            <div class="hotel_description">
              <!-- <img src="~/static/images/5star.svg" alt class="stars" /> -->
              <div class="stars_wrapper">
                <!-- {{hotel.stars}} -->
                <img
                  src="~/static/images/one_star.svg"
                  v-for="star in hotel.stars"
                  :key="star"
                  alt
                />
              </div>
              <p class="hotel_title a1">{{ hotel.name }}</p>
              <p class="hotel_adrress a1">{{ hotel.address }}</p>
              <p class="go_to_map a1">
                <!-- <img src="~/static/images/map_point.svg" alt /> -->
                <nuxt-link to="/">На сайт</nuxt-link>
              </p>
            </div>
          </div>
        </div>

        <div
          class="circle_wrapper"
          @click.self.stop="toggleHotelDescription(null)"
        >
          <div
            class="circle_clicking"
            @click.self.stop="toggleHotelDescription(city.id)"
          >
            <div
              class="circle_city circle1"
              @click.self.stop="toggleHotelDescription(city.id)"
              :style="{
                backgroundColor: `${city.color}`,
                height: `${city.size[breakpoints] || city.size['']}px`,
                width: `${city.size[breakpoints] || city.size['']}px`,
              }"
            >
              <p @click.self.stop="toggleHotelDescription(city.id)">
                {{ city.hotels.length > 1 ? city.hotels.length : "" }}
              </p>
            </div>
          </div>

          <p class="a1">{{ city.city }}</p>
        </div>
      </div>
    </div>
    <div class="slider"></div>

    <div class="map_description">
      <div class="hotels_count">
        <p class="gold_text italic count">17</p>
        <div class="hotels_count__description">
          <h5>Готелі в 13 подорожах</h5>
          <h5 class="gold_text italic">пункта призначення</h5>
        </div>
      </div>

      <ul class="hotel_types">
        <li>
          <div class="palace_color colored_circle"></div>
          <p class="a1">Premier Palace Hotel</p>
        </li>
        <li>
          <div class="hotels_color colored_circle"></div>
          <p class="a1">Premier Hotels</p>
        </li>
        <li>
          <div class="compass_color colored_circle"></div>
          <p class="a1">Premier Compass Hotels</p>
        </li>
      </ul>
    </div>

    <div class="cities_slides_wrapper">
      <CitySlider :slides="slider_cities" />
    </div>
  </div>
</template>

<script>
import cities from "~/static/hotels_in_map.js";
import { globalMixin } from "~/plugins//mixins";
import CitySlider from "~/blocks/globals/sliders/CitySlider";
import NewSvgSprite from "~/components/NewSvgSprite";

export default {
  name: "HotelMap",
  components: {
    CitySlider,
    NewSvgSprite,
    CitySlider
  },
  mixins: [globalMixin],
  data: () => ({
    cities: null,
    chosed_city: null,
    description_is_open: null,
    is_marker_faded: false,
  }),
  created() {
    this.cities = cities;
  },
  methods: {
    toggleHotelDescription(id) {
      if (this.chosed_city === id) {
        this.chosed_city = null;
        this.is_marker_faded = false
        return;
      }
  
      this.is_marker_faded = true
      this.chosed_city = id;
      this.description_is_open = !this.description_is_open;    
      if (this.chosed_city !== null) {
        let city = this.cities.find((item) => item.id === id);
        if (city.hotels.length > 1) {
          let chosed_city = document.querySelector(
            `.hotels_wrapper[data-id='${this.chosed_city}']`
          );
          // chosed_city.scrollIntoView({ block: "end", behavior: "smooth" });
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/utils.scss";
#map {
  position: relative;
  z-index: 5;
  //margin-bottom: 31px;
  //margin-bottom: -150px;
  // @include min(1441) {
  //   margin-bottom: -380px;
  // }
  // @include min(1450) {
  //   margin-bottom: -225px;
  // }
}

.map_container {
  width: 100%;
  height: 77.5vw;
  overflow: hidden;
  position: relative;
}
.second_country {
  fill: rgba(230, 227, 224, 0.5);
  stroke: #fbfbfb !important;
}
.main_country {
  fill: #fffcf9;
  stroke: #fbfbfb !important;
}

.foreground {
  background: linear-gradient(
    180deg,
    #fbfbfb 0%,
    rgba(251, 251, 251, 0) 18.86%,
    rgba(251, 251, 251, 0) 82.32%,
    #fbfbfb 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
  @include min(1441) {
    background: linear-gradient(
      180deg,
      #fbfbfb 0%,
      rgba(251, 251, 251, 0) 18.86%,
      rgba(251, 251, 251, 0) 70%,
      #fbfbfb 100%
    );
  }
  @include min(1921) {
    height: 100%;
  }
}

.hotels_wrapper {
  position: absolute;
  z-index: 50;
  // left: 58.7%;
  // bottom: 61.6%;
  transform: translateX(-50%);
  transition: 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.hotels {
  width: 260px;
  max-height: 200px;
  height: auto;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }

  padding: 20px 8px;
  background-color: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
  z-index: 15;
  position: relative;
  @include mb-16;

  // @include max(lg){
  //   overflow: auto;
  //   height: 200px;
  // }
}

.hotels::after {
  content: "";
  width: 10px;
  height: 10px;
  background-color: #ffffff;
  transform: rotate(45deg);
  position: absolute;
  bottom: -5px;
  left: calc(50% - 5px);
}

.hotel_image {
  margin-right: 22px;
}

.one_hotel {
  display: flex;
  padding: 20px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.one_hotel:last-of-type {
  border-bottom: none;
  padding-bottom: 0;
}

.one_hotel:first-of-type {
  padding-top: 0;
}

.go_to_map {
  display: flex;
  align-items: center;
  cursor: pointer;
  img,
  span {
    display: block;
  }
  img {
    margin-right: 6px;
  }
  a{
    position: relative;
    &:after{
      content: '';
      display: block;
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 1px;
      background-image: url("../../static/images/gold_for_button.svg");
      background-size: cover;
      background-repeat: no-repeat;
      background-position:  0;
      transform: scaleX(0);
      transform-origin: left center;
      transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    }
    &:hover{
      &:after{
        transform: scaleX(1)
      }
    }    
  }

}

.hotel_title {
  margin-top: 4px;
  margin-bottom: 12px;
}

.hotel_adrress {
  margin-top: 4px;
  margin-bottom: 12px;
  opacity: 0.6;
}

.stars_wrapper {
  img {
    margin-right: 7px;
  }
}
.faded {
  opacity: 0.5;
}

.chosed_city {
  z-index: 10000;
  opacity: 1;
}

// circles

.circle_wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    width: fit-content;
    opacity: 0.7;
    @include max(lg) {
      opacity: 0.3;
    }
  }
}
.circle_clicking {
  padding: 8px;
  margin: -8px;
  cursor: pointer;
}
.circle_city {
  border-radius: 50%;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.24);

  p {
    font-family: AvenirNextCyrMedium;
    font-style: normal;
    font-weight: 450;
    font-size: 8px;
    line-height: 10px;
    text-transform: uppercase;
    color: #ffffff;
    display: inline-block;
    @include max(lg) {
      display: none;
    }
  }
}

// description

.map_description {
  position: absolute;
  left: 94px;
  // top: 212px;
  top: 200px;
  @include min(1441) {
    left: 334px;
  }
  @include max(lg) {
    left: 70px;
    top: 120px;
  }
  @include max(md) {
    left: 48px;
    top: 25px;
    z-index: 11;
  }
}

.hotels_count {
  display: flex;
  align-items: flex-start;
  .count {
    font-weight: normal;
    font-size: 172px;
    @include mr-40;
    transform: translateY(-37%);
    @include max(lg) {
      font-size: 140px;
      line-height: 120%;
    }
    @include max(md) {
      font-size: 120px;
      line-height: 110%;
    }
  }
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.hotel_types {
  @include max(lg) {
    margin-top: -24px;
  }
  @include max(md) {
    margin-top: -20px;
  }
}
li {
  @include mb-24;
  display: flex;
  .a1 {
    opacity: 0.5;
  }
}

.colored_circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 30px;
  box-shadow: 0px 0px 18px rgba(0, 0, 0, 0.24);
  @include max(lg) {
    margin-right: 16px;
  }
}
.palace_color {
  background-color: #735c33;
}
.hotels_color {
  background-color: #aa9474;
}
.compass_color {
  background-color: #d9bd94;
}

.cities_slides_wrapper {
  //padding-bottom: 119px;
  //position: relative;
  position: absolute;
  width: 100%;
  bottom: 140px;
  //top: -225px;
  @include min(1441) {
    //top: -400px;
  }
  @include max(lg) {
    bottom: 124px;
    //top: -168px;
    //padding-bottom: 124px;
  }
  @include max(md) {
    bottom: 113px;
    //top: -30px;
    //@warnpadding-bottom: 113px;
  }
  @include max(768) {
    position: relative;
    bottom: 0;
    margin-bottom: 113px;
  }
}
</style>
