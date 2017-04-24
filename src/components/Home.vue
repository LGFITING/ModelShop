<template class="Home">
  <div id="">
  <mt-spinner type="snake" color="#26a2ff" class="loading" :size="40" v-show="loading"></mt-spinner>
  <my-banner></my-banner>
  <div class="menu">
  <mt-tabbar v-model="active" fixed>
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
  <div class="hello">
  <ul>
    <li v-for="item in imgUrl" class="lazyImg">
      <img v-lazy="item.src" alt="" width="300" height="150"/>
    </li>
  </ul>
</div>
</div>
</template>
<script type="text/javascript">
import banner from './Banner.vue';
  export default{
    name: 'hello',
    data(){
      return{
        active:'home',
        loading:false,
        imgUrl: [
                  {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'},
                  {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'},
                  {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'},
                  {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'}
                ]
      }
    },
    components:{
    'my-banner':banner
    },
    beforeCreate(){
        console.log('渲染前');
        let vm = this;
        vm.loading = true;
    }
  }
</script>
<style scoped>

.Goods{
    width: 100%;
}
.page-lazyload-image{

}
.Goods img{
    width: 60%;
    display: table-cell; //主要是这个属性
    vertical-align: middle;
    text-align: center;
    margin: auto;
}


</style>
