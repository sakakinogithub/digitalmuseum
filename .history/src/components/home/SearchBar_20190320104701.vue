<template>
  <div class="search-bar" :class="{'hide-title': !titleVisible, 'hide-shadow': !shadowVisible}">
    <transition name="title-move">
    <div class="search-bar-title-wrapper" v-show="titleVisible">
      <div class="title-text-wrapper">
        <span class="title-text title">{{$t('home.title')}}</span>
      </div>
      <div class="title-icon-shake-wrapper">
        <span class="icon-shake icon"></span>
      </div>
    </div>
    </transition>
    <div class="title-icon-back-wrapper" :class="{'hide-title': !titleVisible}">
      <span class="icon-back icon"></span>
    </div>
    <div class="search-bar-input-wrapper" :class="{'hide-title': !titleVisible}">
      <div class="search-bar-blank" :class="{'hide-title': !titleVisible}"></div>
      <div class="search-bar-input">
        <span class="icon-search icon"></span>
        <input class="input" type="text" :placeholder="$t('home.hint')" v-model="searchText">
      </div>
    </div>
  </div>
</template>

<script>
import { MuseumHomeMixin } from '../../utils/mixin'
export default {
  mixins: [MuseumHomeMixin],
  data () {
    return {
      searchText: '',
      titleVisible: true,
      shadowVisible: flase
    }
  },
  watch: {
    offsetY (offsetY) {
      if (offsetY > 0) {
        this.hideTitle()
      } else {
        this.showTitle()
      }
    }
  },
  methods: {
    hideTitle () {
      this.titleVisible = false
    },
    showTitle () {
      this.titleVisible = true
    },
    hideShadow () {
      this.shadowVisible = false
    },
    showShadow () {
      this.shadowVisible = true
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
  .search-bar {
    position: relative;
    z-index: 150;
    width: 100%;
    height: px2rem(94);
    &.hide-title {
      height: px2rem(52);
    }
    &.hide-shadow {
      box-shadow: none;
    }
    .search-bar-title-wrapper {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: px2rem(42);
      .title-text-wrapper {
        width:100%;
        height: px2rem(42);
        @include center;
      }
      .title-icon-shake-wrapper {
        position: absolute;
        right: px2rem(15);
        top: 0;
        height: px2rem(42);
        @include center;
      }
    }
    .title-icon-back-wrapper {
        position: absolute;
        left: px2rem(15);
        top: 0;
        height: px2rem(42);
        transition: height $animationTime $animationType;
        @include center;
        &.hide-title {
          height: px2rem(52);
        }
      }
    .search-bar-input-wrapper {
      position: absolute;
      left: 0;
      top: px2rem(42);
      display: flex;
      width: 100%;
      height: px2rem(52);
      padding: 0 px2rem(10);
      box-sizing: border-box;
      transition: top $animationTime $animationType;
      &.hide-title {
        top:0;
      }
      .search-bar-blank {
        flex: 0 0 0;
        width: 0;
        transition: all $animationTime $animationType;
        &.hide-title {
        flex: 0 0 px2rem(31);
        width: px2rem(31);
        }
      }
      .search-bar-input {
        flex: 1;
        width: 100%;
        background: #f4f4f4;
        border-radius: px2rem(20);
        padding: px2rem(5) px2rem(15);
        box-sizing: border-box;
        border: px2rem(1) solid #eee;
        @include left;
        .icon-search {
          color: #999;
        }
        .input {
          width: 100%;
          height: px2rem(22);
          border: none;
          background: transparent;
          margin-left: px2rem(10);
          font-size: px2rem(12);
          color: #666;
          &:focus {
            outline: none;
          }
          &::-webkit-input-placeholder {
            color: #ccc;
          }
        }
      }
    }
  }
</style>
