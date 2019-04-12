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
          <a class="navbar-brand" href="#/home">
          <img class="logo" src="../../../public/picture/l.png">
          <div class="logotext">
          <h6>数 字 博 物 馆 集 群</h6>
          <h6>Digital Museum Clustor</h6>
          </div>
          </a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse nav-center" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav nav-block">
            <li>
              <a href="#/home">首页</a>
            </li>
            <li>
              <a href="#/choose">博物馆</a>
            </li>
            <li>
              <a href="#">主题</a>
            </li>
            <li>
              <a href="#/reliclist">文物</a>
            </li>
            <li>
              <a href="#">关于</a>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li>
              <div class="user">
                <span class="glyphicon glyphicon-user" aria-hidden="true"></span>
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
.navbar{
  background-color: rgb(20, 50, 80);
  margin-bottom: 0;
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
  font-size: 0.5rem;
  line-height: 50px;
  color: white;
  padding-top: 5px;
}
.logo{
  width: 1rem;
  height: 1rem;
}
.navbar-brand{
  padding: 0;
  display:flex;
}
h6 {
  color: #FF0052; /* Fallback Color */
    text-transform: uppercase;
    font-weight: bold;
    font-family: helvetica;
    background: -webkit-gradient(linear,left top,left bottom,from(#FF0052),to(#802F7B));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
