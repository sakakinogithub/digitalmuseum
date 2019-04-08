<template>
    <div class="container-fluid pcfooter">
      <div class="row footerimg">
        <div class="col-md-8 col-xs-12 footerLeft">
          <ol class="breadcrumb">
            <li>
              <a href="#">使用帮助</a>
            </li>
            <li>
              <a href="#">相关链接</a>
            </li>
            <li>
              <a href="#">版权声明</a>
            </li>
            <li>
              <a href="#">常见问题</a>
            </li>
            <li>
              <a href="#">联系我们</a>
            </li>
          </ol>
        </div>
        <div class="col-md-4 col-xs-12 footerRight">
          <div class="imgcontainer">
            <img
              src="http://bwg.nwu.edu.cn/uploadfile/2017/0921/20170921102120331.jpg"
              class="img-responsive"
            >
          </div>
          <div class="hint">关注官方微信在线预约</div>
        </div>
      </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss" scoped>
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
.footerLeft {
  border-right: 1px solid #8791a5;
  .breadcrumb {
    padding: 0;
    margin: 0;
  }
}
.breadcrumb {
  background-color: black;
}
.footerRight {
  padding-left: 1.37rem;
  color: #b5c0d4;
  font-size: 0.2rem;
}
.imgcontainer {
  margin-bottom: 0.396rem;
  margin: 0px;
  padding: 0px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
}
</style>
