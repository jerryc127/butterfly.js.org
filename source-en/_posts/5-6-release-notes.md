---
title: Butterfly 5.6 Release Notes
comments: false
date: 2026-07-16 17:05:25
tags:
  - Tutorial
  - Hexo
  - Release Notes
  - Butterfly
categories: Release Notes
keywords: 'hexo,butterfly,release notes,changelog,released,theme,doc,tutorial,documentation'
description:
top_img:
abbrlink: 5-6-release-notes
---

### New Features
- Add Knocket chat support with new `knocket.pug` template and config option
- Add script and CSS caching mechanism (`scriptCache` / `cssCache`) to prevent duplicate loads
- Add `rafThrottle` utility function based on `requestAnimationFrame`
- Add HTML escape function (`sanitizeString`) to prevent XSS injection

### Performance
- Replace TOC scroll handling with `IntersectionObserver` instead of throttle + iteration, significantly reducing scroll event computation
- Switch scroll handler from `btf.throttle` to `btf.rafThrottle`, syncing with browser render frame rate
- Add `rafThrottle` to `resize` event handler
- Change `scrollToDest` smooth scrolling from linear interpolation to easeOutQuart easing
- Cache `goUpElement` / `scrollPercentElement` in closure for `rightsideScrollPercent`, avoiding DOM queries on every scroll
- Cache `page-header` / `menus` elements in closure for `overflowPaddingR`
- Cache `document.getElementById` results in `sidebarFn` for hamburger menu toggle
- Wrap `adjustMenu`'s `classList.toggle` in `requestAnimationFrame`
- Refactor `forPostFn` to accept `$article` parameter; all internal functions (`addHighlightTool`, `addPhotoFigcaption`, `runLightbox`, `scrollFnToDo`, `addTableWrap`, `clickFnOfTagHide`, `tabsFn`) use the passed `$article` instead of repeated `document.getElementById('article-container')`
- Convert `tabsFn` to event delegation, binding click listener on `$article` instead of each `.tabs` element
- Convert `clickFnOfTagHide` to event delegation, binding on `$article` instead of individual `.hide-button` elements
- Rewrite `getActualHeight` to use `cloneNode(true)` + hidden insertion measurement instead of traversing parent nodes and modifying styles
- Change Traditional/Simplified Chinese lookup from `indexOf` to `Map.has` / `Map.get` for O(1) lookups
- Defer Chinese character mapping initialization (`getMaps`) to avoid unnecessary computation
- Change `translateButtonObject` in `tw_cn.js` to `let`, supporting re-query after pjax
- Refactor Mermaid gesture system: use `AbortController` for event listener lifecycle management to prevent duplicate bindings; add `stopPropagation` to wheel events to prevent scroll pass-through; cache `getBoundingClientRect` with dirty flag; batch DOM updates via `requestAnimationFrame`; normalize `deltaMode` for cross-browser compatibility
- Reduce Mermaid image preview `revokeObjectURL` timeout from 30s to 5s
- Switch MathJax to `ui/lazy` module for deferred rendering, removing the `renderActions.findScript` hack
- Change MathJax re-render to use `typesetClear` + `typesetPromise` instead of `texReset`
- Extract `resolvePostAsset` as independent function in `random_cover.js` to reduce duplication
- Change `getVersion` in `page.js` to reference `themeVersion` from module-level `require`, avoiding repeated `package.json` reads
- Fix darkmode time range judgment in `inject_head_js.js` for cross-midnight scenarios (`start > end`)

### Bug Fixes
- Fix Traditional/Simplified Chinese button text not updating after pjax (`translateButtonObject` changed to `let` and re-queried in `translateInitialization`)
- Fix `script[data-pjax]` replacement failure after pjax completion (add `item.parentNode` existence check)
- Fix `responseURL` potentially being `undefined` in pjax error handling, add null checks
- Fix `handleThemeChange` crash when `themeChange` is not an object (add `typeof fn !== 'function'` check)
- Fix `scrollFn` where `checkDocumentHeight()` returning early prevented scroll event binding
- Fix Mermaid chart jumping on scroll in Chrome (`svg.style.touchAction = 'none'` + `preventDefault` + `stopPropagation` on wheel events)
- Fix Mermaid gesture handlers binding repeatedly after themeChange/pjax (replace `__mermaidGestureBound` flag with `__mermaidAbortController` cleanup)
- Fix Mermaid configuration parse failure with no error feedback (add try/catch)
- Fix `gallery.js` `IMAGE_REGEX` `lastIndex` not resetting on repeated calls
- Fix XSS vulnerability in `flink.js` and `button.js` due to missing HTML escaping
- Fix `hide.js` `parseArgs` missing trim, causing parameters to have leading spaces
- Fix `series.js` module-level mutable `groups` state accumulating stale data across builds (add `before_generate` cleanup)
- Fix `score.js` duplicating `escapeHTML` implementation, switch to `hexo-util`'s `escapeHTML` with additional `{}` handling
- Fix `getArchiveLength.js` year count not accumulating in `monthly` mode
- Fix `getArchiveLength.js` key selection logic so `daily` mode correctly retrieves month counts
- Fix `related_post.js` computing `postDesc` prematurely; defer to render time
- Fix `page.js` timezone variable scope issue in `shuoshuoFN`
- Fix `page.js` `cloudTags` removing redundant `colorClass` variable and class
- Fix `page.js` `findArchivesTitle` recursion where `m[key]` might not be a string
- Fix `main.js` `fetchUrl` silently returning empty array on HTTP failure; now throws error
- Fix `main.js` `runJustifiedGallery` edge case handling when `limit` / `firstLimit` are invalid values
- Fix `main.js` `addJustifiedGallery` error handling when `data` is not an array
- Fix `main.js` `sanitizeString` from only replacing `"` to replacing `&`, `"`, `'`, `<`, `>` characters
- Fix `main.js` `forPostFn` skipping initialization when `hbe-container` exists
- Fix `main.js` gallery showing loading animation when data is empty

### Changed
- Mermaid gesture zoom from fixed factor (1.1/0.9) to continuous factor (`Math.pow(1.001, delta)`) for smoother operation
- Mermaid gesture viewBox bounds from computed on each move to pre-calculated `minW/maxW/minH/maxH`
- Remove unnecessary `typeof svg === 'string'` branch in Mermaid `openSvgInNewTab`
- Set MathJax `lazyMargin` to `200px`
- Change `adjustMenu` `hideMenuIndex` from inline to pre-declared
- Change `scrollFn` `isChatBtn` to `typeof window.chatBtn !== 'undefined'`
- Change `scrollFn` `innerHeight` to dynamically compute `window.innerHeight + 56` on each scroll