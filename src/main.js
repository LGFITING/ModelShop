import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';
import { Button } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Spinner } from 'mint-ui';
import Home from './components/Home.vue';
import Order from './components/Order.vue';
import Product from './components/Product.vue';
import Personal from './components/Personal.vue';
import Son from './components/Son.vue';
import Two from './components/Two.vue';
import VueLazyload from 'vue-lazyload'
require("!style-loader!css-loader!sass-loader!../static/App.scss");
require("!style-loader!css-loader!../static/style.css");
require("!style-loader!css-loader!../static/css/style.css");

Vue.use(VueRouter)
Vue.use(MintUI)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Navbar.name, Navbar);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Spinner.name, Spinner);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1994376176,269026991&fm=117&gp=0.jpg',
  loading: 'http://cdn.uehtml.com/201402/1392662591495_1140x0.gif',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
});
const router = new VueRouter({
    routes: [
      { path: '/home', component: Home },
      { path: '/order',component: Order},
      { path: '/personal',component: Personal},
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
