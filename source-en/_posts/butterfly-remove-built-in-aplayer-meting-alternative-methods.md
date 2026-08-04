---
title: Alternative Methods After Butterfly Removes Built-in APlayer / Meting
comments: false
date: 2026-08-02 00:00:00
tags:
  - en
  - docs
  - hexo
categories:
  - Docs
  - EN
  - Advanced Tutorials
keywords: 'hexo,butterfly,theme,doc,教程,文檔,hexo-butterfly'
description: Explains that the Butterfly theme has removed the built-in APlayer/Meting music player and provides alternative methods
top_img:
cover: https://oss.012700.xyz/butterfly/butterfly-remove-built-in-aplayer-meting-alternative-methods-en.png
abbrlink: butterfly-remove-built-in-aplayer-meting-alternative-methods
---

## Introduction

This theme has **removed support for the built-in APlayer / Meting music player**. If you previously injected a player into your site via the theme (e.g., music page, in-article player, floating player), these players will **no longer be automatically loaded by the theme** after updating.

This article explains:

- What was affected by the removal
- How to **use alternative methods** if you still want to keep using it
- How to **completely clean up** leftover resources if you no longer need it

---

## 1. What Was Removed

The following code was removed at the theme level (if your site does not use a player at all, you don't need to handle any of this):

1. `themes/butterfly/layout/includes/third-party/aplayer.pug`
   - Previously responsible for loading `APlayer` CSS, `APlayer.js`, and `Meting.js`, and handling player destroy/re-init on pjax page transitions.
2. `themes/butterfly/layout/includes/additional-js.pug`
   - Previously conditionally included the above file based on `aplayer & aplayerInject`, now removed.
3. `themes/butterfly/source/css/_layout/third-party.styl` and `darkmode.styl`
   - `.aplayer` layout styles and dark mode adjustments.
4. `themes/butterfly/scripts/common/default_config.js`
   - `aplayerInject` default configuration.
5. `themes/butterfly/plugins.yml`
   - `aplayer_css`, `aplayer_js`, `meting_js` CDN resource declarations.

Summary of impact:

- The front-matter variable `aplayer: true` **is now ineffective**.
- The `aplayerInject` config (site-wide injection) **is now ineffective**.
- `<div class="aplayer" ...>` in articles or pages will **not display the player** unless you import the resources yourself (it will show a blank or unchanged div).

---

## 2. I Want to Keep Using It — What Should I Do?

The theme no longer loads the player for you, but you can simply import the resources yourself. Below is an alternative approach.

### Site-wide Injection via `inject` (Simplest)

Add the following to the `inject` section in `_config.butterfly.yml`:

```yaml
inject:
  head:
    - '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css">'
  bottom:
    - '<script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js"></script>'
    - '<script src="https://cdn.jsdelivr.net/npm/meting@2.0.1/dist/Meting.min.js"></script>'
```

> Note: The inject keys in this theme are `head` / `bottom` (inserted before `</head>` and `</body>` respectively).

Then add the player HTML on the desired page:

```html
<div class="aplayer" data-id="60198" data-server="netease" data-type="playlist" data-autoplay="true" muted></div>
```

If you have **pjax** enabled, the player may not automatically re-initialize when switching pages. Add the following script to the `bottom` inject:

```html
<script>
  var __runMeting = function () {
    // Destroy old players (keep the fixed floating player)
    if (window.aplayers) {
      try { window.aplayers.forEach(function (p) { if (!p.options.fixed) p.destroy(); }); } catch (e) {}
    }
    // Re-initialize APlayer on the page
    if (typeof loadMeting === 'function' && document.getElementsByClassName('aplayer').length) {
      loadMeting();
    }
  };
  window.addEventListener('load', __runMeting);
  document.addEventListener('pjax:complete', __runMeting);
</script>
```

### Adding Back the `.aplayer` Styles

The theme also removed the `.aplayer` layout styles. If you want the player to look the same as before, add the following `<style>` to the `head` inject (includes appearance fixes for the playlist when `beautify.enable` is turned on):

```html
<style>
  .aplayer {
    color: #4c4948;
  }
  .container .aplayer {
    margin: 0 0 20px;
  }
  /* Only needed when beautify.enable is on (the original theme injected this conditionally) */
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

If you use **dark mode**, you can also add the original dark mode adjustment:

```css
.aplayer {
  filter: brightness(.8);
}
```

> These styles are optional — they only make the player appearance more consistent with the original theme. Not adding them won't affect player functionality.

> Advanced approach: You can also install the `hexo-tag-aplayer` tag plugin to embed players via tag plugins, which is easier to maintain than modifying theme files directly.

---

## 3. No Longer Needed — How to Clean Up Completely?

If you decide to stop using the player, check and clean up the following:

1. **Config removal**: `_config.butterfly.yml`
   - Remove the `aplayerInject` section (if it exists).
   - Remove any APlayer / Meting `<link>` / `<script>` you added to `inject`.
   - If you had a `Music: /music/` navigation item, remove it as well.
2. **Pages and articles**:
   - Delete the music page (`source/music/`).
   - Search for `<div class="aplayer"...>`, `aplayer:`, `meting:` in all articles and remove them.
3. Use the checklist from Section 1 to confirm no leftovers remain, and clean them up one by one.

---

## 4. Post-Update Self-Check

If you find that "the player was there before but now it's gone" after updating the theme, check the following in order:

- [ ] Does `_config.butterfly.yml` (and the theme `_config.yml`) still contain `aplayerInject` / `Music` menu?
- [ ] Do articles and pages still have `<div class="aplayer">` tags?
- [ ] Have you added APlayer and Meting resources yourself via `inject` (or HEAD/BODY)?
- [ ] If pjax is enabled, is `loadMeting()` being re-called on `pjax:complete`?

After completing these steps, the player should work normally and match your desired configuration.
