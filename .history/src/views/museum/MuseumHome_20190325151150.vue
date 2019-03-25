<template>
  <div class="museum-home">
    <search-bar></search-bar>
    <flap-card :data="random"></flap-card>
    <scroll :top="scrollTop" @onScroll="onScroll" ref="scroll">
      <div class="banner-wrapper">
        <div class="banner-img" :style="{backgroundImage:`url('${banner}')`}"></div>
      </div>
    </scroll>
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
import Scroll from '../../components/common/Scroll'
import FlapCard from '../../components/home/FlapCard'
import { MuseumHomeMixin } from '../../utils/mixin'
import { home } from '../../api/store'
export default {
  mixins: [MuseumHomeMixin],
  components: {
    SearchBar,
    Scroll,
    FlapCard
  },
  data () {
    return {
      scrollTop: 94,
      random: null,
      banner: null
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
  },
  mounted () {
    home().then(response => {
      if (response && response.status === 200) {
        const data = response.data
        console.log(data)
        const randomIndex = Math.floor(Math.random() * data.random.length)
        this.random = data.random[randomIndex]
        this.banner = data.banner
      }
    })
  }
}
</script>

<style lang="scss"  rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
  .museum-home{
    width: 100%;
    height: 100%;
    .banner-wrapper{
      width: 100%;
      padding: px2rem(10);
      box-sizing: border-box;
      .banner-img {
        width: 100%;
        height: px2rem(140);
      }
    }
  }
</style>
