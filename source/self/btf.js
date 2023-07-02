const isIncludeEN = (item) => {
  const key = '/en/'
  return item.includes(key)
}

if (isIncludeEN(window.location.href)) {
  document.querySelectorAll('a[href^="https://butterfly.js.org"]').forEach(item => {
    if (!isIncludeEN(item.href)) {
      item.setAttribute("data-pjax-state", 'external')
    }
  })
} else {
  document.querySelectorAll('a[href^="/en/"]').forEach(item => {
    item.setAttribute("data-pjax-state", 'external')
  })
}
