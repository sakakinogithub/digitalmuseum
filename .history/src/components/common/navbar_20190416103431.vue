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
              <ul class="dropdown-nav sub-dropdown">
                <li><a href="#">Home Layout 1</a></li>
                <li><a href="#">Home Layout 2</a></li>
                <li><a href="#">Home Layout 3</a></li>
                <li><a href="#">Home Layout 4</a></li>
            </ul>
            </li>
            <li class="dropdown-show">
              <a href="#" class="arrow-toggle">概述</a>
              <ul class="mega-menu-wrap dropdown-nav">
                <li class="mega-menu-item"><a href="#" class="mega-item-title">Shop PageLayout</a>
                    <ul>
                        <li><a href="#">Shop 3 Column</a></li>
                        <li><a href="#">Shop 4 Column</a></li>
                        <li><a href="#">Shop Left Sidebar</a></li>
                        <li><a href="#">Shop Lsiting View</a></li>
                        <li><a href="#">Shop Right Sidebar</a></li>
                        <li><a href="#">Shop Lsit left Sidebar</a></li>
                        <li><a href="#">Shop Lsit Right Sidebar</a></li>
                    </ul>
                </li>

                <li class="mega-menu-item"><a href="#" class="mega-item-title">Single
                    Products Style</a>
                    <ul>
                        <li><a href="#">Single Product Carousel</a></li>
                        <li><a href="#">Single Product Sticky Left</a></li>
                        <li><a href="#">Single Product Sticky Right</a></li>
                        <li><a href="#">Single Product Gallery Left</a></li>
                        <li><a href="#">Single Product Gallery Right</a></li>
                        <li><a href="#">Single Product Tab Style Top</a></li>
                        <li><a href="#">Single Product Tab Style Left</a></li>
                        <li><a href="#">Single Product Tab Style Right</a></li>
                    </ul>
                </li>

                <li class="mega-menu-item"><a href="#" class="mega-item-title">Single
                    Products</a>
                    <ul>
                        <li><a href="#">Single Product</a></li>
                        <li><a href="#">Single Product Sale</a></li>
                        <li><a href="#">Single Product Group</a></li>
                        <li><a href="#">Single Product Normal</a></li>
                        <li><a href="#">Single Product Affiliate </a></li>
                    </ul>
                </li>
            </ul>
            </li>
            <li>
              <a href="#/choose">展览</a>
            </li>
            <li>
              <a href="#/reliclist">藏品</a>
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
.navbar {
  background-color: rgba(25, 25, 25,.6);
  height: 60px;
  padding-bottom: 0;
  margin-bottom: 0;
}
@media screen and (max-width: 768px) {
  .navbar {
    background-color: rgba(25, 25, 25,.6);
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
</style>
