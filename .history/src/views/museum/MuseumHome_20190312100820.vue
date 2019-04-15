<template>
  <div class="museum-home">
    <search-bar></search-bar>
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
export default {
  components: {
    SearchBar
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
