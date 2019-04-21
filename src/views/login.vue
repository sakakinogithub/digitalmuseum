<template>
  <div>
    <div>
      <div
        class="modal fade"
        id="loginModalId"
        tabindex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body" style="height: 450px;">
              <button
                type="button"
                class="close col-xs-1"
                data-dismiss="modal"
                aria-hidden="true"
              >
                ×
              </button>
              <div class="input-group col-xs-10">
                <div class="logo-login">
                  <img src="../../public/picture/l.png" />
                </div>
                <div class="name-div">
                  <h6>数 字 博 物 馆 集 群</h6>
                  <h6>Digital Museum Clustor</h6>
                </div>
              </div>
              <hr />
              <div class="center-block col-xs-12">
                <span>用户登录</span>
              </div>
              <div class="input-group row-space col-xs-8 col-xs-offset-2">
                <span
                  class="input-group-addon glyphicon glyphicon-user "
                ></span>
                <input
                  type="text"
                  class="form-control"
                  id="accountNumber"
                  placeholder="用户名"
                />
              </div>
              <div class="input-group row-space col-xs-8 col-xs-offset-2">
                <span
                  class="input-group-addon glyphicon glyphicon-eye-close"
                ></span>
                <input
                  type="text"
                  class="form-control"
                  id="password"
                  placeholder="密码"
                />
              </div>
              <div class="col-xs-8 col-xs-offset-2 btn-space block-center">
                <button class="btn btn-success">立即登录</button>
              </div>
              <div
                class="col-xs-8 col-xs-offset-2 btn-space block-center text-color"
              >
                <a href="#">找回密码</a>
                |
                <a href="#">立即注册</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#loginModalId{
  margin-top: 5%;
}
.center-block {
  font-size: 0.4rem;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
}
.row-space {
  margin-top: 20px;
}
.block-center {
  text-align: center;
}
.text-color a {
  font-size: 0.3rem;
  color: black;
}
.text-color a:hover {
  color: #32cd32;
  text-decoration: none;
}
.logo-login {
  margin-top: 20px;
  margin-left: 10px;
  height: 40px;
  width: 40px;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-login img {
  height: 100%;
  width: 100%;
}
.name-div {
  margin-top: 25px;
  margin-left: 20px;
}
.name {
  font-size: 0.5rem;
  font-family: "隶书";
}
.btn-space {
  margin-top: 30px;
}
</style>
