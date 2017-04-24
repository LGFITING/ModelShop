<template>
  <div id="app">

    <router-view keep-alive transition="fade" transition-mode='out-in'  linkActiveClass></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
        list: [
          'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg',
          'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg',
          // you can customer any image's placeholder while loading or load failed
          {
            src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg',
            error: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1994376176,269026991&fm=117&gp=0.jpg',
            loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'
          }
        ]
        // imgUrl: [
        //           {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'},
        //           {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'},
        //           {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'},
        //           {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'},
        //           {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'},
        //           {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'},
        //           {src: 'http://pic.58pic.com/58pic/11/25/25/46j58PICKMh.jpg'}
        //         ]
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
  box-sizing: border-box;
}
.router-link-active{
  color: #4A8AF4;
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
  height:13rem;
  width:100%;
}
.banner img{
  width: 100%;
  height: 100%;
}
.mint-navbar{

}
a{
  text-decoration: none;
  color: gray;
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
.loading{
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
}

</style>
