<template>
    <p class="background-text">
        Vue<br>3D<br>Model<br>Background
    </p>
    <div class="background-buttons">
        <p>Color</p>
        <button @click="bgColor = '#ff0'">#ff0</button>
        <button @click="bgColor = '#f00'">#f00</button>
        <button @click="bgColor = '#13ce66'">#13ce66</button>
        <p>Alpha</p>
        <button @click="bgAlpha = 0.5">0.5</button>
        <button @click="bgAlpha = 1">1</button>
        <button @click="bgAlpha = 0">0</button>
    </div>
    <model-obj
        :backgroundAlpha="bgAlpha"
        :backgroundColor="bgColor"
        src="static/models/obj/tree.obj"></model-obj>
</template>

<script>
    import { ModelObj } from 'vue-3d-model'

    export default {
        data () {
            return {
                bgColor: '#ff0',
                bgAlpha: 0.5
            }
        },
        components: {
            ModelObj
        }
    }
</script>
