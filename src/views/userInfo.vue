<template>
  <div class="screen">
    <div class="wrap">
      <navbar></navbar>
      <div class="body" id="body">
        <div class="container">
          <div class="row">
            <div
              class="user col-md-2 col-sm-4 col-xs-6 col-xs-offset-3 col-sm-offset-4 col-md-offset-2"
            >
              <!-- 用户头像 -->
              <div class="user-img">
                <img
                  src="http://img0.imgtn.bdimg.com/it/u=3867345743,2571279605&fm=26&gp=0.jpg"
                />
              </div>
              <div class="favorate">
                <a href="" @click.prevent="">收藏夹</a>
              </div>
              <!-- 用户状态 -->
              <div class="status">
                <span>状态：{{ status | statusFormat }}</span>
                <!-- <span v-if="status">正常</span>
								<span v-if="!status">冻结</span> -->
              </div>
            </div>
            <!-- 用户详细信息 -->
            <div class="col-md-5 col-xs-12 col-sm-12 info1">
              <form class="form-horizontal">
                <div class="form-group">
                  <label for="userName" class="col-sm-3 control-label"
                    >用户名</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="text"
                      v-model="userName"
                      class="form-control"
                      id="userName"
                      placeholder="用户名"
                      :readonly="click"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="realName" class="col-sm-3 control-label"
                    >真实姓名</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="text"
                      v-model="realName"
                      class="form-control"
                      id="realName"
                      placeholder="真实姓名"
                      :readonly="click"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="sex" class="col-sm-3 control-label">性别</label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      v-model="sex"
                      class="form-control"
                      id="sex"
                      placeholder="性别"
                      :readonly="click"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="age" class="col-sm-3 control-label">年龄</label>
                  <div class="col-sm-9">
                    <input
                      type="number"
                      v-model="age"
                      class="form-control"
                      id="age"
                      placeholder="年龄"
                      :readonly="click"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="occupation" class="col-sm-3 control-label"
                    >职业</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="text"
                      v-model="occupation"
                      class="form-control"
                      id="occupation"
                      placeholder="职业"
                      :readonly="click"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="phoneNumber" class="col-sm-3 control-label"
                    >手机</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="text"
                      v-model="phoneNumber"
                      class="form-control"
                      id="phoneNumber"
                      placeholder="手机"
                      :readonly="click"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="email" class="col-sm-3 control-label">邮箱</label>
                  <div class="col-sm-9">
                    <input
                      type="email"
                      v-model="email"
                      class="form-control"
                      id="email"
                      placeholder="邮箱"
                      :readonly="click"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="idNumber" class="col-sm-3 control-label"
                    >身份证号</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="text"
                      v-model="idNumber"
                      class="form-control"
                      id="idNumber"
                      placeholder="身份证号"
                      :readonly="click"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label for="address" class="col-sm-3 control-label"
                    >地址</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="text"
                      v-model="address"
                      class="form-control"
                      id="address"
                      placeholder="地址"
                      :readonly="click"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-sm-offset-3 col-sm-6">
                    <button
                      id="confirmBtn"
                      type="submit"
                      class="btn btn-success"
                      @click="success"
                      v-show="!click"
                    >
                      完 成
                    </button>
                    <button
                      id="editBtn"
                      type="submit"
                      class="btn-space btn btn-default"
                      @click="edit"
                    >
                      完善信息
                    </button>
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
import navbar from "../components/common/navbar.vue";
import pcfooter from "../components/common/MuseumNavbar.vue";
export default {
  components: {
    navbar,
    pcfooter
  },
  data() {
    return {
      userName: "张三",
      realName: "张三",
      sex: "男",
      age: "20",
      occupation: "全栈工程师",
      phoneNumber: "12345678910",
      email: "123@163.com",
      idNumber: "62222222222222",
      address: "陕西西安",
      click: true,
      status: false
    };
  },
  methods: {
    //点击完善信息按钮，修改信息
    edit() {
      this.click = false;
    },
    //点击完成按钮响应事件
    success() {
      this.click = true;
    }
  },
  filters: {
    statusFormat: function(input) {
      if (input) {
        return "正常";
      }
      return "冻结";
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
  padding: 30px 15px;
}
.user {
  height: 250px;
}
.favorate {
  height: 50px;
}
.status span {
  font-weight: bold;
}
.user a {
  color: #cc66ff;
  line-height: 50px;
}
.user-img {
  height: 145px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-img img {
  height: 100%;
  width: 100%;
  border: 1px solid #ddd;
  padding: 5px;
  background-color: #fff;
}
.info1 li {
  margin-bottom: 15px;
}
.btn-space {
  margin-left: 15%;
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
