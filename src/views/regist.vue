<template>
  <div class="screen">
    <div class="wrap">
      <navbar></navbar>

      <div class="body">
        <div class="container">
          <div class="rows">
            <div class="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1">
              <h4 class="baseInfo">基本信息</h4>
              <div class="content">
                <form class="form-horizontal">
                  <div class="form-group">
                    <label for="userID" class="col-sm-3 control-label"
                      >用户名</label
                    >
                    <div class="col-sm-6">
                      <input
                        type="text"
                        @input="changeCol"
                        v-model="userID"
                        class="form-control"
                        id="userID"
                        placeholder="用户名"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="psword" class="col-sm-3 control-label"
                      >密码</label
                    >
                    <div class="col-sm-6">
                      <input
                        type="text"
                        @input="changeCol"
                        v-model="psword"
                        class="form-control"
                        id="psword"
                        placeholder="密码"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="conPs" class="col-sm-3 control-label"
                      >确认密码</label
                    >
                    <div class="col-sm-6">
                      <input
                        type="text"
                        @input="changeCol"
                        v-model="conPs"
                        class="form-control"
                        id="conPs"
                        placeholder="确认密码"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="pNumber" class="col-sm-3 control-label"
                      >手机号码</label
                    >
                    <div class="col-sm-6">
                      <input
                        type="text"
                        @input="changeCol"
                        v-model="pNumber"
                        class="form-control"
                        id="pNumber"
                        placeholder="手机号码"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="verification" class="col-sm-3 control-label"
                      >验证码</label
                    >
                    <div class="col-sm-4">
                      <input
                        type="text"
                        @input="changeCol"
                        v-model="verification"
                        class="form-control"
                        id="verification"
                        placeholder="6位数字验证码"
                      />
                    </div>
                    <div class="col-sm-2 verification-space">
                      <button class="btn btn-default">获取验证码</button>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-sm-offset-3 col-sm-2">
                      <button
                        id="regist"
                        type="button"
                        @click="regist"
                        class="btn btn-default"
                      >
                        注&nbsp;&nbsp;&nbsp;册
                      </button>
                    </div>
                    <div class="col-sm-4 hadAccount">
                      <a href="#/login">已有账号？直接登录</a>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="col-sm-6 col-sm-offset-1 control-label">
                      <input @click="changeCol" id="check" type="checkbox" />
                      同意
                      <a href="" @click.prevent="">《数字博物馆注册协议》</a>
                    </label>
                    <div class="col-sm-6"></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <pcfooter></pcfooter>
      </footer>
    </div>
  </div>
</template>

<script>
import navbar from "../components/common/navbar";
import pcfooter from "../components/common/pcfooter";
export default {
  components: {
    navbar,
    pcfooter
  },
  data() {
    return {
      userID: "",
      psword: "",
      conPs: "",
      pNumber: "",
      verification: ""
    };
  },

  methods: {
    changeCol() {
      // if (
      //   this.userID &&
      //   this.psword &&
      //   this.conPs &&
      //   this.pNumber &&
      //   this.verification &&
      //   document.getElementById("check").checked
      // ) {
      //   document.getElementById("regist").classList.add("btn-primary");
      //   document.getElementById("regist").disabled = false;
      // } else {
      //   if (
      //     document.getElementById("regist").classList.contains("btn-primary")
      //   ) {
      //     document.getElementById("regist").classList.remove("btn-primary");
      //   }
      //   document.getElementById("regist").disabled = true;
      // }
    },
    regist() {
      this.axios
        .post("/regist", {
          username: this.userID,
          password: this.passwd
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>


<style lang="scss" rel="stylesheet/scss" scoped>
.screen {
  width: 100%;
  height: 100%;
}
.wrap {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.navbar {
  background-color: rgb(20, 50, 80);
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
.nav-block li:hover {
  background-color: rgb(30, 60, 90);
}
.nav-block li a {
  margin: 0;
  margin: 0 7px;
}
.user-logo {
  font-size: 0.4rem;
  line-height: 45px;
  color: white;
  padding-top: 5px;
}
.body {
  padding: 30px 10px;
  -webkit-user-select: none;
}
.baseInfo {
  text-align: center;
}
.content {
  margin-top: 25px;
}
.hadAccount a {
  font-style: italic;
  line-height: 40px;
  text-align: center;
}
.verification-space {
  margin-top: 0;
}
@media screen and (max-width: 768px) {
  .verification-space {
    margin-top: 25px;
  }
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
.footerLeft {
  height: 1.7rem;
  border-right: 1px solid #8791a5;
  padding-right: 1.51rem;
  line-height: 1.7rem;
}
.breadcrumb {
  background-color: black;
}
.footerRight {
  height: 1.7rem;
  padding-left: 1.37rem;
  color: #b5c0d4;
  font-size: 0.257rem;
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