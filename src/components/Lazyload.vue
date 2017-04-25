<template class="Order">
 <div>
   <div class="img-list">
     <ul id="container">
       <li v-for="(img,index) in list">
         <img v-lazy="img" :class="{'first' : index==0}">
       </li>
     </ul>
   </div>
 </div>
</template>

<script type="text/javascript">
  export default
  {
    data(){
      return{
        list: [
          'http://img3.imgtn.bdimg.com/it/u=576744370,645966527&fm=23&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=576744370,645966527&fm=23&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=576744370,645966527&fm=23&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=576744370,645966527&fm=23&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=576744370,645966527&fm=23&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=576744370,645966527&fm=23&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=576744370,645966527&fm=23&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=576744370,645966527&fm=23&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=576744370,645966527&fm=23&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=576744370,645966527&fm=23&gp=0.jpg',
          'http://img3.imgtn.bdimg.com/it/u=576744370,645966527&fm=23&gp=0.jpg',


          // you can customer any image's placeholder while loading or load failed
          {
            src: 'http://img3.imgtn.bdimg.com/it/u=576744370,645966527&fm=23&gp=0.jp',
            error: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1994376176,269026991&fm=117&gp=0.jpg',
            loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif'
          }
        ]
      }
    },
    mounted(){

    }
  }
</script>
<style scoped>
#container li{
  display: block;
}
img[lazy=loading] {
  width: 100%;
  display: table-cell; //主要是这个属性
  vertical-align: middle;
  text-align: center;
  margin:10px auto;
}
img[lazy=error] {
  width: 100%;
  display: table-cell; //主要是这个属性
  vertical-align: middle;
  text-align: center;
  margin:10px auto;
},
img[lazy=loaded] {
  width: 100%;
  display: table-cell; //主要是这个属性
  vertical-align: middle;
  text-align: center;
  margin:10px auto;
}
.first[lazy=loaded]{
    margin-top:-10px !important;
}
/*
or background-image
*/
.yourclass[lazy=loading] {
  /*your style here*/
}
.yourclass[lazy=error] {
  /*your style here*/
},
.yourclass[lazy=loaded] {
  /*your style here*/
}
</style>
