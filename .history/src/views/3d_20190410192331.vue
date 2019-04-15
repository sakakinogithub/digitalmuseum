<template>
<div>
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
        src="static/models/obj/02751/02751.obj"
        mtl="static/models/obj/02751/02751.mtl"></model-obj>
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

<style>
.hljs{display:block;overflow-x:auto;padding:.5em;color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}
</style>

