<template>
  <div class="screen">
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
                <li>
                  <a href="#">导览</a>
                </li>
                <li>
                  <a href="#">展览</a>
                </li>
                <li>
                  <a href="#">教育</a>
                </li>
                <li>
                  <a href="#">探索</a>
                </li>
                <li>
                  <a href="#">学术</a>
                </li>
                <li>
                  <a href="#">文创</a>
                </li>
                <li>
                  <a href="#">关于</a>
                </li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li>
                  <a href="#">
                    <span class="glyphicon glyphicon-user"></span>
                  </a>
                </li>
                <form class="navbar-form navbar-left">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                  </div>
                </form>
              </ul>
            </div>
            <!-- /.navbar-collapse -->
          </div>
          <!-- /.container-fluid -->
        </div>
      </nav>
      <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
      </mt-swipe>
      <div class="page-header">
        <h1 class="theme">场馆</h1>
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
      </div>
      <div class="page-header">
        <h1 class="theme">专题</h1>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <img
              src="https://img.dpm.org.cn/Uploads/Picture/2018/10/08/s5bbaf68c3f440.jpg"
              class="img-responsive"
            >
          </div>
          <div class="col-md-6 col-xs-12 jumbotron">
            <div class="row page">
              <div class="col-2 text">
                <span class="glyphicon glyphicon-align-left"></span>
                <h6>龙泰宸宇——故宫养心殿文物特展</h6>
                <span class="label label-danger">展出</span>
                <div class="name">辽宁省博物馆</div>
                <div class="time">2019/01/18 - 2019/04/18</div>
              </div>
              <hr class="simple" color="#6f5499">
              <div class="col-2 text">
                <span class="glyphicon glyphicon-align-left"></span>
                <h6>匠心独运——钟表珍宝展</h6>
                <span class="label label-danger">展出</span>
                <div class="name">香港科学馆</div>
                <div class="time">2018/12/07 - 2019/04/10</div>
              </div>
              <hr class="simple" color="#6f5499">
              <div class="col-2 text">
                <span class="glyphicon glyphicon-align-left"></span>
                <h6>东风西韵——紫禁城与海上丝绸之路展</h6>
                <span class="label label-danger">展出</span>
                <div class="name">葡萄牙阿茹达宫</div>
                <div class="time">2018/12/04 - 2019/03/31</div>
              </div>
              <hr class="simple" color="#6f5499">
              <div class="col-2 text">
                <span class="glyphicon glyphicon-align-left"></span>
                <h6>紫禁风华——2018太原·故宫文物展</h6>
                <span class="label label-danger">展出</span>
                <div class="name">山西太原博物馆</div>
                <div class="time"></div>
              </div>
              <hr class="simple" color="#6f5499">
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
          </div>
        </div>
      </div>
      <footer>
        <div class="footerimg">
          <ol class="breadcrumb footercontent">
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">公司介绍</a>
            </li>
            <li>
              <a href="#">下载</a>
            </li>
            <li>
              <a href="#">联系我们</a>
            </li>
          </ol>
        </div>
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
hr {
  background-color: #fff;
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
  text-align: center;
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
  border:none;
}
.mint-swipe {
  height: 10rem;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: blue;
    }
    &:nth-child(3) {
      background-color: cyan;
    }
  }
}
</style>
