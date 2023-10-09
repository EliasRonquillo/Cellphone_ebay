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
  {
    path: "/agregar",
    component: () => import("layouts/InicioLayout.vue"),
    children: [
      { path: "", component: () => import("pages/agregarCelular.vue") },
    ],
  },

  {
    path: "/inicio",
    component: () => import("layouts/InicioLayout.vue"),
    children: [{ path: "", component: () => import("pages/PaginaInicio.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
