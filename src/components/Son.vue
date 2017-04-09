<template id="Son">
  <div class="son">
  <ul>
    <li>第一行</li>
    <li>第二行</li>
  </ul>
  <router-view keep-alive transition="fade" transition-mode='out-in'></router-view>

</div>
</template>
<script type="text/javascript">

</script>
<style media="screen">
 .son{
   border: 1px solid red;
   width:400px;
   height:400px;
 }
</style>
