---
title: Butterfly document - Q&A
comments: false
date: 2023-07-01 16:50:57
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
cover: https://jsd.012700.xyz/gh/jerryc127/CDN@m2/img/butterfly-docs-en-theme-question.png
abbrlink: butterfly-docs-en-theme-question
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


Here are some issues encountered by users during the installation process. Before asking a question, please check if there are any solutions available.

### Webpage displaying code after running

If your webpage is only showing the following code:
`extends includes/layout.pug block content #recent-posts.recent-posts include includes/recent-posts.pug include includes/pagination.pug #aside_content.aside_content include includes/aside.pug`

Please download and install the necessary dependencies by running either of the following commands:

```bash
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

or

```bash
yarn add hexo-renderer-pug hexo-renderer-stylus
```

These commands will install the required Pug and Stylus renderers for Hexo, which are essential for rendering your website correctly. After installing the dependencies, try running your Hexo website again, and the issue should be resolved.

### Error while configuring friend links

An error occurred while configuring the friend links page.

```
ERROR D:\Desktop\orxing-blog\themes\Butterfly\layout\flink.pug:2
    1| .flink
  > 2|   each i in site.data.link
    3|     p.comment-word= i.class_name
    4|     .post-cards
    5|       ul.md-links

Cannot read property &#39;length&#39; of undefined
TypeError: D:\Desktop\orxing-blog\themes\Butterfly\layout\flink.pug:2
    1| .flink
  > 2|   each i in site.data.link
    3|     p.comment-word= i.class_name
    4|     .post-cards
    5|       ul.md-links

Cannot read property &#39;length&#39; of undefined
    at eval (eval at wrap (D:\Desktop\orxing-blog\node_modules\pug-runtime\wrap.js:6:10), <anonymous>:1890:32)
    at eval (eval at wrap (D:\Desktop\orxing-blog\node_modules\pug-runtime\wrap.js:6:10), <anonymous>:2017:4)
    at template (eval at wrap (D:\Desktop\orxing-blog\node_modules\pug-runtime\wrap.js:6:10), <anonymous>:10152:72)
    at Theme._View.View._compiled (D:\Desktop\orxing-blog\node_modules\hexo\lib\theme\view.js:123:48)
    at Theme._View.View.View.render (D:\Desktop\orxing-blog\node_modules\hexo\lib\theme\view.js:29:15)
    at D:\Desktop\orxing-blog\node_modules\hexo\lib\hexo\index.js:349:21
    at tryCatcher (D:\Desktop\orxing-blog\node_modules\bluebird\js\release\util.js:16:23)
    at D:\Desktop\orxing-blog\node_modules\bluebird\js\release\method.js:15:34
    at RouteStream._read (D:\Desktop\orxing-blog\node_modules\hexo\lib\hexo\router.js:123:3)
    at RouteStream.Readable.read (_stream_readable.js:457:10)
    at resume_ (_stream_readable.js:936:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:9)
```

> Please check the spacing in the `link.yml` document.

### Error after upgrading to the latest version

After upgrading to the latest version of Hexo, an error occurs when running `hexo g`.

```
INFO  Deleted database.
INFO  Start processing
FATAL Something&#39;s wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html
TypeError: Cannot read property &#39;enable&#39; of undefined
    at Hexo.<anonymous> (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/themes/Butterfly/scripts/post-lazyload.js:5:23)
    at Hexo.tryCatcher (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/util.js:16:23)
    at Hexo.<anonymous> (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/method.js:15:34)
    at /Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/hexo/lib/extend/filter.js:60:50
    at tryCatcher (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/util.js:16:23)
    at Object.gotValue (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/reduce.js:155:18)
    at Object.gotAccum (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/reduce.js:144:25)
    at Object.tryCatcher (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/promise.js:517:31)
    at Promise._settlePromise (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/promise.js:574:18)
    at Promise._settlePromiseCtx (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/promise.js:611:10)
    at _drainQueueStep (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/async.js:142:12)
    at _drainQueue (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/async.js:131:9)
    at Async._drainQueues (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/async.js:147:5)
    at Immediate.Async.drainQueues [as _onImmediate] (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/async.js:17:14)
    at processImmediate (internal/timers.js:439:21)
```

Please refer to the latest version of `_config.yml` and compare it. Copy any missing configurations to the main theme configuration file.

### Error: `wordcount is not a function` / `totalcount is not a function`

You are encountering an error message stating "`wordcount is not a function`."

Please check whether you have installed the wordcount plugin using the following command: `npm i --save hexo-wordcount`.

### After upgrading to version 2.0.0, you encounter an error during execution.

After upgrading to version 2.0.0, you encounter an error during execution.

```
INFO Start processing
FATAL Something’s wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html
Template render error: (unknown path)
unexpected end of file
at Object.prettifyError (F:\hexo\nodemodules\nunjucks\src\lib.js:36:11)
at Template.render (F:\hexo\node_modules\nunjucks\src\environment.js:542:21)
at Environment.renderString (F:\hexo\node_modules\nunjucks\src\environment.js:380:17)
at Promise.fromCallback.cb (F:\hexo\node_modules\hexo\lib\extend\tag.js:123:48)
at tryCatcher (F:\hexo\node_modules\bluebird\js\release\util.js:16:23)
at Function.Promise.fromNode.Promise.fromCallback (F:\hexo\node_modules\bluebird\js\release\promise.js:185:30)
at Tag.render (F:\hexo\node_modules\hexo\lib\extend\tag.js:123:18)
at Object.onRenderEnd (F:\hexo\node_modules\hexo\lib\hexo\post.js:280:20)
at Promise.then.then.result (F:\hexo\node_modules\hexo\lib\hexo\render.js:64:19)
at tryCatcher (F:\hexo\node_modules\bluebird\js\release\util.js:16:23)
at Promise.settlePromiseFromHandler (F:\hexo\nodemodules\bluebird\js\release\promise.js:517:31)

```

> Version 2.0.0 and above have removed the old `gallery` and introduced a new one. Therefore, if you were using the old version, you need to either delete or modify your code to accommodate the changes.

### search bar appears at the bottom of the page

After deploying with hexo deploy, you notice that the search bar appears at the bottom of the page.

To resolve this issue, please make sure to execute `hexo clean` before generating the site.

This will clean any cached files and ensure that the search bar appears correctly in its intended position.

### The code runs fine locally but encounters errors, missing elements, or becomes ineffective after pushing it to the remote repository.

> 1. Clear the browser cache.
> 2. If step 1 doesn't work, make sure you ran `hexo clean` before uploading.

### You have already set the language in Hexo's configuration file, but the navigation bar is still in English. 

Please modify the navigation configuration to your desired Chinese language:

```yaml
  Home: / || fa fa-home
  Timeline: /archives/ || fa fa-archive
  Tags: /tags/ || fa fa-tags
  Categories: /categories/ || fa fa-folder-open
```

### Error: Cannot read property 'bind' of undefined / full_url_for is not a function

> To resolve this issue, upgrade Hexo to version 4.0 or higher.

### Error: Cannot read property 'appId' of undefined

This error is related to the Algolia plugin. After installing the plugin, you need to configure it correctly. Please refer to the plugin documentation for configuration details.

### Loading appears at the top

Before generating the site, execute `hexo clean`.

### Error when clicking on a Chinese category

This problem occurs in themes below version 3.0.0. Upgrade the theme to fix it.

### Uncaught ReferenceError: regeneratorRuntime is not defined

This error is due to using Babel to compress the code. Please check the [babel/gulp-babel](https://github.com/babel/gulp-babel#runtime) repository for the specific resolution method.

{% btn '/posts/butterfly-docs-en-advanced-tutorial/',⚡️ Butterfly document - Advanced Tutorial,far fa-hand-point-right,block orange right larger %}