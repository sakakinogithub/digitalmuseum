<template>
<div>
    <p class="background-text">
        Vue<br>3D<br>Model<br>Background
    </p>
    <div class="background-buttons">
        <p>背景色</p>
        <button @click="bgColor = '#ff0'">黄色</button>
        <button @click="bgColor = '#f00'">粉色</button>
        <button @click="bgColor = '#13ce66'">绿色</button>
        <p>透明度</p>
        <button @click="bgAlpha = 0.5">半透明</button>
        <button @click="bgAlpha = 1">不透明</button>
        <button @click="bgAlpha = 0">透明</button>
    </div>
    <model-obj
    class="model-box"
        :backgroundAlpha="bgAlpha"
        :backgroundColor="bgColor"
        src="static/models/obj/G3-IV-212.obj"
        mtl="static/models/obj/G3-IV-212.mtl"></model-obj>
</div>
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

<style lang="scss" scoped>
.background-text {
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 1;
        width: 100%;
        transform: translateY(-50%);
        text-align: center;
        font-size: 60px;
        line-height: 1;
    }
    .background-buttons {
        position: absolute;
        top: 0;
        left: 10px;
        z-index: 3;
    }
    .background-buttons > p {
        margin-top: 15px;
        color: #000;
    }
    .background-buttons > button {
        background: #fff;
        padding: 4px 6px;
        margin-top: 5px;
        outline: none;
        border: 1px solid #c4c4c4;
    }
    .model-box {
        position: relative;
        z-index: 2;
    }
</style>
