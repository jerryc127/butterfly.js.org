---
title: Customize code coloring
tags:
  - Tutorial
  - Hexo
  - Theme
  - Butterfly
categories: Advanced Tutorials
keywords: 'hexo, butterfly, theme, documentation, tutorial'
description: Customizing Code Coloring
cover: https://jsd.012700.xyz/gh/jerryc127/CDN/img/CODE-COLOR-COVER.png
abbrlink: customize-code-coloring
date: 2020-06-13 20:41:59
comments: false
---

In the [Butterfly document - Theme Configuration Part 1](http://butterfly.js.org/en//posts/butterfly-docs-en-theme-config-one/), the process of using custom code highlighting themes has been explained.

This article serves as a practical tutorial on using custom code coloring.

## Highlight

We'll take the example of using the `Kimbie dark` theme for code coloring.

### Configure `hljs` to `true`

Modify the `_config.yml` file in the root directory of your Hexo project.

```yaml
highlight:
  enable: true
  line_number: true
  auto_detect: false
  tab_replace:
  hljs: true
```

### Configure `highlight_theme` to `false`

Edit the theme configuration file.

```yaml
highlight_theme: false
```

### Download and Modify the CSS File

Go to [Github](https://github.com/highlightjs/highlight.js/blob/master/src/styles/kimbie.dark.css) and find the `Kimbie dark` CSS.

Create a folder named `self` in the `source` folder of your Hexo project. Inside the `self` folder, create a file named `Kimbiedark.css`.

Copy the CSS code of `Kimbie dark` from Github and paste it into `Kimbiedark.css`. (Alternatively, you can directly download this CSS file from Github)

The content of **Kimbiedark.css** is as follows:

```css
/*
    Name:     Kimbie (dark)
    Author:   Jan T. Sott
    License:  Creative Commons Attribution-ShareAlike 4.0 Unported License
    URL:      https://github.com/idleberg/Kimbie-highlight.js
*/

/* Kimbie Comment */
.hljs-comment,
.hljs-quote {
  color: #d6baad;
}

/* Kimbie Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-meta {
  color: #dc3958;
}

/* Kimbie Orange */
.hljs-number,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-deletion,
.hljs-link {
  color: #f79a32;
}

/* Kimbie Yellow */
.hljs-title,
.hljs-section,
.hljs-attribute {
  color: #f06431;
}

/* Kimbie Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #889b4a;
}

/* Kimbie Purple */
.hljs-keyword,
.hljs-selector-tag,
.hljs-function {
  color: #98676a;
}

.hljs {
  display: block;
  overflow-x: auto;
  background: #221a0f;
  color: #d3af86;
  padding: 0.5em;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
```

Modify the css to

```css
/*
    Name:     Kimbie (dark)
    Author:   Jan T. Sott
    License:  Creative Commons Attribution-ShareAlike 4.0 Unported License
    URL:      https://github.com/idleberg/Kimbie-highlight.js
*/

/* Newly Added Content
  -------------------------------------
  --hl-color                  Font color of the code block 【Required】 (Copy the color from .hljs below)
  --hl-bg                     Background color of the code block 【Required】 (Copy the background from .hljs below)
  --hltools-bg: #321a0f       Background color of the top toolbar in the code block 【Optional】 (You can skip configuring this if you disable copy, lang, and shrink)
  --hltools-color: #fff       Font color of the top toolbar in the code block 【Optional】 (You can skip configuring this if you disable copy, lang, and shrink)
  --hlnumber-bg: #221a0f      Background color of line numbers in the code block 【Optional】 (You can skip configuring this if you disable line_number)
  --hlnumber-color: #fff      Font color of line numbers in the code block 【Optional】 (You can skip configuring this if you disable line_number)
  --hlscrollbar-bg: #d3af86   Color of the scrollbar in the code block 【Optional】 (By default, it takes the main theme color)
  --hlexpand-bg: #d3af86      Background color when the code block is expanded at the bottom 【Optional】 (You can skip configuring this if you disable highlight_height_limit)
*/

:root {
  --hl-color: #d3af86;
  --hl-bg: #221a0f;
  --hltools-bg: #321a0f;
  --hltools-color: #fff;
  --hlnumber-bg: #221a0f;
  --hlnumber-color: #fff;
  --hlscrollbar-bg: #d3af86;
  --hlexpand-bg: #d3af86;
}

/* Kimbie Comment */
.hljs-comment,
.hljs-quote {
  color: #d6baad;
}

/* Kimbie Red */
.hljs-variable,
.hljs-template-variable,
.hljs-tag,
.hljs-name,
.hljs-selector-id,
.hljs-selector-class,
.hljs-regexp,
.hljs-meta {
  color: #dc3958;
}

/* Kimbie Orange */
.hljs-number,
.hljs-built_in,
.hljs-builtin-name,
.hljs-literal,
.hljs-type,
.hljs-params,
.hljs-deletion,
.hljs-link {
  color: #f79a32;
}

/* Kimbie Yellow */
.hljs-title,
.hljs-section,
.hljs-attribute {
  color: #f06431;
}

/* Kimbie Green */
.hljs-string,
.hljs-symbol,
.hljs-bullet,
.hljs-addition {
  color: #889b4a;
}

/* Kimbie Purple */
.hljs-keyword,
.hljs-selector-tag,
.hljs-function {
  color: #98676a;
}

/* Modified content: Replace .hljs with #article-container figure.highlight .hljs *
/* ------------------------------------- */
#article-container figure.highlight .hljs {
  display: block;
  overflow-x: auto;
  background: #221a0f;
  color: #d3af86;
  padding: 0.5em;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}
```

### File Inclusion

Modify the `theme configuration file`

```yaml
inject:
  head:
    - <link rel="stylesheet" href="/self/Kimbiedark.css">
```

### Run Hexo

After running Hexo, you should be able to see the modified effect.

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-highlight-self-css.png)

## Prismjs

Using the `prism-duotone-light` theme for color scheme customization.

### Configure `highlight_theme` to `false`

Modify the `theme configuration file`

```yaml
highlight_theme: false
```

### Download and Modify CSS File

Find the CSS file for `prism-duotone-light` on [Github](https://github.com/PrismJS/prism-themes/blob/master/themes/prism-duotone-light.css)

Create a `self` folder in the `source` directory of Hexo and then create a `duotone.css` file inside the `self` folder.

Copy the CSS code for `prism-duotone-light` from Github to the `duotone.css` file. (You can also directly download this CSS from Github)

**prism-duotone-light** code is as follows:

```css
/*
Name:   Duotone Light
Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)

Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-morning-light.css)
Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
*/

code[class*="language-"],
pre[class*="language-"] {
	font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
	font-size: 14px;
	line-height: 1.375;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
	background: #faf8f5;
	color: #728fcb;
}

pre > code[class*="language-"] {
	font-size: 1em;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	text-shadow: none;
	background: #faf8f5;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	text-shadow: none;
	background: #faf8f5;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #b6ad9a;
}

.token.punctuation {
	color: #b6ad9a;
}

.token.namespace {
	opacity: .7;
}

.token.tag,
.token.operator,
.token.number {
	color: #063289;
}

.token.property,
.token.function {
	color: #b29762;
}

.token.tag-id,
.token.selector,
.token.atrule-id {
	color: #2d2006;
}

code.language-javascript,
.token.attr-name {
	color: #896724;
}

code.language-css,
code.language-scss,
.token.boolean,
.token.string,
.token.entity,
.token.url,
.language-css .token.string,
.language-scss .token.string,
.style .token.string,
.token.attr-value,
.token.keyword,
.token.control,
.token.directive,
.token.unit,
.token.statement,
.token.regex,
.token.atrule {
	color: #728fcb;
}

.token.placeholder,
.token.variable {
	color: #93abdc;
}

.token.deleted {
	text-decoration: line-through;
}

.token.inserted {
	border-bottom: 1px dotted #2d2006;
	text-decoration: none;
}

.token.italic {
	font-style: italic;
}

.token.important,
.token.bold {
	font-weight: bold;
}

.token.important {
	color: #896724;
}

.token.entity {
	cursor: help;
}

pre > code.highlight {
	outline: .4em solid #896724;
	outline-offset: .4em;
}

/* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
.line-numbers .line-numbers-rows {
	border-right-color: #ece8de;
}

.line-numbers-rows > span:before {
	color: #cdc4b1;
}

/* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 */
.line-highlight {
	background: rgba(45, 32, 6, 0.2);
	background: -webkit-linear-gradient(left, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0));
	background: linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0));
}
```

Modify the css to

```css
/* Newly Added Content
  ------------------------------------- 
  --hl-color                  Code box font color [Required] (Copy the color from pre[class*="language-"] below and paste it here)
  --hl-bg                     Code box background color [Required] (Copy the background from pre[class*="language-"] below and paste it here)
  --hltools-bg: #321a0f       Code box top toolbar background color [Optional] (You can omit this if you have turned off copy, lang, and shrink)
  --hltools-color: #fff       Code box top toolbar font color [Optional] (You can omit this if you have turned off copy, lang, and shrink)
  --hlnumber-bg: #221a0f      Code box line number background color [Optional] (You can omit this if you have turned off line_number)
  --hlnumber-color: #fff      Code box line number font color [Optional] (You can omit this if you have turned off line_number)
  --hlscrollbar-bg: #d3af86   Code box scrollbar color [Optional] (Defaults to the main theme color)
  --hlexpand-bg: #d3af86      Code box bottom expansion background color [Optional] (You can omit this if you have turned off highlight_height_limit)
*/

:root {
  --hl-color: #728fcb;
  --hl-bg: #faf8f5;
  --hltools-bg: xxxxxxx;
  --hltools-color: xxxxxxx;
  --hlnumber-bg: xxxxxxx;
  --hlnumber-color: xxxxxxxx;
  --hlscrollbar-bg: xxxxx;
  --hlexpand-bg: xxxxxxx
}


/* ------------------------------------- */

/* You can delete these (or keep them if there are conflicts) */
/* ------------------------------------- */
code[class*="language-"],
pre[class*="language-"] {
	font-family: Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace;
	font-size: 14px;
	line-height: 1.375;
	direction: ltr;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
	background: #faf8f5;
	color: #728fcb;
}

pre > code[class*="language-"] {
	font-size: 1em;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	text-shadow: none;
	background: #faf8f5;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	text-shadow: none;
	background: #faf8f5;
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
}
/* ------------------------------------- */
/* Up to this point, you can delete */

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: #b6ad9a;
}

.token.punctuation {
	color: #b6ad9a;
}

.token.namespace {
	opacity: .7;
}

.token.tag,
.token.operator,
.token.number {
	color: #063289;
}

.token.property,
.token.function {
	color: #b29762;
}

.token.tag-id,
.token.selector,
.token.atrule-id {
	color: #2d2006;
}

code.language-javascript,
.token.attr-name {
	color: #896724;
}

code.language-css,
code.language-scss,
.token.boolean,
.token.string,
.token.entity,
.token.url,
.language-css .token.string,
.language-scss .token.string,
.style .token.string,
.token.attr-value,
.token.keyword,
.token.control,
.token.directive,
.token.unit,
.token.statement,
.token.regex,
.token.atrule {
	color: #728fcb;
}

.token.placeholder,
.token.variable {
	color: #93abdc;
}

.token.deleted {
	text-decoration: line-through;
}

.token.inserted {
	border-bottom: 1px dotted #2d2006;
	text-decoration: none;
}

.token.italic {
	font-style: italic;
}

.token.important,
.token.bold {
	font-weight: bold;
}

.token.important {
	color: #896724;
}

.token.entity {
	cursor: help;
}

pre > code.highlight {
	outline: .4em solid #896724;
	outline-offset: .4em;
}

/* overrides color-values for the Line Numbers plugin
 * http://prismjs.com/plugins/line-numbers/
 */
.line-numbers .line-numbers-rows {
	border-right-color: #ece8de;
}

.line-numbers-rows > span:before {
	color: #cdc4b1;
}

/* overrides color-values for the Line Highlight plugin
 * http://prismjs.com/plugins/line-highlight/
 */
.line-highlight {
	background: rgba(45, 32, 6, 0.2);
	background: -webkit-linear-gradient(left, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0));
	background: linear-gradient(to right, rgba(45, 32, 6, 0.2) 70%, rgba(45, 32, 6, 0));
}
```

### Import Files

Modify the `theme configuration file`

```yaml
inject:
  head:
    - <link rel="stylesheet" href="/self/duotone.css">
```

### Run Hexo

After running Hexo, you should be able to see the modified effect.

![image-20200831000324474](https://jsd.012700.xyz/gh/jerryc127/CDN/img/butterfly-custom-code-color-prismjs.png)