<template>
<div class="wrap">
  <navbar></navbar>
  <list></list>
  <pcfooter></pcfooter>
</div>
</template>

<script>
import navbar from '../components/common/navbar'
import pcfooter from '../components/common/pcfooter'
import list from '../components/detail/list'
export default {
  components: {
    navbar,
    pcfooter,
    list
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
