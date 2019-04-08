<template>
<div>
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
navbar {
  margin-bottom: 0;
}
</style>

