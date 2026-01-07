import comp from "/Users/altriayu/project/documents/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"关于我\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"关于我\",\"description\":\"Altria 的个人介绍\"},\"headers\":[{\"level\":2,\"title\":\"👋 你好，我是 Altria\",\"slug\":\"👋-你好-我是-altria\",\"link\":\"#👋-你好-我是-altria\",\"children\":[]},{\"level\":2,\"title\":\"💻 技术栈\",\"slug\":\"💻-技术栈\",\"link\":\"#💻-技术栈\",\"children\":[{\"level\":3,\"title\":\"前端开发\",\"slug\":\"前端开发\",\"link\":\"#前端开发\",\"children\":[]},{\"level\":3,\"title\":\"后端开发\",\"slug\":\"后端开发\",\"link\":\"#后端开发\",\"children\":[]}]},{\"level\":2,\"title\":\"🌟 关于我\",\"slug\":\"🌟-关于我\",\"link\":\"#🌟-关于我\",\"children\":[]}],\"git\":{\"updatedTime\":1767716620000,\"contributors\":[{\"name\":\"eater-altria\",\"username\":\"eater-altria\",\"email\":\"altriayu97@outlook.com\",\"commits\":2,\"url\":\"https://github.com/eater-altria\"}],\"changelog\":[{\"hash\":\"21c2392162fefcd749f1fc7ea4e4a54971edc957\",\"time\":1767716620000,\"email\":\"altriayu97@outlook.com\",\"author\":\"eater-altria\",\"message\":\"init repo\"},{\"hash\":\"13ca859d8222a17370b869b9b3e577719604a7c2\",\"time\":1767715282000,\"email\":\"altriayu97@outlook.com\",\"author\":\"eater-altria\",\"message\":\"init repo\"}]},\"filePathRelative\":\"get-started.md\"}")
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
