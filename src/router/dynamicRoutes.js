//动态路由

const dynamicRoutes=[
    {
        path: "/",
        name: "home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "../pages/Home"),
        children:[]
      },
      {
        path:"*",
        component: () =>
        import(/* webpackChunkName: "page404" */ "../pages/Page404"),
    
      }
]