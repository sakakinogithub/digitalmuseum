<template>
<div class="wrap">
  <navbar></navbar>
  <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
  <comment></comment>
  <pcfooter></pcfooter>
</div>
</template>

<script>
import navbar from '../../components/common/navbar'
import comment from '../../components/subcomponents/comment'
import pcfooter from '../../components/common/pcfooter'
export default {
  components: {
    navbar,
    comment,
    pcfooter
  }
    methods: {
      handleClose () {
        console.log('close event')
      }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
