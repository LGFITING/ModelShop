<template>
  <div id="app">
    <div>
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">收件箱</mt-tab-item>
        <mt-tab-item id="2">已发送</mt-tab-item>
        <mt-tab-item id="3">草稿箱</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'content ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'content ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'content ' + n" />
  </mt-tab-container-item>
</mt-tab-container>
    </div>
    <router-view keep-alive transition="fade" transition-mode='out-in'  linkActiveClass></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        selected:''
    }
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

.fade-transition {
 transition: opacity .3s ease;
}
.fade-enter, .fade-leave {
 opacity: 0;
}
</style>
