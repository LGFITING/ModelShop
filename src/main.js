import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import Product from './components/Product.vue';
import Son from './components/Son.vue';
import Two from './components/Two.vue';
require("!style-loader!css-loader!sass-loader!../static/App.scss");
require("!style-loader!css-loader!../static/style.css");
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [
      { path: '/home', component: Home },
      { path: '/product', component: Product,
        children:[{
          path:'son',
          component:Son
        },
        {
          path:'two',
          component:Two
        }
      ]
     }
    ]
})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
