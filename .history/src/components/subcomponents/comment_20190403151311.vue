<template>
  <div>
    <h3>发表评论</h3>
    <hr style="background-color:blue;height:1px;border:none;">
    <textarea placeholder="请输入要发表的内容(最多120字)" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户 : 匿名用户&nbsp;&nbsp;发表时间 : 2019-4-3 15-12-40
        </div>
        <div class="cmt-body"></div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>
