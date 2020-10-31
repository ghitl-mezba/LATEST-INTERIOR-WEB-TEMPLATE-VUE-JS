import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Gallery from './components/pages/Gallery'
import Home from './components/pages/Home'
import ProductDetail from './components/pages/ProductDetail'
import Videos from './components/pages/Videos'

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes:[
    { path:'/', component: Home },
    { path:'/about', component: About },
    { path:'/contact', component: Contact },
    { path:'/gallery', component: Gallery },
    { path:'/product-detail', component: ProductDetail },
    { path:'/videos', component: Videos },
  ],
  mode: 'history'
});



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
