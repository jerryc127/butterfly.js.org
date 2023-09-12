---
title: Custom Sidebar
tags:
  - Tutorial
  - Hexo
  - Theme
  - Butterfly
categories: Advanced Tutorials
keywords: 'hexo, butterfly, theme, doc, tutorial, documentation'
description: Customize the sidebar in Hexo's butterfly theme
cover: 'https://jsd.012700.xyz/gh/jerryc127/CDN/img/aside-diy-cover.png'
abbrlink: custom-sidebar
date: 2020-12-30 21:48:10
comments: false
---

{% note info %}

Applicable to >= 3.8.0

{% endnote %}

The sidebar now supports customization, allowing you to add your favorite widgets. You can add your own widgets or sort existing ones (the `Blog Data` and `Announcement` widgets are fixed, but others can be sorted).

## Widget Sorting

You only need to configure the `sort_order`. (It uses the `order` property of the `Flex` layout. For specific details, you can refer to the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items). In simple terms, use **numbers** to specify the sorting order. If not configured, the default value is 0. The smaller the number, the higher the sorting order.

```yaml
aside:
 ...
  card_recent_post:
    sort_order: # Don't modify the setting unless you know how it works
  card_categories:
    sort_order: # Don't modify the setting unless you know how it works
  card_tags:
    sort_order: # Don't modify the setting unless you know how it works
  card_archives:
    sort_order: # Don't modify the setting unless you know how it works
  card_webinfo:
    sort_order: # Don't modify the setting unless you know how it works

newest_comments:
  enable: true
  sort_order: # Don't modify the setting unless you know how it works
```

## Customizing Widgets

If you want to add your own content to the sidebar, you can customize it.

### Create widget.yml

Create a file `widget.yml` in the `source/_data` directory of your Hexo blog (if the _data folder doesn't exist, create it).

### Format

```yaml
top:
  - class_name:
    id_name:
    name:
    icon:
    html:

bottom:
  - class_name:
    id_name:
    name:
    icon:
    order:
    html:
```

> Parameter Explanation

**top**: The created widget will appear in the non-sticky area (visible on all pages).

**bottom**: The created widget will appear in the sticky area (except for the article page).

| Parameter   | Explanation                                  |
| ----------- | -------------------------------------------- |
| class_name  | The parent class name of the created widget (optional) |
| id_name     | The parent id name of the created widget (optional)     |
| name        | The title of the created widget                        |
| icon        | The icon of the created widget                         |
| order       | The sorting order of the created widget (optional)      |
| html        | The relevant code of the created widget                 |

![image-20201230223506507](https://jsd.012700.xyz/gh/jerryc127/CDN/img/adside-diy-parameter.png)

The generated code will be:

```html
<div class="card-widget Your_written_class_name" id="Your_written_id_name" style="order: Your_written_order">
    <div class="item-headline">
        <i class="Your_written_icon"></i>
        <span>Your_written_name</span>
    </div>
    <div class="item-content">
        Your_written_html
    </div>
</div>
```

If you need to make UI adjustments to the added widgets, please add CSS to the inject.

### Example

Let's take the [Visitor Map](https://clustrmaps.com/profile/1b7ep/widget/code/globe) as an example:

1. Get the HTML code for the visitor map:

   ```html
   <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=5V2tOKp8qAdRM-i8eu7ETTO9ugt5uKbbG-U7Yj8uMl8"></script>
   ```

2. Create widget.yml:

   ```yaml
   bottom:
       - class_name: user-map
         id_name: user-map
         name: Visitor Map
         icon: fas fa-heartbeat
         order:
         html: '<script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=5V2tOKp8qAdRM-i8eu7ETTO9ugt5uKbbG-U7Yj8uMl8"></script>'
   ```

3. Run Hexo

   ![image-20201230224442356](https://jsd.012700.xyz/gh/jerryc127/CDN/img/aside-diy-sample.png)