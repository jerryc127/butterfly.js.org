---
title: Butterfly document - Advanced Tutorial
comments: false
date: 2023-07-01 17:11:47
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
cover: https://jsd.012700.xyz/gh/jerryc127/CDN@m2/img/butterfly-docs-en-advanced-tutorial.png
abbrlink: butterfly-docs-en-advanced-tutorial
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

## Suggestions

1. Avoid placing personal files/images in the `source` folder of the main theme. During theme upgrades, these files may be overwritten or deleted. Instead, create a separate folder in the Hexo root directory to store personal files/images. 
To reference these files, use `/folder_name/file_name`.

## Music

The music interface uses the plugin `hexo-tag-aplayer`. Please refer to the plugin [documentation](https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md) for usage.

To create the music page, simply create a regular page like any other page.

> The following content is for **optional** configuration.
>
> Note: You still need to install the [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer) plugin.

The plugin will inject js and css into every file, but to avoid this, version 3.0 of the theme includes the necessary aplayer css and js.

First, in the Hexo root directory, configure `_config.yml` to set `asset_inject` to `false`:

```yaml
aplayer:
  asset_inject: false
```

Then, in the Front-matter of the pages where you want to use aplayer, add the following line:

```markdown
aplayer: true
```

This will only insert the necessary js and css for the pages where you need aplayer.

For instructions on how to add a global Aplayer at the bottom, refer to [this article](/posts/507c070f/).

## Movies

The movie interface uses the plugin `hexo-douban`. Please follow the plugin's [documentation](https://github.com/mythsman/hexo-douban) for usage.

**Note**:
1. hexo-douban automatically generates pages, so you don't need to create them manually.
2. If you encounter a problem where no movies are loaded, and you see the message "INFO 0 movies have been loaded in xxx ms, because you are offline or your network is bad", please try again after some time, as this might be a temporary network issue.

## Chat

### Artitalk

Install the plugin [hexo-butterfly-artitalk](https://www.npmjs.com/package/hexo-butterfly-artitalk).

For specific configurations, refer to the [plugin documentation](https://github.com/jerryc127/butterfly-plugins/tree/main/hexo-butterfly-artitalk).

### HexoPlusPlus Talk

Install the plugin [hexo-butterfly-hpptalk](https://www.npmjs.com/package/hexo-butterfly-hpptalk).

For specific configurations, refer to the [plugin documentation](https://github.com/jerryc127/butterfly-plugins/tree/main/hexo-butterfly-hpptalk).

## Custom Code Colors

{% btn '/posts/b37b5fe3/','Click to Go',fas fa-code,block blue %}

## Custom Sidebar

{% btn '/posts/ea33ab97/','Click to Go',fas fa-lightbulb,block green %}

## Adding Global Aplayer Tutorial

{% btn '/posts/507c070f/','Click to Go',fas fa-music,block pink %}

## Icon

The Butterfly theme comes with [Font Awesome V5](https://fontawesome.com/) icons, currently updated to version 5.13.0, with a total of 1,588 free icons. However, some icons from this source might not be supported on websites in certain countries. If needed, you can import icons from other icon providers.

### iconfont

One of the most famous domestic icon libraries is [iconfont](https://www.iconfont.cn/). It is a powerful vector icon library with a rich collection of icons. Many icons that are not supported by `Font Awesome` can be found here. Additionally, [iconfont](https://www.iconfont.cn/) allows you to select the icons you need and generate CSS links, reducing unnecessary CSS loading.

#### Registering an Account

To get started with [iconfont](https://www.iconfont.cn/), open the website and click on the "User" icon in the navigation bar. This will prompt you to register an account as per the instructions.

![Snipaste_2020-05-28_21-12-01](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-iconfont.png)

#### Adding Icons to Your Library

Select the icons you need by hovering your mouse over them. Three buttons will appear (Add to library, Favorite, Download). Click on "Add to library" to add the icon to your collection.

![image-20200528205401440](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-iconfont-add.png)

After adding icons to your library, you will see a "Shopping Cart" icon with a number "1" displayed in the upper right corner of the website. This indicates that the icon has been added to your library. Click on the "Shopping Cart" icon to view the details.

![image-20200528205925258](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-iconfont-check.png)

![image-20200528210120442](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-iconfont-detail.png)

Selected icons will be displayed on top. You can repeat the above steps to add the icons you need and then click "Add to Project."

Next, you will be prompted to choose a project name. If you don't have one, create a new project.

![image-20200528211624459](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-iconfont-create.png)

#### Generating CSS Links

After adding the icons to your project, you will be taken to the project details page. Click on "Font class" and then click on "No code, click to generate" text. The website will automatically generate a CSS link, which you just need to copy.

![image-20200528212301786](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-iconfont-link.png)

#### Adding the Link to the Theme Configuration File

Open the "Theme Configuration File" and find the "inject" configuration. Add the CSS link as instructed.

![image-20200528212440743](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-iconfont-setting.png)

In the places where you want to use the icons, use the format `iconfont icon-iconName`, for example, `iconfont icon-Menu`.

![image-20200528213151304](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-iconfont-setting-menu.png)

After running Butterfly, you will see the icon for the menu.

![image-20200528213346338](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-iconfont-show.png)

#### Other Methods of Adding Icons

In addition to using CSS links to include icons, iconfont also supports other methods of usage. For specific details, refer to the [iconfont official usage documentation](https://www.iconfont.cn/help/detail?helptype=code).

### Other Icon Providers

Apart from [iconfont](https://www.iconfont.cn/), there are other providers like [RemixIcon](https://github.com/Remix-Design/RemixIcon) and [Flaticon](https://www.flaticon.com/categories/seo-and-web), offering a wide range of icons to choose from. For the usage methods, please refer to their respective documentation.

## Image Compression

Butterfly theme uses many images, and if these images are too large, they can significantly slow down your website's loading speed. Image compression can effectively alleviate this issue.

In addition to using `gulp-imagemin` for image compression, you can also use online compression websites and software. The following are two tools that I personally use. There are many such tools available online; you can choose one that suits you best.

- [tinypng](https://tinypng.com/)

  An online compression website. The compressed images retain high quality. It is highly recommended on platforms like Zhihu. However, the free version has some limitations.

  ![image-20200526173511503](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-tinypng.png)

- [caesium](https://saerasoft.com/caesium/)

  An open-source software that supports Windows and macOS. It allows batch image compression without any limitations.

  ![image-20200526173316278](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-caesium.png)
  
-  [imgbot](https://github.com/marketplace/imgbot)

  imgbot is a GitHub plugin.

  Once installed, when you upload images to GitHub, imgbot will automatically compress them and create a pull request. You just need to merge the PR.

  You can configure imgbot's detection and compression methods (lossy/lossless). For specific details, please check the plugin's documentation.

  ![image-20200830231742951](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-enhance-imgbot.png)

## Recommended Plugins

- [hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink)

  This plugin converts permalinks to numerical values. It is easy to configure, and it automatically converts them to numbers during generation.

- [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) 

  This plugin generates RSS files.

- [hexo-filter-nofollow](https://github.com/hexojs/hexo-filter-nofollow)

  It adds `rel="noopener external nofollow noreferrer"` to all external links on your website, which can enhance SEO and prevent loss of link juice.

- [hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap)

  This plugin generates a sitemap.

- [hexo-generator-baidu-sitemap](https://github.com/coneycode/hexo-generator-baidu-sitemap)

  As the name suggests, this plugin is specifically for generating a sitemap for Baidu.