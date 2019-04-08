<template>
  <div class="museum-home">
    <search-bar></search-bar>
    <scroll></scroll>
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
import Scroll from '../../components/common/Scroll'
export default {
  components: {
    SearchBar,
    Scroll
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
