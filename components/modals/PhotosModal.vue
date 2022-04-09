 <template>
  <div class="photos-modal">
    <SelectBlockWithPlus
      :name="'всі фото'"
      :options="optionsAllPhoto"
      @change="allPhoto = $event.value"
    />

    <BigSlideSlider
      :slides="big_slider"
      :config="big_slider_config"
      :slider_counter_under="true"
    >
      <HallSliderForeground :styleSubtitle="true" />
    </BigSlideSlider>
  </div>
</template>

<script>
import BigSlideSlider from "~/blocks/globals/sliders/BigSlideSlider";

export default {
  name: "PhotosModal",
  components: {
    BigSlideSlider,
  },
  data() {
    return {
      allPhoto: "",
      optionsAllPhoto: [
        {
          title: "Premier Palace Hotelа",
          value: "Premier Palace Hotel",
        },
        {
          title: "Premier Hotel Rus",
          value: "Premier Hotel Rus",
        },
        {
          title: "Premier Hotel Lybid",
          value: "Premier Hotel Lybid",
        },
        {
          title: "Premier Hotel Shafran",
          value: "Premier Hotel Shafran",
        },
        {
          title: "Premier Hotel Abri",
          value: "Premier Hotel Abri",
        },
      ],
      big_slider: [
        {
          id: 0,
          image: require("~/static/images/room.jpg"),
        },
        {
          id: 1,
          image: require("~/static/images/room.jpg"),
        },
        {
          id: 2,
          image: require("~/static/images/room.jpg"),
        },
        {
          id: 4,
          image: require("~/static/images/room.jpg"),
        },
      ],
      big_slider_config: {
        pagination: true,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    });
  },
};
</script>

<style lang="scss" >
.photos-modal {
  .big_slide_slider {
    //margin-top: -40px;
    padding: 0;
    height: auto;
    // height: 100%;


    // height: 60%;
    // position: absolute;
    // width: 90%;
    // top: 33%;
    // left: 5%;


    //height: calc(100vh - 186px);

    .swiper-container {
      height: 100%;
    }
    .swiper-wrapper {
      padding-top: 100px;
      padding-bottom: 100px;

      // height: 100%;

      // padding-top: calc(100% - 210px - 90%);
      // padding-bottom: calc(100% - 210px - 90%);
    }
  }
}
</style>

<style lang="scss" scoped>
.photos-modal {
  //background-color: blue;
  display: flex;
  .select-blocks {
    position: absolute;
    display: flex;
    width: fit-content;
    z-index: 10;
  }
  .select-wrapper {
    position: absolute;
    top: 34px;
    left: 36px;

    top: 27px;
    left: 22px;


    width: fit-content;
    // min-width: 65px;
  }
}
</style>
