<template>
  <div id="app">
<header>
  <mt-swipe :auto="4000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
</header>
    <router-view keep-alive transition="fade" transition-mode='out-in'  linkActiveClass></router-view>
  </div>
</template>

<script>
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'app',
  data () {
    return {

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

.fade-transition {
 transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
 opacity: 0;
}
</style>
