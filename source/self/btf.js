(() => {
  const isIncludeEN = item => {
    const key = '/en/'
    return item.includes(key)
  }

  let nowIncludeEN = isIncludeEN(window.location.href)
  let selector = nowIncludeEN
    ? document.querySelectorAll('a[href^="https://butterfly.js.org"]')
    : document.querySelectorAll('a[href^="/en/"]')
  
  window.fullLoadPage = (url) => {
    window.location.href = url
  }
  
  const replaceHref = item => {
    item.href = `javascript:fullLoadPage(“${item.href}”)`
  }
    
  const eventFn = (ele) => {
    ele.forEach(item => {
      if (nowIncludeEN) {
        if (!isIncludeEN(item.href)) {
          replaceHref(item)
        }
      } else {
        replaceHref(item)
      }
    } )
  }

  eventFn(selector)


  document.addEventListener('pjax:complete', () => {
    nowIncludeEN = isIncludeEN(window.location.href)
    selector = nowIncludeEN
      ? document.querySelectorAll('a[href^="https://butterfly.js.org"]')
      : document.querySelectorAll('a[href^="/en/"]')
    eventFn(selector)
  })
})()