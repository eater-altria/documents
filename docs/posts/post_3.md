---
title: 10分钟搭建自己的个人博客
date: 2026-01-09
author: Altria
categories:
  - 技术指南
tags:
  - 博客
  - CloudFlare
  - VuePress
  - 部署
  - 图床
  - Pages
description: 使用CloudFlare全家桶快速搭建个人博客，从域名购买到网站部署的完整教程
---

# 10分钟搭建自己的个人博客

如标题所示，这会是一次很简短的分享，10分钟的时间大家就能迅速搭建自己的个人博客、实现文章上床、图床、域名、https部署等等功能。

我们将使用CloudFlare全家桶实现上述的所有功能，体验CF的生态闭环。

## 购买域名

首先，我们需要先购买一个域名，非热门域名的价格普遍在每年100元以内，这将是我们唯一所需要的支出。

首先登录CloudFlare控制台，选择左侧的【域】，然后选择右侧的【购买域】

![image-20260109154411857](https://images.altriayu.uk/blog/image-20260109154411857.png)

然后输入自己感兴趣的域名点击搜索即可：

![image-20260109154553430](https://images.altriayu.uk/blog/image-20260109154553430.png)

找到自己想要的域名，点击确认，进入账单页面：

![image-20260109154734758](https://images.altriayu.uk/blog/image-20260109154734758.png)

添加自己的银行卡信息，经过测试，Visa、万事达等外币卡和银联信用卡都可以完成购买。

购买完成后，我们就可以在自己的【域】下看到域名了：

![image-20260109154912679](https://images.altriayu.uk/blog/image-20260109154912679.png)

## 创建代码仓库

我们选择用VuePress构建自己的博客网站，大家也可以选择其他的技术方案，这里不过多展开。这一步想必大家都不模式。我们快速略过，只讲一下基本步骤

**1. 创建VuePress项目**

```sh
pnpm create vuepress vuepress-starter
```

**2. 初始化项目**

```sh
git init
```

**3. 创建gitignore**

```
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# VuePress build output
docs/.vuepress/dist/
docs/.vuepress/.cache/
docs/.vuepress/.temp/

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# OS files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db
```

**4. 去Github创建代码仓库**

**5. 将代码推送到仓库上**

```sh
git remote add origin git@github.com:eater-altria/documents-test.git
git branch -M main
git push -u origin main
```

这样，我们就完成了一个基本的开发框架。



## 创建Pages应用

然后，我们回到控制台，展开【计算和AI】，选择【Workers和Pages】，然后点击创建应用程序

![image-20260109155014160](https://images.altriayu.uk/blog/image-20260109155014160.png)

然后选择【Continue with GitHub】：
![image-20260109160121314](https://images.altriayu.uk/blog/image-20260109160121314.png)

第一次连接GitHub需要授权登录，登录之后选择我们刚刚创建的那个仓库：

![image-20260109160311521](https://images.altriayu.uk/blog/image-20260109160311521.png)

点击下一步，填写一下构建和发布命令：

![image-20260109160552226](https://images.altriayu.uk/blog/image-20260109160552226.png)

以下几点需要注意：

- **项目名称**：项目名称随意填写
- **构建命令**：VuePress的默认构建命令是`npm run docs:build`，如果你采取其他技术方案，填写对应的构建命令即可。
- **部署命令**：我采取的部署命令是：`npx wrangler deploy --assets=./docs/.vuepress/dist --name="documents" --compatibility-date 2026-01-06`
  - --assets: 指定构建打包的静态文件的路径
  - --name: 和**项目名称**保持一致
  - --compatibility-date： 兼容性日期，这个命令我不太了解，但是参阅文档，填写当天的日期就行，后续CF建议开发者定期更新一下。

填写完成之后点击部署即可完成部署！

我们点开刚刚创建的Worker，点击【设置Tab】，可以看到它自动帮忙添加了一个域名：

![image-20260109161515699](https://images.altriayu.uk/blog/image-20260109161515699.png)

我们先测试一下能不能访问到，复制这个链接打开浏览器即可（公司网络需要开启网络加速，否则无法访问）。

然后我们使用自己的域名完成访问，选择【域和路由】右上角的【添加】，点击添加，然后选择自定义域，输入我们刚刚购买的域名的一个子域名，比如我购买了`shengzhen.uk`，那么我就输入了`documents.shengzhen.uk`，然后确定。

等待一分钟，让DNS刷新，然后我们访问这个域名，就能看到我们的网站了。

## 创建图床

图床我们也采用CloudFlare的服务，叫做R2存储

我们在右侧选择【存储和数据库】 --> 【R2对象存储】-->  【概述】，选择右上角的创建存储桶

![image-20260109163103783](https://images.altriayu.uk/blog/image-20260109163103783.png)

然后填写一些基本信息，位置记得选亚太地区：

![image-20260109163147748](https://images.altriayu.uk/blog/image-20260109163147748.png)

创建好了，我们点进设置：
![image-20260109163224415](https://images.altriayu.uk/blog/image-20260109163224415.png)

可以看到公共访问是禁用状态，让我们添加一个自定义域，和给Worker添加自定义域一样，我们命名为`images.shengzhen.uk`

添加自定义域之后，我们就顺便启用了公开访问。

然后我们在【对象】Tab下上传一张图片试试看，访问成功，完美。



## 结语

通过以上几个简单的步骤，我们就成功搭建了一个完整的个人博客网站。整个过程充分利用了CloudFlare的生态闭环，从域名购买、代码托管、静态网站部署到图床存储，全部在CloudFlare平台内完成，真正实现了"一站式"的建站体验。

现在你的博客已经具备了以下能力：

- ✅ **文章发布**：通过VuePress可以轻松编写和发布Markdown文章
- ✅ **图片托管**：R2存储提供了稳定可靠的图床服务
- ✅ **HTTPS支持**：CloudFlare自动为你的域名配置SSL证书
- ✅ **国内访问**：无需梯子即可在国内正常访问
- ✅ **自动部署**：代码推送到GitHub后自动触发部署，无需手动操作

整个搭建过程成本极低，除了域名费用（每年约100元）外，其他服务都在CloudFlare的免费额度内。如果你想要进一步优化，还可以考虑：

- 配置CloudFlare的CDN加速，提升访问速度
- 使用Workers添加更多动态功能
- 接入评论系统或统计工具
- 自定义主题和样式，打造独特的个人品牌

希望这篇教程能帮助你快速搭建属于自己的个人博客，开始你的内容创作之旅！

