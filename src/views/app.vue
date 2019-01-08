<template>
    <div>
        <h1>Hello</h1>
        <input type="text" v-model="iname" />
        <div>{{iname}}</div>
        <mName :name="iname"></mName>
    </div>
</template>
<script>
    import mName from './name.vue';
    export default {
        components:{
            mName
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
