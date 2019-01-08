<template>
    <div>my name is {{name}}</div>
</template>
<script>
export default {
    props:{
        name:{
            type:String,
            required:true
        }
    },
    mounted(){
        this.innerName = this.name;
    },
    watch:{
        name(){
            console.log(this.name);
        }
    },
    data(){
        return {
            innerName:"123"
        }
    }
}
</script>
<style scoped>

</style>
