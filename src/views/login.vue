<template>
  <div>
    <div class="bg"></div>
    <div class="logo-bar">
      <img src="../assets/images/logo.png">
    </div>
    <div class="loginbox">
      <div class="loginbg">
        <div class="login">
          <a class="reg pull-right blue mt10">注册新用户</a>
          <div class="tit">用户登录</div>
          <div class="hbb"></div>
          <div class="err mt20">
            <i class="ico ico_hint"></i>您输入的密码不正确！
          </div>
          <div class="mt20">
            <i class="ico ico_user" style="position: absolute;"></i>
            <input type="text" placeholder="无需登录">
          </div>
          <div class="mt20">
            <i class="ico ico_password" style="position: absolute;"></i>
            <input type="text" placeholder="顶级顶部导航栏即可">
          </div>
          <div class="mt20">
            <a class="forget pull-right">忘记密码?</a>
            <label class="sccheck">
              <input type="checkbox">
              <i></i>
              <span style="color: #333947;font-size: 12px;">记住密码</span>
            </label>
          </div>
          <div class="mt20">
            <a class="btn btn-default btn-block">登录</a>
          </div>
        </div>
      </div>
    </div>
    <div class="loginfot">
      SunCoder &copy;
      Copyright 1972-2972. All rights reserved
    </div>
  </div>
</template>
<script>

export default {
  name: "login"
};
</script>
<style>
body {
  overflow: hidden;
}
</style>

<style scoped>
/*********************登录页********************/
.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -8;
  overflow: hidden;
  background:url("../assets/images/loginbg.jpg") no-repeat center center;
}
.logo-bar {
  text-align: left;
  background-color: #fff;
}
.logo-bar img {
  background-color: #fff;
  margin-left: 15%;
}

.loginbox {
  position: relative;
  text-align: right;
  z-index: 9;
}

.loginbg {
  display: inline-block;
  width: 340px;
  margin-top: 5%;
  margin-right: 15%;
  padding: 5px;
  background: url("../assets/images/bg_black.png") repeat;
  text-align: left;
}

.login {
  position: relative;
  background-color: #fff;
  padding: 20px 30px;
}

.login .reg {
}

.login .tit {
  font-size: 18px;
  color: #333947;
  line-height: 40px;
  font-family: "Microsoft YaHei UI";
  font-weight: bold;
}
/*登录页*/
.ico_hint {
  width: 38px;
  height: 38px;
  background: url("../assets/images/slice/ico_hint.png") no-repeat;
}
.ico_user {
  width: 38px;
  height: 38px;
  background: url("../assets/images/slice/ico_user.png") no-repeat;
}
.ico_password {
  width: 38px;
  height: 38px;
  background: url("../assets/images/slice/ico_password.png") no-repeat;
}
.login .hbb {
  position: absolute;
  margin-left: -30px;
}

.login .err {
  border: 1px solid #fe6665;
  line-height: 38px;
  background-color: #feecec;
  color: #ff3d3d;
}

.login .forget {
  margin-top: 5px;
}

.login input[type="text"] {
  width: 100%;
  height: 38px;
  line-height: 34px;
  padding-left: 45px;
  border: 1px solid #d1d2d7;
}

.login input:focus {
  border: 1px solid #1998ff;
}

.login .btn {
  border: none;
  border-radius: 0;
  color: #ffffff;
  background-color: #1998ff;
}

.login .btn:hover {
  background-color: #239fff;
}

.login span {
  font-size: 18px;
  color: #ffffff;
  margin-top: 20px;
}

@media (max-width: 674px) {
  .loginbox {
    text-align: center;
  }

  .loginbg {
    margin-right: 0;
  }

  .logo-bar {
    text-align: center;
  }

  .logo-bar img {
    margin: 0;
  }
}

.loginfot {
  position: fixed;
  width: 100%;
  padding: 20px 0;
  bottom: 0;
  background-color: #333947;
  color: #d5d9e4;
  text-align: center;
}
</style>
