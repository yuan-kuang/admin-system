import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

    {
      path: '/order',
      component: Layout,
      meta: { title: '订单', icon: 'example' },
      children: [
        {
          path: 'orderList',
          name: 'orderList',
          component: () => import('@/views/order/orderList'),
          meta: { title: '订单列表', icon: 'dashboard' }
        },
        {
          path: 'orderSettings',
          component: () => import('@/views/order/orderSettings'),
          meta: { title: '订单设置', icon: 'table' },
        },
        {
          path: 'orderApply',
          component: () => import('@/views/order/orderApply'),
          meta: { title: '退货申请处理', icon: 'table' },
        },
        {
          path: 'orderReason',
          component: () => import('@/views/order/orderReason'),
          meta: { title: '退货原因处理', icon: 'table' },
        }
      ]
    },
  { path: '*', redirect: '/404', hidden: true }
]

// asyncRouterMap：需要进行权限过滤的页面
export const asyncRoutes = [
  {
    path: '/permission',
    component: Layout,
    redirect: '/permission/page',
    alwaysShow: true, // will always show the root menu
    name: 'Permission',
    meta: {
      title: 'Permission',
      icon: 'tree',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/permission/page'),
        name: 'PagePermission',
        meta: {
          title: 'Page Permission',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      },
      {
        path: 'directive',
        component: () => import('@/views/permission/directive'),
        name: 'DirectivePermission',
        meta: {
          title: 'Directive Permission'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

