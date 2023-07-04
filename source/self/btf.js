(() => {
  const isIncludeEN = item => {
    const key = '/en/'
    return item.includes(key)
  }

  const loadUrl = (url) => {
    window.location.href = url
  }

  const eventFn = (elements, includeEN) => {
    elements.forEach(item => {
      if (!includeEN || !isIncludeEN(item.href)) {
        item.href = `javascript:loadUrl('${item.href}');`
      }
    })
  }

  const nowIncludeEN = isIncludeEN(window.location.href)
  const selector = nowIncludeEN
    ? document.querySelectorAll('a[href^="https://butterfly.js.org"]')
    : document.querySelectorAll('a[href^="/en/"]')

  eventFn(selector, nowIncludeEN)
})()
