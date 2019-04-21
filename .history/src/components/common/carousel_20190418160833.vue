<template>
   <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img class="first-slide" src="https://img.dpm.org.cn/Uploads/Picture/2019/03/21/s5c92fb14ad4c9.jpg" alt="First slide">
        </div>
        <div class="item">
          <img class="second-slide" src="https://img.dpm.org.cn/Uploads/Picture/2019/02/11/s5c610e4f0da3a.jpg" alt="Second slide">
        </div>
        <div class="item">
          <img class="third-slide" src="https://img.dpm.org.cn/Uploads/Picture/2018/12/14/s5c135ca6d77c2.jpg" alt="Third slide">
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</template>

<style lang="scss" scoped>
@import "../../assets/styles/mixin";

.carousel-caption {
  z-index: 10; /* Since positioning the image, we need to help out the caption */
}

/* Declare heights because of positioning of img element */
.carousel .item {
  min-height: 20rem;
  background-color: #777;
}

@media screen and (max-width: 500px) {
  .carousel .item {
    min-height: 5rem;
  }
}
.carousel-inner > .item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
}
.carousel-inner {
  float:left;
  width:100%;
  height: 100%;
  position: absolute;
}
</style>
