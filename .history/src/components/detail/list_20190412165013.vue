<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <router-link to="/reliclist/relic">
          <img class="mui-media-object mui-pull-left" src="https://www.dpm.org.cn/Uploads/Picture/dc/24902.jpg">
          <div class="mui-media-body">
            <h1>磁山文化红陶盂</h1>
            <p class="mui-ellipsis">
              <span>新石器时代红陶</span>
              <span>磁山文化</span>
            </p>
          </div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://www.dpm.org.cn/Uploads/Picture/dc/24961.jpg">
          <div class="mui-media-body">
            <h1>磁山文化红陶平底碗</h1>
            <p class="mui-ellipsis">
              <span>新石器时代红陶</span>
              <span>磁山文化</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://www.dpm.org.cn/Uploads/Picture/dc/25003.jpg">
          <div class="mui-media-body">
            <h1>龙山文化黑陶双系壶</h1>
            <p class="mui-ellipsis">
              <span>新石器时代黑陶</span>
              <span>龙山文化</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color:#226aff;
      display:flex;
      justify-content: space-between;
    }
  }
}
</style>
