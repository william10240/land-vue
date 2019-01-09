<template>
  <div class="testbar" v-show="isshow">
    <span style="color: #fff;font-size: 18px;">系统前端静态界面展示导航:</span>
    <!--测试条-->
    <button type="button" class="close" style="opacity: 1;color: #fff;" @click="isshow = false">
      <span>×</span>
    </button>
    <router-link
      type="button"
      class="btn btn-default"
      active-class="btn-success"
      v-for="(name,url) of urls"
      :key="url"
      :to="url"
    >{{name}}</router-link>
    <div
      style="color: #fff;"
    >聚合页顶部条向下的三角有展开效果；主菜单有切换效果；列表页右上角"示例"按钮有弹出操作效果；详情页数字块和"收起"有互动效果；编辑页有美化控件效果radio和checkbox</div>
  </div>
</template>
<script>
export default {
  name: "testbar",
  props: {
    ishow: {
      default: true
    }
  },
  mounted: function() {
    this.isshow = this.ishow;
  },
  data() {
    return {
      isshow: true,

      urls: {
        index: "登陆页",
        t1: "聚合页",
        t2: "列表页",
        t3: "列表+二级菜单",
        t4: "详情页_单页",
        t5: "详情页_带菜单",
        t6: "编辑页"
      }
    };
  }
};
</script>
<style>
.btn {
  margin: 0px 2px;
}
.testbar {
  z-index: 1001;
  width: 100%;
  height: 70px;
  overflow: hidden;
  padding: 10px;
  background-color: #6f5499;
  background-image: linear-gradient(to bottom, #563d7c 0, #6f5499 100%);
}

.testbtns {
  display: block !important;
}

.logo-bar {
  margin-top: 70px;
}

.common-header {
  margin-top: 70px;
}

.common-side {
  margin-top: 70px;
}

.main {
  margin-top: 132px;
}

.mainfull {
  margin-top: 133px;
}
</style>
