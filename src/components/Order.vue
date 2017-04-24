<template class="Order">
 <div>
   <mt-spinner type="snake" color="#26a2ff" class="loading" :size="40" v-show="loading"></mt-spinner>
   <mt-tabbar  v-model="active">
     <mt-tab-item id="home">
       <router-link to="/home">home</router-link>
     </mt-tab-item>
     <mt-tab-item id="orders">
       <router-link to="/order">orders</router-link>
     </mt-tab-item>
     <mt-tab-item id="personal">
         <router-link to="/personal">personal</router-link>
     </mt-tab-item>
   </mt-tabbar>
 </div>
</template>

<script type="text/javascript">
  export default
  {
    data(){
      return{
        loading:true,
        active:'orders'
      }
    },
    mounted(){

    }
  }
</script>
<style scoped>

</style>
