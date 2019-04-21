<template>
 <p>
  <v-html-panel :url="url1"></v-html-panel>
  <v-html-panel :url="url2"></v-html-panel>
 </p>
</template>
<style scoped>
 p{color:red}
</style>
<script>
 export default{
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
