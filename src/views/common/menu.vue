<template>
    <div>this is menu</div>
</template>

<script>
    export default {
        name: "menu"
    }
</script>

<style scoped>
/*********************菜单********************/
.mainsub .common-side { margin-left: 180px; background: #fff; width: 120px; border-right: 1px solid #d9dade; }
.scnavsub { border-top: 1px solid #d9dade; }
.scnavsub li > a { display: block; padding: 12px 0 12px 25px; }
.scnavsub li:hover > a, .scnavsub li.active > a { padding-left: 20px; border-left: 5px solid #34A5FF; background-color: #E4E4E4; color: #34A5FF; }
.scnavsub li.scnavsub-header { height: 70px; line-height: 70px; padding: 0; border-bottom: 1px solid #BCBCBC; text-align: center; }
.scnav { }
.scnav .active .up { display: inline-block; }
.scnav .active .dw { display: none; }
.scnav li a { display: block; line-height: 40px; background-color: #404558; border-bottom: 1px solid #4F5467; color: #ffffff; padding-left: 22px; }
.scnav li a span { display: inline-block; line-height: 20px; margin-left: 20px; }
.scnav li.scnav-header a { font-size: 16px; color: #c3a066; height: 70px; line-height: 70px; background-color: #242833; padding-left: 20px; }
.scnav li .scnav-second-level { display: none; }
.scnav li.active .scnav-second-level { display: block; }
.scnav li .scnav-second-level a { background-color: #333949; border: none; }
.scnav li .scnav-second-level a span { margin-left: 40px; }
.scnav li a:hover, .scnav li .scnav-second-level a:hover { background-color: #33A5FE }
.scnav li.scnav-header a:hover { background-color: #242833; }
</style>