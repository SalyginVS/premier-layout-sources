<template>
  <div class="dropdown-parameters-room">
    <div class="dropdown-parameters_wrapper">
      <div v-for="room in rooms" :key="room.id" class="item">
        <h6 class="header font-cormorant">
          Кімната {{ room.id + 1 }}
          <img
            @click.stop="deleteRoom(room)"
            src="~/static/icons/room-cross.svg"
            alt="icon"
          />
        </h6>
        <div class="choose-persons">
          <p class="a1">дорослих</p>
          <p class="p2_light number-persons">
            <span
              class="minus"
              :class="{ disabled: room.numberAdults == 0 }"
              @click="minusNumAdults(room)"
            >
              -
            </span>
            <span> {{ room.numberAdults }} </span>
            <span
              class="plus"
              :class="{ disabled: room.numberAdults == 5 }"
              @click="plusNumAdults(room)"
            >
              +
            </span>
          </p>
        </div>
        <div class="choose-persons">
          <p class="a1">дітей</p>
          <p class="p2_light number-persons">
            <span
              class="minus"
              :class="{ disabled: room.children.length == 0 }"
              @click="minusNumChild(room)"
            >
              -
            </span>
            <span> {{ room.children.length }} </span>
            <span
              class="plus"
              :class="{ disabled: room.children.length == 5 }"
              @click="plusNumChild(room)"
            >
              +
            </span>
          </p>
        </div>
        <div
          class="input-wrapper"
          v-for="(input, index) in room.children"
          :key="index"
        >
          <input
            class="p2_light"
            placeholder="Скільки років першій дитині?"
            @keypress="onlyNumber($event)"
          />
        </div>
      </div>
      <p
        class="a1 button-add-room"
        :class="{ disabled: rooms.length == 10 }"
        @click="addRoom"
      >
        Додайте іншу кімнату
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DropdownParametersRoom",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["filters"]),

    rooms() {
      return this.filters.rooms;
    },

    allChildren() {
      return this.rooms.reduce((accum, curr) => {
        return accum + curr.children.length;
      }, 0);
    },
    allAdults() {
      return this.rooms.reduce((accum, curr) => {
        return accum + curr.numberAdults;
      }, 0);
    },
  },

  methods: {
    minusNumAdults(room) {
      this.$store.commit("filters/minusNumAdults", room.id);
    },
    plusNumAdults(room) {
      this.$store.commit("filters/plusNumAdults", room.id);
    },
    minusNumChild(room) {
      this.$store.commit("filters/minusNumChild", room.id);
    },
    plusNumChild(room) {
      this.$store.commit("filters/plusNumChild", room.id);
    },
    addRoom() {
      this.$store.commit("filters/addRoom");
    },
    deleteRoom(room) {
      this.$store.commit("filters/deleteRoom", room.id);
    },
    backdropClick(e) {
      let selectClosest = e.target.closest(".dropdown-parameters-room");
      if (!selectClosest) {
        this.open = false;
      }
    },
    onlyNumber($event) {
      let keyCode = $event.keyCode ? $event.keyCode : $event.which;
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault();
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.backdropClick);
  },
  destroyed() {
    document.removeEventListener("click", this.backdropClick);
  },
};
</script>

<style lang="scss" scoped>
.dropdown-parameters-room {
  position: absolute;
  top: 30px;
  left: -105px;
  width: 310px;
  // max-height: 550px;
  height: auto;
  padding: 28px;
  background-color: #ffffff;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  z-index: 12;
  &::before {
    content: "";
    position: absolute;
    top: -7px;
    left: 30px;
    width: 12px;
    height: 7px;
    display: block;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background-color: #ffffff;
  }

  &.open {
    display: flex;
  }
  &::before {
    content: "";
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
    width: 12px;
    height: 7px;
    display: block;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background-color: #ffffff;
  }
  .dropdown-parameters_wrapper {
    width: 100%;
    height: auto;
    max-height: calc(265px - 56px);
    padding-right: 14px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    .item {
      width: 100%;
      margin-bottom: 25px;
      padding-bottom: 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      border-bottom: 1px solid rgba(#000000, 0.1);

      .header {
        margin-bottom: 20px;
        width: 100%;
        color: #735c33;
        position: relative;
        img {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -8px;
        }
      }

      .choose-persons {
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .number-persons {
          width: 30px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          .minus {
            content: "-";
            position: absolute;
            left: -8px;
            top: 50%;
            transform: translateY(-50%);
            padding: 0 3px;
            font-size: 20px;
            color: rgba(#000000, 0.5);
            cursor: pointer;
          }
          .plus {
            content: "+";
            position: absolute;
            right: -8px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 14px;
            padding: 0 3px;
            color: rgba(#000000, 0.5);
            cursor: pointer;
          }
        }
      }
      .input-wrapper {
        display: flex;
        width: 100%;
        height: 40px;
        border: 1px solid rgba(#000000, 0.1);
        &:not(:last-child) {
          margin-bottom: 10px;
        }

        input {
          width: 100%;
          height: 100%;
          padding: 10px 14px;
          border: none;
        }
      }
    }
    .button-add-room {
      width: fit-content;
      display: flex;
      color: #aa9474;
      position: relative;
      cursor: pointer;
      &::after {
        content: "+";
        position: absolute;
        right: -20px;
        top: -2px;
        font-size: 14px;
        color: #aa9474;
      }
    }
  }
  .disabled {
    opacity: 0.6;
    pointer-events: none;
    cursor: default !important;
  }
}
</style>