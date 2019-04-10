<template>
<body>
<div id="experiment">
    <div id="cube">
        <div class="face" id="face1">1</div>
        <div class="face" id="face2">2</div>
        <div class="face" id="face3">3</div>
        <div class="face" id="face4">4</div>
        <div class="face" id="face5">5</div>
        <div class="face" id="face6">6</div>
    </div>
</div>
<div id="oprotate">
    <p>rotate x: <span id="degx-span">0</span> deg</p>
    <input type="range" min="-360" max="360" id="rotatex" value="0" class="range-control" onchange="rotate()" /><br/>
    <p>rotate y: <span id="degy-span">0</span> deg</p>
    <input type="range" min="-360" max="360" id="rotatey" value="0" class="range-control" onchange="rotate()" /><br/>
    <p>rotate z: <span id="degz-span">0</span> deg</p>
    <input type="range" min="-360" max="360" id="rotatez" value="0" class="range-control" onchange="rotate()" /><br/>
</div>
<div id="optranslate">
    <p>translate x: <span id="translatex-span">0</span> px</p>
    <input type="range" min="-360" max="360" id="translatex" value="0" class="range-control" onchange="translateall()" /><br/>
    <p>translate y: <span id="translatey-span">0</span> px</p>
    <input type="range" min="-360" max="360" id="translatey" value="0" class="range-control" onchange="translateall()" /><br/>
    <p>translate z: <span id="translatez-span">0</span> px</p>
    <input type="range" min="-360" max="360" id="translatez" value="0" class="range-control" onchange="translateall()" /><br/>
</div>
</body>
</template>

<style>

</style>
