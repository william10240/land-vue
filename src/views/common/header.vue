<template>
    
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>
/*********************头部********************/
.common-header .logo { float: left; height: 100%; }
.common-header .logo .tit { font-size: 16px; font-weight: bold; vertical-align: middle; }
.common-header .user { float: right; }
.user > div, .user > ul { float: left; border-left: 1px solid #E7E7E8; }
.user .app > div:first-child { height: 62px; line-height: 62px; padding: 0 20px; }
.user .app .caret { margin-left: 10px; }
.user .app .qrcode { width: 100%; background-color: #fff; box-shadow: 0 0 10px 2px #DCDCE4; }
.user .urls { border-left: 1px solid #E7E7E8; padding-left: 21px; }
.user .urls a { display: inline-block; padding: 10px 21px 10px 0; text-align: center; }
/**/
.user .uinfo { border-left: 1px solid #E7E7E8; padding-left: 20px; padding-right: 2px; }
.user .uinfo > li { float: left; height: 38px; line-height: 38px; margin: 12px 0; border: 1px solid #D7D6DB; border-right: none; }
.user .uinfo > li a { display: block; }
.user .uinfo .avatar img { vertical-align: top; }
.user .uinfo .name > div:first-child { padding: 0 15px; }
.user .uinfo .name .caret { margin-left: 20px; }
.user .uinfo .set { border: 1px solid #D7D6DB; }
.user .uinfo .set a { padding: 0 20px; }
</style>