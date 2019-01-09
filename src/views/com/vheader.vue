<template>
<!--头部开始-->
<div class="common-header">
    <!--左侧开始-->
    <div class="logo">
        <a><img src="../../assets/images/logo.png"></a>
    </div>
    <!--右侧开始-->
    <div class="user">
        <div class="app tip">
            <div><i class="ico phon"></i>手机端下载<span class="caret"></span></div>
            <div class="btns qrcode">
                <img src="../../assets/temp/1.1.png" width="100%">
            </div>
        </div>
        <div class="urls">
            <a href="#"><i class="ico nbgl"></i><br/>顶部菜单</a>
            <a href="#"><i class="ico zhgl"></i><br/>顶部菜单</a>
            <a href="#"><i class="ico htmb"></i><br/>顶部菜单</a>
            <a href="#"><i class="ico bjkj"></i><br/>顶部菜单</a>
        </div>
        <ul class="uinfo">
            <li><a href="#" class="avatar"><img src="../../assets/temp/ulogo.jpg"></a></li>
            <li class="tip name">
                <div>用户名<span class="caret"></span></div>
                <div class="btns">
                    <a href="#">个人中心</a>
                    <a href="#">退出登录</a>
                </div>
            </li>
            <li class="set"><a href="#">设置</a></li>
        </ul>
    </div>
</div>

</template><script>
export default {};
</script>
<style scoped>
/*********************头部********************/
.common-header { width: 100%; min-width: 1080px; padding: 0 15px; background-color: #fff; border-bottom: 1px solid #D9DADE;
    position: fixed; z-index: 999; top: 0; left: 0; }

.common-header .logo {
  float: left;
  height: 100%;
}

.common-header .logo .tit {
  font-size: 16px;
  font-weight: bold;
  vertical-align: middle;
}

.common-header .user {
  float: right;
}

.user > div,
.user > ul {
  float: left;
  border-left: 1px solid #e7e7e8;
}

.user .app > div:first-child {
  height: 62px;
  line-height: 62px;
  padding: 0 20px;
}

.user .app .caret {
  margin-left: 10px;
}

.user .app .qrcode {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px 2px #dcdce4;
}

.user .urls {
  border-left: 1px solid #e7e7e8;
  padding-left: 21px;
}

.user .urls a {
  display: inline-block;
  padding: 10px 21px 10px 0;
  text-align: center;
}

/**/
.user .uinfo {
  border-left: 1px solid #e7e7e8;
  padding-left: 20px;
  padding-right: 2px;
}

.user .uinfo > li {
  float: left;
  height: 38px;
  line-height: 38px;
  margin: 12px 0;
  border: 1px solid #d7d6db;
  border-right: none;
}

.user .uinfo > li a {
  display: block;
}

.user .uinfo .avatar img {
  vertical-align: top;
}

.user .uinfo .name > div:first-child {
  padding: 0 15px;
}

.user .uinfo .name .caret {
  margin-left: 20px;
}

.user .uinfo .set {
  border: 1px solid #d7d6db;
}

.user .uinfo .set a {
  padding: 0 20px;
}

</style>