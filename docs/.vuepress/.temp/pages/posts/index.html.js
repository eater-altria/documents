import comp from "/Users/altriayu/project/vuepress-starter/docs/.vuepress/.temp/pages/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/posts/\",\"title\":\"博客文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"Blog\"},\"headers\":[{\"level\":2,\"title\":\"最新文章\",\"slug\":\"最新文章\",\"link\":\"#最新文章\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/README.md\"}")
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
