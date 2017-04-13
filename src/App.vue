<template>
  <div id="app">

<div class="">
<my-banner></my-banner>
</div>
<mt-tabbar v-model="active">
  <mt-tab-item id="外卖">
    外卖
  </mt-tab-item>
  <mt-tab-item id="订单">
    订单
  </mt-tab-item>
  <mt-tab-item id="发现">
    发现
  </mt-tab-item>
</mt-tabbar>
<mt-tab-container v-model="active">
  <mt-tab-container-item id="外卖">
    <mt-cell v-for="n in 5" title="tab-container 1"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="订单">
    <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
  </mt-tab-container-item>
  <mt-tab-container-item id="发现">
    <mt-cell v-for="n in 5" title="tab-container 3"></mt-cell>
  </mt-tab-container-item>
</mt-tab-container>
    <router-view keep-alive transition="fade" transition-mode='out-in'  linkActiveClass></router-view>
  </div>
</template>

<script>
import banner from './components/Banner.vue';
export default {
  name: 'app',
  data () {
    return {
        selected:'外卖',
        active:''
    }
  },
  components:{
  'my-banner':banner
  },
  methods: {
  handleClick: function() {
    this.$toast('Hello world!')
  }
}
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
.router-link-active{
  color: #000;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
  padding: 0;
}
.banner{
  height:200px;
  width:100%;
}
.banner img{
  width: 100%;
  height: 100%;
}
.mint-navbar{


}
footer{
  position: absolute;
  margin-top: 0px;
  width:100%;
  height: 100px;
}
.fade-transition {
 transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
 opacity: 0;
}
</style>
