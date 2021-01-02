---
title: Butterfly添加全局吸底Aplayer教程
abbrlink: 507c070f
date: 2020-07-31 19:02:28
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
  - Aplayer
categories: 進階教程
keywords: 'hexo,butterfly,主題,doc,教程,文檔,Aplayer,Aplayer吸底,pjax'
description: Butterfly添加全局吸底Aplayer教程
top_img:
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-add-aplayer-cover.png
---

{% note info %}

以下文章只是教程
如果遇到使用問題，请仔细查看插件文档，或者到插件那裏反饋

{% endnote%}
## 前言

如果你想使用aplayer，很多人都會推薦安裝[hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)這款插件。這款插件通過Hexo獨有的標籤外掛，我們可以很方便的寫入一些參數，插件就會幫我們生成對應的html。如果你只是使用一些簡單的功能，其實無需使用到這個插件，只需以html格式書寫就行，不用插件去轉換。

例如：

如果使用插件，在markdown中要這樣寫

```markdown
{% meting "000PeZCQ1i4XVs" "tencent" "artist" "theme:#3F51B5" "mutex:true" "preload:auto" %}
```

其會被插件渲染為

```html
<div id="aplayer-uxAIfEUs" class="aplayer aplayer-tag-marker meting-tag-marker" data-id="000PeZCQ1i4XVs" data-server="tencent" data-type="artist" data-mode="circulation" data-autoplay="false" data-mutex="true" data-listmaxheight="340px" data-preload="auto" data-theme="#3F51B5"></div>
```

如果我們不想使用插件，就需要在markdown中用html的格式書寫，同時把主題配置文件中的`aplayerInject`開啟

```markdown
<div class="aplayer" data-id="000PeZCQ1i4XVs" data-server="tencent" data-type="artist" data-mutex="true" data-preload="auto" data-theme="#3F51B5"></div>
```

這樣我們就可以不用使用多一個插件，當然這種東西見仁見智，選自己喜歡的就行。

回到正題，這篇文章將教大家如何在Butterfly上使用全局吸底Aplayer

![aplayer](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-aplayer-xidi.gif)

## 關閉 `asset_inject`

{% note info %}

此步驟適用於安裝了`hexo-tag-aplayer`插件的人

{% endnote %}



由於需要全局都插入aplayer和meting資源，為了防止插入重複的資源，需要把asset_inject設為`false`

在Hexo的配置文件中

```yaml
aplayer:
  meting: true
  asset_inject: false
```

## 開啟主題的`aplayerInject`

在主題的配置文件中，`enable`設為`true`和`per_page`設為`true`

```yaml
# Inject the css and script (aplayer/meting)
aplayerInject:
  enable: true
  per_page: true
```

## 插入Aplayer html

為了適配hexo-tag-aplayer，主題內置的Meting js 仍為1.2版本，並非最新的2.x版本。

Aplayer html 例子：

```markdown
<div class="aplayer no-destroy" data-id="000PeZCQ1i4XVs" data-server="tencent" data-type="artist" data-fixed="true" data-mini="true" data-listFolded="false" data-order="random" data-preload="none" data-autoplay="true" muted></div>
```

參數解釋

| option             | default     | description                                                                                                                  |
| ------------------ | ----------- | ---------------------------------------------------------------------------------------------------------------------------- |
| data-id            | **require** | song id / playlist id / album id / search keyword                                                                            |
| data-server        | **require** | music platform: `netease`, `tencent`, `kugou`, `xiami`, `baidu`                                                              |
| data-type          | **require** | `song`, `playlist`, `album`, `search`, `artist`                                                                              |
| data-fixed         | `false`     | enable fixed mode                                                                                                            |
| data-mini          | `false`     | enable mini mode                                                                                                             |
| data-autoplay      | `false`     | audio autoplay                                                                                                               |
| data-theme         | `#2980b9`   | main color                                                                                                                   |
| data-loop          | `all`       | player loop play, values: 'all', 'one', 'none'                                                                               |
| data-order         | `list`      | player play order, values: 'list', 'random'                                                                                  |
| data-preload       | `auto`      | values: 'none', 'metadata', 'auto'                                                                                           |
| data-volume        | `0.7`       | default volume, notice that player will remember user setting, default volume will not work after user set volume themselves |
| data-mutex         | `true`      | prevent to play multiple player at the same time, pause other players when this player start play                            |
| data-lrctype       | `0`         | lyric type                                                                                                                   |
| data-listfolded    | `false`     | indicate whether list should folded at first                                                                                 |
| data-listmaxheight | `340px`     | list max height                                                                                                              |
| data-storagename   | `metingjs`  | localStorage key that store player setting                                                                                   |

{% note info %}

`require`代表着這些參數是必須要使用的，其它的參數則可以根據自己需要配置。

配置全局吸底，`data-fixed`和`data-mini`也必須配置，配置為`true`

如果使用Pjax，則在class裏需添加`no-destroy`，這樣防止切換頁面時Aplayer被銷毀

{% endnote %}

把`aplayer代碼`插入到主題配置文件的`inject.bottom`去

```yaml
inject:
  head:
  bottom:
    - <div class="aplayer no-destroy" data-id="000PeZCQ1i4XVs" data-server="tencent" data-type="artist" data-fixed="true" data-mini="true" data-listFolded="false" data-order="random" data-preload="none" data-autoplay="true" muted></div>
```

運行Hexo就可以看到網頁左下角出現了Aplayer

最後，如果你想切換頁面時，音樂不會中斷。請把主題配置文件的`pjax`設為`true`

## UI 調整

按照上面的步驟設置完成后，瀏覽器左下角會出現Aplayer。打開文章頁面時，你會發現打開Toc目錄的按鈕被遮擋了。我們需要修改CSS來改變按鈕的位置。
位置怎麽移動根據自己需求決定，這裏列出2種方法。

### 向上調整

```css
#toggle-sidebar {
  bottom: 80px
}
```

![aplayer1](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-add-aplayer-css-bottom.gif)

在主題配置文件中，添加到`inject`去

```yaml
inject:
  head:
    - '<style type="text/css">#toggle-sidebar {bottom: 80px}</style>'
```

### 向右調整

```css
#toggle-sidebar {
  left: 100px
}
```

![butterfly-add-aplayer-left](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/butterfly-add-aplayer-left.gif)

在主題配置文件中，添加到`inject`去

```yaml
inject:
  head:
    - '<style type="text/css">#toggle-sidebar {left:100px}</style>'
```

