---
title: Butterfly 文檔(四) 標簽外挂
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
categories: Docs文檔
keywords: 'hexo,butterfly,主題,doc,教程,文檔'
description: Butterfly 文檔(四) 標簽外挂
cover: https://oss.012700.xyz/butterfly/2024/09/Butterfly-docs-04-cover.png
abbrlink: ceeb73f
date: 2020-05-28 22:38:11
comments: false
series: docs
abcjs: true
---

{% note green 'fas fa-rocket' %}

📚 文檔目錄

{% post_link Butterfly-文檔-一-快速開始 ' 🚀 快速開始' %} - {% post_link Butterfly-文檔-二-主題頁面 ' 📑 主題頁面' %} - {% post_link Butterfly-文檔-三-主題配置 ' 📌 主題配置' %} - {% post_link Butterfly-文檔-四-標簽外掛 ' ⚔️ 標簽外挂' %} - {% post_link Butterfly-文檔-五-主題問答 ' ❓ 主題問答' %} - {% post_link Butterfly-文檔-六-進階教程 ' ⚡️ 進階教程' %}

{% endnote %}

{% note orange 'fas fa-magic' %}

你可以通過右下角的 **簡** 按鈕切換為簡體顯示

{% endnote %}

---

{% note info %}

標籤外掛是 Hexo 獨有的功能，並不是標準的 Markdown 格式。

以下的寫法，只適用於 Butterfly 主題，用在其它主題上不會有效果，甚至可能會報錯。使用前請留意

{% endnote %}

{% note warning %}

標籤外掛雖然能為主題帶來一些額外的功能和 UI 方面的強化，但是，標籤外掛也有明顯的限制，使用時請留意。

{% endnote %}

## Note (Bootstrap Callout)

{% tabs note %}

<!-- tab 通用設置 -->

移植於 next 主題，並進行修改。

```yaml
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: simple
  icons: false
  border_radius: 3
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0
```

| 名稱            | 解釋                                                                                   |
| --------------- | -------------------------------------------------------------------------------------- |
| style           | 【可選】標籤樣式 <br>（simple/modern/flat/disabled）                                    |
| icons           | 【可選】是否顯示 icon                                                                   |
| border_radius   | 【可選】邊框圓角                                                                       |
| light_bg_offset | 【可選】背景色偏移量                                                                   |

`icons` 和 `light_bg_offset` 只對*方法一*生效

Note 標籤外掛有兩種用法

<!-- endtab -->

<!-- tab 用法 1 -->

```markdown
{% note [class] [no-icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```

| 名稱    | 用法                                                                                                |
| ------- | --------------------------------------------------------------------------------------------------- |
| class   | 【可選】標識，不同的標識有不同的配色<br>（ default / primary / success / info / warning / danger ） |
| no-icon | 【可選】不顯示 icon                                                                                 |
| style   | 【可選】可以覆蓋配置中的 style <br>（simple/modern/flat/disabled）                                  |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
simple
{% endnote %}

```markdown
{% note simple %}
默認 提示塊標籤
{% endnote %}

{% note default simple %}
default 提示塊標籤
{% endnote %}

{% note primary simple %}
primary 提示塊標籤
{% endnote %}

{% note success simple %}
success 提示塊標籤
{% endnote %}

{% note info simple %}
info 提示塊標籤
{% endnote %}

{% note warning simple %}
warning 提示塊標籤
{% endnote %}

{% note danger simple %}
danger 提示塊標籤
{% endnote %}
```

{% note simple %}
默認 提示塊標籤
{% endnote %}

{% note default simple %}
default 提示塊標籤
{% endnote %}

{% note primary simple %}
primary 提示塊標籤
{% endnote %}

{% note success simple %}
success 提示塊標籤
{% endnote %}

{% note info simple %}
info 提示塊標籤
{% endnote %}

{% note warning simple %}
warning 提示塊標籤
{% endnote %}

{% note danger simple %}
danger 提示塊標籤
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
modern
{% endnote %}

```markdown
{% note modern %}
默認 提示塊標籤
{% endnote %}

{% note default modern %}
default 提示塊標籤
{% endnote %}

{% note primary modern %}
primary 提示塊標籤
{% endnote %}

{% note success modern %}
success 提示塊標籤
{% endnote %}

{% note info modern %}
info 提示塊標籤
{% endnote %}

{% note warning modern %}
warning 提示塊標籤
{% endnote %}

{% note danger modern %}
danger 提示塊標籤
{% endnote %}
```

{% note modern %}
默認 提示塊標籤
{% endnote %}

{% note default modern %}
default 提示塊標籤
{% endnote %}

{% note primary modern %}
primary 提示塊標籤
{% endnote %}

{% note success modern %}
success 提示塊標籤
{% endnote %}

{% note info modern %}
info 提示塊標籤
{% endnote %}

{% note warning modern %}
warning 提示塊標籤
{% endnote %}

{% note danger modern %}
danger 提示塊標籤
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
flat
{% endnote %}

```markdown
{% note flat %}
默認 提示塊標籤
{% endnote %}

{% note default flat %}
default 提示塊標籤
{% endnote %}

{% note primary flat %}
primary 提示塊標籤
{% endnote %}

{% note success flat %}
success 提示塊標籤
{% endnote %}

{% note info flat %}
info 提示塊標籤
{% endnote %}

{% note warning flat %}
warning 提示塊標籤
{% endnote %}

{% note danger flat %}
danger 提示塊標籤
{% endnote %}
```

{% note flat %}
默認 提示塊標籤
{% endnote %}

{% note default flat %}
default 提示塊標籤
{% endnote %}

{% note primary flat %}
primary 提示塊標籤
{% endnote %}

{% note success flat %}
success 提示塊標籤
{% endnote %}

{% note info flat %}
info 提示塊標籤
{% endnote %}

{% note warning flat %}
warning 提示塊標籤
{% endnote %}

{% note danger flat %}
danger 提示塊標籤
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
disabled
{% endnote %}

```markdown
{% note disabled %}
默認 提示塊標籤
{% endnote %}

{% note default disabled %}
default 提示塊標籤
{% endnote %}

{% note primary disabled %}
primary 提示塊標籤
{% endnote %}

{% note success disabled %}
success 提示塊標籤
{% endnote %}

{% note info disabled %}
info 提示塊標籤
{% endnote %}

{% note warning disabled %}
warning 提示塊標籤
{% endnote %}

{% note danger disabled %}
danger 提示塊標籤
{% endnote %}
```

{% note disabled %}
默認 提示塊標籤
{% endnote %}

{% note default disabled %}
default 提示塊標籤
{% endnote %}

{% note primary disabled %}
primary 提示塊標籤
{% endnote %}

{% note success disabled %}
success 提示塊標籤
{% endnote %}

{% note info disabled %}
info 提示塊標籤
{% endnote %}

{% note warning disabled %}
warning 提示塊標籤
{% endnote %}

{% note danger disabled %}
danger 提示塊標籤
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
no-icon
{% endnote %}

```markdown
{% note no-icon %}
默認 提示塊標籤
{% endnote %}

{% note default no-icon %}
default 提示塊標籤
{% endnote %}

{% note primary no-icon %}
primary 提示塊標籤
{% endnote %}

{% note success no-icon %}
success 提示塊標籤
{% endnote %}

{% note info no-icon %}
info 提示塊標籤
{% endnote %}

{% note warning no-icon %}
warning 提示塊標籤
{% endnote %}

{% note danger no-icon %}
danger 提示塊標籤
{% endnote %}
```

{% note no-icon %}
默認 提示塊標籤
{% endnote %}

{% note default no-icon %}
default 提示塊標籤
{% endnote %}

{% note primary no-icon %}
primary 提示塊標籤
{% endnote %}

{% note success no-icon %}
success 提示塊標籤
{% endnote %}

{% note info no-icon %}
info 提示塊標籤
{% endnote %}

{% note warning no-icon %}
warning 提示塊標籤
{% endnote %}

{% note danger no-icon %}
danger 提示塊標籤
{% endnote %}

<!-- endtab -->

<!-- tab 用法 2（自定義 icon）-->

{% note pink 'fa-solid fa-bell' %}
3.2.0 以上版本支持
{% endnote %}

```markdown
{% note [color] [icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```

| 名稱  | 用法                                                                     |
| ----- | ------------------------------------------------------------------------ |
| color | 【可選】顔色 <br>(default / blue / pink / red / purple / orange / green) |
| icon  | 【可選】可配置自定義 icon (只支持 fontawesome 圖標, 也可以配置 no-icon ) |
| style | 【可選】可以覆蓋配置中的 style<br/>（simple/modern/flat/disabled）       |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
simple
{% endnote %}

```markdown
{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' simple%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' simple%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
前端最討厭的瀏覽器
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
modern
{% endnote %}

```markdown
{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' modern%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' modern %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' modern%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
前端最討厭的瀏覽器
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
flat
{% endnote %}

```markdown
{% note 'fab fa-cc-visa' flat %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' flat %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' flat%}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' flat%}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' flat%}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' flat%}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' flat %}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
前端最討厭的瀏覽器
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
disabled
{% endnote %}

```markdown
{% note 'fab fa-cc-visa' disabled %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' disabled %}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note 'fab fa-cc-visa' disabled %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}
2021 年快到了....
{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}
小心開車 安全至上
{% endnote %}
{% note red 'fas fa-fan' disabled %}
這是三片呢？還是四片？
{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}
剪刀石頭布
{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}
前端最討厭的瀏覽器
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
no-icon
{% endnote %}

```markdown
{% note no-icon %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue no-icon %}
2021 年快到了....
{% endnote %}
{% note pink no-icon %}
小心開車 安全至上
{% endnote %}
{% note red no-icon %}
這是三片呢？還是四片？
{% endnote %}
{% note orange no-icon %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple no-icon %}
剪刀石頭布
{% endnote %}
{% note green no-icon %}
前端最討厭的瀏覽器
{% endnote %}
```

{% note no-icon %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note blue no-icon %}
2021 年快到了....
{% endnote %}
{% note pink no-icon %}
小心開車 安全至上
{% endnote %}
{% note red no-icon %}
這是三片呢？還是四片？
{% endnote %}
{% note orange no-icon %}
你是刷 Visa 還是 UnionPay
{% endnote %}
{% note purple no-icon %}
剪刀石頭布
{% endnote %}
{% note green no-icon %}
前端最討厭的瀏覽器
{% endnote %}

<!-- endtab -->

{% endtabs %}

## Gallery 相冊圖庫

{% note pink 'fa-solid fa-bell' %}
2.2.0 以上提供
{% endnote %}

一個圖庫集合。

寫法

```
<div class="gallery-group-main">
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
</div>
```

| 參數        | 解釋           |
| ----------- | -------------- |
| name        | 圖庫名字       |
| description | 圖庫描述       |
| link        | 連接到對應相冊的地址 |
| img-url     | 圖庫封面的地址 |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```
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

## Gallery 相冊

{% note pink 'fa-solid fa-bell' %}
2.0.0 以上提供
{% endnote %}

區別於舊版的 Gallery 相冊,新的 Gallery 相冊會自動根據圖片長度進行排版，書寫也更加方便，與 markdown 格式一樣。可根據需要插入到相應的 md。

{% tabs %}

<!-- tab 本地 -->

寫法:

```markdown
{% gallery [button] %}
markdown 圖片格式
{% endgallery %}
```

| 參數      | 解釋                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| button    | 【可選】點擊按鈕加載更多圖片，填寫 true/false。默認為 `false`。                      |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```markdown
{% gallery %}
markdown 圖片格式
{% endgallery %}
```

例如

```markdown
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

<!-- endtab -->

<!-- tab 遠程拉取 -->

寫法：

```markdown
{% gallery url,[link],[button] %}
{% endgallery %}
```

| 參數      | 解釋                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| url       | 【必須】 識別詞                                                                      |
| link      | 【必須】遠程的 json 鏈接                                                             |
| button    | 【可選】點擊按鈕加載更多圖片，填寫 true/false。默認為 `false`。                      |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
遠程鏈接 Json 的例子
{% endnote %}

有三個參數，`url`是必須**存在**的，`alt` 和 `title` 可有，也可沒有。

```json
[
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0556.jpg",
    "alt": "IMG_0556.jpg",
    "title": "這是title"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0472.jpg",
    "alt": "IMG_0472.jpg"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0453.jpg",
    "alt": ""
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0931.jpg",
    "alt": ""
  }
]
```

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
示例
{% endnote %}

```markdown
{% gallery url,https://xxxx.com/sss.json %}
{% endgallery %}

{% gallery url,https://xxxx.com/sss.json,true,220,10 %}
{% endgallery %}

{% gallery url,https://xxxx.com/sss.json,true,,10 %}
{% endgallery %}
```

<!-- endtab -->

{% endtabs %}

## Tag-hide

{% note warning %}

2.2.0 以上提供

請注意，tag-hide 內的標簽外掛 content 內都不建議有 h1 - h6 等標題。因為 Toc 會把隱藏內容標題也顯示出來，而且當滾動屏幕時，如果隱藏內容沒有顯示出來，會導致 Toc 的滾動出現異常。

{% endnote %}

如果你想把一些文字、內容隱藏起來，並提供按鈕讓用户點擊顯示。可以使用這個標籤外掛。

{% tabs tag-hide %}

<!-- tab Inline -->

`inline` 在文本里面添加按鈕隱藏內容，只限文字

( content 不能包含英文逗號，可用`&sbquo;`)

```markdown
{% hideInline content,display,bg,color %}
```

| 參數    | 解釋                                                                 |
| ------- | -------------------------------------------------------------------- |
| content | 文本內容                                                             |
| display | 【可選】按鈕顯示的文字                                                 |
| bg      | 【可選】按鈕的背景顏色                                                 |
| color   | 【可選】按鈕文字的顏色                                                 |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```markdown
哪個英文字母最酷？ {% hideInline 因為西裝褲(C裝酷),查看答案,#FF7242,#fff %}

門裏站着一個人? {% hideInline 閃 %}
```

哪個英文字母最酷？ {% hideInline 因為西裝褲(C裝酷),查看答案,#FF7242,#fff %}

門裏站着一個人? {% hideInline 閃 %}

<!-- endtab -->

<!-- tab Block -->

`block`獨立的 block 隱藏內容，可以隱藏很多內容，包括圖片，代碼塊等等

( display 不能包含英文逗號，可用`&sbquo;`)

```markdown
{% hideBlock display,bg,color %}
content
{% endhideBlock %}
```

| 參數    | 解釋                                                                 |
| ------- | -------------------------------------------------------------------- |
| content | 文本內容                                                             |
| display | 【可選】按鈕顯示的文字                                                 |
| bg      | 【可選】按鈕的背景顏色                                                 |
| color   | 【可選】按鈕文字的顏色                                                 |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```mark
查看答案
{% hideBlock 查看答案 %}
傻子，怎麼可能有答案
{% endhideBlock %}
```

查看答案
{% hideBlock 查看答案 %}
傻子，怎麼可能有答案
{% endhideBlock %}

<!-- endtab -->

<!-- tab Toggle -->

{% note pink 'fa-solid fa-bell' %}
2.3.0 以上支持
{% endnote %}

如果你需要展示的內容太多，可以把它隱藏在收縮框裏，需要時再把它展開。

( display 不能包含英文逗號，可用`&sbquo;`)

```markdown
{% hideToggle display,bg,color %}
content
{% endhideToggle %}
```

| 參數    | 解釋                                                                 |
| ------- | -------------------------------------------------------------------- |
| display | 顯示的文字                                                 |
| bg      | 【可選】背景顏色                                                 |
| color   | 【可選】文字的顏色                                                 |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```markdown
{% hideToggle Butterfly安裝方法 %}
在你的博客根目錄裏

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

如果想要安裝比較新的 dev 分支，可以

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}
```

{% hideToggle Butterfly安裝方法 %}
在你的博客根目錄裏

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

如果想要安裝比較新的 dev 分支，可以

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}

<!-- endtab -->

{% endtabs %}

## Mermaid

使用 mermaid 標籤可以繪製 Flowchart（流程圖）、Sequence diagram（時序圖 ）、Class Diagram（類別圖）、State Diagram（狀態圖）、Gantt（甘特圖）和 Pie Chart（圓形圖），具體可以查看[mermaid 文檔](https://mermaid-js.github.io/mermaid/#/)

```yaml
# Mermaid
# https://github.com/mermaid-js/mermaid
mermaid:
  enable: false
  # Write Mermaid diagrams using code blocks
  code_write: false
  # built-in themes: default / forest / dark / neutral
  theme:
    light: default
    dark: dark
```

寫法：

```markdown
{% mermaid '[config]' %}
內容
{% endmermaid %}
```

| 參數   | 解釋                                                                                     |
| ------ | ---------------------------------------------------------------------------------------- |
| config | 【可選】mermaid 圖表配置, 以 JSON 格式書寫，具體配置參數請參考[mermaid 文檔](https://mermaid.js.org/config/schema-docs/config.html) |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```markdown
{% mermaid %}
pie
title Key elements in Product X
"Calcium" : 42.96
"Potassium" : 50.05
"Magnesium" : 10.01
"Iron" : 5
{% endmermaid %}
```

{% mermaid %}
pie
title Key elements in Product X
"Calcium" : 42.96
"Potassium" : 50.05
"Magnesium" : 10.01
"Iron" : 5
{% endmermaid %}

```markdown
{% mermaid '{"themeVariables": { "fontSize": "16px" }, "layout": "elk", "look": "handDrawn"}' %}
flowchart LR
  A[Start] --> B{Decision}
  B -->|Yes| C[Continue]
  B -->|No| D[Stop]
{% endmermaid %}
```

{% mermaid '{"themeVariables": { "fontSize": "16px" }, "layout": "elk", "look": "handDrawn"}' %}
flowchart LR
  A[Start] --> B{Decision}
  B -->|Yes| C[Continue]
  B -->|No| D[Stop]
{% endmermaid %}

## Tabs

移植於 next 主題

使用方法

```markdown
{% tabs Unique name, [index] %}

<!-- tab [Tab caption] [@icon] -->

Any content (support inline tags too).

<!-- endtab -->

{% endtabs %}
```

| 參數         | 解釋                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------ |
| Unique name  | tabs 區塊標籤的唯一名稱，不包含逗號。將用於每個選項卡的 #id 前綴，並附加其索引號。若名稱中有空格，生成 #id 時會將空格替換為短橫線。僅對當前文章/頁面的 URL 必須唯一！ |
| [index]      | 【可選】活動選項卡的索引號。如果未指定，將選擇第一個選項卡（1）。如果索引為 -1，則不會選擇任何選項卡，類似於折疊內容。可選參數。 |
| [Tab caption]| 當前選項卡的標題。如果未指定標題，將使用唯一名稱和選項卡索引後綴作為選項卡標題。如果未指定標題，但指定了圖標，標題將為空。 |
| [@icon]      | 【可選】FontAwesome 圖標名稱（全名，如 'fas fa-font'）。可以有或沒有空格；例如 'Tab caption @icon' 與 'Tab caption@icon' 類似。|

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子 1 - 預設選擇第一個【默認】
{% endnote %}

```markdown
{% tabs test1 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}
```

{% tabs test1 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子 2 - 預設選擇 tabs
{% endnote %}

```markdown
{% tabs test2, 3 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}
```

{% tabs test2, 3 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子 3 - 沒有預設值
{% endnote %}

```markdown
{% tabs test3, -1 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}
```

{% tabs test3, -1 %}

<!-- tab -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子 4 - 自定義 Tab 名 + 只有 icon + icon 和 Tab 名
{% endnote %}

```markdown
{% tabs test4 %}

<!-- tab 第一個Tab -->

**tab 名字為第一個 Tab**

<!-- endtab -->

<!-- tab @fab fa-apple-pay -->

**只有圖標 沒有 Tab 名字**

<!-- endtab -->

<!-- tab 炸彈@fas fa-bomb -->

**名字+icon**

<!-- endtab -->

{% endtabs %}
```

{% tabs test4 %}

<!-- tab 第一個Tab -->

**tab 名字為第一個 Tab**

<!-- endtab -->

<!-- tab @fab fa-apple-pay -->

**只有圖標 沒有 Tab 名字**

<!-- endtab -->

<!-- tab 炸彈@fas fa-bomb -->

**名字+icon**

<!-- endtab -->

{% endtabs %}

## Button

{% note pink 'fa-solid fa-bell' %}
3.0 以上適用
{% endnote %}

使用方法：

```markdown
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}
```

| 參數      | 解釋                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| url       | 【必須】鏈接地址                                                                     |
| text      | 【必須】按鈕文字                                                                      |
| icon      | 【可選】圖標                                                                         |
| color     | 【可選】按鈕背景顔色（默認 style 時）按鈕字體和邊框顔色(outline 時)<br> 配置： default/blue/pink/red/purple/orange/green               |
| style     | 【可選】按鈕樣式 默認實心 <br> 配置： outline/留空                                                |
| layout    | 【可選】按鈕佈局 默認為 line <br> 配置： block/留空                                              |
| position  | 【可選】按鈕位置 前提是設置了 layout 為 block 默認為左邊 <br> 配置： center/right/留空         |
| size      | 【可選】按鈕大小 <br> 配置： larger/留空                                                          |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```markdown
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
```

This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}

```markdown
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block center larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block right outline larger %}
```

{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block center larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block right outline larger %}

**more than one button in center**

```markdown
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,green larger %}
```

{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,green larger %}

```markdown
<div class="btn-center">
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline green larger %}
</div>
```

<div class="btn-center">
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline green larger %}
</div>

## InlineImg

主題中的圖片都是默認以`塊級元素`顯示，如果你想以`內聯元素`顯示，可以使用這個標簽外掛。

```markdown
{% inlineImg [src] [height] %}
```

| 參數    | 解釋         |
| ------- | ------------ |
| src     | 圖片鏈接     |
| height  | 【可選】圖片高度限制 |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```markdown
你看她長得漂亮不

![](https://i.loli.net/2021/03/19/2P6ivUGsdaEXSFI.png)

我覺得很漂亮 {% inlineImg https://i.loli.net/2021/03/19/5M4jUB3ynq7ePgw.png 150px %}
```

你看我長得漂亮不

![](https://i.loli.net/2021/03/19/2P6ivUGsdaEXSFI.png)

我覺得很漂亮 {% inlineImg https://i.loli.net/2021/03/19/5M4jUB3ynq7ePgw.png 150px %}

## Label

{% note warning %}

由於 hexo 的渲染限制， 在段落開頭使用 label 標籤外掛會出現一些問題。例如：連續開頭使用 label 標籤外掛的段落無法換行

建議 **不要** 在段落開頭使用 label 標籤外掛

{% endnote %}

高亮所需的文字

```markdown
{% label text color %}
```

| 參數  | 解釋                                                                              |
| ----- | --------------------------------------------------------------------------------- |
| text  | 文字                                                                              |
| color | 【可選】背景顏色，默認為 `default`<br />default/blue/pink/red/purple/orange/green |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```markdown
臣亮言：{% label 先帝 %}創業未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此誠{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈於內；{% label 忠志之士 purple %}，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。
宮中、府中，俱為一體；陟罰臧否，不宜異同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。
```

臣亮言：{% label 先帝 %}創業未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此誠{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈於內；{% label 忠志之士 purple %}，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。

宮中、府中，俱為一體；陟罰臧否，不宜異同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。

## Timeline

{% note pink 'fa-solid fa-bell' %}
4.0.0 以上支持
{% endnote %}

```markdown
{% timeline title,color %}

<!-- timeline title -->

xxxxx

<!-- endtimeline -->
<!-- timeline title -->

xxxxx

<!-- endtimeline -->

{% endtimeline %}
```

| 參數  | 解釋                                                                           |
| ----- | ------------------------------------------------------------------------------ |
| title | 標題/時間線                                                                    |
| color | timeline 顏色<br />default(留空) / blue / pink / red / purple / orange / green |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```markdown
{% timeline 2022 %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022 %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,blue %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022,blue %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,pink %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022,pink %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,red %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022,red %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,purple %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022,purple %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,orange %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022,orange %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,green %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022,green %}

<!-- timeline 01-02 -->

這是測試頁面

<!-- endtimeline -->

{% endtimeline %}

## Flink

{% note pink 'fa-solid fa-bell' %}
4.1.0 支持
{% endnote %}

可在任何界面插入類似友情鏈接列表效果

內容格式與友情鏈接界面一樣，支持 `yml` 格式

```markdown
{% flink %}
xxxxxx
{% endflink %}
```

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```markdown
{% flink %}
- class_name: 友情鏈接
  class_desc: 那些人，那些事
  link_list:
    - name: CrazyWong
      link: https://crazywong.com
      avatar: https://crazywong.com/img/avatar.png
      descr: 今日事,今日畢
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
{% endflink %}
```

{% flink %}
- class_name: 友情鏈接
  class_desc: 那些人，那些事
  link_list:
    - name: CrazyWong
      link: https://crazywong.com
      avatar: https://crazywong.com/img/avatar.png
      descr: 今日事,今日畢
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
{% endflink %}

## ABCJS 樂譜

在頁面上渲染樂譜

```yaml
# abcjs (樂譜渲染)
# See https://github.com/paulrosen/abcjs
# ---------------
abcjs:
  enable: true
  per_page: true
```

| 參數    | 解釋                                                                 |
| ------- | -------------------------------------------------------------------- |
| enable  | 是否啟用 ABCJS                                                            |
| per_page | 是否每頁都加載 ABCJS, 如果設爲 false, 在你使用 ABCJS 時，你需要在使用 ABCJS 的頁面 Front-matter 添加 `abcjs: true`                                               |

寫法：

```markdown
{% score %}
樂譜代碼
{% endscore %}
```

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```markdown
{% score %}
X:1
T:alternate heads
M:C
L:1/8
U:n=!style=normal!
K:C treble style=rhythm
"Am" BBBB B2 B>B | "Dm" B2 B/B/B "C" B4 |"Am" B2 nGnB B2 nGnA | "Dm" nDB/B/ nDB/B/ "C" nCB/B/ nCB/B/ |B8| B0 B0 B0 B0 |]
%%text This translates to:
[M:C][K:style=normal]
[A,EAce][A,EAce][A,EAce][A,EAce] [A,EAce]2 [A,EAce]>[A,EAce] |[DAdf]2 [DAdf]/[DAdf]/[DAdf] [CEGce]4 |[A,EAce]2 GA [A,EAce] GA |D[DAdf]/[DAdf]/ D[DAdf]/[DAdf]/ C [CEGce]/[CEGce]/ C[CEGce]/[CEGce]/ |[CEGce]8 | [CEGce]2 [CEGce]2 [CEGce]2 [CEGce]2 |]
GAB2 !style=harmonic![gb]4|GAB2 [K: style=harmonic]gbgb|
[K: style=x]
C/A,/ C/C/E C/zz2|
w:Rock-y did-nt like that
{% endscore %}
```

{% score %}
X:1
T:alternate heads
M:C
L:1/8
U:n=!style=normal!
K:C treble style=rhythm
"Am" BBBB B2 B>B | "Dm" B2 B/B/B "C" B4 |"Am" B2 nGnB B2 nGnA | "Dm" nDB/B/ nDB/B/ "C" nCB/B/ nCB/B/ |B8| B0 B0 B0 B0 |]
%%text This translates to:
[M:C][K:style=normal]
[A,EAce][A,EAce][A,EAce][A,EAce] [A,EAce]2 [A,EAce]>[A,EAce] |[DAdf]2 [DAdf]/[DAdf]/[DAdf] [CEGce]4 |[A,EAce]2 GA [A,EAce] GA |D[DAdf]/[DAdf]/ D[DAdf]/[DAdf]/ C [CEGce]/[CEGce]/ C[CEGce]/[CEGce]/ |[CEGce]8 | [CEGce]2 [CEGce]2 [CEGce]2 [CEGce]2 |]
GAB2 !style=harmonic![gb]4|GAB2 [K: style=harmonic]gbgb|
[K: style=x]
C/A,/ C/C/E C/zz2|
w:Rock-y did-nt like that
{% endscore %}

## Series 系列文章

在頁面上顯示系列文章

```yaml
series:
  enable: true
  orderBy: 'title' # Order by title or date
  order: 1 # Sort of order. 1, asc for ascending; -1, desc for descending
  number: true
```

| 參數    | 解釋                                                                 |
| ------- | -------------------------------------------------------------------- |
| enable  | 是否啟用 series                                                            |
| orderBy | 排序方式，默認為 title, 可選 title / date                                               |
| order   | 排序方式，默認為 1, 可選 1 (升序) / -1（降序）                                                 |
| number  | 顯示序列號                                                    |

寫法：

```markdown
{% series %}
{% series [series name] %}
```

在文章的 `front-matter` 上添加參數 series，並給與一個標識

使用此標簽外掛，會把相同標識的文章以列表的形式展示

如果不寫 series 標識，則默認為你使用此標簽外掛所在的文章的 series 標識

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```markdown
{% series docs %}
```
{% series docs %}

## Chartjs 圖表

另一種方式添加圖表

```yaml
# chartjs
# 參見 https://www.chartjs.org/docs/latest/
chartjs:
  enable: false
  # 除非你了解它們的工作原理，否則不要修改。
  # 默認設置僅在未指定 MD 語法時使用。
  # 圖表的字體顏色
  fontColor:
    light: "rgba(0, 0, 0, 0.8)"
    dark: "rgba(255, 255, 255, 0.8)"
  # 圖表的邊框顏色
  borderColor:
    light: "rgba(0, 0, 0, 0.1)"
    dark: "rgba(255, 255, 255, 0.2)"
  # 雷達圖和極區圖的刻度標籤背景顏色
  scale_ticks_backdropColor:
    light: "transparent"
    dark: "transparent"
```

| 參數    | 解釋                                                                 |
| ------- | -------------------------------------------------------------------- |
| enable  | 是否啟用 chartjs                                                            |
| fontColor | 圖表的字體顏色 |
| borderColor | 圖表的邊框顏色 |
| scale_ticks_backdropColor | 雷達和極區圖表的刻度標籤的背景顏色 |

寫法：

```markdown
{% chartjs [width, abreast, chartId] %}
<!-- chart -->
<!-- endchart -->
<!-- desc -->
<!-- enddesc -->
{% endchartjs %}
```

| 參數    | 解釋                                                                 |
| ------- | -------------------------------------------------------------------- |
| width   | 【可選】圖表寬度 |
| abreast | 【可選】是否并排顯示，當你寫了 `<!-- desc -->`, 使用并排模式，圖標和描述將并排顯示。<br> abreast 為 true 時，需要配置 width 的值 |
| chartId | 【可選】圖表 ID |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
例子
{% endnote %}

```
{% chartjs 70 %}

<!-- chart -->
{
    "type": "line",
    "data": {
        "labels": ["January", "February", "March", "April", "May", "June", "July"],
        "datasets": [{
            "label": "My First dataset",
            "backgroundColor": "rgb(255, 99, 132)",
            "borderColor": "rgb(255, 99, 132)",
            "data": [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    "options": {
        "responsive": true,
        "title": {
            "display": true,
            "text": "Chart.js Line Chart"
        }
    }
}
<!-- endchart -->

{% endchartjs %}
```

{% chartjs 70 %}

<!-- chart -->
{
    "type": "line",
    "data": {
        "labels": ["January", "February", "March", "April", "May", "June", "July"],
        "datasets": [{
            "label": "My First dataset",
            "backgroundColor": "rgb(255, 99, 132)",
            "borderColor": "rgb(255, 99, 132)",
            "data": [0, 10, 5, 2, 20, 30, 45]
        }]
    },
    "options": {
        "responsive": true,
        "title": {
            "display": true,
            "text": "Chart.js Line Chart"
        }
    }
}
<!-- endchart -->

{% endchartjs %}

```markdown
{% chartjs %}

<!-- chart -->
{
  "type": "radar",
  "data": {
    "labels": [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running"
    ],
    "datasets": [
      {
        "label": "My First Dataset",
        "data": [65, 59, 90, 81, 56, 55, 40],
        "fill": true,
        "backgroundColor": "rgba(255, 99, 132, 0.2)",
        "borderColor": "rgb(255, 99, 132)",
        "pointBackgroundColor": "rgb(255, 99, 132)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgb(255, 99, 132)"
      },
      {
        "label": "My Second Dataset",
        "data": [28, 48, 40, 19, 96, 27, 100],
        "fill": true,
        "backgroundColor": "rgba(54, 162, 235, 0.2)",
        "borderColor": "rgb(54, 162, 235)",
        "pointBackgroundColor": "rgb(54, 162, 235)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgb(54, 162, 235)"
      }
    ]
  },
  "options": {
    "elements": {
      "line": {
        "borderWidth": 3
      }
    }
  }
}
<!-- endchart -->
{% endchartjs %}
```

{% chartjs %}

<!-- chart -->
{
  "type": "radar",
  "data": {
    "labels": [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running"
    ],
    "datasets": [
      {
        "label": "My First Dataset",
        "data": [65, 59, 90, 81, 56, 55, 40],
        "fill": true,
        "backgroundColor": "rgba(255, 99, 132, 0.2)",
        "borderColor": "rgb(255, 99, 132)",
        "pointBackgroundColor": "rgb(255, 99, 132)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgb(255, 99, 132)"
      },
      {
        "label": "My Second Dataset",
        "data": [28, 48, 40, 19, 96, 27, 100],
        "fill": true,
        "backgroundColor": "rgba(54, 162, 235, 0.2)",
        "borderColor": "rgb(54, 162, 235)",
        "pointBackgroundColor": "rgb(54, 162, 235)",
        "pointBorderColor": "#fff",
        "pointHoverBackgroundColor": "#fff",
        "pointHoverBorderColor": "rgb(54, 162, 235)"
      }
    ]
  },
  "options": {
    "elements": {
      "line": {
        "borderWidth": 3
      }
    }
  }
}
<!-- endchart -->
{% endchartjs %}

```markdown
{% chartjs 40,true %}
<!-- chart -->
{
    "type": "pie",
    "data": {
        "labels": [
            "编程",
            "音乐",
            "阅读",
            "游戏",
            "健身",
            "旅游"
        ],
        "datasets": [
            {
                "label": "喜爱指数",
                "data": [
                    30,
                    24,
                    19,
                    14,
                    9,
                    4
                ],
                "backgroundColor": {
                    "dark-mode": [
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(54, 162, 235, 0.5)",
                        "rgba(255, 206, 86, 0.5)",
                        "rgba(75, 192, 192, 0.5)",
                        "rgba(153, 102, 255, 0.5)",
                        "rgba(255, 159, 64, 0.5)"
                    ],
                    "light-mode": [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)"
                    ]
                },
                "borderColor": {
                    "dark-mode": [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    "light-mode": [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ]
                }
            }
        ]
    },
    "options": {
        "plugins": {
            "legend": {
                "labels": {
                    "color": {
                        "dark-mode": "rgba(255, 255, 255, 0.8)",
                        "light-mode": "rgba(0, 0, 0, 0.8)"
                    }
                }
            }
        }
    }
}
<!-- endchart -->
<!-- desc -->
除了**计算机编程**外，我想不出还有其他让我感兴趣的工作。
我可以无中生有地创造出**精美的范式**和**结构**，
在此过程中也解决了无数的小谜团。
<span style="font-size:0.8em;color: var(--sep-secondtext);">I can't think of any other job other than **computer programming** that interests me.
I can create **beautiful paradigms** and **structures** out of nothing,
Countless small mysteries are also solved in the process.</span>
<!-- enddesc -->
{% endchartjs %}
```

{% chartjs 40,true %}
<!-- chart -->
{
    "type": "pie",
    "data": {
        "labels": [
            "编程",
            "音乐",
            "阅读",
            "游戏",
            "健身",
            "旅游"
        ],
        "datasets": [
            {
                "label": "喜爱指数",
                "data": [
                    30,
                    24,
                    19,
                    14,
                    9,
                    4
                ],
                "backgroundColor": {
                    "dark-mode": [
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(54, 162, 235, 0.5)",
                        "rgba(255, 206, 86, 0.5)",
                        "rgba(75, 192, 192, 0.5)",
                        "rgba(153, 102, 255, 0.5)",
                        "rgba(255, 159, 64, 0.5)"
                    ],
                    "light-mode": [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)"
                    ]
                },
                "borderColor": {
                    "dark-mode": [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    "light-mode": [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ]
                }
            }
        ]
    },
    "options": {
        "plugins": {
            "legend": {
                "labels": {
                    "color": {
                        "dark-mode": "rgba(255, 255, 255, 0.8)",
                        "light-mode": "rgba(0, 0, 0, 0.8)"
                    }
                }
            }
        }
    }
}
<!-- endchart -->
<!-- desc -->
除了**计算机编程**外，我想不出还有其他让我感兴趣的工作。
我可以无中生有地创造出**精美的范式**和**结构**，
在此过程中也解决了无数的小谜团。
<span style="font-size:0.8em;color: var(--sep-secondtext);">I can't think of any other job other than **computer programming** that interests me.
I can create **beautiful paradigms** and **structures** out of nothing,
Countless small mysteries are also solved in the process.</span>
<!-- enddesc -->
{% endchartjs %}

{% btn '/posts/98d20436/',❓ Butterfly 文檔(五) 主題問答,far fa-hand-point-right,block green right larger %}
