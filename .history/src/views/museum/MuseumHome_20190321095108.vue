<template>
  <div class="museum-home">
    <search-bar></search-bar>
    <flap-card></flap-card>
    <scroll :top="scrollTop" @onScroll="onScroll" ref="scroll">
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
      <div>1111111111111111111111111111</div>
    </scroll>
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
import Scroll from '../../components/common/Scroll'
import FlapCard from '../../components/home/FlapCard'
import { MuseumHomeMixin } from '../../utils/mixin'
export default {
  mixins: [MuseumHomeMixin],
  components: {
    SearchBar,
    Scroll,
    FlapCard
  },
  data () {
    return {
      scrollTop: 94
    }
  },
  methods: {
    onScroll (offsetY) {
      this.setOffsetY(offsetY)
      if (offsetY > 0) {
        this.scrollTop = 52
      } else {
        this.scrollTop = 94
      }
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style lang="scss"  rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
  .museum-home{
    width: 100%;
    height: 100%;
  }
</style>
