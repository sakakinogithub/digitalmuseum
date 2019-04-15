<template>
  <div class="screen">
    <navbar></navbar>
    <div>
      <h1>藏品列表</h1>
    </div>
    <div class="wrap">
      <div class="left">
        <div id="searchPannel" class="search-pannel">
          <div class="search-title">藏品检索</div>
          <div class="lg-row">
            <strong>关键词：</strong>
            <input type="text" class="lg-input" id="txtAdvancedSoKey" value>
          </div>
          <div class="lg-row">
            <strong>藏品分类：</strong>
            <select id="stAdvancedSoCategory" data-lang="zh-CN">
              <option value>请选择</option>
              <option value="8">青铜器</option>
              <option value="20">近现代文物</option>
              <option value="21">民族民俗</option>
              <option value="22">杂件</option>
              <option value="9">陶瓷</option>
              <option value="23">书法</option>
              <option value="24">绘画</option>
              <option value="25">碑帖111</option>
            </select>
          </div>
          <div class="row">
            <strong>材质：</strong>
            <select name="AdvancedSoAttrs" id="stAttribute1006" data-attr="1006">
              <option value>请选择</option>
              <option value="1022">青铜</option>
              <option value="1023">绢</option>
              <option value="1024">木</option>
              <option value="1025">玉</option>
              <option value="1026">陶</option>
              <option value="1027">丝帛</option>
              <option value="1028">竹</option>
              <option value="1029">漆</option>
              <option value="1030">丝</option>
              <option value="1031">铜</option>
              <option value="1032">铁</option>
              <option value="1033">玳瑁</option>
              <option value="1034">角质</option>
              <option value="1035">麻</option>
              <option value="1036">银asdfasdfasfasdfasfasdfasdfasdfasdfas</option>
              <option value="1038">滑asdfasdf石</option>
              <option value="1039">纸</option>
              <option value="1041">玻璃</option>
              <option value="1042">瓷</option>
              <option value="1043">石</option>
              <option value="1044">象牙</option>
              <option value="1045">金</option>
              <option value="1046">水晶</option>
            </select>
          </div>
          <div class="row">
            <strong>年代：</strong>
            <select name="AdvancedSoAttrs" id="stAttribute1005" data-attr="1005">
              <option value>请选择</option>
              <option value="1001">旧石器时代</option>
              <option value="1002">新石器时代</option>
              <option value="1003">商</option>
              <option value="1004">周</option>
              <option value="1005">春秋</option>
              <option value="1006">战国</option>
              <option value="1007">西汉</option>
              <option value="1008">东汉</option>
              <option value="1009">三国</option>
              <option value="1010">晋</option>
              <option value="1011">南北朝</option>
              <option value="1012">隋</option>
              <option value="1013">唐</option>
              <option value="1014">五代十国</option>
              <option value="1015">宋</option>
              <option value="1016">辽</option>
              <option value="1017">元</option>
              <option value="1018">明</option>
              <option value="1019">清</option>
              <option value="1020">近代</option>
              <option value="1021">现当代</option>
              <option value="1040">金（1115年－1234年）</option>
            </select>
          </div>
          <div id="searchButtonBox" class="search-button clearfix">
            <input type="button" value="搜索" onclick="goAdvancedSearch()">
          </div>
        </div>
        <div class="left btn-group-vertical">
          <button type="button" class="btn btn-primary">Apple</button>
          <button type="button" class="btn btn-primary">Samsung</button>
          <button type="button" class="btn btn-primary">Samsung</button>
          <button type="button" class="btn btn-primary">Samsung</button>
          <button type="button" class="btn btn-primary">Samsung</button>
          <button type="button" class="btn btn-primary">Samsung</button>
          <button type="button" class="btn btn-primary">Samsung</button>
          <button type="button" class="btn btn-primary">Samsung</button>
          <button type="button" class="btn btn-primary">Samsung</button>
        </div></div>
        <div class="right">
          <div class="content">
            <div class="content-wrap">
              <div class="current-location">
                <div class="current-location-warp">
                  <i class="home"></i>
                  <a href="//www.hnmuseum.com/zh-hans">首页</a>
                  <i class="arrow">>></i>
                  <a href="#">收藏</a>
                  <i class="arrow">>></i>
                  <span>青铜器</span>
                </div>
              </div>
              <div class="subbar">
                <select id="stTypeMode" onchange="showModelOrSize()">
                  <option value="list">列表模式</option>
                  <option value="thumbnail">图片模式</option>
                </select>
                <select id="stRequestSize" onchange="showModelOrSize()">
                  <option value>显示条数</option>
                  <option value="48">48</option>
                  <option value="96">96</option>
                  <option value="192">192</option>
                </select>
              </div>
               <table log-set-param="table_view" class="table-view log-set-param">
          <tbody>
            <tr>
              <td width="194" valign="top" colspan="1" rowspan="1">
                <div class="para" label-module="para" style="text-align: center;">
                  <div
                    class="lemma-picture text-pic layout-center"
                    style="width:220px; float: none; display: block; margin: 0px auto; clear: both;"
                  >
                    <img
                      class
                      src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=1d272fe3b63eb13540c7b0b9961ea8cb/38dbb6fd5266d01694099d239d2bd40735fa35ac.jpg"
                      alt="新石器时代·人面鱼纹盆"
                      style="width:220px;height:147px;"
                    >

                    <span class="description">新石器时代·人面鱼纹盆</span>
                  </div>
                </div>
              </td>
              <td width="423" valign="top" colspan="1" rowspan="1">
                <div class="para" label-module="para">
                  <div
                    class="lemma-picture text-pic layout-center"
                    style="width:220px; text-align: center; color: rgb(102, 102, 102); font-size: 12px; white-space: normal; float: none; display: block; margin: 0px auto; clear: both;"
                  >
                    <img
                      class
                      src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=e3587b5ffc246b607f0eb576dbf81a35/77094b36acaf2eddfe9d6ce5871001e939019349.jpg"
                      alt="新石器时代·刻划符号"
                      style="width:220px;height:147px;"
                    >

                    <span class="description">新石器时代·刻划符号</span>
                  </div>
                </div>
              </td>
              <td width="232" valign="top" colspan="1" rowspan="1">
                <div class="para" label-module="para" style="text-align: center;">
                  <div
                    class="lemma-picture text-pic layout-center"
                    style="width:220px; text-align: center; color: rgb(102, 102, 102); font-size: 12px; white-space: normal; float: none; display: block; margin: 0px auto; clear: both;"
                  >
                    <img
                      class
                      src="https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=4911651fa118972ba73a07c8d6cd7b9d/8718367adab44aedb774e7efb91c8701a18bfb87.jpg"
                      alt="新石器时代·红陶尖底瓶"
                      style="width:220px;height:147px;"
                    >

                    <span class="description">新石器时代·红陶尖底瓶</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td width="194" valign="top" colspan="1" rowspan="1">
                <div class="para" label-module="para">高16.5厘米，口径39.8厘米。特制的葬具，仰韶彩陶文化代表器物。</div>
              </td>
              <td width="423" valign="top" colspan="1" rowspan="1">刻划符号远早于甲骨文，是汉字的雏形，对研究汉字起源研究意义重大。</td>
              <td
                width="232"
                valign="top"
                colspan="1"
                rowspan="1"
              >高41厘米，口径5.8厘米，是物理学重心原理和定倾中心法则最早运用。</td>
            </tr>
            <tr>
              <td width="194" valign="top" colspan="1" rowspan="1">
                <div class="para" label-module="para" style="text-align: center;">
                  <div
                    class="lemma-picture text-pic layout-center"
                    style="width:220px; float: none; display: block; margin: 0px auto; clear: both;"
                  >
                    <img
                      class
                      src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=9bd87b2843540923ae69647ca259d1dc/9345d688d43f8794b2abcd25d81b0ef41bd53a60.jpg"
                      alt="商·蛇首匕"
                      style="width:220px;height:147px;"
                    >

                    <span class="description">商·蛇首匕</span>
                  </div>
                </div>
              </td>
              <td width="423" valign="top" colspan="1" rowspan="1">
                <div class="para" label-module="para">
                  <div
                    class="lemma-picture text-pic layout-center"
                    style="width:220px; text-align: center; color: rgb(102, 102, 102); font-size: 12px; white-space: normal; cursor: move; float: none; display: block; margin: 0px auto; clear: both;"
                  >
                    <img
                      class
                      src="https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=ed488e3a2b3fb80e08d166d506d02ffb/6d81800a19d8bc3e5d9484c1888ba61ea8d34519.jpg"
                      alt="西周·列鼎列簋"
                      style="width:220px;height:146px;"
                    >

                    <span class="description">西周·列鼎列簋</span>
                  </div>
                </div>
              </td>
              <td width="232" valign="top" colspan="1" rowspan="1">
                <div class="para" label-module="para" style="text-align: center;">
                  <div
                    class="lemma-picture text-pic layout-center"
                    style="width:220px; float: none; display: block; margin: 0px auto; clear: both;"
                  >
                    <img
                      class
                      src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=53205465db09b3deefbfe36afcbe6cd3/7c1ed21b0ef41bd5a8001bf95bda81cb39db3d6f.jpg"
                      alt="西周·原始瓷罐"
                      style="width:220px;height:144px;"
                    >

                    <span class="description">西周·原始瓷罐</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td
                width="194"
                valign="top"
                colspan="1"
                rowspan="1"
              >长36厘米，器首蛇头形，匕身起脊，两面刃，锋端圆形，是青铜匕中的珍品。</td>
              <td width="423" valign="top" colspan="1" rowspan="1">
                周公在西周首都
                镐京制礼作乐，影响华夏三千余年，列鼎列簋就是
                周礼重要的表现形式。
              </td>
              <td width="232" valign="top" colspan="1" rowspan="1">
                <div class="para" label-module="para">陶器向瓷器过渡阶段的器物，在陶瓷发展史上有着重要的地位。</div>
              </td>
            </tr>
            <tr>
              <td width="194" valign="top" colspan="1" rowspan="1">
                <div class="para" label-module="para" style="text-align: center;">
                  <div
                    class="lemma-picture text-pic layout-center"
                    style="width:220px; float: none; display: block; margin: 0px auto; clear: both;"
                  >
                    <img
                      class
                      src="https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=cddd4ad75ee736d15c138b0aab514ffc/bd3eb13533fa828bd3cd99e8f71f4134960a5aca.jpg"
                      alt="西周·它盘"
                      style="width:220px;height:147px;"
                    >

                    <span class="description">西周·它盘</span>
                  </div>
                </div>
              </td>
              <td width="423" valign="top" colspan="1" rowspan="1">
                <div class="para" label-module="para" style="text-align: center;">
                  <div
                    class="lemma-picture text-pic layout-center"
                    style="width:220px; float: none; display: block; margin: 0px auto; clear: both;"
                  >
                    <img
                      class
                      src="https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=04850730d3f9d72a1364171fe42b282a/00e93901213fb80e652502d83cd12f2eb83894cc.jpg"
                      alt="西周·日己觥"
                      style="width:220px;height:149px;"
                    >

                    <span class="description">西周·日己觥</span>
                  </div>
                </div>
              </td>
              <td width="232" valign="top" colspan="1" rowspan="1">
                <div class="para" label-module="para" style="text-align: center;">
                  <div
                    class="lemma-picture text-pic layout-center"
                    style="width:220px; float: none; display: block; margin: 0px auto; clear: both;"
                  >
                    <img
                      class
                      src="https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=ae3af4279d2bd40746c7d4ff4b899e9c/377adab44aed2e732ccaec238d01a18b87d6fa9a.jpg"
                      alt="西周·日己方彝"
                      style="width:220px;height:148px;"
                    >

                    <span class="description">西周·日己方彝</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td width="194" valign="top" colspan="1" rowspan="1">
                <div class="para" label-module="para">通高14.1厘米，口径40.4厘米，腹深6.8厘米，重8.3公斤。盘腹刻“它”字族徽。</div>
              </td>
              <td width="469" valign="top" colspan="1" rowspan="1">通高32厘米，通长33.5厘米，腹深12厘米。器、盖同铭各18字。</td>
              <td
                width="232"
                valign="top"
                colspan="1"
                rowspan="1"
              >通高38.5厘米，重12.8公斤。以饕餮纹为主题纹饰，华美富丽，雄伟端庄。</td>
            </tr>
          </tbody>
        </table>
              <div class="clearfix">
                <ul class="pagination">
                  <li class="disabled pagination-first">
                    <a aria-label="Previous">
                      <span aria-hidden="true">首页</span>
                    </a>
                  </li>
                  <li class="disabled pagination-previous">
                    <a>上一页</a>
                  </li>
                  <li class="active pagination-current">
                    <a>1</a>
                  </li>
                  <li class="pagination-item">
                    <a href="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=2">2</a>
                  </li>
                  <li class="pagination-item">
                    <a href="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=3">3</a>
                  </li>
                  <li class="pagination-item">
                    <a href="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=4">4</a>
                  </li>
                  <li class="pagination-item">
                    <a href="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=5">5</a>
                  </li>
                  <li class="pagination-item">
                    <a href="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=6">6</a>
                  </li>
                  <li class="pagination-item">
                    <a href="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=7">7</a>
                  </li>
                  <li class="pagination-next">
                    <a href="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=2">下一页</a>
                  </li>
                  <li class="pagination-last">
                    <a
                      aria-label="Next"
                      href="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=13"
                    >
                      <span aria-hidden="true">末页</span>
                    </a>
                  </li>
                  <li>
                    <span>
                      转到：
                      <select onchange="location.href=this.value">
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=1 "
                          selected
                        >第1页</option>
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=2 "
                        >第2页</option>
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=3 "
                        >第3页</option>
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=4 "
                        >第4页</option>
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=5 "
                        >第5页</option>
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=6 "
                        >第6页</option>
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=7 "
                        >第7页</option>
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=8 "
                        >第8页</option>
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=9 "
                        >第9页</option>
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=10 "
                        >第10页</option>
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=11 "
                        >第11页</option>
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=12 "
                        >第12页</option>
                        <option
                          value="?id=8&amp;lang=zh-CN&amp;type=thumbnail&amp;size=&amp;page=13 "
                        >第13页</option>
                      </select>
                    </span>
                  </li>
                </ul>
              </div>
            
          </div>
        </div>
      </div>
    </div>
    <div>
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
  }
};
</script>
    <style lang="scss" scoped>
    div{
        display: block;
    }
.screen {
  width: 100%;
  height: 100%;
  overflow: scroll;
  background: #fff;
}
.wrap {
  border-top: 1px dashed #999;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  margin: 10px auto;
}
.navbar {
  margin-bottom: 0;
  border: none;
}

.left {
  width: 260px;
  float: left;
  padding: 20px;
  background-color: #fafafa;
}
.search-pannel{
height: 350px;
width: 300px;
border: 1px solid #999;
}
.search-pannel strong {
    display: inline-block;
    width: 90px;
    font-size: 16px;
    text-align: right;
    overflow: hidden;
}
div.search-title {
    text-align: left;
    font-weight: bold;
    font-size: 16px;
    padding: 0;
}
.search-pannel .lg-row {
    width: 100%;
    height: 25px;
    line-height: 25px;
    clear: both;
    padding: 10px 0;
    vertical-align: middle;
}
select {
    border-radius: 0px;
    border-color: rgb(169, 169, 169);
}
select {
    -webkit-appearance: menulist;
    box-sizing: border-box;
    align-items: center;
    white-space: pre;
    -webkit-rtl-ordering: logical;
    color: black;
    background-color: white;
    cursor: default;
    border-width: 1px;
    border-style: solid;
    border-color: initial;
    border-image: initial;
}
select{
    text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    margin: 0em;
    width: 120px;
    font: 400 13.3333px Arial;
}
.search-pannel div {
    height: 25px;
    margin: 20px;
    line-height: 25px;
    padding: 10px 0;
    white-space: nowrap;
    vertical-align: middle;
}
.search-pannel .lg-input {
    width: 100px;
    height: 25px;
}
.btn {
  border: none;
  color: black;
  height: 40px;
  width: 100%;
  background-color: #fafafa;
}
.content {
  margin-left: 500px;
  width:1000px;
}
.content .content-wrap {
    border-width: 0;
    margin: 0;
    padding: 0;
}
.current-location {
    background-color: #fafafa;
    height: 20px;
     margin-top: 30px; 
    margin-bottom: 2px;
    color: #666;
    vertical-align: middle;
    overflow: hidden;
    position: relative;
    font-size: 14px;
    line-height: 20px;
}
.current-location-warp {
    height: 20px;
    display: block;
}
.current-location i.home {
    display: inline-block;
    width: 20px;
    height: 20px;
    overflow: hidden;
    vertical-align: middle;
    margin: 0 5px;
    *display: inline;
    *zoom: 1;
    margin-left: 30px;
    background-position: 2px -22px;
}
.current-location i.arrow {
    display: inline-block;
    width: 20px;
    height: 20px;
    overflow: hidden;
    vertical-align: middle;
    margin: 0 5px;
    *display: inline;
    *zoom: 1;
    background: url(http://61.187.53.122/upload/img/2019/3/28/0fef28caf3a546d9a489971ce9a328ea.jpg_thumbnail/400x400.jpg) no-repeat -453px -70px;
}
.subbar{
  float:right;
  display: block;
}
table.table-view {
  border-collapse: collapse;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 12px;
  line-height: 22px;
  color: #000;
  clear: right;
  text-align: center;
}
tbody {
  clear: both;
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
td {
  padding: 2px 10px;
  font-size: 12px;
  line-height: 22px;
  height: 22px;
  border: 1px solid #e6e6e6;
}
table .para {
  font-size: 12px;
  text-indent: 0;
  margin: 0;
  height: auto;
}
element.style {
  width: 220px;
  float: none;
  display: block;
  margin: 0px auto;
  clear: both;
}
.lemma-picture {
  border: 1px solid #e0e0e0;
  overflow: hidden;
}
h1{
  margin: 30px;
}
.search-button{
  margin:0 auto;
  color: red;
  text-align: center
}
</style>
