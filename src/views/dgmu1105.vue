<template>
  <div class="screen">
    <navbar></navbar>
    <div class="top">
      <div class="icon">
        <img
          src="http://b-ssl.duitang.com/uploads/item/201810/14/20181014174139_ynkqu.thumb.700_0.jpg"
          alt
          class="img-circle"
        >
      </div>
      <div class="change">
        <ul id="myTab" class="nav nav-tags">
          <li class="active">
            <a href="#home" data-toggle="tab">菜鸟教程</a>
          </li>
          <li>
            <a href="#ios" data-toggle="tab">iOS</a>
          </li>
        </ul>
        <div id="myTabContent" class="tab-content">
          <div class="tab-pane fade in active" id="home">
            <div class="row">
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <a href="#"><img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e0bbc96a24.jpg"></a>
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
          </div></div>
          </div>
          <div class="tab-pane fade" id="ios">
            <p>
              iOS 是一个由苹果公司开发和发布的手机操作系统。最初是于 2007 年首次发布 iPhone、iPod Touch 和 Apple
              TV。iOS 派生自 OS X，它们共享 Darwin 基础。OS X 操作系统是用在苹果电脑上，iOS 是苹果的移动版本。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container"></div>
    <footer>
      <pcfooter></pcfooter>
    </footer>
  </div>
</template>
<script>
import navbar from "../components/common/navbar";
import pcfooter from "../components/common/pcfooter";
export default {
  components: {
    navbar,
    pcfooter
  }
};
$(function() {
  $("#myTab li:eq(1) a").tab("show");
});
</script>
<style lang="scss" scoped>
div {
  display: block;
}
.screen {
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: #fff;
}
.icon {
  width: 100%;
  text-align: center;
}
.img-circle {
  margin: 0 atuo;
  transform: translate(0, 50%);
  height: 100px;
  width: 100px;
}
.change{
  margin-top: 50px;
  width: 100%;
  text-align: center;
}
.nav-tags{
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
}
li :hover{
  background-color: aqua;
}
img {
  border: 0;
  outline: 0;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
  margin-bottom: 0.5rem;
}
.tab-content{
  width: 1000px;
  margin: 0 auto;
}
</style>