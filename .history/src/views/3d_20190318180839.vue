<template>
    <model-collada :rotation="rotation"
        @on-load="onLoad" src="static/models/json/scene.json"></model-three>
</template>

<script>
import { ModelCollada } from 'vue-3d-model'

export default {
  data: {
    rotation: {
      x: -Math.PI / 2,
      y: 0,
      z: 0
  }
        },
        methods: {
            onLoad () {
                this.rotate();
            },
            rotate () {
                this.rotation.z += 0.01;
                requestAnimationFrame( this.rotate );
            }
        },
        components: {
            ModelCollada
  }
}
</script>
