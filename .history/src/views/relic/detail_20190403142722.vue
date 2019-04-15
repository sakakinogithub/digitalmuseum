<template>
<div>
  <navbar></navbar>
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
    pcfooter
  }
}
</script>
