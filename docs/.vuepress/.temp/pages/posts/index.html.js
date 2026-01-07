import comp from "/Users/altriayu/project/documents/docs/.vuepress/.temp/pages/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/\",\"title\":\"博客文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"Blog\"},\"headers\":[{\"level\":2,\"title\":\"最新文章\",\"slug\":\"最新文章\",\"link\":\"#最新文章\",\"children\":[]}],\"git\":{\"updatedTime\":1767716620000,\"contributors\":[{\"name\":\"eater-altria\",\"username\":\"eater-altria\",\"email\":\"altriayu97@outlook.com\",\"commits\":1,\"url\":\"https://github.com/eater-altria\"}],\"changelog\":[{\"hash\":\"21c2392162fefcd749f1fc7ea4e4a54971edc957\",\"time\":1767716620000,\"email\":\"altriayu97@outlook.com\",\"author\":\"eater-altria\",\"message\":\"init repo\"}]},\"filePathRelative\":\"posts/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
