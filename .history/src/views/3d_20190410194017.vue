<template>
    <model-obj
        src="static/models/obj/02751/02751.obj"
        mtl="static/models/obj/02751/02751.mtl"></model-obj>
</template>

<script>
    import { ModelObj } from 'vue-3d-model'

    export default {
        components: {
            ModelObj
        }
    }
</script>

<style>
    .background-text {
        position: absolute;
        top: 50%;
        left: 0;
        z-index: 1;
        width: 100%;
        transform: translateY(-50%);
        text-align: center;
        font-size: 60px;
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
