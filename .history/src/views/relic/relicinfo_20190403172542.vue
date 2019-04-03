<template>
<div class="wrap">
  <navbar></navbar>
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
}
</script>

