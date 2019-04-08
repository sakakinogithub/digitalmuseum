<template>
<div class="flap-card-wrapper" v-show="flapCardVisible">
  <div class="flap-card-bg">
    <div class="flap-card" v-for="(item, index) in flapCardList" :key="index">
      <div class="flap-card-circle">
        <div class="flap-card-semi-circle flap-card-semi-circle-left" :style="semiCircleStyle(items, 'left')"></div>
        <div class="flap-card-semi-circle flap-card-semi-circle-right" :style="semiCircleStyle(items, 'right')"></div>
      </div>
    </div>
  </div>
  <div class="close-btn-wrapper" @click="close">
    <span class="icon-close"></span>
  </div>
</div>
</template>

<script>
import { MuseumHomeMixin } from '../../utils/mixin'
import { flapCardList } from '../../utils/store'
export default {
  mixins: [MuseumHomeMixin],
  data () {
    return {
      flapCardList
    }
  },
  methods: {
    close () {
      this.setFlapCardVisible(false)
    },
    semiCircleStyle (item, dir) {
      return {
        backgroundColor: `rgb(${item.r}, ${item.g}, ${item.b})`,
        backgroundSize: item.backgroundSize,
        backgroundImage: dir === 'left' ? item.imgLeft : item.imgRight
      }
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
  @import "../../assets/styles/flapCard";

  .flap-card-wrapper {
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    @include center;
    @include absCenter;
    .flap-card-bg {
      position: relative;
      width: px2rem(64);
      height: px2rem(64);
      border-radius: px2rem(5);
      background: white;
      &.animation {
        animation: flap-card-move .3s ease-in;
      }
      @keyframes flap-card-move {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        50% {
          transform: scale(1.2);
          opacity: 1;
        }
        75% {
          transform: scale(.9);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      .flap-card {
        width: px2rem(48);
        height: px2rem(48);
        @include absCenter;
        .flap-card-circle {
          display: flex;
          width: 100%;
          height: 100%;
          .flap-card-semi-circle {
            flex: 0 0 50%;
            width: 50%;
            height: 100%;
            background-repeat: no-repeat;
            backface-visibility: hidden;
          }
          .flap-card-semi-circle-left {
            border-radius: px2rem(24) 0 0 px2rem(24);
            background-position: center right;
            transform-origin: right;
          }
          .flap-card-semi-circle-right {
            border-radius: 0 px2rem(24) px2rem(24) 0;
            background-position: center left;
            transform-origin: left;
          }
        }
      }
      .point-wrapper {
        z-index: 1500;
        @include absCenter;
        .point {
          border-radius: 50%;
          @include absCenter;
          &.animation {
            @for $i from 1 to length($moves) {
              &:nth-child(#{$i}) {
                @include move($i);
              }
            }
          }
        }
      }
    }
    .close-btn-wrapper {
      position: absolute;
      left: 0;
      bottom: px2rem(30);
      z-index: 1100;
      width: 100%;
      @include center;
      .icon-close {
        width: px2rem(45);
        height: px2rem(45);
        border-radius: 50%;
        background: #333;
        font-size: px2rem(25);
        color: white;
        @include center;
      }
    }
  }
</style>
