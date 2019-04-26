<template>
<div class="screen">
<div class="wrap">
  <Scroll>
      <navbar class="navbar1"></navbar>
      <div class="con-example-images">
    <vs-images>
      <vs-image :key="index" :src="`https://picsum.photos/400/400?image=2${index}`" v-for="(image, index) in 8" />
    </vs-images>
  </div>
  <vs-row vs-justify="center">
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
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
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
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
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img class="cardimg" src="http://sjzmuseum.com/uploads/181112/1-1Q11211110X94.jpg">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button color="primary" type="gradient" >View</vs-button>
            <vs-button color="danger" type="gradient" >Delete</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img class="cardimg" src="http://sjzmuseum.com/uploads/181112/1-1Q11211110X94.jpg">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button color="primary" type="gradient" >View</vs-button>
            <vs-button color="danger" type="gradient" >Delete</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
    <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="3">
      <vs-card actionable class="cardx">
        <div slot="header">
          <h3>
            Hello world !
          </h3>
        </div>
        <div slot="media">
          <img class="cardimg" src="http://sjzmuseum.com/uploads/181112/1-1Q11211110X94.jpg">
        </div>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
        </div>
        <div slot="footer">
          <vs-row vs-justify="flex-end">
            <vs-button color="primary" type="gradient" >View</vs-button>
            <vs-button color="danger" type="gradient" >Delete</vs-button>
          </vs-row>
        </div>
      </vs-card>
    </vs-col>
  </vs-row>
  </Scroll>
</div>
</div>
</template>

<script>
import navbar from '../../components/common/navbar'
import Scroll from '../../components/common/Scroll'
export default {
  components: {
    navbar,
    Scroll
  }
}
</script>

<style lang="stylus">
.screen
  width 100%
  height 100%
  overflow-x hidden
</style>
