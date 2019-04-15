<template>
  <div class="wrap">
    <museumNavbar></museumNavbar>
    <div class="banner">
      <p>
        <img src="../../assets/images/activity.png">
      </p>
    </div>
    <div class="mainbox container">
      <div class="row">
        <div>
          <h1 class="page-title">{{newsTitle}}</h1>
        </div>
        <div class="col-xs-6 col-sm-6 col-md-12 col-lg-12">
          <ul>
            <li>
              <img :src="newsImage" class="newsImage">
            </li>
            <li>活动时间: &nbsp;{{newsTime}}</li>
            <li>博物馆展厅：&nbsp;{{museumId}}</li>
            <li>活动介绍:</li>
            <li>
              内容：
              <p>{{newsText}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
  },
  data () {
    return {
      newsTitle: '',
      newsSpeaker: '',
      newsTime: '',
      newsImage: '',
      newsText: '',
      museumId: ''
    }
  },
  mounted: function () {
    this.init()
  },
  methods: {
    init: function () {
      this.$http.get('http://localhost:8090/activity/getList').then(
        response => {
          console.log(response)
          this.newsTitle = response.data[0].newsTitle
          this.newsSpeaker = response.data[0].newsSpeaker
          this.newsTime = response.data[0].newsTime
          this.newsImage = response.data[0].newsImage
          this.newsText = response.data[0].newsText
          this.museumId = response.data[0].museumId
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.banner img {
  width: 100%;
  height: 100%;
}
.page-title {
  font-size: 0.5rem;
  font-weight: normal;
  border-bottom: 1px solid #e6e6e6;
  padding: 0 0 2%;
  margin-bottom: 3%;
}
.mainbox {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.activityContext ul li {
  padding: 25px 0;
  overflow: hidden;
  border-bottom: 1px solid #e6e6e6;
  *zoom: 1;
}
.newsImage{
  width: 100%;
  height: 100%;
}
</style>
