---
title: Hexo Built-in Tag Plugins (Hexo內置標籤外掛)
abbrlink: 39b121ef
date: 2020-05-12 22:33:11
tags: 標籤外掛
categories: Demo
keywords: 'hexo,butterfly,主題,doc,教程,文檔,Tag Plugins,Plugins'
description: Hexo Built-in Tag Plugins
top_img:
cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/Hexo-Built-in-Tag-Plugins-COVER.png
---

Tag plugins are different from post tags. They are ported from Octopress and provide a useful way for you to quickly add specific content to your posts.

## Block Quote

Perfect for adding quotes to your post, with optional author, source and title information.

**Alias:** quote

```
{% blockquote [author[, source]] [link] [source_link_title] %}
content
{% endblockquote %}
```

### Examples

**No arguments. Plain blockquote.**

```
{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}
```

{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

**Quote from a book**

```
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

**Quote from Twitter**

```
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

**Quote from an article on the web**

```
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## Code Block

Useful feature for adding code snippets to your post.

**Alias:** code

```
{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}
```

Specify additional options in `option:value` format, e.g. `line_number:false first_line:5`.

Extra Options | Description | Default
--- | --- | ---
`line_number` | Show line number | `true`
`highlight` | Enable code highlighting | `true`
`first_line` | Specify the first line number | `1`
`mark` | Line highlight specific line(s), each value separated by a comma. Specify number range using a dash<br>Example: `mark:1,4-7,10` will mark line 1, 4 to 7 and 10. |
`wrap` | Wrap the code block in [`<table>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table) | `true`

### Examples

**A plain code block**

```
{% codeblock %}
alert('Hello World!');
{% endcodeblock %}
```

{% codeblock %}
alert('Hello World!');
{% endcodeblock %}

**Specifying the language**

```
{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}
```

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

**Adding a caption to the code block**

```
{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}
```

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

**Adding a caption and a URL**

```
{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}
```

{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}

## Backtick Code Block

This is identical to using a code block, but instead uses three backticks to delimit the block.

{% raw %}
&#96`` [language] [title] [url] [link text]
code snippet
&#96;``
{% endraw %}

## Pull Quote

To add pull quotes to your posts:

```
{% pullquote [class] %}
content
{% endpullquote %}
```

### Left

```
{% pullquote left %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{% endpullquote %}
```

{% pullquote left %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{% endpullquote %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus molestie arcu, et fringilla mauris placerat ac. Nullam luctus bibendum risus. Ut cursus sed ipsum feugiat egestas. Suspendisse elementum, velit eu consequat consequat, augue lorem dapibus libero, eget pulvinar dolor est sit amet nulla. Suspendisse a porta tortor, et posuere mi. Pellentesque ultricies, mi quis volutpat malesuada, erat felis vulputate nisl, ac congue ante tortor ut ante. Proin aliquam sem vel mauris tincidunt, eget scelerisque tortor euismod. Nulla tincidunt enim nec commodo dictum. Mauris id sapien et orci gravida luctus id ut dui. In vel vulputate odio. Duis vel turpis molestie, scelerisque enim eu, lobortis eros. Cras at ipsum gravida, sagittis ante vel, viverra tellus. Nunc mauris turpis, elementum ullamcorper nisl pretium, ultrices cursus justo. Mauris porttitor commodo eros, ac ornare orci interdum in. Cras fermentum cursus leo sed mattis. In dignissim lorem sem, sit amet elementum mauris venenatis ac.

### Right

```
{% pullquote right %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{% endpullquote %}
```

{% pullquote right %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
{% endpullquote %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula justo, lobortis sit amet semper vel, dignissim sit amet libero. Praesent ac tempus ligula. Maecenas at gravida odio. Etiam tristique volutpat lacus eu faucibus. Donec non tempus arcu. Phasellus adipiscing, mauris nec mollis egestas, ipsum nunc auctor velit, et rhoncus lorem ipsum at ante. Praesent et sem in velit volutpat auctor. Duis vel mauris nulla. Maecenas mattis interdum ante, quis sagittis nibh cursus et. Nulla facilisi. Morbi convallis gravida tortor, ut fermentum enim gravida et. Nunc vel dictum nisl, non ultrices libero. Proin vestibulum felis eget orci consectetur lobortis. Vestibulum augue nulla, iaculis vitae augue vehicula, dignissim ultrices libero. Sed imperdiet urna et quam ultrices tincidunt nec ac magna. Etiam vel pharetra elit.

## jsFiddle

To embed a jsFiddle snippet:

```
{% jsfiddle shorttag [tabs] [skin] [width] [height] %}
```

```
{% jsfiddle ccWP7 %}
```

{% jsfiddle ccWP7 %}

## Gist

To embed a Gist snippet:

```
{% gist gist_id [filename] %}
```

```markdown
{% gist 996818 %}
```

{% gist 996818 %}

## iframe

To embed an iframe:

```
{% iframe url [width] [height] %}
```

```
{% iframe 'https://butterfly.js.org/' 100% 300px %}
```

{% iframe 'https://butterfly.js.org/' 100% 300px %}


## Image

Inserts an image with specified size.

```
{% img [class names] /path/to/image [width] [height] '"title text" "alt text"' %}
```

{% img test /img/avatar.png %}
## Link

Inserts a link with `target="_blank"` attribute.

```
{% link text url [external] [title] %}
```

{% link Docs https://butterfly.js.org/ %}

## Include Code

Inserts code snippets in `source/downloads/code` folder. The folder location can be specified through the `code_dir` option in the config.

```
{% include_code [title] [lang:language] [from:line] [to:line] path/to/file %}
```

### Examples

**Embed the whole content of test.js**

```
{% include_code lang:javascript test.js %}
```

**Embed line 3 only**

```
{% include_code lang:javascript from:3 to:3 test.js %}
```

**Embed line 5 to 8**

```
{% include_code lang:javascript from:5 to:8 test.js %}
```

**Embed line 5 to the end of file**

```
{% include_code lang:javascript from:5 test.js %}
```

**Embed line 1 to 8**

```
{% include_code lang:javascript to:8 test.js %}
```

## YouTube

Inserts a YouTube video.

```
{% youtube video_id %}
```

{% youtube iDjQSdN_ig8 %}


## Vimeo

Inserts a responsive or specified size Vimeo video.

```
{% vimeo video_id [width] [height] %}
```

{% vimeo 124876737 %}

## Include Posts

Include links to other posts.

```
{% post_path filename %}
{% post_link filename [title] [escape] %}
```

You can ignore permalink and folder information, like languages and dates, when using this tag.

For instance: `{% raw %}{% post_link how-to-bake-a-cake %}{% endraw %}`.

This will work as long as the filename of the post is `how-to-bake-a-cake.md`, even if the post is located at `source/posts/2015-02-my-family-holiday` and has permalink `2018/en/how-to-bake-a-cake`.

You can customize the text to display, instead of displaying the post's title. Using `post_path` inside Markdown syntax `[]()` is not supported.

Post's title and custom text are escaped by default. You can use the `escape` option to disable escaping.

For instance:

**Display title of the post.**

`{% raw %}{% post_link 標籤外掛-Tag-Plugins %}{% endraw %}`

{% post_link 標籤外掛-Tag-Plugins %}

**Display custom text.**

`{% raw %}{% post_link 標籤外掛-Tag-Plugins 'Link to a post' %}{% endraw %}`

{% post_link 標籤外掛-Tag-Plugins 'Link to a post' %}

**Escape title.**

```
{% post_link 標籤外掛-Tag-Plugins 'How to use <b> tag in title' %}
```

{% post_link 標籤外掛-Tag-Plugins 'How to use <b> tag in title' %}

**Do not escape title.**

```
{% post_link 標籤外掛-Tag-Plugins '<b>bold</b> custom title' false %}
```

{% post_link 標籤外掛-Tag-Plugins '<b>bold</b> custom title' false %}

## Include Assets

Include post assets.

```
{% asset_path filename %}
{% asset_img filename [title] %}
{% asset_link filename [title] [escape] %}
```

## Raw

If certain content is causing processing issues in your posts, wrap it with the `raw` tag to avoid rendering errors.

```
{% raw %}
content
{% endraw %}
```
