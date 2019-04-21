<template>
  <div class="screen">
    <div class="wrap">
      <Scroll></Scroll>
      <navbar class="navbar1"></navbar>
      <carousel class="carousel"></carousel>
      <div class="museum_main">
        <div class="page-header">
          <h1 class="slogen theme">
            <span class="wing slogen-left"></span>
            <span>&nbsp;博物館&nbsp;</span>
            <span class="wing slogen-right"></span>
          </h1>
        </div>
        <div class="container">
          <div class="row">
            <a href="#">
              <div class="item1 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <img class="photo" ref="bigphoto" src="./../assets/images/20161208160302_267.jpg">
              </div>
            </a>
            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div class="row">
                <div class="first-text">
                  <div class="item2 col-md-12">
                    <h3 style="color:#fff">陕西历史博物馆</h3>
                    <p>三秦大地是中华民族生息、繁衍，华夏文明诞生、发展的重要地区之一，中国历史上最为辉煌的周、秦、汉、唐等十三个王朝曾在这里建都。丰富的文化遗存，深厚的文化积淀，形成了陕西独特的历史文化风貌，被誉为“古都明珠，华夏宝库”的陕西历史博物馆则是展示陕西历史文化和中国古代文明的艺术殿堂。 陕西历史博物馆位于西安大雁塔的西北侧，筹建于1983年，1991年6月20日落成开放，是中国第一座大型现代化国家级博物馆，前身可以追溯到1909年成立的陕西“劝工陈列所”，它的建成标志着中国博物馆事业迈入了新的发展里程。</p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div class="row">
                <a href="#">
                  <div class="item3 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <img src="./../assets/images/timg.jpg" @mouseenter="showDetails" @mouseleave="revertImg" ref="museum_detals1">
                  </div>
                </a>
                <a href="#">
                  <div class="item3 col-xs-12 col-sm-6 col-md-6 col-lg-6">
                    <img src="./../assets/images/timg2.jpg"  @mouseenter="showDetails2()" @mouseleave="revertImg" ref="museum_detals2">
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="item-other col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b3852595a2.jpg" ref="photo" @click="showMuseum">
            </div>
            <div class="item-other col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b381e7251b.jpg">
            </div>
            <div class="item-other col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b37f03ce66.jpg">
            </div>
            <div class="item-other col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b37bf60105.jpg">
            </div>
          </div>
          <div class="row">
            <div class="item-other col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b377bbd0a0.jpg">
            </div>
            <div class="item-other col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b370b35c25.jpg">
            </div>
            <div class="item-other col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b36db6eec1.jpg">
            </div>
            <div class="item-other col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b363502ae9.jpg">
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="text-align:right">
            <a href="#/DGMU1301">More</a>
            </div>
          </div>
        </div>
      </div>
      <div class="subjects_main">
        <div class="page-header">
          <h1 class="slogen theme">
            <span class="wing slogen-left"></span>
            <span>&nbsp;专题展览&nbsp;</span>
            <span class="wing slogen-right"></span>
          </h1>
        </div>
        <div class="container">
          <div class="row">
            <a href="#">
              <div class="sub_item wrapper col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="./../assets/images/P020190117667436568061.jpg">
                <div class="img-mask">
                  <div class="sub_museum_name">陕西历史博物馆</div>
                  <div class="sub_museum_details">
                    <span>展览时间：2019年5月1日</span>
                    <p>专题展览（常设）</p>
                  </div>
                  <div class="sub_museum_desc">
                    <strong></strong>
                    <p>中国古代佛造像艺术</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="sub_item wrapper col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="./../assets/images/P020190117667830734896.jpg">
                <div class="img-mask">
                  <div class="sub_museum_name">陕西历史博物馆</div>
                  <div class="sub_museum_details">
                    <span>展览时间：2019年5月1日</span>
                    <p>专题展览（常设）</p>
                  </div>
                  <div class="sub_museum_desc">
                    <strong></strong>
                    <p>中国古代佛造像艺术</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="sub_item wrapper col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="./../assets/images/P020190324804045996913.jpg">
                <div class="img-mask">
                  <div class="sub_museum_name">陕西历史博物馆</div>
                  <div class="sub_museum_details">
                    <span>展览时间：2019年5月1日</span>
                    <p>专题展览（常设）</p>
                  </div>
                  <div class="sub_museum_desc">
                    <strong></strong>
                    <p>中国古代佛造像艺术</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="sub_item wrapper col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="./../assets/images/P020190117668187274558.jpg">
                <div class="img-mask">
                  <div class="sub_museum_name">陕西历史博物馆</div>
                  <div class="sub_museum_details">
                    <span>展览时间：2019年5月1日</span>
                    <p>专题展览（常设）</p>
                  </div>
                  <div class="sub_museum_desc">
                    <strong></strong>
                    <p>中国古代佛造像艺术</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="row">
            <a href="#">
              <div class="sub_item wrapper col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="./../assets/images/P020190403841585497512.jpg">
                <div class="img-mask">
                  <div class="sub_museum_name">陕西历史博物馆</div>
                  <div class="sub_museum_details">
                    <span>展览时间：2019年5月1日</span>
                    <p>专题展览（常设）</p>
                  </div>
                  <div class="sub_museum_desc">
                    <strong></strong>
                    <p>中国古代佛造像艺术</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="sub_item wrapper col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="./../assets/images/P020190324804045996913.jpg">
                <div class="img-mask">
                  <div class="sub_museum_name">陕西历史博物馆</div>
                  <div class="sub_museum_details">
                    <span>展览时间：2019年5月1日</span>
                    <p>专题展览（常设）</p>
                  </div>
                  <div class="sub_museum_desc">
                    <strong></strong>
                    <p>中国古代佛造像艺术</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="sub_item wrapper col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="./../assets/images/P020190324805026804347.jpg">
                <div class="img-mask">
                  <div class="sub_museum_name">陕西历史博物馆</div>
                  <div class="sub_museum_details">
                    <span>展览时间：2019年5月1日</span>
                    <p>专题展览（常设）</p>
                  </div>
                  <div class="sub_museum_desc">
                    <strong></strong>
                    <p>中国古代佛造像艺术</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="sub_item wrapper col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="./../assets/images/P020190117668187274558.jpg">
                <div class="img-mask">
                  <div class="sub_museum_name">陕西历史博物馆</div>
                  <div class="sub_museum_details">
                    <span>展览时间：2019年5月1日</span>
                    <p>专题展览（常设）</p>
                  </div>
                  <div class="sub_museum_desc">
                    <strong></strong>
                    <p>中国古代佛造像艺术</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="row">
            <a href="#">
              <div class="sub_item wrapper col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="./../assets/images/P020190117667436568061.jpg">
                <div class="img-mask">
                  <div class="sub_museum_name">陕西历史博物馆</div>
                  <div class="sub_museum_details">
                    <span>展览时间：2019年5月1日</span>
                    <p>专题展览（常设）</p>
                  </div>
                  <div class="sub_museum_desc">
                    <strong></strong>
                    <p>中国古代佛造像艺术</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="sub_item wrapper col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="./../assets/images/P020190117668187274558.jpg">
                <div class="img-mask">
                  <div class="sub_museum_name">陕西历史博物馆</div>
                  <div class="sub_museum_details">
                    <span>展览时间：2019年5月1日</span>
                    <p>专题展览（常设）</p>
                  </div>
                  <div class="sub_museum_desc">
                    <strong></strong>
                    <p>中国古代佛造像艺术</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="sub_item wrapper col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="./../assets/images/P020190117667830734896.jpg">
                <div class="img-mask">
                  <div class="sub_museum_name">陕西历史博物馆</div>
                  <div class="sub_museum_details">
                    <span>展览时间：2019年5月1日</span>
                    <p>专题展览（常设）</p>
                  </div>
                  <div class="sub_museum_desc">
                    <strong></strong>
                    <p>中国古代佛造像艺术</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#">
              <div class="sub_item wrapper col-xs-12 col-sm-6 col-md-6 col-lg-3">
                <img src="./../assets/images/P020190117668187274558.jpg">
                <div class="img-mask">
                  <div class="sub_museum_name">陕西历史博物馆</div>
                  <div class="sub_museum_details">
                    <span>展览时间：2019年5月1日</span>
                    <p>专题展览（常设）</p>
                  </div>
                  <div class="sub_museum_desc">
                    <strong></strong>
                    <p>中国古代佛造像艺术</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="text-align:right;margin-bottom:20px;">
            <a href="#/DGMU1304">More</a>
            </div>
          </div>
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
import Scroll from '../components/common/Scroll'
import carousel from '../components/common/carousel'
import pcfooter from '../components/common/pcfooter'
export default {
  components: {
    navbar,
    carousel,
    pcfooter,
    Scroll
  },
  data () {
    return {
      tempImgSrc: '',
      bigImg: ''
    }
  },
  methods: {
    showDetails () {
      this.bigImg = this.$refs.bigphoto.src
      this.tempImgSrc = this.$refs.museum_detals1.src
      this.$refs.bigphoto.src = this.tempImgSrc
    },
    revertImg () {
      this.$refs.bigphoto.src = this.bigImg
    },
    showDetails2 () {
      this.tempImgSrc = this.$refs.museum_detals2.src
      this.$refs.bigphoto.src = this.tempImgSrc
    },
    showMuseum () {
      this.tempImgSrc = this.$refs.photo.src
      var temp = this.$refs.bigphoto.src
      this.$refs.bigphoto.src = this.tempImgSrc
      this.$refs.photo.src = temp
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.jumbotron {
  padding-top: 0;
}
.wrapper {
  position: relative;

  .img-mask {
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
    left: 1.8%;
    right: 0;
    top: 61.8%;
    bottom: 0;
    opacity: 0;
    width: 97%;
  }
  &:hover {
    .img-mask {
      animation: fadeIn;
      animation-duration: .5s;
      animation-fill-mode: forwards;
    }
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(0.7) rotate(0deg);
  }
  // 50% {
  //   opacity: 0.5;
  //   transform: scale(0.8) rotate(5deg);
  // }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.sub_museum_name {
  background-color: #5d7259;
  text-align: right;
  padding-right: 15px;
  font-size: 16px;
  font-weight: bold;
  height: 24px;
  line-height: 24px;
  color: #fff;
}
.sub_museum_details {
  padding: 12px 10px 0px;
  color: #fff;
}
.sub_museum_desc {
  padding: 20px 10px 0px;
  color: #fff;
}
.screen {
  width: 100%;
  height: 100%;
  overflow: scroll;
  overflow-x: hidden;
}
.photo {
  border: 0;
  outline: 0;
  vertical-align: middle;
  width: 100%;
  height: 100%;
}
.theme {
  text-align: center;
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
.page-header {
  border-bottom: 0px;
}
.museum {
  width: 1280em;
}
.first-text {
  padding: 0px 5px;
}
.item1 {
  height: 450px;
  padding: 0 5px;
  padding-bottom: 10px;
}
.item2 {
  background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/temporary5-bg2.jpg)
    repeat;
  width: 100%;
  height: 200px;
  margin: 0px;
  margin-bottom: 10px;
  overflow: hidden;
  float: left;
  padding: 0px 40px;
}
.item2 p {
  text-indent: 2em;
  font-size: 14px;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 18px;
}
.item3 {
  height: 230px;
  overflow: hidden;
  margin: 0px;
  margin-bottom: 10px;
  padding: 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item3 img {
  width: 100%;
  height: 100%;
}
.item-other,.sub_item {
  padding: 0px 5px;
  height: 100%;
  float: left;
  margin-bottom: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-other img {
  width: 100%;
  height: 265px;
}
.sub_item img{
  width: 100%;
  height: auto;
}
.container{
   width: 90%;
}
.item {
  position: relative;
  width: 307px;
  height: 221px;
  float: left;
  margin-bottom: 10px;
  margin-left: 10px;
  overflow: hidden;
}
.footerimg {
  background-color: black;
  min-height: 118px;
  height: 2.16rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.footerLeft {
  border-right: 1px solid #8791a5;
  .breadcrumb {
    padding: 0;
    margin: 0;
  }
}
.breadcrumb {
  background-color: black;
}
.footerRight {
  padding-left: 1.37rem;
  color: #b5c0d4;
  font-size: 0.257rem;
}
.imgcontainer {
  margin-bottom: 0.396rem;
  margin: 0px;
  padding: 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
}
.carousel-inner img {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 500px) {
  .container {
    width: auto;
  }
  .item2{
    height: 280px;
  }
}
</style>
