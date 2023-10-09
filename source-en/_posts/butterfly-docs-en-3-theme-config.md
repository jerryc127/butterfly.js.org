---
title: Butterfly document - Theme Configuration Part 1
comments: false
date: 2023-06-30 15:26:47
tags:
  - en
  - docs
  - hexo
categories:
  - Docs
  - EN
keywords: 'hexo,butterfly,theme,doc,教程,文檔,hexo-butterfly'
description:
top_img:
cover: https://jsd.012700.xyz/gh/jerryc127/CDN@m2/img/butterfly-docs-en-theme-config-one.png
abbrlink: butterfly-docs-en-theme-config-one
---

{% note orange 'fas fa-language' %}

This article is translated from ChatGPT.

{% endnote %}

{% note blue 'fas fa-bullhorn' %}

 🦋 Butterfly has been updated to [4.10](https://github.com/jerryc127/hexo-theme-butterfly/releases/tag/4.10).

{% endnote %}

{% note green 'fas fa-rocket' %}

 📚  Table of Contents

{% post_link butterfly-docs-en-1-get-started ' 🚀 Get Started' %} - {% post_link butterfly-docs-en-2-theme-pages ' 📑 Theme Pages' %} - {% post_link butterfly-docs-en-3-theme-config ' 📌 Theme Configuration Part 1' %} - {% post_link butterfly-docs-en-4-theme-config-2 ' ⚔️ Theme Configuration Part 2' %} - {% post_link butterfly-docs-en-5-theme-q-a ' ❓ Q&A' %} - {% post_link butterfly-docs-en-6-advanced-tutorial ' ⚡️ Advanced Tutorials' %}

{% endnote %}

***

## Language

Modify the site configuration file `_config.yml`.

The default language is set to English (en).

The theme supports three languages:

- default (English)
- zh-CN (Simplified Chinese)
- zh-TW (Traditional Chinese)

## Website Information

To modify various data on the website, such as the title, subtitle, and email address, please edit the `_config.yml` file located in the root directory of your blog.

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/20191120000444.png)

## Navigation Bar Settings

### Parameter Configuration

In the theme configuration file, you can find the following parameters for setting up the navigation bar:

```yaml
nav:
  logo: #image
  display_title: true
  fixed: false # fixed navigation bar
```

| Parameter     | Explanation                                       |
| ------------- | -------------------------------------------------- |
| logo          | The logo of the website, supporting image URLs.   |
| display_title | Whether to display the website title. Use `true` or `false`. |
| fixed         | Whether to fix the navigation bar at the top. Use `true` or `false`. |

### Menu/Directory

To modify the navigation menu, edit the "Theme Configuration File" as follows:

```yaml
  Home: / || fas fa-home
  Archives: /archives/ || fas fa-archive
  Tags: /tags/ || fas fa-tags
  Categories: /categories/ || fas fa-folder-open
  List||fas fa-list:
    Music: /music/ || fas fa-music
    Movie: /movies/ || fas fa-video
  Link: /link/ || fas fa-link
  About: /about/ || fas fa-heart
```

Each item in the menu is specified with a format of `/xxx/ || icon_name`. If you don't want to display an icon, you can omit the `icon_name`.

The default behavior for subdirectories is to be expanded. If you want them to be hidden, you can add 'hide' to the configuration of the subdirectory

```yaml
  List||fas fa-list||hide:
    Music: /music/ || fas fa-music
    Movie: /movies/ || fas fa-video
```

**Note:** The navigation text can be customized as desired.

For example:

```markdown
menu:
  首頁: / || fas fa-home
  時間軸: /archives/ || fas fa-archive
  標籤: /tags/ || fas fa-tags
  分類: /categories/ || fas fa-folder-open
  清單||fa fa-heartbeat:
    音樂: /music/ || fas fa-music
    照片: /Gallery/ || fas fa-images
    電影: /movies/ || fas fa-video
  友鏈: /link/ || fas fa-link
  關於: /about/ || fas fa-heart
```

![Example Navigation Menu](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-menu.png)

## Code Blocks

{% note info %}

All code block features mentioned here only apply to the built-in code rendering in Hexo.

If you use a third-party renderer, they may not work as expected.

{% endnote %}

### Code Highlight Themes

{% tabs highlight-theme %}

<!-- Default Theme Tab -->
`Butterfly` supports 6 code highlight styles:

- darker
- pale night
- light
- ocean
- mac
- mac light

To modify the theme, edit the `theme_config` file.

```yaml
highlight_theme: light
```

> darker

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-darker.png)

> pale night

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-pale-night.png)

> light

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-light.png)

> ocean

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-highlight-ocean.png)

> mac

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-highlight-mac.png)

> mac light

![image-20200731175026827](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-mac-light.png)

<!-- endtab -->

<!-- tab Custom Theme -->

Starting from version 3.0, the theme supports custom code color themes.

To learn how to create a custom theme, refer to the following article:

{% post_link customize-code-coloring 'Custom Code Colors' %}

<!-- endtabs -->

{% endtabs %}

### Code Copy

The theme supports code copy functionality.

To enable code copy, edit the `theme_config` file.

```yaml
highlight_copy: true
```

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-copy.png)

### Code Blocks Expansion/Collapse

By default, code blocks are automatically expanded. You can choose to have all code blocks in a collapsed state, and users can click the '>' symbol to expand the code.

- true: All code blocks are not expanded and need to be opened by clicking '>'.
- false: Code blocks are expanded, and there is a '>' button to collapse them.
- none: The '>' button is not displayed.

To modify the behavior, edit the `theme_config` file.

```yaml
highlight_shrink: true # Code blocks are not expanded, need to click '>' to open.
```

{% note info %}

You can also add the `highlight_shrink` parameter in the front-matter of a post/page to configure it independently.

When `highlight_shrink` in the **theme_config** is set to true, you can add `highlight_shrink: false` in the front-matter to individually configure the code block expansion for that particular post.

When `highlight_shrink` in the **theme_config** is set to false, you can add `highlight_shrink: true` in the front-matter to individually configure the code block collapse for that particular post.

{% endnote %}

`highlight_shrink: true`

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-highlight-shrink-true.png)

`highlight_shrink: false`

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-highlight-shrink-false.png)

`highlight_shrink: none`

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-highlight-shirk-none.png)

### Code Line Wrapping

By default, Hexo does not automatically wrap lines in code blocks during compilation. If you don't want horizontal scrollbars in the code block area, you can consider enabling this feature.

To enable line wrapping, edit the `theme_config` file.

```yaml
code_word_wrap: true
```

If you are using the `highlight` renderer, you need to find the Hexo configuration file `_config.yml` and change `line_number` to `false`:

```yaml
highlight:
  enable: true
  line_number: false # <- Change this line
  auto_detect: false
  tab_replace:
```

If you are using the `prismjs` renderer, you need to find the Hexo configuration file `_config.yml` and change `line_number` to `false`:

```yaml
prismjs:
  enable: false
  preprocess: true
  line_number: false # <- Change this line
  tab_replace: ''
```

> Before setting `code_word_wrap`:

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-word-wrap-before.png)

> After setting `code_word_wrap`:

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-word-wrap-after.png)

### Code Height Limit

> Supported from version 3.7.0 and above.

You can set a limit on the code block height, and the overflow will be hidden, with an expand button displayed.

```yaml
highlight_height_limit: false # unit: px
```

Note:

1. The unit is `px`, simply add the number, e.g., 200.
2. The actual height limit is `highlight_height_limit + 30 px`. An extra 30px is added to prevent the expand button from appearing when the code's height is only slightly greater than the `highlight_height_limit`.
3. Does not apply to hidden code blocks (CSS set to display: none).

![hexo-theme-butterfly-docs-highlight-heigh-limit](https://jsd.012700.xyz/gh/jerryc127/CDN@m2/img/hexo-theme-butterfly-docs-highlight-heigh-limit.gif)

## Social Settings

Butterfly supports [Font Awesome v6](https://fontawesome.com/icons?from=io) icons.

The format for writing is `icon name: url || descriptive text || color`.

```yaml
social:
  fab fa-github: https://github.com/xxxxx || Github || "#hdhfbb"
  fas fa-envelope: mailto:xxxxxx@gmail.com || Email || "#000000"
```

You can find the icon names in the image below:

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-fontawesome.png)

PC:

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-social-icon-pc.png)

Mobile:

![1560603353743](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-socila-icon-mobile.png)

## Avatar

Edit the `theme_config` file

```yaml
avatar:
  img: /img/avatar.png
  effect: true # spinning effect for the avatar
```

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-avatar.png)

## Top Image

{% note info %}

To disable all top image, you can directly configure `disable_top_img: true`.

{% endnote %}

{% note primary %}

The acquisition order of the top image is as follows: if none is configured, the top image won't be displayed.

1. Page Top Image Acquisition Order:

   `Individual configured top_img` > `default_top_img in the configuration file`

2. Article Page Top Image Acquisition Order:

   `Individual configured top_img` > `cover` > `default_top_img in the configuration file`

{% endnote %}

Values in the configuration:

| Configuration        | Explanation                                                  |
| -------------------- | ------------------------------------------------------------ |
| index_img            | Top image for the home page                                  |
| default_top_img      | Default top image, displayed when top_img is not configured on the page |
| archive_img          | Top image for archive pages                                  |
| tag_img              | Default top image for tag sub-pages                          |
| tag_per_img          | Top image for tag sub-pages, can be configured for each tag  |
| category_img         | Default top image for category sub-pages                     |
| category_per_img     | Top image for category sub-pages, can be configured for each category |

For other pages (tags/categories/custom pages) and article pages, please set `front-matter` in the corresponding md file to configure `top_img`.

All top_img configurations above support the following values:

> **Versions below 3.2.0** only support
>
> - Empty, true, and false - display the default color
> - img link - display the configured image

| Configuration Values                                          | Effect                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Empty                                                        | Display the default top_img (if available), otherwise display the default color<br> (If top_img is empty on the article page, the value of cover will be displayed) |
| img link                                                     | Link to the image, displaying the configured image          |
| Colors (<br>HEX value - \#0000FF<br>RGB value - rgb(0,0,255)<br>Color word - orange<br>Gradient color - linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)<br>) | Corresponding colors                                         |
| transparent                                                  | Transparent                                                  |
| false                                                        | Do not display the top_img                                   |

`tag_per_img` and `category_per_img` are newly added in version 3.2.0, allowing separate configurations for tags and categories.

It is not recommended to configure different top images for each tag and category, as having too many configurations can slow down the generation speed.

```yaml
tag_per_img:
  aplayer: https://xxxxxx.png
  android: ddddddd.png
  
category_per_img:
  隨想: hdhdh.png
  推薦: ddjdjdjd.png
```

> top_img: false

![image-20200924224536013](https://jsd.012700.xyz/gh/jerryc127/CDN/img/theme-butterfly-docs-page-top-img-false.png)

![image-20201027210949089](https://jsd.012700.xyz/gh/jerryc127/CDN/img/theme-butterfly-docs-post-top-img-false-new.png)

> top_img: orange

![image-20200924225024153](https://jsd.012700.xyz/gh/jerryc127/CDN/img/theme-butterfly-docs-top-img-orange.png)

> top_img: 'linear-gradient(20deg, #0062be,#925696, #cc426e, #fb0347)'

![image-20200924225300934](https://jsd.012700.xyz/gh/jerryc127/CDN/img/theme-butterfly-docs-top-img-color.png)


## Article Cover

In the markdown file of an article, you can add a `cover` field in the `Front-matter` section and provide the URL of the image you want to display as the cover.

If you don't configure the `cover` field, you can set it to display the default cover.

If you don't want to display the cover on the homepage, you can set it to `false`.

The order of obtaining the article cover is: `Front-matter cover` > `default_cover in the configuration file` > `false`

To modify the theme configuration file, use the following YAML structure:

```yaml
cover:
  # Whether to display the article cover on the homepage
  index_enable: true
  aside_enable: true
  archives_enable: true
  # The position of the cover display on the homepage
  # Three possible values: left, right, both
  position: both
  # Default cover to display when no specific cover is configured
  default_cover: 
```

Explanation of parameters:

| Parameter        | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| index_enable    | Whether to display article covers on the home page          |
| aside_enable    | Whether to display article covers in the sidebar            |
| archives_enable | Whether to display article covers on the archives page      |
| position        | The position of the article cover on the main page cards<br />- left: all covers displayed on the left<br />- right: all covers displayed on the right<br />- both: covers displayed alternately on the left and right |
| default_cover   | Default cover, can be a URL link/color/gradient color, etc.  |

When configuring multiple cover images, a random image will be selected as the cover. In this case, the configuration should be:

```yaml
default_cover:
  - https://jsd.012700.xyz/gh/jerryc127/CDN@latest/cover/default_bg.png
  - https://jsd.012700.xyz/gh/jerryc127/CDN@latest/cover/default_bg2.png
  - https://jsd.012700.xyz/gh/jerryc127/CDN@latest/cover/default_bg3.png
```

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-cover.png)
![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-cover-show.png)

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-cover-false.png)

> left

![cover position: left](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-cover-left.png)

> right

![cover position: right](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-cover-right.png)

> both

![cover position: both](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-cover-both.png)


## Meta Display

The `post_meta` option is used to display relevant information about the articles.

To modify the theme configuration file, use the following YAML structure:

```yaml
post_meta:
  page:
    date_type: both # created or updated or both, display creation date or update date or both on the homepage
    date_format: relative # date/relative, display the date or relative date
    categories: true # true or false, whether to display categories on the homepage
    tags: true # true or false, whether to display tags on the homepage
    label: true # true or false, whether to display descriptive text
  post:
    date_type: both # created or updated or both, display creation date or update date or both on the article page
    date_format: relative # date/relative, display the date or relative date
    categories: true # true or false, whether to display categories on the article page
    tags: true # true or false, whether to display tags on the article page
    label: true # true or false, whether to display descriptive text
```

Explanation of parameters:

- For the homepage (`page`):
  - `date_type`: Display the creation date (`created`), update date (`updated`), or both (`both`) on the homepage.
  - `date_format`: Display the date (`date`) or a relative date (`relative`) on the homepage.
  - `categories`: Whether to display the categories on the homepage (`true` or `false`).
  - `tags`: Whether to display the tags on the homepage (`true` or `false`).
  - `label`: Whether to display descriptive text on the homepage (`true` or `false`).

- For the article page (`post`):
  - `date_type`: Display the creation date (`created`), update date (`updated`), or both (`both`) on the article page.
  - `date_format`: Display the date (`date`) or a relative date (`relative`) on the article page.
  - `categories`: Whether to display the categories on the article page (`true` or `false`).
  - `tags`: Whether to display the tags on the article page (`true` or `false`).
  - `label`: Whether to display descriptive text on the article page (`true` or `false`).

> Homepage

![homepage meta](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-page-meta.png)

> Article Page

![article page meta](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-info.png)

![article page tags](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-tag.png)

The `date_format` parameter was introduced in version 3.2.0, allowing you to configure whether to display specific dates or relative dates.

> Relative Time:

![relative time](https://jsd.012700.xyz/gh/jerryc127/CDN/img/theme-butterfly-docs-relative-time.png)

> Full Date:

![full date](https://jsd.012700.xyz/gh/jerryc127/CDN/img/theme-butterfly-docs-full-date.png)

## Homepage Article Excerpt (Auto Excerpt and Article Description)

Due to the theme's UI design, the "Homepage Article Excerpt" supports only "Auto Excerpt" and "Article Description."

In `butterfly`, there are four options available:

1. **description:** Only display the article description.
2. **both:** Prioritize displaying the article description; if there is no description configured, it will display the auto excerpt content.
3. **auto_excerpt:** Only display the auto excerpt.
4. **false:** Do not display the article content.

To configure, modify the `theme configuration file`:

```yaml
index_post_content:
  method: 3
  length: 500 # If you set the method to 2 or 3, you need to configure the length
```

To add the `description` in the front-matter:

![article description](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-description.png)

## Page Anchors

When you enable page anchors, the page links will update according to the header ID when scrolling. (Note: Each update will create a new history entry. So if an article has many anchors, there will be many history entries in the browser.)

To configure, modify the `theme configuration file`:

```yaml
# anchor
# When you scroll in a post, the URL will update according to the header ID.
anchor:
  # when you scroll, the URL will update according to header id.
  auto_update: false
  # Click the headline to scroll and update the anchor
  click_to_scroll: false
```

## Image Captions

You can enable the display of Figcaption text for images.

The priority for displaying the caption is as follows: image `title` attribute first, and then the `alt` attribute.

To configure, modify the `theme configuration file`:

```yaml
photofigcaption: true
```

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-photo-figcaption.png)

## Copy Settings

You can configure whether users can copy content from your website and whether the copied content should have copyright information.

To configure, modify the `theme configuration file`:

```yaml
# copy settings
# copyright: Add the copyright information after copied content
copy:
  enable: true
  copyright:
    enable: true
    limit_count: 50
```

| Configuration  | Explanation                                                  |
| -------------- | ------------------------------------------------------------ |
| enable         | Whether to enable website copy permission                    |
| copy: copyright | Add copyright information after the copied content          |
| copy: enable   | Whether to enable adding copyright information when copying  |
| copy: limit_count | Word count limit; when the copied text exceeds this limit, it will add copyright information at the end of the copied content |


After enabling the option, when users copy content from your website, the copied text will have the following copyright information added at the end:

```

Lorem ipsum dolor sit amet, test link consectetur adipiscing elit. Strong text pellentesque ligula commodo viverra vehicula. Italic text at ullamcorper enim. Morbi a euismod nibh. Underline text non elit nisl. Deleted text tristique, sem id condimentum tempus, metus lectus venenatis mauris, sit amet semper lorem felis a eros. Fusce egestas nibh at sagittis auctor. Sed ultricies ac arcu quis molestie. Donec dapibus nunc in nibh egestas, vitae volutpat sem iaculis. Curabitur sem tellus, elementum nec quam id, fermentum laoreet mi. Ut mollis ullamcorper turpis, vitae facilisis velit ultricies sit amet. Etiam laoreet dui odio, id tempus justo tincidunt id. Phasellus scelerisque nunc sed nunc ultricies accumsan.

作者: Jerry
連結: http://localhost:4000/posts/bd3c650b/#Paragraph
來源: Butterfly
著作權歸作者所有。商業轉載請聯絡作者獲得授權，非商業轉載請註明出處。
```

Note that the specific text may vary based on your configuration and settings.

## Article Page Configuration

### Article Copyright

You can display the copyright and license information for your blog posts.

To set up the article copyright, modify the theme configuration file:

```yaml
post_copyright:
  enable: true
  decode: false
  author_href:
  license: CC BY-NC-SA 4.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
```

Explanation of the attributes:

| Attribute    | Explanation                                          |
| ------------ | ---------------------------------------------------- |
| enable       | Enable article copyright                            |
| decode       | Whether to decode URLs in the copyright information  |
| author_href  | The link to the author's website or profile         |
| license      | The license type for the article                     |
| license_url  | The URL to the full text of the license              |

Starting from Hexo 4.1, URLs are decoded by default, which may cause Chinese URLs to be decoded. You can set `decode: true` to display Chinese URLs properly.

If there are articles (e.g., reposted articles) that don't require showing copyright information, you can set `copyright: false` in the article's Front-matter.

```yaml
copyright: false
```

Starting from version 3.0.0, you can also set individual copyright information for specific articles in their Front-matter:

```markdown
---
title: My Article
date: 2023-06-30
tags: [example, hexo, theme]
copyright_author: Author Name
copyright_author_href: https://authorwebsite.com
copyright_url: https://licensewebsite.com
copyright_info: This article is copyrighted by Author Name. If you reproduce it, please credit the original author.
---
```

This allows you to have different copyright information for different articles.

![image-20210130161913121](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-copyright.png)

### Article Rewards

You can add a reward button at the end of each article, along with the relevant QR codes that users can use for donations. 
If you don't provide a QR code, you can configure an icon image and add the corresponding donation link. When users click on the image, they will be redirected to the specified link.

To set up article rewards, modify the theme configuration file:

```yaml
reward:
  enable: true
  text:
  QR_code:
    - img: /img/wechat.jpg
      link:
      text: 微信
    - img: /img/alipay.jpg
      link:
      text: 支付寶
```

Explanation of the attributes:

| Attribute   | Explanation                                       |
| ----------- | ------------------------------------------------- |
| enable      | Enable article rewards                           |
| QR_code     | List of reward options (QR code and link)        |
| img         | The image file path for the QR code or icon      |
| link        | The donation link associated with the image      |
| text        | The text label for the donation option           |

You can configure multiple reward options by adding more entries to the `QR_code` list. If you don't want to provide a link, you can leave the `link` attribute empty, and the image will act as a direct link.

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-donate.png)

### Table of Contents (TOC)

The theme provides a Table of Contents (TOC) on the article page to display the table of contents.

To configure the TOC, you can modify the theme configuration file:

```yaml
toc:
  post: true
  page: true
  number: true
  expand: false
  style_simple: false # for post
  scroll_percent: true
```

Explanation of the attributes:

| Attribute       | Explanation                                       |
| --------------- | ------------------------------------------------- |
| post            | Enable TOC on the article page                   |
| page            | Enable TOC on regular pages                      |
| number          | Display section numbers                           |
| expand          | Expand TOC by default                             |
| style_simple    | Simple mode (only TOC in the sidebar, for posts)  |
| scroll_percent  | Display scrolling percentage on the progress bar  |

> Toc PC

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-toc-pc-new.png)

> Toc Mobile

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-toc-mobile-new.png)

> style_simple: true

![image-20201209232104167](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-toc-style-simple.png)

#### Configuring for Specific Posts

To configure the Table of Contents (TOC) for a specific post, add `toc_number` and `toc` in the front matter section of your Markdown file and set it to either `true` or `false`.

The theme will first check if the Markdown Front Matter of the article contains these configurations. If they are present, the theme will use the Front Matter configurations. Otherwise, it will use the configurations specified in the **theme configuration file**.

Example:

```markdown
---
title: Example Post
date: 2023-06-30
toc: true
toc_number: true
---

Your post content goes here.
```

### Related Posts

{% note warning %}
When the article cover is set to false or the cover configuration is not available, the background of related posts will display the theme color.
{% endnote %}

The related posts are recommended based on the weight of the article tags.

Modify the `theme configuration file`:

```yaml
related_post:
  enable: true
  limit: 6 # Number of recommended posts to display
  date_type: created # or created or updated to show the creation date or update date of the article
```

- `enable`: Set to true to enable the display of related posts.
- `limit`: The number of recommended posts to display.
- `date_type`: Set to `created` or `updated` to display the creation date or update date of the article in the related posts section.

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-releatedpost.png)

### Article Expiry Reminder

You can configure whether to display an article expiry reminder based on the update time.

```yaml
# Displays outdated notice for a post (文章過期提醒)
noticeOutdate:
  enable: true
  style: flat # style: simple/flat
  limit_day: 365 # When will it be shown
  position: top # position: top/bottom
  message_prev: It has been
  message_next: days since the last update, the content of the article may be outdated.
```

- `limit_day`: The number of days after which the expiry reminder will be shown based on the update time.
- `message_prev`: The text before the number of days.
- `message_next`: The text after the number of days.

> style: flat

![image-20200731175909296](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butteffly-docs-outdate-flat.png)

> style: simple

![image-20200731180037968](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-outdated-simple.png)

### Article Editing Button

Display an editing button next to the article title that redirects to the corresponding link.

```yaml
# Post edit
# Easily browse and edit blog source code online.
post_edit:
  enable: false
  # url: https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name/
  # For example: https://github.com/jerryc127/butterfly.js.org/edit/main/source/
  url:
```

![image-20210130160108360](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-post-edit.png)

![image-20210130160208436](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-post-edit-2.png)

### Post Pagination Buttons

{% note warning %}
When the post cover is set to false or the cover configuration is not obtained, the pagination background will display the theme color.
{% endnote %}

You can configure the logic for post pagination or disable the pagination display altogether using the following settings:

```yaml
# post_pagination (pagination)
# value: 1 || 2 || false
# 1: The 'next post' will link to an older post
# 2: The 'next post' will link to a newer post
# false: Disable pagination
post_pagination: false
```

Explanation of parameters:

| Parameter            | Explanation                   |
| -------------------- | ----------------------------- |
| post_pagination: false | Disable pagination buttons     |
| post_pagination: 1     | The 'next post' links to an older post |
| post_pagination: 2     | The 'next post' links to a newer post |

![image-20210130161545100](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-post-pagination.png)

## Footer Settings

### Blog Year

The `since` option is used to display the starting year of your website. It will be shown at the bottom of the page as part of the footer.

To display the starting year in the footer, modify the `theme configuration file` as follows:

```yaml
footer:
  owner:
    enable: true
    since: 2018
```

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-since.png)

### Custom Footer Text

The `custom_text` option allows you to add custom text to the footer of your website. You can use this option to add statements, declarations, or any other custom text you want. It supports HTML formatting.

To add custom text to the footer, modify the `theme configuration file` as follows:

```yaml
custom_text: Hi, welcome to my <a href="https://butterfly.js.org/">blog</a>!
```

This will display the custom text in the footer, as shown in the image below:

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-footer-text.png)

If you need to include ICP (Internet Content Provider) information for certain regions that require it, you can also add it to the `custom_text` option:

```yaml
custom_text: <a href="icp_link"><img class="icp-icon" src="icp_image"><span>备案号：xxxxxx</span></a>
```

In this example, replace `icp_link` with the actual ICP link and `icp_image` with the image representing your ICP registration.

## Aside Settings

### Aside Layout

You can customize which items to display in the aside, decide their position, and even hide the sidebar if needed.

Modify the `theme configuration file` to make changes.

```yaml
aside:
  enable: true
  hide: false
  button: true
  mobile: true # display on mobile
  position: right # left or right
  display:
    archive: true
    tag: true
    category: true
  card_author:
    enable: true
    description:
    button:
      enable: true
      icon: fab fa-github
      text: Follow Me
      link: https://github.com/xxxxxx
  card_announcement:
    enable: true
    content: This is my Blog
  card_recent_post:
    enable: true
    limit: 5 # if set 0 will show all
    sort: date # date or updated
    sort_order: # Don't modify the setting unless you know how it works
  card_categories:
    enable: true
    limit: 8 # if set 0 will show all
    expand: none # none/true/false
    sort_order: # Don't modify the setting unless you know how it works
  card_tags:
    enable: true
    limit: 40 # if set 0 will show all
    color: false
    orderby: random # Order of tags, random/name/length
    order: 1 # Sort of order. 1, asc for ascending; -1, desc for descending
    sort_order: # Don't modify the setting unless you know how it works
  card_archives:
    enable: true
    type: monthly # yearly or monthly
    format: MMMM YYYY # eg: YYYY年MM月
    order: -1 # Sort of order. 1, asc for ascending; -1, desc for descending
    limit: 8 # if set 0 will show all
    sort_order: # Don't modify the setting unless you know how it works
  card_webinfo:
    enable: true
    post_count: true
    last_push_date: true
    sort_order: # Don't modify the setting unless you know how it works
  card_post_series:
    enable: true
    orderBy: 'date' # Order by title or date
    order: -1 # Sort of order. 1, asc for ascending; -1, desc for descending

```

> position: left

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-aside-left.png)

> position: right

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-aside-right.png)

> card_tags color: false

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/20200426182730.png)

> card_tags color: true

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/20200426183025.png)

> aside button

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-aside-button.gif)

### Visitor Count (busuanzi) - UV and PV

Visit the [official website of busuanzi](http://busuanzi.ibruce.info/) for more information.

Modify the `theme configuration file` as follows:

```yaml
busuanzi:
  site_uv: true
  site_pv: true
  page_pv: true
```

> If you need to modify the CDN link for busuanzi, you can do so through the `option` in the `CDN` section of the theme configuration file:

```yaml
CDN:
  option:
  	busuanzi: xxxxxxxxx
```

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-busuanzi-site-pv.png)

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-pv.png)

### Runtimeshow

Displays the running time of the website.

Modify the `theme configuration file` as follows:

```yaml
runtimeshow:
  enable: true
  publish_date: 6/7/2018 00:00:00  
  ## Website launch date
  # Format: MM/DD/YYYY HH:mm:ss
  # It can also be written as YYYY/MM/DD HH:mm:ss
```

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-runtime.png)

### Newest Comments

> Supported from version 3.1.0

{% note primary %}

The newest comments will only be loaded when refreshing the page and won't update in real-time.

Due to API access limitations, to avoid excessive calls, the theme defaults to a storage period of 10 minutes. This means that after calling the data, it will be stored in *localStorage*, and refreshing the website within 10 minutes will only retrieve the data from *localStorage*. After the 10-minute period, when you refresh the page, it will fetch new data from the API. (As of version 3.6.0, the `storage` configuration has been added, allowing you to customize the caching time.)

{% endnote %}

To display the newest comments section in the sidebar, modify the `theme configuration file` as follows:

```yaml
# Aside widget - Newest Comments
newest_comments:
  enable: true
  sort_order: # Don't modify the setting unless you know how it works
  limit: 6
  storage: 10 # unit: mins, save data to localStorage
  avatar: true
```

Explanation of some configurations:

| Configuration | Explanation                                 |
| ------------- | -------------------------------------------- |
| limit         | Number of comments to display                |
| storage       | Cache duration in minutes                    |
| avatar        | Whether to display avatars for the comments  |

> Demo

![image-20200830223037320](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-newest-comments.png)

### Custom Add Aside Widget

{% btn '/posts/ea33ab97/','Click to Visit',fas fa-lightbulb,block green %}


## Bottom Right Button

### Simplified-Traditional Chinese Conversion

Enable the simplified-traditional Chinese character conversion feature.

A button for simplified-traditional Chinese character conversion will be displayed in the bottom right corner.

To enable this feature, modify the theme configuration file:

```yaml
translate:
  enable: true
  # Default text displayed on the button (if the website is in simplified Chinese, set to 'default: 繁')
  default: 簡
  # Default language for the website, 1: Traditional Chinese, 2: Simplified Chinese
  defaultEncoding: 1
  # Translation delay time, if required, set the delay time for translation, e.g., 100 means 100ms, default is 0
  translateDelay: 0
  # Text displayed on the button when the content is in simplified Chinese
  msgToTraditionalChinese: "繁"
  # Text displayed on the button when the content is in traditional Chinese
  msgToSimplifiedChinese: "簡"
```

> Simplified Chinese

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-simp.png)

> Traditional Chinese

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-tranditional.png)

### Read Mode

In Read Mode, the theme will remove all content except for the article, providing a distraction-free reading experience.

The Read Mode button will appear only on the article pages, located in the bottom right corner.

To enable Read Mode, modify the theme configuration file:

```yaml
readmode: true
```

When enabled, users will be able to activate the Read Mode by clicking on the button while reading an article.

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-read-mode.png)



### Dark Mode

In the theme configuration file, you can enable the dark mode feature and customize its behavior using the following parameters:

```yaml
# dark mode
darkmode:
  enable: true
  # Display the dark mode toggle button in the bottom right corner
  button: true
  autoChangeMode: false
  # Set the light mode time. The value is between 0 and 24. If not set, the default value is 6 and 18
  start: # 8
  end: # 22
```

| Parameter      | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| button         | Display the day/night mode toggle button in the bottom right corner |
| autoChangeMode | Automatically switch modes:<br />`autoChangeMode: 1` - Follow the system setting. If the browser/system doesn't support this, it will switch to light mode between the `start` and `end` times.<br />`autoChangeMode: 2` - Switch to light mode between the `start` and `end` times, and remain in dark mode for the rest of the time.<br />`autoChangeMode: false` - Disable automatic mode switching. |
| start          | The start time of light mode (hour of the day)               |
| end            | The end time of light mode (hour of the day)                 |

The theme will display a night mode toggle button in the bottom right corner as shown in the image above.

![image-20201230201029381](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-dark-mode-1.png)

### Scroll Percentage

In the theme config file

```yaml
# show scroll percent in scroll-to-top button
rightside_scroll_percent: true
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/hexo-butterfly-docs-scroll-percent-right-btn.gif)

### Button Sorting

```yaml
# Don't modify the following settings unless you know how they work
# Choose: readmode,translate,darkmode,hideAside,toc,chat,comment
# Don't repeat
rightside_item_order:
  enable: false
  hide: # readmode,translate,darkmode,hideAside
  show: # toc,chat,comment
```

## Tag Plugins

{% note info %}

Tag plugins are unique to the Hexo theme Butterfly and are not standard Markdown format.

The following syntax is only applicable to the Butterfly theme and may not work or even cause errors on other themes. Please use with caution.

{% endnote %}

{% note warning %}

While tag plugins can bring some additional functionality and UI enhancements to the theme, they also have notable limitations. Please be aware of this when using them.

{% endnote %}

### Note (Bootstrap Callout)

{% tabs note %}

<!-- tab General Settings -->

This plugin is ported from the Next theme and has been modified.

Modify the `theme configuration file`:

```yaml
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: simple
  icons: false
  border_radius: 3
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0
```

`icons` and `light_bg_offset` only work for *Method 1*.

There are two ways to use the Note tag plugin:

<!-- endtab -->

<!-- tab Method 1 -->

```markdown
{% note [class] [no-icon] [style] %}
Any content (supports inline tags too).
{% endnote %}
```

| Name     | Usage                                                       |
| -------- | ----------------------------------------------------------- |
| class    | [Optional] Identifier, different identifiers have different colors<br>(default/primary/success/info/warning/danger) |
| no-icon  | [Optional] Do not display an icon                           |
| style    | [Optional] Overrides the style in the configuration file <br>(simple/modern/flat/disabled) |

> simple

```
{% note simple %}
Default Callout Tag
{% endnote %}

{% note default simple %}
Default Callout Tag
{% endnote %}

{% note primary simple %}
Primary Callout Tag
{% endnote %}

{% note success simple %}
Success Callout Tag
{% endnote %}

{% note info simple %}
Info Callout Tag
{% endnote %}

{% note warning simple %}
Warning Callout Tag
{% endnote %}

{% note danger simple %}
Danger Callout Tag
{% endnote %}
```

{% note simple %}
Default Callout Tag
{% endnote %}

{% note default simple %}
Default Callout Tag
{% endnote %}

{% note primary simple %}
Primary Callout Tag
{% endnote %}

{% note success simple %}
Success Callout Tag
{% endnote %}

{% note info simple %}
Info Callout Tag
{% endnote %}

{% note warning simple %}
Warning Callout Tag
{% endnote %}

{% note danger simple %}
Danger Callout Tag
{% endnote %}

> modern

```markdown
{% note modern %}
Default Callout Tag
{% endnote %}

{% note default modern %}
Default Callout Tag
{% endnote %}

{% note primary modern %}
Primary Callout Tag
{% endnote %}

{% note success modern %}
Success Callout Tag
{% endnote %}

{% note info modern %}
Info Callout Tag
{% endnote %}

{% note warning modern %}
Warning Callout Tag
{% endnote %}

{% note danger modern %}
Danger Callout Tag
{% endnote %}
```

{% note modern %}
Default Callout Tag
{% endnote %}

{% note default modern %}
Default Callout Tag
{% endnote %}

{% note primary modern %}
Primary Callout Tag
{% endnote %}

{% note success modern %}
Success Callout Tag
{% endnote %}

{% note info modern %}
Info Callout Tag
{% endnote %}

{% note warning modern %}
Warning Callout Tag
{% endnote %}

{% note danger modern %}
Danger Callout Tag
{% endnote %}

> flat

```markdown
{% note flat %}
Default Callout Tag
{% endnote %}

{% note default flat %}
Default Callout Tag
{% endnote %}

{% note primary flat %}
Primary Callout Tag
{% endnote %}

{% note success flat %}
Success Callout Tag
{% endnote %}

{% note info flat %}
Info Callout Tag
{% endnote %}

{% note warning flat %}
Warning Callout Tag
{% endnote %}

{% note danger flat %}
Danger Callout Tag
{% endnote %}
```

{% note flat %}
Default Callout Tag
{% endnote %}

{% note default flat %}
Default Callout Tag
{% endnote %}

{% note primary flat %}
Primary Callout Tag
{% endnote %}

{% note success flat %}
Success Callout Tag
{% endnote %}

{% note info flat %}
Info Callout Tag
{% endnote %}

{% note warning flat %}
Warning Callout Tag
{% endnote %}

{% note danger flat %}
Danger Callout Tag
{% endnote %}

> disabled

```markdown
{% note disabled %}
Default Callout Tag
{% endnote %}

{% note default disabled %}
Default Callout Tag
{% endnote %}

{% note primary disabled %}
Primary Callout Tag
{% endnote %}

{% note success disabled %}
Success Callout Tag
{% endnote %}

{% note info disabled %}
Info Callout Tag
{% endnote %}

{% note warning disabled %}
Warning Callout Tag
{% endnote %}

{% note danger disabled %}
Danger Callout Tag
{% endnote %}
```

{% note disabled %}
Default Callout Tag
{% endnote %}

{% note default disabled %}
Default Callout Tag
{% endnote %}

{% note primary disabled %}
Primary Callout Tag
{% endnote %}

{% note success disabled %}
Success Callout Tag
{% endnote %}

{% note info disabled %}
Info Callout Tag
{% endnote %}

{% note warning disabled %}
Warning Callout Tag
{% endnote %}

{% note danger disabled %}
Danger Callout Tag
{% endnote %}

> no-icon

```markdown
{% note no-icon %}
Default Callout Tag
{% endnote %}

{% note default no-icon %}
Default Callout Tag
{% endnote %}

{% note primary no-icon %}
Primary Callout Tag
{% endnote %}

{% note success no-icon %}
Success Callout Tag
{% endnote %}

{% note info no-icon %}
Info Callout Tag
{% endnote %}

{% note warning no-icon %}
Warning Callout Tag
{% endnote %}

{% note danger no-icon %}
Danger Callout Tag
{% endnote %}
```

{% note no-icon %}
Default Callout Tag
{% endnote %}

{% note default no-icon %}
Default Callout Tag
{% endnote %}

{% note primary no-icon %}
Primary Callout Tag
{% endnote %}

{% note success no-icon %}
Success Callout Tag
{% endnote %}

{% note info no-icon %}
Info Callout Tag
{% endnote %}

{% note warning no-icon %}
Warning Callout Tag
{% endnote %}

{% note danger no-icon %}
Danger Callout Tag
{% endnote %}

<!-- endtab -->



<!-- tab Usage 2 (Custom icon) -->

> Supported in version 3.2.0 and above.

```markdown
{% note [color] [icon] [style] %}
Any content (support inline tags too.io).
{% endnote %}
```

| Name  | Usage                                                        |
| ----- | ------------------------------------------------------------ |
| color | 【Optional】Color <br>（default / blue / pink / red / purple / orange / green） |
| icon  | 【Optional】Customizable icon (only supports fontawesome icons, can also configure no-icon) |
| style | 【Optional】Can override the style in the configuration<br/>（simple/modern/flat/disabled） |

> simple

```markdown
{% note 'fab fa-cc-visa' simple %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' simple%}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
The most dreaded browser for front-end developers.
{% endnote %}
```

{% note 'fab fa-cc-visa' simple %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' simple %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' simple %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' simple%}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' simple %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' simple %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' simple %}
The most dreaded browser for front-end developers.
{% endnote %}

> modern

```markdown
{% note 'fab fa-cc-visa' modern %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' modern%}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
The most dreaded browser for front-end developers.
{% endnote %}
```

{% note 'fab fa-cc-visa' modern %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' modern %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' modern %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' modern%}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' modern %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' modern %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' modern %}
The most dreaded browser for front-end developers.
{% endnote %}

> flat

```markdown
{% note 'fab fa-cc-visa' flat %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' flat %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' flat %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' flat%}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
The most dreaded browser for front-end developers.
{% endnote %}
```

{% note 'fab fa-cc-visa' flat%}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' flat%}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' flat%}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' flat %}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' flat %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' flat %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' flat %}
The most dreaded browser for front-end developers.
{% endnote %}

> disabled

```markdown
{% note 'fab fa-cc-visa' disabled %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' disabled %}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}
The most dreaded browser for front-end developers.
{% endnote %}
```

{% note 'fab fa-cc-visa' disabled %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue 'fas fa-bullhorn' disabled %}
2021 is coming soon...
{% endnote %}
{% note pink 'fas fa-car-crash' disabled %}
Drive safely, safety first.
{% endnote %}
{% note red 'fas fa-fan' disabled %}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange 'fas fa-battery-half' disabled %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple 'far fa-hand-scissors' disabled %}
Rock-paper-scissors.
{% endnote %}
{% note green 'fab fa-internet-explorer' disabled %}
The most dreaded browser for front-end developers.
{% endnote %}

> no-icon

```markdown
{% note no-icon %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue no-icon %}
2021 is coming soon...
{% endnote %}
{% note pink no-icon %}
Drive safely, safety first.
{% endnote %}
{% note red no-icon %}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange no-icon %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple no-icon %}
Rock-paper-scissors.
{% endnote %}
{% note green no-icon %}
The most dreaded browser for front-end developers.
{% endnote %}
```

{% note no-icon %}
Are you using Visa or UnionPay?
{% endnote %}
{% note blue no-icon %}
2021 is coming soon...
{% endnote %}
{% note pink no-icon %}
Drive safely, safety first.
{% endnote %}
{% note red no-icon %}
Is this a three-blade fan or a four-blade fan?
{% endnote %}
{% note orange no-icon %}
Are you using Visa or UnionPay?
{% endnote %}
{% note purple no-icon %}
Rock-paper-scissors.
{% endnote %}
{% note green no-icon %}
The most dreaded browser for front-end developers.
{% endnote %}

<!-- endtab -->

{% endtabs %}

### Gallery Photo Collection

> Available from version 2.2.0

A collection of photo galleries.

Syntax:

```
<div class="gallery-group-main">
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
{% galleryGroup name description link img-url %}
</div>
```

- name: Name of the gallery
- description: Description of the gallery
- link: Link to the corresponding album
- img-url: URL of the gallery cover image

For example:

```
<div class="gallery-group-main">
{% galleryGroup 'Wallpapers' 'A collection of wallpapers' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup 'Marvel' 'Pictures related to Marvel' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' 'Pictures related to OH MY GIRL' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>
```

<div class="gallery-group-main">
{% galleryGroup 'Wallpapers' 'A collection of wallpapers' '/Gallery/wallpaper' https://i.loli.net/2019/11/10/T7Mu8Aod3egmC4Q.png %}
{% galleryGroup 'Marvel' 'Pictures related to Marvel' '/Gallery/marvel' https://i.loli.net/2019/12/25/8t97aVlp4hgyBGu.jpg %}
{% galleryGroup 'OH MY GIRL' 'Pictures related to OH MY GIRL' '/Gallery/ohmygirl' https://i.loli.net/2019/12/25/hOqbQ3BIwa6KWpo.jpg %}
</div>

### Gallery Album

> Available from version 2.0.0

The new Gallery Album is different from the old version. It automatically arranges images based on their length, making it more convenient to write, just like using markdown format. You can insert it into the corresponding markdown as needed.

{% tabs %}

<!-- tab Local -->

Syntax:

```markdown
{% gallery [lazyload],[rowHeight],[limit] %}
Markdown image format
{% endgallery %}
```

| Parameter  | Explanation                                                  |
| ---------- | ------------------------------------------------------------ |
| lazyload   | [Optional] Click the button to load more images. Set to true/false. Default is `false`. |
| rowHeight  | [Optional] The height at which the images are displayed. If you want to display more images in a row, you can set a smaller value. Default is `220`. |
| limit      | [Optional] The number of images to load at a time. Default is `10`. |

> Examples

```markdown
{% gallery %}
Markdown image format
{% endgallery %}

{% gallery true,220,10 %}
Markdown image format
{% endgallery %}

{% gallery true,,10 %}
Markdown image format
{% endgallery %}
```

For example:

```markdown
{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}
```

{% gallery %}
![](https://i.loli.net/2019/12/25/Fze9jchtnyJXMHN.jpg)
![](https://i.loli.net/2019/12/25/ryLVePaqkYm4TEK.jpg)
![](https://i.loli.net/2019/12/25/gEy5Zc1Ai6VuO4N.jpg)
![](https://i.loli.net/2019/12/25/d6QHbytlSYO4FBG.jpg)
![](https://i.loli.net/2019/12/25/6nepIJ1xTgufatZ.jpg)
![](https://i.loli.net/2019/12/25/E7Jvr4eIPwUNmzq.jpg)
![](https://i.loli.net/2019/12/25/mh19anwBSWIkGlH.jpg)
![](https://i.loli.net/2019/12/25/2tu9JC8ewpBFagv.jpg)
{% endgallery %}

<!-- endtab -->

<!-- tab Remote Fetching -->

Syntax:

```markdown
{% gallery url,[link],[lazyload],[rowHeight],[limit] %}
{% endgallery %}
```

| Parameter  | Explanation                                                  |
| ---------- | ------------------------------------------------------------ |
| url        | [Required] Identifier.                                       |
| link       | [Required] Remote JSON link.                                 |
| lazyload   | [Optional] Click the button to load more images. Set to true/false. Default is `false`. |
| rowHeight  | [Optional] The height at which the images are displayed. If you want to display more images in a row, you can set a smaller value. Default is `220`. |
| limit      | [Optional] The number of images to load at a time. Default is `10`. |

> Example of Remote JSON Link

There are three parameters, and `url` is **required**. `alt` and `title` are optional and can be present or not.

```json
[
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0556.jpg",
    "alt": "IMG_0556.jpg",
     "title": "This is title"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0472.jpg",
    "alt": "IMG_0472.jpg"
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0453.jpg",
    "alt": ""
  },
  {
    "url": "https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/IMG_0931.jpg",
    "alt": ""
  }
]
```

> Example

```markdown
{% gallery url,https://xxxx.com/sss.json %}
{% endgallery %}

{% gallery url,https://xxxx.com/sss.json,true,220,10 %}
{% endgallery %}

{% gallery url,https://xxxx.com/sss.json,true,,10 %}
{% endgallery %}
```
<!-- endtab -->

{% endtabs %}

### tag-hide

{% note warning %}

Available from version 2.2.0 onwards.

Please note that within the `tag-hide` plugin, it is not recommended to have headings such as h1 - h6 in the content. The Table of Contents (ToC) may display the hidden content's headings, and scrolling may cause abnormal behavior if the hidden content is not visible.

{% endnote %}

If you want to hide certain text or content and provide a button for users to click and reveal it, you can use this `tag-hide` plugin.

{% tabs tag-hide %}
<!-- tab Inline -->
`inline`: Adds a button to hide content within the text, limited to text only.

( The `content` should not contain commas; you can use `&sbquo;` instead.)

```markdown
{% hideInline content,display,bg,color %}
```

- `content`: The text content to be hidden.

- `display`: The text to be displayed on the button (optional).

- `bg`: The background color of the button (optional).

- `color`: The text color of the button (optional).

> Demo

```markdown
Which English letter is the coolest? {% hideInline Because they wear suits (C for cool),Reveal the answer,#FF7242,#fff %}

There's a person standing inside the door? {% hideInline Blink %}
```

Which English letter is the coolest? {% hideInline Because they wear suits (C for cool),Reveal the answer,#FF7242,#fff %}

There's a person standing inside the door? {% hideInline Blink %}

<!-- endtab -->

<!-- tab Block -->
`block`: Hides independent content blocks, allowing you to hide multiple contents, including images, code blocks, etc.

( The `display` should not contain commas; you can use `&sbquo;` instead.)

```markdown
{% hideBlock display,bg,color %}
content
{% endhideBlock %}
```

- `content`: The content to be hidden.

- `display`: The text to be displayed on the button (optional).

- `bg`: The background color of the button (optional).

- `color`: The text color of the button (optional).

> Demo

```mark
Reveal the answer
{% hideBlock Reveal the answer %}
Fool, there is no answer!
{% endhideBlock %}
```

Reveal the answer
{% hideBlock Reveal the answer %}
Fool, there is no answer!
{% endhideBlock %}

<!-- endtab -->

<!-- tab Toggle -->
> Available from version 2.3.0 onwards.

If you need to show a lot of content, you can hide it in a collapsible box and expand it when needed.

( The `display` should not contain commas; you can use `&sbquo;` instead.)

```markdown
{% hideToggle display,bg,color %}
content
{% endhideToggle %}
```

> Demo

```markdown
{% hideToggle Butterfly Installation Method %}
In your blog's root directory,

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

If you want to install the newer dev branch, you can use

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

{% endhideToggle %}
```

{% hideToggle Butterfly Installation Method %}
In your blog's root directory,

git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly

If you want to install the newer dev branch, you can use

git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git

 themes/Butterfly

{% endhideToggle %}

<!-- endtab -->
{% endtabs %}

### Mermaid
The `mermaid` tag allows you to create various diagrams like Flowchart, Sequence diagram, Class Diagram, State Diagram, Gantt chart, and Pie Chart. Here's how you can use it:

1. Modify your theme configuration file (usually in YAML format) to enable `mermaid`:

```yaml
# mermaid
# see https://github.com/mermaid-js/mermaid
mermaid:
  enable: true
  # built-in themes: default/forest/dark/neutral
  theme:
    light: default
    dark: dark
```

2. To create a diagram, use the `mermaid` tag plugin with your content inside:

```markdown
{% mermaid %}
Your content here
{% endmermaid %}
```

Example:

```markdown
{% mermaid %}
pie
    title Key elements in Product X
    "Calcium" : 42.96
    "Potassium" : 50.05
    "Magnesium" : 10.01
    "Iron" :  5
{% endmermaid %}
```

This will generate a Pie Chart diagram:

![Pie Chart](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-mermaid.png)

You can refer to the [mermaid documentation](https://mermaid-js.github.io/mermaid/#/) for more information and examples on how to create different types of diagrams using mermaid.

### Tabs

Usage:

```markdown
{% tabs Unique name, [index] %}
<!-- tab [Tab caption] [@icon] -->
Any content (support inline tags too).
<!-- endtab -->
{% endtabs %}

Unique name   : Unique name of tabs block tag without comma.
                Will be used in #id's as prefix for each tab with their index numbers.
                If there are whitespaces in name, for generate #id all whitespaces will replaced by dashes.
                Only for current url of post/page must be unique!
[index]       : Index number of active tab.
                If not specified, first tab (1) will be selected.
                If index is -1, no tab will be selected. It's will be something like spoiler.
                Optional parameter.
[Tab caption] : Caption of current tab.
                If not caption specified, unique name with tab index suffix will be used as caption of tab.
                If not caption specified, but specified icon, caption will empty.
                Optional parameter.
[@icon]       : FontAwesome icon name (full-name, look like 'fas fa-font')
                Can be specified with or without space; e.g. 'Tab caption @icon' similar to 'Tab caption@icon'.
                Optional parameter.
```

> Demo 1 - Default selection of the first tab (Default):

```markdown
{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

{% tabs test1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

> Demo 2 - Specify the default selected tab

```markdown
{% tabs test2, 3 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```
{% tabs test2, 3 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

> Demo 3 - No default selected tab

```markdown
{% tabs test3, -1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}
```

{% tabs test3, -1 %}
<!-- tab -->
**This is Tab 1.**
<!-- endtab -->

<!-- tab -->
**This is Tab 2.**
<!-- endtab -->

<!-- tab -->
**This is Tab 3.**
<!-- endtab -->
{% endtabs %}

> Demo 4 - Custom tab names + Only icon + Icon and Tab name:

```markdown
{% tabs test4 %}
<!-- tab First Tab -->
**The name of this tab is "First Tab".**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**Only icon, no tab name.**
<!-- endtab -->

<!-- tab Bomb @fas fa-bomb -->
**Tab name + icon**
<!-- endtab -->
{% endtabs %}
```
{% tabs test4 %}
<!-- tab First Tab -->
**The name of this tab is "First Tab".**
<!-- endtab -->

<!-- tab @fab fa-apple-pay -->
**Only icon, no tab name.**
<!-- endtab -->

<!-- tab Bomb @fas fa-bomb -->
**Tab name + icon**
<!-- endtab -->
{% endtabs %}

### Button

Version 3.0 and above

Usage:

```markdown
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}
```

Parameters:

- `[url]`: Link to the destination.
- `[text]`: Button text.
- `[icon]`: [Optional] Icon for the button.
- `[color]`: [Optional] Background color of the button (for default style),
            font and border color (for outline style).
            Available colors: default, blue, pink, red, purple, orange, green.
- `[style]`: [Optional] Button style. Default is solid.
             Options: outline or leave empty for solid style.
- `[layout]`: [Optional] Button layout. Default is line.
              Options: block or leave empty for line layout.
- `[position]`: [Optional] Button position. Applicable only when the layout is set to block.
                Default is left.
                Options: center, right, or leave empty for left position.
- `[size]`: [Optional] Button size.
            Options: larger or leave empty.

> Demo

```markdown
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
```

This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline %}
This is my website, click the button {% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}

```markdown
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block center larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block right outline larger %}
```

{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block center larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,block right outline larger %}

**more than one button in center**

```markdown
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,green larger %}
```

{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,green larger %}

```markdown
<div class="btn-center">
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline green larger %}
</div>
```

<div class="btn-center">
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline blue larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline pink larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline red larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline purple larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline orange larger %}
{% btn 'https://butterfly.js.org/',Butterfly,far fa-hand-point-right,outline green larger %}
</div>

### inlineImg

The theme displays images as default `block-level elements`. If you want to display an image as an `inline element`, you can use this tag plugin.

```markdown
{% inlineImg [src] [height] %}

[src]      :    Image link
[height]   :    Image height limit [Optional]
```

> Demo

```markdown
Do you think I look beautiful?

![](https://i.loli.net/2021/03/19/2P6ivUGsdaEXSFI.png)

I think I look beautiful {% inlineImg https://i.loli.net/2021/03/19/5M4jUB3ynq7ePgw.png 150px %}
```

![image-20210319001204045](https://jsd.012700.xyz/gh/jerryc127/CDN@m2/img/hexo-theme-butterfly-docs-inlineimg.png)

### label

> Supported in version 3.7.5 and above

Highlight the required text.

```markdown
{% label text color %}
```

| Parameter | Description                                                 |
| --------- | ----------------------------------------------------------- |
| text      | The text to be highlighted                                   |
| color     | [Optional] Background color, default is `default`<br />default/blue/pink/red/purple/orange/green |

> Demo

```markdown
臣亮言：{% label 先帝 %}創業未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此誠{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈於內；{% label 忠志之士 purple %}，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。
宮中、府中，俱為一體；陟罰臧否，不宜異同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。
```

臣亮言：{% label 先帝 %}創業未半，而{% label 中道崩殂 blue %}。今天下三分，{% label 益州疲敝 pink %}，此誠{% label 危急存亡之秋 red %}也！然侍衞之臣，不懈於內；{% label 忠志之士 purple %}，忘身於外者，蓋追先帝之殊遇，欲報之於陛下也。誠宜開張聖聽，以光先帝遺德，恢弘志士之氣；不宜妄自菲薄，引喻失義，以塞忠諫之路也。

宮中、府中，俱為一體；陟罰臧否，不宜異同。若有{% label 作奸 orange %}、{% label 犯科 green %}，及為忠善者，宜付有司，論其刑賞，以昭陛下平明之治；不宜偏私，使內外異法也。

### timeline

> Supported in version 4.0.0 and above

```markdown
{% timeline title,color %}
<!-- timeline title -->
xxxxx
<!-- endtimeline -->
<!-- timeline title -->
xxxxx
<!-- endtimeline -->
{% endtimeline %}
```

| Parameter | Description                                                 |
| --------- | ----------------------------------------------------------- |
| title     | Title/timeline date                                        |
| color     | Timeline color options: default (leave empty) / blue / pink / red / purple / orange / green |

> Demo

```markdown
{% timeline 2022 %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022 %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}

```markdown
{% timeline 2022,blue %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022,blue %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}

```markdown
{% timeline 2022,pink %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022,pink %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}

```markdown
{% timeline 2022,red %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022,red %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}

```markdown
{% timeline 2022,purple %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022,purple %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}

```markdown
{% timeline 2022,orange %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022,orange %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}

```markdown
{% timeline 2022,green %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}
```

{% timeline 2022,green %}
<!-- timeline 01-02 -->
This is a test page.
<!-- endtimeline -->
{% endtimeline %}

### flink

> Supported in version 4.1.0

You can insert a friends link list effect on any page.

The content format is the same as the friends link page and supports YAML format.

```markdown
{% flink %}
xxxxxx
{% endflink %}
```

> Demo

```markdown
{% flink %}
- class_name: Friendly Links
  class_desc: Those people, those things
  link_list:
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: Fast, simple, and powerful blog framework.

- class_name: Websites
  class_desc: Recommended websites
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: Video website
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: China's largest social sharing platform
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: Social sharing platform
{% endflink %}
```

![Demo](https://jsd.012700.xyz/gh/jerryc127/CDN@m2/img/hexo-theme-butterfly-docs-flink-demo.png)

### abcjs Sheet Music

Rendering sheet music on the page.

Modify the `theme configuration file`.

```yaml
# abcjs (Sheet Music Rendering)
# See https://github.com/paulrosen/abcjs
# ---------------
abcjs:
  enable: true
  per_page: true
```

Usage:

```markdown
{% score %}
Sheet music code
{% endscore %}
```

> Demo

```markdown
{% score %}
X:1
T:alternate heads
M:C
L:1/8
U:n=!style=normal!
K:C treble style=rhythm
"Am" BBBB B2 B>B | "Dm" B2 B/B/B "C" B4 |"Am" B2 nGnB B2 nGnA | "Dm" nDB/B/ nDB/B/ "C" nCB/B/ nCB/B/ |B8| B0 B0 B0 B0 |]
%%text This translates to:
[M:C][K:style=normal]
[A,EAce][A,EAce][A,EAce][A,EAce] [A,EAce]2 [A,EAce]>[A,EAce] |[DAdf]2 [DAdf]/[DAdf]/[DAdf] [CEGce]4 |[A,EAce]2 GA [A,EAce] GA |D[DAdf]/[DAdf]/ D[DAdf]/[DAdf]/ C [CEGce]/[CEGce]/ C[CEGce]/[CEGce]/ |[CEGce]8 | [CEGce]2 [CEGce]2 [CEGce]2 [CEGce]2 |]
GAB2 !style=harmonic![gb]4|GAB2 [K: style=harmonic]gbgb|
[K: style=x]
C/A,/ C/C/E C/zz2|
w:Rock-y did-nt like that
{% endscore %}
```



{% score %}
X:1
T:alternate heads
M:C
L:1/8
U:n=!style=normal!
K:C treble style=rhythm
"Am" BBBB B2 B>B | "Dm" B2 B/B/B "C" B4 |"Am" B2 nGnB B2 nGnA | "Dm" nDB/B/ nDB/B/ "C" nCB/B/ nCB/B/ |B8| B0 B0 B0 B0 |]
%%text This translates to:
[M:C][K:style=normal]
[A,EAce][A,EAce][A,EAce][A,EAce] [A,EAce]2 [A,EAce]>[A,EAce] |[DAdf]2 [DAdf]/[DAdf]/[DAdf] [CEGce]4 |[A,EAce]2 GA [A,EAce] GA |D[DAdf]/[DAdf]/ D[DAdf]/[DAdf]/ C [CEGce]/[CEGce]/ C[CEGce]/[CEGce]/ |[CEGce]8 | [CEGce]2 [CEGce]2 [CEGce]2 [CEGce]2 |]
GAB2 !style=harmonic![gb]4|GAB2 [K: style=harmonic]gbgb|
[K: style=x]
C/A,/ C/C/E C/zz2|
w:Rock-y did-nt like that
{% endscore %}

### series articles

Display series articles on the page.

Modify the theme configuration file.

```yaml
series:
   enable: true
   orderBy: 'title' # Order by title or date
   order: 1 # Sort of order. 1, asc for ascending; -1, desc for descending
   number: true
```

Usage:

```markdown
{% series %}
{% series [series name] %}
```

Add the parameter series to the front matter of the article and give it an identifier.

Using this tag plugin will display articles with the same identifier in a list format.

If the series identifier is not specified, it defaults to the series identifier of the article where this tag plugin is used.

> Demo

```markdown
{% series markdown %}
```

![](https://oss.012700.xyz/butterfly/2023/10/butterfly-series.png)


{% btn '/posts/butterfly-docs-en-theme-config-two/',⚔️ Butterfly document - Theme Configuration Part 2,far fa-hand-point-right,block red right larger %}

