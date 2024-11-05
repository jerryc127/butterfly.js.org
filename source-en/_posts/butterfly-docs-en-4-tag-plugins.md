---
title: Butterfly document - Tag Plugins
comments: false
date: 2023-06-30 21:17:55
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
cover: https://jsd.012700.xyz/gh/jerryc127/CDN@m2/img/butterfly-docs-en-theme-config-two.png
abbrlink: butterfly-docs-en-tag-plugins
series: docs
abcjs: true
---

{% note orange 'fas fa-language' %}

This article is translated from ChatGPT.

{% endnote %}

{% note green 'fas fa-rocket' %}

 📚  Table of Contents

{% post_link butterfly-docs-en-1-get-started ' 🚀 Get Started' %} - {% post_link butterfly-docs-en-2-theme-pages ' 📑 Theme Pages' %} - {% post_link butterfly-docs-en-3-theme-config ' 📌 Theme Configuration' %} - {% post_link butterfly-docs-en-4-tag-plugins ' ⚔️ Tag Plugins' %} - {% post_link butterfly-docs-en-5-theme-q-a ' ❓ Q&A' %} - {% post_link butterfly-docs-en-6-advanced-tutorial ' ⚡️ Advanced Tutorials' %}

{% endnote %}

***

{% note info %}

Tag plugins are a unique feature of Hexo and are not part of the standard Markdown format.

The following syntax is only applicable to the Butterfly theme. It will not work on other themes and may even cause errors. Please be aware before using it.
{% endnote %}

{% note warning %}

Although tag plugins can provide additional functionality and UI enhancements to the theme, they also come with notable limitations. Please be mindful when using them.

{% endnote %}

## Note (Bootstrap Callout)

{% tabs note %}

<!-- tab General Settings -->

Ported from the Next theme and modified.

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

| Name            | Description                                                                            |
| --------------- | -------------------------------------------------------------------------------------- |
| style           | [Optional] Tag style <br> (simple/modern/flat/disabled)                                |
| icons           | [Optional] Whether to display icons                                                    |
| border_radius   | [Optional] Border radius                                                               |
| light_bg_offset | [Optional] Background color offset                                                     |

`icons` and `light_bg_offset` only apply to *Method 1*

The Note tag plugin has two usages

<!-- endtab -->

<!-- tab Usage 1 -->

```markdown
{% note [class] [no-icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```

| Name    | Description                                                                                         |
| ------- | --------------------------------------------------------------------------------------------------- |
| class   | [Optional] Identifier, different identifiers have different color schemes <br> (default / primary / success / info / warning / danger) |
| no-icon | [Optional] Do not display icon                                                                      |
| style   | [Optional] Can override the style in the configuration <br> (simple/modern/flat/disabled)           |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
simple
{% endnote %}

```markdown
{% note simple %}
default tag
{% endnote %}

{% note default simple %}
default tag
{% endnote %}

{% note primary simple %}
primary tag
{% endnote %}

{% note success simple %}
success tag
{% endnote %}

{% note info simple %}
info tag
{% endnote %}

{% note warning simple %}
warning tag
{% endnote %}

{% note danger simple %}
danger tag
{% endnote %}
```

{% note simple %}
default tag
{% endnote %}

{% note default simple %}
default tag
{% endnote %}

{% note primary simple %}
primary tag
{% endnote %}

{% note success simple %}
success tag
{% endnote %}

{% note info simple %}
info tag
{% endnote %}

{% note warning simple %}
warning tag
{% endnote %}

{% note danger simple %}
danger tag
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
modern
{% endnote %}

```markdown
{% note modern %}
default tag
{% endnote %}

{% note default modern %}
default tag
{% endnote %}

{% note primary modern %}
primary tag
{% endnote %}

{% note success modern %}
success tag
{% endnote %}

{% note info modern %}
info tag
{% endnote %}

{% note warning modern %}
warning tag
{% endnote %}

{% note danger modern %}
danger tag
{% endnote %}
```

{% note modern %}
default tag
{% endnote %}

{% note default modern %}
default tag
{% endnote %}

{% note primary modern %}
primary tag
{% endnote %}

{% note success modern %}
success tag
{% endnote %}

{% note info modern %}
info tag
{% endnote %}

{% note warning modern %}
warning tag
{% endnote %}

{% note danger modern %}
danger tag
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
flat
{% endnote %}

```markdown
{% note flat %}
default tag
{% endnote %}

{% note default flat %}
default tag
{% endnote %}

{% note primary flat %}
primary tag
{% endnote %}

{% note success flat %}
success tag
{% endnote %}

{% note info flat %}
info tag
{% endnote %}

{% note warning flat %}
warning tag
{% endnote %}

{% note danger flat %}
danger tag
{% endnote %}
```

{% note flat %}
default tag
{% endnote %}

{% note default flat %}
default tag
{% endnote %}

{% note primary flat %}
primary tag
{% endnote %}

{% note success flat %}
success tag
{% endnote %}

{% note info flat %}
info tag
{% endnote %}

{% note warning flat %}
warning tag
{% endnote %}

{% note danger flat %}
danger tag
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
disabled
{% endnote %}

```markdown
{% note disabled %}
default tag
{% endnote %}

{% note default disabled %}
default tag
{% endnote %}

{% note primary disabled %}
primary tag
{% endnote %}

{% note success disabled %}
success tag
{% endnote %}

{% note info disabled %}
info tag
{% endnote %}

{% note warning disabled %}
warning tag
{% endnote %}

{% note danger disabled %}
danger tag
{% endnote %}
```

{% note disabled %}
default tag
{% endnote %}

{% note default disabled %}
default tag
{% endnote %}

{% note primary disabled %}
primary tag
{% endnote %}

{% note success disabled %}
success tag
{% endnote %}

{% note info disabled %}
info tag
{% endnote %}

{% note warning disabled %}
warning tag
{% endnote %}

{% note danger disabled %}
danger tag
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
no-icon
{% endnote %}

```markdown
{% note no-icon %}
default tag
{% endnote %}

{% note default no-icon %}
default tag
{% endnote %}

{% note primary no-icon %}
primary tag
{% endnote %}

{% note success no-icon %}
success tag
{% endnote %}

{% note info no-icon %}
info tag
{% endnote %}

{% note warning no-icon %}
warning tag
{% endnote %}

{% note danger no-icon %}
danger tag
{% endnote %}
```

{% note no-icon %}
default tag
{% endnote %}

{% note default no-icon %}
default tag
{% endnote %}

{% note primary no-icon %}
primary tag
{% endnote %}

{% note success no-icon %}
success tag
{% endnote %}

{% note info no-icon %}
info tag
{% endnote %}

{% note warning no-icon %}
warning tag
{% endnote %}

{% note danger no-icon %}
danger tag
{% endnote %}

<!-- endtab -->

<!-- tab Usage 2 (Custom icon) -->

{% note pink 'fa-solid fa-bell' %}
Supported from version 3.2.0 and above
{% endnote %}

```markdown
{% note [color] [icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```

| Name  | Usage                                                                     |
| ----- | ------------------------------------------------------------------------ |
| color | [Optional] Color <br>(default / blue / pink / red / purple / orange / green) |
| icon  | [Optional] Customizable icon (only supports FontAwesome icons, can also configure no-icon) |
| style | [Optional] Can override the style in the configuration <br>(simple/modern/flat/disabled)       |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
simple
{% endnote %}

```markdown
{% note 'fab fa-cc-visa' simple %}
Do you use Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021 is coming soon....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
Drive carefully, safety first.
{% endnote %}
{% note red 'fas fa-fan' simple%}
Is this three pieces? Or four pieces?
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
Do you use Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
Rock, Paper, Scissors
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
The most hated browser by front-end developers
{% endnote %}
```

{% note 'fab fa-cc-visa' simple %}
Do you use Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021 is coming soon....
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
Drive carefully, safety first.
{% endnote %}
{% note red 'fas fa-fan' simple%}
Is this three pieces? Or four pieces?
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
Do you use Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
Rock, Paper, Scissors
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
The most hated browser by front-end developers
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
modern
{% endnote %}

```markdown
{% note 'fab fa-cc-visa' modern %}
Do you use Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021 is coming soon....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
Drive carefully, safety first.
{% endnote %}
{% note red 'fas fa-fan' modern%}
Is this three pieces? Or four pieces?
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
Do you use Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
Rock, Paper, Scissors
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
The most hated browser by front-end developers
{% endnote %}
```

{% note 'fab fa-cc-visa' modern %}
Do you use Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021 is coming soon....
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
Drive carefully, safety first.
{% endnote %}
{% note red 'fas fa-fan' modern%}
Is this three pieces? Or four pieces?
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
Do you use Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
Rock, Paper, Scissors
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
The most hated browser by front-end developers
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
flat
{% endnote %}

```markdown
{% note 'fab fa-cc-visa' flat %}
Do you use Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' flat %}
2021 is coming soon....
{% endnote %}
{% note pink 'fas fa-car-crash' flat %}
Drive carefully, safety first.
{% endnote %}
{% note red 'fas fa-fan' flat%}
Is this three pieces? Or four pieces?
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
Do you use Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
Rock, Paper, Scissors
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
The most hated browser by front-end developers
{% endnote %}
```

{% note 'fab fa-cc-visa' flat%}
Do you use Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' flat%}
2021 is coming soon....
{% endnote %}
{% note pink 'fas fa-car-crash' flat%}
Drive carefully, safety first.
{% endnote %}
{% note red 'fas fa-fan' flat %}
Is this three pieces? Or four pieces?
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
Do you use Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
Rock, Paper, Scissors
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
The most hated browser by front-end developers
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
disabled
{% endnote %}

```markdown
{% note 'fab fa-cc-visa' disabled %}
Do you use Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}
2021 is coming soon....
{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}
Drive carefully, safety first.
{% endnote %}
{% note red 'fas fa-fan' disabled %}
Is this three pieces? Or four pieces?
{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}
Do you use Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}
Rock, Paper, Scissors
{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}
The most hated browser by front-end developers
{% endnote %}
```

{% note 'fab fa-cc-visa' disabled %}
Do you use Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}
2021 is coming soon....
{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}
Drive carefully, safety first.
{% endnote %}
{% note red 'fas fa-fan' disabled %}
Is this three pieces? Or four pieces?
{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}
Do you use Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}
Rock, Paper, Scissors
{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}
The most hated browser by front-end developers
{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
no-icon
{% endnote %}

```markdown
{% note no-icon %}
Do you use Visa or UnionPay?
{% endnote %}
{% note blue no-icon %}
2021 is coming soon....
{% endnote %}
{% note pink no-icon %}
Drive carefully, safety first.
{% endnote %}
{% note red no-icon %}
Is this three pieces? Or four pieces?
{% endnote %}
{% note orange no-icon %}
Do you use Visa or UnionPay?
{% endnote %}
{% note purple no-icon %}
Rock, Paper, Scissors
{% endnote %}
{% note green no-icon %}
The most hated browser by front-end developers
{% endnote %}
```

{% note no-icon %}
Do you use Visa or UnionPay?
{% endnote %}
{% note blue no-icon %}
2021 is coming soon....
{% endnote %}
{% note pink no-icon %}
Drive carefully, safety first.
{% endnote %}
{% note red no-icon %}
Is this three pieces? Or four pieces?
{% endnote %}
{% note orange no-icon %}
Do you use Visa or UnionPay?
{% endnote %}
{% note purple no-icon %}
Rock, Paper, Scissors
{% endnote %}
{% note green no-icon %}
The most hated browser by front-end developers
{% endnote %}

<!-- endtab -->

{% endtabs %}

## Gallery Album

{% note pink 'fa-solid fa-bell' %}
Available from version 2.2.0 and above
{% endnote %}

A gallery collection.

Usage:

```
<div class="gallery-group-main">
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
</div>
```

| Parameter   | Description           |
| ----------- | --------------------- |
| name        | Gallery name          |
| description | Gallery description   |
| link        | Link to the album     |
| img-url     | Gallery cover URL     |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Sample
{% endnote %}

```
<div class="gallery-group-main">
{% galleryGroup 'Wallpapers' 'A collection of wallpapers' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup 'Marvel' 'Images related to Marvel' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' 'Images related to OH MY GIRL' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>
```

<div class="gallery-group-main">
{% galleryGroup 'Wallpapers' 'A collection of wallpapers' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup 'Marvel' 'Images related to Marvel' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' 'Images related to OH MY GIRL' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

## Gallery

{% note pink 'fa-solid fa-bell' %}
Available from version 2.0.0 and above
{% endnote %}

Unlike the old version of the Gallery album, the new Gallery album automatically arranges images based on their length, making it easier to write, similar to the markdown format. It can be inserted into the corresponding markdown as needed.

{% tabs %}

<!-- tab Local -->

Usage:

```markdown
{% gallery [button] %}
markdown image format
{% endgallery %}
```

| Parameter      | Description                                                                                 |
| --------- | ------------------------------------------------------------------------------------ |
| button    | [Optional] Load more images on button click, set to true/false. Default is `false`. |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Sample
{% endnote %}

```markdown
{% gallery %}
markdown image format
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

<!-- tab Remote Fetch -->

Usage:

```markdown
{% gallery url,[link],[button] %}
{% endgallery %}
```

| Parameter | Description                                                                 |
| --------- | --------------------------------------------------------------------------- |
| url       | [Required] Identifier                                                       |
| link      | [Required] Remote JSON link                                                 |
| button    | [Optional] Load more images on button click, set to true/false. Default is `false`. |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Example of remote link JSON
{% endnote %}

There are three parameters: `url` is **required**, while `alt` and `title` are optional.

```json
[
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0556.jpg",
    "alt": "IMG_0556.jpg",
    "title": "title"
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
Sample
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

Available from version 2.2.0 and above

Please note that it is not recommended to have h1 - h6 headers within the tag-hide plugin content. This is because the Toc will display the hidden content headers, and if the hidden content is not displayed when scrolling the screen, it will cause abnormal scrolling of the Toc.

{% endnote %}

If you want to hide some text or content and provide a button for users to click to display it, you can use this tag plugin.

{% tabs tag-hide %}

<!-- tab Inline -->

`inline` adds a button to hide content within the text, limited to text only.

(content cannot contain commas, use `&sbquo;` instead)

```markdown
{% hideInline content,display,bg,color %}
```

| Parameter | Description                     |
| --------- | -------------------------------- |
| content   | Text content                     |
| display   | [Optional] Text displayed on the button |
| bg        | [Optional] Background color of the button |
| color     | [Optional] Text color of the button |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Sample
{% endnote %}

```markdown
Which letter is the coolest? {% hideInline Because "C" is for Cool, See Answer, #FF7242, #fff %}

Who is standing behind the door? {% hideInline Flash %}
```

Which letter is the coolest? {% hideInline Because "C" is for Cool, See Answer, #FF7242, #fff %}

Who is standing behind the door? {% hideInline Flash %}

<!-- endtab -->

<!-- tab Block -->

`block` is an independent block for hiding content. It can hide a lot of content, including images, code blocks, etc.

(display cannot contain commas, use `&sbquo;` instead)

```markdown
{% hideBlock display,bg,color %}
content
{% endhideBlock %}
```

| Parameter | Description                     |
| --------- | -------------------------------- |
| content   | Text content                     |
| display   | [Optional] Text displayed on the button |
| bg        | [Optional] Background color of the button |
| color     | [Optional] Text color of the button |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Sample
{% endnote %}

```markdown
See Answer
{% hideBlock See Answer %}
Fool, how could there be an answer
{% endhideBlock %}
```

See Answer
{% hideBlock See Answer %}
Fool, how could there be an answer
{% endhideBlock %}

<!-- endtab -->

<!-- tab Toggle -->

{% note pink 'fa-solid fa-bell' %}
Supported from version 2.3.0 and above
{% endnote %}

If you need to display a lot of content, you can hide it in a collapsible box and expand it when needed.

(display cannot contain commas, use `&sbquo;`)

```markdown
{% hideToggle display,bg,color %}
content
{% endhideToggle %}
```

| Parameter | Description                     |
| --------- | -------------------------------- |
| display   | Text displayed on the button     |
| bg        | [Optional] Background color      |
| color     | [Optional] Text color            |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Sample
{% endnote %}

```markdown
{% hideToggle Butterfly Installation Method %}
In your blog root directory

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

If you want to install the newer dev branch, you can

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}
```

{% hideToggle Butterfly Installation Method %}
In your blog root directory

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

If you want to install the newer dev branch, you can

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}

<!-- endtab -->

{% endtabs %}

## Mermaid

Using the mermaid tag, you can draw Flowcharts, Sequence diagrams, Class Diagrams, State Diagrams, Gantt charts, and Pie Charts. For more details, refer to the [mermaid documentation](https://mermaid-js.github.io/mermaid/#/).

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
{% mermaid %}
content
{% endmermaid %}
```

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Sample
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

## Tabs

Ported from the NexT theme

Usage：

```markdown
{% tabs Unique name, [index] %}

<!-- tab [Tab caption] [@icon] -->

Any content (support inline tags too).

<!-- endtab -->

{% endtabs %}
```

| Parameter    | Description                                                                                       |
| ------------ | ------------------------------------------------------------------------------------------------- |
| Unique name  | The unique name of the tabs block, without commas. It will be used as the #id prefix for each tab, appended with its index number. If the name contains spaces, they will be replaced with hyphens in the generated #id. Must be unique within the current article/page URL! |
| [index]      | [Optional] The index number of the active tab. If not specified, the first tab (1) will be selected. If the index is -1, no tab will be selected, similar to collapsed content. Optional parameter. |
| [Tab caption]| The title of the current tab. If not specified, the unique name with the tab index suffix will be used as the tab title. If no title is specified but an icon is provided, the title will be empty. |
| [@icon]      | [Optional] FontAwesome icon name (full name, e.g., 'fas fa-font'). Can be with or without spaces; for example, 'Tab caption @icon' is similar to 'Tab caption@icon'. |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Example 1 - Default to the first tab [default]
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
Example 2 - Default selected tabs
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
Example 3 - No default value
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
Example 4 - Custom Tab Name + Icon Only + Icon and Tab Name
{% endnote %}

```markdown
{% tabs test4 %}

<!-- tab First Tab -->

**Tab name is First Tab**

<!-- endtab -->

<!-- tab @fab fa-apple-pay -->

**Icon only, no Tab name**

<!-- endtab -->

<!-- tab Bomb@fas fa-bomb -->

**Name + icon**

<!-- endtab -->

{% endtabs %}
```

{% tabs test4 %}

<!-- tab First Tab -->

**Tab name is First Tab**

<!-- endtab -->

<!-- tab @fab fa-apple-pay -->

**Icon only, no Tab name**

<!-- endtab -->

<!-- tab Bomb@fas fa-bomb -->

**Name + icon**

<!-- endtab -->

{% endtabs %}

## Button

{% note pink 'fa-solid fa-bell' %}
Applicable for version 3.0 and above
{% endnote %}

Usage:

```markdown
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}
```

| Parameter | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| url       | [Required] Link address                                                                             |
| text      | [Required] Button text                                                                              |
| icon      | [Optional] Icon                                                                                     |
| color     | [Optional] Button background color (default style) or button font and border color (outline style) <br> Options: default/blue/pink/red/purple/orange/green |
| style     | [Optional] Button style, default is solid <br> Options: outline/empty                               |
| layout    | [Optional] Button layout, default is line <br> Options: block/empty                                  |
| position  | [Optional] Button position, applicable when layout is set to block, default is left <br> Options: center/right/empty |
| size      | [Optional] Button size <br> Options: larger/empty                                                    |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Sample
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

Images in the theme are displayed as `block elements` by default. If you want to display them as `inline elements`, you can use this tag plugin.

```markdown
{% inlineImg [src] [height] %}
```

| Parameter | Description           |
| --------- | --------------------- |
| src       | Image URL             |
| height    | [Optional] Image height limit |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Sample
{% endnote %}

```markdown
Do you think she looks beautiful?

![](https://i.loli.net/2021/03/19/2P6ivUGsdaEXSFI.png)

I think she looks beautiful. {% inlineImg https://i.loli.net/2021/03/19/5M4jUB3ynq7ePgw.png 150px %}
```

Do you think she looks beautiful?

![](https://i.loli.net/2021/03/19/2P6ivUGsdaEXSFI.png)

I think she looks beautiful. {% inlineImg https://i.loli.net/2021/03/19/5M4jUB3ynq7ePgw.png 150px %}

## Label

{% note warning %}

Due to the rendering limitations of Hexo, using the label tag plugin at the beginning of a paragraph can cause some issues. For example, paragraphs that consecutively start with the label tag plugin cannot break lines.

It is recommended **not** to use the label tag plugin at the beginning of a paragraph.
{% endnote %}

Text to be highlighted

```markdown
{% label text color %}
```

| Parameter | Description                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------- |
| text      | Text                                                                                              |
| color     | [Optional] Background color, default is `default`<br /> Options: default/blue/pink/red/purple/orange/green |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Sample
{% endnote %}

```markdown
{% label "Shall I compare thee to a summer's day?" blue %}  
Thou art more lovely and more temperate:  
{% label "Rough winds do shake the darling buds of May," purple %}  
And summer's lease hath all too short a date:  

{% label "Sometime too hot the eye of heaven shines," red %}  
And often is his gold complexion dimmed;  
And every fair from fair sometime declines,  
{% label "By chance or nature's changing course untrimmed;" yellow %}  

{% label "But thy eternal summer shall not fade," green %}  
Nor lose possession of that fair thou owest;  
Nor shall Death brag thou wanderest in his shade,  
{% label "When in eternal lines to time thou growest:" pink %}  

So long as men can breathe or eyes can see,  
So long lives this, and this gives life to thee.  
```

{% label "Shall I compare thee to a summer's day?" blue %}  
Thou art more lovely and more temperate:  
{% label "Rough winds do shake the darling buds of May," purple %}  
And summer's lease hath all too short a date:  

{% label "Sometime too hot the eye of heaven shines," red %}  
And often is his gold complexion dimmed;  
And every fair from fair sometime declines,  
{% label "By chance or nature's changing course untrimmed;" yellow %}  

{% label "But thy eternal summer shall not fade," green %}  
Nor lose possession of that fair thou owest;  
Nor shall Death brag thou wanderest in his shade,  
{% label "When in eternal lines to time thou growest:" pink %}  

So long as men can breathe or eyes can see,  
So long lives this, and this gives life to thee.  

## Timeline

{% note pink 'fa-solid fa-bell' %}
Supported from version 4.0.0 and above
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

| Parameter | Description                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------- |
| title     | Title/Timeline                                                                                    |
| color     | Timeline color<br />default (leave blank) / blue / pink / red / purple / orange / green           |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Example
{% endnote %}

```markdown
{% timeline 2022 %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022 %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,blue %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022,blue %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,pink %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022,pink %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,red %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022,red %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,purple %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022,purple %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,orange %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022,orange %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}

```markdown
{% timeline 2022,green %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}
```

{% timeline 2022,green %}

<!-- timeline 01-02 -->

This is a test page

<!-- endtimeline -->

{% endtimeline %}

## Flink

{% note pink 'fa-solid fa-bell' %}
Support for version 4.1.0
{% endnote %}

You can insert a friend link list effect on any page.

The content format is the same as the friend link page and supports the `yml` format.

```markdown
{% flink %}
xxxxxx
{% endflink %}
```

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Example
{% endnote %}

```markdown
{% flink %}
- class_name: Friend Links
  class_desc: People and Stories
  link_list:
    - name: JerryC
      link: https://jerryc.me/
      avatar: https://jerryc.me/img/avatar.png
      descr: Today’s tasks completed today
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: A fast, simple, and powerful blogging framework

- class_name: Websites
  class_desc: Recommended Websites
  link_list: 
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: Video sharing platform
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: China’s largest social sharing platform
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: Social sharing platform
{% endflink %}
```

{% flink %}
- class_name: Friend Links
  class_desc: People and Stories
  link_list:
    - name: JerryC
      link: https://jerryc.me/
      avatar: https://jerryc.me/img/avatar.png
      descr: Today’s tasks completed today
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: A fast, simple, and powerful blogging framework

- class_name: Websites
  class_desc: Recommended Websites
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: Video sharing platform
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: China’s largest social sharing platform
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: Social sharing platform
{% endflink %}

## ABCJS Score

Render musical scores on the page

```yaml
# abcjs
# See https://github.com/paulrosen/abcjs
# ---------------
abcjs:
  enable: true
  per_page: true
```

| Parameter    | Description                                                                 |
| ------- | -------------------------------------------------------------------- |
| enable  | Enable ABCJS or not                                                            |
| per_page | Load ABCJS on every page. If set to false, you need to add `abcjs: true` in the front-matter of the pages where you use ABCJS                                               |

Usage:

```markdown
{% score %}
Score
{% endscore %}
```

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Sample
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

## Series

Display series articles on the page

```yaml
series:
  enable: true
  orderBy: 'title' # Order by title or date
  order: 1 # Sort of order. 1, asc for ascending; -1, desc for descending
  number: true
```

| Parameter    | Parameter                                                                 |
| ------- | -------------------------------------------------------------------- |
| enable  | Enable series or not                                                            |
| orderBy | Sorting method, default is title, options are title / date                                               |
| order   | Sorting order, default is 1, options are 1 (ascending) / -1 (descending)                                                 |
| number  | Display sequence number                                                    |

Usage:

```markdown
{% series %}
{% series [series name] %}
```

Add the `series` parameter in the front-matter of the article and give it an identifier.

Using this tag plugin will display articles with the same identifier in a list format.

If the series identifier is not specified, it defaults to the series identifier of the article where this tag plugin is used.

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Sample
{% endnote %}

```markdown
{% series docs %}
```

{% series docs %}

## Chartjs

Another way to add charts

```yaml
# chartjs
# see https://www.chartjs.org/docs/latest/
chartjs:
  enable: false
  # Do not modify unless you understand how they work.
  # The default settings are only used when the MD syntax is not specified.
  # General font color for the chart
  fontColor:
    light: "rgba(0, 0, 0, 0.8)"
    dark: "rgba(255, 255, 255, 0.8)"
  # General border color for the chart
  borderColor:
    light: "rgba(0, 0, 0, 0.1)"
    dark: "rgba(255, 255, 255, 0.2)"
  # Background color for scale labels on radar and polar area charts
  scale_ticks_backdropColor:
    light: "transparent"
    dark: "transparent"
```

| Parameter                | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| enable                   | Whether to enable chartjs                                     |
| fontColor                | Font color of the chart                                       |
| borderColor              | Border color of the chart                                     |
| scale_ticks_backdropColor| Background color of the scale labels for radar and polar area charts |

Usage:

```markdown
{% chartjs [width, abreast, chartId] %}
<!-- chart -->
<!-- endchart -->
<!-- desc -->
<!-- enddesc -->
{% endchartjs %}
```

| Parameter | Description                                                                 |
| --------- | --------------------------------------------------------------------------- |
| width     | [Optional] Chart width                                                      |
| abreast   | [Optional] Whether to display side by side. When you write `<!-- desc -->`, the chart and description will be displayed side by side.<br> When abreast is true, the width value needs to be configured |
| chartId   | [Optional] Chart ID                                                         |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Sample
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
            "Programming",
            "Music",
            "Reading",
            "Gaming",
            "Fitness",
            "Travel"
        ],
        "datasets": [
            {
                "label": "Favorite Index",
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
            "Programming",
            "Music",
            "Reading",
            "Gaming",
            "Fitness",
            "Travel"
        ],
        "datasets": [
            {
                "label": "Favorite Index",
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

{% btn '/posts/butterfly-docs-en-theme-question/',❓ Butterfly document - Q&A,far fa-hand-point-right,block green right larger %}