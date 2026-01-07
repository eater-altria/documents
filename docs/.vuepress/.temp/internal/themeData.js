export const themeData = JSON.parse("{\"logo\":\"/logo.svg\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"博客\",\"link\":\"/posts/\"},{\"text\":\"关于\",\"link\":\"/get-started.html\"}],\"sidebar\":{\"/posts/\":[{\"text\":\"文章列表\",\"children\":[\"/posts/README.md\",\"/posts/如何在家打造自己的多媒体影视墙.md\",\"/posts/家用路由器组网指南.md\"]}]},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
