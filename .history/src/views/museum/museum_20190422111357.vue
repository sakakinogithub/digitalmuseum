<template>
<div>
  <Scroll>
      <navbar class="navbar1"></navbar>
      <div class="con-example-images">
    <vs-images>
      <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 9" />
      <vs-image :key="index" :src="`https://picsum.photos/400/400?image=1${index}`" v-for="(image, index) in 7" />
    </vs-images>
  </div>
  </Scroll>
</div>
</template>

<script>
import navbar from '../../components/common/navbar'
import Scroll from '../../components/common/Scroll'
export default {
  components: {
    navbar,
    Scroll
  }
}
</script>

<style lang="stylus">
.con-example-images
  max-height 500px
  overflow auto
</style>
