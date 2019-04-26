<template>
  <nav class="navbar navbar-inverse" v-show="titleVisible">
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
        <div
          class="collapse navbar-collapse nav-center"
          id="bs-example-navbar-collapse-1"
        >
          <ul class="nav navbar-nav nav-block">
            <li class="dropdown-show">
              <a href="#/home" class="arrow-toggle">首页</a>
            </li>
            <li class="dropdown-show">
              <a href="#" class="arrow-toggle">概述</a>
              <ul class="dropdown-nav sub-dropdown">
                <li><a href="#/museum">博物馆简介</a></li>
                <li><a href="#">馆长致辞</a></li>
                <li><a href="#">组织架构</a></li>
                <li><a href="#">场馆面貌</a></li>
            </ul>
            </li>
            <li class="dropdown-show">
              <a href="#/choose" class="arrow-toggle">展览</a>
              <ul class="dropdown-nav sub-dropdown">
                <li><a href="#">360°展示</a></li>
                <li><a href="#">常设展</a></li>
                <li><a href="#">专题展</a></li>
                <li><a href="#">临时展</a></li>
            </ul>
            </li>
            <li class="dropdown-show">
              <a href="#/reliclist" class="arrow-toggle">藏品</a>
              <ul class="dropdown-nav">
                <li><a href="#">校史馆</a></li>
                <li><a href="#">地球馆</a></li>
                <li><a href="#">生物馆</a></li>
                <li><a href="#">历史馆</a></li>
            </ul>
            </li>
            <li class="dropdown-show">
              <a href="#/museum/activityList" class="arrow-toggle">活动</a>
              <ul class="dropdown-nav">
                <li><a href="#">宣教活动</a></li>
                <li><a href="#">Blog Right Sidebar</a></li>
                <li><a href="#">Blog Grid Layout</a></li>
                <li><a href="#">Single Blog</a></li>
                <li><a href="#">Single Blog Right Sidebar</a></li>
            </ul>
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
                <input type="text" class="form-control" placeholder="Search" />
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

<script>
export default {
  data () {
    return {
      titleVisible: true,
      i: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = document.querySelector('nav').offsetTop
      scrollTop > offsetTop ? this.titleVisible = true : this.searchBarFixed = false
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.dropdown-nav {
  background-color: #262626;
  pointer-events: none;
  position: absolute;
  visibility: hidden;
  top: 100%;
  left: 0;
  width: 200px;
  z-index: 999;
  opacity: 0;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
  filter: alpha(opacity=0);
  -webkit-transform: translateY(15px);
  -moz-transform: translateY(15px);
  -ms-transform: translateY(15px);
  transform: translateY(15px);
  -webkit-transition: all 0.4s ease-out;
  -moz-transition: all 0.4s ease-out;
  -o-transition: all 0.4s ease-out;
  transition: all 0.4s ease-out; }
  .dropdown-nav li {
    margin-left: 0 !important;
    width: 100%; }
    .dropdown-nav li a {
      padding: 6px 10px;
      display: block; }

.dropdown-show {
  position: relative; }
  .dropdown-show:hover .dropdown-nav {
    pointer-events: visible;
    visibility: visible;
    opacity: 1;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0); }

.arrow-toggle {
  position: relative; }

.navbar {
  background-color: rgba(25, 25, 25,.6);
  font-family: 微软雅黑,'Heiti SC',黑体,Arial;
  -webkit-font-smoothing:antialiased !important;
  top:0px ;
  left: 0px;
  width: 100%;
  position : absolute;
  z-index : 999;
  height: 60px;
  padding-bottom: 0;
  margin-bottom: 0;
  border-radius: 0;
  border: none;
}
@media screen and (max-width: 768px) {
  .navbar {
    background-color: rgba(25, 25, 25,.6);
    font-family: 微软雅黑,'Heiti SC',黑体,Arial;
    height: auto;
  }
}
.nav-center {
  text-align: center;
}
.nav-block {
  display: inline-block;
  float: none;
}
.nav-block li {
  margin: 0px;
  padding: 0px;
  display: block;
}
.nav-block li:hover{
  background-color: rgba(25, 25, 25,.6);
}
.nav-block li a {
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
.logotext
{
  margin-left: 17px;
  margin-top: 5px;
}
.navbar-brand{
  padding: 0;
  display:flex;
  justify-content:space-around;
}
h6 {
  color: #fff; /* Fallback Color */
    text-transform: uppercase;
    font-weight: bold;
    font-family: helvetica;
}
a{color:#fff};
</style>
