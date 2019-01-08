<template>
    <div class="testbar" v-show="isshow">
        <span style="color: #fff;font-size: 18px;">系统前端静态界面展示导航: </span>
        <!--测试条-->
        <button type="button" class="close" style="opacity: 1;color: #fff;" @click="isshow = false"><span>×</span></button>
        <br />
        <!-- <a type="button" class="btn" v-for="(name,url) of urls" :key="url">{{url}}{{name}}</a> -->
        <br />
        <router-link type="button" class="btn" v-for="(name,url) of urls" :key="url" :to="url">{{url}}{{name}}</router-link>
    </div>
</template>
<script>
export default {
    props:{
        ishow:{
            default:true
        }
    },
    mounted:function(){
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
<style scoped>
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
