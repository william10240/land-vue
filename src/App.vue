<template>
  <div>
    <testbar :ishow="true"></testbar>
    <router-view></router-view>
  </div>
</template>
<script>
import testbar from "./views/testbar.vue";
export default {
  components: {
    testbar
  }
};
</script>
<style>
/*公共*/
* { vertical-align: middle; }
body { background-color: #F0F1F3; }
a { font-size: 12px; color: #343434; text-decoration: none; cursor: pointer; }
a.blue { color: #1589FF; }
a:focus, a:hover { text-decoration: none; }
a.router-link-active {color: red;}
ul { margin: 0; padding: 0; }
li { list-style: none; }
em, i { font-style: normal; }
/*各种间距*/
.mg0 { margin: 0 !important; }
.mt10 { margin-top: 10px !important; }
.mb10 { margin-bottom: 10px !important; }
.ml10 { margin-left: 10px !important; }
.mr10 { margin-right: 10px !important; }
.mt20 { margin-top: 20px !important; }
.mb20 { margin-bottom: 20px !important; }
.ml20 { margin-left: 20px !important; }
.mr20 { margin-right: 20px !important; }
.pd0 { padding: 0 !important; }
.pt10 { padding-top: 10px !important; }
.pt20 { padding-top: 20px !important; }
.pl10 { padding-left: 10px !important; }
.pl20 { padding-left: 20px !important; }
.pb10 { padding-bottom: 10px !important; }
.pb20 { padding-bottom: 20px !important; }
.f14 { font-size: 14px; }
.f14b { font-size: 14px; font-weight: bold; }
.f16 { font-size: 16px; }
.f16b { font-size: 16px; font-weight: bold; }
/**0小图标**/
.ico { display: inline-block; vertical-align: middle; }
</style>
