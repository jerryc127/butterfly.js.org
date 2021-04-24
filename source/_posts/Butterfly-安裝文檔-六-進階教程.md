---
title: Butterfly 安裝文檔(六) 進階教程
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
categories: Docs文檔
keywords: 'hexo,butterfly,主題,doc,教程,文檔'
description: Butterfly安裝文檔-進階教程
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-docs-06-cover.png
abbrlink: 4073eda
date: 2020-05-28 22:39:25
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

## 建議

1. 不要把個人需要的文件/圖片放在主題`source`文件夾裏，因為在升級主題的過程中，可能會把文件覆蓋刪除了。
在Hexo根目錄的`source`文件夾裏，創建一個文件夾來放置個人文件/圖片。
引用文件直接為`/文件夾名稱/文件名`

## 音樂

音樂界面使用了插件 `hexo-tag-aplayer`
使用方法請參考插件[文檔](https://github.com/MoePlayer/hexo-tag-aplayer/blob/master/docs/README-zh_cn.md)

音樂頁面只是普通的page頁，按普通頁面操作生成就行。

> 以下內容可供**選擇**配置
>
> 注意： 仍需要安裝插件[hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)

插件會在每一個文件都插入 js 和 css，為了避免這一情況，3.0 版本內置了 aplayer 需要的 css 和 js。

首先在Hexo根目錄`_config`裏配置`asset_inject`為`false`

```yaml
aplayer:
  asset_inject: false
```

然後在你需要使用aplayer的頁面Front-matter添加

```markdown
aplayer: true
```

這樣只會在需要aplayer的頁面插入js和css。

如何添加全局 Aplayer 播放，請參考 [這篇文章](/posts/507c070f/)

## 電影

電影界面使用了插件 `hexo-butterfly-douban`
使用方法請參考插件的[文檔](https://github.com/jerryc127/butterfly-plugins/tree/main/hexo-butterfly-douban)。

**注意：** 
1. hexo-butterfly-douban 會主動生成頁面，所以不需要自己創建。
2. 如遇到無法抓取問題，顯示 `INFO  0 movies have been loaded in xxx ms, because you are offline or your network is bad`
   請過段時間再試試，這我也無能為力。

## 説説

### Artitalk

安裝插件 [hexo-butterfly-artitalk](https://www.npmjs.com/package/hexo-butterfly-artitalk)

具體配置查看[插件文檔](https://github.com/jerryc127/butterfly-plugins/tree/main/hexo-butterfly-artitalk)

### HexoPlusPlus Talk

安裝插件 [hexo-butterfly-hpptalk](https://www.npmjs.com/package/hexo-butterfly-hpptalk)

具體配置查看[插件文檔](https://github.com/jerryc127/butterfly-plugins/tree/main/hexo-butterfly-hpptalk)

## 自定義代碼配色

{% btn '/posts/b37b5fe3/','點擊前往',fas fa-code,block blue %}


## 自定義側邊欄

{% btn '/posts/ea33ab97/','點擊前往',fas fa-lightbulb,block green %}



## 添加全局吸底Aplayer教程

{% btn '/posts/507c070f/','點擊前往',fas fa-music,block pink %}

## jQuery 加載

主題已於 `3.4.0` 去除 jQuery 的引用，但是部分功能仍需要加載 jQuery（*Justified Gallery*和 *fancybox*)。

如果你仍需要使用 jQuery，可以調用主題提供的 function，防止 jQuery 多次加載。

`btf.isJqueryLoad(fn)`

function 會判斷是否加載了 jQuery ，如果沒有，加載 jQuery 後運行 fn。如果有，直接運行 fn。

使用方法

```javascript
// 方法 1
btf.isJqueryLoad(function() {
    你的function
}}

// 方法 2
function myFn () {
    你的function
}
btf.isJqueryLoad(myFn)
```

## Gulp壓縮

[Gulp](https://www.gulpjs.com.cn/) 是一款自動化構建的工具，擁有眾多的插件。而我們只需要使用到幾個插件來壓縮Html/css/js。

### 安裝Gulp

```powershell
npm install --global gulp-cli
```

### 插件安裝

#### 壓縮HTML

可以使用[gulp-htmlclean](https://github.com/anseki/gulp-htmlclean)和[gulp-html-minifier-terser](https://github.com/pioug/gulp-html-minifier-terser)來壓縮HTML

```powershell
npm install gulp-htmlclean --save-dev
npm install --save gulp-html-minifier-terser
```

#### 壓縮CSS

可以使用[gulp-clean-css](https://github.com/scniro/gulp-clean-css)來壓縮CSS

```powershell
npm install gulp-clean-css --save-dev
```

#### 壓縮JS

由於Butterfly主題中的JS使用到了部分ES6語法，因此不能只使用 [gulp-uglify ](https://github.com/terinjokes/gulp-uglify)來壓縮，還需要搭配其它的插件。兩種方法都可以有效的壓縮JS代碼，選一種適合自己的就行。

[gulp-terser](https://github.com/duan602728596/gulp-terser) 是直接壓縮 js 代碼，不會進行轉換

[gulp-babel](https://github.com/babel/gulp-babel)是一個JavaScript轉換編譯器，可以把ES6轉換成ES5

`gulp-terser`

```powershell
npm install gulp-terser --save-dev
```

`gulp-uglify + gulp-babel`

```powershell
npm install --save-dev gulp-uglify
npm install --save-dev gulp-babel @babel/core @babel/preset-env
```

#### 壓縮圖片

可以使用[gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)來壓縮圖片

```powershell
npm install --save-dev gulp-imagemin
```

### 創建 gulpfile 文件

在Hexo的根目錄，創建一個` gulpfile.js`文件

```js
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const htmlmin = require('gulp-html-minifier-terser')
const htmlclean = require('gulp-htmlclean')
const imagemin = require('gulp-imagemin')
// gulp-tester (如果使用 gulp-tester,把下面的//去掉)
// const terser = require('gulp-terser');

// babel (如果不是使用bebel,把下面兩行註釋掉)
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

// minify js - babel（ 如果不是使用bebel,把下面註釋掉）
gulp.task('compress', () =>
  gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(uglify().on('error', function (e) {
      console.log(e)
    }))
    .pipe(gulp.dest('./public'))
)

// minify js - gulp-tester (如果使用 gulp-tester,把下面前面的//去掉)
// gulp.task('compress', () =>
//   gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
//     .pipe(terser())
//     .pipe(gulp.dest('./public'))
// )


// css
gulp.task('minify-css', () => {
  return gulp.src('./public/**/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public'))
})

// 壓縮 public 目錄內 html
gulp.task('minify-html', () => {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
      removeComments: true, // 清除 HTML 註釋
      collapseWhitespace: true, // 壓縮 HTML
      collapseBooleanAttributes: true, // 省略布爾屬性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true, // 刪除所有空格作屬性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true, // 刪除 <script> 的 type="text/javascript"
      removeStyleLinkTypeAttributes: true, // 刪除 <style> 和 <link> 的 type="text/css"
      minifyJS: true, // 壓縮頁面 JS
      minifyCSS: true, // 壓縮頁面 CSS
      minifyURLs: true
    }))
    .pipe(gulp.dest('./public'))
})

// 壓縮 public/uploads 目錄內圖片
gulp.task('minify-images', async () => {
  gulp.src('./public/img/**/*.*')
    .pipe(imagemin({
      optimizationLevel: 5, // 類型：Number  預設：3  取值範圍：0-7（優化等級）
      progressive: true, // 類型：Boolean 預設：false 無失真壓縮jpg圖片
      interlaced: false, // 類型：Boolean 預設：false 隔行掃描gif進行渲染
      multipass: false // 類型：Boolean 預設：false 多次優化svg直到完全優化
    }))
    .pipe(gulp.dest('./public/img'))
})

// 執行 gulp 命令時執行的任務
gulp.task('default', gulp.parallel(
  'compress', 'minify-css', 'minify-html', 'minify-images'
))

```

### 運行

在`hexo g`之後運行`gulp`就行。

```powershell
gulp
```

## PWA

{% note warning %}

這是另一種實現PWA的方法，使用這個方法之前，請先**卸載**掉其它的PWA插件。

{% endnote %}

{% note info %}

這部分文章參考[利用 Workbox 實現博客的 PWA](https://io-oi.me/tech/pwa-via-workbox/)

{% endnote %}



據維基百科介紹

>漸進式網絡應用程式（英語：**P**rogressive **W**eb **A**pps，簡稱：**PWA**）是一種普通[網頁](https://zh.wikipedia.org/wiki/網頁)或[網站](https://zh.wikipedia.org/wiki/網站)架構起來的[網絡應用程式](https://zh.wikipedia.org/wiki/網絡應用程序)，但它可以以傳統[應用程式](https://zh.wikipedia.org/wiki/應用程序)或原生[移動應用程式](https://zh.wikipedia.org/wiki/移動應用程序)形式展示給用户。這種應用程式形態視圖將目前最為現代化的[瀏覽器](https://zh.wikipedia.org/wiki/瀏覽器)提供的功能與行動裝置的體驗優勢相結合。

當你的網站實現了PWA，那就代表了

1. 用户可以添加你的博客到電腦╱手機的桌面，以原生應用般的方式瀏覽你的博客
2. 用户可以更快速地瀏覽你的博客
3. 用户可以離線瀏覽你的博客

Hexo已經有很多插件可以實現PWA，下面是另一種實現方法，需要有Gulp就行。這種方法也可實現彈窗提醒用户刷新網站（當網站有更新時）

![image-20200528222826867](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-pwa-notice.png)

此方法是使用 [Service Worker](https://developers.google.com/web/fundamentals/primers/service-workers/)。我們使用 [Workbox](https://developers.google.com/web/tools/workbox/) 這個工具生成 `sw.js` 以快速實現 Service Worker ，並實現頁面的預緩存和頁面更新後的提醒功能。

### 開啟設置和配置manifest.json

在`主題配置文件中`中開啟 pwa 選項

```yaml
pwa:
  enable: true
  manifest: /img/pwa/manifest.json
  theme_color: "#fff"
  apple_touch_icon: /img/pwa/apple-touch-icon.png
  favicon_32_32: /img/pwa/32.png
  favicon_16_16: /img/pwa/16.png
  mask_icon: /img/pwa/safari-pinned-tab.svg
```

在Hexo的`source`目錄中創建`manifest.json`文件。

```json
{
    "name": "string",
    "short_name": "Junzhou",
    "theme_color": "#49b1f5",
    "background_color": "#49b1f5",
    "display": "standalone",
    "scope": "/",
    "start_url": "/",
    "icons": [
        {
          "src": "images/pwaicons/36.png",
          "sizes": "36x36",
          "type": "image/png"
        },
        {
            "src": "images/pwaicons/48.png",
          "sizes": "48x48",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
            "src": "images/pwaicons/512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
      ],
      "splash_pages": null
  }
```

你也可以通過 [Web App Manifest](https://app-manifest.firebaseapp.com/)快速創建`manifest.json`。（Web App Manifest 要求至少包含一個 512*512 像素的圖標）

### 安裝插件

在命令行中輸入安裝插件

```powershell
npm install workbox-build gulp --save-dev
```

### 創建`gulpfile.js` 文件

在Hexo的根目錄，創建一個` gulpfile.js`文件

```js
const gulp = require("gulp");
const workbox = require("workbox-build");

gulp.task('generate-service-worker', () => {
    return workbox.injectManifest({
        swSrc: './sw-template.js',
        swDest: './public/sw.js',
        globDirectory: './public',
        globPatterns: [
            "**/*.{html,css,js,json,woff2}"
        ],
        modifyURLPrefix: {
            "": "./"
        }
    });
});

gulp.task("build", gulp.series("generate-service-worker"));

```

### 創建 `sw-template.js` 文件

在Hexo的根目錄，創建一個`sw-template.js`文件

```js
const workboxVersion = '5.1.3';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "your name"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST,{
    directoryIndex: null
});

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize();
```

把`prefix` 修改為你博客的名字（英文），如果你想用其它緩存策略，請自行查看[相關文檔](https://developers.google.com/web/tools/workbox/modules/workbox-strategies)

### 添加js進主題

在主題配置文件中,添加需要的css和js

```yaml
inject:
  head:
    - '<style type="text/css">.app-refresh{position:fixed;top:-2.2rem;left:0;right:0;z-index:99999;padding:0 1rem;font-size:15px;height:2.2rem;transition:all .3s ease}.app-refresh-wrap{display:flex;color:#fff;height:100%;align-items:center;justify-content:center}.app-refresh-wrap a{color:#fff;text-decoration:underline;cursor:pointer}</style>'
  bottom:
    - '<div class="app-refresh" id="app-refresh"> <div class="app-refresh-wrap"> <label>✨ 網站已更新最新版本 👉</label> <a href="javascript:void(0)" onclick="location.reload()">點擊刷新</a> </div></div><script>function showNotification(){if(GLOBAL_CONFIG.Snackbar){var t="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark,e=GLOBAL_CONFIG.Snackbar.position;Snackbar.show({text:"已更新最新版本",backgroundColor:t,duration:5e5,pos:e,actionText:"點擊刷新",actionTextColor:"#fff",onActionClick:function(t){location.reload()}})}else{var o=`top: 0; background: ${"light"===document.documentElement.getAttribute("data-theme")?"#49b1f5":"#1f1f1f"};`;document.getElementById("app-refresh").style.cssText=o}}"serviceWorker"in navigator&&(navigator.serviceWorker.controller&&navigator.serviceWorker.addEventListener("controllerchange",function(){showNotification()}),window.addEventListener("load",function(){navigator.serviceWorker.register("/sw.js")}));</script>'
```

上面的代碼是壓縮過的，具體相關代碼如下，可供理解。

```html
<div class="app-refresh" id="app-refresh">
  <div class="app-refresh-wrap">
    <label>✨ 網站已更新最新版本 👉</label>
    <a href="javascript:void(0)" onclick="location.reload()">點擊刷新</a>
  </div>
</div>
<script>
  if ('serviceWorker' in navigator) {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.addEventListener('controllerchange', function () {
        showNotification()
      })
    }

    window.addEventListener('load', function () {
      navigator.serviceWorker.register('/sw.js')
    })
  }

  function showNotification() {
    if (GLOBAL_CONFIG.Snackbar) {
      var snackbarBg =
        document.documentElement.getAttribute('data-theme') === 'light'
          ? GLOBAL_CONFIG.Snackbar.bgLight
          : GLOBAL_CONFIG.Snackbar.bgDark
      var snackbarPos = GLOBAL_CONFIG.Snackbar.position
      Snackbar.show({
        text: '已更新最新版本',
        backgroundColor: snackbarBg,
        duration: 500000,
        pos: snackbarPos,
        actionText: '點擊刷新',
        actionTextColor: '#fff',
        onActionClick: function (e) {
          location.reload()
        },
      })
    } else {
      var showBg =
        document.documentElement.getAttribute('data-theme') === 'light'
          ? '#49b1f5'
          : '#1f1f1f'
      var cssText = `top: 0; background: ${showBg};`
      document.getElementById('app-refresh').style.cssText = cssText
    }
  }
</script>
```

```html
<style type="text/css">
  .app-refresh {
    position: fixed;
    top: -2.2rem;
    left: 0;
    right: 0;
    z-index: 99999;
    padding: 0 1rem;
    font-size: 15px;
    height: 2.2rem;
    transition: all 0.3s ease;
  }
  .app-refresh-wrap {
    display: flex;
    color: #fff;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  .app-refresh-wrap span {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
  }
</style>
```

### 運行

在你運行`hexo g`後，記得要運行`gulp`這樣才會生效

****

以下是結合了上面提到的Gulp壓縮和PWA的`gulpfile.js`，可供參考。

```js
const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const htmlmin = require('gulp-html-minifier-terser')
const htmlclean = require('gulp-htmlclean')
const imagemin = require('gulp-imagemin')
const workbox = require("workbox-build");
// gulp-tester (如果使用 gulp-tester,把下面的//去掉)
// const terser = require('gulp-terser');

// babel
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

//pwa
gulp.task('generate-service-worker', () => {
  return workbox.injectManifest({
    swSrc: './sw-template.js',
    swDest: './public/sw.js',
    globDirectory: './public',
    globPatterns: [
        "**/*.{html,css,js,json,woff2}"
    ],
    modifyURLPrefix: {
        "": "./"
    }
  });
});

//minify js babel
gulp.task('compress', () =>
  gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
		.pipe(babel({
			presets: ['@babel/preset-env']
		}))
    .pipe(uglify().on('error', function(e){
      console.log(e);
    }))
		.pipe(gulp.dest('./public'))
);

// minify js - gulp-tester (如果使用 gulp-tester,把下面前面的//去掉)
// gulp.task('compress', () =>
//   gulp.src(['./public/**/*.js', '!./public/**/*.min.js'])
//     .pipe(terser())
//     .pipe(gulp.dest('./public'))
// )

//css
gulp.task('minify-css', () => {
  return gulp.src('./public/**/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie11'
    }))
    .pipe(gulp.dest('./public'));
});


// 壓縮 public 目錄內 html
gulp.task('minify-html', () => {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
      removeComments: true, //清除 HTML 註釋
      collapseWhitespace: true, //壓縮 HTML
      collapseBooleanAttributes: true, //省略布爾屬性的值 <input checked="true"/> ==> <input />
      removeEmptyAttributes: true, //刪除所有空格作屬性值 <input id="" /> ==> <input />
      removeScriptTypeAttributes: true, //刪除 <script> 的 type="text/javascript"
      removeStyleLinkTypeAttributes: true, //刪除 <style> 和 <link> 的 type="text/css"
      minifyJS: true, //壓縮頁面 JS
      minifyCSS: true, //壓縮頁面 CSS
      minifyURLs: true
    }))
    .pipe(gulp.dest('./public'))
});

// 壓縮 public/uploads 目錄內圖片
gulp.task('minify-images', async () => {
  gulp.src('./public/img/**/*.*')
    .pipe(imagemin({
      optimizationLevel: 5, //類型：Number  預設：3  取值範圍：0-7（優化等級）
      progressive: true, //類型：Boolean 預設：false 無失真壓縮jpg圖片
      interlaced: false, //類型：Boolean 預設：false 隔行掃描gif進行渲染
      multipass: false, //類型：Boolean 預設：false 多次優化svg直到完全優化
    }))
    .pipe(gulp.dest('./public/img'));
});

// 執行 gulp 命令時執行的任務
gulp.task("default", gulp.series("generate-service-worker", gulp.parallel(
    'compress','minify-html', 'minify-css', 'minify-images'
)));

```

## Icon

Butterfly主題內置了[Font Awesome V5 ](https://fontawesome.com/)圖標，目前已更新到 5.13.0，總共有1,588個免費圖標。由於是國外的圖標網站，對於國內的一些網站Icon並不支持。如有需要，你可以引入其它的圖標服務商。

### iconfont

國內最出名的莫過於[iconfont](https://www.iconfont.cn/),功能很強大且圖標內容很豐富的矢量圖標庫。很多`Font Awesome`不支持的圖標都可以在這裏找到。同時，[iconfont](https://www.iconfont.cn/)支持選擇需要的圖標生成css鏈接，減少不必要的CSS加載。

#### 註冊賬號

打開[iconfont](https://www.iconfont.cn/)的網站，點擊導航欄的`人像`圖標，會跳出註冊界面，按要求註冊賬號。

![Snipaste_2020-05-28_21-12-01](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-iconfont.png)

#### 添加圖標入庫

選擇自己需要的圖標，把鼠標移到圖標上，會顯示三個按鈕（依次是添加入庫、收藏和下載），而我們需要的是把圖標添加入庫

![image-20200528205401440](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-iconfont-add.png)

添加入庫後，你可以看到網站右上角`購物車`圖標顯示了`1`字，代表圖標已經添加入庫，點擊`購物車`圖標，會彈出側邊欄顯示詳情。

![image-20200528205925258](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-iconfont-check.png)

![image-20200528210120442](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-iconfont-detail.png)



已選擇的圖標會顯示在上面，你可以重複上面的操作，把需要的圖標添加入庫，然後點擊`添加到項目`。

接下來會要求選擇項目名稱，沒有的自己創建一個。

![image-20200528211624459](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-iconfont-create.png)

#### 生成CSS鏈接

在添加到項目之後，會跳到項目的詳情界面。點擊`Font class`，然後再點擊`暫無代碼，點擊生成`文字。網站會自動生成CSS鏈接，我們只需要複製鏈接就行。

![image-20200528212301786](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-iconfont-link.png)

#### 添加鏈接進主題配置文件

打開`主題配置文件`，找到`inject`配置，按要求把鏈接填入

![image-20200528212440743](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-iconfont-setting.png)

在我們需要使用的地方填入icon，例如`Menu`，圖片使用格式為`iconfont icon名字`

![image-20200528213151304](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-iconfont-setting-menu.png)

運行Butterfly之後，你就可以看到menu的圖標生效了

![image-20200528213346338](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-iconfont-show.png)

#### 其他添加方法

除了通過引入CSS鏈接使用圖標，iconfont也支持通過其它方法使用圖標，具體可查看[iconfont官方使用文檔](https://www.iconfont.cn/help/detail?helptype=code)

### 其它圖標提供商

除了[iconfont](https://www.iconfont.cn/)，還有[RemixIcon](https://github.com/Remix-Design/RemixIcon)、[Flaticon](https://www.flaticon.com/categories/seo-and-web)等等提供商，很多圖標可以選擇，具體使用方法請參考各自的文檔。

## 圖片壓縮

Butterfly主題需要使用到很多圖片。如果圖片太大，會嚴重拖慢網站的加載速度。

圖片壓縮能夠有效的緩解這個問題。

除了通過`gulp-imagemin`來壓縮圖片，還可以通過在綫壓縮網站和軟件來進行壓縮。以下兩款是我自己正在使用的工具。網上有很多這樣的工具，挑選一款適合自己的就行。

- [tinypng](https://tinypng.com/)

  一個在綫壓縮的網站。壓縮後的圖片也保留了很高的質量，在知乎上很多人推薦，不過免費版有限制。

  ![image-20200526173511503](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-tinypng.png)

- [caesium](https://saerasoft.com/caesium/)

  開源軟件，支持Windows和macOS。可以批量壓縮軟件，無限制。

  ![image-20200526173316278](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-caesium.png)
  
-  [imgbot](https://github.com/marketplace/imgbot)

  imgbot 是一款 Github 插件。

  安裝後，你上傳圖片到 Github 去，imgbot 會自動壓縮圖片並推送 PR，我們只需要合併 PR 就行

  你可以配置 imgbot 的偵測方法、壓縮方法（有損/無損），具體可以查看插件的文檔

  ![image-20200830231742951](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-enhance-imgbot.png)

  

## 插件推薦

- [hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink)

  可以把鏈接permalink轉為數字的插件，配置容易，生成時自動轉為數字。

- [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) 

  生成RSS文件的插件
  
- [hexo-filter-nofollow](https://github.com/hexojs/hexo-filter-nofollow)

  為網站使用到的所有外鏈添加`rel="noopener external nofollow noreferrer"`, 可以有效地加強網站SEO和防止權重流失

- [hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap)

  生成sitemap的插件

- [hexo-generator-baidu-sitemap](https://github.com/coneycode/hexo-generator-baidu-sitemap)

  看名字就知道，是專門為百度生成sitemap的插件

## 參考

[利用 Workbox 實現博客的 PWA](https://io-oi.me/tech/pwa-via-workbox/)

[漸進式網絡應用程式]([https://zh.wikipedia.org/wiki/%E6%B8%90%E8%BF%9B%E5%BC%8F%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F](https://zh.wikipedia.org/wiki/漸進式網絡應用程序))

{% btn '/posts/198a4240/',✨ Butterfly 安裝文檔(七) 更新日誌,far fa-hand-point-right,block purple right larger %}