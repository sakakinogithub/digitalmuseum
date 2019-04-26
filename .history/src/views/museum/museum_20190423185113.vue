<template>
<div class="screen">
<div class="wrap">
  <Scroll>
      <navbar class="navbar1"></navbar>
      <img src="http://bwg.nwu.edu.cn/uploadfile/2017/0926/20170926060540193.jpg" name="fade" />
  <vs-tabs alignment="fixed">
      <vs-tab label="简介">
        <div class="swimlane">
          <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <img src="http://bwg.nwu.edu.cn/uploadfile/20170926/1506390419117571.jpg" alt="Intellisense" class="screenshot">
              </div>
              <div class="col-sm-7 col-sm-push-1">
                <h2>博物馆简介</h2>
                <p>西北大学博物馆是以西北大学为依托的一座大型综合类高校博物馆，位于西北大学太白校区。西北大学博物馆总建筑面积15000㎡，于2012年正式建成。现有馆藏文物、标本5000余件，已全面向社会公众免费开放。博物馆自开馆以来充分发挥着西北大学百年薪火相传下的自然学科特色和文物藏品优势， 以多角度、多方式、多侧面地向广大师生及社会观众展示西北大学的教学、科研成果。坚持“有效保护、合理利用、加强管理”的原则，把收藏保管、科学研究和宣传教育功能进行有机结合。</p>
              </div>
            </div>
          </div>
        </div>
      </vs-tab>
      <vs-tab label="新闻">
        <div>
          <vs-collapse open-hover :type="shadow">
     <vs-collapse-item icon-pack="icon-circle-down">
       <div slot="header">
         西北大学博物馆获评“西安市社会科学普及示范基地”
       </div>
        <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <img src="http://bwg.nwu.edu.cn/uploadfile/20190421/1555828977292337.jpg" alt="Intellisense" class="screenshot">
              </div>
              <div class="col-sm-7 col-sm-push-1">
                <h1>2019.04.21</h1>
                <p>4月20日下午，庆祝建国70周年暨“家西安•70年”——2019年西安市社会科学普及周活动启动仪式在关中民俗艺术博物院隆重举行。省社科联、市社科联（院），以及市社科类社会组织、社科普及示范基地负责人，交大阳光...</p>
              </div>
            </div>
          </div>
     </vs-collapse-item>
     <vs-collapse-item icon-pack="icon-circle-down">
       <div slot="header">
         关于举办2019年西北大学第六届 “雏凤杯”讲解比赛的通知
       </div>
        <div class="container">
            <div class="row">
              <div class="col-sm-4">
                <img src="http://bwg.nwu.edu.cn/uploadfile/20190421/1555828977292337.jpg" alt="Intellisense" class="screenshot">
              </div>
              <div class="col-sm-7 col-sm-push-1">
                <h1>2019.04.20</h1>
                <p>4月20日下午，庆祝建国70周年暨“家西安•70年”——2019年西安市社会科学普及周活动启动仪式在关中民俗艺术博物院隆重举行。省社科联、市社科联（院），以及市社科类社会组织、社科普及示范基地负责人，交大阳光...</p>
              </div>
            </div>
          </div>
     </vs-collapse-item>
     <vs-collapse-item icon-pack="icon-circle-down">
       <div slot="header">
         Collapse item 3
       </div>

       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu
     </vs-collapse-item>
     <vs-collapse-item icon-pack="icon-circle-down">
       <div slot="header">
         Collapse item 4
       </div>

       Suspendisse aliquet condimentum diam, sed aliquam nisl dapibus et. Aliquam euismod ullamcorper dolor eu imperdiet. Nullam eget odio at magna gravida suscipit sed vestibulum odio. Maecenas porta elit vel lectus molestie, eget aliquam enim feugiat. Vivamus nec faucibus nisl. Nunc venenatis tempus finibus.
     </vs-collapse-item>
    </vs-collapse >
        </div>
      </vs-tab>
      <vs-tab label="文物">
        <div>
          <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="2">
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
            青花八仙香炉
          </h3>
        </div>
        <div slot="media">
          <img class="cardimg" src="http://sjzmuseum.com/uploads/181112/1-1Q1121111545E.jpg">
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></vs-button>
            <vs-button type="gradient" color="primary"><span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span></vs-button>
            <vs-button color="warning" type="gradient"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="2">
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
            青花八仙香炉
          </h3>
        </div>
        <div slot="media">
          <img class="cardimg" src="http://sjzmuseum.com/uploads/181112/1-1Q1121111545E.jpg">
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></vs-button>
            <vs-button type="gradient" color="primary"><span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span></vs-button>
            <vs-button color="warning" type="gradient"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="2">
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
            青花八仙香炉
          </h3>
        </div>
        <div slot="media">
          <img class="cardimg" src="http://sjzmuseum.com/uploads/181112/1-1Q1121111545E.jpg">
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></vs-button>
            <vs-button type="gradient" color="primary"><span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span></vs-button>
            <vs-button color="warning" type="gradient"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="2">
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
            青花八仙香炉
          </h3>
        </div>
        <div slot="media">
          <img class="cardimg" src="http://sjzmuseum.com/uploads/181112/1-1Q1121111545E.jpg">
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></vs-button>
            <vs-button type="gradient" color="primary"><span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span></vs-button>
            <vs-button color="warning" type="gradient"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="2">
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
            青花八仙香炉
          </h3>
        </div>
        <div slot="media">
          <img class="cardimg" src="http://sjzmuseum.com/uploads/181112/1-1Q1121111545E.jpg">
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></vs-button>
            <vs-button type="gradient" color="primary"><span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span></vs-button>
            <vs-button color="warning" type="gradient"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="2">
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
            青花八仙香炉
          </h3>
        </div>
        <div slot="media">
          <img class="cardimg" src="http://sjzmuseum.com/uploads/181112/1-1Q1121111545E.jpg">
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button type="gradient" color="danger"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span></vs-button>
            <vs-button type="gradient" color="primary"><span class="glyphicon glyphicon-bookmark" aria-hidden="true"></span></vs-button>
            <vs-button color="warning" type="gradient"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
    <vs-pagination :total="40" v-model="currentx" prev-icon="" next-icon=""></vs-pagination>
        </div>
      </vs-tab>
      <vs-tab label="研究">
        <div>

        </div>
      </vs-tab>
      <vs-tab label="活动">
        <div>

        </div>
      </vs-tab>
    </vs-tabs>
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
      currentx: 8
    }
  }
}
</script>

<style lang="stylus">
.icon-circle-down
  font-size 25px
.con-example-images
  width 100%
h3
  font-family Georgia
.screen
  width 100%
  height 100%
  overflow-x hidden
.cardx
  background #ECE9E6  /* fallback for old browsers */
  background -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6)  /* Chrome 10-25, Safari 5.1-6 */
  background linear-gradient(to right, #FFFFFF, #ECE9E6) /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
.swimlane:nth-child(even) {
    background-color: initial;
}
.container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.screenshot
  margin-top 28px
  width 360px
  height 216px
  vertical-align middle
  border 0
</style>
