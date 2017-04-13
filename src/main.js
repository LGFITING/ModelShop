import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MintUI from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui';
import { Button } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import Home from './components/Home.vue';
import Product from './components/Product.vue';
import Son from './components/Son.vue';
import Two from './components/Two.vue';
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
