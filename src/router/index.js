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
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: { title: '首页', icon: 'home' }
    }]
  },
  {
    path: '/apply/report',
    component: Layout,
    redirect: '/apply/report/workflow',
    name: 'apply',
    meta: { title: '发起申请', icon: 'table' },
    children: [{
      path: 'workflow',
      name: 'workflow',
      component: () => import('@/views/apply/report/workflow'),
      meta: { title: '发起申请', icon: 'table' }
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


  {
    path: '/escalice/user',
    component: Layout,
    redirect: '/escalice/shop/user_base_list',
    name: 'user',
    meta: { title: '用户管理', icon: 'user' },
    children: [
      {
        path: 'user_base_list',
        name: 'user_base_list',
        component: () => import('@/views/oms/user/userbase'),
        meta: { title: '个人信息', icon: 'product-list' }
      },
      {
        path: 'sys_user_list',
        name: 'sys_user_list',
        component: () => import('@/views/oms/order/setting'),
        meta: { title: '用户列表', icon: 'sms-subject' }
      },
      {
        path: 'add_user',
        name: 'add_user',
        component: () => import('@/views/oms/user/adduser'),
        meta: { title: '添加用户', icon: 'product-list' }
      }
    ]
  },


  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

