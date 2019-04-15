<template>
<div class="flap-card-wrapper" v-show="flapCardVisible"></div>
</template>

<script>
import { MuseumHomeMixin } from '../../utils/mixin'
export default {
  mixins: [MuseumHomeMixin]
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  @import "../../assets/styles/global";
</style>
