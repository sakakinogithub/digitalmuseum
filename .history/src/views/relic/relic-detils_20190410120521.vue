<template>
  <div class="screen body">
    <div class="wrap">
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
            <div class="collapse navbar-collapse nav-center" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav nav-block">
                <li>
                  <a href="#">首页</a>
                </li>
                <li>
                  <a href="#">概述</a>
                </li>
                <li>
                  <a href="#">展览</a>
                </li>
                <li>
                  <a href="#">藏品</a>
                </li>
                <li>
                  <a href="#">活动</a>
                </li>
                <li>
                  <a href="#">研究</a>
                </li>
              </ul>

              <ul class="nav navbar-nav navbar-right">
                <li>
                  <div class="user-logo">
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
      <div class="body">
        <div>
          <div class="relic-name">
            <h3>富春山居图</h3>
          </div>
          <div class="container">
            <div class="row">
              <div class="bigPicture col-xs-12 col-sm-8">
                <img
                  id="bigPic"
                  src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2406340416,1745071076&fm=26&gp=0.jpg"
                  alt="获取图片失败"
                >
              </div>
              <div class="box col-xs-12 col-sm-4">
                <ul>
                  <div>
                    <li>
                      <img
                        id="pic1"
                        @mouseenter="changeImg1"
                        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2406340416,1745071076&fm=26&gp=0.jpg"
                        alt="获取图片失败"
                      >
                    </li>
                  </div>
                  <div>
                    <li>
                      <img
                        id="pic2"
                        @mouseenter="changeImg2"
                        src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=216949780,3762972531&fm=26&gp=0.jpg"
                        alt="获取图片失败"
                      >
                    </li>
                  </div>
                  <div>
                    <li>
                      <img
                        id="pic3"
                        @mouseenter="changeImg3"
                        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553753171355&di=519ea8f30c320c93a6a763c7f3e29a37&imgtype=0&src=http%3A%2F%2Fwww.woaihuahua.com%2Fuploads%2Fallimg%2F161202%2F345-161202121Q4Z5.jpg"
                        alt="获取图片失败"
                      >
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="sTitle col-sm-12">
              <h4>富春山居图</h4>
              <br>
              <div>
                <p>
                  作者：
                  <a href="#">黄公望</a>
                  <br>
                  <br>朝代：元朝
                  <br>
                  <br>藏馆：浙江省博物馆
                  <br>
                  <br>
                  <button
                    class="btn btn-sm btn-success"
                    data-toggle="modal"
                    data-target="#detils"
                  >详细信息</button>
                </p>

                <div
                  class="modal fade"
                  id="detils"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myModalLabel"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">详细信息</h4>
                      </div>
                      <div class="modal-body line-height">
                        <p>
                          &nbsp;&nbsp;&nbsp;&nbsp;富春山居图》是元代画家黄公望创作的纸本水墨画，中国十大传世名画之一。画家黄公望为师弟郑樗（无用师）所绘，1350年绘制完成，后几经易手，并因“焚画殉葬”而身首两段，前半卷：剩山图，现收藏于浙江省博物馆：后半卷：无用师卷，现藏台北故宫博物院。
                          <br>&nbsp;&nbsp;&nbsp;&nbsp;富春山居图，以浙江富春江为背景，画面用墨淡雅，山和水的布置疏密得当，墨色浓淡干湿并用，极富于变化。富春山居图所画内容约80%在桐庐境内富春江的景色，20%为富阳的景色。
                          富春山居图被誉为“画中之兰亭”，属国宝级文物。
                          <br>&nbsp;&nbsp;&nbsp;&nbsp;2011年6月，前后两段在台北故宫首度合璧展出。"
                        </p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">关闭</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="audio col-sm-12">
                <div>
                  <h4>音频介绍</h4>
                </div>
                <div>
                  <audio controls loop>
                    <source
                      src="http://aod.tx.xmcdn.com/group56/M08/2E/F3/wKgLdlycmhiTPeYKACnIU1Zv1-k323.m4a"
                      type="audio/ogg"
                    >Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
      <div class="md-subhead">
        <span>视频介绍</span>
      </div>
      <div class="item">
        <div class="player">
          <video-player  class="vjs-custom-skin"
                         ref="videoPlayer"
                         :options="playerOptions"
                         :playsinline="true"
                         @play="onPlayerPlay($event)"
                         @pause="onPlayerPause($event)"
                         @ended="onPlayerEnded($event)"
                         @loadeddata="onPlayerLoadeddata($event)"
                         @waiting="onPlayerWaiting($event)"
                         @playing="onPlayerPlaying($event)"
                         @timeupdate="onPlayerTimeupdate($event)"
                         @canplay="onPlayerCanplay($event)"
                         @canplaythrough="onPlayerCanplaythrough($event)"
                         @ready="playerReadied"
                         @statechanged="playerStateChanged($event)">
          </video-player>
        </div>
      </div>
            </div>
          </div>
          <!-- Modal -->
          <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="myModalLabel">分享</h4>
                </div>
                <div class="modal-body">
                  <div class="rows share">
                    <div class="col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-0">
                      <div class="share-img">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554713363747&di=9ca1c60f7a9594023a17194bac464e47&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F28%2F20170128085020_jfRhX.jpeg" alt="">
                      </div>
                      <div>
                        <p>微信扫一扫分享</p>
                      </div>
                    </div>
                    <div class="col-xs-6 col-xs-offset-3 col-md-4 col-md-offset-2">
                      <div class="share-img">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554713363747&di=9ca1c60f7a9594023a17194bac464e47&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201701%2F28%2F20170128085020_jfRhX.jpeg" alt="">
                      </div>
                      <div>
                        <p>QQ扫一扫分享</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="button">
              <a type="button" class="btn btn-success button" href="/#/3d" target="_blank">3D模型</a>

              <div class="list">
                <a id="like" data-placement="top" data-toggle="tooltip" title="喜欢">
                  <span class="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                </a>
                <a id="collect" data-placement="top" data-toggle="tooltip" title="收藏">
                  <span class="glyphicon glyphicon-star-empty" aria-hidden="true"></span>
                </a>
                <a id ="share" type="button" data-placement="top" data-toggle="modal" data-target="#myModal" title="分享">
                  <span class="glyphicon glyphicon-share" aria-hidden="true"></span>
                </a>

              </div>
            </div>
          </div>
          <hr>
          <div class="container">
            <div class="bottom row">
              <div class="bottom-div col-xs-1">
                <div class="user-img">
                  <img
                    class="img-circle img-responsive"
                    src="http://pic1.win4000.com/pic/4/22/fc5d1297297.jpg"
                  >
                </div>
              </div>
              <div id="comment" class="comment col-xs-11">
                <input
                  id="inputComment"
                  type="textarea"
                  rows="3"
                  class="form-control"
                  placeholder="你想说点什么吗？"
                  @click="visible()"
                >
              </div>
            </div>
            <div class="row">
              <div class="col-xs-1"></div>
              <div class="col-xs-11">
                <div class="dashed"></div>
              </div>
            </div>
            <div class="bottom row">
              <div class="bottom-div col-xs-1 col-pull-1">
                <div class="user-img">
                  <img
                    class="img-circle img-responsive"
                    src="http://pic1.win4000.com/pic/4/22/fc5d1297297.jpg"
                  >
                </div>
              </div>
              <div class="comment col-xs-11">
                <a href="#/user" target="_blank">user1:</a>
                <span>国之重器</span>
                <div class="thumb-up">
                  <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> 2
                </div>
              </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div>
                <h4>相关文物</h4>
              </div>
              <div class="col-sm-4">
                <div class="related-relics">
                  <img
                    src="https://www.dpm.org.cn/Uploads/Picture/2018/11/29/s5bff5377f2cca.jpg"
                    alt="图片获取失败"
                  >
                </div>
                <div class="related-relics-name">
                  <p>沈周仿黄公望富春山居图卷</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="related-relics">
                  <img
                    src="https://www.dpm.org.cn/Uploads/Picture/2018/11/29/s5bff5377f2cca.jpg"
                    alt="图片获取失败"
                  >
                </div>
                <div class="related-relics-name">
                  <p>沈周仿黄公望富春山居图卷</p>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="related-relics">
                  <img
                    src="https://www.dpm.org.cn/Uploads/Picture/2018/11/29/s5bff5377f2cca.jpg"
                    alt="图片获取失败"
                  >
                </div>
                <div class="related-relics-name">
                  <p>沈周仿黄公望富春山居图卷</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer class="footer col-sm-12">
        <div class="pcfooter">
          <div class="footerimg">
            <div class="footerLeft">
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
            <div class="footerRight">
              <div class="imgcontainer">
                <img src="http://bwg.nwu.edu.cn/uploadfile/2017/0921/20170921102120331.jpg">
              </div>
              <div class="hint">关注官方微信在线预约</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script type = "text/Javascript">
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'


$(function() {
  $("[data-toggle='popover']").popover()
  $(function() {
    $(".popover-show").popover("show")
  })
})
export default {
  data() {
      return {
        // videojs options
        playerOptions: {
          height: '360',
          width: '330',
          autoplay: true,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            src: "http://vdse.bdstatic.com//913a762df1636e6f31ebc29c58ee47a7?authorization=bce-auth-v1/fb297a5cc0fb434c971b8fa103e8dd7b/2017-05-11T09:02:31Z/-1//3341e99ffd748fa01d8293503853770212ff9d3da55774d77b09b338c75abbd7",
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }]
        }
      }
    },
  components: {
    videoPlayer
  },
  mounted() {
      // console.log('this is current player instance object', this.player)
      setTimeout(() => {
        console.log('dynamic change options', this.player)
        // change src
        // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';
        // change item
        // this.$set(this.playerOptions.sources, 0, {
        //   type: "video/mp4",
        //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
        // })
        // change array
        // this.playerOptions.sources = [{
        //   type: "video/mp4",
        //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
        // }]
        this.player.muted(false)
      }, 5000)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
  methods: {
    changeImg1 () {
      document.getElementById("bigPic").src = document.getElementById(
        "pic1"
      ).src
    },
    changeImg2 () {
      document.getElementById("bigPic").src = document.getElementById(
        "pic2"
      ).src
    },
    changeImg3 () {
      document.getElementById("bigPic").src = document.getElementById(
        "pic3"
      ).src
    },
    onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.body[data-v-26ab4ce6] {
  padding: 0;
}
.body {
  margin-bottom: 100px;
  //background-color: #99FFCC;
}
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
  margin: 0 0px;
}
.user-logo {
  font-size: 0.4rem;
  line-height: 50px;
  color: white;
  padding-top: 5px;
}
.relic-name {
  text-align: center;
  color: black;
}
.relic-name h3 {
  line-height: 60px;
}
.body {
  padding: 30px 15px;
}
.bigPicture {
  height: 500px;
  overflow: hidden;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.bigPicture img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  padding: 5px;
  background-color: #fff;
}
.box {
  height: 500px;
}
.box ul {
  list-style: none;
  white-space: nowrap;
  margin: 0;
}
.box ul li {
  height: 160px;
  margin: 0;
  margin-top: 10px;
  padding: 0%;
  white-space: nowrap;
  display: inline-block;
}
.box ul li img {
  width: 100%;
  height: 100%;
  padding: 0%;
  border: 1px solid #ddd;
  padding: 5px;
  background-color: #fff;
}
.sTitle {
  height: 800px;
  margin: 0;
  margin-top: 15px;
  text-align: left;
  border: 3px double black;
  padding: 10px;
  background-color: #fff;
}
.sTitle h4 {
  text-align: left;
  padding-top: 10px;
  font-family: Consolas;
}
.sTitle p {
  font-family: Consolas;
  text-align: left;
}
.line-height p {
  line-height: 28px;
  font-size: 15px;
}
.audio {
  float: left;
  margin-top: 15px;
}
.audio audio {
  margin-top: 15px;
  align-content: left;
}
.button {
  margin-left: 2%;
  margin-top: 15px;
}
.list {
  margin: 15px 2%;
  float: right;
}
.list a {
  margin: 0;
  margin-right: 50px;
  font-size: 0.4rem;
  font-weight: 200;
}
.share{
  height: 370px;
}
@media screen and (min-width: 992px) {
  .share{
    height: 200px;
  }
}
.share-img{
  height: 150px;
  overflow: hidden;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.share-img img{
  height: 100%;
  width: 100%;
}
.share p{
  text-align: center;
}
.bottom {
  height: 40px;
  margin-bottom: 15px;
}
.bottom-div {
  background-color: #fff;
}
.user-img {
  height: 30px;
  width: 30px;
  margin-left: 2%;
  margin-top: 10px;
  float: right;
  align-content: center;
}
.user-img img {
  width: 100%;
  height: 100%;
}
.comment {
  line-height: 50px;
}
.comment input {
  margin-top: 10px;
}
.comment a {
  text-decoration: none;
}
.dashed {
  margin-top: 5px;
  margin-right: 5px;
  border-top: 1px silver dashed;
}
.thumb-up {
  float: right;
}
.related-relics {
  height: 200px;
  margin: 15px 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.related-relics img {
  height: 100%;
  width: 100%;
}
.related-relics-name {
  text-align: center;
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
.vjs-custom-skin > .video-js {
  width: 100%;
  font-family: "PingFang SC","Helvetica Neue","Hiragino Sans GB","Segoe UI","Microsoft YaHei","微软雅黑",sans-serif;
}

.vjs-custom-skin > .video-js .vjs-menu-button-inline.vjs-slider-active,.vjs-custom-skin > .video-js .vjs-menu-button-inline:focus,.vjs-custom-skin > .video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline {
  width: 10em
}

.vjs-custom-skin > .video-js .vjs-controls-disabled .vjs-big-play-button {
  display: none!important
}

.vjs-custom-skin > .video-js .vjs-control {
  width: 3em
}

.vjs-custom-skin > .video-js .vjs-control.vjs-live-control{
  width: auto;
  padding-left: .5em;
  letter-spacing: .1em;
}

.vjs-custom-skin > .video-js .vjs-menu-button-inline:before {
  width: 1.5em
}

.vjs-menu-button-inline .vjs-menu {
  left: 3em
}

.vjs-paused.vjs-has-started.vjs-custom-skin > .video-js .vjs-big-play-button,.video-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button {
  display: block
}

.vjs-custom-skin > .video-js .vjs-load-progress div,.vjs-seeking .vjs-big-play-button,.vjs-waiting .vjs-big-play-button {
  display: none!important
}

.vjs-custom-skin > .video-js .vjs-mouse-display:after,.vjs-custom-skin > .video-js .vjs-play-progress:after {
  padding: 0 .4em .3em
}

.video-js.vjs-ended .vjs-loading-spinner {
  display: none;
}

.video-js.vjs-ended .vjs-big-play-button {
  display: block !important;
}

.video-js.vjs-ended .vjs-big-play-button,.video-js.vjs-paused .vjs-big-play-button,.vjs-paused.vjs-has-started.vjs-custom-skin > .video-js .vjs-big-play-button {
  display: block
}

.vjs-custom-skin > .video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-left: -1.5em;
  margin-top: -1em
}

.vjs-custom-skin > .video-js .vjs-big-play-button {
  background-color: rgba(0,0,0,0.45);
  font-size: 3.5em;
   /*border-radius: 50%;*/
  height: 2em !important;
  line-height: 2em !important;
  margin-top: -1em !important
}

.video-js:hover .vjs-big-play-button,.vjs-custom-skin > .video-js .vjs-big-play-button:focus,.vjs-custom-skin > .video-js .vjs-big-play-button:active {
  background-color: rgba(36,131,213,0.9)
}

.vjs-custom-skin > .video-js .vjs-loading-spinner {
  border-color: rgba(36,131,213,0.8)
}

.vjs-custom-skin > .video-js .vjs-control-bar2 {
  background-color: #000000
}

.vjs-custom-skin > .video-js .vjs-control-bar {
   /*background-color: rgba(0,0,0,0.3) !important;*/
  color: #ffffff;
  font-size: 14px
}

.vjs-custom-skin > .video-js .vjs-play-progress,.vjs-custom-skin > .video-js  .vjs-volume-level {
  background-color: #2483d5
}

.vjs-custom-skin > .video-js .vjs-play-progress:before {
  top: -0.3em;
}

.vjs-custom-skin > .video-js .vjs-progress-control:hover .vjs-progress-holder {
  font-size: 1.3em;
}

.vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu {
  left: 0em;
}

.vjs-custom-skin > .video-js .vjs-menu li {
  padding: 0;
  line-height: 2em;
  font-size: 1.1em;
  font-family: "PingFang SC","Helvetica Neue","Hiragino Sans GB","Segoe UI","Microsoft YaHei","微软雅黑",sans-serif;
}

.vjs-custom-skin > .video-js .vjs-time-tooltip,
.vjs-custom-skin > .video-js .vjs-mouse-display:after,
.vjs-custom-skin > .video-js .vjs-play-progress:after {
  border-radius: 0;
  font-size: 1em;
  padding: 0;
  width: 3em;
  height: 1.5em;
  line-height: 1.5em;
  top: -3em;
}

.vjs-custom-skin > .video-js .vjs-menu-button-popup .vjs-menu {
  width: 5em;
  left: -1em;
}

.vjs-custom-skin > .video-js .vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu {
  left: 0;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button .vjs-menu {
   /*order: 4;*/
}

 /*排序顺序*/
.vjs-custom-skin > .video-js .vjs-control-bar .vjs-play-control {
  order: 0;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-time-control {
  min-width: 1em;
  padding: 0;
  margin: 0 .1em;
  text-align: center;
  display: block;
  order: 1;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-playback-rate .vjs-playback-rate-value{
  font-size: 1.2em;
  line-height: 2.4;
}

.vjs-custom-skin > .video-js .vjs-progress-control.vjs-control {
  order: 2;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-volume-menu-button {
  order: 3;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button {
  order: 4;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-resolution-button .vjs-resolution-button-label {
  display: block;
  line-height: 3em;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-playback-rate {
  order: 5;
}

.vjs-custom-skin > .video-js .vjs-control-bar .vjs-fullscreen-control {
  order: 6;
}
</style>
