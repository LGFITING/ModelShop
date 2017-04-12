<template>
  <div id="app">
    <div>
       <mt-button @click.native="handleClick">按钮</mt-button>
    </div>
    <router-view keep-alive transition="fade" transition-mode='out-in'  linkActiveClass></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

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
