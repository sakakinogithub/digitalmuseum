<template>
  <div class="screen">
    <div class="wrap">
      <navbar></navbar>
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
        <mt-swipe-item>4</mt-swipe-item>
        <mt-swipe-item>5</mt-swipe-item>
      </mt-swipe>
      <div class="page-header">
        <h1 class="slogen theme">
          <span class="wing slogen-left"></span>
          <span>&nbsp;博物館&nbsp;</span>
          <span class="wing slogen-right"></span>
        </h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e0bbc96a24.jpg">
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e206f85892.jpg">
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e2015d4aa3.jpg">
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e2049cee77.jpg">
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e1fe0d4bac.jpg">
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2018/08/15/s5b73fdc321843.jpg">
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e2c0f3e849.jpg">
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e2c1f0bb50.jpg">
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e2c310ecad.jpg">
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e2c40eb7d4.jpg">
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2018/09/20/s5ba37bf6655c3.jpg">
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/06/15/s594232e8242ad.jpg">
          </div>
        </div>
        <hr class="theme">
        <div class="col-4 devide">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <footer>
        <pcfooter></pcfooter>
      </footer>
    </div>
  </div>
</template>

<script>
import navbar from '../components/common/navbar'
import pcfooter from '../components/common/pcfooter'
export default {
  components: {
    navbar,
    pcfooter
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
h6 {
  width: 80%;
  height: 50%;
}
.container{
  width: 90%;
}
img {
  border: 0;
  outline: 0;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 0.5rem;
}
.screen {
  width: 100%;
  height: 100%;
}
.wrap {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.theme {
  text-align: center; //居中
  font-weight: bold; //加粗
  padding-bottom: 10px;
  border-bottom: solid 2px #e6e6e6;
}
.slogen .slogen-left {
  background: url("./../assets/images/slogen.png");
  margin-top: 3px;
}
.slogen .slogen-right {
  background: url("./../assets/images/slogen.png");
  transform: scaleX(-1);
  margin-top: 3px;
}
.wing {
  display: inline-block;
  width: 42px;
  height: 16px;
}
.jumbotron {
  color: #fff;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2c5364,
    #203a43,
    #0f2027
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.text {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
}
.devide {
  text-align: right;
  margin: 0 auto;
}
.glyphicon {
  width: 10%;
  height: 50%;
}
.label {
  width: 10%;
  height: 50%;
}
.name {
  width: 50%;
  height: 50%;
}
.time {
  width: 50%;
  height: 50%;
  text-align: right;
}
.page {
  margin: 0;
}
.navbar {
  margin-bottom: 0;
  border: none;
}
.mint-swipe {
  height: 10rem;
  .mint-swipe-item {
    &:nth-child(1) {
      background-image: url(./../assets/images/20160616104620164.jpg);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    &:nth-child(2) {
      background-image: url(./../assets/images/20160606160737107.jpg);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    &:nth-child(3) {
      background-image: url(http://www.dtxsmuseum.com/images_ch_pc/banner_images/banner_0.jpg);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    &:nth-child(4) {
      background-image: url(./../assets/images/20160803085453191.jpg);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    &:nth-child(5) {
      background-image: url(./../assets/images/shanxi.jpg);
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
}
@media screen and (max-width: 768px) {
  .container{
    width: auto;
  }
  .mint-swipe {
    height: 4rem;
  }
}
</style>
