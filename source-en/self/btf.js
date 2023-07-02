// document.addEventListener('pjax:send', function (e) {

//   const checkInclude = (item1, item2) => {
//     const key = '/en/'
//     const item1Has = item1.includes(key)
//     const item2Has = item2.includes(key)
//     return item1Has && !item2Has || !item1Has && item2Has
//   }
//   console.log(e);

  
//   const src = window.location.href
//   const target = e.triggerElement.href || ''

//   if (checkInclude(src, target)) {
//     e.preventDefault()
//     e.stopImmediatePropagation()
//     e.stopPropagation()
//     console.log(e);
//     console.log('preventDefault');
//     window.location.href = target
//     return
//   }
// })

// document.addEventListener('pjax:success', function (e) {
//   console.log('pjax:success');
// })

// window.openNew = function (url) {
//   window.location.href = url
// }

document.querySelectorAll('a[href^="https://butterfly.js.org]').forEach(item => {
  item.setAttribute("data-pjax-state", 'load')
})

