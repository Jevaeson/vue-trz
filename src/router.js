import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Item from './components/Item'
import Detail from './components/Detail'
import Platform from './components/Platform'
import Platformvip from './components/Platformvip'
import Platformviprule from './components/Platformviprule'
import Platformvipitem from './components/Platformvipitem'
import Platformifo from './components/Platformifo'
import Platformabout from './components/Platformabout'
import Platformtog from './components/Platformtog'
import Platformhelp from './components/Platformhelp'
import Fabu from './components/Fabu'
import Myitem from './components/Myitem'
import Collect from './components/Collect'
import Share from './components/Share'
import Myvip from './components/Myvip'
import Myfriend from './components/Myfriend'
import Apply from './components/Apply'
import Setting from './components/Setting'
import Me from './components/Me'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/item',
      component: Item
    },
    {
      path: '/item/:id',
      component: Detail
    },
    {
      path: '/platform',
      component: Platform
    },
    {
      path: '/platform/vip',
      component: Platformvip
    },
    {
      path: '/platform/viprule',
      component: Platformviprule
    },
    {
      path: '/platform/vipitem',
      component: Platformvipitem
    },
    {
      path: '/platform/ifo',
      component: Platformifo
    },
    {
      path: '/platform/about',
      component: Platformabout
    },
    {
      path: '/platform/tog',
      component: Platformtog
    },
    {
      path: '/platform/help',
      component: Platformhelp
    },
    {
      path: '/me',
      component: Me
    },
    {
      path: '/me/fabu',
      component: Fabu
    },
    {
      path: '/me/myitem',
      component: Myitem
    },
    {
      path: '/me/collect',
      component: Collect
    },
    {
      path: '/me/share',
      component: Share
    },
    {
      path: '/me/myvip',
      component: Myvip
    },
    {
      path: '/me/myfriend',
      component: Myfriend
    },
    {
      path: '/me/apply',
      component: Apply
    },
    {
      path: '/me/setting',
      component: Setting
    }
  ],
  mode: 'history'
})

export default router
