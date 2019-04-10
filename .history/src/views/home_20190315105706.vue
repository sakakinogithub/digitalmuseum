<template>
<div class="screen">
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossorigin="anonymous"
    >
  </head>
  <body>
    <div class="wrap">
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="container">
            <div class="navbar-header">
              <button
                type="button"
                class="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">logo</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li class="active">
                  <a href="#">
                    首页
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li>
                  <a href="#">博物馆</a>
                </li>
                <li>
                  <a href="#">主题</a>
                </li>
                <li>
                  <a href="#">文物</a>
                </li>
                <li>
                  <a href="#">关于</a>
                </li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="#">login</a>
                </li>
                <form class="navbar-form navbar-left">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                  </div>
                  <button type="submit" class="btn btn-default">Submit</button>
                </form>
              </ul>
            </div>
            <!-- /.navbar-collapse -->
          </div>
          <!-- /.container-fluid -->
        </div>
      </nav>
      <div class="jumbotron">
        <div class="container">
          <h1>一月</h1>
          <p>
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </div>
      <div class="page-header">
        <h1 class="theme">主题</h1>
      </div>
      <div class="container">
        <div class="box">
          <div class="itemi1">
            <img src="https://img.dpm.org.cn/Uploads/Picture/2016/12/22/s585b38f00e48c.jpg">
          </div>
          <div class="itemi2">
            <div>
              <div class="text">
                <p></p>
                <p>原状陈列是故宫博物院历史悠久、极具特色，且深受广大观众喜爱的展览类型。原状宫殿中的陈设都是严格遵循历史档案记载去选择与布置，力求恢复历史原貌，让观众能够真切地感受到厚重的历史文化氛围。这些精美的文物藏品与历尽沧桑的古代建筑一起构成和谐统一的整体，蕴含着丰富的历史信息和文化内涵，向世人形象地展示宫廷文化。</p>
                <p></p>
              </div>
            </div>
          </div>
          <div class="item">
            <img src="https://img.dpm.org.cn/Uploads/Picture/2016/12/22/s585b38b930168.jpg">
          </div>
          <div class="item">
            <img src="https://img.dpm.org.cn/Uploads/Picture/2016/12/22/s585b3889f3e66.jpg">
          </div>
          <div class="itemfirst">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b3852595a2.jpg">
          </div>
          <div class="item">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b381e7251b.jpg">
          </div>
          <div class="item">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b37f03ce66.jpg">
          </div>
          <div class="item">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b37bf60105.jpg">
          </div>
          <div class="itemfirst">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b377bbd0a0.jpg">
          </div>
          <div class="item">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b370b35c25.jpg">
          </div>
          <div class="item">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b36db6eec1.jpg">
          </div>
          <div class="item">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2016/12/22/s585b363502ae9.jpg">
          </div>
        </div>
      </div>
      <div class="page-header">
        <h1 class="theme">博物館</h1>
      </div>
      <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
        <!-- Indicators -->
        <ol class="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" role="listbox">
          <div class="item active">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e2049cee77.jpg">
            <div class="carousel-caption"></div>
          </div>
          <div class="item">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e1fe0d4bac.jpg">
            <div class="carousel-caption"></div>
          </div>
          <div class="item">
            <img src="https://www.dpm.org.cn/Uploads/Picture/2017/01/05/s586e2015d4aa3.jpg">
            <div class="carousel-caption"></div>
          </div>
        </div>

        <!-- Controls -->
        <a
          class="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </body>
</div>
</template>

<script>
export default {}
$(function(){
      // 初始化轮播
      $(".start-slide").click(function(){
         $("#myCarousel").carousel('cycle');
      });
      // 停止轮播
      $(".pause-slide").click(function(){
         $("#myCarousel").carousel('pause');
      });
      // 循环轮播到上一个项目
      $(".prev-slide").click(function(){
         $("#myCarousel").carousel('prev');
      });
      // 循环轮播到下一个项目
      $(".next-slide").click(function(){
         $("#myCarousel").carousel('next');
      });
      // 循环轮播到某个特定的帧
      $(".slide-one").click(function(){
         $("#myCarousel").carousel(0);
      });
      $(".slide-two").click(function(){
         $("#myCarousel").carousel(1);
      });
      $(".slide-three").click(function(){
         $("#myCarousel").carousel(2);
      });
   });
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.screen {
  width: 100%;
  height: 100%;
}
.wrap {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
img {
  border: 0;
  outline: 0;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
}
.theme {
  text-align: center; //居中
  font-weight: bold; //加粗
}
.box {
  padding-bottom: 0;
  width: 1258px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  margin-top: 30px;
}
.itemi1 {
  width: 624px;
  height: 452px;
  margin-left: 0;
  position: relative;
  float: left;
  margin-bottom: 10px;
  overflow: hidden;
}
.itemi2 {
  background: url(https://img.dpm.org.cn/Public/static/themes/image/lyc/temporary5-bg2.jpg)
    repeat;
  width: 624px;
  position: relative;
  height: 221px;
  float: left;
  margin-bottom: 10px;
  margin-left: 10px;
  overflow: hidden;
}
.box .itemi2 .text {
  padding: 0 45px;
  padding-top: 45px;
}
.box .itemi2 .text p {
  text-indent: 2em;
  font-size: 14px;
  color: #fff;
  padding-bottom: 10px;
}
.itemfirst {
  position: relative;
  width: 307px;
  height: 221px;
  margin-bottom: 10px;
  float: left;
  overflow: hidden;
  margin-left: 0;
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
</style>
