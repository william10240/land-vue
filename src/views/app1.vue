<template>
    <div>
        <tBar></tBar>
        <h1>Hello</h1>
        <input type="text" v-model="iname" />
        <div>{{iname}}</div>
        <mName :name="iname"></mName>
    </div>
</template>
<script>
    import tBar from './testbar.vue';
    import mName from './name.vue';
    export default {
        components:{
            mName,
            tBar
        },
        data:function(){
            return {
                iname:'aa'
            }
        }
    }
</script>
<style scoped>
h1{
    color: #ff0000;
    }
</style>
