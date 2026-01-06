<template><div><h1 id="关于我" tabindex="-1"><a class="header-anchor" href="#关于我"><span>关于我</span></a></h1>
<div class="about-me">
<div class="intro-card">
<h2 id="👋-你好-我是-altria" tabindex="-1"><a class="header-anchor" href="#👋-你好-我是-altria"><span>👋 你好，我是 Altria</span></a></h2>
<p>一名热爱编程的<strong>程序媛</strong>，专注于前端开发，同时也涉足后端技术。</p>
</div>
<div class="skills-section">
<h2 id="💻-技术栈" tabindex="-1"><a class="header-anchor" href="#💻-技术栈"><span>💻 技术栈</span></a></h2>
<div class="skill-category">
<h3 id="前端开发" tabindex="-1"><a class="header-anchor" href="#前端开发"><span>前端开发</span></a></h3>
<ul>
<li><strong>TypeScript</strong> - 类型安全的 JavaScript</li>
<li><strong>React</strong> - 构建用户界面的库</li>
<li><strong>Vue</strong> - 渐进式 JavaScript 框架</li>
</ul>
</div>
<div class="skill-category">
<h3 id="后端开发" tabindex="-1"><a class="header-anchor" href="#后端开发"><span>后端开发</span></a></h3>
<ul>
<li><strong>Golang</strong> - 简洁高效的编程语言</li>
<li><strong>Rust</strong> - 系统级编程语言，注重安全与性能</li>
</ul>
</div>
</div>
<div class="about-content">
<h2 id="🌟-关于我" tabindex="-1"><a class="header-anchor" href="#🌟-关于我"><span>🌟 关于我</span></a></h2>
<p>我是一名前端开发者，对技术充满热情。喜欢探索新技术，解决实际问题，并将经验分享给他人。</p>
<p>在这个博客中，我会分享：</p>
<ul>
<li>💡 技术学习心得</li>
<li>🛠️ 项目开发经验</li>
<li>📚 技术文档和教程</li>
<li>🎨 前端设计思考</li>
<li>🔧 工具和效率技巧</li>
</ul>
</div>
</div>
</div></template>



<style>
.about-me {
  max-width: 900px;
  margin: 0 auto;
}

.intro-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.3);
}

.intro-card h2 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.skills-section {
  margin: 2rem 0;
}

.skill-category {
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 1rem;
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  border-color: var(--vp-c-brand);
}

.skill-category h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: var(--vp-c-brand);
  font-size: 1.3rem;
}

.skill-category ul {
  list-style: none;
  padding-left: 0;
}

.skill-category li {
  padding: 0.5rem 0;
  color: var(--vp-c-text-1);
  font-size: 1rem;
}

.skill-category li strong {
  color: var(--vp-c-brand);
  font-weight: 600;
}

.about-content {
  background: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 12px;
  margin-top: 2rem;
  border-left: 4px solid var(--vp-c-brand);
}

.about-content h2 {
  margin-top: 0;
  color: var(--vp-c-text-1);
}

.about-content ul {
  list-style: none;
  padding-left: 0;
}

.about-content li {
  padding: 0.5rem 0;
  color: var(--vp-c-text-2);
  line-height: 1.8;
}
</style>