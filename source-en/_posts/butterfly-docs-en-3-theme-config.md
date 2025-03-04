---
title: Butterfly document - Theme Configuration
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
abbrlink: butterfly-docs-en-theme-config
series: docs
---

{% note orange 'fas fa-language' %}

This article is translated from ChatGPT.

{% endnote %}

{% note green 'fas fa-rocket' %}

 📚  Table of Contents

{% post_link butterfly-docs-en-1-get-started ' 🚀 Get Started' %} - {% post_link butterfly-docs-en-2-theme-pages ' 📑 Theme Pages' %} - {% post_link butterfly-docs-en-3-theme-config ' 📌 Theme Configuration' %} - {% post_link butterfly-docs-en-4-tag-plugins ' ⚔️ Tag Plugins' %} - {% post_link butterfly-docs-en-5-theme-q-a ' ❓ Q&A' %} - {% post_link butterfly-docs-en-6-advanced-tutorial ' ⚡️ Advanced Tutorials' %}

{% endnote %}

---

## Quick Read of Configuration Files

You can quickly understand all the configuration comments, making your configuration files more convenient. If you encounter any unclear configurations, you can find more detailed information in this article.

```yaml
# --------------------------------------
# Hexo Butterfly Theme Configuration
# If you have any questions, please refer to the documentation
# Chinese: https://butterfly.js.org/
# English: https://butterfly.js.org/en/
# --------------------------------------

# --------------------------------------
# Navigation Settings
# --------------------------------------

nav:
  # Navigation bar logo image
  logo:
  display_title: true
  # Whether to fix navigation bar
  fixed: false

menu:
  # Home: / || fas fa-home
  # List||fas fa-list:
  #   Music: /music/ || fas fa-music
  #   Movie: /movies/ || fas fa-video

# --------------------------------------
# Code Blocks Settings
# --------------------------------------

code_blocks:
  # Code block theme: darker / pale night / light / ocean / false
  theme: light
  macStyle: false
  # Code block height limit (unit: px)
  height_limit: false
  word_wrap: false

  # Toolbar
  copy: true
  language: true
  # true: shrink the code blocks | false: expand the code blocks | none: expand code blocks and hide the button
  shrink: false
  fullpage: false

# Social media links
# Formal:
#   icon: link || the description || color
social:
  # fab fa-github: https://github.com/xxxxx || Github || '#24292e'
  # fas fa-envelope: mailto:xxxxxx@gmail.com || Email || '#4a7dbe'

# --------------------------------------
# Image Settings
# --------------------------------------

favicon: /img/favicon.png

avatar:
  img: /img/butterfly-icon.png
  effect: false

# Disable all banner images
disable_top_img: false

# If the banner of page not setting, it will show the default_top_img
default_top_img:

# The banner image of index page
index_img:

# The banner image of archive page
archive_img:

# Note: tag page, not tags page
tag_img:

# The banner image of tag page, you can set the banner image for each tag
# Format:
#  - tag name: xxxxx
tag_per_img:

# Note: category page, not categories page
category_img:

# The banner image of category page, you can set the banner image for each category
# Format:
#  - category name: xxxxx
category_per_img:

# The background image of footer
footer_img: false

# Website Background
# Can set it to color or image url
background:

cover:
  # Disable the cover or not
  index_enable: true
  aside_enable: true
  archives_enable: true
  # When cover is not set, the default cover is displayed
  default_cover:
    # - xxx.jpg

# Replace Broken Images
error_img:
  flink: /img/friend_404.gif
  post_page: /img/404.jpg

# A simple 404 page
error_404:
  enable: false
  subtitle: 'Page Not Found'
  background: /img/error-page.png

post_meta:
  # Home Page
  page:
    # Choose: created / updated / both
    date_type: created
    # Choose: date / relative
    date_format: date
    categories: true
    tags: false
    label: true
  post:
    # Choose: left / center
    position: left
    # Choose: created / updated / both
    date_type: both
    # Choose: date / relative
    date_format: date
    categories: true
    tags: true
    label: true

# --------------------------------------
# Index page settings
# --------------------------------------

# The top_img settings of home page
# default: top img - full screen, site info - middle
# The position of site info, eg: 300px/300em/300rem/10%
index_site_info_top:
# The height of top_img, eg: 300px/300em/300rem
index_top_img_height:

# The subtitle on homepage
subtitle:
  enable: false
  # Typewriter Effect
  effect: true
  # Customize typed.js
  # https://github.com/mattboldt/typed.js/#customization
  typed_option:
  # Source - Call the third-party service API (Chinese only)
  # It will show the source first, then show the content of sub
  # Choose: false/1/2/3
  # false - disable the function
  # 1 - hitokoto.cn
  # 2 - yijuzhan.com
  # 3 - jinrishici.com
  source: false
  # If you close the typewriter effect, the subtitle will only show the first line of sub
  sub:

# Article layout on the homepage
# 1: Cover on the left, info on the right
# 2: Cover on the right, info on the left
# 3: Cover and info alternate between left and right
# 4: Cover on top, info on the bottom
# 5: Info displayed on the cover
# 6: Masonry layout - Cover on top, info on the bottom
# 7: Masonry layout - Info displayed on the cover
index_layout: 3

# Display the article introduction on homepage
# 1: description
# 2: both (if the description exists, it will show description, or show the auto_excerpt)
# 3: auto_excerpt (default)
# false: do not show the article introduction
index_post_content:
  method: 3
  # If you set method to 2 or 3, the length need to config
  length: 500

# --------------------------------------
# Post Settings
# --------------------------------------

toc:
  post: true
  page: false
  number: true
  expand: false
  # Only for post
  style_simple: false
  scroll_percent: true

post_copyright:
  enable: true
  decode: false
  author_href:
  license: CC BY-NC-SA 4.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/

# Sponsor/reward
reward:
  enable: false
  text:
  QR_code:
    # - img: /img/wechat.jpg
    #   link:
    #   text: wechat
    # - img: /img/alipay.jpg
    #   link:
    #   text: alipay

# Post edit
# Easily browse and edit blog source code online.
post_edit:
  enable: false
  # url: https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name/
  # For example: https://github.com/jerryc127/butterfly.js.org/edit/main/source/
  url:

# Related Articles
related_post:
  enable: true
  # Number of posts displayed
  limit: 6
  # Choose: created / updated
  date_type: created

# Choose: 1 / 2 / false
# 1: The 'next post' will link to old post
# 2: The 'next post' will link to new post
# false: disable pagination
post_pagination: 1

# Displays outdated notice for a post
noticeOutdate:
  enable: false
  # Style: simple / flat
  style: flat
  # When will it be shown
  limit_day: 365
  # Position: top / bottom
  position: top
  message_prev: It has been
  message_next: days since the last update, the content of the article may be outdated.

# --------------------------------------
# Footer Settings
# --------------------------------------
footer:
  owner:
    enable: true
    since: 2019
  custom_text:
  # Copyright of theme and framework
  copyright: true

# --------------------------------------
# Aside Settings
# --------------------------------------

aside:
  enable: true
  hide: false
  # Show the button to hide the aside in bottom right button
  button: true
  mobile: true
  # Position: left / right
  position: right
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
    # If set 0 will show all
    limit: 5
    # Sort: date / updated
    sort: date
    sort_order:
  card_newest_comments:
    enable: false
    sort_order:
    limit: 6
    # Unit: mins, save data to localStorage
    storage: 10
    avatar: true
  card_categories:
    enable: true
    # If set 0 will show all
    limit: 8
    # Choose: none / true / false
    expand: none
    sort_order:
  card_tags:
    enable: true
    # If set 0 will show all
    limit: 40
    color: false
    # Order of tags, random/name/length
    orderby: random
    # Sort of order. 1, asc for ascending; -1, desc for descending
    order: 1
    sort_order:
  card_archives:
    enable: true
    # Type: monthly / yearly
    type: monthly
    # Eg: YYYY年MM月
    format: MMMM YYYY
    # Sort of order. 1, asc for ascending; -1, desc for descending
    order: -1
    # If set 0 will show all
    limit: 8
    sort_order:
  card_post_series:
    enable: true
    # The title shows the series name
    series_title: false
    # Order by title or date
    orderBy: 'date'
    # Sort of order. 1, asc for ascending; -1, desc for descending
    order: -1
  card_webinfo:
    enable: true
    post_count: true
    last_push_date: true
    sort_order:
    # Time difference between publish date and now
    # Formal: Month/Day/Year Time or Year/Month/Day Time
    # Leave it empty if you don't enable this feature
    runtime_date:

# --------------------------------------
# Bottom right button
# --------------------------------------

# The distance between the bottom right button and the bottom (default unit: px)
rightside_bottom:

# Conversion between Traditional and Simplified Chinese
translate:
  enable: false
  # The text of a button
  default: 繁
  # the language of website (1 - Traditional Chinese/ 2 - Simplified Chinese）
  defaultEncoding: 2
  # Time delay
  translateDelay: 0
  # The text of the button when the language is Simplified Chinese
  msgToTraditionalChinese: '繁'
  # The text of the button when the language is Traditional Chinese
  msgToSimplifiedChinese: '簡'

# Read Mode
readmode: true

# Dark Mode
darkmode:
  enable: true
  # Toggle Button to switch dark/light mode
  button: true
  # Switch dark/light mode automatically
  # autoChangeMode: 1  Following System Settings, if the system doesn't support dark mode, it will switch dark mode between 6 pm to 6 am
  # autoChangeMode: 2  Switch dark mode between 6 pm to 6 am
  # autoChangeMode: false
  autoChangeMode: false
  # Set the light mode time. The value is between 0 and 24. If not set, the default value is 6 and 18
  start:
  end:

# Show scroll percent in scroll-to-top button
rightside_scroll_percent: false

# Don't modify the following settings unless you know how they work
# Choose: readmode,translate,darkmode,hideAside,toc,chat,comment
# Don't repeat the same value
rightside_item_order:
  enable: false
  # Default: readmode,translate,darkmode,hideAside
  hide:
  # Default: toc,chat,comment
  show:

# --------------------------------------
# Global Settings
# --------------------------------------

anchor:
  # When you scroll, the URL will update according to header id.
  auto_update: false
  # Click the headline to scroll and update the anchor
  click_to_scroll: false

photofigcaption: false

copy:
  enable: true
  # Add the copyright information after copied content
  copyright:
    enable: false
    limit_count: 150

# Need to install the hexo-wordcount plugin
wordcount:
  enable: false
  # Display the word count of the article in post meta
  post_wordcount: true
  # Display the time to read the article in post meta
  min2read: true
  # Display the total word count of the website in aside's webinfo
  total_wordcount: true

# Busuanzi count for PV / UV in site
busuanzi:
  site_uv: true
  site_pv: true
  page_pv: true

# --------------------------------------
# Math
# --------------------------------------

# About the per_page
# if you set it to true, it will load mathjax/katex script in each page
# if you set it to false, it will load mathjax/katex script according to your setting (add the 'mathjax: true' or 'katex: true' in page's front-matter)
math:
  # Choose: mathjax, katex
  # Leave it empty if you don't need math
  use:
  per_page: true
  hide_scrollbar: false

  mathjax:
    # Enable the contextual menu
    enableMenu: true
    # Choose: all / ams / none, This controls whether equations are numbered and how
    tags: none

  katex:
    # Enable the copy KaTeX formula
    copy_tex: false

# --------------------------------------
# Search
# --------------------------------------

search:
  # Choose: algolia_search / local_search / docsearch
  # leave it empty if you don't need search
  use:
  placeholder:

  # Algolia Search
  algolia_search:
    # Number of search results per page
    hitsPerPage: 6

  # Local Search
  local_search:
    # Preload the search data when the page loads.
    preload: false
    # Show top n results per article, show all results by setting to -1
    top_n_per_article: 1
    # Unescape html strings to the readable one.
    unescape: false
    CDN:

  # Docsearch
  # https://docsearch.algolia.com/
  docsearch:
    appId:
    apiKey:
    indexName:
    option:

# --------------------------------------
# Share System
# --------------------------------------

share:
  # Choose: sharejs / addtoany
  # Leave it empty if you don't need share
  use: sharejs

  # Share.js
  # https://github.com/overtrue/share.js
  sharejs:
    sites: facebook,twitter,wechat,weibo,qq

  # AddToAny
  # https://www.addtoany.com/
  addtoany:
    item: facebook,twitter,wechat,sina_weibo,facebook_messenger,email,copy_link

# --------------------------------------
# Comments System
# --------------------------------------

comments:
  # Up to two comments system, the first will be shown as default
  # Leave it empty if you don't need comments
  # Choose: Disqus/Disqusjs/Livere/Gitalk/Valine/Waline/Utterances/Facebook Comments/Twikoo/Giscus/Remark42/Artalk
  # Format of two comments system : Disqus,Waline
  use:
  # Display the comment name next to the button
  text: true
  # Lazyload: The comment system will be load when comment element enters the browser's viewport.
  # If you set it to true, the comment count will be invalid
  lazyload: false
  # Display comment count in post's top_img
  count: false
  # Display comment count in Home Page
  card_post_count: false

# Disqus
# https://disqus.com/
disqus:
  shortname:
  # For newest comments widget
  apikey:

# Alternative Disqus - Render comments with Disqus API
# https://github.com/SukkaW/DisqusJS
disqusjs:
  shortname:
  apikey:
  option:

# Livere
# https://www.livere.com/
livere:
  uid:

# Gitalk
# https://github.com/gitalk/gitalk
gitalk:
  client_id:
  client_secret:
  repo:
  owner:
  admin:
  option:

# Valine
# https://valine.js.org
valine:
  appId:
  appKey:
  avatar: monsterid
  # This configuration is suitable for domestic custom domain name users, overseas version will be automatically detected (no need to manually fill in)
  serverURLs:
  bg:
  # Use Valine visitor count as the page view count
  visitor: false
  option:

# Waline - A simple comment system with backend support fork from Valine
# https://waline.js.org/
waline:
  serverURL:
  bg:
  # Use Waline pageview count as the page view count
  pageview: false
  option:

# Utterances
# https://utteranc.es/
utterances:
  repo:
  # Issue Mapping: pathname/url/title/og:title
  issue_term: pathname
  # Theme: github-light/github-dark/github-dark-orange/icy-dark/dark-blue/photon-dark
  light_theme: github-light
  dark_theme: photon-dark
  js:
  option:

# Facebook Comments Plugin
# https://developers.facebook.com/docs/plugins/comments/
facebook_comments:
  app_id:
  # optional
  user_id:
  pageSize: 10
  # Choose: social / time / reverse_time
  order_by: social
  lang: zh_TW

# Twikoo
# https://github.com/imaegoo/twikoo
twikoo:
  envId:
  region:
  # Use Twikoo visitor count as the page view count
  visitor: false
  option:

# Giscus
# https://giscus.app/
giscus:
  repo:
  repo_id:
  category_id:
  light_theme: light
  dark_theme: dark
  js:
  option:

# Remark42
# https://remark42.com/docs/configuration/frontend/
remark42:
  host:
  siteId:
  option:

# Artalk
# https://artalk.js.org/guide/frontend/config.html
artalk:
  server:
  site:
  # Use Artalk visitor count as the page view count
  visitor: false
  option:

# --------------------------------------
# Chat Services
# --------------------------------------

chat:
  # Choose: chatra/tidio/crisp
  # Leave it empty if you don't need chat
  use:
  # Chat Button [recommend]
  # It will create a button in the bottom right corner of website, and hide the origin button
  rightside_button: false
  # The origin chat button is displayed when scrolling up, and the button is hidden when scrolling down
  button_hide_show: false

# https://chatra.io/
chatra:
  id:

# https://www.tidio.com/
tidio:
  public_key:

# https://crisp.chat/en/
crisp:
  website_id:

# --------------------------------------
# Analysis
# --------------------------------------

# https://tongji.baidu.com/web/welcome/login
baidu_analytics:

# https://analytics.google.com/analytics/web/
google_analytics:

# https://www.cloudflare.com/zh-tw/web-analytics/
cloudflare_analytics:

# https://clarity.microsoft.com/
microsoft_clarity:

# https://umami.is/
umami_analytics:
  enable: false
  # For self-hosted setups, configure the hostname of the Umami instance
  serverURL:
  website_id:
  option:
  UV_PV:
    site_uv: false
    site_pv: false
    page_pv: false
    # Umami Cloud (API key) / self-hosted Umami (token)
    token:

# --------------------------------------
# Advertisement
# --------------------------------------

# Google Adsense
google_adsense:
  enable: false
  auto_ads: true
  js: https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
  client:
  enable_page_level_ads: true

# Insert ads manually
# Leave it empty if you don't need ads
ad:
  # Insert ads in the index (every three posts)
  index:
  # Insert ads in aside
  aside:
  # Insert ads in the post (before pagination)
  post:

# --------------------------------------
# Verification
# --------------------------------------

site_verification:
  # - name: google-site-verification
  #   content: xxxxxx
  # - name: baidu-site-verification
  #   content: xxxxxxx

# --------------------------------------
# Beautify / Effect
# --------------------------------------

# Theme color for customize
# Notice: color value must in double quotes like "#000" or may cause error!

# theme_color:
#   enable: true
#   main: "#49B1F5"
#   paginator: "#00c4b6"
#   button_hover: "#FF7242"
#   text_selection: "#00c4b6"
#   link_color: "#99a9bf"
#   meta_color: "#858585"
#   hr_color: "#A4D8FA"
#   code_foreground: "#F47466"
#   code_background: "rgba(27, 31, 35, .05)"
#   toc_color: "#00c4b6"
#   blockquote_padding_color: "#49b1f5"
#   blockquote_background_color: "#49b1f5"
#   scrollbar_color: "#49b1f5"
#   meta_theme_color_light: "ffffff"
#   meta_theme_color_dark: "#0d0d0d"

# The user interface setting of category and tag page
# Choose: index - same as Homepage UI / default - same as archives UI
# leave it empty or index
category_ui:
tag_ui:

# Rounded corners for UI elements
rounded_corners_ui: true

# Stretches the lines so that each line has equal width
text_align_justify: false

# Add a mask to the header and footer
mask:
  header: true
  footer: true

# Loading Animation
preloader:
  enable: false
  # source
  # 1. fullpage-loading
  # 2. pace (progress bar)
  source: 1
  # pace theme (see https://codebyzach.github.io/pace/)
  pace_css_url:

# Page Transition
enter_transitions: true

# Default display mode - light (default) / dark
display_mode: light

# Configuration for beautifying the content of the article
beautify:
  enable: false
  # Specify the field to beautify (site or post)
  field: post
  # Specify the icon to be used as a prefix for the title, such as '\f0c1'
  title_prefix_icon:
  # Specify the color of the title prefix icon, such as '#F47466'
  title_prefix_icon_color:

# Global font settings
# Don't modify the following settings unless you know how they work
font:
  global_font_size:
  code_font_size:
  font_family:
  code_font_family:

# Font settings for the site title and site subtitle
blog_title_font:
  font_link:
  font_family:

# The setting of divider icon
hr_icon:
  enable: true
  # The unicode value of Font Awesome icon, such as '\3423'
  icon:
  icon_top:

# Typewriter Effect
# https://github.com/disjukr/activate-power-mode
activate_power_mode:
  enable: false
  colorful: true
  shake: true
  mobile: false

# Background effects
# --------------------------------------

# canvas_ribbon
# See: https://github.com/hustcc/ribbon.js
canvas_ribbon:
  enable: false
  # The size of ribbon
  size: 150
  # The opacity of ribbon (0 ~ 1)
  alpha: 0.6
  zIndex: -1
  click_to_change: false
  mobile: false

# Fluttering Ribbon
canvas_fluttering_ribbon:
  enable: false
  mobile: false

# canvas_nest
# https://github.com/hustcc/canvas-nest.js
canvas_nest:
  enable: false
  # Color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
  color: '0,0,255'
  # The opacity of line (0~1)
  opacity: 0.7
  # The z-index property of the background
  zIndex: -1
  # The number of lines
  count: 99
  mobile: false

# Mouse click effects: fireworks
fireworks:
  enable: false
  zIndex: 9999
  mobile: false

# Mouse click effects: Heart symbol
click_heart:
  enable: false
  mobile: false

# Mouse click effects: words
clickShowText:
  enable: false
  text:
    # - I
    # - LOVE
    # - YOU
  fontSize: 15px
  random: false
  mobile: false

# --------------------------------------
# Lightbox Settings
# --------------------------------------

# Choose: fancybox / medium_zoom
# https://github.com/francoischalifour/medium-zoom
# https://fancyapps.com/fancybox/
# Leave it empty if you don't need lightbox
lightbox:

# --------------------------------------
# Tag Plugins settings
# --------------------------------------

# Series
series:
  enable: false
  # Order by title or date
  orderBy: 'title'
  # Sort of order. 1, asc for ascending; -1, desc for descending
  order: 1
  number: true

# ABCJS - The ABC Music Notation Plugin
# https://github.com/paulrosen/abcjs
abcjs:
  enable: false
  per_page: true

# Mermaid
# https://github.com/mermaid-js/mermaid
mermaid:
  enable: false
  # Write Mermaid diagrams using code blocks
  code_write: false
  # built-in themes: default / forest / dark / neutral
  theme:
    light: default
    dark: dark

# chartjs
# see https://www.chartjs.org/docs/latest/
chartjs:
  enable: false
  # Do not modify unless you understand how they work.
  # The default settings are only used when the MD syntax is not specified.
  # General font color for the chart
  fontColor:
    light: "rgba(0, 0, 0, 0.8)"
    dark: "rgba(255, 255, 255, 0.8)"
  # General border color for the chart
  borderColor:
    light: "rgba(0, 0, 0, 0.1)"
    dark: "rgba(255, 255, 255, 0.2)"
  # Background color for scale labels on radar and polar area charts
  scale_ticks_backdropColor:
    light: "transparent"
    dark: "transparent"

# Note - Bootstrap Callout
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: flat
  icons: true
  border_radius: 3
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0

# --------------------------------------
# Other Settings
# --------------------------------------

# https://github.com/MoOx/pjax
pjax:
  enable: false
  # Exclude the specified pages from pjax, such as '/music/'
  exclude:
    # - /xxxxxx/

# Inject the css and script (aplayer/meting)
aplayerInject:
  enable: false
  per_page: true

# Snackbar - Toast Notification
# https://github.com/polonel/SnackBar
# position: top-left / top-center / top-right / bottom-left / bottom-center / bottom-right
snackbar:
  enable: false
  position: bottom-left
  # The background color of Toast Notification in light mode and dark mode
  bg_light: '#49b1f5'
  bg_dark: '#1f1f1f'

# Instant.page
# https://instant.page/
instantpage: false

# Lazyload
# https://github.com/verlok/vanilla-lazyload
lazyload:
  enable: false
  # Use browser's native lazyload instead of vanilla-lazyload
  native: false
  # Specify the field to use lazyload (site or post)
  field: site
  placeholder:
  blur: false

# PWA
# See https://github.com/JLHwung/hexo-offline
# ---------------
pwa:
  enable: false
  manifest:
  apple_touch_icon:
  favicon_32_32:
  favicon_16_16:
  mask_icon:

# Open graph meta tags
# https://hexo.io/docs/helpers#open-graph
Open_Graph_meta:
  enable: true
  option:
    # twitter_card:
    # twitter_image:
    # twitter_id:
    # twitter_site:
    # google_plus:
    # fb_admins:
    # fb_app_id:

# Structured Data
# https://developers.google.com/search/docs/guides/intro-structured-data
structured_data: true

# Add the vendor prefixes to ensure compatibility
css_prefix: true

# Inject
# Insert the code to head (before '</head>' tag) and the bottom (before '</body>' tag)
inject:
  head:
    # - <link rel="stylesheet" href="/xxx.css">
  bottom:
    # - <script src="xxxx"></script>

# CDN Settings
# Don't modify the following settings unless you know how they work
CDN:
  # The CDN provider for internal and third-party scripts
  # Options for both: local/jsdelivr/unpkg/cdnjs/custom
  # Note: Dev version can only use 'local' for internal scripts
  # Note: When setting third-party scripts to 'local', you need to install hexo-butterfly-extjs
  internal_provider: local
  third_party_provider: jsdelivr

  # Add version number to url, true or false
  version: false

  # Custom format
  # For example: https://cdn.staticfile.org/${cdnjs_name}/${version}/${min_cdnjs_file}
  custom_format:

  option:
```

## Language

Modify Hexo's configuration file `_config.yml`

The default language is `en`

The theme supports the following languages:

- default (en)
- zh-CN (Simplified Chinese)
- zh-TW (Traditional Chinese)
- zh-HK (Traditional Chinese)
- ja (Japanese)
- ko (Korean)

```yaml

## Website Information

To modify various website data, such as title, subtitle, and personal information like email, please edit Hexo's `_config.yml`

![butterfly-docs-hexo-config.png](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-hexo-config.png)

## Navigation

### Parameter Settings

```yaml
nav:
  # Navigation bar logo image
  logo: /xxxx.png
  display_title: true
  # Whether to fix navigation bar
  fixed: false
```

| Parameter     | Explanation                                          |
| ------------- | ---------------------------------------------------- |
| logo          | The website's logo, supports images, just input the image link |
| display_title | Whether to display the website title, write true or false |
| fixed         | Whether to fix the status bar, write true or false   |

### Menu

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

Must be `/xxx/`, followed by `||` to separate, then write the icon name.

If you do not wish to display an icon, the icon name can be omitted.

By default, subdirectories are expanded. If you want to hide them, add `hide` inside the subdirectory.

```yaml
List||fas fa-list||hide:
  Music: /music/ || fas fa-music
  Movie: /movies/ || fas fa-video
```

**Note：** The text of the navigation can be changed as desired.

For example:

```markdown
menu:
  Home: / || fas fa-home
  Timeline: /archives/ || fas fa-archive
  Tags: /tags/ || fas fa-tags
  Categories: /categories/ || fas fa-folder-open
  List||fa fa-heartbeat:
  Music: /music/ || fas fa-music
  Photos: /Gallery/ || fas fa-images
  Movies: /movies/ || fas fa-video
  Links: /link/ || fas fa-link
  About: /about/ || fas fa-heart
```

![hexo-theme-butterfly-doc-menu.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-menu.png)

## Code Blocks

{% note info %}

All features within code blocks are only applicable to Hexo's built-in code rendering.

If using a third-party renderer, it may not be effective.

{% endnote %}

```yaml
code_blocks:
  # Code block theme: darker / pale night / light / ocean / false
  theme: light
  macStyle: false
  # Code block height limit (unit: px)
  height_limit: false
  word_wrap: false

  # Toolbar
  copy: true
  language: true
  # true: shrink the code blocks | false: expand the code blocks | none: expand code blocks and hide the button
  shrink: false
  fullpage: false
```

| Parameter    | Explanation                                                       |
| ------------ | ----------------------------------------------------------------- |
| theme        | Code highlight theme, options: darker / pale night / light / ocean / false |
| macStyle     | Whether to use Mac style                                          |
| height_limit | Code block height limit (unit: px), can be a number or false      |
| word_wrap    | Whether to automatically wrap lines                               |
| copy         | Whether to show the copy button                                   |
| language     | Whether to show the language label                                |
| shrink       | true: collapse code block / false: expand code block / none: expand code block and hide button |
| fullpage     | Whether to show the full page button                  |

### Code Highlight Theme

{% tabs highlight-theme %}

<!-- tab Default Theme -->

`Butterfly` supports 4 types of code highlight styles:

- darker
- pale night
- light
- ocean

If you need a MacOS style code highlight, you can set `macStyle` to `true`.

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
darker
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-code-darker.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
pale night
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-code-pane-night.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
light
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-code-light.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
ocean
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-code-orcean.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
macStyle
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-code-macstyle-light.png)

<!-- endtab -->

<!-- tab Custom Theme -->

Starting from version 3.0, the theme supports custom code color themes.

To learn how to create a custom theme, refer to the following article:

{% post_link customize-code-coloring 'Custom Code Colors' %}

<!-- endtab -->

{% endtabs %}

### Code Block Expand/Collapse

By default, code blocks are automatically expanded. You can set whether all code blocks are in a collapsed state, and they can be expanded by clicking `>`.

- true All code blocks are collapsed and require clicking `>` to open.
- false Code blocks are expanded and have a `>` click button.
- none The `>` button is not displayed.

```yaml
highlight_shrink: true # Code blocks are collapsed and require clicking '>' to open.
```

{% note info %}

You can also add `highlight_shrink` in the front-matter of the corresponding markdown file for a post/page to configure it independently.

When `highlight_shrink` in the **theme configuration file** is set to true, you can add `highlight_shrink: false` in the front-matter to configure the article to expand code blocks individually.

When `highlight_shrink` in the **theme configuration file** is set to false, you can add `highlight_shrink: true` in the front-matter to configure the article to collapse code blocks individually.

{% endnote %}

`highlight_shrink: true`

![hexo-theme-butterfly-doc-highlight-shrink-true.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-highlight-shrink-true.png)

`highlight_shrink: false`

![hexo-theme-butterfly-doc-highlight-shrink-false.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-highlight-shrink-false.png)

`highlight_shrink: none`

![hexo-theme-butterfly-docs-highlight-shirk-none.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-highlight-shirk-none.png)

### Code Word Wrap

By default, Hexo does not implement automatic word wrapping for code during compilation. If you prefer not to have a horizontal scrollbar within the code block area, you might want to enable this feature.

```yaml
code_word_wrap: true
```

If you are using highlight for rendering, you need to find your site's Hexo configuration file `_config.yml` and change `line_number` to `false`:

```yaml
highlight:
  enable: true
  line_number: false # <- Change here
  auto_detect: false
  tab_replace:
```

If you are using prismjs for rendering, you need to find your site's Hexo configuration file `_config.yml` and change `line_number` to `false`:

```yaml
prismjs:
  enable: false
  preprocess: true
  line_number: false # <- Change here
  tab_replace: ''
```

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Before setting `code_word_wrap`
{% endnote %}

![hexo-theme-butterfly-doc-code-word-wrap-before.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-code-word-wrap-before.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
After setting `code_word_wrap`
{% endnote %}

![hexo-theme-butterfly-doc-code-word-wrap-after.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-code-word-wrap-after.png)

### Code Height Limit

{% note pink 'fa-solid fa-bell' %}
Supported from version 3.7.0 and above
{% endnote %}

You can configure a height limit for code blocks. Any content exceeding this limit will be hidden, with a button to expand it shown.

```yaml
highlight_height_limit: false # unit: px
```

Notes:

1. The unit is `px`. Add a number directly, such as 200.

2. The actual height limit is `highlight_height_limit + 30 px`. An additional 30px is added to the limit to avoid showing the expand button when the code height exceeds the limit by just a little, resulting in no content being shown upon expansion.

3. This does not apply to code blocks that are hidden (with CSS `display: none`).

![](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-highlight-heigh-limit.gif)

## Social Icons

Butterfly supports [font-awesome v6](https://fontawesome.com/icons?from=io) icons.

The format is `icon name: url || descriptive text || color`

```yaml
social:
  fab fa-github: https://github.com/xxxxx || Github || "#hdhfbb"
  fas fa-envelope: mailto:xxxxxx@gmail.com || Email || "#000000"
```

You can find the icon names here

![hexo-theme-butterfly-doc-fontawesome.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-fontawesome.png)

PC:

!![hexo-theme-butterfly-doc-fontawesome.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-fontawesome.png)

Mobile:

![hexo-theme-butterfly-doc-socila-icon-mobile.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-socila-icon-mobile.png)

## Image Settings

### Avatar

```yaml
avatar:
  img: /img/avatar.png
  effect: true # The avatar will keep rotating
```

![hexo-theme-butterfly-doc-avatar.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-avatar.png)

### Top Image

{% note info %}

If you do not want to display the top image, you can directly configure `disable_top_img: true`

{% endnote %}

{% note primary %}

The order of obtaining the top image, if none are configured, the top image will not be displayed.

1. The order of obtaining the top image for pages:

   `Individually configured top_img` > `default_top_img in the configuration file`

2. The order of obtaining the top image for article pages:

   `Individually configured top_img` > `cover` > `default_top_img in the configuration file`

{% endnote %}

Values in the configuration:

| Configuration     | Explanation                                                           |
| ----------------- | --------------------------------------------------------------------- |
| index_img         | Top image for the homepage                                            |
| default_top_img   | Default top image, displayed when the page's top_img is not configured |
| archive_img       | Top image for the archive page                                        |
| tag_img           | Default top image for tag subpages                                    |
| tag_per_img       | Top image for tag subpages, can configure a top_img for each tag      |
| category_img      | Default top image for category subpages                               |
| category_per_img  | Top image for category subpages, can configure a top_img for each category |

For other pages (tags/categories/custom pages) and article pages, set the `top_img` in the `front-matter` of the corresponding markdown page.

All the above top_img can be configured with the following values:

| Configuration Value                                                                                                                        | Effect                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Leave empty                                                                                                                                | Display the default top_img (if any), otherwise display the default color<br>(If the top_img of the article page is empty, the cover value will be displayed) |
| img link                                                                                                                                   | Link to the image, display the configured image                                                  |
| Color (<br>HEX value - \#0000FF<br>RGB value - rgb(0,0,255)<br>Color word - orange<br>Gradient color - linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)<br>) | Corresponding color                                                                              |
| transparent                                                                                                                                | Transparent                                                                                      |
| false                                                                                                                                      | Do not display top_img                                                                           |

`tag_per_img` and `category_per_img` are new in version 3.2.0, allowing individual configuration for tags and categories.

It is not recommended to configure different top images for each tag and category, as too many configurations will slow down the generation speed.

```yaml
tag_per_img:
  aplayer: https://xxxxxx.png
  android: ddddddd.png

category_per_img：
  隨想: hdhdh.png
  推薦: ddjdjdjd.png
```

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
top_img: false
{% endnote %}

![theme-butterfly-docs-page-top-img-false.png](https://oss.012700.xyz/butterfly/2024/09/theme-butterfly-docs-page-top-img-false.png)

![theme-butterfly-docs-post-top-img-false-new.png](https://oss.012700.xyz/butterfly/2024/09/theme-butterfly-docs-post-top-img-false-new.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
top_img: orange
{% endnote %}

![theme-butterfly-docs-top-img-orange.png](https://oss.012700.xyz/butterfly/2024/09/theme-butterfly-docs-top-img-orange.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
top_img: 'linear-gradient(20deg, #0062be, #925696, #cc426e, #fb0347)'
{% endnote %}

![theme-butterfly-docs-top-img-color.png](https://oss.012700.xyz/butterfly/2024/09/theme-butterfly-docs-top-img-color.png)

### Footer Background Image

```yaml
# Whether to display an image background for the footer (same as top_img)
footer_img: true
```

| Configuration Value                                            | Effect                        |
| -------------------------------------------------------------- | ----------------------------- |
| Leave empty/false                                              | Display the default color     |
| img link                                                       | Link to the image, display the configured image |
| Color (<br>HEX value - \#0000FF<br>RGB value - rgb(0,0,255)<br>Color word - orange<br>Gradient color - linear-gradient( 135deg, #E2B0FF 10%, #9F44D3 100%)<br>) | Corresponding color            |
| transparent                                                    | Transparent                   |
| true                                                           | Display the same as top_img   |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
true
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-footer.png)

### Website Background

The default display is white, you can set an image or color

```yaml
# Color (HEX value/RGB value/Color word/Gradient color)
# Leave empty to not display a background
background:
```

*Note:* If your website root directory is not '/', when using local images, you need to add your root directory.
For example: if the website is `https://yoursite.com/blog`, and you reference an image `img/xx.png`, then set the background to `/blog/img/xx.png`

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
background:'#49B202'
{% endnote %}

![hexo-theme-butterfly-doc-set-body-background-color.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-set-body-background-color.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
background: https://i.loli.net/2019/09/09/5oDRkWVKctx2b6A.png
{% endnote %}

![hexo-theme-butterfly-doc-set-body-background-img.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-set-body-background-img.png)

## Article Cover

In the markdown document of the article, add `cover` in the `Front-matter` and fill in the image address to be displayed.

If `cover` is not configured, you can set a default cover to display.

If you do not want to display the cover on the homepage, you can set it to `false`.

{% note info %}
The order of obtaining the article cover: `Front-matter cover` >`default_cover in the configuration file` > `false`
{% endnote %}

```yaml
cover:
  # Whether to display the article cover
  index_enable: true
  aside_enable: true
  archives_enable: true
  default_cover:
```

| Parameter         | Explanation                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| index_enable      | Whether to display the article cover on the homepage                                                                     |
| aside_enable      | Whether to display the article cover in the aside                                                                      |
| archives_enable   | Whether to display the article cover on the archive page                                                                 |
| default_cover     | Default cover, can configure image link/color/gradient color etc.                                                        |

When multiple images are configured, one will be randomly selected as the cover. The configuration should be written as

```yaml
default_cover:
  - https://jsd.012700.xyz/gh/jerryc127/CDN@latest/cover/default_bg.png
  - https://jsd.012700.xyz/gh/jerryc127/CDN@latest/cover/default_bg2.png
  - https://jsd.012700.xyz/gh/jerryc127/CDN@latest/cover/default_bg3.png
```

![hexo-theme-butterfly-doc-post-cover.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-post-cover.png)

![hexo-theme-butterfly-doc-post-cover-show.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-post-cover-show.png)

![hexo-theme-butterfly-docs-cover-false.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-cover-false.png)

## Page Meta Display

This option is used to display related information about the article.

```yaml
post_meta:
  # Home Page
  page:
    # Choose: created / updated / both
    date_type: created
    # Choose: date / relative
    date_format: date
    categories: true
    tags: false
    label: true
  post:
    # Choose: left / center
    position: left
    # Choose: created / updated / both
    date_type: both
    # Choose: date / relative
    date_format: date
    categories: true
    tags: true
    label: true
```

Home Page：

| Parameter  | Explanation                                                           |
| ---------- | ---------------------------------------------------------------------- |
| date_type  | Displays the article's time, options: created / updated / both         |
| date_format | Configures whether to show the exact time or relative time, options: date / relative |
| categories | Whether to display the article's categories                           |
| tags       | Whether to display the article's tags                                 |
| label      | Whether to display text labels                                        |

Post：

| Parameter  | Explanation                                                           |
| ---------- | ---------------------------------------------------------------------- |
| position   | Position of the article page meta display, options: left / center      |
| date_type  | Displays the article's time, options: created / updated / both         |
| date_format | Configures whether to show the exact time or relative time, options: date / relative |
| categories | Whether to display the article's categories                           |
| tags       | Whether to display the article's tags                                 |
| label      | Whether to display text labels                                        |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Home Page
{% endnote %}

![hexo-theme-butterfly-docs-page-meta.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-page-meta.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Post
{% endnote %}

![hexo-theme-butterfly-doc-post-info.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-post-info.png)

![hexo-theme-butterfly-doc-post-tag.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-post-tag.png)

`date_format` is a new feature in version 3.2.0, allowing configuration of displaying exact or relative time.

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Relative Time
{% endnote %}

![theme-butterfly-docs-relative-time.png](https://oss.012700.xyz/butterfly/2024/09/theme-butterfly-docs-relative-time.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Exact Time
{% endnote %}

![theme-butterfly-docs-full-date.png](https://oss.012700.xyz/butterfly/2024/09/theme-butterfly-docs-full-date.png)

## Home Page

### Home Page Top Image Size

By default, the display is full-screen, and site information is centered.

```yaml
# Home page settings
# Default top_img is full screen, site_info is centered
# No need to fill if using default (recommended)
index_site_info_top:  # Distance of home page title from top, e.g., 300px/300em/300rem/10%
index_top_img_height:  # Height of home page top_img, e.g., 300px/300em/300rem, percentage not allowed
```

Note: The value of `index_top_img_height` cannot be a percentage. If both are not filled, default values will be used.

Example: when

```yaml
index_top_img_height: 400px
```

Effect:

![hexo-theme-butterfly-doc-index-top-img-setting.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-index-top-img-setting.png)

### Website Subtitle

Set a subtitle or favorite motto to display on the home page.

```yaml
# Home page subtitle
subtitle:
  enable: false
  # Typewriter Effect
  effect: true
  # Customize typed.js
  # https://github.com/mattboldt/typed.js/#customization
  typed_option:
  # source: call third-party service
  # false: disable
  # 1: call a sentence from hitokoto.cn (simplified Chinese)
  # 2: call yijuzhan.com (simplified Chinese)
  # 3: call jinrishici.com (simplified Chinese)
  # subtitle will first display source, then sub content
  source: false
  # If typewriter effect is off, subtitle will only display the first line of sub
  sub:
    - Never put off till tomorrow what you can do today
```

![hexo-theme-butterfly-doc-index-subtitle.gif](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-index-subtitle.gif)

### Home Page Card Layout

The theme supports seven types of card layouts for the home page

```yaml
index_layout: 3
```

| 配置值 | 解釋                                                                 |
| ------ | -------------------------------------------------------------------- |
| 1      | Cover on the left, info on the right                                            |
| 2      | Cover on the right, info on the left                                                   |
| 3      | Cover and info alternate between left and right                                               |
| 4      | Cover on top, info on the bottom                                                   |
| 5      | Info displayed on the cover                                                     |
| 6      | Masonry layout - Cover on top, info on the bottom                                     |
| 7      | Masonry layout - Info displayed on the cover                                       |

Just fill in the `number`, the default is 3

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
1: Cover on the left, info on the right
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/10/butterfly-docs-index-layout-1.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
2: Cover on the right, info on the left
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/10/butterfly-docs-index-layout-2.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
3: Cover and info alternate between left and right
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/10/butterfly-docs-index-layout-3.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
4: Cover on top, info on the bottom
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/10/butterfly-docs-index-layout-4.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
5: Info displayed on the cover
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/10/butterfly-docs-index-layout-5.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
6: Masonry layout - Cover on top, info on the bottom
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/10/butterfy-docs-index-layout-6.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
7: Masonry layout - Info displayed on the cover
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/10/butterfly-docs-index-layout-7.png)

### Home Page Article Excerpts

Due to the theme's UI, `home page article excerpts` only support `automatic excerpts` and `article description`.

```yaml
# Display the article introduction on homepage
# 1: description
# 2: both (if the description exists, it will show description, or show the auto_excerpt)
# 3: auto_excerpt (default)
# false: do not show the article introduction
index_post_content:
  method: 3
  # If you set method to 2 or 3, the length need to config
  length: 500
```

| Parameter | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| method    | Method to display article content, four options available <br> 1 - Display only description <br> 2 - Prefer description, if not configured, display auto excerpt <br> 3 - Display only auto excerpt <br> 4 - Do not display article content |
| length    | Length of the auto excerpt, only needs to be configured when method is 2 or 3                       |

Add `description` in front-matter:

![hexo-theme-butterfly-doc-post-description.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-post-description.png)

## Article Page

### TOC (Table of Contents)

Display TOC (Table of Contents) in the aside.

```yaml
toc:
  post: true
  page: false
  number: true
  expand: false
  # Only for post
  style_simple: false
  scroll_percent: true
```

| Attribute       | Explanation                                         |
| --------------- | --------------------------------------------------- |
| post            | Whether to display TOC in article pages             |
| page            | Whether to display TOC in regular pages             |
| number          | Whether to show section numbers                     |
| expand          | Whether to expand the TOC                           |
| style_simple    | Simple mode (aside **only** shows TOC, only for articles) |
| scroll_percent  | Whether to show scroll progress percentage          |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Toc PC
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-toc-pc.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Toc Mobile
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-mobile.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
style_simple: true
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-toc-simple.png)

#### Configuring for Specific Articles

Add `toc_number` and `toc` at the top of your article's `md` file, and set them to `true` or `false`.

The theme will prioritize the Front-matter configuration of the article's Markdown file. If not configured, it will use the configuration in the **theme configuration file**.

### Article Copyright

Display copyright and license information for your blog articles.

```yaml
post_copyright:
  # Enable copyright declaration
  enable: true
  # URL decode
  decode: false
  # Author link
  author_href:
  # License type
  license: CC BY-NC-SA 4.0
  # License link
  license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
```

Since `Hexo 4.1`, URLs are decoded by default, so Chinese URLs will be decoded. Set `decode: true` to display Chinese URLs.

If some articles (e.g., reprints) do not need to display copyright, you can set it individually in the article's Front-matter:

```yaml
copyright: false
```

From version `3.0.0`, individual articles can have their own copyright information. Set it individually in the article's Front-matter:

```markdown
copyright_author: xxxx
copyright_author_href: https://xxxxxx.com
copyright_url: https://xxxxxx.com
copyright_info: 此文章版權歸 xxxxx 所有，如有轉載，請註明來自原作者
```

**Copyright Display Screenshot**

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-copyright.png)

### Article Donations/Sponsorship

At the end of each of your articles, you can add a donation button. You can configure the relevant QR codes yourself.

For those who haven't provided QR codes, you can configure an icon image for software and add the corresponding donation link. When users click the image, they'll be redirected to the link.

The link can be omitted, and it will default to the image link.

```yaml
reward:
  enable: true
  text:
  QR_code:
    - img: /img/wechat.jpg
      link:
      text: WeChat
    - img: /img/alipay.jpg
      link:
      text: Alipay
```

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-donate.png)

### Article Edit Button

Display an edit button next to the article title. When clicked, it will redirect to the corresponding link.

```yaml
# Post edit
# Easily browse and edit blog source code online.
post_edit:
  enable: false
  # url: https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name/
  # For example: https://github.com/jerryc127/butterfly.js.org/edit/main/source/
  url:
```

![hexo-theme-butterfly-docs-post-edit.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-post-edit.png)

![hexo-theme-butterfly-docs-post-edit-2.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-post-edit-2.png)

### Related Articles

{% note warning %}
When the article cover is set to false or no cover configuration is available, the background for related articles will display the theme color.
{% endnote %}

The related articles recommendation is based on the tags associated with each article.

```yaml
related_post:
  enable: true
  limit: 6 # Display the number of recommended articles
  date_type: created # or created or updated (display creation date or update date)
```

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-releatedpost.png)

### Article Pagination Buttons

{% note warning %}
When the article cover is set to false or no cover configuration is available, the background for pagination will display the theme color.
{% endnote %}

You can configure the logic for pagination or disable pagination display altogether.

```yaml
# post_pagination
# value: 1 || 2 || false
# 1: The 'next post' will link to old post
# 2: The 'next post' will link to new post
# false: disable pagination
post_pagination: false
```

| Parameter              | Explanation                   |
| ---------------------- | ------------------------------|
| post_pagination: false | Disable pagination buttons    |
| post_pagination: 1     | Next post links to older post |
| post_pagination: 2     | Next post links to newer post |

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-post-pagination.png)

### Outdated Article Reminder

{% note warning %}
if you want to close the out-of-date reminder for certain articles, you can configure `noticeOutdate: false` in the corresponding article's `front-matter` to close it individually.
{% endnote %}

You can choose to display an outdated notice for articles based on their update time.

```yaml
# Displays outdated notice for a post
noticeOutdate:
  enable: false
  # Style: simple / flat
  style: flat
  # When will it be shown
  limit_day: 365
  # Position: top / bottom
  position: top
  message_prev: It has been
  message_next: days since the last update, the content of the article may be outdated.
```

| Configuration | Explanation |
| --------------| ----------- |
| enable        | Enable article outdated notice |
| style         | Notice style: simple / flat |
| limit_day     | Set how many days before the notice appears (default: 365 days) |
| position      | Notice position: top / bottom |
| message_prev  | Custom message (prefix) |
| message_next  | Custom message (suffix) |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
style: flat
{% endnote %}

![hexo-theme-butteffly-docs-outdate-flat.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butteffly-docs-outdate-flat.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
style: simple
{% endnote %}

![hexo-theme-butterfly-docs-outdated-simple.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-outdated-simple.png)

## Footer

### Blog Start Year

The `since` option displays the starting year of your site. It appears at the bottom of the page.

```yaml
footer:
  owner:
    enable: true
    since: 2018
```

![hexo-theme-butterfly-doc-since.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-since.png)

### Custom Footer Text

The `custom_text` option allows you to add custom text to the footer. You can use HTML here to write statements or other content.

```yaml
custom_text: Hi, welcome to my <a href="https://butterfly.js.org/">blog</a>!
```

![hexo-theme-butterfly-doc-footer-text.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-footer-text.png)

For those who need to include an ICP (Internet Content Provider) number, you can also add it within the `custom_text`:

```yaml
custom_text: <a href="ICP link"><img class="icp-icon" src="ICP image"><span>Record Number：xxxxxx</span></a>
```

## Aside

### Aside Configuration

```yaml
aside:
  enable: true
  hide: false
  # Show the button to hide the aside in bottom right button
  button: true
  mobile: true
  # Position: left / right
  position: right
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
    # If set 0 will show all
    limit: 5
    # Sort: date / updated
    sort: date
    sort_order:
  card_newest_comments:
    enable: false
    sort_order:
    limit: 6
    # Unit: mins, save data to localStorage
    storage: 10
    avatar: true
  card_categories:
    enable: true
    # If set 0 will show all
    limit: 8
    # Choose: none / true / false
    expand: none
    sort_order:
  card_tags:
    enable: true
    # If set 0 will show all
    limit: 40
    color: false
    # Order of tags, random/name/length
    orderby: random
    # Sort of order. 1, asc for ascending; -1, desc for descending
    order: 1
    sort_order:
  card_archives:
    enable: true
    # Type: monthly / yearly
    type: monthly
    # Eg: YYYY年MM月
    format: MMMM YYYY
    # Sort of order. 1, asc for ascending; -1, desc for descending
    order: -1
    # If set 0 will show all
    limit: 8
    sort_order:
  card_post_series:
    enable: true
    # The title shows the series name
    series_title: false
    # Order by title or date
    orderBy: 'date'
    # Sort of order. 1, asc for ascending; -1, desc for descending
    order: -1
  card_webinfo:
    enable: true
    post_count: true
    last_push_date: true
    sort_order:
    # Time difference between publish date and now
    # Formal: Month/Day/Year Time or Year/Month/Day Time
    # Leave it empty if you don't enable this feature
    runtime_date:
```

{% note info %}
`sort_order` is used to configure the order of each card. If not configured, it will follow the order in the theme configuration file. The smaller the number, the higher its position.
{% endnote %}

| Configuration | Explanation |
| -------------- | -------------------------------------------------------------------------------------- |
| enable         | Whether to enable the sidebar                                                          |
| hide           | Whether to hide the sidebar by default                                                |
| button         | Whether to show the button to hide/show the sidebar                                   |
| mobile         | Whether to display the sidebar on mobile devices                                      |
| position       | Sidebar position, left / right                                                        |
| display.archive| Whether to display aside on the archive page                                          |
| display.tag    | Whether to display aside on the tag page                                              |
| display.category| Whether to display aside on the category page                                        |
| card_author.enable| Whether to display the author card                                                   |
| card_author.description| Author description information                                                     |
| card_author.button.enable| Whether to display the button                                                     |
| card_author.button.icon| Button icon, you can find the icon name here: https://fontawesome.com/icons?d=gallery&m=free |
| card_author.button.text| Button text                                                                         |
| card_author.button.link| Button link                                                                         |
| card_announcement.enable| Whether to display the announcement card                                           |
| card_announcement.content| Announcement content (HTML tags can be used)                                       |
| card_recent_post.enable| Whether to display the recent posts card                                           |
| card_recent_post.limit| Number of posts to display, 0 for all                                               |
| card_recent_post.sort| Sorting method, date / updated                                                      |
| card_newest_comments.enable| Whether to display the newest comments card                                        |
| card_newest_comments.limit| Number of comments to display, 0 for all                                           |
| card_newest_comments.storage| Storage time in minutes, saved to local storage to avoid re-fetching data on every refresh |
| card_newest_comments.avatar| Whether to display avatars                                                         |
| card_categories.enable| Whether to display the categories card                                              |
| card_categories.limit| Number of categories to display, 0 for all                                          |
| card_categories.expand| Whether to expand categories, none / true / false                                   |
| card_tags.enable| Whether to display the tags card                                                     |
| card_tags.limit| Number of tags to display, 0 for all                                                 |
| card_tags.color| Whether to display tag colors                                                        |
| card_tags.orderby| Tag sorting method, random / name / length                                           |
| card_tags.order| Sorting method, 1 for ascending, -1 for descending                                   |
| card_archives.enable| Whether to display the archives card                                                |
| card_archives.type| Archive type, monthly / yearly                                                      |
| card_archives.format| Archive display format, e.g., YYYY年MM月                                            |
| card_archives.order| Sorting method, 1 for ascending, -1 for descending                                   |
| card_archives.limit| Number of archives to display, 0 for all                                            |
| card_post_series.enable| Whether to display the post series card                                            |
| card_post_series.series_title| Whether to display the series name                                                |
| card_post_series.orderBy| Sorting method, title / date                                                       |
| card_post_series.order| Sorting method, 1 for ascending, -1 for descending                                  |
| card_webinfo.enable| Whether to display the website info card                                            |
| card_webinfo.post_count| Whether to display the number of posts                                              |
| card_webinfo.last_push_date| Whether to display the last update date                                            |
| card_webinfo.runtime_date| Display the website runtime, no need to enable, leave blank (if enabled, the format must be Month/Day/Year Time or Year/Month/Day Time) |

{% note primary %}

Currently, three comment systems - Livere, Facebook Comments, and Giscus do not support displaying the latest comments.

The latest comments are only loaded upon refreshing the page and do not update in real-time.

Due to API rate limits, to avoid excessive calls, the theme defaults to a storage duration of 10 minutes. This means, after a call, the data will be stored in localStorage, and refreshing the website within 10 minutes will only retrieve data from localStorage. After the 10-minute period, refreshing the page will call the API to load new data. (A `storage` configuration was added in version 3.6.0, allowing for custom cache duration settings.)

{% endnote %}

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
position: left
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-doc-aside-left.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
position: right
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-doc-aside-right.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
card_tags color: false
{% endnote %}

![butterfly-docs-card-tags-color-false.png](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-card-tags-color-false.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
card_tags color: true
{% endnote %}

![butterfly-docs-card-tags-color-true.png](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-card-tags-color-true.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
aside button
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-aside-button.gif)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
website runtime
{% endnote %}

![hexo-theme-butterfly-doc-runtime.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-runtime.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Newest Comments
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-newest-comment.png)

### Custom Add Aside Widget

{% btn '/posts/ea33ab97/','Click to Visit',fas fa-lightbulb,block green %}

## Bottom Right Buttons

### Button Position

When the chat service is enabled, the chat service button may cover the bottom right buttons. You can set the position of these buttons. It's not recommended to adjust this unless necessary, the default is fine.

```yaml
# The distance between the bottom right button and the bottom (default unit: px)
rightside_bottom:
```

The default unit is px, just add the number directly.

### Simplified and Traditional Chinese Conversion

The theme has a built-in simple conversion function between Simplified and Traditional Chinese, using a one-to-one pairing. In cases of multiple Traditional characters for a single Simplified character or vice versa, correct conversion may not occur. Please be aware.

After enabling, there will be a Simplified/Traditional conversion button at the bottom right.

```yaml
translate:
  enable: true
  # Default button display text (if the website is in Simplified Chinese, set as 'default: Traditional')
  default: Simplified
  # Default website language, 1: Traditional Chinese, 2: Simplified Chinese
  defaultEncoding: 1
  # Delay time, if not at the beginning, set a delay translation time, like 100 for 100ms, default is 0
  translateDelay: 0
  # Text displayed on the button when the text is in Simplified Chinese
  msgToTraditionalChinese: 'Traditional'
  # Text displayed on the button when the text is in Traditional Chinese
  msgToSimplifiedChinese: 'Simplified'
```

### Reading Mode

Reading mode removes content other than the article itself to avoid distractions during reading.

It only appears on article pages, with a reading mode button at the bottom right.

```yaml
readmode: true
```

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-doc-read-mode.png)

### Dark Mode

There will be a dark mode button at the bottom right.

```yaml
# dark mode
darkmode:
  enable: true
  button: true
  autoChangeMode: false
  # Set the light mode time. The value is between 0 and 24. If not set, the default value is 6 and 18
  start: # 8
  end: # 22
```

| Parameter           | Explanation                                                                                                                                                                                                                                                      |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| button         | Whether to display the day/night mode switch button at the bottom right                                                                                                                                                                                                                          |
| autoChangeMode | The mode of automatic switching<br />autoChangeMode: 1 Changes according to the system, browsers/systems that do not support this will switch to light mode between the start and end times<br />autoChangeMode: 2 Only switches to light mode between the start and end times, other times will be dark mode<br />autoChangeMode: false Cancels automatic switching |
| start          | The start time for light mode                                                                                                                                                                                                                                     |
| end            | The end time for light mode                                                                                                                                                                                                                                     |

![hexo-theme-butterfly-doc-dark-mode-1.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-dark-mode-1.png)

### Scroll Status Percentage

```yaml
# show scroll percent in scroll-to-top button
rightside_scroll_percent: true
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/hexo-butterfly-docs-scroll-percent-right-btn.gif)

### Button Sorting

You can sort the buttons at the bottom right corner.

**Note：** Do not duplicate

```yaml
# Don't modify the following settings unless you know how they work
# Choose: readmode,translate,darkmode,hideAside,toc,chat,comment
# Don't repeat
rightside_item_order:
  enable: false
  hide: # readmode,translate,darkmode,hideAside
  show: # toc,chat,comment
```

## Global Configuration

### Page Anchors

When page anchors are enabled, the page link will be updated according to the header ID as you scroll.
(Note: Each update will leave a history record. So if an article has many anchors, the web page's history record will be extensive.)

```yaml
# anchor
anchor:
  # when you scroll, the URL will update according to header id.
  auto_update: false
  # Click the headline to scroll and update the anchor
  click_to_scroll: false
```

| Parameter       | Explanation                                                   |
| --------------- | ------------------------------------------------------------- |
| auto_update     | When scrolling, the URL will update according to the header ID. Default is `false`. |
| click_to_scroll | Click the headline to scroll and update the anchor. Default is `false`. |

### Image Captions

You can enable Figcaption to display image descriptions.

It will prioritize the title attribute of the image, followed by the alt attribute.

```yaml
photofigcaption: true
```

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-photo-figcaption.png)

### Copy Configuration

You can configure whether the website content can be copied and whether to add copyright information to the copied content.

```yaml
copy:
  enable: true
  # Add the copyright information after copied content
  copyright:
    enable: false
    limit_count: 150
```

| Parameter    | Explanation                                                     |
| ------------ | --------------------------------------------------------------- |
| enable       | Whether to enable copy permissions for the website              |
| copyright    | Add copyright information after the copied content              |
| enable       | Whether to enable adding copyright information                  |
| limit_count  | Word limit. When the copied text exceeds this limit, copyright information will be added to the copied content |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
After adding copyright information
{% endnote %}

```
Lorem ipsum dolor sit amet, test link consectetur adipiscing elit. Strong text pellentesque ligula commodo viverra vehicula. Italic text at ullamcorper enim. Morbi a euismod nibh. Underline text non elit nisl. Deleted text tristique, sem id condimentum tempus, metus lectus venenatis mauris, sit amet semper lorem felis a eros. Fusce egestas nibh at sagittis auctor. Sed ultricies ac arcu quis molestie. Donec dapibus nunc in nibh egestas, vitae volutpat sem iaculis. Curabitur sem tellus, elementum nec quam id, fermentum laoreet mi. Ut mollis ullamcorper turpis, vitae facilisis velit ultricies sit amet. Etiam laoreet dui odio, id tempus justo tincidunt id. Phasellus scelerisque nunc sed nunc ultricies accumsan.


Author: Jerry
Link: http://localhost:4000/posts/bd3c650b/#Paragraph
Source: Butterfly
Copyright belongs to the author. For commercial reprints, please contact the author for authorization. For non-commercial reprints, please indicate the source.
```

### Word Count

To enable the word count feature, you need to install the `hexo-wordcount` plugin.

Run `npm install hexo-wordcount --save` or `yarn add hexo-wordcount` in the hexo working directory.

```yaml
# Need to install the hexo-wordcount plugin
wordcount:
  enable: false
  # Display the word count of the article in post meta
  post_wordcount: true
  # Display the time to read the article in post meta
  min2read: true
  # Display the total word count of the website in aside's webinfo
  total_wordcount: true
```

| Parameter        | Explanation                                                   |
| ---------------- | ------------------------------------------------------------- |
| post_wordcount   | Display the word count on the article page                    |
| min2read         | Display the reading time on the article page                  |
| total_wordcount  | Display the total word count of the website in the sidebar    |

![hexo-theme-butterfly-doc-word-count.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-word-count.png)

![hexo-theme-butterfly-docs-wordcount-totalcount.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-wordcount-totalcount.png)

### Visitor Count (UV and PV) by busuanzi

Visit the [official website of busuanzi](http://busuanzi.ibruce.info/) for more information.

Due to the stability issues of busuanzi, there may be occasional access problems. Please be aware.

{% note info %}
The visitor count on the article page is implemented through the busuanzi plugin. Some comment systems have their own visitor count feature, which can be enabled in the corresponding comment system configuration and will replace the busuanzi count.
{% endnote %}

```yaml
busuanzi:
  site_uv: true
  site_pv: true
  page_pv: true
```

{% note info %}
If you need to modify the CDN link of busuanzi, you can do so through the `option` in the `CDN` section of the `theme configuration file`.
{% endnote %}

```yaml
CDN:
  option:
  	busuanzi: xxxxxxxxx
```

![hexo-theme-butterfly-doc-busuanzi-site-pv.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-busuanzi-site-pv.png)

![hexo-theme-butterfly-doc-pv.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-pv.png)

## Math

{% tabs Math %}

<!-- tab General Configuration -->

The theme supports two math formula rendering engines, `MathJax` and `KaTeX`. You can choose one according to your needs.

```yaml
# About the per_page
# if you set it to true, it will load mathjax/katex script in each page
# if you set it to false, it will load mathjax/katex script according to your setting (add the 'mathjax: true' or 'katex: true' in page's front-matter)
math:
  # Choose: mathjax, katex
  # Leave it empty if you don't need math
  use:
  per_page: true
  hide_scrollbar: false
```

| Parameter     | Explanation                                                  |
| ------------- | ------------------------------------------------------------ |
| use           | Choose the math formula rendering engine, select `mathjax` or `katex`. Leave it empty if you don't need math formulas. |
| per_page      | Whether to load the math formula rendering engine on each page. If set to `false`, you need to add `mathjax: true` or `katex: true` in the article's `Front-matter` to load the math formula rendering engine for that article. |
| hide_scrollbar| Whether to hide the scrollbar                                 |

<!-- endtab -->

<!-- tab MathJax -->

{% note warning flat %}
Do not use MathJax syntax in titles. The TOC may not display MathJax correctly and might show MathJax code instead.
{% endnote %}

{% note info %}
It is recommended to use KaTeX for better results, as introduced below!
{% endnote %}

To enable MathJax, set `use` to `mathjax`.

MathJax configuration file

```yaml
mathjax:
  # Enable the contextual menu
  enableMenu: true
  # Choose: all / ams / none, This controls whether equations are numbered and how
  tags: none
```

| Parameter   | Explanation                                                  |
| ----------- | ------------------------------------------------------------ |
| enableMenu  | Enable the right-click menu                                  |
| tags        | Choose whether to number equations. `all` for numbering all, `ams` for numbering only equations, `none` for no numbering |

Before using MathJax, you need to uninstall Hexo's markdown renderer and then install [hexo-renderer-kramed](https://www.npmjs.com/package/hexo-renderer-kramed).

Perform the following operations in your Hexo blog directory (**not the Butterfly directory**):

1. Install the plugin

   ```bash
   npm uninstall hexo-renderer-marked --save
   npm install hexo-renderer-kramed --save
   ```

2. Configure the Hexo root directory configuration file

   ```yaml
   kramed:
     gfm: true
     pedantic: false
     sanitize: false
     tables: true
     breaks: true
     smartLists: true
     smartypants: true
   ```

Effect:

![hexo-theme-butterfly-doc-mathjax-2.jpg](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-mathjax-2.jpg)

<!-- endtab -->

<!-- tab KaTeX -->

{% note warning flat %}
Do not use KaTeX syntax in titles. The TOC cannot display KaTeX correctly.
{% endnote %}

To enable KaTeX, set `use` to `katex`.

```yaml
katex:
  # Enable the copy KaTeX formula
  copy_tex: false
```

| Parameter  | Explanation                                                  |
| ---------- | ------------------------------------------------------------ |
| copy_tex   | Enable the copy KaTeX formula function                       |

You do not need to add `katex.min.js` to render math equations. Instead, you need to uninstall your previous Hexo markdown renderer and then install other plugins.

{% subtabs katex-plugins %}

<!-- tab hexo-renderer-markdown-it [Recommended] -->

Uninstall the marked plugin and install [hexo-renderer-markdown-it](https://github.com/hexojs/hexo-renderer-markdown-it).

```bash
npm un hexo-renderer-marked --save # If installed, uninstall it
npm un hexo-renderer-kramed --save # If installed, uninstall it

npm i hexo-renderer-markdown-it --save # Install this rendering plugin
npm install katex @renbaoshuo/markdown-it-katex # Install this KaTeX plugin
```

Configure the Hexo root directory `_config.yml`.

```yaml
markdown:
  plugins:
    - '@renbaoshuo/markdown-it-katex'
```

For other parameter configurations, please refer to the [KaTeX official website](https://katex.org/docs/options.html).

<!-- endtab -->

<!-- tab hexo-renderer-markdown-it-plus -->

{% note warning %}
Note: This method generates KaTeX without italics.
{% endnote %}

Uninstall the marked plugin and then install the new `hexo-renderer-markdown-it-plus`:

```bash
# Replace `hexo-renderer-kramed` or `hexo-renderer-marked` and other Hexo markdown renderers
# You can find Hexo markdown renderers in your package.json and uninstall them
npm un hexo-renderer-marked --save

# or

npm un hexo-renderer-kramed --save


# 然後安裝 `hexo-renderer-markdown-it-plus`
npm i @upupming/hexo-renderer-markdown-it-plus --save
```

Note that [`hexo-renderer-markdown-it-plus`](https://github.com/CHENXCHEN/hexo-renderer-markdown-it-plus) is no longer maintained, so we use [`@upupming/hexo-renderer-markdown-it-plus`](https://github.com/upupming/hexo-renderer-markdown-it-plus). This fork uses [`@neilsustc/markdown-it-katex`](https://github.com/yzhang-gh/markdown-it-katex), which is also used by the VSCode plugin [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown), so we can get the latest KaTeX features such as `\tag{}`.

You can also control KaTeX settings through [`@neilsustc/markdown-it-katex`](https://github.com/yzhang-gh/markdown-it-katex). All configurable options can be found at https://katex.org/docs/options.html. For example, if you want to disable the lengthy warning messages output by KaTeX on the command line, you can use the following configuration in the root directory `_config.yml` to set `strict` to false:

```yaml
markdown_it_plus:
  plugins:
    - plugin:
      name: '@neilsustc/markdown-it-katex'
      enable: true
      options:
        strict: false
```

Of course, you can also use this feature to define some commonly used `macros`.

<!-- endtab -->

{% endsubtabs %}

Since KaTeX is faster and lighter, it does not have as many features as MathJax (such as the right-click menu). For those using MathJax, the theme also includes the [copy](https://github.com/KaTeX/KaTeX/tree/master/contrib/copy-tex) function of KaTeX.

![](https://jsd.012700.xyz/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-katex.gif)
<!-- endtab -->

{% endtabs %}

## Search

{% tabs search %}

<!-- tab General Configuration -->

The theme supports three search methods (algolia_search / local_search / docsearch). You can choose one or multiple search methods.

```yaml
search:
  # Choose: algolia_search / local_search / docsearch
  # leave it empty if you don't need search
  use:
  placeholder:
```

| Parameter   | Description                        |
| ----------- | ---------------------------------- |
| use         | Choose the search method you need; leave it empty if not needed |
| placeholder | Placeholder text in the search box |

<!-- endtab -->

<!-- tab Algolia @fab fa-algolia -->

{% note warning %}
Remember to run `hexo clean`
{% endnote %}

{% note warning %}
If you use [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch), make sure to configure the fields parameter with `title`, `permalink`, and `content`.
{% endnote %}

1. Install [hexo-algolia](https://github.com/oncletom/hexo-algolia) or [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch) and configure according to their documentation.

2. Set the `use` parameter in the theme configuration file to `algolia_search`.

Additional configuration:

```yaml
# Algolia Search
algolia_search:
  # Number of search results per page
  hitsPerPage: 6
```

| Parameter   | Description                        |
| ----------- | ---------------------------------- |
| hitsPerPage | Number of search results per page  |

3. Run Hexo.

<!-- endtab -->

<!-- tab Local Search @fas fa-search -->

{% note warning %}
Remember to run `hexo clean`
{% endnote %}

1. Install [hexo-generator-searchdb](https://github.com/next-theme/hexo-generator-searchdb) or [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search) and configure according to their documentation.

2. Set the `use` parameter in the theme configuration file to `local_search`.

Additional configuration:

```yaml
# Local Search
local_search:
  # Preload the search data when the page loads.
  preload: false
  # Show top n results per article, show all results by setting to -1
  top_n_per_article: 1
  # Unescape html strings to the readable one.
  unescape: false
  CDN:
```

| Parameter          | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| preload            | Preload search data on page load. If disabled, search data loads when the search button is clicked. |
| top_n_per_article  | Number of matched results to show per article, default is 1    |
| unescape           | Unescape HTML strings to readable text                        |
| CDN                | CDN URL for search data (default is local link)               |接）                                                  |

<!-- endtab -->

<!-- tab DocSearch @fas fa-search -->

DocSearch is another search service provided by Algolia. For detailed application and usage, refer to the [DocSearch documentation](https://docsearch.algolia.com/).

1. Apply for [DocSearch](https://docsearch.algolia.com/) and obtain your `appId`, `apiKey`, and `indexName`.
2. Set the `use` parameter in the theme configuration file to `docsearch`.

Additional configuration:

```
  # Docsearch
  # https://docsearch.algolia.com/
  docsearch:
    appId:
    apiKey:
    indexName:
    option:
```

| Parameter  | Description                          |
| ---------- | ------------------------------------ |
| appId      | [Required] Your Algolia application ID |
| apiKey     | [Required] Your Algolia search API key |
| indexName  | [Required] Your Algolia index name    |
| option     | [Optional] Additional DocSearch configuration. Refer to the [documentation](https://docsearch.algolia.com/docs/api/) for details. |

![hexo-theme-butterfly-docs-docsearch.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-docsearch.png)

<!-- endtab -->

{% endtabs %}

## Share

{% note warning %}
Only one sharing service can be selected.
{% endnote %}

{% tabs Share %}

<!-- tab Sharejs -->

The theme supports two sharing methods: `sharejs` and `addtoany`.

```yaml
share:
  # Choose: sharejs / addtoany
  # Leave it empty if you don't need share
  use: sharejs
```

| Parameter | Description                                           |
| --------- | ----------------------------------------------------- |
| use       | Choose the sharing method: `sharejs` or `addtoany`. Leave it empty if sharing is not needed. |

<!-- endtab -->

<!-- tab Sharejs -->

If you're not familiar with [sharejs](https://github.com/overtrue/share.js/), check out its documentation.

```yaml
# Share.js
# https://github.com/overtrue/share.js
sharejs:
  sites: facebook,twitter,wechat,weibo,qq
```

![hexo-theme-butterfly-doc-sharejs.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-sharejs.png)

<!-- endtab -->

<!-- tab Addtoany -->

Refer to [addtoany](https://www.addtoany.com/) for usage instructions.

```yaml
addtoany:
  item: facebook,twitter,wechat,sina_weibo,facebook_messenger,email,copy_link
```

![hexo-theme-butterfly-doc-addtoany.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-addtoany.png)

<!-- endtab -->

{% endtabs %}

## Comments System

{% tabs comments %}

<!-- tab General Settings -->

The theme supports multiple comment systems. You can choose one according to your preference. You can also select dual comments by configuring two comment systems (the first one will be shown by default).

```yaml
comments:
  # Up to two comments system, the first will be shown as default
  # Leave it empty if you don't need comments
  # Choose: Disqus/Disqusjs/Livere/Gitalk/Valine/Waline/Utterances/Facebook Comments/Twikoo/Giscus/Remark42/Artalk
  # Format of two comments system : Disqus,Waline
  use:
  # Display the comment name next to the button
  text: true
  # Lazyload: The comment system will be load when comment element enters the browser's viewport.
  # If you set it to true, the comment count will be invalid
  lazyload: false
  # Display comment count in post's top_img
  count: false
  # Display comment count in Home Page
  card_post_count: false
```

| Parameter        | Explanation                                                                                                 |
|------------------|-------------------------------------------------------------------------------------------------------------|
| use              | The comment system(s) to use (note: up to two systems, leave empty if not needed).<br>*Note: Dual comments cannot be Disqus and Disqusjs together due to shared ID conflicts.* |
| text             | Whether to display the comment service name next to the button.                                             |
| lazyload         | Whether to enable lazyload for comments. If enabled, the comment resources will load only when the comment section enters the viewport (*comment count will not be displayed if lazyload is enabled*). |
| count            | Whether to display the comment count at the top of the post.<br> Livere, Giscus, and Utterances do not support comment count display. |
| card_post_count  | Whether to display the comment count on the homepage post cards.<br>Gitalk, Livere, Giscus, and Utterances do not support comment count display. |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Single Comment
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-single-comments.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Dual Comments
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-double-comments.png)

<!-- endtab -->

<!-- tab Disqus -->

Register on [Disqus](https://disqus.com/), configure your Disqus settings, and then enable it in the `Butterfly` theme.

```yaml
disqus:
  shortname:
```

| Parameter  | Explanation                                                                                  |
|------------|----------------------------------------------------------------------------------------------|
| shortname  | Your Disqus shortname. You can create it [here](https://disqus.com/admin/create/).

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-disqus.png)

<!-- endtab -->

<!-- tab Disqusjs -->

Similar to Disqus, but can be used to display comments when Disqus is inaccessible in mainland China. Refer to [Disqusjs](https://github.com/SukkaW/DisqusJS) for details.

```yaml
disqusjs:
  shortname:
  apikey:
  option:
```

| Parameter  | Explanation                                                                                  |
|------------|----------------------------------------------------------------------------------------------|
| shortname  | Your Disqus shortname. You can create it [here](https://disqus.com/admin/create/).           |
| apikey     | Your Disqus API Key. You can create it [here](https://disqus.com/api/applications/).         |
| option     | Optional configuration.                                                                      |

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Display when Disqus is inaccessible
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-disqusjs.png)

<!-- endtab -->

<!-- tab livere（來必力） -->

Register on [Livere](https://livere.com/), configure your Livere settings, and then enable it in the `Butterfly` theme.

```yaml
livere:
  uid:
```

| Parameter  | Explanation                                                                                  |
|------------|----------------------------------------------------------------------------------------------|
| uid        | Your Livere UID. You can create it [here](https://livere.com/).                              |

The Livere UID can be found here:

![hexo-theme-butterfly-doc-laibili.jpg](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-laibili.jpg)

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-livere.png)
<!-- endtab -->

<!-- tab Gitalk -->

Follow the [Gitalk](https://github.com/gitalk/gitalk) instructions to obtain your GitHub OAuth application client ID and secret, and check the related configuration instructions.

```yaml
gitalk:
  client_id:
  client_secret:
  repo:
  owner:
  admin:
  option:
```

| Parameter       | Explanation                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------|
| client_id       | GitHub application's client ID.                                                              |
| client_secret   | GitHub application's client secret.                                                          |
| repo            | The repo to store issues.                                                                    |
| owner           | The owner of the repo to store issues.                                                       |
| admin           | The owner and collaborators of the GitHub repository (users with write permissions to the repository). |
| option          | Optional configuration.                                                                      |

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-gitalk.png)

<!-- endtab -->

<!-- tab Valine -->

Follow the [Valine](https://github.com/xCss/Valine) instructions to configure your LeanCloud application and check the relevant configuration instructions.

```yaml
valine:
  appId:
  appKey:
  avatar: monsterid
  # This configuration is suitable for domestic custom domain name users, overseas version will be automatically detected (no need to manually fill in)
  serverURLs:
  bg:
  # Use Valine visitor count as the page view count
  visitor: false
  option:
```

| Parameter       | Explanation                                                                                  |
|-----------------|----------------------------------------------------------------------------------------------|
| appId           | The appId of your LeanCloud application.                                                     |
| appKey          | The appKey of your LeanCloud application.                                                    |
| avatar          | Avatar type, optional values: `''`, `mp`, `identicon`, `monsterid`, `wavatar`, `retro`, `robohash`, `blank`, `404`. |
| serverURLs      | Custom LeanCloud server address. If you use a custom domain in mainland China, please fill in this item, otherwise, leave it empty. |
| bg              | Background image, can be an image URL like `https://example.com/bg.jpg`.                     |
| visitor         | Whether to display the article read count.                                                   |
| option          | Optional configuration.                                                                      |

{% note info %}
When visitor is enabled, the article read count on the article page will be provided by Valine, not **Busuanzi**.
{% endnote %}

Valine supports custom emojis from v1.4.5. If you need to configure them, set the `emojiCDN` to your custom emoji CDN.

Also, create a JSON file `valine.json` in the `source/_data/` directory under your Hexo working directory, equivalent to Valine's `emojiMaps` configuration. The `valine.json` can be configured as follows:

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
valine.json
{% endnote %}

```json
{
  "tv_doge": "6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
  "tv_親親": "a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
  "tv_偷笑": "bb690d4107620f1c15cff29509db529a73aee261.png",
  "tv_再見": "180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
  "tv_冷漠": "b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
  "tv_發怒": "34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
  "tv_發財": "34db290afd2963723c6eb3c4560667db7253a21a.png",
  "tv_可愛": "9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
  "tv_吐血": "09dd16a7aa59b77baa1155d47484409624470c77.png",
  "tv_呆": "fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
  "tv_嘔吐": "9f996894a39e282ccf5e66856af49483f81870f3.png",
  "tv_困": "241ee304e44c0af029adceb294399391e4737ef2.png",
  "tv_壞笑": "1f0b87f731a671079842116e0991c91c2c88645a.png",
  "tv_大佬": "093c1e2c490161aca397afc45573c877cdead616.png",
  "tv_大哭": "23269aeb35f99daee28dda129676f6e9ea87934f.png",
  "tv_委屈": "d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
  "tv_害羞": "a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
  "tv_尷尬": "7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
  "tv_微笑": "70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
  "tv_思考": "90cf159733e558137ed20aa04d09964436f618a1.png",
  "tv_驚嚇": "0d15c7e2ee58e935adc6a7193ee042388adc22af.png"
}
```

![hexo-theme-butterfly-doc-valine.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-valine.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
default_avatar
{% endnote %}

| 參數         | 效果                                                                              |
| ------------ | --------------------------------------------------------------------------------- |
| empty（Default） | ![](https://www.gravatar.com/avatar/00000000000000000000000000000000)             |
| mp           | ![](https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp)        |
| identicon    | ![](https://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon) |
| monsterid    | ![](https://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid) |
| wavatar      | ![](https://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar)   |
| retro        | ![](https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro)     |
| robohash     | ![](https://www.gravatar.com/avatar/00000000000000000000000000000000?d=robohash)  |
| blank        | ![](https://www.gravatar.com/avatar/00000000000000000000000000000000?d=blank&f=y) |
| 404          | ![](https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y)    |

<!-- endtab -->

<!-- tab Waline -->

Waline is a comment system derived from Valine that includes backend support. You can consider Waline as "With backend Valine".

Refer to the [Waline documentation](https://waline.js.org/) for detailed configuration.

```yaml
waline:
  serverURL: # Waline server address url
  bg: # waline background
  pageview: false
  option:
```

| Parameter | Description |
| --------- | ------------ |
| serverURL | Waline server address |
| bg        | Background image URL, e.g., `https://example.com/bg.jpg` |
| pageview  | Whether to show article view count |
| option    | Optional configuration |

{% note info %}
When pageview is enabled, the article view count will be provided by Waline instead of **Busuanzi**.
{% endnote %}

![hexo-theme-butterfly-doc-valine.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-valine.png)

<!-- endtab -->

<!-- tab Utterances -->

Like Gitalk, Utterances is a comment tool based on GitHub issues but with relatively fewer permissions required. Refer to [Utterances documentation](https://utteranc.es/) for details.

```yaml
utterances:
  repo:
  # 可選 pathname/url/title/og:title
  issue_term: pathname
  # 可選 github-light/github-dark/github-dark-orange/icy-dark/dark-blue/photon-dark
  light_theme: github-light
  dark_theme: photon-dark
```

| Parameter    | Description |
| ------------ | ------------ |
| repo         | GitHub repository full name, e.g., `owner/repo` |
| issue_term   | Label used to identify issues, options: pathname/url/title/og:title |
| light_theme  | Light theme, options: `github-light`, `github-dark`, `github-dark-orange`, `icy-dark`, `dark-blue`, `photon-dark` |
| dark_theme   | Dark theme, options: `github-light`, `github-dark`, `github-dark-orange`, `icy-dark`, `dark-blue`, `photon-dark` |

![hexo-theme-butterfly-docs-Utterances.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-Utterances.png)

<!-- endtab -->

<!-- tab Facebook Comments -->

`Facebook Comments` is a plugin provided by Facebook, requiring users to log in with Facebook to comment.

```yaml
# Facebook Comments Plugin
# https://developers.facebook.com/docs/plugins/comments/
facebook_comments:
  app_id:
  # optional
  user_id:
  pageSize: 10
  # Choose: social / time / reverse_time
  order_by: social
  lang: zh_TW
```

| Parameter | Description |
| --------- | ------------ |
| app_id    | Facebook App ID, which can be created [here](https://developers.facebook.com/apps/) |
| user_id   | Optional, Facebook User ID for managing comments |
| pageSize  | Number of comments to display |
| order_by  | Comment sorting method: social/time/reverse_time |
| lang      | Language |

![hexo-butterfly-docs-facebook-comments.png](https://oss.012700.xyz/butterfly/2024/09/hexo-butterfly-docs-facebook-comments.png)

<!-- endtab -->

<!-- tab Twikoo -->

`Twikoo` is a simple, secure, and serverless comment system for static websites, based on [Tencent Cloud Development](https://curl.qcloud.com/KnnJtUom).

For detailed configuration, please refer to the [Twikoo documentation](https://twikoo.js.org/quick-start.html#%E7%8E%AF%E5%A2%83%E5%88%9D%E5%A7%8B%E5%8C%96).

你只需要把獲取到的 `環境ID (envId)` 填寫到配置上去就行

```yaml
twikoo:
  envId:
  region:
  visitor: false
  option:
```

| Parameter | Description |
| --------- | ------------ |
| envId     | Environment ID |
| region    | Environment region, default is `ap-shanghai`. If your region is different, specify here. |
| visitor   | Whether to display article view count |
| option    | Optional configuration |

{% note info %}
When visitor is enabled, the article view count will be provided by Twikoo instead of **Busuanzi**.
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-twikoo.png)

<!-- endtab -->

<!-- tab Giscus -->

A comment system based on *GitHub Discussions*.

```yaml
# Giscus
# https://giscus.app/
giscus:
  repo:
  repo_id:
  category_id:
  theme:
    light: light
    dark: dark
  option:
```

| Parameter    | Description |
| ------------ | ------------ |
| repo         | GitHub repository full name, e.g., `owner/repo` |
| repo_id      | GitHub repository ID |
| category_id  | GitHub repository category ID |
| option       | Optional configuration |

Refer to the Giscus [documentation](https://giscus.app) for details.

![hexo-theme-butterfly-docs-giscus.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-giscus.png)

<!-- endtab -->

<!-- tab Remark42 -->

Remark42 is a comment system that only supports **self-hosting**.

For detailed setup, refer to [Installation | Remark42](https://remark42.com/docs/getting-started/installation/).

```yaml
remark42:
  host: # Your Host URL
  siteId: # Your Site ID
  option:
```

| Parameter | Description |
| --------- | ------------ |
| host      | Your Host URL |
| siteId    | Your Site ID |
| option    | Optional configuration |

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/hexo-butterfly-docs-remark42.png)

<!-- endtab -->

<!-- tab Artalk -->

Artalk is a comment system that only supports **self-hosting**.

For detailed setup, refer to [Artalk | Self-hosted Comment System](https://artalk.js.org/).

```yaml
artalk:
  server:
  site:
  # Use Artalk visitor count as the page view count
  visitor: false
  option:
```

| Parameter | Description |
| --------- | ------------ |
| server    | Your Server URL |
| site      | Your Site ID |
| visitor   | Whether to display article view count |
| option    | Optional configuration |

{% note info %}
When visitor is enabled, the article view count will be provided by Artalk instead of **Busuanzi**.
{% endnote %}

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN@m2/img/hexo-butterfly-docs-artalk.png)

<!-- endtab -->

{% endtabs %}

## Online Chat

{% tabs online-chat %}

<!-- tab General Settings -->

The theme includes several online chat tools. You can choose to enable one to facilitate communication with your visitors.

```yaml
chat:
  # Choose: chatra/tidio/crisp
  # Leave it empty if you don't need chat
  use:
  # Chat Button [recommend]
  # It will create a button in the bottom right corner of website, and hide the origin button
  rightside_button: false
  # The origin chat button is displayed when scrolling up, and the button is hidden when scrolling down
  button_hide_show: false
```

| Parameter          | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| use                | Choose the chat tool to use, options are `chatra`/`tidio`/`crisp` |
| rightside_button   | Enable the chat button at the bottom right corner            |
| button_hide_show   | Hide chat button when scrolling down, show when scrolling up |

These tools provide a button to open/close the chat window. The theme also provides a custom button that will appear in the bottom right corner. Just enable the `rightside_button`.

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-chatbtn.png)

To avoid affecting user experience, the theme offers a `button_hide_show` configuration. Set to `true` to show the chat button only when scrolling up.

<!-- endtab -->

<!-- tab chatra -->

{% note info %}
To enable Chatra, set the `chat` configuration `use` to `chatra`.
{% endnote %}

Configure Chatra by getting the `Public key`.

1. Open [Chatra](https://chatra.com/) and sign up.
2. Find the `Public key` in `Preferences`.

![hexo-theme-butterfly-docs-chat-chatra-id.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-chat-chatra-id.png)

```yaml
# chatra
# https://chatra.io/
chatra:
  id: xxxxxxxx
```

You can customize Chatra's style in `Chat Widget`.

![hexo-theme-butterfly-docs-chat-chatra-ui-settings.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-chat-chatra-ui-settings.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Demo
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-chat-chatra-ui-demo.png)

<!-- endtab -->

<!-- tab tidio -->

{% note info %}
To enable Tidio, set the `chat` configuration `use` to `tidio`.
{% endnote %}

Configure Tidio by getting the `Public key`.

1. Open [Tidio](https://www.tidio.com/) and sign up.
2. Find the `Public key` in `Preferences > Developer`.

![hexo-theme-butterfly-docs-chat-tidio-id.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-chat-tidio-id.png)

```yaml
# tidio
# https://www.tidio.com/
tidio:
  public_key: XXXX
```

You can customize Tidio's style in `Channels`.

![hexo-theme-butterfly-docs-chat-tidio-setting.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-chat-tidio-setting.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Demo
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-chat-tidio-demo.png)

<!-- endtab -->

<!-- tab crisp -->

{% note info %}
To enable Crisp, set the `chat` configuration `use` to `crisp`.
{% endnote %}

Configure Crisp by getting the `Website ID`.

1. Open [Crisp](https://crisp.chat/en/) and sign up.
2. Find the `Website ID`.

```yaml
# crisp
# https://crisp.chat/en/
crisp:
  website_id: xxxxxxxx
```

![hexo-theme-buttefly-docs-chat-crisp.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-buttefly-docs-chat-crisp.png)

![hexo-theme-butterfly-docs-crisp-demo.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-crisp-demo.png)

<!-- endtab -->

{% endtabs %}

## Analytics

{% tabs Analysis %} 

<!-- tab Baidu Analytics -->

1. Log in to the Baidu Analytics [official website](https://tongji.baidu.com/web/welcome/login).

2. Locate your Baidu Analytics code.

![hexo-theme-butterfly-doc-baidu-tongji.jpg](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-baidu-tongji.jpg)

3. Modify the `theme configuration file`:

```yaml
baidu_analytics: your_code
```

<!-- endtab -->

<!-- tab Google Analytics -->

1. Log in to the Google Analytics [official website](https://www.google.com/analytics/).

2. Find your Google Analytics tracking ID.

![hexo-theme-butterfly-doc-google-analytics.jpg](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-google-analytics.jpg)

3. Modify the `theme configuration file`:

```yaml
google_analytics: your_code # usually starts with `UA-`
```

<!-- endtab -->

<!-- tab Cloudflare Analytics -->

1. Log in to the Cloudflare Analytics [official website](https://www.cloudflare.com/zh-tw/web-analytics/).
2. Locate the `JavaScript Snippet`.
3. Find your `token`.

![hexo-theme-butterfly-docs-cloudflare-analytics-id.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-cloudflare-analytics-id.png)

4. Modify the `theme configuration file`:

   ```yaml
   # Cloudflare Analytics
   # https://www.cloudflare.com/zh-tw/web-analytics/
   cloudflare_analytics:
   ```

<!-- endtab -->

<!-- tab Microsoft Clarity -->

1. Log in to the Clarity [official website](https://clarity.microsoft.com/).

2. Create a `PROJECT`.

3. Find your `ID`.

![hexo-theme-butterfly-docs-clarity-id.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-clarity-id.png)

4. Modify the `theme configuration file`:

   ```yaml
   # Microsoft Clarity
   # https://clarity.microsoft.com/
   microsoft_clarity:
   ```

<!-- endtab -->

{% endtabs %}

## Advertisements

{% tabs Advertisements %}

<!-- tab Google Ads -->

The theme integrates Google Ads (Auto Ads).

```yaml
google_adsense:
  enable: true
  auto_ads: true
  js: https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
  client: # your personal identification code
  enable_page_level_ads: true
```

![hexo-theme-butterfly-docs-google-adsense1.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-google-adsense1.png)

<!-- endtab -->

<!-- tab Manual Ad Configuration -->

The theme reserves three spots for inserting ads: after every three articles on the homepage, after the aside announcement, and after the post donation section. Fill in the HTML code in the corresponding position.

```yaml
ad:
  index:
  aside:
  post:
```

例如:

```yaml
index: <ins class="adsbygoogle" style="display:block" data-ad-format="fluid" data-ad-layout-key="xxxxxxxxxxxx" data-ad-client="ca-pub-xxxxxxxxxx" data-ad-slot="xxxxxxxxxx"></ins><script>(adsbygoogle=window.adsbygoogle||[]).push({})</script>
```

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-ad-1.png)

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-ad-2.png)

<!-- endtab -->

{% endtabs %}

## Website Verification

If you need search engines to index your site, you may need to log in to the corresponding search engine management platform for submission. Verification codes can be obtained from each management platform.

```yaml
site_verification:
  # - name: google-site-verification
  #   content: xxxxxx
  # - name: baidu-site-verification
  #   content: xxxxxxx
```

## Beautify / Effect

### Custom Theme Colors

You can modify most UI colors.

Edit the `theme configuration file`, for example:

{% note info %}
Color values must be enclosed in double quotes, like `"#000"` instead of `#000`. Otherwise, an error will occur during the build process!
{% endnote %}

```yaml
theme_color:
  enable: true
  main: '#49B1F5'
  paginator: '#00c4b6'
  button_hover: '#FF7242'
  text_selection: '#00c4b6'
  link_color: '#99a9bf'
  meta_color: '#858585'
  hr_color: '#A4D8FA'
  code_foreground: '#F47466'
  code_background: 'rgba(27, 31, 35, .05)'
  toc_color: '#00c4b6'
  blockquote_padding_color: '#49b1f5'
  blockquote_background_color: '#49b1f5'
  scrollbar_color: '#49b1f5'
  meta_theme_color_light: 'ffffff'
  meta_theme_color_dark: '#0d0d0d'
```

| Parameter                   | Description                                           |
| --------------------------- | ----------------------------------------------------- |
| main                        | Main theme color                                      |
| paginator                   | Paginator color                                       |
| button_hover                | Button hover color                                    |
| text_selection              | Text selection color                                  |
| link_color                  | Link color                                            |
| meta_color                  | Article metadata color                                |
| hr_color                    | Horizontal rule color                                 |
| code_foreground             | Code foreground color                                 |
| code_background             | Code background color                                 |
| toc_color                   | Table of contents color                               |
| blockquote_padding_color    | Blockquote padding color                              |
| blockquote_background_color | Blockquote background color                           |
| scrollbar_color             | Scrollbar color                                       |
| meta_theme_color_light      | Light mode theme color                                |
| meta_theme_color_dark       | Dark mode theme color                                 |

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-doc-color_1.png)

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-doc-color_2.png)

### Justify Text Alignment

You can set text to be justified, except for the last line.

```yaml
# Stretches the lines so that each line has equal width
text_align_justify: true
```

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
text_align_justify: false
{% endnote %}

![](https://oss.012700.xyz/butterfly/2023/10/text-align-justify-false.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
text_align_justify: true
{% endnote %}

![](https://oss.012700.xyz/butterfly/2023/10/text-align-justify-true.png)

### Black Mask

To avoid overly bright images making text unreadable, a black mask is added to `header` and `footer` by default.

```yaml
# Add a mask to the header and footer
mask:
  header: true
  footer: true
```

### Page Load Animation (Preloader)

When entering a webpage, due to loading speed issues, the top_img image may appear fragmented, or the webpage may not load fully, resulting in a wait time. Enabling the preloader will show a loading animation, which will disappear once the page is fully loaded.

The theme supports the loading animation of pace.js, see [pace.js](https://codebyzach.github.io/pace/) for details.

```yaml
# Loading Animation
preloader:
  enable: false
  # source
  # 1. fullpage-loading
  # 2. pace (progress bar)
  source: 1
  # pace theme (see https://codebyzach.github.io/pace/)
  pace_css_url:
```

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
fullpage-loading
{% endnote %}

![hexo-theme-butterfly-docs-preloader.gif](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-docs-preloader.gif)

### Page Beautification

It changes the styles of ol, ul, h1-h5.

`field` configuration applies to:

- `post` Applies only to the post page
- `site` Applies to the entire site

```yaml
# Beautify page display
beautify:
  enable: true
  field: site # site/post
  title-prefix-icon: '\f0c1'
  title-prefix-icon-color: '#F47466'
```

| Parameter              | Description                                              |
| ---------------------- | -------------------------------------------------------- |
| enable                 | Enable beautification                                    |
| field                  | Area to be beautified                                    |
| title-prefix-icon      | Prefix icon for titles                                   |
| title-prefix-icon-color | Color of the prefix icon                                |

`title-prefix-icon` is the Unicode value of the fontawesome icon.
![hexo-theme-butterfly-doc-fontwesome-unicode.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-fontwesome-unicode.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Beautification disabled
{% endnote %}

![hexo-theme-butterfly-doc-post-beautify.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-post-beautify.png)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Beautification enabled
{% endnote %}

![hexo-theme-butterfly-doc-post-beautif.png](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-post-beautif.png)

### Custom Fonts and Font Sizes

#### Global Fonts

You can set the font-family for the entire site.

**If no configuration is needed, leave it empty.**

```yaml
# Global font settings
# Don't modify the following settings unless you know how they work (非必要不要修改)
font:
  global-font-size:
  code-font-size:
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Lato, Roboto, "PingFang SC", "Microsoft JhengHei", "Microsoft YaHei", sans-serif
  code-font-family: consolas, Menlo, "PingFang SC", "Microsoft JhengHei", "Microsoft YaHei", sans-serif
```

| Parameter          | Description                                                  |
| ------------------ | ------------------------------------------------------------ |
| global-font-size   | Global font size                                             |
| code-font-size     | Code font size                                               |
| font-family        | Global font family                                           |
| code-font-family   | Code font family                                             |

#### Blog Title Font

You can set the font-family for the site title and subtitle.
**If no configuration is needed, leave it empty.**
**If no web font is needed, leave `font_link` empty.**

```yaml
# Font settings for the site title and site subtitle
# Site name on the top left, site name centered on the homepage
blog_title_font:
  font_link: https://fonts.googleapis.com/css?family=Titillium+Web&display=swap
  font-family: Titillium Web, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft JhengHei', 'Microsoft YaHei', sans-serif
```

| Parameter    | Description                                                     |
| ------------ | --------------------------------------------------------------- |
| font_link    | Link to the web font                                            |
| font-family  | Font family for the site title                                  |

### Typing Effect

Typing effect [activate-power-mode](https://github.com/disjukr/activate-power-mode).

```yaml
# Typewriter Effect
# https://github.com/disjukr/activate-power-mode
activate_power_mode:
  enable: true
  colorful: true # Enable particle animation
  shake: true # Enable shake effect
  mobile: false
```

| Parameter  | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| enable     | Enable typing effect                                        |
| colorful   | Enable particle animation                                   |
| shake      | Enable shake effect                                         |
| mobile     | Enable typing effect on mobile                              |

![hexo-theme-butterfly-doc-type-animation.gif](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-type-animation.gif)

### Background Effects

{% tabs Background Effects %}

<!-- tab Static Ribbon -->

Beautiful ribbon background, can be set to change ribbon on each refresh or on each click

```yaml
canvas_ribbon:
  enable: false
  # The size of ribbon
  size: 150
  # The opacity of ribbon (0 ~ 1)
  alpha: 0.6
  zIndex: -1
  click_to_change: false
  mobile: false
```

| Parameter       | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| enable          | Enable ribbon effect                                         |
| size            | Size of the ribbon                                           |
| alpha           | Opacity of the ribbon                                        |
| zIndex          | z-index of the ribbon                                        |
| click_to_change | Change ribbon on click                                       |
| mobile          | Show ribbon on mobile                                        |

For more configuration, refer to [canvas_ribbon](https://github.com/hustcc/ribbon.js)

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-canvas-ribbon.png)

<!-- endtab -->

<!-- tab Dynamic Ribbon -->

Beautiful ribbon background that floats

```yaml
canvas_fluttering_ribbon:
  enable: true
  mobile: false # false: do not display on mobile, true: display on mobile
```

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-docs-canvas_fluttering_ribbon.gif)

<!-- endtab -->

<!-- tab canvas-nest -->

```yaml
canvas_nest:
  enable: false
  # Color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
  color: '0,0,255'
  # The opacity of line (0~1)
  opacity: 0.7
  # The z-index property of the background
  zIndex: -1
  # The number of lines
  count: 99
  mobile: false
```

| Parameter       | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| enable          | Enable nest effect                                           |
| color           | Color of the lines                                           |
| opacity         | Opacity of the lines                                         |
| zIndex          | z-index of the lines                                         |
| count           | Number of lines                                              |
| mobile          | Show effect on mobile                                        |

![](https://oss.012700.xyz/butterfly/2024/09/butterfly-doc-canvas_nes.gif)

<!-- endtab -->

{% endtabs %}

### Mouse Click Effects

{% tabs Mouse Click Effects %}

<!-- tab Fireworks @fas fa-fire-alt -->

```yaml
fireworks:
  enable: true
  zIndex: 9999 # -1 or 9999
  mobile: false
```

| Parameter       | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| enable          | Enable fireworks effect                                      |
| zIndex          | z-index of fireworks (`-1` means behind / `9999` means in front) |
| mobile          | Show fireworks on mobile                                     |

![hexo-theme-butterfly-doc-firewall.gif](https://oss.012700.xyz/butterfly/2024/09/hexo-theme-butterfly-doc-firewall.gif)

<!-- endtab -->

<!-- tab Heart @fas fa-heart -->

```yaml
# Click to show hearts
click_heart:
  enable: true
  mobile: false
```

![click_heart.gif](https://oss.012700.xyz/butterfly/2024/09/click_heart.gif)

<!-- endtab -->

<!-- tab Text @fab fa-amilia -->

```yaml
# Click to show text, text can be customized
ClickShowText:
  enable: false
  text:
    - I
    - LOVE
    - YOU
  fontSize: 15px
  random: false # Randomize text display
  mobile: false
```

| Parameter       | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| enable          | Enable text effect                                           |
| text            | Text content                                                 |
| fontSize        | Font size                                                    |
| random          | Randomize text display                                       |
| mobile          | Show text on mobile                                          |

![ClickShowText.gif](https://oss.012700.xyz/butterfly/2024/09/ClickShowText.gif)

<!-- endtab -->

{% endtabs %}

## Lightbox

{% note info %}
If you do not want to add lightbox for a specific image, use HTML format to reference the image and add `no-lightbox` class name to the image
{% endnote %}

```yaml
# Choose: fancybox / medium_zoom
# https://github.com/francoischalifour/medium-zoom
# https://fancyapps.com/fancybox/
# Leave it empty if you don't need lightbox
lightbox:
```

You can configure `fancybox` or `medium_zoom` to enable lightbox.
Leave it empty if no lightbox is needed.

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
FancyBox
{% endnote %}

![fancybox.gif](https://oss.012700.xyz/butterfly/2024/09/fancybox.gif)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Medium Zoom
{% endnote %}

![medium_zoom.gif](https://oss.012700.xyz/butterfly/2024/09/medium_zoom.gif)

## Tag Plugins

For details, see [Tag Plugins](https://butterfly.js.org/en/posts/butterfly-docs-en-4-tag-plugins/)

## Mermaid

The theme supports Mermaid.js, which can be used to draw flowcharts, sequence diagrams, etc., in articles.

```yaml
# Mermaid
# https://github.com/mermaid-js/mermaid
mermaid:
  enable: true
  # Write Mermaid diagrams using code blocks
  code_write: true
  # built-in themes: default / forest / dark / neutral
  theme:
    light: default
    dark: dark
```

### Writing Methods

The theme supports two writing methods

#### Tag Plugin

You can use the tag plugin method to use Mermaid.js For details, see [Tag Plugins](https://butterfly.js.org/en/posts/butterfly-docs-en-4-tag-plugins/#Mermaid)

#### Code Block Writing

You can use the code block method to use Mermaid.js

1. Hexo version needs to be 7.0 or above
2. Add `exclude_languages: ['mermaid']` to the Hexo configuration file

    ```yaml
    syntax_highlighter: 'highlight.js'
    highlight:
      line_number: true
      auto_detect: false
      tab_replace: ''
      wrap: true
      hljs: false
      exclude_languages: ['mermaid']
    prismjs:
      preprocess: true
      line_number: true
      tab_replace: ''
      exclude_languages: ['mermaid']
    ```

3. Set `code_write` to `true` in the Mermaid configuration of the Butterfly theme

> Demo

![](https://oss.012700.xyz/butterfly/2025/01/butterfly-docs-mermaid-codewrite.png)

```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```

## Pjax

When a user clicks a link, the parts of the page that need to be updated are done so via Ajax, and then the browser's URL is modified using HTML5's pushState.

This avoids reloading identical resources (css/js), thereby improving page load speed.

```yaml
pjax:
  enable: false
  # Exclude the specified pages from pjax, such as '/music/'
  exclude:
    # - /xxxxxx/
```

{% note info %}

For some third-party plugins, Pjax may not be supported.
You can add **web pages** to the `exclude` list to exempt them from Pjax.
Clicking these pages will reload the website.

After using Pjax, some custom JavaScript may become ineffective and need to be re-invoked when navigating pages. Refer to the [Pjax documentation](https://github.com/MoOx/pjax).
Also, some specific pages' js/css will be loaded on all pages after using Pjax.

{% endnote %}

## Snackbar - Toast Notification

Enable the Snackbar based on personal preference.

```yaml
# Snackbar - Toast Notification
# https://github.com/polonel/SnackBar
# position: top-left / top-center / top-right / bottom-left / bottom-center / bottom-right
snackbar:
  enable: false
  position: bottom-left
  # The background color of Toast Notification in light mode and dark mode
  bg_light: '#49b1f5'
  bg_dark: '#1f1f1f'
```

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Snackbar not enabled
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/snackbar_false.gif)

{% note purple 'fa-solid fa-wand-magic-sparkles' %}
Snackbar enabled
{% endnote %}

![](https://oss.012700.xyz/butterfly/2024/09/snackbar_true.gif)

## Instantpage

When the mouse hovers over a link for more than 65 milliseconds, Instantpage preloads the link, improving access speed.

```yaml
# https://instant.page/
# prefetch
instantpage: true
```

## PWA

To add PWA features to `Butterfly`, you need to follow these steps:

1. Open the hexo working directory.

2. Run `npm install hexo-offline --save` or `yarn add hexo-offline`.

3. Create a file named `hexo-offline.config.cjs` in the hexo directory and add the following content:

```js
// offline config passed to workbox-build.
module.exports = {
  globPatterns: ['**/*.{js,html,css,png,jpg,gif,svg,webp,eot,ttf,woff,woff2}'],
  // Include static files; if your site uses formats like webp, add them here.
  globDirectory: 'public',
  swDest: 'public/service-worker.js',
  maximumFileSizeToCacheInBytes: 10485760, // Maximum file size to cache in bytes.
  skipWaiting: true,
  clientsClaim: true,
  runtimeCaching: [ // Configure this option if you need to load CDN resources, otherwise it's not necessary.
    // CDNs - should be CacheFirst, as they use specific versions and should not change
    {
      urlPattern: /^https:\/\/cdn\.example\.com\/.*/, // Replace with your URL
      handler: 'CacheFirst'
    }
  ]
}
```

For more details, refer to the official [hexo-offline](https://github.com/JLHwung/hexo-offline) documentation.

4. Enable the PWA option in the `theme configuration file`.

```yaml
pwa:
  enable: true
  manifest: /img/pwa/manifest.json
  apple_touch_icon: /img/pwa/apple-touch-icon.png
  favicon_32_32: /img/pwa/32.png
  favicon_16_16: /img/pwa/16.png
  mask_icon: /img/pwa/safari-pinned-tab.svg
```

5. Create a `manifest.json` file in the `source/` directory.

```json
{
    "name": "string",
    "short_name": "Junzhou",
    "theme_color": "#49b1f5",
    "background_color": "#49b1f5",
    "display": "standalone",
    "scope": "/",
    "start_url": "/",
    "icons": [
        {
          "src": "images/pwaicons/36.png",
          "sizes": "36x36",
          "type": "image/png"
        },
        {
            "src": "images/pwaicons/48.png",
          "sizes": "48x48",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
            "src": "images/pwaicons/512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
      ],
      "splash_pages": null
  }
```

You can also quickly create a `manifest.json` using the [Web App Manifest](https://app-manifest.firebaseapp.com/). (Web App Manifest requires at least one 512x512 pixel icon).

6. Use the `Chrome` `Lighthouse` plugin to check if the PWA configuration is effective and correct.

   - Open the blog page.
   - Launch the `Lighthouse` plugin (Lighthouse plugin requires at least one 512x512 pixel icon).

For more information on PWA (Progressive Web Apps), refer to [Google Tools for Web Developers](https://developers.google.com/web/tools/lighthouse/audits/address-bar).

## Open Graph

Add some meta data such as thumbnails, titles, and dates in the `head`. When you share a webpage on certain platforms, the platform will read the Open Graph content and display information like thumbnails and titles.

```yaml
# Open graph meta tags
# https://hexo.io/docs/helpers#open-graph
Open_Graph_meta:
  enable: true
  option:
    # twitter_card:
    # twitter_image:
    # twitter_id:
    # twitter_site:
    # google_plus:
    # fb_admins:
    # fb_app_id:
```

## CSS Prefixes

Some CSS properties are not supported by all browsers and need corresponding prefixes to be effective.

Enabling `css_prefix` will automatically add prefixes to some CSS properties (increasing the size by 20%).

```yaml
# Add the vendor prefixes to ensure compatibility
css_prefix: true
```

## Inject

{% note pink 'fa-solid fa-bell' %}
Supported from version 2.3.0 and above
{% endnote %}

If you want to add extra JavaScript, CSS, meta tags, etc., you can add them in `inject`. This supports adding to the head (before the `</body>` tag) and the bottom (before the `</html>` tag).

Note: Add the content in standard HTML format.

For example:

```yaml
inject:
  head:
  	- <link rel="stylesheet" href="/self.css">
  bottom:
  	- <script src="xxxx"></script>
```

*Note:* If your site root directory is not '/', you need to include your root directory when using local images.  
For example: If your site is `https://yoursite.com/blog` and you want to reference `css/xx.css`, set it as `<link rel="stylesheet" href="/blog/css/xx.css">`.

## CDN

The last part of the configuration file is CDN, which includes files referenced by the theme. You can configure the CDN yourself (please do not modify unless necessary, and confirm that the links are accessible after configuration).

```yaml
# CDN Settings
# Don't modify the following settings unless you know how they work
CDN:
  # The CDN provider for internal and third-party scripts
  # Options for both: local/jsdelivr/unpkg/cdnjs/custom
  # Note: Dev version can only use 'local' for internal scripts
  # Note: When setting third-party scripts to 'local', you need to install hexo-butterfly-extjs
  internal_provider: local
  third_party_provider: jsdelivr

  # Add version number to url, true or false
  version: false

  # Custom format
  # For example: https://cdn.staticfile.org/${cdnjs_name}/${version}/${min_cdnjs_file}
  custom_format:

  option:
    # abcjs_basic_js:
    # activate_power_mode:
    # algolia_js:
    # algolia_search:
    # aplayer_css:
    # aplayer_js:
    # artalk_css:
    # artalk_js:
    # blueimp_md5:
    # busuanzi:
    # canvas_fluttering_ribbon:
    # canvas_nest:
    # canvas_ribbon:
    # click_heart:
    # clickShowText:
    # disqusjs:
    # disqusjs_css:
    # docsearch_css:
    # docsearch_js:
    # egjs_infinitegrid:
    # fancybox:
    # fancybox_css:
    # fireworks:
    # fontawesome:
    # gitalk:
    # gitalk_css:
    # giscus:
    # instantpage:
    # instantsearch:
    # katex:
    # katex_copytex:
    # lazyload:
    # local_search:
    # main:
    # main_css:
    # mathjax:
    # medium_zoom:
    # mermaid:
    # meting_js:
    # prismjs_autoloader:
    # prismjs_js:
    # prismjs_lineNumber_js:
    # pjax:
    # sharejs:
    # sharejs_css:
    # snackbar:
    # snackbar_css:
    # translate:
    # twikoo:
    # typed:
    # utils:
    # valine:
    # waline_css:
    # waline_js:
```

| Parameter             | Explanation                                                  |
| --------------------- | ------------------------------------------------------------ |
| internal_provider     | Internal files of the theme<br />Options: local/jsdelivr/unpkg/cdnjs/custom<br />local for local loading, custom for custom format, needs to configure `custom_format`<br />**Note:** If using the Dev version, it can only be set to local |
| third_party_provider  | Third-party files<br />Options: local/jsdelivr/unpkg/cdnjs/custom<br />local for local loading, custom for custom format, needs to configure `custom_format`<br />**Note:** If you choose local, you need to install the `hexo-butterfly-extjs` plugin |
| version               | true/false to add the specified version number to the CDN    |
| custom_format         | Custom format                                                |
| option                | You can replace some files here, which will override the original configuration |

### version

To modify the version number, you can change the version in the 'plugins.yml' file in the `theme directory`.

Please ensure that the version number you modify is **included** in the CDN you use.

### custom_format

Provides the following parameters:

| Parameter        | Explanation                          |
| ---------------- | ------------------------------------ |
| name             | Package name on npm                  |
| file             | File path on npm                     |
| min_file         | Minified file path on npm            |
| cdnjs_name       | Package name on cdnjs                |
| cdnjs_file       | File path on cdnjs                   |
| min_cdnjs_file   | Minified file path on cdnjs          |
| version          | Plugin version number                |

Partial list of available third-party CDNs:

{% note info %}
Please ensure that the CDN you choose includes the third-party plugins used by the theme.
{% endnote %}

| Provider                                             | Format                                                      | Remarks      |
| ---------------------------------------------------- | ----------------------------------------------------------- | ------------ |
| [Staticfile (Qiniu Cloud)](https://www.staticfile.org/)| https://cdn.staticfile.org/${cdnjs_name}/${version}/${min_cdnjs_file} | Sync with cdnjs |
| [BootCDN](https://www.bootcdn.cn/)                   | https://cdn.bootcdn.net/ajax/libs/${cdnjs_name}/${version}/${min_cdnjs_file} | Sync with cdnjs |
| [Baomitu (360)](https://cdn.baomitu.com/)            | Latest version: https://lib.baomitu.com/${cdnjs_name}/latest/${min_cdnjs_file}<br />Specified version: https://lib.baomitu.com/${cdnjs_name}/${version}/${min_cdnjs_file} | Sync with cdnjs |
| Elemecdn                                             | Latest version: https://npm.elemecdn.com/${name}@latest/${file}<br />Specified version: https://npm.elemecdn.com/${name}@${version}/${file} | Sync with npm  |

{% btn '/posts/butterfly-docs-en-tag-plugins/',⚔️ Butterfly document - Tag Plugins,far fa-hand-point-right,block red right larger %}