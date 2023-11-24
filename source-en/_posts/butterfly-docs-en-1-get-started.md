---
title: Butterfly document - Get Started
comments: false
date: 2023-06-30 13:07:52
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
abbrlink: butterfly-docs-en-get-started
sticky: 100
cover: https://jsd.012700.xyz/gh/jerryc127/CDN@m2/img/butterfly-docs-en-get-started.png
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

`hexo-theme-butterfly` is developed based on [hexo-theme-melody](https://github.com/Molunerfinn/hexo-theme-melody).

## Installation

{% tabs butterfly-install %}

<!-- tab Git (Github) @fab fa-github-square -->

**Stable Version [Recommended]**

Inside your Hexo root directory, run:

```powershell
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

**Dev Version**

> The dev version may contain bugs. If you prefer stability, please install the stable version

If you want to install a newer dev branch, you can run:

```powershell
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

{% note info %}

Upgrade method: Run git pull in the theme directory.

{% endnote %}

<!-- endtab -->



<!-- tab Git (Gitee) @fab fa-git-square -->

**Stable Version [Recommended]**

Inside your Hexo root directory, run:

```powershell
git clone -b master https://gitee.com/immyw/hexo-theme-butterfly.git themes/butterfly
```

**Dev Version**

> The dev version may contain bugs. If you prefer stability, please install the stable version.

If you want to install a newer dev branch, you can run:

```powershell
git clone -b dev https://gitee.com/immyw/hexo-theme-butterfly.git themes/butterfly
```

{% note info %}

Upgrade method: Run `git pull` in the theme directory.

{% endnote %}

<!-- endtab -->



<!-- tab npm Installation@fab fa-npm -->

> This method only supports Hexo 5.0.0 and above.
>
> Installing via npm will not generate a theme folder inside the themes directory, instead, it will be generated in the node_modules directory.

Inside your Hexo root directory, run:

```powershell
npm install hexo-theme-butterfly
```

{% note info %}

Upgrade method: Run `npm update hexo-theme-butterfly` in the Hexo root directory.

{% endnote %}

<!-- endtab -->

{% endtabs %}

## Applying the Theme

Modify the `_config.yml` file in your Hexo root directory and change the theme to `butterfly`:

```yaml
theme: butterfly
```

## Installing Plugins

If you don't have the Pug and Stylus renderers, download and install them:

```powershell
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## Upgrade Recommendations

{% note blue 'fas fa-train' %}

After upgrading, please check the [Releases](https://github.com/jerryc127/hexo-theme-butterfly/releases) page on GitHub or [文檔七](https://butterfly.js.org/posts/198a4240/) for the update details of the new version.

There will be a section that indicates the changes to the `_config` file (if any). Please update your configuration accordingly.

{% endnote %}

To minimize the inconvenience caused by upgrading the theme, you can follow the following method (**recommended, but optional**).

Create a file named `_config.butterfly.yml` in the root directory of your Hexo project and copy the content of the `_config.yml` file from the theme directory to _config.butterfly.yml. (**Note: Copy the `_config.yml` file from the theme, not from Hexo's root directory**).

> Note: Do not delete the `_config.yml` file in the theme directory.

> Note: In the future, only make configurations in `_config.butterfly.yml`.
> If you use `_config.butterfly.yml`, the configuration in the theme's `_config.yml` file will not take effect.

Hexo will automatically **merge** the configurations from the `_config.yml` and `_config.butterfly.yml` files. If there are conflicting configurations, the ones from `_config.butterfly.yml` will take precedence.

![image-20200805191531090](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-docs-install-suggestion-1.png)

{% btn '/posts/butterfly-docs-en-theme-pages/',📑 Butterfly document - Theme Pages,far fa-hand-point-right,block right larger %}
