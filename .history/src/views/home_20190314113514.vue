<template>
<div>
  <head>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
      crossorigin="anonymous"
    >
  </head>
  <body>
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
      <div class="container-fluid">
        <div class="row">
          <div class="col-6">
            <img src="https://img.dpm.org.cn/Uploads/Picture/2016/12/22/s585b38f00e48c.jpg">
          </div>
          <div calss="col-6">
            <div class="row">
              <div class="col-6">
            <div class="jumbotron">
              <p>原状陈列是故宫博物院历史悠久、极具特色，且深受广大观众喜爱的展览类型。原状宫殿中的陈设都是严格遵循历史档案记载去选择与布置，力求恢复历史原貌，让观众能够真切地感受到厚重的历史文化氛围。这些精美的文物藏品与历尽沧桑的古代建筑一起构成和谐统一的整体，蕴含着丰富的历史信息和文化内涵，向世人形象地展示宫廷文化。</p>
            </div>
            <div class="row">
              <div class="col-6"><img src="https://img.dpm.org.cn/Uploads/Picture/2016/12/22/s585b38b930168.jpg"></div>
              <div class="col-6"><img src="https://img.dpm.org.cn/Uploads/Picture/2016/12/22/s585b3889f3e66.jpg"></div>
            </div>
            </div>
            </div>

          </div>
        </div>
      </div>

  </body>
</div>
</template>

<script>
export default {}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.theme {
  text-align: center; //居中
  font-weight: bold; //加粗
}
</style>
