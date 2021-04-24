---
title: Butterfly 安裝文檔(二) 主題頁面
date: 2020-05-28 22:34:41
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
categories: 
- Docs文檔
keywords: 'hexo,butterfly,主題,doc,教程,文檔'
description: Butterfly安裝文檔-主題頁面
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-docs-02-cover.png
abbrlink: dc584b87
---

{% note blue 'fas fa-bullhorn' %}

 📖  本教程更新於 2021 年 03 月 30 日，教程的內容針對最新**穩定版**而更新（如果你是舊版，教程會有些出入，請留意）

 🦋  Butterfly 已經更新到 [3.7.1](https://github.com/jerryc127/hexo-theme-butterfly/releases/tag/3.7.1)

{% endnote %}

{% note green 'fas fa-rocket' %}

 📚  文檔目錄

{% post_link Butterfly-安裝文檔-一-快速開始 ' 🚀 快速開始' %} - {% post_link Butterfly-安裝文檔-二-主題頁面 ' 📑 主題頁面' %} - {% post_link Butterfly-安裝文檔-三-主題配置-1 ' 🛠 主題配置-1' %} - {% post_link Butterfly-安裝文檔-四-主題配置-2 ' ⚔️ 主題配置-2' %} - {% post_link Butterfly-安裝文檔-五-主題問答 ' ❓ 主題問答' %} - {% post_link Butterfly-安裝文檔-六-進階教程 ' ⚡️ 進階教程' %} - {% post_link Butterfly-安裝文檔-七-更新日誌 ' ✨ 更新日誌' %} - {% post_link Butterfly-打賞 ' 🤞 打賞' %}

{% endnote %}

{% note red 'fas fa-skull-crossbones' %}

如果有安裝這兩個插件的，請卸載掉，會導致主題報錯。 
[hexo-inject](https://github.com/hexojs/hexo-inject) 和 [hexo-neat](https://github.com/rozbo/hexo-neat)

{% endnote %}

***

## Front-matter

Front-matter 是檔案最上方以 `---` 分隔的區域，用於指定個別檔案的變數。

{% note info %}

如果標注`可選`的參數，可根據自己需要添加，不用全部都寫在markdown裏

{% endnote %}

### Page Front-matter

```markdown
---
title:
date:
updated:
type:
comments:
description:
keywords:
top_img:
mathjax:
katex:
aside:
aplayer:
highlight_shrink:
---
```

| 寫法             | 解釋                                                         |
| ---------------- | ------------------------------------------------------------ |
| title            | 【必需】頁面標題                                             |
| date             | 【必需】頁面創建日期                                         |
| type             | 【必需】標籤、分類和友情鏈接三個頁面需要配置                 |
| updated          | 【可選】頁面更新日期                                         |
| description      | 【可選】頁面描述                                             |
| keywords         | 【可選】頁面關鍵字                                           |
| comments         | 【可選】顯示頁面評論模塊(默認 true)                          |
| top_img          | 【可選】頁面頂部圖片                                         |
| mathjax          | 【可選】顯示mathjax(當設置mathjax的per_page: false時，才需要配置，默認 false) |
| katex            | 【可選】顯示katex(當設置katex的per_page: false時，才需要配置，默認 false) |
| aside            | 【可選】顯示側邊欄 (默認 true)                               |
| aplayer          | 【可選】在需要的頁面加載aplayer的js和css,請參考文章下面的`音樂` 配置 |
| highlight_shrink | 【可選】配置代碼框是否展開(true/false)(默認為設置中highlight_shrink的配置) |

### Post Front-matter

```markdown
---
title:
date:
updated:
tags:
categories:
keywords:
description:
top_img:
comments:
cover:
toc:
toc_number:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
---
```

| 寫法                  | 解釋                                                         |
| :-------------------- | ------------------------------------------------------------ |
| title                 | 【必需】文章標題                                             |
| date                  | 【必需】文章創建日期                                         |
| updated               | 【可選】文章更新日期                                         |
| tags                  | 【可選】文章標籤                                             |
| categories            | 【可選】文章分類                                             |
| keywords              | 【可選】文章關鍵字                                           |
| description           | 【可選】文章描述                                             |
| top_img               | 【可選】文章頂部圖片                                         |
| cover                 | 【可選】文章縮略圖(如果沒有設置top_img,文章頁頂部將顯示縮略圖，可設為false/圖片地址/留空) |
| comments              | 【可選】顯示文章評論模塊(默認 true)                          |
| toc                   | 【可選】顯示文章TOC(默認為設置中toc的enable配置)             |
| toc_number            | 【可選】顯示toc_number(默認為設置中toc的number配置)          |
| copyright             | 【可選】顯示文章版權模塊(默認為設置中post_copyright的enable配置) |
| copyright_author      | 【可選】文章版權模塊的`文章作者`                             |
| copyright_author_href | 【可選】文章版權模塊的`文章作者`鏈接                         |
| copyright_url         | 【可選】文章版權模塊的`文章連結`鏈接                         |
| copyright_info        | 【可選】文章版權模塊的`版權聲明`文字                         |
| mathjax               | 【可選】顯示mathjax(當設置mathjax的per_page: false時，才需要配置，默認 false) |
| katex                 | 【可選】顯示katex(當設置katex的per_page: false時，才需要配置，默認 false) |
| aplayer               | 【可選】在需要的頁面加載aplayer的js和css,請參考文章下面的`音樂` 配置 |
| highlight_shrink      | 【可選】配置代碼框是否展開(true/false)(默認為設置中highlight_shrink的配置) |
| aside                 | 【可選】顯示側邊欄 (默認 true)                               |

## 標籤頁

1. 前往你的 Hexo 博客的根目錄

2. 輸入`hexo new page tags`

3. 你會找到`source/tags/index.md`這個文件

4. 修改這個文件：

   **記得添加 `type: "tags"`**

```markdown
---
title: 標籤
date: 2018-01-05 00:00:00
type: "tags"
---
```

## 分類頁

1. 前往你的 Hexo 博客的根目錄

2. 輸入`hexo new page categories`

3. 你會找到`source/categories/index.md`這個文件

4. 修改這個文件：

   **記得添加 `type: "categories"`**

```markdown
---
title: 分類
date: 2018-01-05 00:00:00
type: "categories"
---
```

## 友情鏈接

為你的博客創建一個友情鏈接！

### 創建友情鏈接頁面

1. 前往你的 Hexo 博客的根目錄

2. 輸入 `hexo new page link`

3. 你會找到`source/link/index.md`這個文件

4. 修改這個文件：

   記得添加 `type: "link"`

```markdown
---
title: 友情鏈接
date: 2018-06-07 22:17:49
type: "link"
---
```

### 友情鏈接添加

在Hexo博客目錄中的`source/_data`（如果沒有 _data 文件夾，請自行創建），創建一個文件`link.yml`

```yml
- class_name: 友情鏈接
  class_desc: 那些人，那些事
  link_list:
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、簡單且強大的網誌框架

- class_name: 網站
  class_desc: 值得推薦的網站
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: 視頻網站
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: 中國最大社交分享平台
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: 社交分享平台
```

`class_name`和`class_desc`支持html格式書寫，如不需要，也可以留空。

### 友情鏈接界面設置

由 2.2.0 起，友情鏈接界面可以由用户自己自定義，只需要在友情鏈接的md檔設置就行，以普通的Markdown格式書寫。

## 圖庫

圖庫頁面只是普通的頁面，你只需要`hexo n page xxxxx` 創建你的頁面就行

然後使用標簽外掛 [galleryGroup](https://butterfly.js.org/posts/4aa8abbe/#Gallery%E7%9B%B8%E5%86%8A%E5%9C%96%E5%BA%AB)，具體用法請查看對應的內容。

```yaml
<div class="gallery-group-main">
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '關於漫威的圖片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '關於OH MY GIRL的圖片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>
```

<div class="gallery-group-main">
{% galleryGroup '壁紙' '收藏的一些壁紙' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup '漫威' '關於漫威的圖片' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' '關於OH MY GIRL的圖片' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

### 子頁面

子頁面也是普通的頁面，你只需要`hexo n page xxxxx` 創建你的頁面就行

然後使用標簽外掛 [gallery](/posts/4aa8abbe/#Gallery%E7%9B%B8%E5%86%8A)，具體用法請查看對應的內容。

```yaml
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}
```

{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

{% note pink 'fas fa-sitemap' %}

如果你想要使用 `/photo/ohmygirl` 這樣的鏈接顯示你的圖片內容

你可以把創建好的 `ohmygirl`整個文件夾移到 `photo`文件夾裏去

{% endnote %}

## 404頁面

主題內置了一個簡單的404頁面，可在設置中開啟

{% note info %}

本地預覽時，訪問出錯的網站是不會跳到404頁面的。

如需本地預覽，請訪問`http://localhost:4000/404.html`

{% endnote %}

```yaml
# A simple 404 page
error_404:
  enable: true
  subtitle: "頁面沒有找到"
  background: 
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-error404.png)

{% btn '/posts/4aa8abbe/',🛠 Butterfly 安裝文檔(三) 主題配置,far fa-hand-point-right,block pink right larger %}