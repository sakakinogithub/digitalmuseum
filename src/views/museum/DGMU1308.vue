<template>
  <div class="wrap">
    <museumNavbar></museumNavbar>
    <div class="banner">
      <p>
        <img alt src="../../assets/images/activity.png">
      </p>
    </div>
    <div class="mainbox">
      <div class="sidebar">
        <div class="sidetit">活动</div>
        <hr>
      </div>
      <div class="activitylist container">
        <div class="row">
          <ul>
            <li>
              <div class="col-xs-12 col-sm-1 col-md-4 col-lg-4">
                <a href="#">
                  <div class="imgstyle">
                    <img
                      src="http://www.zjmuex.com/UploadFiles/ZHEJIANG2\CMS_THUMIMG_FILES\2018-11-20\636783067207388304.jpg"
                      alt="img"
                      style="top: 50%; margin-top: -99.9375px; width: 100%; height: 100%;"
                    >
                  </div>
                </a>
              </div>
              <div class="cont col-xs-5 col-sm-12 col-md-8 col-lg-8">
                <a href="#/museum/activityDetails">
                  <h3>西安市博物馆举办“指尖艺术·伞”社教活动</h3>
                </a>
                <p>
                  <a href="#">发布单位：</a>
                  <a target="_blank" href="/unit/home/index?unitId=97">西安市博物馆</a>
                </p>
                <p>发布时间：2017-10-12</p>
                <p>西安市市博物馆举行了别开生面的趣味亲子活动——画伞、折伞。 1日上午，在社教老师的指导下，15名5岁以上的小朋友与父母一起体验了画伞的乐趣。2日上午，15名10岁以上的小朋友与家长，在社教老师的示...</p>
              </div>
            </li>
            <li>
              <div class="col-xs-12 col-sm-1 col-md-4 col-lg-4">
                <a href="#">
                  <div class="imgstyle">
                    <img
                      src="http://www.zjmuex.com/UploadFiles/ZHEJIANG2\CMS_THUMIMG_FILES\2018-11-20\636783067207388304.jpg"
                      alt="img"
                      style="top: 50%; margin-top: -99.9375px; width: 100%; height: 100%;"
                    >
                  </div>
                </a>
              </div>
              <div class="cont col-xs-5 col-sm-12 col-md-8 col-lg-8">
                <a href="#">
                  <h3>西安市博物馆举办“指尖艺术·伞”社教活动</h3>
                </a>
                <p>
                  <a href="#">发布单位：</a>
                  <a target="_blank" href="/unit/home/index?unitId=97">西安市博物馆</a>
                </p>
                <p>发布时间：2017-10-12</p>
                <p>西安市市博物馆举行了别开生面的趣味亲子活动——画伞、折伞。 1日上午，在社教老师的指导下，15名5岁以上的小朋友与父母一起体验了画伞的乐趣。2日上午，15名10岁以上的小朋友与家长，在社教老师的示...</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-xs-4 col-sm-12 col-md-12 col-lg-12">
          <nav style="text-align: right;">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="clear"></div>
    <pcfooter></pcfooter>
  </div>
</template>

<script>
import museumNavbar from '../../components/common/MuseumNavbar'
import pcfooter from '../../components/common/pcfooter'
export default {
  components: {
    museumNavbar,
    pcfooter
  }
}
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.mainbox {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.sidebar {
  float: left;
  width: 12%;
}
.sidetit {
  line-height: 70px;
  height: 60px;
  font-size: 28px;
  letter-spacing: 12px;
}
.sidebar hr {
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
.banner img {
  width: 100%;
  height: 100%;
}
.activitylist {
  margin: 80px 0;
}
.activitylist ul li {
  padding: 25px 0;
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;
  *zoom: 1;
}

.activitylist ul li .imgstyle {
  position: relative;
  float: left;
  width: 300px;
  height: 180px;
  overflow: hidden;
}
.activitylist ul li .imgstyle img {
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.4s ease;
}
.activitylist ul li .imgstyle:hover img {
  transform: scale(1.05, 1.05);
}
.activitylist ul li .date {
  float: left;
  margin: 44px 55px 0;
}
.activitylist ul li .date p {
  font-size: 14px;
  color: #6e6e6e;
  text-align: right;
  line-height: 40px;
}
.activitylist ul li .date p:first-child {
  position: relative;
  color: #33b789;
  line-height: 47px;
  border-bottom: 1px solid #b8b4b4;
}
.activitylist ul li .date p:first-child:after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -1px;
  width: 36px;
  height: 2px;
  background-color: #33b789;
}
.activitylist ul li .date span {
  font-size: 22px;
  padding-left: 4px;
}
.activitylist ul li .date span:first-child {
  font-size: 25px;
}
.activitylist ul li .cont p {
  margin-top: 8px;
  line-height: 26px;
  font-size: 15px;
  color: #767676;
  overflow: hidden;
}
.activitylist ul li .cont p a {
  color: #767676;
}
.activitylist ul li .cont h3 {
  font-size: 18px;
  color: #525252;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.3s ease;
}
.activitylist ul li .cont h3:hover {
  color: #33b789;
}
.clear {
  clear: both;
}
</style>
