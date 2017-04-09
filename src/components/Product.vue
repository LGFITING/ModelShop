<template class="Product">
  <div class="wrapper">
  <div class="content-title">
    {{msg}}
  </div>
  <div class="menu">
    <ul>
      <li><router-link to="/product/son">子路由1</router-link></li>
      <li><router-link to="/product/two">子路由2</router-link></li>
    </ul>
    <router-view keep-alive transition="fade" transition-mode='out-in'  linkActiveClass></router-view>
  </div>
</div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return{
        msg:'博文记事'
      }
    }
  }
</script>
<style media="screen">
</style>
