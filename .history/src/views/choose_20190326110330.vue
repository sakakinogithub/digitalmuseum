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
                  <a href="#">login</a>
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
      <ol class="breadcrumb">
        <li>
          <a href="#">首页</a>
        </li>
        <li class="active">导航</li>
      </ol>
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
            
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12"></div>
        </div>
        <div class="row">
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12"></div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12"></div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12"></div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12"></div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12"></div>
          <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12"></div>
        </div>
      </div>
      <footer>
        <div class="footerimg">
          <ol class="breadcrumb">
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

<style lang="scss" rel="stylesheet/scss" scoped>
.theme {
  text-align: center; //居中
  font-weight: bold; //加粗
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
.breadcrumb {
  background-color: black;
}
</style>
