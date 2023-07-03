(() => {
  const isIncludeEN = item => {
    const key = '/en/'
    return item.includes(key)
  }

  let nowIncludeEN = isIncludeEN(window.location.href)
  let selector = nowIncludeEN
    ? document.querySelectorAll('a[href^="https://butterfly.js.org"]')
    : document.querySelectorAll('a[href^="/en/"]')

  const loadUrl = (e) => {
    e.preventDefault()
    window.location.href = e.target.href
  }

  const eventFn = (ele,type = 'add') => {
    ele.forEach(item => {
      if (nowIncludeEN) {
        if (!isIncludeEN(item.href)) {
          item.setAttribute("data-pjax-state", 'load')
          type === 'add' ? item.addEventListener('click', loadUrl) : item.removeEventListener('click', loadUrl)
        }
      } else {
        type === 'add' ? item.addEventListener('click', loadUrl) : item.removeEventListener('click', loadUrl)
      }
    } )
  }

  eventFn(selector)

  document.addEventListener('pjax:send', () => {
    eventFn(selector, 'remove')
  })

  document.addEventListener('pjax:complete', () => {
    nowIncludeEN = isIncludeEN(window.location.href)
    selector = nowIncludeEN
      ? document.querySelectorAll('a[href^="https://butterfly.js.org"]')
      : document.querySelectorAll('a[href^="/en/"]')
    eventFn(selector)
  })
})()