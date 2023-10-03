const routes = [
  /*
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  */
  {
    path: "/",
    component: () => import("layouts/InicioLayout.vue"),
    children: [{ path: "", component: () => import("pages/PaginaInicio.vue") }],
  },
  {
    path: "/detalle",
    component: () => import("layouts/InicioLayout.vue"),
    children: [
      { path: "", component: () => import("pages/detalleCelular.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
