import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  // { path: '/404', component: () => import('@/views/404'), hidden: true },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    name: 'home',
    children: [{
      path: 'home',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', icon: 'home' }
    }]
  },
  {
    path: '/escalice/report',
    component: Layout,
    redirect: '/escalice/report/workflow_qjsq',
    name: 'report',
    meta: { title: '申请详情', icon: 'total-week' },
    children: [
      {
        path: 'workflow_qjsq',
        name: 'workflow_qjsq',
        component: () => import('@/views/oms/report/workflow-QJ'),
        meta: { title: '请假申请', icon: 'sms-hot' }
      },
      {
        path: 'workflow_hdsq',
        name: 'workflow_hdsq',
        component: () => import('@/views/oms/report/workflow-HD'),
        meta: { title: '活动申请', icon: 'form' }
      },
      {
        path: 'workflow_kssq',
        name: 'workflow_kssq',
        component: () => import('@/views/oms/report/workflow-KS'),
        meta: { title: '课室申请', icon: 'form' }
      },
      {
        path: 'workflow_qtsq',
        name: 'workflow_qtsq',
        component: () => import('@/views/oms/report/workflow-QT'),
        meta: { title: '其他申请', icon: 'form' }
      }
    ]
  },

  // {
  //   path: '/promotion/shop',
  //   component: Layout,
  //   redirect: '/promotion/shop/shop_base_list',
  //   name: 'shop',
  //   meta: {title: '门店管理', icon: 'order'},
  //   children: [
  //     {
  //       path: 'shop_base_list',
  //       name: 'shop_base_list',
  //       component: () => import('@/views/oms/order/index'),
  //       meta: {title: '门店列表', icon: 'product-list'}
  //     },
  //     {
  //       path: 'shop_type_list',
  //       name: 'shop_type_list',
  //       component: () => import('@/views/oms/apply/reason'),
  //       meta: {title: '门店类型', icon: 'order-return-reason'}
  //     }
  //   ]
  // },


  {
    path: '/escalice/user',
    component: Layout,
    redirect: '/escalice/shop/user_base_list',
    name: 'user',
    meta: { title: '人员管理', icon: 'user' },
    children: [
      {
        path: 'user_base_list',
        name: 'user_base_list',
        component: () => import('@/views/oms/user/userbase'),
        meta: { title: '人员列表', icon: 'product-list' }
      },
      {
        path: 'sys_user_list',
        name: 'sys_user_list',
        component: () => import('@/views/oms/order/setting'),
        meta: { title: '系统人员', icon: 'sms-subject' }
      }
    ]
  },

  // {
  //   path: '/promotion/sale',
  //   component: Layout,
  //   redirect: '/promotion/sale/coupon_list',
  //   name: 'sale',
  //   meta: {title: '营销管理', icon: 'sms-coupon'},
  //   children: [
  //     {
  //       path: 'coupon_list',
  //       name: 'coupon_list',
  //       component: () => import('@/views/oms/apply/index'),
  //       meta: {title: '折扣列表', icon: 'order-return'}
  //     },
  //     {
  //       path: 'pre_order_list',
  //       name: 'pre_order_list',
  //       component: () => import('@/views/oms/preorder/preshop'),
  //       meta: {title: '预定管理', icon: 'sms-flash'}
  //     }
  //   ]
  // },
  //
  // {
  //   path: '/promotion/sale',
  //   component: Layout,
  //   redirect: '/promotion/post/coupon_list',
  //   name: 'post',
  //   meta: {title: '社区管理', icon: 'example'},
  //   children: [
  //     {
  //       path: 'coupon_list',
  //       name: 'coupon_list',
  //       component: () => import('@/views/oms/apply/index'),
  //       meta: {title: '帖子管理', icon: 'order'}
  //     },
  //     {
  //       path: 'pre_order_list',
  //       name: 'pre_order_list',
  //       component: () => import('@/views/oms/preorder/preshop'),
  //       meta: {title: '专题推荐', icon: 'sms-ad'}
  //     }
  //   ]
  // },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

