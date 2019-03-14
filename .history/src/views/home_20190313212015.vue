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
                <a href="#">首页
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
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
      </div>
    </div>
    <div class="page-header">
      <h1 class="theme">主题</h1>
      <div class="container">
      <div class="row">
        <div class="col-1">
          <a href="#" class="thumbnail">
            <img src="https://img.dpm.org.cn/Uploads/Picture/2016/12/22/s585b38f00e48c.jpg">
          </a>
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
.theme{
  text-align:center;//居中
  font-weight:bold;//加粗
  margin:auto;
}
</style>
