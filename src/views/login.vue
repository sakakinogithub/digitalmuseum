<template>
  <div class="screen">
    <div class="wrap">
      <navbar></navbar>
      <div class="body">
        <div class="container">
          <div class="rows">
            <div class="col-md-9 col-md-offset-1 col-xs-10 col-xs-offset-1">
              <p style="letter-spacing: 3px;">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数字博物馆是运用虚拟现实技术、三维图形图像技术、计算机网络技术、立体显示系统、互动娱乐技术、特种视效技术，将现实存在的实体博物馆的三维立体的方式完整呈现于网络上的博物馆。具体来说，就是采用国际互联网与机构内部信息网信息构架，将传统博物馆的业务工作与计算机网络上的活动紧密结合起来，构筑博物馆大环境所需要的信息传播交换的桥梁，把枯燥的数据变成鲜活的模型，使实体博物馆的职能得以充分实现。从而引领博物馆进入公众可参与交互式的新时代，引发观众浓厚的兴趣，从而达到科普的目的。
              </p>
            </div>
          </div>
          <div class="rows" style="margin-top: 25px;">
            <div
              class="col-md-4 col-md-offset-1 col-xs-10 col-xs-offset-1 logo-img"
            >
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554801131230&di=6352f19aeb4f6030bd9b15c22735897d&imgtype=0&src=http%3A%2F%2Fpic93.nipic.com%2Ffile%2F20160331%2F6284491_192948943369_2.jpg"
                alt=""
              />
            </div>
            <div class="col-md-5 col-xs-10">
              <form class="form-horizontal">
                <div class="form-group input-space">
                  <label for="userID" class="col-sm-3 control-label"
                    >账号</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="text"
                      @input="changeCol"
                      class="form-control"
                      id="userID"
                      v-model="userID"
                      placeholder="账号"
                    />
                  </div>
                </div>
                <div class="form-group input-space">
                  <label for="passwd" class="col-sm-3 control-label"
                    >密码</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="text"
                      @input="changeCol"
                      class="form-control"
                      id="passwd"
                      v-model="passwd"
                      placeholder="密码"
                    />
                  </div>
                </div>
                <div class="form-group input-space">
                  <label for="verification" class="col-sm-3 control-label"
                    >验证码</label
                  >
                  <div class="col-sm-6">
                    <input
                      type="text"
                      @input="changeCol"
                      class="form-control"
                      id="verification"
                      placeholder="验证码"
                    />
                  </div>
                  <div
                    class="col-sm-3 col-xs-5 verification verification-space"
                  >
                    <a
                      id="code"
                      type="button"
                      class="btn btn-primary"
                      value="点我获取验证码"
                      @click="creatCode"
                      >{{ verification }}</a
                    >
                  </div>
                </div>
                <div class="form-group input-space">
                  <div class="col-sm-offset-3 col-sm-3">
                    <button
                      id="login"
                      @click="login"
                      type="submit"
                      class="btn btn-default"
                    >
                      登&nbsp;&nbsp;&nbsp;录
                    </button>
                  </div>
                  <div class="col-sm-3 col-xs-4 link-space">
                    <a href="#/regist">尚未注册</a>
                  </div>
                  <div class="col-sm-3 col-xs-4 link-space">
                    <a href="" @click.prevent="">忘记密码</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer col-sm-12">
        <pcfooter></pcfooter>
      </footer>
    </div>
  </div>
</template>

<script>
import navbar from "../components/common/navbar";
import pcfooter from "../components/common/pcfooter";
import qs from "qs";
export default {
  components: {
    navbar,
    pcfooter
  },
  data() {
    return {
      userID: "",
      verification: "点我获取验证码",
      passwd: ""
    };
  },
  methods: {
    /*实现有任一输入框为空的话，按钮就不可点击，disabled值为true；
    如果输入框全都有输入，则按钮可点击，disabled值为false
    为方便测试post请求，暂时关闭*/
    changeCol() {
      // if (
      //   document.getElementById("userID").value &&
      //   document.getElementById("passwd").value &&
      //   document.getElementById("verification").value
      // ) {
      //   document.getElementById("login").classList.add("btn-primary");
      //   document.getElementById("login").disabled = false;
      // } else {
      //   if (
      //     document.getElementById("login").classList.contains("btn-primary")
      //   ) {
      //     document.getElementById("login").classList.remove("btn-primary");
      //   }
      //   document.getElementById("login").disabled = true;
      // }
    },
    creatCode() {
      this.verification = "";
      var codeLength = 4; //验证码的长度
      var checkCode = document.getElementById("code");
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ); //随机数
      for (var i = 0; i < codeLength; i++) {
        //循环操作
        var index = Math.floor(Math.random() * 36); //取得随机数的索引（0~35）
        this.verification += random[index]; //根据索引取得随机数加到code上
      }
      checkCode.value = this.verification; //把code值赋给验证码
    },
    login() {
      this.axios
        .post("/login", {
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
  line-height: 50px;
  color: white;
  padding-top: 5px;
}
.body {
  padding: 30px 10px;
  -webkit-user-select: none;
}
.input-space {
  margin-top: 25px;
}
.logo-img {
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-img img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  padding: 5px;
  background-color: #fff;
}
.verification {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.verification-space {
  margin-top: 0;
}
@media screen and (max-width: 768px) {
  .verification-space {
    margin-top: 15px;
  }
}
.link-space {
  line-height: 30px;
  font-style: italic;
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