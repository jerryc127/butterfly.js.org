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
cover: https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-en-get-started.png
series: docs
---

{% note orange 'fas fa-language' %}

This article is translated from ChatGPT.

{% endnote %}

{% note green 'fas fa-rocket' %}

 📚  Table of Contents

{% post_link butterfly-docs-en-1-get-started ' 🚀 Get Started' %} - {% post_link butterfly-docs-en-2-theme-pages ' 📑 Theme Pages' %} - {% post_link butterfly-docs-en-3-theme-config ' 📌 Theme Configuration' %} - {% post_link butterfly-docs-en-4-tag-plugins ' ⚔️ Tag Plugins' %} - {% post_link butterfly-docs-en-5-theme-q-a ' ❓ Q&A' %} - {% post_link butterfly-docs-en-6-advanced-tutorial ' ⚡️ Advanced Tutorials' %}

{% endnote %}

***

`hexo-theme-butterfly` is a theme developed based on [hexo-theme-melody](https://github.com/Molunerfinn/hexo-theme-melody).

## Installation

{% tabs butterfly-install %}

<!-- tab Git Installation @fab fa-github-square -->

{% hideToggle If you are in mainland China and have difficulty accessing GitHub, you can use Gitee to install %}

**Stable Version [Recommended]**

In your Hexo root directory:

```powershell
git clone -b master https://gitee.com/immyw/hexo-theme-butterfly.git themes/butterfly
```

**Dev version**

> The dev version may have bugs; if you prefer stability, please install the stable version.

If you want to install the latest dev branch, you can:

```powershell
git clone -b dev https://gitee.com/immyw/hexo-theme-butterfly.git themes/butterfly
```

{% note info %}

Upgrade method: In the theme directory, run `git pull`

{% endnote %}
{% endhideToggle %}

**Stable Version [Recommended]**

In your Hexo root directory:

```powershell
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

**Dev Version**

> The dev version may have bugs; if you prefer stability, please install the stable version.

If you want to install the latest dev branch, you can:

```powershell
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

{% note info %}

Upgrade method: In the theme directory, run `git pull`

{% endnote %}

<!-- endtab -->

<!-- tab npm Installation@fab fa-npm -->

> This method only supports Hexo version 5.0.0 and above.
>
> ***Installing via npm will not create a theme folder in themes but will create one in node_modules.***

In your Hexo root directory:

```powershell
npm install hexo-theme-butterfly
```

{% note info %}

Upgrade method: In the Hexo root directory, run `npm update hexo-theme-butterfly`

{% endnote %}

<!-- endtab -->

{% endtabs %}

## Apply the Theme

Modify the `_config.yml` in your Hexo root directory to set the theme to `butterfly`:

```yaml
theme: butterfly
```

## Install Plugins

If you do not have the pug and stylus renderers, please download and install them:

```powershell
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## Upgrade Suggestions

{% note blue 'fas fa-train' %}

After upgrading, please visit the [Releases](https://github.com/jerryc127/hexo-theme-butterfly/releases) page on GitHub to check the update details of the new version.

If there are changes to the `_config` file, please update your configuration accordingly.

{% endnote %}

To minimize the inconvenience caused by theme upgrades, please use the following method (**recommended but optional**).

Create a file named `_config.butterfly.yml` in the root directory of hexo, and copy the **contents** of the theme's `_config.yml` to `_config.butterfly.yml`.

> **Note:** Copy the `_config.yml` from the theme, not the `_config.yml` from hexo.

> **Note:** Do not delete the `_config.yml` in the theme directory.

> **Note:** From now on, configure in `_config.butterfly.yml` only.
> If you use `_config.butterfly.yml`, the configurations in the theme's `_config.yml` will not be effective.

Hexo will automatically **merge** the configurations from the theme's `_config.yml` and `_config.butterfly.yml`. If there are duplicate configurations, the ones in `_config.butterfly.yml` will take precedence.

![butterfly-docs-install-suggestion-1.png](https://oss.012700.xyz/butterfly/2024/08/butterfly-docs-install-suggestion-1.png)

{% btn '/posts/butterfly-docs-en-theme-pages/',📑 Butterfly document - Theme Pages,far fa-hand-point-right,block right larger %}