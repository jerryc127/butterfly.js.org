---
title: Butterfly 5.3 Release Notes
comments: false
date: 2025-01-10 18:47:26
tags:
  - en
  - docs
  - hexo
categories: Release Notes
keywords: 'hexo,butterfly,更新日誌,Release Notes,changelog,released,主題,doc,教程,文件'
description:
top_img:
abbrlink: 5-3-release-notes
---

## New Features

1. Display chat button only after js is loaded
2. Removed Pangu
3. Added structured data support
4. Added avif to the list of supported image formats
5. Updated lazyload configuration to support native lazyload functionality
6. Code optimization
7. Improved pageType logic
8. Fallback to monospace for code font, then to Chinese and sans-serif
9. Updated dependency versions in plugins.yml to the latest
10. Optimized aside_archives for better performance and readability
11. Improved documentation for inlineImg and timeline tags, optimized timeline logic
12. Updated gallery tag to support additional parameters, optimized image display logic
13. Optimized random cover filter logic to avoid consecutive repeats
14. Limited the display of latest comments to between 1-10 items

## Fixes

1. Fixed the bug where artalk's latest comments showed pending or banned comments
2. Fixed the bug where chartjs did not load after decrypting articles