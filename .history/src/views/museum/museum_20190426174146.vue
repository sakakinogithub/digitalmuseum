<template>
  <div class="screen">
    <div class="wrap">
      <Scroll>
        <navbar class="navbar1"></navbar>
        <img src="http://bwg.nwu.edu.cn/uploadfile/2017/0926/20170926060540193.jpg"  class="img-responsive">
        <div class="value-props">
          <div class="container">
            <div class="row">
              <div class="col-sm-3 col-xs-6"><a class="value-prop" id="home-value-prop-intellisense-link" href="#meet-intellisense"><div class="value-prop-icon home"></div>HOME</a></div>
              <div class="col-sm-3 col-xs-6"><a class="value-prop" id="home-value-prop-debugging-link" href="#powerful-debugging"><div class="value-prop-icon debugging"></div>Debugging</a></div>
              <div class="col-sm-3 col-xs-6"><a class="value-prop" id="home-value-prop-git-link" href="#built-in-git"><div class="value-prop-icon git"></div>Built-in Git</a></div>
              <div class="col-sm-3 col-xs-6"><a class="value-prop" id="home-value-prop-extensions-link" href="#hundreds-of-extensions"><div class="value-prop-icon extensions-icon"></div>Extensions</a></div>
            </div>
          </div>
        </div>
        <vs-divider id="introduction" position="left" color="rgb(106, 76, 156)">简介</vs-divider>
        <div class="swimlane">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <img
                  src="http://bwg.nwu.edu.cn/uploadfile/20170926/1506390419117571.jpg"
                  alt="Intellisense"
                  class="screenshot"
                >
              </div>
              <div class="col-sm-7 col-sm-push-1">
                <h2>博物馆简介</h2>
                <p>西北大学博物馆是以西北大学为依托的一座大型综合类高校博物馆，位于西北大学太白校区。西北大学博物馆总建筑面积15000㎡，于2012年正式建成。现有馆藏文物、标本5000余件，已全面向社会公众免费开放。博物馆自开馆以来充分发挥着西北大学百年薪火相传下的自然学科特色和文物藏品优势， 以多角度、多方式、多侧面地向广大师生及社会观众展示西北大学的教学、科研成果。坚持“有效保护、合理利用、加强管理”的原则，把收藏保管、科学研究和宣传教育功能进行有机结合。</p>
              </div>
            </div>
          </div>
        </div>
        <vs-divider id="news" position="left-center" color="rgb(125, 108, 70)">新闻</vs-divider>
        <div class="newslist">
          <vs-collapse type="margin">
            <vs-collapse-item icon-pack="icon-circle-down">
              <div class="sign" slot="header">西北大学博物馆获评“西安市社会科学普及示范基地”</div>
              <div class="container">
                <div class="row">
                  <div class="col-sm-4">
                    <img
                      src="http://bwg.nwu.edu.cn/uploadfile/20190421/1555828977292337.jpg"
                      alt="Intellisense"
                      class="screenshot"
                    >
                  </div>
                  <div class="col-sm-7 col-sm-push-1">
                    <h1>2019.04.21</h1>
                    <p>4月20日下午，庆祝建国70周年暨“家西安•70年”——2019年西安市社会科学普及周活动启动仪式在关中民俗艺术博物院隆重举行。省社科联、市社科联（院），以及市社科类社会组织、社科普及示范基地负责人，交大阳光...</p>
                  </div>
                </div>
              </div>
            </vs-collapse-item>
            <vs-collapse-item icon-pack="icon-circle-down">
              <div class="sign" slot="header">关于举办2019年西北大学第六届 “雏凤杯”讲解比赛的通知</div>
              <div class="container">
                <div class="row">
                  <div class="col-sm-4">
                    <img
                      src="http://bwg.nwu.edu.cn/uploadfile/2019/0420/20190420121645220.jpg"
                      alt="Intellisense"
                      class="screenshot"
                    >
                  </div>
                  <div class="col-sm-7 col-sm-push-1">
                    <h1>2019.04.20</h1>
                    <p>为传承弘扬中华优秀传统文化，推进学校文化建设，促进学生综合素质全面提高，在5·18国际博物馆日（主题：作为文化中枢的博物馆：传统的未来）来临之际，由西北大学主办，学生工作部（处）、校团委、教务处、博物...</p>
                  </div>
                </div>
              </div>
            </vs-collapse-item>
            <vs-collapse-item icon-pack="icon-circle-down">
              <div class="sign" slot="header">摄影家与画家会碰撞出怎样的火花——约翰·坎普兰教授参观西大博物馆</div>
              <div class="container">
                <div class="row">
                  <div class="col-sm-4">
                    <img
                      src="http://bwg.nwu.edu.cn/uploadfile/20190420/1555733155122288.jpg"
                      alt="Intellisense"
                      class="screenshot"
                    >
                  </div>
                  <div class="col-sm-7 col-sm-push-1">
                    <h1>2019.04.18</h1>
                    <p>4月17日上午，1992年普利策专题新闻摄影奖得主，美国最有成就的纪实摄影家之一，美国佛罗里达大学教授约翰·坎普兰参观西北大学博物馆，我馆常务副馆长刘丰及我校新闻学院相关老师陪同参观。从佛教美术馆，到校史...</p>
                  </div>
                </div>
              </div>
            </vs-collapse-item>
            <vs-collapse-item icon-pack="icon-circle-down">
              <div class="sign" slot="header">西北大学博物馆在2019年陕西科普讲解大赛中荣获佳绩</div>
              <div class="container">
                <div class="row">
                  <div class="col-sm-4">
                    <img
                      src="http://bwg.nwu.edu.cn/uploadfile/20190420/1555732821124168.jpg"
                      alt="Intellisense"
                      class="screenshot"
                    >
                  </div>
                  <div class="col-sm-7 col-sm-push-1">
                    <h1>2019.04.19</h1>
                    <p>4月18日，2019年陕西科普讲解大赛在陕西省科技资源统筹中心落下帷幕。本次大赛由陕西省科学技术厅、陕西省教育厅、陕西省总工会、陕西省科学技术协会共同主办，陕西省科技资源统筹中心、陕西省教科文卫体工会承办...</p>
                  </div>
                </div>
              </div>
            </vs-collapse-item>
          </vs-collapse>
        </div>
        <vs-divider id="relic" position="center" color="rgb(9, 97, 72)">文物</vs-divider>
        <div class="relics">
          <vs-row vs-justify="center">
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-xs="6" vs-sm="4" vs-lg="2">
              <vs-card actionable class="cardx">
                <div slot="header">
                  <h3>青花八仙香炉</h3>
                </div>
                <div slot="media">
                  <img
                    class="cardimg"
                    src="http://sjzmuseum.com/uploads/181112/1-1Q1121111545E.jpg"
                  >
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                    <vs-button type="gradient" color="danger">
                      <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
                    </vs-button>
                    <vs-button type="gradient" color="primary">
                      <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
                    </vs-button>
                    <vs-button color="warning" type="gradient">
                      <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </vs-button>
                  </vs-row>
                </div>
              </vs-card>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-xs="6" vs-sm="4" vs-lg="2">
              <vs-card actionable class="cardx">
                <div slot="header">
                  <h3>青花八仙香炉</h3>
                </div>
                <div slot="media">
                  <img
                    class="cardimg"
                    src="http://sjzmuseum.com/uploads/181112/1-1Q1121111545E.jpg"
                  >
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                    <vs-button type="gradient" color="danger">
                      <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
                    </vs-button>
                    <vs-button type="gradient" color="primary">
                      <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
                    </vs-button>
                    <vs-button color="warning" type="gradient">
                      <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </vs-button>
                  </vs-row>
                </div>
              </vs-card>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-xs="6" vs-sm="4" vs-lg="2">
              <vs-card actionable class="cardx">
                <div slot="header">
                  <h3>青花八仙香炉</h3>
                </div>
                <div slot="media">
                  <img
                    class="cardimg"
                    src="http://sjzmuseum.com/uploads/181112/1-1Q1121111545E.jpg"
                  >
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                    <vs-button type="gradient" color="danger">
                      <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
                    </vs-button>
                    <vs-button type="gradient" color="primary">
                      <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
                    </vs-button>
                    <vs-button color="warning" type="gradient">
                      <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </vs-button>
                  </vs-row>
                </div>
              </vs-card>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-xs="6" vs-sm="4" vs-lg="2">
              <vs-card actionable class="cardx">
                <div slot="header">
                  <h3>青花八仙香炉</h3>
                </div>
                <div slot="media">
                  <img
                    class="cardimg"
                    src="http://sjzmuseum.com/uploads/181112/1-1Q1121111545E.jpg"
                  >
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                    <vs-button type="gradient" color="danger">
                      <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
                    </vs-button>
                    <vs-button type="gradient" color="primary">
                      <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
                    </vs-button>
                    <vs-button color="warning" type="gradient">
                      <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </vs-button>
                  </vs-row>
                </div>
              </vs-card>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-xs="6" vs-sm="4" vs-lg="2">
              <vs-card actionable class="cardx">
                <div slot="header">
                  <h3>青花八仙香炉</h3>
                </div>
                <div slot="media">
                  <img
                    class="cardimg"
                    src="http://sjzmuseum.com/uploads/181112/1-1Q1121111545E.jpg"
                  >
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                    <vs-button type="gradient" color="danger">
                      <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
                    </vs-button>
                    <vs-button type="gradient" color="primary">
                      <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
                    </vs-button>
                    <vs-button color="warning" type="gradient">
                      <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </vs-button>
                  </vs-row>
                </div>
              </vs-card>
            </vs-col>
            <vs-col type="flex" vs-justify="center" vs-align="center" vs-xs="6" vs-sm="4" vs-lg="2">
              <vs-card actionable class="cardx">
                <div slot="header">
                  <h3>青花八仙香炉</h3>
                </div>
                <div slot="media">
                  <img
                    class="cardimg"
                    src="http://sjzmuseum.com/uploads/181112/1-1Q1121111545E.jpg"
                  >
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div slot="footer">
                  <vs-row vs-justify="flex-end">
                    <vs-button type="gradient" color="danger">
                      <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
                    </vs-button>
                    <vs-button type="gradient" color="primary">
                      <span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span>
                    </vs-button>
                    <vs-button color="warning" type="gradient">
                      <span class="glyphicon glyphicon-star" aria-hidden="true"></span>
                    </vs-button>
                  </vs-row>
                </div>
              </vs-card>
            </vs-col>
          </vs-row>
          <vs-pagination class="paginate" :total="40" v-model="currentx" prev-icon next-icon></vs-pagination>
        </div>
         <vs-divider id="activity" position="right-center" color="rgb(0, 137, 167)">活动</vs-divider>
        <div>
          <div id="meet-intellisense" class="swimlane">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <img src='http://bwg.nwu.edu.cn/uploadfile/20170922/1506059392752884.png' alt="Intellisense" class="screenshot"/>
                </div>
                <div class="col-sm-7 col-sm-push-1">
                    <h2>历史学院2015级新生参观我校博物馆</h2>
                    <p>9月2日，2015级新生入学之际，校博物馆也迎来了它的新观众。来自历史学院的120名...</p>
                </div>
            </div>
        </div>
    </div>

    <div id="powerful-debugging" class="swimlane">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-push-8">
                    <img src='http://bwg.nwu.edu.cn/uploadfile/2017/0922/20170922014835480.jpg' alt="Debugging" class="screenshot"/>
                </div>
                <div class="col-sm-7 col-sm-pull-4">
                    <h2>我馆博物学社成员赴浙江大学参加“全国高校讲解论坛交流会</h2>
                    <p>5月24日至27日，我校博物馆派出博物学社负责人杨森、刘玥吟赴浙江大学参与第三届...</p>
                </div>
            </div>
        </div>
    </div>

    <div id="built-in-git" class="swimlane">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <img src='http://bwg.nwu.edu.cn/uploadfile/20170922/1506059221755595.jpg' alt="Git" class="screenshot"/>
                </div>
                <div class="col-sm-7 col-sm-push-1">
                    <h2>Git commands built-in.</h2>
                    <p>Working with Git and other SCM providers has never been easier. Review diffs, stage files, and make commits right from the editor. Push and pull from any hosted SCM service.</p>
                </div>
            </div>
        </div>
    </div>

    <div id="hundreds-of-extensions" class="swimlane hundreds-extensions">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-push-8">
                    <img src="http://bwg.nwu.edu.cn/uploadfile/20170922/1506059065389308.jpg" class="screenshot" alt="Git" />
                </div>
                <div class="col-sm-7 col-sm-pull-4">
                    <h2>Extensible and customizable.</h2>
                    <p>Want even more features? Install extensions to add new languages, themes, debuggers, and to connect to additional services. Extensions run in separate processes, ensuring they won't slow down your editor.
                    </p>
                </div>
            </div>
        </div>
    </div>

        </div>
        <footer>
          <pcfooter></pcfooter>
        </footer>
      </Scroll>
    </div>
  </div>
</template>

<script>
import navbar from '../../components/common/navbar'
import Scroll from '../../components/common/Scroll'
import pcfooter from '../../components/common/pcfooter'
export default {
  components: {
    navbar,
    Scroll,
    pcfooter
  },
  data () {
    return {
      show: true,
      currentx: 8,
      hover: 'curtain',
      active: false,
      notExpand: false,
      reduce: false
    }
  }
}
</script>

<style lang="stylus">
.vs-icon {
  font-size: 25px;
}

.con-example-images {
  width: 100%;
}

h3 {
  font-family: Georgia;
}

.screen {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

.cardx {
  background: #ECE9E6; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.swimlane
  margin-top 50px
  margin-bottom 85px

.swimlane:nth-child(even) {
  background-color: initial;
}

.newslist
  margin-top 50px
  margin-bottom 50px

.relics
  margin-top 50px
  margin-bottom 50px

.paginate
  margin-top 30px

.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.sign
  margin-right 25px
.screenshot {
  margin-top: 28px;
  width: 360px;
  height: 216px;
  vertical-align: middle;
  border: 0;
}

.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h4 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    > button {
      margin-left: 10px;
    }
  }
}

.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > button {
    border: 0px solid rgba(0, 0, 0, 0) !important;
    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
    border-radius: 0px !important;
  }
}

.vs-sidebar {
  font-size: 14px;
}
.col-sm-7
  height 244px
  padding-top 65px
  text-align center
</style>
