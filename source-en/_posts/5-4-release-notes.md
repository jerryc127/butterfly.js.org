---
title: Butterfly 5.4 Release Notes
comments: false
date: 2025-07-04 22:54:54
tags:
  - en
  - docs
  - hexo
categories: Release Notes
keywords: 'hexo,butterfly,更新日誌,Release Notes,changelog,released,主題,doc,教程,文件'
description:
top_img:
abbrlink: 5-4-release-notes
---

## New Features

1. Update dependency versions to latest in `plugins.yml`
2. Support for Fancybox v6
3. Add configuration option to display article title in navigation bar
4. Add hover tooltip to show "Back to Home" text in article page navigation bar
5. Add Google Tag Manager configuration support
6. Add animation effects for right-side configuration button, update related configurations and template logic
7. Update footer configuration, add navigation bar and copyright information, improve styles and structure

## Bug Fixes

1. Fix truncateContent function to properly handle empty content
2. Fix card_archives counting bug
3. Fix pagination order logic
4. Fix getBgPath function to use this.url_for for correct background image path

## Improvements

1. Hide navigation bar when per_page is set to 0
2. Optimize truncateContent function, encrypted articles do not show auto-truncated content
3. Add homepage styles to support word wrapping