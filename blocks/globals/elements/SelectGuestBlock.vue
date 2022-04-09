<template>
  <div>
    <div @click="popUpOpen" class="a1 guests_data">
      <p class="a1">{{ allInformation }}</p>

      <svg
        width="9"
        height="6"
        viewBox="0 0 9 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path opacity="0.5" d="M8 1L4.5 4.5L1 1" stroke="black" />
      </svg>
    </div>

    <div v-if="visible" class="pop-up">
      <div class="pop-up_body">
        <div @click="popUpClose" class="pop-up_back">
          <svg
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M1 7.5L4 4L1 0.5"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="a1">назад</div>
        </div>

        <h3 class="guest_header">Кількість гостей</h3>

        <div
          class="room_option"
          v-for="guest in guestDataArray"
          :key="guest.id"
        >
          <img
            @click="deleteRoom(guest.id)"
            class="delete_button"
            src="~/static/icons/delete-button.svg"
            alt=""
          />

          <p class="gold_text room_number">Кімната {{ guest.roomNumber }}</p>

          <div class="guest_age">
            <p class="a1 people_state">Дорослих</p>

            <div class="guest_number">
              <svg
                @click="ageValueMinus(guest.id, 'adult')"
                class="guest_minus"
                width="7"
                height="1"
                viewBox="0 0 7 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <rect width="7" height="0.777778" fill="black" />
                </g>
              </svg>

              <p class="a1 guest_value">{{ guest.adult }}</p>

              <svg
                @click="ageValuePlus(guest.id, 'adult')"
                class="guest_plus"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <rect
                    x="3.11108"
                    y="7"
                    width="7"
                    height="0.777778"
                    transform="rotate(-90 3.11108 7)"
                    fill="black"
                  />
                  <rect y="3.11133" width="7" height="0.777778" fill="black" />
                </g>
              </svg>
            </div>
          </div>

          <div class="guest_age">
            <p class="a1 people_state">Дітей</p>

            <div class="guest_number">
              <svg
                @click="ageValueMinus(guest.id, 'kid')"
                class="guest_minus"
                width="7"
                height="1"
                viewBox="0 0 7 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <rect width="7" height="0.777778" fill="black" />
                </g>
              </svg>

              <p class="a1 guest_value">{{ guest.kid }}</p>

              <svg
                @click="ageValuePlus(guest.id, 'kid')"
                class="guest_plus"
                width="7"
                height="7"
                viewBox="0 0 7 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <rect
                    x="3.11108"
                    y="7"
                    width="7"
                    height="0.777778"
                    transform="rotate(-90 3.11108 7)"
                    fill="black"
                  />
                  <rect y="3.11133" width="7" height="0.777778" fill="black" />
                </g>
              </svg>
            </div>
          </div>

          <input
            v-for="kidAge in guest.kidsAges"
            :key="kidAge.id"
            type="number"
            :placeholder="kidAge.placeholder"
            min="0"
            max="99"
            v-model="kidAge.age"
            class="kid_age p2_light"
          />

          <div class="horizontal_line"></div>
        </div>

        <div
          @click="addRoom()"
          v-if="guestDataArray.length < 3"
          class="add_room"
        >
          <p class="a1">Додайте іншу кімнату</p>
          <img src="~/static/icons/gold-plus.svg" alt="" />
        </div>

        <button
          type="button"
          class="gold_button"
          @click="handleClick"
          v-show="bookingButtonIsShown"
        >
          Зарезервувати
        </button>
      </div>

      <!-- <GoldButton :text="'зарезервувати'" class="reserve_button" /> -->
    </div>
  </div>
</template>

<script>
import GoldButton from "~/components/GoldButton";
export default {
  name: "SelectGuestBlock",
  components: {
    GoldButton,
  },
  updated() {
    console.log("GUESTS", this.guestDataArray);
    console.log("BTNSHOWN", this.bookingButtonIsShown);
  },
  data() {
    return {
      visible: false,
      isAddRoom: true,
      allInformation: "скільки гостей",
      roomNumberName: "",

      guestDataArray: [
        {
          id: 0,
          roomNumber: 1,
          adult: 0,
          kid: 0,
          kidsAges: []
        }
      ]
    };
  },
  methods: {
    deleteRoom(roomId) {
      this.guestDataArray.splice(roomId, 1);

      for (let i = 0; i < this.guestDataArray.length; i++) {
        this.guestDataArray[i].id = i;
        this.guestDataArray[i].roomNumber = i + 1;
      }
    },
    addRoom() {
      let room = {
        id: this.guestDataArray.length,
        roomNumber: this.guestDataArray.length + 1,
        adult: 0,
        kid: 0,
        kidsAges: [],
      };

      this.guestDataArray.push(room);
    },

    ageValuePlus(id, peopleState) {
      if (this.guestDataArray[id][peopleState] < 3) {
        if (peopleState == "kid") {
          let kids = id;
          let kidsPlaceholder = "Скільки років першій дитині?";

          //Добавление разного плейсхолдера

          if (this.guestDataArray[id].kidsAges.length == 0) {
            kidsPlaceholder = "Скільки років першій дитині?";
          } else if (this.guestDataArray[id].kidsAges.length == 1) {
            kidsPlaceholder = "Скільки років другій дитині?";
          } else if (this.guestDataArray[id].kidsAges.length == 2) {
            kidsPlaceholder = "Скільки років третій дитині?";
          }

          let kidAgeElelment = {
            id: this.guestDataArray[id].kidsAges.length,
            age: null,
            placeholder: kidsPlaceholder,
          };

          //
          this.guestDataArray[id].kidsAges.push(kidAgeElelment);

          this.guestDataArray[id][peopleState] += 1;
        } else {
          this.guestDataArray[id][peopleState] += 1;
        }
      }
    },
    ageValueMinus(id, peopleState) {
      if (this.guestDataArray[id][peopleState] > 0) {
        if (peopleState == "kid") {
          this.guestDataArray[id].kidsAges.pop();
          this.guestDataArray[id][peopleState] -= 1;
        } else {
          this.guestDataArray[id][peopleState] -= 1;
        }
      }
    },

    roomRightName(roomGeneral) {
      if (roomGeneral == 1) {
        this.roomNumberName = "кімната";
      } else if (roomGeneral >= 2 && roomGeneral <= 4) {
        this.roomNumberName = "кімнати";
      } else if (roomGeneral >= 5) {
        this.roomNumberName = "кімнат";
      }
    },

    popUpOpen() {
      this.visible = true;
      document.body.style.overflow = "hidden";
    },
    popUpClose() {
      document.body.style.overflow = "auto";
      this.visible = false;

      let adultGeneral = 0;
      let kidGeneral = 0;
      let roomGeneral = this.guestDataArray.length;

      for (let i = 0; i < this.guestDataArray.length; i++) {
        adultGeneral += this.guestDataArray[i].adult;
        kidGeneral += this.guestDataArray[i].kid;
      }

      if (this.guestDataArray.length == 0) {
        this.allInformation = "скільки гостей";
      } else {
        this.roomRightName(roomGeneral);
        this.allInformation =
          adultGeneral +
          " дорослих / " +
          kidGeneral +
          " дітей / " +
          roomGeneral +
          " " +
          this.roomNumberName;
      }
    },
    handleClick() {
      this.popUpClose();
      this.$nuxt.$emit("bookingFromGuestsPopup");
      this.guestDataArray = [];
    }
  },
  watch: {
    visible: () => {
      console.log("OLJD");
    },
  },
  computed: {
    bookingButtonIsShown() {
      let visible = false;

      if (this.guestDataArray.length > 0) {
        visible =
          this.guestDataArray.findIndex(obj => obj.adult === 0) === -1
            ? true
            : false;
      }
      return visible;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/utils.scss";

// .a1 {
//   font-weight: bold;
// }

.gold_button {
  position: absolute;
  height: 53px;
  bottom: 4px;
  width: calc(100% - 12px);
  left: 4px;
  z-index: 111;
  font-family: Avenir Next Cyr;
  font-weight: 500;
  font-size: 9px;
  line-height: 140%;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #ffffff;

  padding: 0 56px;

  border: 1px solid;
  border-image: url("~@/static/images/gold_for_button.svg") 1 round;

  transition-duration: 0.6s;

  background: url("~@/static/images/gold_for_button.svg");
  background-repeat: no-repeat;
  background-size: cover;

  @include max(900) {
    border: unset;
    background: url("~@/static/images/gold_for_button.svg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  &:hover {
    @include min(900) {
      background: white;
      background-size: cover;
      transition-duration: 0.5s;

      .a1 {
        background: url("~@/static/images/gold_for_button.svg");
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

  cursor: pointer;
  @include max(lg) {
    height: 49px;
    padding: 0 32px;
    //min-width: fit-content;
  }
  @include max(md) {
    padding: 0 30px;
  }
  &__link {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .a1 {
    white-space: nowrap;
  }
}

.guests_data {
  width: 100%;
  height: 50px;
  background: #ffffff;
  border-radius: 2px;

  padding: 18px 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.guest_header {
  margin-bottom: 48px;
}
.pop-up {
  position: fixed;
  top: 4px;
  left: 4px;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  z-index: 111;

  &:before {
    content: "";
    position: absolute;
    top: 4px;
    left: 4px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    z-index: 20;
  }
  @include min(sm) {
    display: none;
  }
}
.pop-up_body {
  overflow: auto;
  position: relative;
  z-index: 75;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  padding: 32px 18px 64px;

  h3 {
    text-align: left;
    margin-top: 40px;
  }
}
.pop-up_back {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  width: 55px;
  .a1 {
    opacity: 0.5;
  }
  svg {
    margin-top: 1.5px;
    transform: rotate(180deg);
  }
}
.room_option {
  position: relative;
  .delete_button {
    position: absolute;
    right: 0;
    top: 3px;
  }
  .room_number {
    text-align: left;
    font-size: 20px;
    line-height: 110%;
    margin-bottom: 22px;
  }
  .guest_age {
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 22px;
    }
  }
  .people_state {
    // font-weight: 500;
    // font-size: 9px;
    // line-height: 140%;
  }
  .guest_number {
    height: 14px;
    display: flex;
    align-items: center;

    .guest_minus {
      cursor: pointer;
      margin-right: 12px;
    }
    .guest_value {
    }
    .guest_plus {
      cursor: pointer;
      margin-left: 12px;
    }
  }
  .kid_age {
    width: 100%;
    height: 41px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    padding: 10px 14px;
    color: #000000;
    font-size: 13px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}
.horizontal_line {
  width: calc(100% + 16px);
  margin: 30px 0px;
  height: 1px;
  margin-left: -8px;
  background: #000000;
  opacity: 0.1;
}
.add_room {
  height: 16px;

  display: flex;
  align-items: center;

  .a1 {
    font-size: 10px;
    background: url("../../../static/images/dark_gold.jpg");
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 120%;
  }

  img {
    margin-top: -1px;
    margin-left: 8px;
  }
}
.reserve_button {
  z-index: 111;
  height: 53px;
  bottom: 57px;
  left: 4px;
  width: calc(100% - 12px);
}
</style>

