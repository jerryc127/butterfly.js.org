---
title: Butterfly 5.0 Release Notes
comments: false
date: 2024-07-17 02:09:49
tags:
  - en
  - docs
  - hexo
categories: Release Notes
keywords: 'hexo,butterfly,更新日誌,Release Notes,changelog,released,主題,doc,教程,文件'
description:
top_img:
cover: https://oss.012700.xyz/butterfly/2024/10/butterfly-docs-5-0-release-notes.png
abbrlink: 5-0-release-notes
---

## Breaking Changes
Due to the integration and renaming of several settings, please reconfigure the `_config.yml` file when upgrading to version 5.0.

## Features

1. Added `macstyle` setting, removed `mac` / `mac light` theme setting
2. Integrated search-related settings
3. Modified code block settings
4. Added various layout options for homepage posts
5. Introduced a "Shuoshuo" page
6. Compatible with `hexo-blog-encrypt` plugin
7. Improved mobile menu opening effect
8. Added smooth scrolling feature
9. Support for writing mermaid diagrams in code blocks
10. Customizable article title position
11. Added full-screen button for code
12. Rounded design for friend link avatars
13. Optimized code using `hexo-util` and built-in parameters
14. Customizable search box placeholder text
15. Sidebar menu and button hidden if no menu is set
16. Increased card height for screens wider than 2000px
17. Font adjustment: Simplified Chinese uses YaHei, others use Heiti
18. Updated `plugins.yml`
19. New sidebar interface design
20. Added JS settings for Giscus
21. Adjusted position of Utterances JS settings
22. Added Utterances option settings
23. Modified Giscus theme settings
24. Multiple interface elements now have rounded designs
25. Option to choose between rounded or square interface styles
26. Added icons to album load buttons
27. Enhanced hover effect on tag pages
28. Adjusted sidebar hover effect
29. Minor interface element tweaks
30. Background image configuration no longer requires `url()`
31. Removed Messenger chat plugin
32. Updated Facebook version number
33. Added support for Hong Kong Traditional Chinese, Japanese, and Korean
34. New copy API replaces the old one
35. Added Umami analytics
36. Umami now tracks visits/visitor count
37. Increased transparency for Snackbar
38. Article title shown under nav when fixed on article pages

## Fix

1. Fixed Prism.js highlighting issue with new Hexo version
2. Fixed potential error when article tags are empty
3. Corrected errors in mermaid diagrams
4. Resolved console errors when menu is not set
5. Fixed Algolia search results per page setting issue
6. Resolved scrollbar issue in Algolia search results
7. Corrected appearance of up/down buttons in scrollbars
8. Fixed missing prefix in album remote links
9. Corrected extra space in label tag plugin
10. Resolved memory leak report in APlayer
11. Fixed Artalk comment loading bug when lazyload is false
12. Fixed gallery shaking bug

## Improvements

1. Optimized function calls under PJAX
2. Overall code optimization
3. Improved compatibility
4. Enhanced Lighthouse scores
5. Reduced unnecessary global variables when PJAX is off
6. Optimized Waline import compatibility
7. Improved page entry effects
8. Optimized code block toolbar display logic
9. Improved display of article title position on different screen widths
10. Optimized tag color generation algorithm to avoid too dark or light colors
11. Adjusted font color for Artalk and Waline in night mode to match the theme
12. Adjusted Algolia search loading animation position to avoid line breaks
13. Optimized handling when Algolia search results are empty
14. Improved hover effect for series articles
15. Optimized 404 page code
16. Resolved window shaking issue when search and sidebar are opened
17. Optimized code and performance of tabs tag plugin
18. Improved image loading logic in gallery tag plugin within tabs
19. Enhanced scrolling effect in the directory to keep the current title centered
20. Adjusted gallery group display number for screens wider than 1024px
21. Optimized background URL judgment
22. Modified some terminology
23. Optimized timeline tag style
24. Improved SEO
25. Enhanced latest comments in Artalk