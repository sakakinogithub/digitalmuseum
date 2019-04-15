<template>
  <div class="museum">
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
  .museum {
    width: 100%;
    height: 100%;
    background: white;
    z-index: -1;
  }
</style>
