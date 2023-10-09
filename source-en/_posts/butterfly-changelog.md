---
title: Butterfly Changelog
comments: false
date: 2023-07-01 19:20:56
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
toc: false
cover: https://jsd.012700.xyz/gh/jerryc127/CDN@m2/img/butterfly-docs-en-changelog.png
abbrlink: butterfly-docs-en-changelog
---

{% note orange 'fas fa-language' %}

This article is translated from ChatGPT.

{% endnote %}

{% note blue 'fas fa-bullhorn' %}

The release notes for versions 4.9.0 and later will be published as separate articles. Please check the [Release Notes](/en/categories/Release-Notes/) for more information.

{% endnote %}

***

{% hideToggle 4.9.0 (2023/06/06) %}

## 4.9.0 (2023/06/06)

### Feature

1. Adapted to mermaid v10

2. When the screen is larger than 2000px, the display area is increased

3. Header and footer can be configured to add black translucent masks

  ```diff
  +# Add mask to header or footer
  +mask:
  +  header: true
  +  footer: true
  ```

4. Latest comments in artalk are now called directly through the API

5. Latest comments and comment count in waline are now called directly through the API

6. Clicking the chat button in the lower right corner again will close the chat

7. Adapted to the new version of artalk

8. Supports random order of friend links

### Fix

1. Fixed the bug of inline mathjax causing scrolling

2. Fixed the bug that when top_img is a color, the top of the reading mode still shows the color

4. Fixed the bug that the sub of subtitle configuration did not take effect

### Improvement

1. Updated hexo-renderer-stylus

2. Beautification optimization of hr to avoid affecting the layout of third-party plugins

3. Optimized mediumZoom

4. Fine-tuned the homepage

5. When the latest comments are configured, there will be no error if comments are not configured

6. Optimized tidio, crisp, daovoice, messenger, and chatra code

{% endhideToggle %}



{% hideToggle 4.8.5 (2023/05/09) %}

## 4.8.5 (2023/05/09)

### Features

1. Artalk supports clicking to open large images.
2. After setting to switch between light and dark mode with the system, comments and mermaid will also switch colors accordingly.
3. Artalk's latest comments now read the avatar CDN and default avatar from the Artalk configuration.

### Fixes

1. Fixed the bug where Artalk could not get the latest comments.
2. Fixed the bug where the code block could not be copied when the copy button was clicked before the block was expanded.

### Improvements

1. Code and performance optimization.
2. Artalk now gets the comment count by using `loadCountWidget` instead of `LoadCountWidget`.


{% endhideToggle %}

{% hideToggle 4.8.1 (2023/04/10) %}

## 4.8.1 (2023/04/10)

### Fix

1. Fixed a bug where the theme's JavaScript could not be loaded when the internal_provider of the CDN was set to jsdelivr.

{% endhideToggle %}



{% hideToggle 4.8.0 (2023/04/10) %}

## 4.8.0 (2023/04/10)

### Breaking Change

1. Removed Gitter integration.

   ```diff
   -# gitter
   -# https://gitter.im/
   -gitter:
   -  enable: false
   -  room:

2. Renamed parameters in the CDN options section.

   ```diff
    CDN:
      option:
    -    # algolia_search_v4:
    -    # instantsearch_v4: 
    -    # fancybox_css_v4:
    -    # fancybox_v4:  
    -    # fontawesomeV6:
    
    +    # algolia_search:
    +    # instantsearch: 
    +    # fancybox_css:
    +    # fancybox:  
    +    # fontawesome:
   ```

### Feature

1. Configurable color for social media icons.

2. Added support for rendering music scores using abcjs library.

   ```diff
   +# abcjs (樂譜渲染)
   +# See https://github.com/paulrosen/abcjs
   +# ---------------
   +abcjs:
   +  enable: false
   +  per_page: true
   ```

3. Updated to support the latest version of typed.js.

4. Implemented Algolia search, clicking on search results now redirects to the corresponding page.

5. Refactored local search

   ```diff
   # Local search
   local_search:
     enable: false
     # Preload the search data when the page loads.
     preload: false
   +  # Show top n results per article, show all results by setting to -1
   +  top_n_per_article: 1
   +  # Unescape html strings to the readable one.
   +  unescape: false
     CDN:
   ```

6. Upgraded fancybox to version 5.

7. Updated Facebook JavaScript version.

8. CDN configuration now includes versioning for local links.

9. Added support for customizing the JS address of the giscus commenting system.

   ```diff
   CDN:
     option:
   +  	giscus: xxxxx
   ```

10. Added the ability to customize the switch time for dark mode.

    ```diff
    # dark mode
    darkmode:
    +  # Set the light mode time. The value is between 0 and 24. If not set, the default value is 6 and 18
    +  start: # 8
    +  end: # 22
    ```

### Fix

1. Fixed a bug where the search content was covered by the system search box in Safari.
2. Fixed a bug where the fullpage loading displayed a scrollbar.
3. Fixed an issue where the limit was not effective when card_tags.color was set to true.
4. Fixed a bug where the image identification was incorrect due to the uppercase suffix when setting an image.
5. Fixed an issue where pace.js was triggered by the addition of an anchor when archor was enabled.


### Improvement

1. When the browser width is greater than 2000px, the card width changes from 1500px to 1700px.
2. When beautify is not enabled, hr displays the default style.
3. When mobile Safari is in landscape mode, the webpage displays in full screen.
4. The social icon rotates 180 degrees on hover.
5. Optimized viewport SEO.
6. Code optimization.

{% endhideToggle %}



{% hideToggle 4.7.0 (2023/02/20) %}

## 4.7.0 (2023/02/20)

### Feature

1. The `card_tags` can be configured with `orderby` and `order` parameters.

   ```diff
   aside:
     card_tags:
       enable: true
       limit: 40 # if set 0 will show all
       color: false
   +    orderby: random # Order of tags, random/name/length
   +    order: 1 # Sort of order. 1, asc for ascending; -1, desc for descending
       sort_order: # Don't modify the setting unless you know how it works
   ```

2. The tag page supports configuring the `orderby` and `order` parameters.

3. Add `docsearch`.

   ```diff
   +# Docsearch
   +# https://docsearch.algolia.com/
   +docsearch:
   +  enable: false
   +  appId:
   +  apiKey:
   +  indexName:
   +  option:
   ```

4. Local search, clicking on the content of an article will also redirect to the corresponding page.

5. The `gallery` tag plugin adds support for retrieving JSON.
### Fix

1. Fixed a bug where there was no spacing in the aside card after setting card_author and card_announcement to false.
2. Fixed an issue where the latest comments in artalk could not be loaded.
3. Fixed a bug where waline's CSS was not loaded in pjax mode.
4. Fixed a bug in local search where certain symbols could not be searched.

### Improvement

1. Refactored getCSS function.
2. Reduced the size of the scroll bar.

{% endhideToggle %}



{% hideToggle 4.6.1 (2023/01/18) %}

## hideToggle 4.6.1 (2023/01/18)

### Breaking Change

1. Configurable parameters for typed.js

   ```diff
   subtitle:
   -  # Effect Speed Options
   -  startDelay: 300 # time before typing starts in milliseconds
   -  typeSpeed: 150 # type speed in milliseconds
   -  backSpeed: 50 # backspacing speed in milliseconds
   -  # loop
   -  loop: true
   +  # Customize typed.js
   +  # https://github.com/mattboldt/typed.js/#customization
   +  typed_option:
   ```

### Fix

1. Fixed bug where typeJSFn was being assigned multiple times.
2. Fixed bug where the title had a shadow after fixing the status bar.
3. Fixed bug where the gallery tag truncated the image link, causing a 404 error when loading the image.
4. Fixed bug where clicking on certain scroll-up buttons after fixing the navigation bar would result in the target section being obscured by the navigation bar.
5. Fixed bug where the table of contents (toc) was being obscured after fixing the navigation bar.

### Improvement

1. When switching between simplified and traditional Chinese, the lang attribute of the HTML will be changed.

{% endhideToggle %}



{% hideToggle 4.6.0 (2023/01/15) %}

## 4.6.0 (2023/01/15)
### Breaking Change

1. Optimization of cover display #1101

   When the cover is set to false or no value is obtained for the cover, the background of the related recommended articles and pagination buttons on the article page will be displayed in the theme color.

### Feature

1. toc can be set to show preview progress

   ```diff
   toc:
   +  scroll_percent: true
   ```

2. Added preview progress display to the bottom right button

   ```diff
   +# show scroll percent in scroll-to-top button
   +rightside_scroll_percent: true
   ```

3. Cover can be configured with color/gradient color, etc.

4. default_cover can be configured with color.

5. Navigation bar settings: hide blog name / set logo / set fixed navigation bar # 1150 #1104

   ```diff
   +nav:
   +  logo: # image
   +  display_title: true
   +  fixed: false # fixed navigation bar
   ```

6. BuSuanZi (a website traffic analysis tool) can be configured with CDN #1132

7. Added lazy loading to gallery tag plugin, added lazyload rowHeight and limit attribute configuration

8. Updated plugins.yml

### Fix

1. Fixed bug where hexo-log couldn't be loaded #1102
2. Fixed bug where special characters didn't display results when using local search
3. Fixed bug where colors with "/" in the header image and footer configuration couldn't be displayed
4. Fixed bug where code blocks still displayed colored backgrounds in reading mode (custom code blocks) #1139
5. Fixed bug where avatars of friend links may not be displayed when lazy loading is enabled and friend link data is imported using flink_url #1146
6. Fixed bug where waline js was loaded repeatedly under pjax

### Improvement

1. When setting the date as a relative date, the date format of the article and the latest comment are unified as year, month, and day.
2. Fixed bug where special characters didn't display results when using local search
3. Added explanatory text to the article pagination buttons when hovering over them with the mouse
4. The display order of the top image on the article page is top_img > cover > default_top_img
5. Modified configuration file comments
6. Optimized the scroll position of search result display
7. Search results will not split words when wrapping
8. Canonical link is generated based on the configuration

### Remove

1. Removed cnzz analytics

   ```diff
   -# CNZZ Analytics
   -# https://www.umeng.com/
   -cnzz_analytics:
   ```

{% endhideToggle %}



{% hideToggle 4.5.1 (2022/10/31) %}

## Fix
1. Fixed a bug where inline mathjax formulas caused excessive line spacing.
2. Fixed a bug where mathjax overflowed the screen instead of displaying a scrollbar after updating to a new version.

## Improvement:
1. Avoided configuration errors caused by not updating theme files.
2. Updated plugins.yml.

{% endhideToggle %}

{% hideToggle 4.5.0 (2022/10/21) %}

## 4.5.0 (2022/10/21)

### Breaking Change

1. Open_Graph_meta setting change, allowing configuration of additional parameters

   ```diff
   -Open_Graph_meta: true
   +Open_Graph_meta:
   +  enable: true
   +  option:
   ```

2. Preloader setting change, adding pace.js loading animation bar

   ```diff
   -preloader: false
   +preloader:
   +  enable: false
   +  # source
   +  # 1. fullpage-loading
   +  # 2. pace (progress bar)
   +  source: 1
   +  # pace theme (see https://codebyzach.github.io/pace/)
   +  pace_css_url:
   ```

3. Anchor setting change, allowing separate configuration for button and automatic update of anchor, setting button icon, and setting button always show

   ```diff
   -anchor: false
   +anchor:
   +  button:
   +    enable: false
   +    always_show: false
   +    icon: # the unicode value of Font Awesome icon, such as '\3423'
   +  auto_update: false # when you scroll in post, the URL will update according to header id.
   ```

### Feature

1. Update Facebook sdk to v15

### Fix

1. Fix `throttle` function invocation method #1075
2. Fix bug in controlling loadFBComment error #1066
3. Fix layout inconsistency issue when screen width is 768px #1032

### Improvement

1. Add additional characters to traditional and simplified Chinese conversion #1076
2. Local preview, refresh of friendly link page, content will not be duplicated
3. Update plugins.yml

### Remove

1. Remove meta keywords

{% endhideToggle %}



{% hideToggle 4.4.0 (2022/08/18) %}

## 4.4.0 (2022/08/18)

### Feature

1. Added Facebook Messenger plugin for online chat

   ```diff
   +messenger:
   +  enable: false
   +  pageID:
   +  lang: zh_TW # Language en_US/zh_CN/zh_TW and so on
   ```

2. Added Artalk comment function

   ```diff
   +artalk:
   +  server:
   +  site:
   +  visitor: false
   +  option:
   ```

3. Added parameter configuration for typing effect on homepage

   ```diff
   subtitle:
   ...
   +  # Effect Speed Options
   +  startDelay: 300 # time before typing starts in milliseconds
   +  typeSpeed: 150 # type speed in milliseconds
   +  backSpeed: 50 # backspacing speed in milliseconds
   ...
   ```

### Fix
1. Fixed bug where Facebook comments were not loading correctly after opening anchor
2. Fixed bug where Facebook comment count was not loading
3. Fixed bug where subdirectory hover did not have rounded corners #965

{% endhideToggle %}

{% hideToggle 4.3.1 (2022/06/27) %}

## 4.3.1 (2022/06/27)

### Fix
1. Fixed a bug where the read count wouldn't display when comments were set to false but the option to show comment count was enabled.
2. Fixed the bug with finding archive titles.

{% endhideToggle %}

{% hideToggle 4.3.0 (2022/06/24) %}

## 4.3.0 (2022/06/24)

### Breaking Change

1. Hide aside setting for archives has been changed.

   ```diff
   aside:
   -  archive: true
   +  display:
   +    archive: true
   ```

2. Adapt to disqusjs 3.0.

### Feature

1. The number of articles displayed on sub-archive pages will no longer show the total number of articles, but the corresponding number of sub-archive articles.

2. Added loading display for some data loading.

3. Added the ability to hide aside on tag and category pages.

   ```diff
   aside:
   +  display:
   +    tag: true
   +    category: true
   ```

4. Clicking on the archive date will now jump to the page, and the title will display the date instead of the word "Archive".

5. Adapted to the upgrade of katex and removed katex copy-tex.css.

6. Added one-click configuration for CDN using cdnjs.

7. Added one-click configuration for CDN using unpkg.

8. Added the ability to set version and custom format for CDN.

   ```diff
   CDN:
   +  version: false
   +  custom_format:
   ```

9. Added support for Remark42 comment system.

   ```diff
   +# Remark42
   +# https://remark42.com/docs/configuration/frontend/
   +remark42:
   +  host: # Your Host URL
   +  siteId: # Your Site ID
     option:
   ```

### Fix

1. Algolia search returns no results.
2. When the comment system is enabled, busuanzi's page_pv does not display.
3. Custom sorting for sidebar archive cards is not working correctly.

### Improvement

1. Modified the class name of the note icon to avoid overriding the theme style by third-party icons.


{%  endhideToggle %}



{% hideToggle 4.2.2 (2022/05/19) %}

## 4.2.2 (2022/05/19)

```markdown
fix: Fixed a bug where the comment count for the Valine plugin on the homepage only showed for the first article.
fix: Fixed a bug where third-party plugin local resources could not be loaded in subdirectories.
fix: Fixed a bug where the page_pv of busuanzi did not display when the comment system was enabled.
fix: Fixed a bug where using mermaid to jump under pjax would cause a reload.
improvement: Optimized Twikoo comments to not call the API when there is no comment count container. #897
```
{% endhideToggle %}

{% hideToggle 4.2.1 (2022/05/11) %}

## 4.2.1 (2022/05/11)

### Fix

1. Fixed a bug where mathjax fonts were missing when CDN configuration was set to local.

{% endhideToggle %}

{% hideToggle 4.2.0 (2022/05/02) %}

## 4.2.0 (2022/05/02)

### Breaking Change

1. Adapted waline to V2

   ```diff
   CDN:
   -    waline: 
   +    waline_js:
   +    waline_css:
   ```

2. Changed visitor in waline to pageview

   ```diff
   waline:
   -  visitor: false
   +  pageview: false
   ```

3. Added the ability to configure CDN for local files and separate configuration for theme files and third-party files

   ```diff
   CDN:
   +  # The CDN provider of internal scripts
   +  # option: local/jsdelivr
   +  # Dev version cannot choose jsdelivr
   +  internal_provider: local
   +  # The CDN provider of third party scripts
   +  # option: local/jsdelivr
   +  # when set it to local, you need to install hexo-butterfly-extjs
   +  third_party_provider: jsdelivr
   +  option:
   ```

4. Removed CDN configuration for utterances, giscus, addtoany, and busuanzi

### Feature

1. Added article content display and highlighting to algolia search

2. Increased the display area for search content

3. Added preload and CDN configuration for local search

   ```diff
   local_search:
     enable: false
   +  preload: false
   +  CDN:
   ```

4. Updated social-share CDN version

5. Added support for hiding sidebar on archive pages

   ```diff
   aside:
   +  archives: true
   ```

6. Added the ability to configure author hyperlink for post copyright module

   ```diff
   post_copyright:
   +  author_href:
   ```

### Fix

1. Fixed bug where mathjax was not displaying correctly
2. Fixed rendering issue with related recommendations when title contains HTML keywords

### Improvement

1. Unified the display of search titles as 'Search'
2. Changed the logo for algolia search to instantsearch
3. Prevented automatic search on first entry to algolia search
4. Added ellipsis recognition to search content
5. Adjusted spacing issues caused by share buttons
6. HTML/CSS optimization

{% endhideToggle %}



{% hideToggle 4.1.0 (2022/02/13) %}

## 4.1.0 (2022/02/13)

### Breaking Change

1. Upgrade fontawesome to v6 #689

   ```diff
   CDN:
   -  fontawesome:
   +  fontawesomeV6:
   ```

### Feature

1. Add rounded corners to snackbar
2. Add flink tag plugin

### Fix

1. Fix bug where clicking outside of toc causes console error
2. Fix bug where Facebook Comments cannot be used #787
3. Fix translation missing for chat_btn #791
4. Fix bug where local search doesn't work when content is set to false #764
5. Fix bug where Mermaid chart elements have excessive height #773
6. Fix bug where share buttons on article page don't take up full width on navigation page #765

### Improvement

1. Improve semantic toggle tag plugin
2. Change toc background color in dark mode

{% endhideToggle %}

{% hideToggle 4.0.1 (2022/01/16) %}

## 4.0.1 (2022/01/16)

Improvement: Optimized animation of the bottom right button under pjax.

Fix: Fixed a bug where the page setting aside as true would cause a JavaScript error.

Fix: Fixed a bug where the position of the bottom right button was being blocked on some pages.

Fix: Fixed a bug where compressing HTML code would cause an error on the friend link page.

Fix: Fixed a bug where sliding the side menu on Safari would collapse it.

{% endhideToggle %}



{% hideToggle 4.0.0 (2022/01/15) %}

## 4.0.0 (2022/01/15)

### Breaking Change

1. Simplified configuration for comments.
   ```diff
   disqusjs:
   -  apikey:
   -  api:
   -  nocomment: # display when a blog post or an article has no comment attached
   -  admin:
   -  adminLabel:
   +  option:
   
   gitalk:
   -  language: en # en, zh-CN, zh-TW, es-ES, fr, ru
   -  perPage: 10 # Pagination size, with maximum 100.
   -  distractionFreeMode: false # Facebook-like distraction free mode.
   -  pagerDirection: last # Comment sorting direction, available values are last and first.
   -  createIssueManually: false # Gitalk will create a corresponding github issue for your every single page automatically
   
   valine:
   -  pageSize: 10 # comment list page size
   -  lang: en # i18n: zh-CN/zh-TW/en/ja
   -  placeholder: Please leave your footprints # valine comment input placeholder (like: Please leave your footprints)
   -  guest_info: nick,mail,link # valine comment header info (nick/mail/link)
   -  recordIP: false # Record reviewer IP
   -  bg: # valine background
   -  emojiCDN: # emoji CDN
   -  enableQQ: false # enable the Nickname box to automatically get QQ Nickname and QQ Avatar
   -  requiredFields: nick,mail # required fields (nick/mail)
   
   waline:
   -  avatar: monsterid # gravatar style https://zh-tw.gravatar.com/site/implement/images/#default-image
   -  avatarCDN: # Gravatar CDN baseURL
   ```

2. Page supports table of contents (TOC) #636

   ```diff
   toc:
   -  enable: true
   +  post: true
   +  page: false
   ```

3. Delete the "hide_sidebar_menu_child" configuration and directly configure it in the menu #640

   ```diff
   -# Hide the child menu items in mobile sidebar
   -hide_sidebar_menu_child: false
   ```

4. Completely remove jQuery

   ```diff
   CDN:
   -  jquery: https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js
   ```

5. Remove Tencent Analytics

   ```diff
   -# Tencent Analytics ID
   -# https://mta.qq.com
   -tencent_analytics:
   ```

6. photofigcaption and fancybox prioritize displaying the "title" attribute of the image, followed by the "alt" attribute #683

7. Support new comment name format, the theme will handle the case sensitivity, and the old format will still be compatible

8. Remove Botian API, note the change in order

   ```
     # source: 1  Call a sentence from Hitokoto (Simplified Chinese) https://hitokoto.cn/
     # source: 2  Call a sentence (Simplified Chinese) http://yijuzhan.com/
     # source: 3  Call today's poem (Simplified Chinese) https://www.jinrishici.com/
   ```

9. Remove the font-size of HTML and use the default size of the browser

### Feature

1. Update fancybox to version 4

   ```diff
   CDN:
   -  fancybox_css: https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@latest/dist/jquery.fancybox.min.css
   -  fancybox: https://cdn.jsdelivr.net/npm/@fancyapps/fancybox@latest/dist/jquery.fancybox.min.js
   +  fancybox_css_v4:
   +  fancybox_v4:
   ```

2. Customize the order of the bottom-right buttons #680

   ```diff
   +rightside_item_order:
   +  enable: false
   +  hide: # readmode,translate,darkmode,hideAside
   +  show: # toc,chat,comment
   ```

3. Display the website data, show the quantity as 0 when the tags and categories are 0, instead of hiding it

4. Set a height limit for code blocks, the expand button will not disappear after expanding, and can be clicked to collapse again #637

5. Selectively disable lightbox for images #636

6. Add lightbox to Twikoo comments with images

7. Upgrade Facebook comment JS to version 11

8. Set TOC simple_style to display for individual articles #631

9. Add a black overlay to the top image of pages #671

10. Update UI for homepage pagination

11. Change the theme CSS from using "rem" to "em" or "px"

13. Remove the font adjustment button in the bottom-right corner

    ```diff
    -# Change font size
    -change_font_size: false
    ```

14. Add a new tag plugin, timeline #644

15. Remove CDN from the configuration file, default CDN will no longer be displayed in config

16. Replace Justified Gallery with flickr-justified-gallery

    ```diff
    CDN:
    -  justifiedGallery_js: https://cdn.jsdelivr.net/npm/justifiedGallery/dist/js/jquery.justifiedGallery.min.js
    -  justifiedGallery_css: https://cdn.jsdelivr.net/npm/justifiedGallery/dist/css/justifiedGallery.min.css
    +  flickr_justified_gallery_js:
    +  flickr_justified_gallery_css:
    ```

17. After switching to dark mode, mermaid will also switch to the dark theme

    ```diff
    mermaid:
      enable: true
      # built-in themes: default/forest/dark/neutral
    -  theme: default
    +  theme: 
    +    light: default
    +    dark: dark
    ```

18. Mermaid displays correctly after compressing HTML code

19. Mermaid can be used in hidden attribute tag plugins

20. Local search can handle JSON #684

21. Fine-tune the UI of the bottom-right buttons

22. Change the display effect of the list after beautifying the article #693 #686

23. Upgrade Algolia to v4

    ```diff
    CDN:
    -  algolia_search: https://cdn.jsdelivr.net/npm/instantsearch.js@2.10.5/dist/instantsearch.min.js
    -  algolia_search_css: https://cdn.jsdelivr.net/npm/instantsearch.js@2.10.5/dist/instantsearch.min.css
    +  algolia_search_v4:
    +  instantsearch_v4:
    ```

24. Add loading display for local search database loading and searching

25. Anchor can be opened on any page, not just post pages

26. Clicking on the article title will jump to the beginning of the article for reading #653

27. TOC can be set to expand all #709

    ```diff
    toc:
    +  expand: false
    ```

28. Add a new comment system, Giscus

    ```diff
    +# Giscus
    +# https://giscus.app/
    +giscus:
    +  repo:
    +  repo_id:
    +  category_id:
    +  theme:
    +    light: light
    +    dark: dark
    +  option:
    
    CDN:
    +  giscus:
    ```

29. Fetch URL for the friend link list

30. Adjust spacing for TOC, add vertical line to identify direct child elements as closed #723

31. Configurable scrollbar color

    ```diff
    theme_color:
    +  scrollbar_color: "#49b1f5"
    ```

32. Beautify Firefox browser scrollbar

33. Add blueimp_md5 configuration to CDN

    ```diff
    CDN:
    +  blueimp_md5:
    ```

### Fix

1. Fix the bug where the thumbnail image of fancybox is displayed with lazyload enabled
2. Fix the bug where the UI is offset due to font size being too large or too small
3. Fix the bug where self-built page images do not have blur effect
4. Fix the bug where the UI of the navigation bar may become disordered when the window size changes
5. Fix the bug where Twikoo comments under pjax may retrieve comments from the previous post #678
6. Fix the bug where rightside blocks content and prevents it from being clicked
7. Fix the bug where mermaid fails to load on certain pages (when there is an element with id "mermaid")
8. Fix the bug where the search box does not automatically focus
9. Fix the bug where an error occurs when comments are not configured for use
10. Fix the bug where TOC is displayed off-screen on small devices
11. Fix the bug where the reward popup is triggered around the reward button
12. Fix the bug where the recent comments time in Waline only shows "just now" (when running with Docker) #730
14. Fix the bug where utterances displays incorrectly when issue_term is set to url and og:title
14. Fix the bug where the latest comments module still shows when the comment configuration is set to Livere and Facebook Comments

### Improvement

1. Optimize the subtitle code, when source is set to false and sub is not configured, it will read the subtitle from the Hexo configuration file without using escape characters
2. Prevent iOS from zooming in when clicking on the search box
3. Remove the limitation of only clicking the button to expand the sidebar menu #640
4. Modify the title size on article pages when there is no top image
5. Optimize the UI of the 404 page
6. Set transparent image as the default placeholder for lazyload
7. Optimize CSS
8. Optimize lazyload blur effect appearance
9. Move the exit button for reading mode to the bottom-right corner on mobile devices
10. Fine-tune UI
11. Prevent some browsers from zooming in when clicking the bottom-left button
12. Add title display when hovering over the content of the latest comments
13. Remove hover effect on buttons


{% endhideToggle %}

{% hideToggle 3.8.4 (2021/09/18) %}

## 3.8.4 (2021/09/18)
### Fix

1. Fixed a bug that caused the inlineImg tag to display incorrectly after opening photofigcaption. (Issue #667)
2. Fixed a bug where local search would not work if the search plugin was configured to not search article content. (Issue #666)
3. Fixed a bug that could cause incorrect links to related articles. (Issue #549)

### Improvement

1. Adjusted the scrollbar color for code blocks. (Issue #651)
2. When an image does not have a figcaption, the figcaption code will not be added.

{% endhideToggle %}

{% hideToggle 3.8.3 (2021/07/30) %}

## 3.8.3 (2021/07/30)

### Fix
1. Fixed a bug where the avatarCDN setting in the Waline comment system was not working.

{% endhideToggle %}

{% hideToggle 3.8.2 (2021/07/20) %}

## 3.8.2 (2021/07/20)
### Fix
1. Fixed a bug (#616) where the footer was not displaying at the bottom in some browsers.

### Improvement
1. Updated configuration file comments (#613).

{% endhideToggle %}

{% hideToggle 3.8.1 (2021/07/10) %}

## 3.8.1 (2021/07/10)
### Fix
1. Fixed the bug where inline mathjax had a scrollbar.
2. Fixed the bug where the avatar in the friendly links had the Medium Zoom lightbox (#607).
3. Fixed the bug where the avatar in the friendly links had the FancyBox lightbox (#607).

### Dependencies
1. update hexo-renderer-pug

{% endhideToggle %}

{% hideToggle 3.8.0 (2021/07/04) %}

## 3.8.0 (2021/07/04)

### Breaking Change

1. The title of archives is now obtained from the menu configuration.

2. Removed the option to choose the comment service for the latest comments. It now defaults to the first comment service in the configuration.

   ```diff
   newest_comments:
     enable: false
     sort_order: # Don't modify the setting unless you know how it works
     limit: 6
     storage: 10 # unit: mins, save data to localStorage
     avatar: true
   -  # You can only choose one, or neither
   -  valine: false
   -  github_issues:
   -    enable: false
   -    repo:
   -  disqus:
   -    enable: false
   -    forum:
   -    api_key:
   -  twikoo: false
   -  waline: false
   ```

3. Changed the way widgets are written and added the ability to add non-sticky area widgets.

### Feature

1. Modified the icon for the latest comments.

2. Adapted waline colors to match the theme color.

3. Added waline avatarCDN configuration (also updates the latest comments).

   ```diff
   waline:
      ...
   +	avatarCDN： # Gravatar CDN baseURL
   ```

4. Upgraded facebook comment js to v10.

### Fix

1. Fixed the bug where the avatar for the friend links and aside were not displayed properly under lazyload blur.
2. Fixed the bug where some code blocks were still expanded after setting highlight_shrink to true (#602).
3. Fixed the bug where mathjax caused the list to lose its style (#586).
4. Fixed the bug where mathjax on the article page caused overlapping display due to small font size (#587).
5. Fixed the bug where the footer did not align to the bottom when the content was too short.

### Improvement

1. UI optimization.
2. Adjusted waline font size and avatar effects.
3. Optimized pjax.
4. Reduced lag by setting background-attachment to scroll for the homepage on Apple devices.
5. The 404 page no longer displays the right side.

{% endhideToggle %}



{% hideToggle 3.7.8 (2021/06/05) %}

## 3.7.8 (2021/06/05)

### Breaking Change

1. Removed the emojiCDN and emojiMaps configurations for waline.

### Fix

1. Fixed bugs that occurred when upgrading to waline 1.x.
   

{% endhideToggle %}

{% hideToggle 3.7.7 (2021/05/11) %}

## 3.7.7 (2021/05/11)

### Improvement
1. Adapted to the new version of waline's dark mode.

{% endhideToggle %}

{% hideToggle 3.7.6 (2021/05/09) %}

## 3.7.6 (2021/05/09)

### Fix
1. Fixed a bug where pjax would throw an error when the title/blog name contains an apostrophe.

### Improvement
1. Adjusted the CSS.

{% endhideToggle %}

{% hideToggle 3.7.5 (2021/05/05) %}

## 3.7.5 (2021/05/05)

### Breaking Change

1. Optimization of site_verification, manual configuration required

   ```diff
   -# Google Webmaster tools verification setting
   -# See: https://www.google.com/webmasters/
   -google_site_verification:
   
   -# Bing Webmaster tools verification setting
   -# See: https://www.bing.com/webmaster/
   -bing_site_verification:
   
   -# Baidu Webmaster tools verification setting
   -# See: https://ziyuan.baidu.com/site/
   -baidu_site_verification:
   
   -# 360 Webmaster tools verification setting
   -# see http://zhanzhang.so.com/
   -qihu_site_verification:
   
   -# Yandex Webmaster tools verification setting
   -# see https://webmaster.yandex.com/
   -yandex_site_verification:
   
   +site_verification:
   ```

2. Optimization of lazyload (added Gaussian blur transition effect, expanded lazyload configuration range, applied placeholder image to the entire site)

   ```diff
   lazyload:
     enable: false
   -  post: /img/loading.gif
   +  field: site # site/post
   +  placeholder: /img/loading.gif
   +  blur: false
   ```

### Feature

1. Added tags plugin - label

### Fix

1. Fixed bug where after opening an anchor, the article page would redirect to the homepage with the hash of the last title of the article added to the homepage URL
2. Fixed bug where after opening an anchor, navigating to the previous/next page in the browser would result in a 404 error (the URL hash of the article page became undefined under pjax)
3. Fixed bug where lazyload would report undefined error close #532

### Improvement

1. Optimization of 404 page under pjax
2. Optimization of button tags plugin

{% endhideToggle %}

{% hideToggle 3.7.1 (2021/03/30) %}

## 3.7.1 (2021/03/30)
### Fix
1. Fixed the bug where the URL format for the latest comments on GitHub issues was not being retrieved correctly.
2. Fixed the bug where Disqus and DisqusJS were unable to load when the title contained an apostrophe.

{% endhideToggle %}

{% hideToggle 3.7.0 (2021/03/18) %}

## 3.7.0 (2021/03/18)

### Breaking Change

1. Changed the syntax for subdirectories to match that of parent directories.

2. Removed Artitalk (If needed, please install hexo-butterfly-artitalk instead)

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

3. Updated the JavaScript and CSS CDN for katex_copytex.

   ```diff
   -katex_copytex: https://cdn.jsdelivr.net/npm/katex-copytex@latest/dist/katex-copytex.min.js
   -katex_copytex_css: https://cdn.jsdelivr.net/npm/katex-copytex@latest/dist/katex-copytex.min.css
   
   +katex_copytex: https://cdn.jsdelivr.net/npm/katex@latest/dist/contrib/copy-tex.min.js
   +katex_copytex_css: https://cdn.jsdelivr.net/npm/katex@latest/dist/contrib/copy-tex.css
   ```


### Feature

1. Added the ability to set a code height limit and display an expand button.

   ```diff
   +highlight_height_limit: false # unit: px
   ```

2. prismjs can now be configured with code_word_wrap.

3. Added the kbd style #507.

4. Added article view count configuration provided by waline, valine, and twikoo #502.

   ```diff
   valine:
   +  visitor: false
   waline:
   +  visitor: false
   twikoo:
   +  visitor: false
   ```

5. Added HexoPlusPlus_Talk (requires installation of hexo-butterfly-hpptalk).

6. Added the inlineImg plugin for tags.

7. Added option configuration for gitalk.

   ```diff
   gitalk:
     createIssueManually: false # Gitalk will create a corresponding github issue for your every single page automatically
   +  option:
   ```


### Fix

1. Fixed the bug where prismjs was auto-wrapping on iOS Safari.
2. Fixed the bug where the default code size was not changing with font size changes.
3. Fixed the bug where unrecognized languages in prismjs were displaying "null" instead of code.
4. Fixed the issue where running with no configuration would report "null" at runtime.

### Improvement

1. Home page tabs will now scroll to the article section #519.
2. Optimized CSS and simplified custom code color CSS configuration.
3. Made the search hover effect consistent with other directories.
4. Adapted Baidu statistics for pjax #516.
5. When both the article page cover and default_img are not configured, it will read the default_top_img parameter.
6. Changed one API to use HTTPS.
7. Optimized pug code.

{% endhideToggle %}

{% hideToggle 3.6.2 (2021/02/03) %}

## 3.6.2 (2021/02/03)

### Fix

1. Fixed a bug where mathjax and katex were not loading JavaScript.

{% endhideToggle %}

{% hideToggle 3.6.1 (2021/02/01) %}

## 3.6.1 (2021/02/01)
### Fixes
1. Fixed an issue where a scroll bar appeared on the article page with a table of contents on non-iOS devices.
2. Fixed an issue on non-iOS devices where the relative positioning of elements inside the layout tag, such as `position: fixed`, would be altered.

{% endhideToggle %}

{% hideToggle 3.6.0 (2021/01/30) %}

## 3.6.0 (2021/01/30)

### Feature

1. Added comment count display on the homepage.

   ```diff
   comments:
     ...
     count: false # Display comment count in post's top_img
   +  card_post_count: false # Display comment count in Home Page
   ```

2. Updates to the latest comments.

   1. `<a>` tags will display `[link]`.
   2. `<img>` tags will display `[image]`.
   3. `<pre><code>` tags will display `[code]`.
   4. The URL obtained from github-issues will now link to the corresponding article instead of the issues page.
   5. Added datetime attribute to the time element.
   6. When obtaining avatars from Waline, it will first check if the avatar attribute for QQ is available in the Waline database.
   7. Changed the display time for some comments to the update time.

3. Changed the "View More" button in the aside section to an icon displayed in the top right corner.

4. Added configuration for the cache time of the latest comments.

   ```diff
   newest_comments:
     enable: false
     sort_order: # Don't modify the setting unless you know how it works
     limit: 6
   +  storage: 10 # unit: mins, save data to localStorage
   ```

5. Added post_pagination configuration (can be disabled/configured for pagination logic).

   ```diff
   +# post_pagination (pagination)
   +# value: 1 || 2 || false
   +# 1: The 'next post' will link to old post
   +# 2: The 'next post' will link to new post
   +# false: disable pagination
   +post_pagination: 1
   ```

6. Changed the copyright in the top right corner of the article to a copyright icon.

7. Added configuration to disable all top_img banners.

   ```diff
   +# Disable all banner image
   +disable_top_img: false
   ```

8. Added post_edit configuration.

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

1. Fixed a bug where the icon text in the sliding submenu on the article page was not displayed (#481).
2. Fixed a bug where page elements would appear blurry and then clear when entering the page on Chrome (#479).
3. Fixed a bug where the background color of code blocks in read mode was not displayed correctly in dark mode.
4. Fixed a bug where the donation button would have abnormal hover effects due to excessive text (#473).
5. Fixed a bug where inline elements (emoticons/images) in comments would become block elements (line breaks).
6. Fixed a bug where the highlight in the toc would be on the previous element when clicking on the toc.
7. Fixed a bug where the donation image link would be incorrect in subdirectories.
8. Fixed a bug where clicking to close the random feature would not work.
9. Fixed a bug where the menu would not be properly styled when the device was rotated horizontally.
10. Fixed a bug where the 404 page would not be redirected under pjax.
11. Fixed a bug where the Twikoo comment count would throw an error due to regional issues.
12. Fixed a bug where background images with parentheses in the URL would not be displayed.

### Improvement

1. Limited the meta description to 150 characters (#480).
2. Optimized and restructured the Pug code.
3. Optimized the Pug conditionals.
4. Added title display to the friendly links interface (when top_img is set to false).
5. Upgraded the Facebook comment SDK version.
6. Improved the display of the toc so that the navigation bar does not overlap the toc when scrolling up (#472).
7. Changed Pangu to render on the entire site.
8. Optimized the latest comments JavaScript.
9. Adjusted the margin of the Readmode title.
10. Fine-tuned the box-shadow for card hover effects.
11. Added hover effect to the 404 page card.
12. Removed some unnecessary code.

### Remove

1. Removed Baidu push (Baidu has deprecated it) and Baidu transformation.

   ```diff
   -# Disable Baidu transformation on mobile devices
   -disable_baidu_transformation: true
   
   -# Baidu Push
   -baidu_push: false
   ```

2. Removed fragment_cache configuration (enabled by default).

   ```diff
   -# Caches the contents in a fragment, speed up the generation
   -fragment_cache: true
   ```


{% endhideToggle  %}

{% hideToggle 3.5.1 (2020/12/31) %}

## 3.5.1 (2020/12/31)

### Feature

1. Added region configuration to Twikoo.

### Fix

1. Fixed a bug in Twikoo where the latest comments were not being displayed in the Guangzhou region.
2. Fixed a bug in Waline where the background setting was not being applied.
3. Fixed a bug in Twikoo where an error occurred when entering the post page in the Guangzhou region.

{% endhideToggle %}

{% hideToggle 3.5.0 (2020/12/30) %}

## 3.5.0 (2020/12/30)
### Feature

1. Added a close button for the aside personal profile widget.

   ```diff
   aside:
    ...
     card_author:
       enable: true
       description:
       button:
   +      enable: true
         icon: fab fa-github
         text: Theme GitHub
         link: https://github.com/jerryc127/hexo-theme-butterfly
   ```

2. Added Cloudflare Analytics.

   ```diff
   +# Cloudflare Analytics
   +# https://www.cloudflare.com/zh-tw/web-analytics/
   +cloudflare_analytics:
   ```

3. Added Microsoft Clarity.

   ```diff
   +# Microsoft Clarity
   +# https://clarity.microsoft.com/
   +microsoft_clarity:
   ```

4. Improved readmode.

5. Added custom widgets for the aside section.

6. Added sorting for aside widgets (only applicable to page and sticky).

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

7. Added option configuration for twikoo.

   ```diff
   # Twikoo
   # https://github.com/imaegoo/twikoo
   -twikoo:
   +twikoo:
   +  envId:
   +  option:
   ```

8. Added Waline comments.

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

9. Added display of Waline comment count.

10. Added latest comments module for Waline.

    ```DIFF
    newest_comments:
      enable: true
      ...
    +  waline: false
    ```

### Improvement

1. Added anchor tags to the latest comment URLs.
2. Optimized the HTML structure.
3. Replaced LeanCloud with Valine for the "newest_comments" feature, removed its configuration, and updated it to read Valine's configuration.

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

1. Fixed a bug (#462) where there was a conflict between opening gitalk comments and the table of contents (toc).
2. Fixed an issue where jQuery was still being loaded in some interfaces.
3. Fixed a bug that caused medium zoom to throw errors.

{% endhideToggle %}



{% hideToggle 3.4.1 (2020/12/15) %}

## 3.4.1 (2020/12/15)

### Fix

1. The update fixes a bug where buttons do not respond when the tabs plugin is set to -1.

{% endhideToggle %}



 {% hideToggle 3.4.0 (2020/12/13) %}

## 3.4.0 (2020/12/13)

### Breaking Change

1. Removed jQuery

### Feature

1. Configurable option to add CSS prefixes

   ```diff
   +# Add the vendor prefixes to ensure compatibility
   +css_prefix: true
   ```

2. Added random configuration for click text effect

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

3. Added font adjustment button in the bottom right corner

   ```diff
   +# Change font size
   +change_font_size: true
   ```

4. Added latest comments from Twikoo

   ```diff
   newest_comments:
     enable: true
      ....
   +  twikoo: true
   ```

5. Added display of Twikoo comment count

6. Added concise mode for table of contents

   ```diff
   toc:
     enable: true
     number: true
   +  style_simple: false
   ```

### Fix

1. Fixed a bug where links would not work when using the justifiedGallery CDN (relative links) in subdirectories.
2. Fixed an issue where the bottom-right button would not display correctly when there was no scrollbar.
3. Fixed a bug where the pangu configuration for posts would still take effect across the entire website.
4. Fixed a positioning issue with the table of contents (toc) when resizing.

### Improvement

1. Added lazyload to the latest comment avatars.
2. Optimized the display of the latest comments, showing "No comments" when there are none.
3. Changed the method of obtaining toc clicks to use document.getElementById to prevent issues with certain characters causing navigation problems.
4. If supported by the browser, scroll will now use the native scrolling method.
5. Improved search functionality.
6. Optimized HTML formatting.
7. When there is no scrollbar, the rightside will now be displayed directly.
8. Slightly adjusted the margin of the toc on mobile devices.
9. Added asynchronous loading for fontawesome and Google fonts.
10. Reduced the brightness of ads in night mode.
11. When setting aside mobile to false, toc will still be displayed.

### Remove

1. Removed ICP configuration. If needed, please use the custom_text configuration.
2. Removed unnecessary language files.

{% endhideToggle %}



{% hideToggle 3.3.0 (2020/10/28) %}

## 3.3.0 (2020/10/28)

### Breaking Change

1. Only supports hexo 5.0.0 and above versions.
2. No longer supports the butterfly.yml syntax.


### Feature

1. Added option settings for Valine:

   ```diff
   valine:
   +  option:
   ```

2. Changed toc to display as aside and removed sidebar:

   1. Modified toc UI for mobile.

   2. Removed toc auto_open configuration:

      ```diff
      toc:
        enable: true
        number: true
      -  auto_open: true # auto open the sidebar
      ```

   3. Optimized the effect and timing of the toc on mobile.

   4. Added the ability to store aside state in localStorage.

3. Centered article titles.

4. Configurable hiding/showing of aside and added button to expand or collapse aside:

   ```diff
   aside:
     enable: true
   +  hide: false
   +  button: true
     mobile: true # display on mobile
   ```

5. Added Twikoo comments:

   ```diff
   +twikoo:
   ```
### Improvements

1. Improved display of note tags in read mode.
2. Streamlined CSS and JS.
3. Optimized pjax.
4. Changed article page title to h1 for SEO purposes.
5. Changed canonical to use the function provided by Hexo.
6. Optimized ICP SEO [#393](https://github.com/jerryc127/hexo-theme-butterfly/pull/393).
7. Increased the width of the sidebar.
8. Adjusted HTML structure, changed mobile-sidebar to sidebar/search.
9. The scroll-to-comment button now only appears on the comment page.

### Fixes

1. Fixed a bug where mermaid wouldn't display properly after website compression.
2. Fixed a bug where the content of an article wouldn't display in read mode when top_img was set to false.
3. Fixed a bug where the background image of valine would move from left to right when it appeared again.
4. Fixed a bug where disqusjs wouldn't fallback when the API wasn't set.

### Removals

1. Removed unnecessary search configurations.
2. Removed Douban configuration. If needed, please use hexo-butterfly-douban.
3. Removed redundant CSS and Pug.

{% endhideToggle %}



{% hideToggle 3.2.0 (2020/09/28) %}

## 3.2.0 (2020/09/28)

### Breaking Change

1. Renamed `canvas_ribbon_piao` to `canvas_fluttering_ribbon`:

   ```diff
   -canvas_ribbon_piao:
   +canvas_fluttering_ribbon:
     enable: false
     mobile: false
   ```

2. Removed special effect JS and switched to CDN import.

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

1. Added the ability to configure whether or not to display the content/description of homepage articles.

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


2. Added the ability to configure whether to display the date or relative time for homepage and post pages.

   ```diff
   post_meta:
     page: # Home Page
   +    date_format: relative # date/relative to display the date or relative time
     post:
   +    date_format: relative # date/relative to display the date or relative time
   
   ```


3. Added the ability to configure the top image (leave it empty for default color, specify a color in HEX/RGB/color word/gradient, or provide an image link, or set it to false to hide the top image).

4. Added the ability to configure the footer background (leave it empty for default color, specify a color in HEX/RGB/color word/gradient, provide an image link, or set it to true to use the same top image).

5. Added the ability to configure the website background (specify a color in HEX/RGB/color word/gradient, or provide an image link).

6. Added the ability to configure top images for individual tags using the tag_per_img configuration.

   ```diff
   +tag_per_img:
   ```

7. Added the ability to configure top images for individual categories using the category_per_img configuration.

   ```diff
   +category_per_img:
   ```

8. Optimized the note tag (customizable icon and style override).

9. In night mode, when the background color/top image/footer background is set to a color, it no longer forces black but instead applies a dimming overlay.

10. Added mobile settings for certain effects (activate_power_mode/fireworks/click_heart/ClickShowText).

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

11. Added the Artitalk comment plugin.

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

12. Added the ability to disable webpage entrance animation.

    ```diff
    +# Enter transitions (enable webpage entrance animation)
    +enter_transitions: true
    ```

### Improvements

1. The preloader will now load on every page under pjax.
2. Modified the logic to prevent errors caused by users setting up two lightboxes (only one is allowed).
3. Improved time display (e.g. just now, a few minutes ago, a few hours ago, a few days ago, a few months ago).
4. Removed unnecessary language files and CSS.
5. Open_Graph has been replaced with the built-in hexo generator.
6. When hidden sections are not configured, the settings button in the bottom left corner will disappear.
7. Added slide effect to expand/collapse categories in the aside section.
8. Dark mode font color has been darkened.
9. Optimized navigation entry to fix bugs where some users couldn't see the navigation in local testing.
10. Updated the latest comments to use REST API calls instead of JS SDK calls for Leancloud. The application no longer needs to be the same as Valine.
11. Added error output for the latest comments.
12. When tags are set to display in color, the font size will now vary based on the number of articles with that tag.
13. Adjusted the font size of the tags and categories pages when the width is less than 768.
14. Adjusted the categorization of theme files.
15. Valine background image will now be hidden when clicking on the comment box.

### Fixes

1. Fixed an issue where pjax would not work when the description was not set in hexo's _config file.
2. Fixed a bug where the text effect on mouse click would cause a scrollbar when the text was too long.
3. Fixed a bug where local search article links were not redirecting properly.

### Remove

1. Removed anime js and integrated it into the js file of fireworks.

   ```diff
   CDN:
   -  anime: https://cdn.jsdelivr.net/npm/animejs@latest/anime.min.js
   ```

2. Deleted unnecessary language files.

### chore

1. update hexo-renderer-stylus to 2.0.1

{% endhideToggle %}

{% hideToggle 3.1.1 (2020/09/06) %}

## 3.1.1 (2020/09/06)

### Fix

1. Fixed a bug where 'hour' was not found after closing the last push date.
2. Fixed a bug where JavaScript errors occurred in older versions of Safari when PrismJS was enabled.

{% endhideToggle %}

{% hideToggle 3.1.0 (2020/08/31) %}

## 3.1.0 (2020/08/31)

### Breaking Change

1. Only supports hexo versions 4.2.0 and above.
2. butterfly.yml now uses deepMerge to merge with the _config file instead of replacing it.

### Feature

1. Adapted prismjs for hexo 5.0.0, including code themes and various features.
2. Adapted prismjs caption for hexo 5.1.0.
3. Mobile sidebar submenus can now be hidden.

   ```diff
   +# Hide the child menu items in mobile sidebar
   +hide_sidebar_menu_child: false
   ```

4. Added smooth scrolling effect when clicking on toc when the width is less than 1024.
5. Configurable font size and changed code-font to code-font-family in the configuration.

   ```diff
   font:
   +  global-font-size:
   +  code-font-size:
      font-family:
   -   code-font:
   +   code-font-family:
   ```

6. Changed some CSS from 'px' to 'em' to adapt to changes in font size values.
7. Added exclude configuration for pjax.

   ```diff
   -pjax: false
   +pjax:
   +  enable: false
   +  exclude:
   ```

8. Added cnzz_analytics.

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

9. Changed Tencent Analytics to Tencent Mobile Analytics and adapted it for pjax.
10. Added position sticky to aside.
11. Changed the way addtoany items are written.

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

12. Added display of last update time and post count configuration to aside.

    ```diff
    aside:
    -  card_webinfo: true
    +  card_webinfo:
    +    enable: true
    +    post_count: true
    +    last_push_date: true
    ```

13. Added newest comments widget to aside.

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

1. Changed the layout of "archives" and "card-post" to use flexbox.
2. Added a scroll offset of 60px when scrolling up to avoid the navigation bar blocking the content.
3. Switched from using cookies to store data to using *localStorage*.
4. Made it possible to configure individual theme colors in the settings, instead of having to enable all of them.
5. Adjusted the display of "webinfo" when the width is small.
6. Adjusted the padding of content in the "aside" section.
7. When using Pjax, the page will now scroll to the last viewed position when refreshed.
8. Fixed a bug where mathjax content was overflowing the screen.
9. Made some CSS adjustments and HTML optimizations.
10. Removed the theme-color configuration in the PWA, now using the default generated meta theme-color.
11. Added "view more" links to "card-categories" and "card-archives".
12. Changed the code names to be all uppercase.

### Fix

1. Fixed a bug where the configuration of "canvas_nest" was not being applied.
2. Fixed a bug where the "rightsize-bottom" configuration was not working.
3. Fixed a bug where code blocks had a background in dark mode when rendering was disabled.
4. Fixed a bug where code blocks in the "tags-toggle" plugin were displayed as a single line.
5. Fixed a bug where code blocks in the "tags-toggle" plugin were compressed to a single line when rendering was disabled.
6. Fixed a bug in the "modern" style where the "note" plugin did not have a background color and the text was not clear in dark mode when tags were not used.
7. Fixed a bug where the corners of article covers on the homepage had small white edges in dark mode.
8. Fixed a bug in the "note" plugin where code blocks were displaying a background color.
9. Fixed a bug where the scroll percentage of the table of contents was inaccurate.
10. Fixed a bug where an error was thrown when comments were not configured.
11. Fixed a bug where related article covers were not displayed in subdirectories of the website.

### Remove

1. Removed the font zoom in/out buttons.
2. Removed the default code theme.

{% endhideToggle %}

{% hideToggle 3.0.1 (2020/08/11) %}

## 3.0.1 (2020/08/11)

### Fix

1. Fixed a bug where the navigation sidebar did not have the entrance effect.
2. Fixed a bug in versions below Hexo 5.0.0 where the table of contents (TOC) did not scroll when encountering Chinese characters.
3. Fixed bugs related to using Open Graph meta and Livere simultaneously under pjax. The source page displayed in the Livere comment backend was different from the actual page.

{% endhideToggle %}


{% hideToggle 3.0.0 (2020/08/05) %}

## 3.0.0 (2020/08/05)

### Fix

1. Fixed a bug where lazyload was not working on the article page.
2. Fixed another bug where lazyload was not working on the article page.

{% endhideToggle %}

{% hideToggle 3.0.0-RC2 (2020/08/01) %}

## 3.0.0-RC2 (2020/08/01)

### Breaking Change

1. Added support for dual comment system configuration/comment configuration organization/comment lazyload.

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
   
2. Organized the footer configuration and modified some language. #279

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

3. Removed the 'Add Bookmark' feature and added a configurable button.

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

4. Added a character limit configuration for the copied copyright, only adding copyright information if it exceeds a certain number of characters.

   ```diff
   copy:
     enable: true
   -  copyright: false
   +  copyright:
   +    enable: false
   +    limit_count: 50
   ```

5. Added the ability to sort aside recent posts by publish date or update date.

   ```diff
   aside:
     card_recent_post:
       enable: true
       limit: 5 # if set 0 will show all
   +    sort: date # date or updated
   ```

6. Updated the CDN for typed.js/meting.

   ```diff
   -typed: https://cdn.jsdelivr.net/npm/typed.js
   -meting_js: https://cdn.jsdelivr.net/npm/meting@1.2.0/dist/Meting.min.js
   
   +typed: https://cdn.jsdelivr.net/npm/typed.js/lib/typed.min.js
   +meting_js: https://cdn.jsdelivr.net/gh/metowolf/MetingJS@1.2/dist/Meting.min.js
   ```

### Feature

1. Added an outdated notice for posts.

   ```diff
   +# Displays outdated notice for a post
   +noticeOutdate:
   +  enable: false
   +  style: flat # style: simple/flat
   +  limit_day: 500 # When will it be shown
   +  position: top # position: top/bottom
   +  message_prev: It has been
   +  message_next: days since the last update, the content of the article may be outdated.
   ```

2. Added a new code block color scheme for Mac light.

3. Added the ability to configure copyright for individual posts.

4. Adjusted the display of category names in card-category to fit in one line.

5. Improved the traditional and simplified Chinese conversion, including the conversion of placeholders.

6. Introduced CSS variables to reduce CSS file size.

7. Added Pjax [Beta] support.

   ```diff
   +# Pjax [Beta]
   +# It may contain bugs and unstable, give feedback when you find the bugs.
   +# https://github.com/MoOx/pjax
   +pjax: false
   ```

8. Added support for the third-party chat service Crisp.

   ```diff
   +# crisp
   +# https://crisp.chat/en/
   +crisp:
   +  enable: false
   +  website_id:
   ```

9. Added auto ad configuration for Google AdSense to reduce unnecessary JavaScript loading.

   ```diff
   google_adsense:
     enable: false
   +  auto_ads: true
     js: https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
     client:
     enable_page_level_ads: true
   ```

10. When post_asset_folder is set to true, the top_img and cover of a post can directly reference images in the same-named folder by just specifying the image name and extension. #270

11. Added Yandex Webmaster tools verification configuration.

    ```diff
    +# Yandex Webmaster tools verification setting
    +# see https://webmaster.yandex.com/
    +yandex_site_verification:
    ```

12. Added the ability to configure whether post-meta displays text.

    ```diff
    post_meta:
      page: # Home Page
        date_type: created # created or updated or both
        categories: true # true or false
        tags: false # true or false
    +    label: true # true or false
      post:
        date_type: both # created or updated or both
        categories: true # true or false
        tags: true # true or false
    +    label: true # true or false
    ```

13. Adjusted the display of post-meta on mobile devices and added support for displaying categories.

14. Changed the scrollbar color of code blocks to match the code theme.

15. Added lazyload for avatars and reward images.

16. Improved the loading speed of highlight-tool.

17. Added the ability to switch themes for disqus/disqusjs/facebook comments with the night mode button.

18. Upgraded mathjax to version 3.

19. pangu.js now only renders the body-wrap area.

20. Limited the font size increase and decrease to a range of 10px to 20px.

21. Updated the Google Analytics code (gtag).

22. Removed blueimp_md5 js.

    ```diff
    -blueimp_md5: https://cdn.jsdelivr.net/npm/blueimp-md5/js/md5.min.js
    ```

23. Made minor adjustments to the night mode and reading mode.

### Fix

1. Fixed a bug where the button in the bottom right corner was being blocked by the button tag plugin.
2. Fixed a bug where opening photofigcaption caused interface distortion in the gallery.
3. Fixed a bug where the tabs plugin conflicted with the aplayer plugin.
4. Adjusted the spacing of the aplayer.
5. Fixed a bug where the highlight_shrink and toc in the article's front-matter caused JavaScript errors when empty.
6. Fixed a bug where using the BUTTON tag nested in other tags resulted in different styles due to the generation of extra br tags.
7. Fixed a bug where mobile-sidebar couldn't scroll on some devices.
8. Fixed a bug where text overflowed in certain elements on the article page.
9. Adjusted the layout when card-category has a shrink button.
10. Fixed a bug where loading files failed when configuring PWA parameters and the website is in a subdirectory.
11. Fixed a bug where the hexo douban plugin showed null images when clicking on the previous/next page.
12. Adapted to hexo 5.0.0 and fixed a bug where toc didn't jump when clicked.
13. Adapted to hexo 5.0.0 and fixed a bug where toc didn't scroll with the article.
14. Fixed a bug where the requiredFields setting in Valine was ineffective when set to empty.
15. Adjusted the margin of ol, ul, and li in the mobile interface.
16. Fixed a bug where the width of Facebook comments was not 100% on mobile.
17. Fixed a bug where share.js shared articles with the same image.
18. Removed the underline of the a tag when the note tag plugin is set to modern.
19. Corrected some incorrect HTML structures.
20. Fixed a bug where the alt attribute of fancybox displayed as undefined.
21. Fixed a bug where the ICP text in the footer with a blue background was unclear when hovered.

{% endhideToggle %}

{% hideToggle 3.0.0-RC1 (2020/06/16) %}

##  3.0.0-RC1 (2020/06/16)

### Breaking Change

1. Starting from version 3.0, IE browser is no longer supported.

2. Forced to use fontawesome v5 (this will affect some custom icons, please replace them with v5 icons).

   ```diff
   -# fontawesome icons
   -# By default, fontawesome v4 icons are used
   -fontawesome_v5:
   -  enable: false
   
   CDN:
   -  # fontawesome
   -  fontawesome_v4: https://cdn.jsdelivr.net/npm/font-awesome@latest/css/font-awesome.min.css
   -  fontawesome_v5: https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css
   +  fontawesome: https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/css/all.min.css
   ```

3. Changes in _config.yml

   1. Simplified baidu_push/instantpage/click_heart/readmode/footer_copyright/medium_zoom/fancybox configurations.

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

   2. Changed runtimeshow's start_date to publish_date.

      ```diff
      runtimeshow:
        enable: true
      -  start_date: 6/7/2018 00:00:00
      +  publish_date: 6/7/2018 00:00:00
      ```

   3. Renamed laibili to LiveRe.

      ```diff
      -laibili:
      +livere:
        enable: false
        uid:
      ```

   4. Changed hr to hr_icon, which can be used to cancel the icon.

      ```diff
      # Horizontal line
      -hr:
      +hr_icon:
        enable: true
        icon: # Unicode of the icon on fontawesome
        icon-top:
      ```

   5. Changed loading_bg to error_img, and moved post-loading to lazyload.

      ```diff
      -lodding_bg:
      +error_img:
        flink: /img/friend_404.gif # Image after 404
        post_page: /img/404.jpg # Image after 404
      -  post: /img/loading.gif # Loading animation
      
      lazyload:
        enable: true
      +  post: /img/loading.gif # Loading animation
      ```

   6. Pangu's field configuration can only be set to site/post.

      ```diff
      pangu:
        enable: true
      -  field: page # page/post
      +  field: site # site/post
      ```

   7. Integrated auto_open_sidebar into toc.

      ```diff
      toc:
        enable: true
        number: true
      +  auto_open: true # auto open the sidebar
      
      -# auto open the sidebar in 'post'
      -auto_open_sidebar:
      -  enable: true
      ```

   8. Removed enable configuration for font.

      ```diff
      # Global font
      font:
      -  enable: false
      -  font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif
      -  code-font: consolas, Menlo, "PingFang SC", "Microsoft YaHei", monospace, Helvetica Neue For Number
      
      +  font-family:
      +  code-font:
      ```

   9. Removed some configurations.

      ```diff
      valine:
      -  notify: false # valine mail notify (true/false) Deprecated in v1.4.0+
      -  verify: false # valine verify code (true/false) Deprecated in v1.4.0+
      
      translate:
      -  # Blog URL
      -  cookieDomain: 'https://xxx/'
      ```

   10. Removed twitter_meta configuration.

       ```diff
       -# Automatically add styles to Twitter shares
       -# -https://i.loli.net/2019/09/08/qm3RfvUCKbct1Wz.png
       -twitter_meta: true
       ```

### Feature

1. Table width now occupies the full width of the display.

2. Added system Dark Mode switch monitoring. The theme will switch immediately when the system switches to Dark Mode.

3. card_description now supports HTML writing.

4. Dark Mode and Light Mode switch button icons have been changed.

5. Adapted to the built-in Pullquote tag in Hexo.

6. Added dns-prefetch to the links for Baidu Push.

7. Set canonical to be generated by default and no longer provide configuration.

   ```diff
   -# Avoid duplicate URLs and SEO dispersion
   -canonical: true
   ```

8. Added defer to the instantpage JavaScript loading.

9. Added zIndex configuration to fireworks.

   ```diff
   fireworks:
     enable: false
   +  zIndex: 9999 # -1 or 9999
   ```

10. New Tag Plugin - button.

11. New Tag Plugin - tabs.

12. Configurable justifiedGallery CDN.

    ```diff
    CDN:
    +  # justifiedGallery
    +  justifiedGallery_js: https://cdn.jsdelivr.net/npm/justifiedGallery/dist/js/jquery.justifiedGallery.min.js
    +  justifiedGallery_css: https://cdn.jsdelivr.net/npm/justifiedGallery/dist/css/justifiedGallery.min.css
    ```

13. New design for the 404 page.

14. aplayer js/css can now be configured in the front-matter of the post to prevent inserting code on every page.

    ```diff
    CDN:
    +  # aplayer
    +  aplayer_css: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css
    +  aplayer_js: https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js
    +  meting_js: https://cdn.jsdelivr.net/npm/meting@1.2.0/dist/Meting.min.js
    ```

15. Added online chat services (chatra/tidio/daovoice/gitter) and the ability to replace the original chat button with a theme chat button.

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

16. Configurable distance between rightside button and the bottom.

    ```diff
    +# Distance between the right bottom button and the bottom (default unit is px)
    +rightside-bottom:
    ```

17. Changed lazyload service provider.

    ```diff
    CDN:
    -	lazyload: https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js
    +	lazyload: https://cdn.jsdelivr.net/npm/vanilla-lazyload/dist/lazyload.iife.min.js
    ```

18. Added expand/collapse button to card-categories.

    ```diff
    aside:
      card_categories:
        enable: true
        limit: 8 # if set 0 will show all
    +    expand: none # none/true/false
    ```

19. Changed auto_excerpt to index_post_content, and added three methods to choose from.

    ```diff
    -# Automatic excerpt
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

20. Can individually set auto_open: false in the post to turn off the automatic opening of the sidebar.

21. Optimized friend links interface code, added category description, and made category name and description optional. Changed the format of the friend links yml (the old format is still valid).

22. Added highlight_shrink to the front-matter of the post/page (true or false).

23. Code box optimization

    1. Adjusted some code colors
    2. Added a code theme called "mac"
    3. Code box themes now support customization

24. Removed code highlighting in reading mode

25. Updated js/css versions of disqusjs, added nocomment configuration

    ```diff
    disqusjs:
      enable: false
      shortname:
      siteName:
      apikey:
    -  api: https://disqus.skk.moe/disqus/ # No need to modify API address in most cases
    +  api:
    +  nocomment: # Display when a blog post or an article has no comment attached
      admin:
      adminLabel:
      count: false # Display comment count in top_img
    
    CDN:
    -  disqusjs: https://cdn.jsdelivr.net/npm/disqusjs@1.2/dist/disqus.js
    -  disqusjs_css: https://cdn.jsdelivr.net/npm/disqusjs@1.2/dist/disqusjs.css
    +  disqusjs: https://cdn.jsdelivr.net/npm/disqusjs@1/dist/disqus.js
    +  disqusjs_css: https://cdn.jsdelivr.net/npm/disqusjs@1/dist/disqusjs.css
    ```

26. Added link configuration for rewards / Changed reward format (old format still works) #240

    ```diff
    # Reward button
    reward:
      enable: true
      QR_code:
    -    - itemlist:
    -        img: /img/wechat.jpg
    -        text: WeChat
    -    - itemlist:
    -        img: /img/alipay.jpg
    -        text: Alipay
    +    - img: /img/wechat.jpg
    +      link:
    +      text: WeChat
    +    - img: /img/alipay.jpg
    +      link:
    +      text: Alipay
    ```

27. Removed JS-COOKIES

    ```diff
    CDN:
    -  js_cookies: https://cdn.jsdelivr.net/npm/js-cookie/dist/js.cookie.min.js
    ```

28. Added ability to configure whether TOC (Table of Contents) is displayed for articles, even if toc is set to false in the configuration

### Fix

1. Fixed alignment issues with sidebar directory collapse/expand icons
2. Modified some language (zh-CN/zh-TW/en)
3. Fixed bugs where clicking on card-categories and card-archives didn't navigate
4. Fixed bugs where social media links generated incorrect addresses when the website was in a subdirectory
5. Fixed bug where Pagination didn't occupy full width for the last article
6. Fixed bug where recommended articles layout didn't display correctly on Microsoft Edge (old version)
7. Fixed bug where font in black code box was not clear in reading mode #223
8. Fixed bug where preconnect //fonts.googleapis.com was loaded when blog_title_font was not set to a Google font
9. Fixed bug where setting copy to false prevented code copying
10. Adjusted reading mode
11. Fixed bugs where some compression software reported errors when compressing HTML

{% endhideToggle %}

{% hideToggle 2.3.5(2020/05/01) %}

## 2.3.5 (2020/05/01)

### Feature

1. Added the ability to configure the beautify feature to apply to the entire site or just the post pages (#218).

    ```diff
    beautify:
      enable: true
    +  field: post # site/post
      title-prefix-icon: '\f0c1'
      title-prefix-icon-color: '#F47466'
    ```

2. Updated the lazyload JavaScript library.

    ```diff
    -lazyload:
    -  enable: true
    
    +lazyload: true

    CDN:

    -  lazyload: https://cdn.jsdelivr.net/npm/lazysizes@latest/lazysizes.min.js
    +  lazyload: https://cdn.jsdelivr.net/npm/lozad/dist/lozad.min.js

    ```

3. Added the ability to configure anchors for articles.

    ```diff
    + # anchor
    + # when you scroll in post , the url will update according to header id.
    + anchor: false
    ```

### Fix

1. Fixed a bug where an error "Cannot read property 'trim' of undefined" would occur when a menu icon was not set.
2. Fixed a bug where the meta description was not properly escaped when automatically generating the first 200 characters of an article.
3. Fixed a bug where images were not displayed when using `{% asset_img slug [title] %}` after enabling lazyload.
4. Fixed a bug where only 8 tags were displayed on the tags page.
5. Fixed a bug where local images were not displayed when the blog root was not '/'.
6. Fixed a bug where replacing the URL hash caused the page to jump.

{% endhideToggle %}

{% hideToggle 2.3.0(2020/04/26) %}

## 2.3.0(2020/04/26)

### Breaking Change

1. Added Facebook Comments

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

   

2. Added page loading animation Preloader #193

   ```diff
   +# Loading Animation
   +preloader: false
   ```

   

3. Configurable aside card-tags to show color or not/aside subtitle is configurable, priority is given to the configured content, if not available, show page subtitle #191 / Configurable parameters added to aside widget/aside widget's Categories, Tags, post, Archives can be configured with limit/Integrate announcement configuration into aside

   ```diff
   aside:
     enable: true
     mobile: true # Whether to show aside content on mobile pages (display width < 768px)
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
     
   -# Website Announcement
   -announcement:
   -  content: Thank you for visiting this site, please bookmark ^_^
   
   ```

   

4. Changed CDN_USE to inject, can insert code into head or bottom

   ```diff
   -# CDN
   -# Required for the website
   -# Add js/css as needed
   -CDN_USE:
   -  css:
   -    - /css/index.css
   
   -  js:
   -    - https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js #/js/third-party/jquery.min.js
   -    - /js/utils.js
   -    - /js/main.js
   
   +# inject
   +# Insert code before </head> and before </body>
   +inject:
   +  head:
   +  	# - <link rel="stylesheet" href="xxxxx">
   +  bottom:
   +  	# - <script src="xxxx"></script>
   
   # CDN
   # Do not modify if not necessary
   CDN:
   +  # main
   +  main_css: /css/index.css
   +  jquery: https://cdn.jsdelivr.net/npm/jquery@latest/dist/jquery.min.js
   +  main: /js/main.js
   +  utils: /js/utils.js
   ```

   

5. Adapted to valine version 1.4.5 and above

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

6. Removed support for hiding articles.

### Features

1. Added tag-toggle plugin for tagging.
2. Adapted to hexo-generator-indexed plugin.
3. Fine-tuned color schemes for Dark mode and Read mode.
4. Added page keywords setting.
5. Deepened highlighting of text in algolia-search.
6. Adjusted layout of subdirectories to align left.
7. Adjusted layout of aside and mobile sidebar web information. When one is missing, the width is still evenly divided.
8. Added rotating avatar effect on sidebar menu hover.
9. Automatically reads the first 200 words of an article as the meta description if no description is set.
10. Added article:published_time and article:modified_time to meta.
11. Changed subtitle to load after the webpage is fully loaded to prevent slow API responses from blocking webpage display.
12. Removed subtitle from Kingsoft Ciba Daily Quote and added random quotes from Bo Tian API.
13. Local search now supports displaying article content and highlighting keywords.
14. Dark mode can be switched to Light mode in Read mode.
15. Adapted interface for high resolution displays.
16. Fixed display bug of note tags in Dark mode.
17. Added dns_prefetch.

### Fixes

1. Fixed inconsistent logic in articleSort for setting article covers.
2. Corrected some terms in zh-TW.
3. Fixed color display issue in hide-block configuration.
4. Fixed bug where only clicking on subdirectory text would navigate.
5. Fixed bug where search results could not be scrolled on mobile devices.
6. Fixed bug where "view more" on aside categories would navigate to tags page.
7. Fixed bug where an error would occur when flink.yml content is empty.
8. Fixed bug where "view more" text in aside was too light in Dark mode.
9. Fixed bug where there was a separator before comment count when reading minutes and page views are disabled.
10. Fixed bug where canvas_ribbon opacity would change to 1 and then back to default value.
11. Fixed bug where no image would appear when default_cover is not set.
12. Fixed issue where replacing the URL hash value on article pages would result in excessive browser history.
13. Fixed display bug of note tags in Dark mode.

{% endhideToggle %}

{% hideToggle 2.2.5(2020/03/28) %}

## 2.2.5(2020/03/28)

### Breaking Change

1. Added automatic ad positions

    ```diff
    +ad:
    + index:
    + aside:
    + post:
    ```

2. Added image Figcaption display

    ```diff
    + photofigcaption: false
    ```

3. Added total word count for the entire website, configurable to disable word count, reading time, and total word count

    ```diff
    wordcount:
      enable: false
    +  post_wordcount: true
    +  min2read: true
    +  total_wordcount: true
    ```

### Feature

1. Added table of contents in the header that appears when scrolling on article pages
2. Added tooltip text to post meta on the entire website
3. Adjusted spacing between post meta on article pages and the homepage
4. Added text display when only one date is set on article pages

### Fixed

1. Fixed bug where class of img tag in lazyload was misplaced causing replacement error
2. Fixed bug where URL of copied copyright information was undefined
3. Fixed bug where "Read More" in aside was not centered
4. Fixed bug where setting highlight_shrink to false caused JavaScript error
5. Fixed bug where setting highlight_shrink to true did not open code block when clicked
6. Fixed bug where switch button icon did not change in Dark mode
7. Fixed bug where simplified and traditional Chinese conversion was not working
8. Fixed bug where homepage article dates were displayed incorrectly
9. Fixed bug caused by commenting out Douban settings resulting in "Cannot read property 'meta' of undefined" error
10. Fixed bug where Gitalk reported "Error: Cannot read property 'repository' of undefined"
11. Fixed bug where utterances comments still displayed light theme when display_mode was set to dark
12. Fixed bug where setting display_mode to dark had no effect
13. Added night mode and article page detection to comments, reducing unnecessary JavaScript loading

{% endhideToggle %}


{% hideToggle 2.2.0 (2020/03/17) %}

## 2.2.0 (2020/03/17)

### Breaking Change

1. No longer support hexo versions below 4.0.0.
2. Added hexo fragment_cache to speed up generation speed.

    ```diff
    + fragment_cache: true
    ```

3. Improved V5 icon display, no longer need to load both V4 and V5 icons.

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

4. Removed cheerio dependency.
5. Integrated Douban configuration, added configuration for games and books pages, added top_img for pages, and added the ability to set whether to display meta to solve the issue of some browsers not displaying images.

    ```diff
    - # If you are using hexo-douban to generate movie pages, you can configure this
    - movies_img: https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/movie.jpg

    + douban:
    +   meta: false
    +   movies_img:
    +   books_img:
    +   games_img:
    ```

6. Custom content can be added to the list of friendly links.
7. Can set the distance between the main page title and the top.

    ```diff
    # Main page settings
    # Default top_img is full screen, site_info is in the middle
    # Use default, no need to fill in (recommended)
    +index_site_info_top: # Distance between main page title and top  e.g. 300px/300em/300rem/10%
    index_top_img_height: # Height of main page top_img e.g. 300px/300em/300rem  cannot use percentage
    ```

8. Sidebar can be hidden, and can set whether to hide on mobile pages.

   ```diff
   -aside_mobile: true

   aside:
   +  enable: true
   +  mobile: true # Whether to display aside content on mobile pages (display width < 768px)
     position: right # left or right
     card_author: true
   ```

9. Added configuration for DisqusJS and Utterances comments.

   ```diff
   +disqusjs:
   +  enable: false # Change to true to enable
   +  shortname:
   +  siteName:
   +  apikey:
   +  api: https://disqus.skk.moe/disqus/ # No need to modify API address in general
   +  admin:
   +  adminLabel:
   +  count: true # Display comment count on top_img

   + utterances:
   +   enable: false
   +   repo: jerryc127/jerryc127.github.io # Optional pathname/url/title/og:title
   +   issue_term: pathname # Optional github-light/github-dark/github-dark-orange/icy-dark/dark-blue/photon-dark
   +  light_theme: github-light
   +  dark_theme: photon-dark
   ```

10. Homepage subtitle can be turned off for typing effect, and can set whether the typing effect shows only once or loops.

    ```diff
    subtitle:
      enable: true
    +  # Typing effect
    +  effect: true
    +  # Loop or type only once
    +  loop: false
      # Call third-party services for source
      # source: false to disable
      # source: 1 to call Jinshan Ciba's daily sentence (Simplified Chinese)
      # source: 2 to call Hitokoto's sentence (Simplified Chinese) #https://hitokoto.cn/
      # source: 3 to call Yijuzhan's sentence (Simplified Chinese) http://yijuzhan.com/
      # source: 4 to call Jinrishici's poem (Simplified Chinese) https://www.jinrishici.com/
      # subtitle will display source first, then sub content
      source: 2
      # (If there is a comma in English ', ', please use the escape character &#44;)
      # If typing effect is turned off, subtitle will only display the first line of sub content
      sub:
        - 今日事&#44;今日畢
        - Never put off till tomorrow what you can do today
    ```

11. Added configuration for Gitalk and Valine comments.

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
      count: true # Display comment count on top_img

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
      count: true # Display comment count on top_img
    ```

12. Reorganized dark mode configuration.

    ```diff
    - # Dark mode
    - darkmode:
    -  enable: true

    -# Auto switch between dark mode and light mode
    -# autoChangeMode: 1  Follow the system, browsers/systems that do not support it will automatically switch to dark mode between 6pm and 6am
    -# autoChangeMode: 2  Only switch to dark mode between 6pm and 6am
    -# autoChangeMode: false Disable auto switch
    -autoChangeMode: false

    + darkmode:
    +  enable: true
    +  # Dark mode and light mode switch button
    +  button: true
    +  # Auto switch between dark mode and light mode
    +  # autoChangeMode: 1  Follow the system, browsers/systems that do not support it will automatically switch to dark mode between 6pm and 6am
    +  # autoChangeMode: 2  Only switch to dark mode between 6pm and 6am
    +  # autoChangeMode: false Disable auto switch
    +  autoChangeMode: false
    ```

13. Added 404 page.

    ```diff
    +# A simple 404 page
    +error_404:
    +  enable: true
    +  subtitle: "Page not found"
    +  background:
    ```

14. Changed post_beautify to beautify, page beautification is no longer limited to post pages, but also applies to page pages.

    ```diff
    -post_beautify:
    +beautify:
      enable: true
      title-prefix-icon: '\f0c1'
      title-prefix-icon-color: "#F47466"
    ```

15. Can set whether to display cover, and can set the display of cover in different positions.

    ```diff
    -# the default cover of the post
    -default_cover: https://cdn.jsdelivr.net/gh/jerryc127/butterfly_cdn@2.1.0/top_img/default.png

    -index_post_cover: both

    +cover:
    +  # Whether to display post cover
    +  index_enable: true
    +  aside_enable: true
    +  archives_enable: true
    +  # Position of cover display
    +  # Three values can be configured: left, right, both
    +  position: both
    +  # Default cover to display when no cover is set
    +  default_cover:
    ```

16. Added configuration for Mermaid, can draw flowcharts, state diagrams, sequence diagrams, Gantt charts, etc.

    ```diff
    +# https://github.com/knsv/mermaid
    +mermaid:
    +  enable: true
    +  # built-in themes: default/forest/dark/neutral
    + 

17. Added pangu configuration to add spaces between Chinese and English characters.

    ```diff
    +# https://github.com/vinta/pangu.js
    +# Add spaces between Chinese and English characters
    +pangu:
    +  enable: true
    +  field: page # page/post
    ```

18. Integrated partial configurations.

    ```diff
    -avatar_effect: false

    +avatar:
    +  img: /img/avatar.png
    +  effect: true # The avatar will keep spinning
    ```

19. Added decode URL to post-copyright (to display Chinese characters).

    ```diff
    post_copyright:
      enable: true
    +  decode: false
      license: CC BY-NC-SA 4.0
      license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
    ```

20. Added partial color configurations.

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

21. Added tags and update date display for homepage articles, configurable with post_meta.

    ```diff
    post_meta:
    -  date_type: both # or created or updated Display both creation and update dates for articles
    -  categories: true # or false Display categories
    -  tags: true # or false Display tags
    +  page:
    +    date_type: both # created or updated or both Display both creation and update dates for homepage articles
    +    categories: true # true or false Display categories on homepage
    +    tags: true # true or false Display tags on homepage
    +  post:
    +    date_type: both # created or updated or both Display both creation and update dates for article pages
    +    categories: true # true or false Display categories on article pages
    +    tags: true # true or false Display tags on article pages
    ```

### Feature

1. Adapted for IE compatibility.
2. Added a new Tag Plugin: Gallery Collection.
3. Added a new Tag Plugin: tag-hide, with inline/block functionality.
4. Removed the display of duplicate content at the beginning of each page.
5. Added support for HTML code in the aside bulletin board.
6. Added a progress bar and highlighted corresponding titles in the sidebar of the mobile interface.
7. Added the source attribution for hitokoto content in the subtitle of the homepage.
8. Changed the Hexo link in the footer to use HTTPS.
9. Modified the opening effect of menus and table of contents (TOC) on mobile devices.
10. Full-screen display for the search interface on mobile pages.
11. SEO optimization: Changed the title bar to display as h1.
12. Improved reading mode: Background can be adjusted based on light mode and dark mode.
13. When JavaScript is blocked, the header will appear (previously controlled by JavaScript and hidden).

### Fixed

1. Fixed the bug where the script loading for Tencent Analytics was using HTTP instead of HTTPS (#105).
2. Fixed the bug where the related articles were displaying incorrect dates.
3. Fixed the bug causing errors with gitalk.
4. Fixed the bug where the valine background wouldn't display when using an absolute address.
5. Fixed the bug where medium-zoom wasn't functioning properly.
6. Fixed the bug in Safari where clicking or moving to the homepage article cover would cause the rounded corners to become square (#114).
7. Fixed the bug where the avatars for the aside and friendly links were distorted when viewed in certain browsers.
8. Fixed the bug where tables would overflow the screen and display a scrollbar when the width was limited (#138).
9. Fixed the bug where gitalk JavaScript was loading on pages without comments.
10. Fixed the background color issue with tag plugins' gist in different themes (difficult to read text in dark themes).
11. Fixed the bug where the highlight figcaption wasn't fully displayed.
12. Fixed the bug where Disqus couldn't retrieve the comment count.
13. Fixed the bug where subdirectories occasionally didn't appear when clicked on touch screens.
14. Fixed the bug where the "a" tags wouldn't wrap to a new line when the text was too long (continuous English letters).
15. Fixed the bug where the table of contents would scroll along with the page, affecting the reading progress bar.
16. Fixed the bug where the images in the aside section could be clicked to display larger versions.
17. Fixed the bug where the parameters for activate-power-mode weren't being applied.
18. Fixed language errors (#156).
19. Fixed the bug where the homepage scrolling would lag in Safari on desktop.
{% endhideToggle %}

{% hideToggle 2.1.0 (2019/12/20) %}
## 2.1.0 (2019/12/20)

### Feature

1. Enable hidden articles
2. Adapt the display of Hexo's Tag Plugins Code Block With marked lines
3. Configure the position of the homepage cover display
4. Change the color scheme in dark mode
5. Add closing color and shaking to activate_power_mode
6. Add Google ads and Tencent analytics
7. Add time display to related articles, adjust layout, and center vertically
8. Add comment count to top_img on article pages
9. Allow disabling of image zoom on click
10. Set mathjax and kathex to load on every page or on demand
11. Adapt scrollbar color in dark mode
12. Optimize gitalk display in dark mode
13. Show only three lines of content when article title is too long
14. Add overlay to background image in dark mode
15. Optimize display of canvas in dark/read mode
16. Improve special effects for donations and prevent immediate disappearance when moving to QR code
17. Optimize sub-menu style
18. Modify the color of tags in aside to ensure visibility in dark mode
19. Upgrade normalize.css to the latest version
20. Improve opening animation of toc and menu on mobile devices
21. Enhance open/close effect of code blocks
22. Simplify JavaScript code and use CSS for some operations
23. Optimize some animations in the theme to make them smoother

### Fixed

1. Fix the bug where clicking on the image icon does not redirect to the corresponding webpage when the image is wrapped in an "a" tag, but instead opens a larger image viewing mode.
2. Fix the bug where the menu, donation QR code, and loading background links are incorrect when the URL has a subdirectory.
3. Fix the bug where the URL has a subdirectory.
4. Fix the bug where the CSS for KaTeX cannot be loaded.
5. Fix the bug where the search button does not appear on the article page.
6. Fix the bug where the CSS for Gitalk fails to load.
7. Fix the bug where the click effect for the fireworks is not working.
8. Fix the bug where Gitalk reports "path.startsWith is not a function".
9. Fix the bug where the background does not change to a solid color in reading mode.
10. Fix the bug where the header occasionally does not stick to the top in reading mode.
11. Fix the bug where the links in the Hexo Tag Plugins Block Quote display outside.
12. Fix the bug where the archive dates in the aside are misaligned due to excessive length.
13. Fix the bug where the toc button still exists when the toc is empty.
14. Fix the bug where the avatar does not display after lazy loading is disabled.
15. Fix the bug where switching to read mode occasionally does not work in dark mode.
16. Fix the bug where the toc and menu buttons are misaligned on some mobile devices.

{% endhideToggle %}

{% hideToggle 2.0.0 (2019/11/03) %}
## 2.0.0 (2019/11/03)

### Breaking changes

1. Mobile interface now uses a card-based layout and can display sidebar content.
2. Fixed a bug where the header interface would become distorted when there were too many menu items. It now switches to a sidebar mode when there are too many menu items.
3. Added medium-zoom for viewing larger images.
4. Added mouse click effects: text and heart click effects.
5. The homepage subtitle can now call third-party APIs such as Jinshan Ciba, Hitokoto, Yiju, and Today's Poem.
6. Added snackbar pop-up windows.
7. Renamed nightshift to dark mode, which can now automatically switch based on system settings and can be set to switch with time.
8. Fixed display issues with built-in Hexo tag plugins (Block Quote, Code Block With Caption, Gist, Youtube, Vimeo).
9. Theme's required CSS and JS can now be configured with a CDN.
10. Changed the loading behavior of dark mode so that the website no longer "flashes" when entering the web page after dark mode is set.
11. Background effects and images now display on the mobile interface.
12. Added justified-gallery image display (Tag Plugins).

### Features

1. Added icons for word count, reading time, and views on the article page.
2. Updated lazy loading JS.
3. Upgraded typed.js/instantpage.js to the latest version.
4. Added exit effects to search and bottom-right button.

### Fixes

1. Fixed a bug where some buttons would open a blank page on Hexo 4.0.0.
2. Fixed a bug where pagination buttons would display code on Hexo 4.0.0.
3. Fixed a bug where the "Go to Comments" button would still appear in the bottom-right corner even when comments were not enabled.
4. Optimized the speed of opening the sidebar.
5. Fixed a bug where the left and right margins of the article page title were uneven.
6. Fixed a bug with keyword reading.
7. Fixed a bug where the footer position would be incorrect when the post/page content was empty.
8. Fixed a bug where the toc sidebar content would be hidden at the bottom on mobile Safari.
9. Improved the dark mode color scheme for certain interfaces.
10. Fixed a bug with the "View More" button in the card-archives.

### Removals

1. Removed Gitment.
2. Removed Gallery.

{% endhideToggle %}

{% hideToggle 1.2.0 (2019/09/24) %}
## 1.2.0 (2019/09/24)

### Feature

1. Changed the display method and effects of the menu and TOC on mobile pages (TOC is now visible on iPads).
2. Added the ability to disable copying of website content.
3. Added the ability to automatically add copyright information when copying content.
4. Added the ability to modify the top image of tags.
5. Added the ability to modify the top image of categories.
6. Added the ability to modify the background of Valine.
7. Optimized the UI of the archives page.
8. Added an icon for ICP.
9. Added the ability to set the height of the top image on the homepage.
10. Added the ability to set the position of the site-info on the homepage.
11. Added the ability to set the UI of the category and tag pages to be the same as the homepage (#31).
12. Added the ability to set multiple sentences for the subtitle on the homepage (no longer limited to 2) (#37).
13. Added the ability to add spaces before and after menu items.
14. Adjusted the layout of the post page.
15. Added an icon for bookmarks.
16. Added an effect for the announcement icon.
17. Added the ability to limit the number of items displayed in the archive module on the homepage, with a "View More" button.
18. Adjusted the position of the button in the lower right corner.

### Fix

19. Fixed the bug where the cover image of an article would display differently in different parts of the same article when generated randomly.
20. Fixed the bug where the language setting of Gitalk was invalid.
21. Fixed the bug where the '|' character would appear in front of the view count on the post page when the word count was not set.
22. Fixed display issue of sub-menu in Safari.
23. Fixed the centering issue of comments on the tags page.
24. Fixed the issue where the hover color of header links was white.
25. Fixed the color bug of the footer in dark mode.
26. Fixed the issue where the English display of bookmarks was incomplete.

{% endhideToggle %}

{% hideToggle 1.1.5 (2019/09/08) %}

## 1.1.5 (2019/09/08)

### Feature

1. Feature: Inline code block style can be set #26
2. Feature: Night mode can be set as default style
3. Feature: Code language name can be set to display or not
4. Feature: Code box can be set to expand or collapse
5. Feature: Background image/color can be set
6. Feature: Footer background can be set to display or not
7. Feature: Added canvas-nest.js
8. Feature: Avatar can be set to rotate
9. Feature: Menu can be grouped

### Fix

10. Optimized the opening effect of the reward and search function
11. Optimized the opening effect of the sidebar to avoid inconsistency with the article page effect
12. Adapted to **hexo-blog-encrypt**, now the toc can be displayed
13. Fixed the bug where the direct comment button did not disappear when the comment was set to not be displayed
14. Fixed the bug where the button did not display properly in three states: when comments and toc were not displayed, and when neither were displayed in the post page footer
15. Fixed the bug where the code name followed the code box when scrolling left and right
16. Improved the font display of other page titles
17. Fixed the bug where the canvas_ribbons would be displayed first when entering the website with the canvas_ribbons option enabled
18. Improved font display in night mode
19. Fixed the z-index bug of the code box copy and code name
20. Improved reading mode

{% endhideToggle %}

{% hideToggle 1.1.0 (2019/08/29) %}

## 1.1.0 (2019/08/29)

### Feature

1. Redesigned mobile menu interface
2. Added beautification to post page (original melody theme function), and added the ability to change the prefix icon and color of the title
3. Added direct comment button for PC
4. Can set whether to display copyright information for individual articles

### Fix

1. Fixed bug where adjusting font size in reading mode had no effect on code
2. Adjusted Valine font display issue
3. Corrected Valine compatibility issue in night mode
4. Fixed bug where Valine settings for notify and verify were not effective (thx @VincentTV)
5. Fixed issue where images could not be loaded when lazy loading was enabled using hexo-asset-image
6. Fixed bug where 'back to top' arrow could not be clicked

### Remove

1. Removed "Read More" button from theme

{% endhideToggle %}

{% hideToggle 1.0.8 (2019/08/11) %}
## 1.0.8 (2019/08/11)

1. Feature: Option to disable lazy loading of images
2. Feature: Add page layout option to move the right column to the left
3. Feature: Add Note (Bootstrap Callout) (ported from the Next theme)
4. Feature: TOC can be viewed on mobile devices
5. Feature: Add a button to scroll to comments
6. Fix: Fix display bug on post page at width 1024px
7. Fix: Fix code block not displaying the correct language for some languages
8. Fix: Fix bug where Disqus comments were not working when commented out in the settings

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