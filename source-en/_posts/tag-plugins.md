---
title: Tag Plugins
tags:
  - Tag Plugins
categories:
  - Demo
keywords: "Butterfly,Tag Plugins,tag"
description: Tag Plugins
abbrlink: tag-plugins
date: 2020-01-05 21:41:03
top_img:
cover: https://jsd.012700.xyz/gh/jerryc127/CDN/img/Tag-Plugins-cover.png
comments: false
---

## Tabs

{% tabs Tags %}
<!-- tab Sonnet No. 18 -->
Shall I compare thee to a summer’s day?
Thou art more lovely and more temperate:
Rough winds do shake the darling buds of May,
And summer’s lease hath all too short a date:
Sometime too hot the eye of heaven shines,
And often is his gold complexion dimm’d;  
And every fair from fair sometime declines,  
By chance, or nature’s changing course untrimm’d;  
But thy eternal summer shall not fade,  
Nor lose possession of that fair thou ow’st,  
Nor shall death brag thou wander’st in his shade,  
When in eternal lines to time thou grow’st:   
So long as men can breathe, or eyes can see,  
So long lives this, and this gives life to thee.
<!-- endtab -->

<!-- tab Gallery -->
{% gallery %}
![](https://i.loli.net/2019/12/25/Jj8FXuKVlOea4Ec.jpg)
![](https://i.loli.net/2019/12/25/eqBGrXx9tWsZOao.jpg)
![](https://i.loli.net/2019/12/25/LjW2CfNSD7OaY4v.jpg)
![](https://i.loli.net/2019/12/25/pGIhaPjxtl438U9.jpg)
![](https://i.loli.net/2019/12/25/hzjJBR2x5SEmsbC.jpg)
![](https://i.loli.net/2019/12/25/ucNDmUqQkrFfAWv.jpg)
![](https://i.loli.net/2019/12/25/oj1wAnGSKtFvXIJ.jpg)
{% endgallery %}
<!-- endtab -->

<!-- tab Madrigal -->
My Love in her attire doth show her wit,
It doth so well become her;
For every season she hath dressings fit,
For Winter, Spring, and Summer.
No beauty she doth miss
When all her robes are on:
But Beauty’s self she is
When all her robes are gone.

{% subtabs love %}
<!-- tab To Celia -->
Drink to me only with thine eyes,
And I will pledge with mine;
Or leave a kiss but in the cup,
And I’ll not look for wine.
The thirst that from the soul doth rise
Doth ask a drink divine;
But might I of Jove’s nectar sup,
I would not change for thine.

I sent thee late a rosy wreath,
Not so much honouring thee
As giving it a hope that there
It could not withered be.
But thou thereon didst only breathe,
And send’st it back to me;
Since when it grows and smells, I swear,
Not of itself but thee!
<!-- endtab -->

<!-- tab A Drinking Song -->
 Wine comes in at the mouth
And love comes in at the eye;
That’s all we know for truth
Before we grow and die.
I lift the glass to my mouth,
I look at you, and I sigh.
<!-- endtab -->

<!-- tab When You Are Old -->
When you are old and grey and full of sleep,
And nodding by the fire, take down this book,
And slowly read, and dream of the soft look
Your eyes had once, and of their shadows deep;
 
How many loved your moments of glad grace,
And loved your beauty with love false or true,
But one man loved the pilgrim Soul in you,
And loved the sorrows of your changing face;
 
And bending down beside the glowing bars,
Murmur, a little sadly, how Love fled
And paced upon the mountains overhead
And hid his face amid a crowd of stars.

{% subtabs aabb %}
<!-- tab one -->
qwertyuiop
<!-- endtab -->

<!-- tab two -->
asdfghjkl
<!-- endtab -->

<!-- tab three -->
zxcvbnm
<!-- endtab -->
{% endsubtabs %}

<!-- endtab -->
{% endsubtabs %}

<!-- endtab -->
{% endtabs %}

## Button

### Inline

```markdown
This is my website, click the button {% btn 'https://butterfly.js.org',Butterfly %}
This is my website, click the button {% btn 'https://butterfly.js.org',Butterfly,,outline%}
```

This is my website, click the button {% btn 'https://butterfly.js.org',Butterfly %}

This is my website, click the button {% btn 'https://butterfly.js.org',Butterfly,,outline%}

### Block

```markdown
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block larger %}
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block center larger %}
This is my website, click the button  {% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block right blue larger %}
```

{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block center larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,block right blue larger %}

### option

> more than one button in center

```markdown
<div class="btn-center">
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,green larger %}
</div>
```

<div class="btn-center">
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,green larger %}
</div>

```markdown
<div class="btn-center">
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline green larger %}
</div>
```

<div class="btn-center">
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org',Butterfly,far fa-hand-point-right,outline green larger %}
</div>

## mermaid

{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}

{% mermaid %}
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
{% endmermaid %}

{% mermaid %}
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
{% endmermaid %}

## Note (Bootstrap Callout)

### Usage 1

> simple

```
{% note simple %}
Default Callout Tag
{% endnote %}

{% note default simple %}
Default Callout Tag
{% endnote %}

{% note primary simple %}
Primary Callout Tag
{% endnote %}

{% note success simple %}
Success Callout Tag
{% endnote %}

{% note info simple %}
Info Callout Tag
{% endnote %}

{% note warning simple %}
Warning Callout Tag
{% endnote %}

{% note danger simple %}
Danger Callout Tag
{% endnote %}
```

{% note simple %}
Default Callout Tag
{% endnote %}

{% note default simple %}
Default Callout Tag
{% endnote %}

{% note primary simple %}
Primary Callout Tag
{% endnote %}

{% note success simple %}
Success Callout Tag
{% endnote %}

{% note info simple %}
Info Callout Tag
{% endnote %}

{% note warning simple %}
Warning Callout Tag
{% endnote %}

{% note danger simple %}
Danger Callout Tag
{% endnote %}

> modern

```markdown
{% note modern %}
Default Callout Tag
{% endnote %}

{% note default modern %}
Default Callout Tag
{% endnote %}

{% note primary modern %}
Primary Callout Tag
{% endnote %}

{% note success modern %}
Success Callout Tag
{% endnote %}

{% note info modern %}
Info Callout Tag
{% endnote %}

{% note warning modern %}
Warning Callout Tag
{% endnote %}

{% note danger modern %}
Danger Callout Tag
{% endnote %}
```

{% note modern %}
Default Callout Tag
{% endnote %}

{% note default modern %}
Default Callout Tag
{% endnote %}

{% note primary modern %}
Primary Callout Tag
{% endnote %}

{% note success modern %}
Success Callout Tag
{% endnote %}

{% note info modern %}
Info Callout Tag
{% endnote %}

{% note warning modern %}
Warning Callout Tag
{% endnote %}

{% note danger modern %}
Danger Callout Tag
{% endnote %}

> flat

```markdown
{% note flat %}
Default Callout Tag
{% endnote %}

{% note default flat %}
Default Callout Tag
{% endnote %}

{% note primary flat %}
Primary Callout Tag
{% endnote %}

{% note success flat %}
Success Callout Tag
{% endnote %}

{% note info flat %}
Info Callout Tag
{% endnote %}

{% note warning flat %}
Warning Callout Tag
{% endnote %}

{% note danger flat %}
Danger Callout Tag
{% endnote %}
```

{% note flat %}
Default Callout Tag
{% endnote %}

{% note default flat %}
Default Callout Tag
{% endnote %}

{% note primary flat %}
Primary Callout Tag
{% endnote %}

{% note success flat %}
Success Callout Tag
{% endnote %}

{% note info flat %}
Info Callout Tag
{% endnote %}

{% note warning flat %}
Warning Callout Tag
{% endnote %}

{% note danger flat %}
Danger Callout Tag
{% endnote %}

> disabled

```markdown
{% note disabled %}
Default Callout Tag
{% endnote %}

{% note default disabled %}
Default Callout Tag
{% endnote %}

{% note primary disabled %}
Primary Callout Tag
{% endnote %}

{% note success disabled %}
Success Callout Tag
{% endnote %}

{% note info disabled %}
Info Callout Tag
{% endnote %}

{% note warning disabled %}
Warning Callout Tag
{% endnote %}

{% note danger disabled %}
Danger Callout Tag
{% endnote %}
```

{% note disabled %}
Default Callout Tag
{% endnote %}

{% note default disabled %}
Default Callout Tag
{% endnote %}

{% note primary disabled %}
Primary Callout Tag
{% endnote %}

{% note success disabled %}
Success Callout Tag
{% endnote %}

{% note info disabled %}
Info Callout Tag
{% endnote %}

{% note warning disabled %}
Warning Callout Tag
{% endnote %}

{% note danger disabled %}
Danger Callout Tag
{% endnote %}

> no-icon

```markdown
{% note no-icon %}
Default Callout Tag
{% endnote %}

{% note default no-icon %}
Default Callout Tag
{% endnote %}

{% note primary no-icon %}
Primary Callout Tag
{% endnote %}

{% note success no-icon %}
Success Callout Tag
{% endnote %}

{% note info no-icon %}
Info Callout Tag
{% endnote %}

{% note warning no-icon %}
Warning Callout Tag
{% endnote %}

{% note danger no-icon %}
Danger Callout Tag
{% endnote %}
```

{% note no-icon %}
Default Callout Tag
{% endnote %}

{% note default no-icon %}
Default Callout Tag
{% endnote %}

{% note primary no-icon %}
Primary Callout Tag
{% endnote %}

{% note success no-icon %}
Success Callout Tag
{% endnote %}

{% note info no-icon %}
Info Callout Tag
{% endnote %}

{% note warning no-icon %}
Warning Callout Tag
{% endnote %}

{% note danger no-icon %}
Danger Callout Tag
{% endnote %}

### Usage 2

> simple

```markdown
{% note 'fab fa-cc-visa' simple %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' simple%}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
The most dreaded browser for front-end developers.
{% endnote %}
```

{% note 'fab fa-cc-visa' simple %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' simple%}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
The most dreaded browser for front-end developers.
{% endnote %}

> modern

```markdown
{% note 'fab fa-cc-visa' modern %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' modern%}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
The most dreaded browser for front-end developers.
{% endnote %}
```

{% note 'fab fa-cc-visa' modern %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' modern%}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
The most dreaded browser for front-end developers.
{% endnote %}

> flat

```markdown
{% note 'fab fa-cc-visa' flat %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' flat %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' flat %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' flat%}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
The most dreaded browser for front-end developers.
{% endnote %}
```

{% note 'fab fa-cc-visa' flat%}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' flat%}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' flat%}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' flat %}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
The most dreaded browser for front-end developers.
{% endnote %}

> disabled

```markdown
{% note 'fab fa-cc-visa' disabled %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' disabled %}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}
The most dreaded browser for front-end developers.
{% endnote %}
```

{% note 'fab fa-cc-visa' disabled %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' disabled %}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}
The most dreaded browser for front-end developers.
{% endnote %}

> no-icon

```markdown
{% note no-icon %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue no-icon %}
2021 is coming soon...
{% endnote %}
{% note pink no-icon %}
Drive safely, safety first.
{% endnote %}
{% note red no-icon %}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange no-icon %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple no-icon %}
Rock-paper-scissors.
{% endnote %}
{% note green no-icon %}
The most dreaded browser for front-end developers.
{% endnote %}
```

{% note no-icon %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue no-icon %}
2021 is coming soon...
{% endnote %}
{% note pink no-icon %}
Drive safely, safety first.
{% endnote %}
{% note red no-icon %}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange no-icon %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple no-icon %}
Rock-paper-scissors.
{% endnote %}
{% note green no-icon %}
The most dreaded browser for front-end developers.
{% endnote %}

## Gallery Photo Collection

<div class="gallery-group-main">
{% galleryGroup 'Wallpapers' 'A collection of wallpapers' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup 'Marvel' 'Pictures related to Marvel' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' 'Pictures related to OH MY GIRL' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

## Gallery Album

{% gallery %}
![](https://i.loli.net/2019/12/25/Jj8FXuKVlOea4Ec.jpg)
![](https://i.loli.net/2019/12/25/eqBGrXx9tWsZOao.jpg)
![](https://i.loli.net/2019/12/25/LjW2CfNSD7OaY4v.jpg)
![](https://i.loli.net/2019/12/25/pGIhaPjxtl438U9.jpg)
![](https://i.loli.net/2019/12/25/hzjJBR2x5SEmsbC.jpg)
![](https://i.loli.net/2019/12/25/ucNDmUqQkrFfAWv.jpg)
![](https://i.loli.net/2019/12/25/oj1wAnGSKtFvXIJ.jpg)
{% endgallery %}

## tag-hide

If you want to hide certain text or content and provide a button for users to click and reveal it, you can use this `tag-hide` plugin.

### hide-inline

Which English letter is the coolest? {% hideInline Because they wear suits (C for cool),Reveal the answer,#FF7242,#fff %}

There's a person standing inside the door? {% hideInline Blink %}

### hide-block

Girls

{% hideBlock answer %}
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
{% endhideBlock %}

### hide-toggle

{% hideToggle Butterfly Installation Method %}
In your blog's root directory,

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

If you want to install the newer dev branch, you can use

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

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

{% endhideToggle %}