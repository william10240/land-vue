<template>
  <div>
    <vheader></vheader>
    <vmenu></vmenu>
    this is t1
    <vfooter></vfooter>
  </div>
</template>
<script>
import vheader from "../views/com/vheader.vue";
import vmenu from "../views/com/vmenu.vue";
import vfooter from "../views/com/vfooter.vue";
export default {
  name: "t1",
  components: {
    vheader,
    vmenu,
    vfooter
  }
};
</script>
<style scoped>
</style>
