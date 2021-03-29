---
title: Butterfly 安裝文檔(七) 更新日誌
date: 2020-05-28 22:41:59
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
categories: Docs文檔
keywords: 'hexo,butterfly,主題,doc,教程,文檔'
description: Butterfly安裝文檔-更新日誌
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Butterfly-docs-07-cover.png
abbrlink: 198a4240
toc: false
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

{% hideToggle 3.7.1 (2021/03/30) %}

## 3.7.1 (2021/03/30)
### Fix
1. 修復 github-issues 最新評論 獲取的url格式 bug
2. 修復當標題有符號'時，disqus 和 disqusjs 無法加載的 bug

{% endhideToggle %}

{% hideToggle 3.7.0 (2021/03/18) %}

## 3.7.0 (2021/03/18)

### Breaking Change

1. 更改子目錄的寫法，與父目錄一致

2. 移除 artitalk （如需要，請安裝 hexo-butterfly-artitalk)

   ```diff
   -# Artitalk
   -# see https://artitalk.js.org/
   -artitalk:
   -  appId:
   -  appKey:
   -  option:
   
   CDN:
   -	artitalk: https://cdn.jsdelivr.net/npm/artitalk
   ```

3. katex_copytex 的js 和 css cdn 更換

   ```diff
   -katex_copytex: https://cdn.jsdelivr.net/npm/katex-copytex@latest/dist/katex-copytex.min.js
   -katex_copytex_css: https://cdn.jsdelivr.net/npm/katex-copytex@latest/dist/katex-copytex.min.css
   
   +katex_copytex: https://cdn.jsdelivr.net/npm/katex@latest/dist/contrib/copy-tex.min.js
   +katex_copytex_css: https://cdn.jsdelivr.net/npm/katex@latest/dist/contrib/copy-tex.css
   ```


### Feature

1. 新增設置代碼高度限制，顯示展開按鈕

   ```diff
   +highlight_height_limit: false # unit: px
   ```

2. prismjs 也可以配置 code_word_wrap

3. 增加 kbd 樣式 \#507

4. 添加waline,valine 和twikoo 提供的文章閲讀數配置 #502

   ```diff
   valine:
   +  visitor: false
   waline:
   +  visitor: false
   twikoo:
   +  visitor: false
   ```

5. 增加 HexoPlusPlus_Talk（需要安裝 hexo-butterfly-hpptalk)

6. 增加 tags 標簽外掛 inlineImg

7. gitalk 增加 option 配置

   ```diff
   gitalk:
     createIssueManually: false # Gitalk will create a corresponding github issue for your every single page automatically
   +  option:
   ```


### Fix

1. 修復prismjs 在 ios safari 下自動換行的bug
2. 修復默認代碼大小不會隨着字體放大/放小而改變的bug
3. 修復prismjs 無法識別的語言 顯示 null 而不是顯示 code 的 bug
4. 在完全沒有配置的情況下，運行時控制枱報null 的問題

### Improvement

1. 主頁分頁會定位到文章區域 #519
2. css 優化，簡化自定義代碼色的 css 配置
3. 搜索 hover 效果與其它目錄一致
4. 百度統計適配 pjax #516
5. 當文章頁cover 和 cover 的 default_img都沒有配置時，會去讀取default_top_img的參數
6. 一句API 改為 https
7. pug代碼優化



{% endhideToggle %}

{% hideToggle 3.6.2 (2021/02/03) %}

## 3.6.2 (2021/02/03)

### Fix

1. mathjax 和 katex 沒有加載js的bug

{% endhideToggle %}

{% hideToggle 3.6.1 (2021/02/01) %}

## 3.6.1 (2021/02/01)
### Fix
1. 非ios設備下，手機頁面下文章頁有toc的界面出現滾動條
2. 非ios設備下，在layout標簽內的元素，如是position: fixed，其相對定位會更改 #482 #483

{% endhideToggle %}

{% hideToggle 3.6.0 (2021/01/30) %}

## 3.6.0 (2021/01/30)

### Feature

1. 增加首頁評論數顯示

   ```diff
   comments:
     ...
     count: false # Display comment count in post's top_img
   +  card_post_count: false # Display comment count in Home Page
   ```

2. 最新評論更新

   1. `<a>` 標簽將會顯示 `[鏈接]`
   2. `<img>`標簽將會顯示 `[圖片]`
   3. `<pre><code>` 標簽將顯示 `[代碼]`
   4. github-issues 獲取到的 url 改為對應文章地址，而不是issues地址
   5. 時間 time 增加 datetime屬性
   6. waline 獲取到頭像會先匹配 waline數據庫是否有qq頭像屬性
   7. 部分評論顯示的時間改為更新時間

3. aside ‘查看更多’按鈕 改為 圖標顯示在右上角

4. 可配置最新評論的緩存時間

   ```diff
   newest_comments:
     enable: false
     sort_order: # Don't modify the setting unless you know how it works
     limit: 6
   +  storage: 10 # unit: mins, save data to localStorage
   ```

5. 增加 post_pagination 配置(可關閉/配置分頁展示邏輯)

   ```diff
   +# post_pagination (分頁)
   +# value: 1 || 2 || false
   +# 1: The 'next post' will link to old post
   +# 2: The 'next post' will link to new post
   +# false: disable pagination
   +post_pagination: 1
   ```

6. 文章版權右上角改為 版權icon

7. 增加配置 disable_top_img，禁用所有的top_img

   ```diff
   +# Disable all banner image
   +disable_top_img: false
   ```

8. 增加 文章編輯

   ```diff
   +# Post edit
   +# Easily browse and edit blog source code online.
   +post_edit:
   +  enable: false
   +  # url: https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name/
   +  # For example: https://github.com/jerryc127/butterfly.js.org/edit/main/source/
   +  url:
   ```

   

### Fix

1. 修復 文章頁面上滑子菜單圖標文字無法顯示的 bug #481
2. 修復在 chrome上，進入頁面時，頁面元素會出現模糊到清晰 的 bug #479
3. 修復夜間模式下，閲讀模式代碼塊背景顔色的顯示bug
4. 修復打賞按鈕字數過多導致Hover異常的bug #473
5. 修復評論裏  行內元素（表情/圖片）變成塊級元素（換行）的bug
6. 修復點擊toc後，滾動完toc的highlight在點擊的上一個元素
7. 修復子目錄下，打賞圖片跳轉鏈接會錯誤的bug
8. 修復文字點擊關閉random無效的bug
9. 修復手持設備橫向翻轉時，menu 沒有進行判斷,而導致樣式錯亂的bug
10. 修復pjax下不會跳轉404頁面的bug
11. 修復twikoo 評論數獲取會因為地域問題報錯的bug
12. 修復 background-image 遇到鏈接有括號時會無法顯示的bug

### Improvement

1. meta description  限制在150字以內 #480
2. pug優化和結構調整
3. pug 判斷優化
4. 友情鏈接界面增加title顯示（top_img設為false時）
5. 升級facebook comment sdk版本
6. 優化toc顯示，當向上滾動時，導航欄不會遮擋 toc #472
7. pangu 改為全站渲染
8. 最新評論js優化
9. 調整 Readmode 標題邊距
10. 卡片 hover box-shadow 微調
11. 404頁面卡片增加hover
12. 刪除部分多餘的代碼

### Remove

1. 移除百度推送（百度已棄用）和百度轉碼

   ```diff
   -# Disable Baidu transformation on mobile devices (禁止百度轉碼)
   -disable_baidu_transformation: true
   
   -# Baidu Push (百度推送)
   -baidu_push: false
   ```

2. 移除 fragment_cache 配置（默認開啟）

   ```diff
   -# Caches the contents in a fragment, speed up the generation (開啟hexo自帶的緩存,加快生成速度)
   -fragment_cache: true
   ```



{% endhideToggle  %}

{% hideToggle 3.5.1 (2020/12/31) %}

## 3.5.1 (2020/12/31)

### Feature

1. twikoo增加 region 配置

### Fix

1. 修復twikoo 廣州地域下，最新評論無法讀取的bugs
2. 修復waline背景設置無效的bugs
3. 修復twikoo 廣州地域下，page 頁進入post頁，twikoo評論報錯的bugs

{% endhideToggle %}

{% hideToggle 3.5.0 (2020/12/30) %}

## 3.5.0 (2020/12/30)

### Feature

1. aside 個人資料widget可關閉button

   ```diff
   aside:
    ...
     card_author:
       enable: true
       description:
       button:
   +      enable: true
         icon: fab fa-github
         text: 主題 GitHub
         link: https://github.com/jerryc127/hexo-theme-butterfly
   
   ```

2. 新增 Cloudflare Analytics

   ```diff
   +# Cloudflare Analytics
   +# https://www.cloudflare.com/zh-tw/web-analytics/
   +cloudflare_analytics:
   ```

3. 新增 Microsoft Clarity

   ```diff
   +# Microsoft Clarity
   +# https://clarity.microsoft.com/
   +microsoft_clarity:
   ```

4. readmode 優化

5. aside 增加自定義 widget

6. aside widget 增加排序（只對page頁和sticky內的有效）

   ```diff
   aside:
    ...
     card_recent_post:
   +    sort_order: # Don't modify the setting unless you know how it works
     card_categories:
   +    sort_order: # Don't modify the setting unless you know how it works
     card_tags:
   +    sort_order: # Don't modify the setting unless you know how it works
     card_archives:
   +    sort_order: # Don't modify the setting unless you know how it works
     card_webinfo:
   +    sort_order: # Don't modify the setting unless you know how it works
   
   newest_comments:
     enable: true
   +  sort_order: # Don't modify the setting unless you know how it works
   ```

7. twikoo 增加 option 配置

   ```diff
   # Twikoo
   # https://github.com/imaegoo/twikoo
   -twikoo:
   +twikoo:
   +  envId:
   +  option:
   ```

8. 增加waline評論

   ```diff
   +# waline - A simple comment system with backend support fork from Valine
   +# https://waline.js.org/
   +waline:
   +  serverURL: # Waline server address url
   +  avatar: monsterid # gravatar style https://zh-tw.gravatar.com/site/implement/images/#default-image
   +  emojiCDN: # emoji CDN
   +  bg: /img/comment_bg.png # waline background
   +  option:
   ```

9. 增加waline評論數顯示

10. 增加waline最新評論模塊

    ```DIFF
    newest_comments:
      enable: true
    	...
    +  waline: false
    ```

### Improvement

1. 最新評論url 增加描點

2. html結構優化

3. 修改newest_comments的leancloud為valine，並刪除其配置，改為讀取valine配置

   ```diff
   # Aside widget - Newest Comments
   newest_comments:
     ...
   -  leancloud:
   -    enable: false
   -    appId: # leancloud application app id
   -    appKey: # leancloud application app key
   -    serverURL: # This configuration is suitable for domestic custom domain name users, overseas version will be automatically detected (no need to manually fill in)
   -    default_avatar: # mp/identicon/monsterid/wavatar/retro/robohash/blank
   + valine: false
   ```

{% endhideToggle %}



{% hideToggle 3.4.2 (2020/12/27) %}

## 3.4.2 (2020/12/27)

### Fix

1. 修復開啟 gitalk 評論數後與 toc 衝突的 bug #462
2. 修復 jquery 在一些介面仍然載入問題
3. 修復 medium zoom 報錯的 bug

{% endhideToggle %}



{% hideToggle 3.4.1 (2020/12/15) %}

## 3.4.1 (2020/12/15)

### Fix

1. 修復tabs 標簽外掛設為-1時，按鈕點擊沒反應的bugs

{% endhideToggle %}



 {% hideToggle 3.4.0 (2020/12/13) %}

## 3.4.0 (2020/12/13)

### Breaking Change

1. 去除 jQuery

### Feature

1. 可配置是否添加css前綴

   ```diff
   +# Add the vendor prefixes to ensure compatibility
   +css_prefix: true
   ```

2. 點擊文字特效增加隨機配置

   ```diff
   ClickShowText:
     enable: false
     text:
       - I
       - LOVEeeeeeeeeeeeee
       - YOU
     fontSize: 15px
   +  random: true
     mobile: false
   ```

3. 右下角增加字體調整按鈕

   ```diff
   +# Change font size
   +change_font_size: true
   ```

4. 增加twikoo 最新評論

   ```diff
   newest_comments:
     enable: true
   	....
   +  twikoo: true
   ```
   
5. 增加twikoo評論數顯示

6. 增加toc簡潔模式

   ```diff
   toc:
     enable: true
     number: true
   +  style_simple: false
   ```


### Fix

1. 修復子目錄下，配置justifiedGallery CDN（相對鏈接）後，連接會無法訪問的bugs
2. 修復沒有滾動條時，右下角按鈕顯示問題  #439
3. 修復 pangu 配置post 後，仍在全站生效的bugs
4. 修復resize 時，toc 的位置問題

### Improvement

1. 最新評論頭像增加lazyload
2. 最新評論優化，當沒有評論時顯示'沒有評論‘
3. toc點擊時改用document.getElementById獲取，預防有些字符導致無法跳轉 #426
4. 若瀏覽器支持。scroll將採用原生瀏覽器支持的滾動方法
5. 搜索優化
6. html格式優化
7. 當屏幕沒有滾動條時，rightside會直接顯示
8. 手機端toc邊距微調
9. fontawesome和google字體增加異步加載
10. 夜間模式下，廣告降低亮度
11. 當設置aside mobile為false時，toc仍然能顯示

### Remove

1. 刪除ICP配置， 如需要，請使用custom_text配置
2. 刪除不必要的語言文件

{% endhideToggle %}



{% hideToggle 3.3.0 (2020/10/28) %}

## 3.3.0 (2020/10/28)

### Breaking Change

1. 只支持 hexo 5.0.0 及以上版本
2. 不再支持 butterfly.yml 寫法

### Feature

1. Valine 增加 option 設置

   ```diff
   valine:
   +  option:
   ```

2. toc改為aside顯示,去掉sidebar

   1. 手機toc ui 修改

   2. 去掉 toc auto_open 配置

      ```diff
      toc:
        enable: true
        number: true
      -  auto_open: true # auto open the sidebar
      ```

   3. 優化手機toc 的特效和按鈕出現的時機

   4. aside狀態存*localStorage*

3. 文章標題改為居中

4. aside 可配置隱藏/增加按鈕可展開或收縮aside

   ```diff
   aside:
     enable: true
   +  hide: false
   +  button: true
     mobile: true # display on mobile
   ```
   
5. 增加Twikoo評論

   ```diff
   +twikoo:
   ```

### Improvements

1. 完善note標籤在readmode上的顯示
2. 精簡css 和 js
3. pjax 優化
4. 文章頁標題改為h1(seo)
5. canonical 改為hexo提供的函數生成
6. ICP SEO優化 [#393](https://github.com/jerryc127/hexo-theme-butterfly/pull/393)
7. 調大sidebar的寬度
8. html結構調整，mobile-sidebar改為sidebar/search調整
9. 滾動到評論按鈕只要用評論的頁面就出現

### Fix

1. 修復網站壓縮後，mermaid 會無法生成顯示的Bugs
2. 修復當文章頁top_img設為false時，閲讀模式下文章內容不顯示的bugs
3. 修復valine背景圖片再次出現時，由左到右移動的bugs
4. 修復disqusjs沒有設置api時，沒有反代的bugs

### Remove

1. 刪除搜索不必要的配置
2. 移除豆瓣配置,如需配置，請使用 hexo-butterfly-douban
3. 刪除多餘的css和pug

{% endhideToggle %}



{% hideToggle 3.2.0 (2020/09/28) %}

## 3.2.0 (2020/09/28)

### Breaking Change

1. 更改canvas_ribbon_piao 為 canvas_fluttering_ribbon

   ```diff
   -canvas_ribbon_piao:
   +canvas_fluttering_ribbon:
     enable: false
     mobile: false
   ```

2. 刪除特效js,改為cdn引入

   ```diff
   CDN:
     # background effect
   -  canvas_ribbon: /js/third-party/canvas-ribbon.js
   -  canvas_ribbon_piao: /js/third-party/piao.js
   -  canvas_nest: /js/third-party/canvas-nest.js
   
   +  canvas_ribbon: https://cdn.jsdelivr.net/npm/butterfly-extsrc@1/dist/canvas-ribbon.min.js
   +  canvas_fluttering_ribbon: https://cdn.jsdelivr.net/npm/butterfly-extsrc@1/dist/canvas-fluttering-ribbon.min.js
   +  canvas_nest: https://cdn.jsdelivr.net/npm/butterfly-extsrc@1/dist/canvas-nest.min.js
   
     # effect
   -  activate_power_mode: /js/third-party/activate-power-mode.js
   -  fireworks: /js/third-party/fireworks.js
   -  click_heart: /js/third-party/click_heart.js
   -  ClickShowText: /js/third-party/ClickShowText.js
   
   +  activate_power_mode: https://cdn.jsdelivr.net/npm/butterfly-extsrc@1/dist/activate-power-mode.min.js
   +  fireworks: https://cdn.jsdelivr.net/npm/butterfly-extsrc@1/dist/fireworks.min.js
   +  click_heart: https://cdn.jsdelivr.net/npm/butterfly-extsrc@1/dist/click-heart.min.js
   +  ClickShowText: https://cdn.jsdelivr.net/npm/butterfly-extsrc@1/dist/click-show-text.min.js
   
   ```

   

### Feature

1. 可設置首頁文章不顯示內容/description

   ```diff
   # Display the article introduction on homepage
   # 1: description
   # 2: both (if the description exists, it will show description, or show the auto_excerpt)
   # 3: auto_excerpt (default)
   +# false: do not show the article introduction
   index_post_content:
     method: 3
     length: 500 # if you set method to 2 or 3, the length need to config
   ```

   

2. 主頁文章時間和文章頁文章時間可以配置顯示日期還是相對時間

   ```diff
   post_meta:
     page: # Home Page
   +    date_format: relative # date/relative 顯示日期還是相對日期
     post:
   +    date_format: relative # date/relative 顯示日期還是相對日期
   
   ```

   

3. top_img 可配置 （留空（默認色）/顏色（HEX值/RGB值/顔色單詞/漸變色)/圖片鏈接/ false（不顯示top_img））

4. footer可配置背景 [留空/false(默認色)/顏色（HEX值/RGB值/顔色單詞/漸變色)/圖片鏈接/true(跟top_img一樣)]

5. 網站背景可配置 （顏色（HEX值/RGB值/顔色單詞/漸變色)/漸變色/圖片鏈接）

6. 增加 tag_per_img 配置（可為各個tag 單獨配置top_img）

   ```diff
   +tag_per_img:
   ```

7. 增加 category_per_img 配置（可為各個category單獨配置top_img）

   ```diff
   +category_per_img:
   ```

8. note 標籤優化(可自定義icon圖標/可覆蓋配置中的style)

9. 夜間模式下，背景顔色/top-img/footer-bg 設置為顔色時，不再強制顯示黑色，而是改為遮罩降低亮度

10. 增加部分特效 Mobile設置（activate_power_mode/fireworks/click_heart/ClickShowText)

    ```diff
    activate_power_mode:
      ...
    +  mobile: false
    
    fireworks:
       ...
    +  mobile: true
    
    -click_heart: false
    +click_heart:
    +  enable: false
    +  mobile: false
    
    ClickShowText:
      enable: false
      ...
    +  mobile: false
    ```

11. 添加 artitalk 説説插件

    ```diff
    +# Artitalk
    +# see https://artitalk.js.org/
    +artitalk:
    +  appId:
    +  appKey:
    +  option:
    
    CDN:
    +  artitalk: https://cdn.jsdelivr.net/npm/artitalk
    ```

12. 網頁進入動畫效果可關閉

    ```diff
    +# Enter transitions (開啟網頁進入效果)
    +enter_transitions: true
    ```

### Improvements

1. preloader 在 pjax 下 每個頁面都會加載
2. 修改判斷，避免用户設置2個lightbox 而導致報錯（只能設置一個）
3. 精確時間顯示 （剛剛/幾分鐘前/幾小時前/幾天前/幾個月前）
4. 刪除不必要的語言文件和css
5. Open_Graph 改為 hexo 內置 生成
6. 當隱藏部分沒配置時，左下角設置按鈕會消失 #353
7. aside 分類 收縮/展開 增加slide效果
8. darkmode 字體顔色加深
9. 優化nav的進入，應該修復一些用户在本地測試中無法顯示nav的bugs
10. 最新評論 leancloud呼叫由js sdk 改為 rest api 呼叫。應用可以不與valine同一個
11. 最新評論增加錯誤輸出
12. tags 設定彩色顯示後，字型大小將根據tag的文章數量而變化 close #365
13. 調整tags頁和categories頁在寬度小於768時的字體大小
14. 主題文件分類調正
15. 當點擊評論框時，valine背景圖片隱藏

### Fix

1. 修復當hexo的_config沒有設置description時，會導致pjax在頁面與文章間切換會無效 #381
2. 修復鼠標點擊文字特效，文字過長導致頁面有滾動條的bugs
3. 修復本地搜索文章鏈接無法跳轉bugs

### Remove

1. 移除anime js， 集成在fireworks的js裏

   ```diff
   CDN:
   -  anime: https://cdn.jsdelivr.net/npm/animejs@latest/anime.min.js
   ```

2. 刪除不必要的語言檔案

### chore

1. update hexo-renderer-stylus to 2.0.1

{% endhideToggle %}

{% hideToggle 3.1.1 (2020/09/06) %}

## 3.1.1 (2020/09/06)

### Fix

1. 修復關閉last push date 後， 報 'hour' 找不到的bugs
2. 修復開啟 prismjs 後， 在低版本的 safari 會出現 js 報錯的 Bugs

{% endhideToggle %}

{% hideToggle 3.1.0 (2020/08/31) %}

## 3.1.0 (2020/08/31)

### Breaking Change

1. 只支持 hexo 4.2.0 以上版本
2. butterfly.yml 採用deepMerge, 與_config文件進行合併而不是替換

### Feature

1. 適配 hexo 5.0.0 的 prismjs, 代碼主題和各項功能

2. 適配hexo 5.1.0 prismjs caption

3. 可隱藏 Mobile sidebar 子菜單

   ```diff
   +# Hide the child menu items in mobile sidebar
   +hide_sidebar_menu_child: false
   ```

4. 當寬度小於1024時，點擊toc滾動，增加滾動效果

5. 可配置font-size/更改配置中 code-font 為 code-font-family

   ```diff
   font:
   +  global-font-size:
   +  code-font-size:
      font-family:
   -   code-font:
   +   code-font-family:
   ```

6. 部分css由'px'改為'em'，適應font-size值改變而改變

7. pjax增加exclude配置

   ```diff
   -pjax: false
   +pjax:
   +  enable: false
   +  exclude:
   ```

8. 新增 cnzz_analytics

   ```diff
   # Analysis
   # --------------------------------------
   
   # Baidu Analytics
   # https://tongji.baidu.com/web/welcome/login
   baidu_analytics:
   
   # Google Analytics
   # https://analytics.google.com/analytics/web/
   google_analytics:
   
   # Tencent Analytics
   # https://mta.qq.com/
   tencent_analytics: #500727214
   
   +# CNZZ Analytics
   +# https://www.umeng.com/
   +cnzz_analytics:
   ```

9. 騰訊分析改為騰訊移動分析，並適配pjax

10. aside增加position sticky

11. 更改addtoany item的寫法

    ```diff
    addtoany:
      enable: false
    -  item:
    -    - facebook
    -    - twitter
    -    - wechat
    -    - sina_weibo
    -    - facebook_messenger
    -    - email
    -    - copy_link
    +	item: facebook,twitter,wechat,sina_weibo,facebook_messenger,email,copy_link
    ```

12. 增加最後更新時間顯示/增加post count 配置

    ```diff
    aside:
    -  card_webinfo: true
    +  card_webinfo:
    +    enable: true
    +    post_count: true
    +    last_push_date: true
    ```

13. 增加 aside 最新評論部件

    ```diff
    +newest_comments:
    +  enable: false
    +  limit: 6
    +  avatar: true
    +  leancloud:
    +    enable: false
    ++    appId: # leancloud application app id
    +    appKey: # leancloud application app key
    +    serverURL: # This configuration is suitable for domestic custom domain name users, overseas version will be automatically detected (no need to manually fill in)
    +    default_avatar: mp # mp/identicon/monsterid/wavatar/retro/robohash/blank
    +  github_issues:
    +    enable: false
    +    repo:
    +  disqus:
    +    enable: false
    +    forum:
    +    api_key:
    ```

    



### Improvements

1. archives和card-post 改為flex佈局
2. 點擊滾動，如果滾動是向上時，將會偏移60px， 避免導航欄遮擋 close #317
3. 改cookies為*localStorage*存儲
4. 設置中的theme_color可單獨配置幾個，而不需要全部開啟 close #314
5. 調整webinfo 寬度小時的顯示
6. aside 內容邊距調整
7. Pjax下，刷新頁面時，會滾動到上次瀏覽的位置
8. 修復mathjax溢出屏幕的Bugs # 321
9. 部分css調整和html優化
10. 刪除pwa中的theme-color配置，默認生成meta theme-color #340
11. 補全card-categories和card-archives的 '查看更多‘鏈接 #337
12. 代碼名字全大寫

### Fix

1. 修復canvas_nest 配置沒有生效的Bugs
2. 修復rightsize-bottom配置無效的bug
3. 修復夜間模式下代碼塊有背景的bugs（沒開啟渲染的情況下）
4. 修復 prismjs 在 tags-toggle 外掛標簽裏，代碼塊顯示一行的bugs
5. 修復當關閉代碼渲染後，標簽外掛裏的代碼塊會被壓縮到一行的bugs
6. 修復在modern樣式下，note 標簽外掛沒有使用tags名時，沒有背景色和夜間模式文字顯示不清楚的bugs
7. 修復主頁文章cover在深色模式下，邊角有小白邊的bugs #278
8. 修復note標簽外掛下，代碼塊顯示背景色的bugs close #339
9. 修復toc 滾動百分比不準的Bugs
10. 修復comments沒設置時，報Unexpected token ')'的bugs #344
11. 修復網站子目錄下，相關文章cover無法顯示的bugs #334

### Remove

1. 去除字體放大、縮小按鈕
2. 移除 代碼default主題

{% endhideToggle %}

{% hideToggle 3.0.1 (2020/08/11) %}

## 3.0.1 (2020/08/11)

### Fix

1. 修復導航側邊欄沒有進入特效的Bugs
2. 修復Hexo 5.0.0 以下版本， toc遇到中文不會滾動的bugs
3. 修復pjax下，同時開啟Open_Graph_meta和Livere，Livere評論後台顯示的來源頁面與實際不同 的bugs

{% endhideToggle %}


{% hideToggle 3.0.0 (2020/08/05) %}

## 3.0.0 (2020/08/05)

### Fix

1. 修復文章頁沒有lazyload的bugs
2. 修復文章頁沒有lazyload的bugs

{% endhideToggle %}

{% hideToggle 3.0.0-RC2 (2020/08/01) %}

## 3.0.0-RC2 (2020/08/01)

###  Breaking Change

1. 支持雙評論系統配置/評論配置整理/評論增加lazyload

   ```diff
   +comments:
   +  # Up to two comments system, the first will be shown as default
   +  # Choose: Disqus/Disqusjs/Livere/Gitalk/Valine/Utterances/Facebook Comments
   +  use:
   +  # - Valine
   +  # - Disqus
   +  text: true # Display the comment name next to the button
   +  # lazyload: The comment system will be load when comment element enters the browser's viewport.
   +  # If you set it to false, the comment count will be invalid
   +  lazyload: false
   +  count: false # Display comment count in top_img
   
   disqus:
   -  enable: false
   -  count: false # dispaly comment count in top_img

   disqusjs:
   -  enable: false
   -  count: false # dispaly comment count in top_img

   livere:
   -  enable: false

   gitalk:
   -  enable: false
   -  count: false # dispaly comment count in top_img

   valine:
   -  enable: false # if you want use valine,please set this value is true
   -  count: false # dispaly comment count in top_img

   utterances:
   -  enable: false

   facebook_comments:
   -  enable: false
   -  count: false
   ```
   
2. footer配置整理，修改部分用語  #279

   ```diff
   -since: 2020
   -footer_custom_text:
   -footer_copyright: true
   -ICP:
   -  enable: false
   -  url:
   -  text:
   -  icon: /img/icp.png
   
   +footer:
   +  owner:
   +    enable: true
   +    since: 2020
   +  custom_text: 
   +  copyright: true # Copyright of theme and framework
   +  ICP: # Chinese ICP License
   +    enable: false
   +    url:
   +    text:
   +    icon: /img/icp.png
   ```

3. 移除‘添加書籤’功能，可執行配置按鈕

   ```diff
   aside:
     card_author:
       enable: true
       description:
   +    button:
   +      icon: fab fa-github
   +      text: Follow Me
   +      link: https://github.com/xxxxxx
   ```

4. copy的copyright增加字數限制配置，可配置多少字以上才添加版權信息

   ```diff
   copy:
     enable: true
   -  copyright: false
   +  copyright:
   +    enable: false
   +    limit_count: 50
   ```

5. aside recent post可設置按發表時間或者更新時間排序

   ```diff
   aside:
     card_recent_post:
       enable: true
       limit: 5 # if set 0 will show all
   +    sort: date # date or updated
   ```

6. 更換typed.js/meting CDN

   ```diff
   -typed: https://cdn.jsdelivr.net/npm/typed.js
   -meting_js: https://cdn.jsdelivr.net/npm/meting@1.2.0/dist/Meting.min.js
   
   +typed: https://cdn.jsdelivr.net/npm/typed.js/lib/typed.min.js
   +meting_js: https://cdn.jsdelivr.net/gh/metowolf/MetingJS@1.2/dist/Meting.min.js
   ```

### Feature

1. 增加文章過期提醒

   ```DIFF
   +# Displays outdated notice for a post (文章過期提醒)
   +noticeOutdate:
   +  enable: false
   +  style: flat # style: simple/flat
   +  limit_day: 500 # When will it be shown
   +  position: top # position: top/bottom
   +  message_prev: It has been
   +  message_next: days since the last update, the content of the article may be outdated.
   ```

2. 增加mac light 代碼框配色

3. 文章copyright 可單獨配置

4. card-category 中category名稱和數字限制一行顯示

5. 簡繁轉換優化，placeholder也會被轉換

6. 引入css變數，減少css體積

7. 新增 Pjax #234

   ```diff
   +# Pjax [Beta]
   +# It may contain bugs and unstable, give feedback when you find the bugs.
   +# https://github.com/MoOx/pjax
   +pjax: false
   ```

8. 添加第三方chat服務 crisp

   ```diff
   +# crisp
   +# https://crisp.chat/en/
   +crisp:
   +  enable: false
   +  website_id:
   ```

9. 谷歌廣告增加自動廣告配置，減少不必要的js加載

   ```diff
   google_adsense:
     enable: false
   +  auto_ads: true
     js: https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
     client:
     enable_page_level_ads: true
   ```

10. 當post_asset_folder為true時，post的top_img和cover可直接引用同名文件夾下的圖片，只需要寫圖片名字和後綴就行 #270

11. 增加Yandex Webmaster tools verification配置

    ```diff
    +# Yandex Webmaster tools verification setting
    +# see https://webmaster.yandex.com/
    +yandex_site_verification:
    ```

12. post-meta可以配置是否顯示文字

    ```diff
    post_meta:
      page: # Home Page
        date_type: created # created or updated or both 主頁文章日期是創建日或者更新日或都顯示
        categories: true # true or false 主頁是否顯示分類
        tags: false # true or false 主頁是否顯示標籤
    +    label: true # true or false 顯示描述性文字
      post:
        date_type: both # created or updated or both 文章頁日期是創建日或者更新日或都顯示
        categories: true # true or false 文章頁是否顯示分類
        tags: true # true or false 文章頁是否顯示標籤
    +    label: true # true or false 顯示描述性文字
    ```

13. 手機端post-meta調整顯示/支持顯示分類

14. 代碼框滾動條顔色隨代碼主題變化

15. 頭像/打賞圖片 增加lazyload

16. 提升highlight-tool的加載速度

17. disqus/disqusjs/facebook comments 可隨夜間模式按鈕切換而轉換主題

18. mathjax升級到3 #216

19. pangu.js 只會渲染 body-wrap 區域

20. 放大字體和縮小字體 限制在 10px~20px

21. 更新谷歌分析代碼（gtag）

22. 移除blueimp_md5 js

    ```diff
    -blueimp_md5: https://cdn.jsdelivr.net/npm/blueimp-md5/js/md5.min.js
    ```

23. 夜間模式和閲讀模式微調

### Fix

1. 修復右下角按鈕被button標籤外掛遮擋的bugs
2. 修復開啟photofigcaption後，圖庫會出現界面錯亂的Bugs
3. 修復tabs外掛標簽與aplayer插件衝突而異常的bugs
4. aplayer的間距調整
5. 修復文章front-matter的highlight_shrink和toc為空時，會出現js報錯的bugs
6. 修復BUTTON標籤嵌套使用在其他標籤時，生成多了br標籤而導致樣式不同的bugs
7. 修復部分設備遇到mobile-sidebar無法滾動的bugs
8. 修復文章頁部分元素內文字溢出的Bugs
9. 調整當card-category有收縮按鈕時的顯示佈局
10. 修復配置PWA參數時，如果網站是子目錄時，會出現加載不到文件的bugs
11. 修復hexo douban插件 點擊上/下一頁出現圖片變為null的bugs
12. 適配hexo 5.0.0 修復toc點擊不會跳轉的bugs
13. 適配hexo 5.0.0 修復toc不會隨著文章而滾動的bugs
14. 修復Valine 的requiredFields設置為空 無效的bugs
15. 調整手機界面下ol ul li的邊距 #267
16. 修復facebook comments 在手機下寬度不是100%的bugs
17. 修復share.js 分享的文章圖片都顯示同一張的bugs
18. 去除note標籤外掛設為modern時，a標籤的下劃線
19. 修正一些不正確的html結構
20. 修復fancybox的alt會顯示undefined的bugs
21. 修復footer藍色背景下，icp 文字hover 文字變藍看不清的Bug

{% endhideToggle %}

{% hideToggle 3.0.0-RC1 (2020/06/16) %}

##  3.0.0-RC1 (2020/06/16)

### Breaking Change

1. 從3.0開始，不再對IE瀏覽器進行適配

2. 強制使用fontawesome v5（會對一些自定義icon產生影響，請替換為V5圖標）

   ```diff
   -# fontawesome圖標
   -# 默認使用的是 fontawesome v4版本的圖標
   -fontawesome_v5:
   -  enable: false
   
   CDN:
   -  # fontawesome
   -  fontawesome_v4: https://cdn.jsdelivr.net/npm/font-awesome@latest/css/font-awesome.min.css
   -  fontawesome_v5: https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css
   +	fontawesome: https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css
   ```

3. _config.yml 內容修改

   1. 精簡baidu_push/instantpage/click_heart/readmode/footer_copyright/medium_zoom/fancybox配置

      ```diff
      -baidu_push:
      -  enable: false
      
      -instantpage:
      -  enable: true
      
      -click_heart:
      -  enable: false
      
      -readmode:
      -  enable: true
      
      -footer_copyright:
      -  enable: true
      
      -medium_zoom:
      -  enable: false
      
      -fancybox:
      -  enable: true
      
      +baidu_push: false
      +instantpage: true
      +click_heart: false
      +readmode: true
      +footer_copyright: true
      +medium_zoom: false
      +fancybox: true
      ```

   2. 修改runtimeshow 的start_date 為publish_date

      ```diff
      runtimeshow:
        enable: true
      -  start_date: 6/7/2018 00:00:00
      +  publish_date: 6/7/2018 00:00:00
      ```

   3. laibili 改名為 LiveRe

      ```diff
      -laibili:
      +livere:
        enable: false
        uid:
      ```

   4. 改hr為hr_icon 可設置取消icon

      ```diff
      # 水平分隔綫
      -hr:
      +hr_icon:
        enable: true
        icon: #fontawesome上圖標的Unicode
        icon-top:
      ```

   5. 更改loading_bg為error_img，post-loading移到lazyload去

      ```diff
      -lodding_bg:
      +error_img:
        flink: /img/friend_404.gif #404後圖片
        post_page: /img/404.jpg #404後圖片
      -  post: /img/loading.gif #加載動畫
      
      lazyload:
        enable: true
      +  post: /img/loading.gif #加載動畫
      ```

   6. pangu 的field配置只能配置site/post

      ```diff
      pangu:
        enable: true
      -  field: page # page/post
      +  field: site # site/post
      ```

   7. 整合auto_open_sidebar到toc去

      ```diff
      toc:
        enable: true
        number: true
      +  auto_open: true # auto open the sidebar
      
      -# auto open the sidebar in 'post'
      -auto_open_sidebar:
      -  enable: true
      ```
      
   8. font去除enable配置
   
      ```diff
      # 全局字體
      font:
      -  enable: false
      -  font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif
      -  code-font: consolas, Menlo, "PingFang SC", "Microsoft YaHei", monospace, Helvetica Neue For Number
      
      +  font-family:
      +  code-font:
      ```
   
   9. 刪除部分配置
   
      ```diff
      valine:
      -  notify: false # valine mail notify (true/false) Deprecated in v1.4.0+
      -  verify: false # valine verify code (true/false) Deprecated in v1.4.0+
      
      translate:
      -  #博客網址
      -  cookieDomain: 'https://xxx/'
      ```
      
   10. 刪除twitter_meta配置
   
       ```diff
       -# twitter分享自動帶上樣式
       -# -https://i.loli.net/2019/09/08/qm3RfvUCKbct1Wz.png
       -twitter_meta: true
       ```
   
       

### Feature

1. table寬度佔滿顯示

2. 增加系統Darkmode切換監控，當系統切換Darkmode時，主題會立刻切換

3. card_description 支持html書寫

4. Dark Mode和Light Mode 切換按鈕icon更換

5. 適配hexo自帶標簽 Pullquote

6. 百度推送鏈接增加dns-prefetch

7. canonical 設為默認生成 不再提供配置

   ```diff
   -# 避免重複網址分散seo
   -canonical: true
   ```

8. instantpage js 加載增加defer

9. fireworks 增加z-index配置

   ```diff
   fireworks:
     enable: false
   +  zIndex: 9999 # -1 or 9999
   ```

10. 新的Tag Plugins - button

11. 新的Tag Plugins - tabs

12. 可配置justifiedGallery CDN

    ```DIFF
    CDN:
    +  # justifiedGallery
    +  justifiedGallery_js: https://cdn.jsdelivr.net/npm/justifiedGallery/dist/js/jquery.justifiedGallery.min.js
    +  justifiedGallery_css: https://cdn.jsdelivr.net/npm/justifiedGallery/dist/css/justifiedGallery.min.css
    ```

13. 新設計404頁面

14. aplayer js /css 可配置，在文章front-matter中設置aplayer. 防止aplayer在每個頁面都插入代碼

    ```DIFF
    CDN:
    +  # aplayer
    +  aplayer_css: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css
    +  aplayer_js: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js
    +  meting_js: https://cdn.jsdelivr.net/npm/meting@1.2.0/dist/Meting.min.js
    ```

15. 增加在綫聊天 Chat Services (chatra/tidio/daovoice/gitter), 可配置主題chat按鈕替換原在綫聊天按鈕

    ```diff
    +# Chat Button [recommend]
    +# It will create a button in the bottom right corner of website, and hide the origin button
    +chat_btn: false
    
    +# The origin chat button is displayed when scrolling up, and the button is hidden when scrolling down
    +chat_hide_show: false
    
    +# chatra
    +# https://chatra.io/
    +chatra:
    +  enable: false
    +  id:
    
    +# tidio
    +# https://www.tidio.com/
    +tidio:
    +  enable: false
    +  public_key:
    
    +# daovoice
    +# http://daovoice.io/
    +daovoice:
    +  enable: false
    +  app_id:
    
    +# gitter
    +# https://gitter.im/
    +gitter:
    +  enable: false
    +  room:
    ```

16. 可配置rightside按鈕與底部的距

    ```diff
    +# 右下角按鈕距離底部的距離(默認單位為px)
    +rightside-bottom:
    ```

17. 更換lazyload服務商

    ```diff
    CDN:
    -	lazyload: https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js
    +	lazyload: https://cdn.jsdelivr.net/npm/vanilla-lazyload/dist/lazyload.iife.min.js
    ```

18. card-categories增加收縮/展開按鈕

    ```diff
    aside:
      card_categories:
        enable: true
        limit: 8 # if set 0 will show all
    +    expand: none # none/true/false
    ```

19. 更改auto_excerpt為index_post_content，並擁有三種方法可選

    ```diff
    -# 自動節選
    -auto_excerpt:
    -  enable: true
    -  length: 150
     
    +# Display the article introduction on homepage
    +# 1: description
    +# 2: both (if the description exists, it will show description. or show the auto_excerpt)
    +# 3: auto_excerpt (default)
    +index_post_content:
    +  method: 3
    +  length: 500 # if you set method to 2 or 3, the length need to config
    ```

20. 可在post裏單獨設置 auto_open: false關掉sidebar自動打開 #232

21. 友情鏈接界面代碼優化/增加分類描述/分類名字和描述可以不寫/友情鏈接yml寫法更改（舊的寫法依舊有效，沒影響）

22. 文章/頁面font-matter 可設置highlight_shrink (true or false)

23. 代碼框優化

    1. 調整部分代碼顔色
    2. 增加一款代碼主題 mac 
    3. 代碼框主題支持自定義

24. 閲讀模式下去掉代碼高亮

25. disqusjs更新js/css版本，增加nocomment配置

    ```diff
    disqusjs:
      enable: false
      shortname:
      siteName:
      apikey:
    -  api: https://disqus.skk.moe/disqus/ #一般情況下無需修改 API 地址
    +  api:
    +  nocomment: # display when a blog post or an article has no comment attached
      admin:
      adminLabel:
      count: false # dispaly comment count in top_img
    
    CDN:
    -  disqusjs: https://cdn.jsdelivr.net/npm/disqusjs@1.2/dist/disqus.js
    -  disqusjs_css: https://cdn.jsdelivr.net/npm/disqusjs@1.2/dist/disqusjs.css
    +  disqusjs: https://cdn.jsdelivr.net/npm/disqusjs@1/dist/disqus.js
    +  disqusjs_css: https://cdn.jsdelivr.net/npm/disqusjs@1/dist/disqusjs.css
    ```

26. 打賞增加鏈接配置 /打賞寫法更改（舊寫法依然有用）#240

    ```diff
    # 打賞按鈕
    reward:
      enable: true
      QR_code:
    -    - itemlist:
    -        img: /img/wechat.jpg
    -        text: 微信
    -    - itemlist:
    -        img: /img/alipay.jpg
    -        text: 支付寶
    +    - img: /img/wechat.jpg
    +      link:
    +      text: 微信
    +    - img: /img/alipay.jpg
    +      link:
    +      text: 支付寶
    ```

27. 移除JS-COOKIES 

    ```diff
    CDN:
    -  js_cookies: https://cdn.jsdelivr.net/npm/js-cookie/dist/js.cookie.min.js
    ```

28. 可為文章配置是否顯示TOC,即使配置中已把toc設為false

### Fix

1. 修正側邊欄目錄收縮、展開圖標不對齊的bugs
2.  修改部分用語(zh-CN/zh-TW/en)
3. 修復card-categories和card-archives 邊緣點擊沒有跳轉的bugs
4. 修復網站是子目錄時，社交網站為相對地址時，地址生成錯誤的bugs
5. 修復最後一篇文章的Pagination沒有佔據全寬度的Bug
6. 修復推薦文章佈局在microsoft edge(舊版)顯示的Bug
7. 修復閲讀模式下 黑色代碼框下字體顯示不清楚 #223
8. 修復當blog_title_font不是設置google字體時，加載了preconnect  //fonts.googleapis.com 的bugs
9. 修復設置copy為false時，會導致代碼複製也無法複製的bugs
10. 閲讀模式調整
11. 修復部分壓縮軟件壓縮html報錯的bugs

{% endhideToggle %}

{% hideToggle 2.3.5(2020/05/01) %}

## 2.3.5 (2020/05/01)

### Feature

1. beautify 可配置生效於全站還是post頁 #218

    ```diff
    beautify:
      enable: true
    +  field: post # site/post
      title-prefix-icon: '\f0c1'
      title-prefix-icon-color: '#F47466'
    ```

2. 更換lazyload js

    ```diff
    -lazyload:
    -  enable: true
    
    +lazyload: true

    CDN:

    -  lazyload: https://cdn.jsdelivr.net/npm/lazysizes@latest/lazysizes.min.js
    +  lazyload: https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js

    ```

3. 增加文章anchor配置

    ```diff
    + # anchor
    + # when you scroll in post , the url will update according to header id.
    + anchor: false
    ```

### Fix

1. 修復當menu沒設置圖標時，會報Cannot read property 'trim' of undefined 的bug
2. 修復meta description 自動生成文章前200文字時部分沒有轉義的bug
3. 修復開啟lazyload後，使用{% asset_img slug [title] %} 無法顯示照片的bug
4. 修復tags頁標籤只顯示8個的bug
5. 修復當博客root不是'/'時,引用本地圖片會顯示不出的bug
6. 修復替換url hash 導致頁面跳動的bug

{% endhideToggle %}

{% hideToggle 2.3.0(2020/04/26) %}

## 2.3.0(2020/04/26)

### Breaking Change

1. 增加Facebook Comments

   ```diff
   +# Facebook Comments Plugin
   +# https://developers.facebook.com/docs/plugins/comments/
   +facebook_comments:
   +  enable: false
   +  app_id:
   +  user_id: # optional
   +  pageSize: 10 # The number of comments to show
   +  order_by: social # social/time/reverse_time
   +  lang: en_US # Language en_US/zh_CN/zh_TW and so on
   +  count: false
   ```

   

2. 增加頁面加載動畫Preloader #193

   ```diff
   +# 加載動畫 Loading Animation
   +preloader: false
   ```

   

3. aside card-tags可配置是否顯示顏色/aside subtitle可配置，優先顯示配置內容、沒有的顯示頁面subtitle #191 /aside widget 增加部分參數可配置/aside widget的Categories，Tags，post,Archives可配置limit/整合公告欄配置到aside去

   ```diff
   aside:
     enable: true
     mobile: true # 手機頁面( 顯示寬度 < 768px )是否顯示aside內容
     position: right # left or right
   -  card_author: true
   -  card_announcement: true
   -  card_recent_post: true
   -  card_categories: true
   -  card_tags: true
   -  card_archives: true
   +  card_author:
   +    enable: true
   +    description:
   +  card_announcement:
   +    enable: true
   +    content: This is my Blog
   +  card_recent_post:
   +    enable: true
   +    limit: 5 # if set 0 will show all
   +  card_categories:
   +    enable: true
   +    limit: 8 # if set 0 will show all
   +  card_tags:
   +    enable: true
   +    limit: 40 # if set 0 will show all
   +    color: false
   +  card_archives:
   +    enable: true
   +    type: monthly # yearly or monthly
   +    format: MMMM YYYY # eg: YYYY年MM月
   +    order: -1 # Sort of order. 1, asc for ascending; -1, desc for descending
   +    limit: 8 # if set 0 will show all
     card_webinfo: true
     
   -# 網站公告
   -announcement:
   -  content: 感謝訪問本站，若喜歡請收藏 ^_^
   
   ```

   

4. 改CDN_USE為inject,可插入代碼到head或者bottom

   ```diff
   -# CDN
   -# 網站必須
   -# 可根據需要自行添加js/css
   -CDN_USE:
   -  css:
   -    - /css/index.css
   
   -  js:
   -    - https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js #/js/third-party/jquery.min.js
   -    - /js/utils.js
   -    - /js/main.js
   
   +# inject
   +# 插入代碼到頭部</head>之前 和 尾部</body>之前
   +inject:
   +  head:
   +  	# - <link rel="stylesheet" href="xxxxx">
   +  bottom:
   +  	# - <script src="xxxx"></script>
   
   # CDN
   # 非必要不要修改
   CDN:
   +  # main
   +  main_css: /css/index.css
   +  jquery: https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js
   +  main: /js/main.js
   +  utils: /js/utils.js
   ```

   

5. 適配valine 1.4.5以上版本

   ```diff
   valine:
     enable: false # if you want use valine,please set this value is true
     appId: # leancloud application app id
     appKey: # leancloud application app key
     notify: false # valine mail notify (true/false) Deprecated in v1.4.0+
     verify: false # valine verify code (true/false) Deprecated in v1.4.0+
     pageSize: 10 # comment list page size
     avatar: monsterid # gravatar style https://valine.js.org/#/avatar
     lang: en # i18n: zh-CN/zh-TW/en/ja
     placeholder: Please leave your footprints # valine comment input placeholder(like: Please leave your footprints )
     guest_info: nick,mail,link #valine comment header info
     recordIP: false # Record reviewer IP
     serverURLs: # This configuration is suitable for domestic custom domain name users, overseas version will be automatically detected (no need to manually fill in)
   +  emojiCDN: # emoji CDN
   +  enableQQ: false # enable the Nickname box to automatically get QQ Nickname and QQ Avatar
   +  requiredFields: nick,mail # required fields nick/mail/link
     bg: /img/comment_bg.png # valine background
     count: false # dispaly comment count in top_img
   ```

6. 移除對文章隱藏的支持

   

### Feature

1. 增加標籤外掛 tag-toggle
2. 適配hexo-generator-indexed插件
3. Dark mode和Read mode配色微調
4. 增加頁面keywords設置 #191
5. algolia-search highlight文字加深
6. 調整子目錄的排版(向左對齊)
7. 調整aside和mobile sidebar 網頁資訊佈局，當缺少一個時，寬度依舊平分
8. sidebar menu 增加頭像轉圈hover
9. 當沒有設置Description時，會自動讀取文章前200個文字作為meta Description
10. meta增加article:published_time和article:modified_time
11. subtitle修改為網頁加載完後再加載，防止API迴應過慢而阻礙網頁顯示
12. 移除subtitle金山詞霸每日一句，增加搏天API的隨機語錄
13. 本地搜索支持顯示文章內容和高亮keyword
14. Read mode下可以切換Dark mode和Light mode
15. 高分辨率下的界面適配 #163
16. 修復Dark Mode下，note標籤的顯示bug
17. 添加 dns_prefetch

### Fixed

1. 修復 articleSort 設置文章封面邏輯不一致的問題 #194
2. 修正zh-TW部分用語
3. 修復hide-block 配置顏色顯示出錯的bug
4. 修復只能點擊子目錄文字才能跳轉的bug
5. 修復搜索結果在手機端無法滾動的bug
6. 修復aside categories 查看更多跳轉到tags頁面的bug #188
7. 修復當flink.yml內容為空時，報錯的bug
8. 修復Dark mode下 aside 查看更多文字顏色太淺的bug
9. 修復POST-META關閉閲讀分鐘和訪問量後,評論量前有分割線的bug
10. 修復canvas_ribbon透明度變為1再變回預設值bug
11. 修復當default_cover沒設置時，會出現無圖片的bug
12. 修復文章頁替換url hash值而導致歷史記錄過多的問題
13. 修復DarkMode下，note標籤的顯示bug

{% endhideToggle %}

{% hideToggle 2.2.5(2020/03/28) %}

## 2.2.5(2020/03/28)

### Breaking Change

1. 增加自動廣告位置

    ```diff
    +ad:
    + index:
    + aside:
    + post:
    ```

1. 增加圖片Figcaption顯示

    ```diff
    + photofigcaption: false
    ```

3. 增加全站總字數顯示，可配置是否關閉wordcout閲讀時間/字數統計/全站總字數

    ```diff
    wordcount:
      enable: false
    +  post_wordcount: true
    +  min2read: true
    +  total_wordcount: true
    ```

### Feature

1. 文章頁上滑出現的頂欄顯示目錄
2. 全站post-meta增加提示文本(Tooltip Text)
3. 調整文章頁post-meta和主頁post-meta的間距
4. 文章頁，當設置只顯示一個日期時，增加文字顯示

### Fixed

1. 修復lazyload中，img標籤的class在src後面時，導致替換出錯的bug
2. 修復複製版權信息url為undefined的bug
3. 修復aside 的 “查看更多” 不居中的bug
4. 修復highlight_shrink設為false時,js報錯的bug
5. 修復highlight_shrink設為true,點擊無反應，沒有打開代碼框的bug
6. Darkmode下，出現切換按鈕icon沒有改變的bug
7. 修復簡繁轉換無效的bug
8. 修復首頁文章日期顯示錯誤的bug
9. 修復因註釋掉豆瓣設置導致報Cannot read property 'meta' of undefined的bug
10. 修復Gitalk報Error: Cannot read property 'repository' of undefined 的bug
11. 修復評論utterances 在display_mode設置為dark時，仍顯示light主題的bug
12. 修復display_mode設置dark沒有效果的bug
13. 評論增加夜間模式、文章頁判斷,減少不必要的js加載
{% endhideToggle %}


{% hideToggle 2.2.0 (2020/03/17) %}

## 2.2.0 (2020/03/17)

### Breaking Change

1. 不再支持hexo 4.0.0以下版本
2. 添加hexo fragment_cache,加快生成速度

    ```diff
    + fragment_cache: true
    ```

3. 完善V5圖標顯示，不再需要同時加載V4和v5圖標

    ```diff
    + fontawesome_v5:
    +  enable: false

    CDN_USE:
      css:
        - /css/index.css
    -   - https://cdn.jsdelivr.net/npm/font-awesome@latest/css/font-awesome.min.css
    -   - https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css #fontawesomeV5_css

    CDN:
    +  # fontawesome
    +  fontawesome_v4: https://cdn.jsdelivr.net/npm/font-awesome@latest/css/font-awesome.min.css
    +  fontawesome_v5: https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css
    ```

4. 去除cheerio依賴
5. 整合豆瓣配置，增加配置遊戲，圖書頁面top_img,可設置是否設置meta,解決部分瀏覽器無法顯示圖片問題

    ```diff
    - # 如果你有使用hexo-douban去生成movie界面，可配置這個
    - movies_img: https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/movie.jpg

    + douban:
    +   meta: false
    +   movies_img:
    +   books_img:
    +   games_img:
    ```

6. 友情鏈接除列表外可自定義內容

7. 可設置主頁標題距離頂部距離

    ```diff
    # 主頁設置
    # 默認top_img全屏，site_info在中間
    # 使用默認, 都無需填寫(建議默認)
    +index_site_info_top: # 主頁標題距離頂部距離  例如 300px/300em/300rem/10%
    index_top_img_height: # 主頁top_img高度 例如 300px/300em/300rem  不能使用百分比
    ```

8. 側邊欄可隱藏,可設置手機頁面是否隱藏

   ```diff
   -aside_mobile: true

   aside:
   +  enable: true
   +  mobile: true # 手機頁面( 顯示寬度 < 768px )是否顯示aside內容
     position: right # left or right
     card_author: true
   ```

9. 增加disqusjs和utterances 兩個評論

   ```diff
   +disqusjs:
   +  enable: false #開啟改為 true
   +  shortname:
   +  siteName:
   +  apikey:
   +  api: https://disqus.skk.moe/disqus/ #一般情況下無需修改 API 地址
   +  admin:
   +  adminLabel:
   +  count: true # top_img顯示評論數

   + utterances:
   +   enable: false
   +   repo: jerryc127/jerryc127.github.io # 可選 pathname/url/title/og:title
   +   issue_term: pathname # 可選 github-light/github-dark/github-dark-orange/icy-dark/dark-blue/photon-dark
   +  light_theme: github-light
   +  dark_theme: photon-dark
   ```

10. 首頁subtitle可關閉打字效果，可設置打字效果顯示一次或loop

    ```diff
    subtitle:
      enable: true
    +  # 打字效果
    +  effect: true
    +  # 循環或者只打字一次
    +  loop: false
      # source調用第三方服務
      # source: false 關閉調用
      # source: 1  調用金山詞霸的每日一句(簡體)
      # source: 2  調用一言網的一句話(簡體) #https://hitokoto.cn/
      # source: 3  調用一句網(簡體) http://yijuzhan.com/
      # source: 4  調用今日詩詞(簡體) https://www.jinrishici.com/
      # subtitle 會先顯示 source , 再顯示 sub 的內容
      source: 2
      # (如果有英文逗號' , '，請使用轉義字符 &#44;)
      # 如果關閉打字效果，subtitle只會顯示sub的第一行文字
      sub:
        - 今日事&#44;今日畢
        - Never put off till tomorrow what you can do today
    ```

11. 增加valine和gitalk的配置

    ```diff
    gitalk:
      enable: false
      client_id:
      client_secret:
      repo:
      owner:
      admin:
      language: zh-CN # en , zh-CN , zh-TW
    +  perPage: 10 # Pagination size, with maximum 100.
    +  distractionFreeMode: false # Facebook-like distraction free mode.
    +  pagerDirection: last # Comment sorting direction, available values are last and first.
    +  createIssueManually: false # Gitalk will create a corresponding github issue for your every single page automatically
      count: true # top_img顯示評論數

    valine:
      enable: false # if you want use valine,please set this value is true
      appId:  # leancloud application app id
      appKey:  # leancloud application app key
      notify: false # valine mail notify (true/false) https://github.com/xCss/Valine/wiki
      verify: false # valine verify code (true/false)
      pageSize: 10 # comment list page size
      avatar: monsterid # gravatar style https://valine.js.org/#/avatar
      lang: en # i18n: zh-cn/en
      placeholder: 記得留下你的暱稱和郵箱....可以快速收到回覆 # valine comment input placeholder(like: Please leave your footprints )
      guest_info: nick,mail,link #valine comment header info
    +  recordIP: false # Record reviewer IP
    +  serverURLs: # This configuration is suitable for domestic custom domain name users, overseas version will be automatically detected (no need to manually fill in)
      bg: /img/comment_bg.png # valine background
      count: true # top_img顯示評論數
    ```

12. darkmode配置整理

    ```diff
    - # 夜間模式
    - darkmode:
    -  enable: true

    -# 自動切換 dark mode和 light mode
    -# autoChangeMode: 1  跟隨系統而變化，不支持的瀏覽器/系統將按照時間晚上6點到早上6點之間切換為 dark mode
    -# autoChangeMode: 2  只按照時間晚上6點到早上6點之間切換為 dark mode
    -# autoChangeMode: false 取消自動切換
    -autoChangeMode: false

    + darkmode:
    +  enable: true
    +  # dark mode和 light mode切換按鈕
    +  button: true
    +  # 自動切換 dark mode和 light mode
    +  # autoChangeMode: 1  跟隨系統而變化，不支持的瀏覽器/系統將按照時間晚上6點到早上6點之間切換為 dark mode
    +  # autoChangeMode: 2  只按照時間晚上6點到早上6點之間切換為 dark mode
    +  # autoChangeMode: false 取消自動切換
    +  autoChangeMode: false
    ```

13. 增加404頁面

    ```diff
    +# A simple 404 page
    +error_404:
    +  enable: true
    +  subtitle: "頁面沒有找到"
    +  background:
    ```

14. post_beautify改為beautify，頁面美化不再只限於post頁，page頁也一樣

    ```diff
    -post_beautify:
    +beautify:
      enable: true
      title-prefix-icon: '\f0c1'
      title-prefix-icon-color: "#F47466"
    ```

15. 可設置是否顯示cover，可設置各位置的cover顯示

    ```diff
    -# the default cover of the post
    -default_cover: https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/default.png

    -index_post_cover: both

    +cover:
    +  # 是否顯示文章封面
    +  index_enable: true
    +  aside_enable: true
    +  archives_enable: true
    +  # 封面顯示的位置
    +  # 三個值可配置 left , right , both
    +  position: both
    +  # 當沒有設置cover時，默認的封面顯示
    +  default_cover:
    ```

16. 增加mermaid,可畫流程圖、狀態圖、時序圖、甘特圖等等

    ```diff
    +# https://github.com/knsv/mermaid
    +mermaid:
    +  enable: true
    +  # built-in themes: default/forest/dark/neutral
    +  theme: default
    ```

17. 增加pangu配置，中英文之間添加空格

    ```diff
    +# https://github.com/vinta/pangu.js
    +# 中英文之間添加空格
    +pangu:
    +  enable: true
    +  field: page # page/post
    ```

18. 整合部分配置

    ```diff
    -avatar_effect: false

    +avatar:
    +  img: /img/avatar.png
    +  effect: true # 頭像會一直轉圈
    ```

19. post-copyright增加decode網址 (可以顯示中文)

    ```diff
    post_copyright:
      enable: true
    +  decode: false
      license: CC BY-NC-SA 4.0
      license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
    ```

20. 增加部分顏色配置

    ```diff
    theme_color:
      enable: true
      main: "#49B1F5"
      paginator: "#00c4b6"
      button_hover: "#FF7242"
      text_selection: "#00c4b6"
      link_color: "#99a9bf"
      meta_color: '#858585'
      hr_color: "#A4D8FA"
    -  read-mode-bg_color: '#FAF9DE'
    -  inline-code-color: '#F47466'
    +  code_foreground: "#F47466"
    +  code_background: "rgba(27, 31, 35, .05)"
    +  toc_color: "#00c4b6"
    +  blockquote_padding_color: "#49b1f5"
    +  blockquote_background_color: "#49b1f5"
    ```

21. 主頁文章增加tags和更新日期顯示，可以配置post_meta

    ```diff
    post_meta:
    -  date_type: both # or created or updated 文章日期是創建日或者更新日或都顯示
    -  categories: true # or false 是否顯示分類
    -  tags: true # or false 是否顯示標籤
    +  page:
    +    date_type: both # created or updated or both 主頁文章日期是創建日或者更新日或都顯示
    +    categories: true # true or false 主頁是否顯示分類
    +    tags: true # true or false 主頁是否顯示標籤
    +  post:
    +    date_type: both # created or updated or both 文章頁日期是創建日或者更新日或都顯示
    +    categories: true # true or false 文章頁是否顯示分類
    +    tags: true # true or false 文章頁是否顯示標籤
    ```

### Feature

1. 適配IE
2. 增加一個Tag Plugins: 圖庫集
3. 增加一個Tag Plugins: tag-hide 功能 inline/block
4. 去除page頁開頭顯示與標題一樣的內容
5. aside 公告欄設置，支持html代碼
6. 手機界面sidebar顯示進度條和加深對應的標題
7. 主頁subtitle 的 hitokoto 顯示內容出處
8. footer 的hexo鏈接改為https
9. 修改手機下，menus和toc的打開效果
10. 手機頁面下，搜索界面全屏顯示
11. SEO優化，標題欄改為h1顯示
12. 閲讀模式優化，可根據light mode 和darkmode調整背景
13. 當屏蔽js時，header會出現(之前用js控制，會隱藏)

### Fixed

1. 修復Tencent Analytics的script加載為https #105
2. 修復相關文章，日期顯示錯誤bug
3. 修復gitalk報錯問題
4. 修復當valine background 是絕對地址時無法顯示的bug
5. 修復medium-zoom 無法使用的bug
6. 修復在safari下，點擊或移動到首頁文章cover，圓角變成正方形的bug #114
7. 修復在部分瀏覽器下，aside,友情鏈接頭像轉動變形的bug
8. 修復在寬度限制下，表格內容溢出屏幕外而出現滾動條的bug \#138
9. 修復gitalk js 在一些沒有設置評論的page里加載的bug
10. 修復tag plugins 的gist 在不同主題下的背景顏色問題(黑色主題下，文字不易觀看)
11. 修復highlight figcaption 顯示不全的bug
12. 修復disqus評論數無法獲取的bug
13. 修復子目錄在觸摸屏下點擊,偶爾不出現的bug
14. 修復a標籤太長(連續英文字母)不會換行的bug
15. 修復toc滾動時，閲讀進度條也跟着滾動的bug
16. 修復aside的圖片，可點擊顯示大圖bug
17. 修復activate-power-mode設置參數無效bug
18. 修復語言上的錯誤 \#156
19. 修復主頁在safari桌面端，首頁滾動卡頓的bug
{% endhideToggle %}

{% hideToggle 2.1.0 (2019/12/20) %}
## 2.1.0 (2019/12/20)

### Feature

1. 可設置隱藏文章
2. 適配 Hexo 的 Tag Plugins Code Block With marked lines 顯示
3. 可配置首頁 cover 顯示的位置
4. 更改深色模式下的配色
5. activate_power_mode 增加關閉顏色和抖動
6. 增加谷歌廣告，騰訊分析
7. 相關文章增加時間顯示，調整佈局，垂直居中
8. 文章頁面，top_img 增加評論數顯示
9. 可以取消點擊圖片觀看大圖
10. mathjax 和 kathex 可設置每頁都加載還是按需加載
11. 深色模式下，滾動條顏色的適配
12. 優化 gitalk 在 dark mode 下的顯示
13. 文章頁，文章標題過長時，只顯示三行內容
14. 深色模式下，背景圖片加上蒙板
15. 優化深色/閲讀模式下，canvas 的顯示
16. 優化打賞的特效和移動到二維碼不會立刻消失
17. 優化 sub-menu 樣式
18. 修改 aside 的 tags 顏色，在深色模式下不會出現觀看困難
19. 升級 normalize.css 到最新版
20. 優化手機上 toc 和 menu 的打開動畫
21. 優化代碼框打開關閉的特效
22. 精簡 js,部分操作改為 css 控制
23. 優化主題的一些動畫，不會過於生硬

### Fixed

1. 修復當圖片被 a 標籤包圍時，點擊圖標沒有跳轉到對應網頁而是出現大圖觀看模式的 bug
2. 修復當網址有 subdirectory 時，menu、打賞二維碼和 lodding_bg 鏈接路徑錯誤的 bug
3. 修復當網址有 subdirectory 時,
4. 修復 katex 的 CSS 無法讀取 bug
5. 修復搜索按鈕在文章頁不顯示的 bug
6. 修復 gitalk css 引用失敗的 bug
7. 修復 點擊特效 煙花 無效的 bug
8. 修復 gitalk 報 path.startsWith is not a function 的 bug
9. 修復 閲讀模式下，背景沒有變純色的 bug
10. 修復閲讀模式下，header 偶爾出現沒有靠攏頂部的 bug
11. 修復 Hexo Tag Plugins Block Quote 裏的鏈接顯示出外面的 Bug
12. 修復 aside 歸檔日期過長導致錯位的 bug
13. 修復 toc 為空時，toc 按鈕仍存在的 bug
14. 修復關閉懶加載後，頭像無法顯示的 bug
15. 修復深色模式下，切換 readmode 偶爾會無效的 bug
16. 修復在一些手機設備上，toc 和 menu 的按鈕顯示不對齊的 bug #72

{% endhideToggle %}

{% hideToggle 2.0.0 (2019/11/03) %}
## 2.0.0 (2019/11/03)

### Breaking change

1. 手機端界面卡片化，同時，手機端也可以顯示側邊欄的內容
2. 修復當menu過多時，header界面出現錯亂的bug。當menu過多時，會變為sidebar模式
3. 增加medium-zoom大圖查看模式
4. 增加鼠標點擊特效：文字和愛心 兩個點擊特效
5. 主頁subtitle可以調用第三方api(金山詞霸每日一句、一言網的一句話、一句網、今日詩詞)
6. 添加 snackbar 彈窗
7. 修改nightshift為darkmode，darkmode可隨系統設置而自動切換，可設置隨時間而切換darkmode
8. 修復hexo自帶的標籤外掛(Tag Plugins)顯示bug(Block Quote、Code Block With caption、Gist、Youtube、Vimeo)
9. 主題所需要的css和js可根據需要配置CDN
10. 更改darkmode的加載方式，網站設置dark mode後，現在進入網頁不會在'閃'一下
11. 背景特效和背景圖片在手機界面也會顯示
12. 增加justified-gallery圖片顯示(Tag Plugins)

### Feature

1. 文章頁面，字數統計、閲讀時長和閲讀量前面添加icon
2. 更改懶加載js
3. 升級typed.js/instantpage.js到最新版
4. 搜索和右下角按鈕添加退出特效

### Fixed

1. 修復在 Hexo 4.0.0下，一些按鈕點擊會跳出一個空白頁的bug
2. 修復在 Hexo 4.0.0下，分頁按鈕出現代碼的bug
3. 修復當沒有設置評論時，右下角依舊出現'直達評論'按鈕的bug
4. 優化sidebar的打開速度
5. 修復文章頁標題左右邊距不平等的bug
6. 修復keywords讀取的bug
7. 修復當post/page 內容為空時，footer位置錯亂的bug
8. 修復在手機safari，toc sidebar底部內容被遮擋的bug
9. 完善Dark mode,一些界面的配色
10. 修復 card-archives 查看更多 跳轉bug

### Remove

1. 移除Gitment
2. 移除Gallery

{% endhideToggle %}

{% hideToggle 1.2.0 (2019/09/24) %}
## 1.2.0 (2019/09/24)

### Feature

1. 更改手機頁面的menu和toc的顯示方式和顯示特效(ipad也能看TOC)
2. 可設置禁止複製網站內容
3. 可設置複製時，內容自動加上版權信息
4. 可修改tag的top_img
5. 可修改category的top_img
6. 可修改valine的背景
7. archives頁UI優化
8. ICP增加icon #37
9. 可設置主頁top_img的高度
10. 可設置主頁site-info的位置
11. category頁和tag頁的UI可以設置與主頁UI一樣 #31
12. 主頁subtitle可設置多個句子(不再限制2個) #37
13. 設置menu時，頭尾添加空格不受影響
14. 調整post頁的佈局
15. 書籤添加icon
16. 公告icon效果
17. 首頁歸檔模塊，可設置數量限制，會顯示'查看更多'按鈕
18. 右下角按鈕調整。

### Fix

19. 修復文章cover隨機圖片生成，同一篇文章，不同地方的cover顯示不一樣的bug
20. 修復gitalk語言設置無效的bug #35
21. 修復post頁面，當沒有設置word count時，閲讀量前有'|"
22. 修復sub-menu在safari的顯示問題
23. 修復tags頁評論居中問題
24. 修復header a hover 白色問題
25. 修復夜間模式下footer的顏色bug
26. 修復英文語言下，書籤英文顯示不完整的問題

{% endhideToggle %}

{% hideToggle 1.1.5 (2019/09/08) %}

## 1.1.5 (2019/09/08)

### Feature

1. Feature: 可設置內聯代碼塊樣式 #26
2. Feature: 可設置夜間模式作為默認樣式
3. Feature: 可設置是否顯示code language名稱
4. Feature: 可設置是否展開或關閉代碼框
5. Feature: 可設置背景圖片/顏色
6. Feature: 可設置是否顯示footer背景
7. Feature: 增加 canvas-nest.js
8. Feature: 頭像可設置效果(轉圈圈)
9. Feature: menu可設置分組

### Fix

10. Fix: 優化打賞和搜索打開特效
11. Fix: 優化sidebar的打開特效，避免與文章頁特效不同步
12. Fix: 適配**hexo-blog-encrypt**，現在可以顯示toc
13. Fix: 修復設置不顯示評論時，直達評論按鈕沒有消失的bug
14. Fix: 修復post頁底欄，當沒有顯示評論，不顯示TOC，評論和toc都不顯示 這三種狀態下按鈕的bug
15. Fix: 修復代碼框左右滑動時，代碼名字跟着滑動的bug
16. Fix: 其他page頁標題的字體顯示
17. Fix: 修復當設置開啟canvas_ribbons，進入網站會先顯示canvas_ribbons的bug
18. Fix: 完善夜間模式下，字體顯示問題
19. Fix: 修復代碼框 複製 和 代碼名 z-index bug #25
20. Fix: 完善閲讀模式

{% endhideToggle %}

{% hideToggle 1.1.0 (2019/08/29) %}

## 1.1.0 (2019/08/29)

### Feature

1. Feature: 手機menu界面重新設計
2. Feature: 文章頁增加美化(原 melody主題功能),並增加更改標題前綴圖標和顏色
3. Feature: PC端增加直達評論按鈕
4. Feature: 可以對單獨文章設置是否顯示版權信息

### Fix

1. Fix: 修復閲讀模式下，調整字體大小對代碼無效的bug
2. Fix: 調整Valine字體顯示問題
3. Fix: 修正夜間模式下Valine的適配問題
4. Fix: 修復Valine設置notify和verify無效的bug (thx @VincentTV )
5. Fix: 修復使用hexo-asset-image,開啟懶加載後，圖片會出現無法加載問題
6. Fix:修復 '返回頂部'箭頭無法點擊的bug

### Remove

1. Remove: 去掉主題"閲讀更多"按鈕

{% endhideToggle %}

{% hideToggle 1.0.8 (2019/08/11) %}
## 1.0.8 (2019/08/11)

1. Feature: 可關閉圖片懶加載
2. Feature: 增加頁面排版，可選擇把右邊欄放在左邊
3. Feature: 增加 Note (Bootstrap Callout) (移植於next主題)
4. Feature: 手機上能夠查看TOC
5. Feature: 增加直達評論按鈕
6. Fix: 修復post頁在寬度1024px下的顯示bug
7. Fix: 修復代碼框部分語言沒有顯示正確的代碼語言
8. Fix: 修復設置裏把Disqus註釋掉無法運行的bug

{% endhideToggle %}

{% hideToggle 1.0.7 (2019/07/29) %}

## 1.0.7 (2019/07/29)

### Feature

1. Feature: add the option to change the site name font-family
2. Feature: add the option to close instant-page
3. Feature: the sidebar can auto scroll when the toc out of the screen

### Fix

1. Fix: random cover of previous post and next post
2. Fix: Display null when the subtitle not set
3. Fix: display related post's headline when it is not related posts
4. Fix: the bugs of image display
5. Fix: When the picture is loaded, the picture appears black frame

{% endhideToggle %}

{% hideToggle 1.0.6 (2019/07/06) %}

## 1.0.6 (2019/07/06)

1. Feature: random cover #10
2. Fix: valine lang not work
3. Fix: archives page site name not change when the language change
4. Fix: related posts url error

{% endhideToggle %}

{% hideToggle 1.0.5 (2019/06/28) %}
## 1.0.5 (2019/06/28)

1. fix bugs of gitalk #9
2. fix bugs of valine
3. new look of the mobile menu

{% endhideToggle %}

{% hideToggle 1.0.0 (2019.06/17) %}
## 1.0.0 (2019.06/17)

first release

{% endhideToggle %}
