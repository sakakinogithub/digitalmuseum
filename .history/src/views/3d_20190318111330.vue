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
<div id="op">
    <p>rotate x: <span id="degx-span">0</span> deg</p>
    <input type="range" min="-360" max="360" id="rotatex" value="0" class="range-control" onchange="rotate()" /><br/>
    <p>rotate y: <span id="degy-span">0</span> deg</p>
    <input type="range" min="-360" max="360" id="rotatey" value="0" class="range-control" onchange="rotate()" /><br/>
    <p>rotate z: <span id="degz-span">0</span> deg</p>
    <input type="range" min="-360" max="360" id="rotatez" value="0" class="range-control" onchange="rotate()" /><br/>
</div>
</body>
</template>

<style>
#experiment {
  -webkit-perspective: 800;
  -webkit-perspective-origin: 50% 50%;
  -webkit-transform-style: -webkit-preserve-3d;
}
#block {
  width:500px;
  height:500px;
  background-color: #69c;
  margin:0px auto;
  font-size: 16px;
  font-weight: bold;
}
</style>
