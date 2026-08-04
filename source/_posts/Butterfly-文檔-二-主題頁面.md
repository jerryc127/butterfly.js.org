---
title: Butterfly 文檔(二) 主題頁面
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
cover: https://oss.012700.xyz/butterfly/2024/09/Butterfly-docs-02-cover.png
abbrlink: dc584b87
comments: false
series: docs
---

{% note green 'fas fa-rocket' %}

📚 文檔目錄

{% post_link Butterfly-文檔-一-快速開始 ' 🚀 快速開始' %} - {% post_link Butterfly-文檔-二-主題頁面 ' 📑 主題頁面' %} - {% post_link Butterfly-文檔-三-主題配置 ' 📌 主題配置' %} - {% post_link Butterfly-文檔-四-標簽外掛 ' ⚔️ 標簽外掛' %} - {% post_link Butterfly-文檔-五-主題問答 ' ❓ 主題問答' %} - {% post_link Butterfly-文檔-六-進階教程 ' ⚡️ 進階教程' %}

{% endnote %}

{% note orange 'fas fa-magic' %}

你可以通過右下角的 **簡** 按鈕切換為簡體顯示

{% endnote %}

---

## Front-matter

**Front-matter 是 markdown 文件最上方以 `---` 分隔的區域，用於指定個別檔案的變數。**

- Page Front-matter 用於 `頁面` 配置
- Post Front-matter 用於 `文章頁` 配置

{% note info %}

如果標注`可選`的參數，可根據自己需要添加，不用全部都寫在 markdown 裏

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
highlight_shrink:
random:
limit:
  type:
  value:
---
```

| 參數             | 解釋                                                                                |
| ---------------- | ----------------------------------------------------------------------------------- |
| title            | 【必需】頁面標題                                                                    |
| date             | 【必需】頁面創建日期                                                                |
| type             | 【必需】標籤、分類和友情鏈接三個頁面需要配置                                        |
| updated          | 【可選】頁面更新日期                                                                |
| description      | 【可選】頁面描述                                                                    |
| keywords         | 【可選】頁面關鍵字                                                                  |
| comments         | 【可選】顯示頁面評論模塊 (默認 true)                                                |
| top_img          | 【可選】頁面頂部圖片                                                                |
| mathjax          | 【可選】顯示 mathjax (當設置 mathjax 的 per_page: false 時，才需要配置，默認 false) |
| katex            | 【可選】顯示 katex (當設置 katex 的 per_page: false 時，才需要配置，默認 false)     |
| aside            | 【可選】顯示側邊欄 (默認 true)                                                      |
| highlight_shrink | 【可選】配置代碼框是否展開 (true/false) (默認為設置中 highlight_shrink 的配置)      |
| random           | 【可選】配置友情鏈接是否隨機排序（默認為 false）                                     |
| limit            | 【可選】配置説説顯示數量                                                        |
| limit.type       | 【可選】配置説説顯示數量的類型 （date 或者 num）                                    |
| limit.value      | 【可選】配置説説顯示數量的值                                      |

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
toc_style_simple:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
highlight_shrink:
aside:
abcjs:
noticeOutdate:
---
```

| 寫法                  | 解釋                                                                                        |
| :-------------------- | ------------------------------------------------------------------------------------------- |
| title                 | 【必需】文章標題                                                                            |
| date                  | 【必需】文章創建日期                                                                        |
| updated               | 【可選】文章更新日期                                                                        |
| tags                  | 【可選】文章標籤                                                                            |
| categories            | 【可選】文章分類                                                                            |
| keywords              | 【可選】文章關鍵字                                                                          |
| description           | 【可選】文章描述                                                                            |
| top_img               | 【可選】文章頂部圖片                                                                        |
| cover                 | 【可選】文章縮略圖(如果沒有設置 top_img,文章頁頂部將顯示縮略圖，可設為 false/圖片地址/留空) |
| comments              | 【可選】顯示文章評論模塊(默認 true)                                                         |
| toc                   | 【可選】顯示文章 TOC(默認為設置中 toc 的 enable 配置)                                       |
| toc_number            | 【可選】顯示 toc_number(默認為設置中 toc 的 number 配置)                                    |
| toc_style_simple      | 【可選】顯示 toc 簡潔模式                                                                   |
| copyright             | 【可選】顯示文章版權模塊(默認為設置中 post_copyright 的 enable 配置)                        |
| copyright_author      | 【可選】文章版權模塊的`文章作者`                                                            |
| copyright_author_href | 【可選】文章版權模塊的`文章作者`鏈接                                                        |
| copyright_url         | 【可選】文章版權模塊的`文章連結`鏈接                                                        |
| copyright_info        | 【可選】文章版權模塊的`版權聲明`文字                                                        |
| mathjax               | 【可選】顯示 mathjax(當設置 mathjax 的 per_page: false 時，才需要配置，默認 false )         |
| katex                 | 【可選】顯示 katex (當設置 katex 的 per_page: false 時，才需要配置，默認 false )            |
| highlight_shrink      | 【可選】配置代碼框是否展開(true/false)(默認為設置中 highlight_shrink 的配置)                |
| aside                 | 【可選】顯示側邊欄 (默認 true)                                                              |
| abcjs                 | 【可選】加載 abcjs (當設置 abcjs 的 per_page: false 時，才需要配置，默認 false )            |
| noticeOutdate         | 【可選】文章過期提醒 (默認為設置中 noticeOutdate 的 enable 配置)                           |

## 標籤頁

{% note info %}
標籤頁文件名不一定是 tags, 例子中的 tags 只是一個示例
記得添加 `type: "tags"`
{% endnote %}

1. 前往你的 Hexo 的根目錄

2. 輸入 `hexo new page tags`

3. 你會找到 `source/tags/index.md` 這個文件

4. 修改這個文件：

```markdown
---
title: 標籤
date: 2018-01-05 00:00:00
type: 'tags'
orderby: random
order: 1
---
```

| 參數    | 解釋                                                                                    |
| ------- | --------------------------------------------------------------------------------------- |
| type    | 【必須】頁面類型，必須為 `tags`                                                         |
| orderby | 【可選】排序方式 ：</br>random - 隨機排序 / name - 標簽名字排序 / length - 標簽數量排序 |
| order   | 【可選】排序次序： 1（升序），-1（降序）                                                |

## 分類頁

{% note info %}
分類頁文件名不一定是 categories, 例子中的 categories 只是一個示例
記得添加 `type: "categories"`
{% endnote %}

1. 前往你的 Hexo 的根目錄

2. 輸入 `hexo new page categories`

3. 你會找到 `source/categories/index.md` 這個文件

4. 修改這個文件：

```markdown
---
title: 分類
date: 2018-01-05 00:00:00
type: 'categories'
---
```

## 友情鏈接

為你的博客創建一個友情鏈接！

### 創建友情鏈接頁面

{% note info %}
友情鏈接頁文件名不一定是 link, 例子中的 link 只是一個示例
記得添加 `type: "link"`
{% endnote %}

1. 前往你的 Hexo 的根目錄

2. 輸入 `hexo new page link`

3. 你會找到 `source/link/index.md` 這個文件

4. 修改這個文件：

```markdown
---
title: 友情鏈接
date: 2018-06-07 22:17:49
type: 'link'
---
```

### 數據來源

{% tabs flink-add %}

<!-- tab 本地生成 -->

在 Hexo 根目錄中的 `source/_data`（如果沒有 \_data 文件夾，請自行創建），創建一個文件 `link.yml`

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

`class_name` 和 `class_desc` 支持 html 格式書寫，如不需要，也可以留空。

<!-- endtab -->

<!-- tab 遠程拉取 -->

從 `4.0.0` 開始，支持從遠程加載友情鏈接，遠程拉取只支持 `json`。

{% note warning %}
注意： 選擇遠程加載後，本地生成的方法會無效。
{% endnote %}

在 `source/link/index.md` 這個文件的 front-matter 添加遠程鏈接

```markdown
flink_url: xxxxx
```

Json 的格式

```json
[
  {
    "class_name": "友情鏈接",
    "class_desc": "那些人，那些事",
    "link_list": [
      {
        "name": "Hexo",
        "link": "https://hexo.io/zh-tw/",
        "avatar": "https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg",
        "descr": "快速、簡單且強大的網誌框架"
      }
    ]
  },
  {
    "class_name": "網站",
    "class_desc": "值得推薦的網站",
    "link_list": [
      {
        "name": "Youtube",
        "link": "https://www.youtube.com/",
        "avatar": "https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png",
        "descr": "視頻網站"
      },
      {
        "name": "Weibo",
        "link": "https://www.weibo.com/",
        "avatar": "https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png",
        "descr": "中國最大社交分享平台"
      },
      {
        "name": "Twitter",
        "link": "https://twitter.com/",
        "avatar": "https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png",
        "descr": "社交分享平台"
      }
    ]
  }
]
```

<!-- endtab -->

{% endtabs %}

### 友情鏈接隨機排序

主題支持友情鏈接隨機排序，只需要在頂部 `front-matter` 添加 `random: true`

### 友情鏈接界面設置

由 2.2.0 起，友情鏈接界面可以由用户自己自定義，只需要在友情鏈接的 Markdown 檔設置就行，以普通的 Markdown 格式書寫。

## 圖庫

圖庫頁面只是普通的頁面，你只需要 `hexo n page xxxxx` 創建你的頁面就行

然後使用標簽外掛 [galleryGroup](/posts/ceeb73f/#Gallery-相冊圖庫)，具體用法請查看對應的內容。

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

子頁面也是普通的頁面，你只需要 `hexo n page xxxxx` 創建你的頁面就行

然後使用標簽外掛 [gallery](/posts/ceeb73f/#Gallery%E7%9B%B8%E5%86%8A)，具體用法請查看對應的內容。

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

你可以把創建好的 `ohmygirl` 整個文件夾移到 `photo` 文件夾裏去

{% endnote %}

## 404 頁面

主題內置了一個簡單的 404 頁面，可在設置中開啟

{% note info %}

本地預覽時，訪問出錯的網站是不會跳到 404 頁面的。

如需本地預覽，請訪問 `http://localhost:4000/404.html`

{% endnote %}

```yaml
# A simple 404 page
error_404:
  enable: true
  subtitle: '頁面沒有找到'
  background:
```

![hexo-theme-butterfly-docs-error404.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-error404.png)

## 説説頁面

{% note pink 'fa-solid fa-bell' %}
添加于 V5.0
{% endnote %}

**請留意，説説界面只支持原生的 markdown 格式，不支持標簽外挂和數學公式**

### 創建説説頁面

{% note info %}

説説頁文件名不一定是 shuoshuo, 例子中的 shuoshuo 只是一個示例
記得添加 `type: "shuoshuo"`

{% endnote %}

1. 前往你的 Hexo 的根目錄

2. 輸入 `hexo new page shuoshuo`

3. 你會找到 `source/shuoshuo/index.md` 這個文件

4. 修改這個文件：

```markdown
---
title: 説説
date: 2018-06-07 22:17:49
type: 'shuoshuo'
---
```

你可以隱藏一些説説，可配置的參數：

```markdown
limit:
  type: date
  value: 2024-06-20
```

| 參數             | 解釋                                                                                |
| ---------------- | ----------------------------------------------------------------------------------- |
| limit            | 【可選】配置説説顯示數量                                                        |
| limit.type       | 【可選】配置説説顯示數量的類型 （date 或者 num）                                    |
| limit.value      | 【可選】配置説説顯示數量的值 （當 type 配置為 date 時， value 的值必須為日期。當 type 配置為 num 時， value 的值必須為數字，且大於 0                                     |

### 數據來源

{% tabs shuoshuo-add %}

<!-- tab 本地生成 -->

在 Hexo 根目錄中的 `source/_data`（如果沒有 \_data 文件夾，請自行創建），創建一個文件 shuoshuo.yml

{% note blue 'fa-solid fa-user' %}
`author` 和 `avatar`可省略，會自動去獲取配置文件中的 `author` 和 `avatar`

如果需要開啓評論，必須配置 `key`，否則不會顯示評論按鈕
{% endnote %}

```yaml
- author: Butterfly
  avatar: https://butterfly.js.org/img/avatar.png
  date: 2024-06-21 23:33:26
  key: key-1
  content: |
    This is a sample content for **Author 1**.
    ![Sample Image](https://via.placeholder.com/150)
  tags:
    - tags1
    - tags2
- author: Butterfly
  avatar: https://butterfly.js.org/img/avatar.png
  date: 2024-06-20 23:33:26
  key: key-2
  content: |
    This is a sample content for **Author 2**.
    ![Sample Image](https://via.placeholder.com/150)
  tags:
    - tag2
    - tag3

- author: Butterfly
  avatar: https://butterfly.js.org/img/avatar.png
  date: 2024-06-19 23:33:26
  key: key-3
  content: |
    This is a sample content for **Author 3**.
```

| 參數    | 解釋                                       |
| ------- | ------------------------------------------ |
| author  | 【可選】作者名稱                           |
| avatar  | 【可選】作者頭像                           |
| date    | 【必需】日期                               |
| content | 【必需】內容（ Markdown 格式或者 Html 格式 |
| key     | 【可選】評論的唯一標識, 開啓評論必須配置                          |
| tags    | 【可選】標籤                               |

<!-- endtab -->

<!-- tab 遠程拉取 -->

{% note warning %}
注意： 選擇遠程加載後，本地生成的方法會無效。
遠程拉取只支持 `json`
{% endnote %}

在説説頁面 Markdown 裏的 front-matter 添加遠程鏈接

```markdown
shuoshuo_url: xxxxx
```

Json 的格式：

{% note blue 'fa-solid fa-user' %}
`author` 和 `avatar`可省略，會自動去獲取配置文件中的 `author` 和 `avatar`
{% endnote %}

```json
[
  {
    "author": "Butterfly",
    "avatar": "https://butterfly.js.org/img/avatar.png",
    "date": "2024-06-21 23:33:26",
    "content": "This is a sample content for **Author 1**.",
    "key": "key-1",
    "tags": ["tags1", "tags2"]
  },
  {
    "author": "Butterfly",
    "avatar": "https://butterfly.js.org/img/avatar.png",
    "date": "2024-06-20 23:33:26",
    "content": "This is a sample content for **Author 2**.",
    "key": "key-2",
    "tags": ["tag2", "tag3"]
  },
  {
    "author": "Butterfly",
    "avatar": "https://butterfly.js.org/img/avatar.png",
    "date": "2024-06-19 23:33:26",
    "content": "This is a sample content for **Author 3**."
  }
]
```

| 參數    | 解釋                                       |
| ------- | ------------------------------------------ |
| author  | 【可選】作者名稱                           |
| avatar  | 【可選】作者頭像                           |
| date    | 【必需】日期                               |
| content | 【必需】內容（ Markdown 格式或者 Html 格式 |
| key     | 【可選】評論的唯一標識, 開啓評論必須配置                          |
| tags    | 【可選】標籤                               |

<!-- endtab -->

{% endtabs %}

{% btn '/posts/4aa8abbe/',📌 Butterfly 文檔(三) 主題配置,far fa-hand-point-right,block pink right larger %}
