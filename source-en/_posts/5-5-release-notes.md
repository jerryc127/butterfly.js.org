---
title: Butterfly 5.5 Release Notes
comments: false
date: 2025-09-09 16:15:03
tags:
  - Tutorial
  - Hexo
  - Release Notes
  - Butterfly
categories: Release Notes
keywords: 'hexo,butterfly,release notes,changelog,released,theme,doc,tutorial,documentation'
description:
top_img:
abbrlink: 5-5-release-notes
---

## New Features

- Improved lazyload filter, precisely handling img tag src attributes
- Local search adds pagination
- Shuoshuo page changed to pagination navigation
- Right bottom button adds effect
- Support custom script name #1732
- Add hover transition animation for subdirectory items
- Optimize sidebar subdirectory display, add transition animation
- Add card category expansion animation
- Adapt Mathjax 4
- Refactor Algolia search, migrate from InstantSearch.js to directly use Algoliasearch API
- Refactor configuration management, add default configuration file and optimize comment system configuration
- Update README and README_CN files, enhance content clarity and readability
- Update tag page style, enhance interaction and optimize animation
- Add button effect style, enhance button interaction experience
- Add backup alternate name

## Improvements

- Integrate search, reduce unnecessary code redundancy
- Adjust right scroll percentage display logic, improve animation effect
- Optimize night mode for note, button, label tag plugins, optimize night mode display for article navigation and recommendations
- Disable structured data and update default configuration format
- Optimize search interface style and user experience

## Fixes

- Enhance Umami Analytics data loading and error handling logic
- Search ensures no truncation of HTML tags in the middle, enhance content cutting logic
- Adjust max width to 60% to improve layout responsiveness
- Add error handling to prevent Pjax failure #1734
- Fix comment aggregation issue caused by MD5 function #1718
