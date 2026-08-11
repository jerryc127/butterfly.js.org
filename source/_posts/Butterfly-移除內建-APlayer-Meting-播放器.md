---
title: Butterfly 移除內建 APlayer / Meting 後的替代方法
tags:
  - 教程
  - Hexo
  - 主題
  - butterfly
categories: 進階教程
keywords: 'hexo,butterfly,主題,doc,教程,aplayer,meting,music'
description: 說明 Butterfly 主題已移除內建 APlayer/Meting 音樂播放器，並提供類似替代方法
date: 2026-08-02 00:00:00
comments: false
abbrlink: butterfly-remove-built-in-aplayer-meting-alternative-methods
cover: https://oss.012700.xyz/butterfly/butterfly-docs-remove-built-in-aplayer-meting-alternative-methods.png
---

## 前言

本主題已將**內建的 APlayer / Meting 音樂播放器**支援移除。若你原本在網站中透過主題注入播放器（例如音樂頁、文章內播放器、懸浮播放器），更新後這些播放器將**不會再被主題自動載入**。

這篇文章說明：

- 移除影響了哪些東西
- 想要繼續使用的話，如何**改用替代方式**
- 不需要的話，如何**徹底清理**殘留資源

---

## 一、這次移除的內容

主題層級移除的程式碼如下（若你的網站完全沒有使用播放器，則以下都不需要處理）：

1. `themes/butterfly/layout/includes/third-party/aplayer.pug`
   - 原本負責載入 `APlayer` 的 CSS、`APlayer.js` 與 `Meting.js`，並處理 pjax 切頁時播放器銷毀／重跑。
2. `themes/butterfly/layout/includes/additional-js.pug`
   - 原本根據 `aplayer & aplayerInject` 判斷是否引入上面那個檔案，也已移除。
3. `themes/butterfly/source/css/_layout/third-party.styl` 與 `darkmode.styl`
   - `.aplayer` 的排版樣式與暗色模式調整。
4. `themes/butterfly/scripts/common/default_config.js`
   - `aplayerInject` 的預設配置。
5. `themes/butterfly/plugins.yml`
   - `aplayer_css`、`aplayer_js`、`meting_js` 的 CDN 資源宣告。

總結影響：

- 前台變數 `aplayer: true`（頁面 Front-matter）**已失效**。
- 配置 `aplayerInject`（全站每頁注入）**已失效**。
- 文章或頁面中的 `<div class="aplayer" ...>` 若無自行引入資源，將**不會顯示播放器**（會呈現空白或原封不動的 div）。

---

## 二、我想要繼續使用，該怎麼做？

主題不再幫你載入播放器，但只要自己引入資源即可，下面提供一種替代做法。

### 透過 `inject` 全站引入（最簡單）

在 `_config.butterfly.yml` 的 `inject` 區塊加入：

```yaml
inject:
  head:
    - '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">'
  bottom:
    - '<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>'
    - '<script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script>'
```

> 注意：本主題的 inject 鍵名為 `head`／`bottom`（插入位置在 `</head>` 與 `</body>` 之前）。

接著在需要的頁面寫入播放器 HTML 即可：

```html
<div class="aplayer" data-id="60198" data-server="netease" data-type="playlist" data-autoplay="true" muted></div>
```

若你開啟了 **pjax**，切換頁面時播放器可能不會自動重新初始化，請在 `inject` 的 `bottom` 額外注入下列腳本：

```html
<script>
  var __runMeting = function () {
    // 銷毀舊的播放器（保留 fixed 的懸浮播放器）
    if (window.aplayers) {
      try { window.aplayers.forEach(function (p) { if (!p.options.fixed) p.destroy(); }); } catch (e) {}
    }
    // 重新初始化頁面上的 APlayer
    if (typeof loadMeting === 'function' && document.getElementsByClassName('aplayer').length) {
      loadMeting();
    }
  };
  window.addEventListener('load', __runMeting);
  document.addEventListener('pjax:complete', __runMeting);
</script>
```

### 補上原本的 `.aplayer` 樣式

主題也一併移除了 `.aplayer` 的排版樣式。若希望播放器版面與原本一致，請在 `inject` 的 `head` 加入以下 `<style>`（包含 `beautify.enable` 時對播放器內列表的外觀修正）：

```html
<style>
  .aplayer {
    color: #4c4948;
  }
  .container .aplayer {
    margin: 0 0 20px;
  }
  /* 僅當 beautify.enable 開啟時需要（原主題按此條件注入） */
  .container .aplayer ol,
  .container .aplayer ul {
    margin: 0;
    padding: 0;
  }
  .container .aplayer li {
    margin: 0;
    padding: 0 15px;
  }
  .container .aplayer li::before {
    content: none;
  }
</style>
```

若使用 **暗色模式**，可再補上原本的暗色調整：

```css
.aplayer {
  filter: brightness(.8);
}
```

> 這些樣式非必要，只是為了讓播放器外觀與原主題更一致；不加也不影響播放器運作。

> 進階作法：也可以安裝 `hexo-tag-aplayer` 標籤外掛，用標籤外掛方式嵌入播放器，會比直接改主題檔好維護。

---

## 三、不需要了，如何徹底清理？

若你決定不再使用，請檢查並清理：

1. **設定移除播放器**：`_config.butterfly.yml`
   - 移除 `aplayerInject` 區塊（若存在）。
   - 移除 `inject` 中你自己加的 APlayer／Meting 的 `<link>`／`<script>`（如有）。
   - 若原本有 `Music: /music/` 的導覽，也一併刪除。
2. **頁面與文章**：
   - 刪除音樂頁（`source/music/`）。
   - 搜尋一段 `<div class="aplayer"...>`、`aplayer:`、`meting:`，於所有文章中移除。
3. 使用本文章第一節清單確認殘留位置，逐一清除。

---

## 四、更新後自查清單

更新主題後若發現「原本有播放器，現在消失了」，請依序檢查：

- [ ] `_config.butterfly.yml`（與主題 `_config.yml`）是否還保留 `aplayerInject`／`Music` 選單。
- [ ] 文章與頁面是否還有 `<div class="aplayer">` 標籤。
- [ ] 是否已在 `inject`（或 HEAD/BODY）自行加入 APlayer 與 Meting 的資源。
- [ ] 若有開 pjax，`pjax:complete` 時是否重新呼叫 `loadMeting()`。

以上步驟完成後，播放器即可正常且符合你想使用的設定。