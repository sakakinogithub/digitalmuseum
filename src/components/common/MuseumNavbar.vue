<template>
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
          <a class="navbar-brand" href="#/home">logo</a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse nav-center" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav nav-block">
            <li>
              <a href="#/home">首页</a>
            </li>
            <li>
              <a href="#">概述</a>
            </li>
            <li>
              <a href="#/detail">展览</a>
            </li>
            <li>
              <a href="#/choose">藏品</a>
            </li>
            <li>
              <a href="#/museum/activityList">活动</a>
            </li>
            <li>
              <a href="#">研究</a>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li>
              <div class="user">
                <a href="#/login">
                  <span
                    class="glyphicon glyphicon-user"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
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
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
.navbar {
  background-color: rgb(20, 50, 80);
  height: 60px;
}
@media screen and (max-width: 768px) {
  .navbar {
    background-color: rgb(20, 50, 80);
    height: auto;
  }
}
.nav-center{
  text-align:center;
}
.nav-block{
  display:inline-block;
  float: none;
}
.nav-block li{
  margin: 0px;
  padding: 0px;
  display: block;
}
.nav-block li:hover{
  background-color: rgb(30,60,90);
}
.nav-block li a{
  margin: 0;
  margin: 0 7px;
}
.user{
  font-size: 0.55rem;
  line-height: 50px;
  color: white;
  padding-top: 5px;
}
</style>
