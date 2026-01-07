export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/altriayu/project/documents/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"某电子的 Altria 的部落格"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/Users/altriayu/project/documents/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"关于我"} }],
  ["/posts/", { loader: () => import(/* webpackChunkName: "posts_index.html" */"/Users/altriayu/project/documents/docs/.vuepress/.temp/pages/posts/index.html.js"), meta: {"title":"博客文章"} }],
  ["/posts/%E5%A6%82%E4%BD%95%E5%9C%A8%E5%AE%B6%E6%89%93%E9%80%A0%E8%87%AA%E5%B7%B1%E7%9A%84%E5%A4%9A%E5%AA%92%E4%BD%93%E5%BD%B1%E8%A7%86%E5%A2%99.html", { loader: () => import(/* webpackChunkName: "posts_如何在家打造自己的多媒体影视墙.html" */"/Users/altriayu/project/documents/docs/.vuepress/.temp/pages/posts/如何在家打造自己的多媒体影视墙.html.js"), meta: {"title":"如何在家打造自己的多媒体影视墙"} }],
  ["/posts/%E5%AE%B6%E7%94%A8%E8%B7%AF%E7%94%B1%E5%99%A8%E7%BB%84%E7%BD%91%E6%8C%87%E5%8D%97.html", { loader: () => import(/* webpackChunkName: "posts_家用路由器组网指南.html" */"/Users/altriayu/project/documents/docs/.vuepress/.temp/pages/posts/家用路由器组网指南.html.js"), meta: {"title":"家用路由器组网指南"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/altriayu/project/documents/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
