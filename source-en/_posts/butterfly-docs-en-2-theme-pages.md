---
title: Butterfly document - Theme Pages
comments: false
date: 2023-06-30 14:41:20
tags:
  - en
  - docs
  - hexo
categories:
  - Docs
  - EN
keywords: 'hexo,butterfly,theme,doc,教程,文檔,hexo-butterfly'
description:
top_img:
cover: https://jsd.012700.xyz/gh/jerryc127/CDN@m2/img/butterfly-docs-en-theme-pages.png
abbrlink: butterfly-docs-en-theme-pages
---

{% note orange 'fas fa-language' %}

This article is translated from ChatGPT.

{% endnote %}

{% note blue 'fas fa-bullhorn' %}

 🦋 Butterfly has been updated to [4.10](https://github.com/jerryc127/hexo-theme-butterfly/releases/tag/4.10).

{% endnote %}

{% note green 'fas fa-rocket' %}

 📚  Table of Contents

{% post_link butterfly-docs-en-1-get-started ' 🚀 Get Started' %} - {% post_link butterfly-docs-en-2-theme-pages ' 📑 Theme Pages' %} - {% post_link butterfly-docs-en-3-theme-config ' 📌 Theme Configuration Part 1' %} - {% post_link butterfly-docs-en-4-theme-config-2 ' ⚔️ Theme Configuration Part 2' %} - {% post_link butterfly-docs-en-5-theme-q-a ' ❓ Q&A' %} - {% post_link butterfly-docs-en-6-advanced-tutorial ' ⚡️ Advanced Tutorials' %}

{% endnote %}

***

## Front-matter

`Front-matter` is the section at the top of a Markdown file, separated by ---, and is used to specify variables for individual files.

- Page Front-matter is used for configuring a `page`.
- Post Front-matter is used for configuring a `post`.

{% note info %}

If a parameter is marked as `optional`, you can add it based on your needs, and it is not necessary to include all parameters in the Markdown file.

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
random:
---
```
| Syntax          | Explanation                                                  |
| ----------------| ------------------------------------------------------------ |
| title           | [Required] Page title                                        |
| date            | [Required] Page creation date                                |
| type            | [Required] Used for tags, categories, and friends links pages|
| updated         | [Optional] Page update date                                  |
| description     | [Optional] Page description                                  |
| comments        | [Optional] Display page comment module (default true)       |
| top_img         | [Optional] Page top image                                    |
| mathjax         | [Optional] Display MathJax (only needed when setting `per_page: false` for MathJax, default false) |
| katex           | [Optional] Display KaTeX (only needed when setting `per_page: false` for KaTeX, default false) |
| aside           | [Optional] Display sidebar (default true)                   |
| aplayer         | [Optional] Load aplayer's js and css on the specified page, please refer to the `music` configuration below the article |
| highlight_shrink| [Optional] Configure whether code blocks are expanded (true/false) (default is the setting of `highlight_shrink`) |
| random          | [Optional] Configure whether to randomly sort friends links (default false) |


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
aplayer:
highlight_shrink:
aside:
abcjs:
---
```

| Syntax                | Explanation                                                     |
| :-------------------- | --------------------------------------------------------------- |
| title                 | [Required] Article title                                        |
| date                  | [Required] Article creation date                                |
| updated               | [Optional] Article update date                                  |
| tags                  | [Optional] Article tags                                         |
| categories            | [Optional] Article categories                                   |
| description           | [Optional] Article description                                  |
| top_img               | [Optional] Article top image                                    |
| cover                 | [Optional] Article cover (If top_img is not set, the cover will be displayed at the top of the article. Can be set to false/image address/empty) |
| comments              | [Optional] Display article comment module (default true)        |
| toc                   | [Optional] Display article Table of Contents (default setting in toc's enable configuration) |
| toc_number            | [Optional] Display toc_number (default setting in toc's number configuration) |
| toc_style_simple      | [Optional] Display TOC in a simple style                        |
| copyright             | [Optional] Display article copyright module (default setting in post_copyright's enable configuration) |
| copyright_author      | [Optional] Article copyright module's `author`                  |
| copyright_author_href | [Optional] Article copyright module's `author` link             |
| copyright_url         | [Optional] Article copyright module's `article link` link       |
| copyright_info        | [Optional] Article copyright module's `copyright statement` text |
| mathjax               | [Optional] Display MathJax (only needed when setting `per_page: false` for MathJax, default false) |
| katex                 | [Optional] Display KaTeX (only needed when setting `per_page: false` for KaTeX, default false) |
| aplayer               | [Optional] Load aplayer's js and css on the specified page, please refer to the `music` configuration below the article |
| highlight_shrink      | [Optional] Configure whether code blocks are expanded (true/false) (default is the setting of `highlight_shrink`) |
| aside                 | [Optional] Display sidebar (default true)                       |
| abcjs                 | [Optional] Load abcjs (only needed when setting `per_page: false` for abcjs, default false) |

## Tags Page

1. Go to the root directory of your Hexo blog.

2. Run `hexo new page tags`.

3. You will find the file `source/tags/index.md`.

4. Modify this file:

   **Remember to add `type: "tags"`**

```markdown
---
title: Tags
date: 2018-01-05 00:00:00
type: "tags"
orderby: random
order: 1
---
```

| Syntax | Explanation                                                  |
| --------- | ------------------------------------------------------------ |
| type      | [Required] Page type, must be set to `tags`.                 |
| orderby   | [Optional] Sorting method: random/name/length                |
| order     | [Optional] Sorting order: 1, asc for ascending; -1, desc for descending. |

## Categories Page

1. Go to the root directory of your Hexo blog.

2. Run `hexo new page categories`.

3. You will find the file `source/categories/index.md`.

4. Modify this file:

   **Remember to add `type: "categories"`**

```markdown
---
title: Categories
date: 2018-01-05 00:00:00
type: "categories"
---
```

## Friends Links

Create a page for your blog's friends links!

### Create Friends Links Page

1. Go to the root directory of your Hexo blog.

2. Run `hexo new page link`.

3. You will find the file `source/link/index.md`.

4. Modify this file:

   **Remember to add `type: "link"`**

```markdown
---
title: Friends Links
date: 2018-06-07 22:17:49
type: "link"
---
```

### Add Friends Links

{% tabs flink-add %}

<!-- tab Local Generation -->

In the `source/_data` directory of your Hexo blog (if the _data folder does not exist, create it), create a file named `link.yml`.

```yml
- class_name: Friends Links
  class_desc: Those people, those things
  link_list:
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: Fast, simple, and powerful blogging framework

- class_name: Websites
  class_desc: Recommended websites
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: Video-sharing website
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: China's largest social sharing platform
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: Social sharing platform
```

`class_name` and `class_desc` support HTML formatting, but you can also leave them blank if not needed.

<!-- endtab -->

<!-- tab Remote Fetching -->

Starting from version `4.0.0`, you can fetch friends links remotely in **JSON** format.

Note: If you choose remote fetching, the local generation method will be invalid.

In the front-matter of the `source/link/index.md` file, add the remote link:

```markdown
flink_url: xxxxx
```

JSON format:

```json
[
  {
    "class_name": "Friends Links",
    "class_desc": "Those people, those things",
    "link_list": [
      {
        "name": "Hexo",
        "link": "https://hexo.io/zh-tw/",
        "avatar": "https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg",
        "descr": "Fast, simple, and powerful blogging framework"
      }
    ]
  },
  {
    "class_name": "Websites",
    "class_desc": "Recommended websites",
    "link_list": [
      {
        "name": "Youtube",
        "link": "https://www.youtube.com/",
        "avatar": "https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png",
        "descr": "Video-sharing website"
      },
      {
        "name": "Weibo

",
        "link": "https://www.weibo.com/",
        "avatar": "https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png",
        "descr": "China's largest social sharing platform"
      },
      {
        "name": "Twitter",
        "link": "https://twitter.com/",
        "avatar": "https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png",
        "descr": "Social sharing platform"
      }
    ]
  }
]
```

<!-- endtab -->

{% endtabs %}

### Random Sorting of Friends Links

The theme supports random sorting of friends links. Just add `random: true` in the top front-matter.

### Friends Links Page Customization

Starting from version 2.2.0, the friends links page can be customized by the user. You only need to set it in the MD file for friends links using regular Markdown formatting.

## Gallery

The gallery page is just a regular page. You only need to create your page using `hexo n page xxxxx`.

Then, you can use the `galleryGroup` tag plugin [galleryGroup](https://butterfly.js.org/posts/4aa8abbe/#Gallery%E7%9B%B8%E5%86%8A%E5%9C%96%E5%BA%AB) for specific usage details.

```yaml
<div class="gallery-group-main">
{% galleryGroup 'Wallpapers' 'Collection of some wallpapers' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup 'Marvel' 'Pictures related to Marvel' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' 'Pictures related to OH MY GIRL' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>
```

<div class="gallery-group-main">
{% galleryGroup 'Wallpapers' 'Collection of some wallpapers' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup 'Marvel' 'Pictures related to Marvel' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' 'Pictures related to OH MY GIRL' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

### Subpage

Subpages are also regular pages. You only need to create your page using `hexo n page xxxxx`.

Then, you can use the `gallery` tag plugin [gallery](/posts/4aa8abbe/#Gallery%E7%9B%B8%E5%86%8A) for specific usage details.

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
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg

)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

{% note pink 'fas fa-sitemap' %}

If you want to use links like `/photo/ohmygirl` to display your image content, you can move the entire `ohmygirl` folder to the `photo` folder.

{% endnote %}

## 404 Page

The theme comes with a simple 404 page, which you can enable in the settings.

{% note info %}

When previewing locally, the 404 page won't show up for the error pages.

To preview the 404 page, visit `http://localhost:4000/404.html`.

{% endnote %}

```yaml
# A simple 404 page
error_404:
  enable: true
  subtitle: "Page not found"
  background: 
```

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-error404.png)

{% btn '/posts/butterfly-docs-en-theme-config-one/',📌 Butterfly document - Theme Configuration Part 1,far fa-hand-point-right,block pink right larger %}