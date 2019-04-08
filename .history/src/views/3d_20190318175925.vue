<template>
    <model-three src="static/models/json/scene.json"></model-three>
</template>

<script>
import { ModelThree } from 'vue-3d-model'
import { ModelCollada } from 'vue-3d-model'

export default {
  components: {
    ModelThree
  }
}
</script>
