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
    <p>rotate x:
      <span id="degx-span">0</span> deg
    </p>
    <input
      type="range"
      min="-360"
      max="360"
      id="rotatex"
      value="0"
      class="range-control"
      @change="rotate()"
    >
    <br>
    <p>rotate y:
      <span id="degy-span">0</span> deg
    </p>
    <input
      type="range"
      min="-360"
      max="360"
      id="rotatey"
      value="0"
      class="range-control"
      @change="rotate()"
    >
    <br>
    <p>rotate z:
      <span id="degz-span">0</span> deg
    </p>
    <input
      type="range"
      min="-360"
      max="360"
      id="rotatez"
      value="0"
      class="range-control"
      @change="rotate()"
    >
    <br>
  </div>
  <div id="optranslate">
    <p>translate x:
      <span id="translatex-span">0</span> px
    </p>
    <input
      type="range"
      min="-360"
      max="360"
      id="translatex"
      value="0"
      class="range-control"
      @change="translateall()"
    >
    <br>
    <p>translate y:
      <span id="translatey-span">0</span> px
    </p>
    <input
      type="range"
      min="-360"
      max="360"
      id="translatey"
      value="0"
      class="range-control"
      @change="translateall()"
    >
    <br>
    <p>translate z:
      <span id="translatez-span">0</span> px
    </p>
    <input
      type="range"
      min="-360"
      max="360"
      id="translatez"
      value="0"
      class="range-control"
      @change="translateall()"
    >
    <br>
  </div>
</body>
</template>

<script >
function rotate () {
  var x = document.getElementById('rotatex').value
  var y = document.getElementById('rotatey').value
  var z = document.getElementById('rotatez').value
  document.getElementById('cube').style.webkitTransform = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg)'
  document.getElementById('degx-span').innerText = x
  document.getElementById('degy-span').innerText = y
  document.getElementById('degz-span').innerText = z
}
</script>

<style>
html, body, div, span,
        h1, h2, h3, h4, h5, h6, p
        a, img, ol, ul, li
        {
            margin:0;padding:0;border:0;outline:0;
        }
        body {
          overflow: scroll;
        }
        #experiment{
            -webkit-perspective: 800;
            -webkit-perspective-origin: 50% 50%;
        }
        #cube{
            position: relative;
            margin:100px auto;
            height:200px;
            width:200px;
            -webkit-transform-style:preserve-3d;
        }
        .face{
            position:absolute;
            height:160px;
            width:160px;
            padding:20px;
            background-color: black;

            color:white;
            font-weight:bold;
            font-size:160px;
            line-height:160px;
            text-align:center;

            -webkit-transition: -webkit-transform 1s linear;
        }
        #face1  {
        }
        #face2 {
            -webkit-transform-origin:right;
            -webkit-transform: rotateY(-90deg);
        }
        #face3 {
            -webkit-transform-origin:left;
            -webkit-transform: rotateY(90deg);
        }
        #face4 {
            -webkit-transform-origin:top;
            -webkit-transform: rotateX(-90deg);
        }
        #face5 {
            -webkit-transform-origin:bottom;
            -webkit-transform: rotateX(90deg);
        }
        #face6 {
            -webkit-transform: translateZ(-200px);
        }

        #oprotate{
            margin:0 auto;
            font-size:16px;
            font-weight:bold;
            width:800px;
        }
        #oprotate .range-control{width:721px;}
</style>
