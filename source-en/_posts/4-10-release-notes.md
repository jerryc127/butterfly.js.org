---
title: Butterfly 4.10 Release Notes
comments: false
date: 2023-10-08 23:22:40
tags:
  - en
  - docs
  - hexo
categories: Release Notes
keywords: 'hexo,butterfly,更新日誌,Release Notes,changelog,released,主題,doc,教程,文件'
description:
top_img:
cover: https://oss.012700.xyz/butterfly/2023/10/4-10-changelog.png
abbrlink: 4-10-release-notes
---



## Breaking Changes
1. Changed `rightside-bottom` to `rightside_bottom`.

    ```diff
    - rightside-bottom:
    + rightside_bottom:
    ```

1. Refactored the `gallery` tag plugin.
   1. Changed the implementation.
   2. Images are now loaded only when they are scrolled into view.
   3. Changed the dependency from `nk-o/flickr-justified-gallery` to `egjs-infinitegrid`.

      ```diff
        CDN:
          option:
      -      # flickr_justified_gallery_js:
      -      # flickr_justified_gallery_css:
      +      # egjs_infinitegrid:
      ```

3. Changed `ClickShowText` to `clickShowText`

   ```DIFF
   -ClickShowText:
   +clickShowText:
     enable: false
     text:
       - I
       - LOVEeeeeeeeeeeeee
       - YOU
     fontSize: 15px
     random: true
     mobile: false
   
   CDN:
     option:
   -   ClickShowText:
   +   clickShowText:
   ```

   

## Features

1. Changed the position of the sticky icon to the left of the title.

2. Added the ability to customize the text of the reward button.

   ```diff
    reward:
      enable: false
   +  text:
      QR_code:
   ```
   
3. Added support for displaying series posts in the right panel.
   ```diff
   aside:
   +  card_post_series:
   +  enable: true
   +  orderBy: 'date' # Order by title or date
   +  order: -1 # Sort of order. 1, asc for ascending; -1, desc for descending
   ```
   
4. Added support for displaying series posts using the series tag plugin.
   ```diff
   +series:
   +   enable: true
   +   orderBy: 'title' # Order by title or date
   +   order: 1 # Sort of order. 1, asc for ascending; -1, desc for descending
   +   number: true
   ```
   
5. Removed the addthis sharing plugin.
   ```diff
   -addThis:
   - enable: false
   - pubid:
   ```
   
6. Added an icon before the text in the copyright section.

7. Added the ability to configure attributes for getScript.

8. Added support for left and right alignment of article text.

   ```diff
   +# Stretches the lines so that each line has equal width（文字向兩側對齊，對最後一行無效）
   +text_align_justify: true
   ```

9.  Added support for preconnecting to the CDN based on configuration.

10. Removed the button for anchors and made the title clickable to jump to the anchor.
    ```diff
    anchor:
    -  button:
    -    enable: false
    -    always_show: false
    -    icon: # the unicode value of Font Awesome icon, such as '\3423'
      auto_update: false # when you scroll in post, the URL will update according to header id.
    +  # Click the headline to scroll and update the anchor
    +  click_to_scroll: false
    ```

11. Changed the hover effect of headlines.

## Fix
1. Fixed a bug where pjax would return a 404 error when the website was in a subdirectory.
2. Fixed a bug where the scrollbar color was not clear on small screens in dark mode.
3. Fixed a bug where the border in the TOC was abnormal when the font size was greater than 17px.
4. Fixed a bug where the width of comments was abnormal in float layout.
5. Fixed a bug where searching for < and > did not return results when the search file was XML.
6. Fixed a bug where the top image effect on the homepage was delayed during scrolling.
7. Fixed a bug where the caption of an image overlapped with the image in the note tag plugin.

## Improvement
1. Adjusted the left and right margins of social icons on the homepage.
2. Optimized the code.
3. Adjusted the position of the "back to top" arrow in the tabs tag plugin.
4. Updated plugin.yml.
5. efactored the code in main.js.
6. Optimized performance under pjax.
7. Optimized the opening and closing effects of the TOC on mobile devices.
8. Changed the article entry effect to use transform and optimized the stylus.
9. Prevented elements from being squeezed when the sidebar has a scrollbar.
10. Fixed a cross-domain issue caused by extra slashes in the URL for Waline.
11. Improved the wording in some language files.
12. Displayed "0" when the comment count could not be obtained for Disqus and Disqusjs.
13. Changed the method of obtaining the comment count for Disqusjs to use the API.
14. Removed the bottom margin of the last element in the tabs content.
15. Removed the noscript tag.