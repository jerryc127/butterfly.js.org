---
title: Butterfly 安裝文檔(一) 快速開始
date: 2020-05-28 22:31:46
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
categories: Docs文檔
keywords: 'hexo,butterfly,主題,doc,教程,文檔'
description: Butterfly安裝文檔-快速開始
cover: https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-docs-01-cover.png
abbrlink: 21cfbf15
sticky: 100
comments: false
---

{% note green 'fas fa-rocket' %}

 📚  文檔目錄

{% post_link Butterfly-安裝文檔-一-快速開始 ' 🚀 快速開始' %} - {% post_link Butterfly-安裝文檔-二-主題頁面 ' 📑 主題頁面' %} - {% post_link Butterfly-安裝文檔-三-主題配置-1 ' 📌 主題配置-1' %} - {% post_link Butterfly-安裝文檔-四-主題配置-2 ' ⚔️ 主題配置-2' %} - {% post_link Butterfly-安裝文檔-五-主題問答 ' ❓ 主題問答' %} - {% post_link Butterfly-安裝文檔-六-進階教程 ' ⚡️ 進階教程' %}

{% endnote %}

{% note orange 'fas fa-magic' %}

你可以通過右下角的 **簡** 按鈕切換為簡體顯示 

{% endnote %}

***

`hexo-theme-butterfly` 是基於 [hexo-theme-melody](https://github.com/Molunerfinn/hexo-theme-melody) 的基礎上進行開發的。

## 安裝

{% tabs butterfly-install %}

<!-- tab Git安裝 (Github) @fab fa-github-square -->

**穩定版【建議】**

在你的 Hexo 根目錄裏

```powershell
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

**測試版**

> 測試版可能存在 bug，追求穩定的請安裝穩定版

如果想要安裝比較新的 dev 分支，可以

```powershell
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

{% note info %}

升級方法：在主題目錄下，運行 `git pull`

{% endnote %}

<!-- endtab -->



<!-- tab Git安裝 (Gitee) @fab fa-git-square -->

**穩定版【建議】**

在你的 Hexo 根目錄裏

```powershell
git clone -b master https://gitee.com/immyw/hexo-theme-butterfly.git themes/butterfly
```

**測試版**

> 測試版可能存在Bugs，追求穩定的請安裝穩定版

如果想要安裝比較新的dev分支，可以

```powershell
git clone -b dev https://gitee.com/immyw/hexo-theme-butterfly.git themes/butterfly
```

{% note info %}

升級方法：在主題目錄下，運行 `git pull`

{% endnote %}

<!-- endtab -->



<!-- tab npm安裝@fab fa-npm -->

> 此方法只支持 Hexo 5.0.0 以上版本
>
> ***通過 npm 安裝並不會在 themes 裏生成主題文件夾，而是在 node_modules 裏生成***

在你的 Hexo 根目錄裏

```powershell
npm install hexo-theme-butterfly
```

{% note info %}

升級方法：在 Hexo 根目錄下，運行 `npm update hexo-theme-butterfly`

{% endnote %}

<!-- endtab -->

{% endtabs %}

## 應用主題

修改 Hexo 根目錄下的 `_config.yml`，把主題改為 `butterfly`

```yaml
theme: butterfly
```

## 安裝插件

如果你沒有 pug 以及 stylus 的渲染器，請下載安裝：

```powershell
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## 升級建議

{% note blue 'fas fa-train' %}

升級完成後，請到 Github 的 [Releases](https://github.com/jerryc127/hexo-theme-butterfly/releases) 界面 或者 [文檔七](https://butterfly.js.org/posts/198a4240/) 查看新版的更新內容。

裏面有標注  `_config` 文件的變更內容（如有），請根據實際情況更新你的配置內容。

{% endnote %}

為了減少升級主題後帶來的不便，請使用以下方法（**建議，可以不做**）。

在 hexo 的根目錄創建一個文件 `_config.butterfly.yml`，並把**主題**目錄的 `_config.yml` **內容**複製到 `_config.butterfly.yml` 去。( **注意: 複製的是主題的 `_config.yml` ，而不是 hexo 的 `_config.yml`**)

> **注意：** 不要把主題目錄的 `_config.yml` 刪掉

> **注意：** 以後只需要在 `_config.butterfly.yml` 進行配置就行。
> 如果使用了 `_config.butterfly.yml`， 配置主題的 `_config.yml` 將不會有效果。

Hexo會自動**合併**主題中的 `_config.yml` 和 `_config.butterfly.yml` 裏的配置，如果存在同名配置，會使用 `_config.butterfly.yml` 的配置，其優先度較高。

![image-20200805191531090](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-docs-install-suggestion-1.png)

{% btn '/posts/dc584b87/',📑 Butterfly 安裝文檔(二) 主題頁面,far fa-hand-point-right,block right larger %}
