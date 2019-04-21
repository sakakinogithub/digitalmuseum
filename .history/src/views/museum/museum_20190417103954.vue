<template>
 <p>
  <vhtmlpanel :url="url1"></vhtmlpanel>
  <vhtmlpanel :url="url2"></vhtmlpanel>
 </p>
</template>
<style scoped>
 p{color:red}
</style>
<script>
import vhtmlpanel from './v-html-panel'
 export default{
  components: {
    vhtmlpanel
  },
  data () {
   return {
    url1: '',
    url2: ''
   }
  },
  mounted () {
   this.url1 = './museum.html'
  },
  methods: {
  }
 }
</script>
