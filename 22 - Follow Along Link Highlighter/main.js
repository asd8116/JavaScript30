;(function() {
  let now = null
  let target = document.querySelectorAll('a')
  let highlight = document.querySelector('.highlight')
  highlight.style.display = 'none'

  function setPosition() {
    if (!now) return

    let { top, left, width, height } = now.getBoundingClientRect()

    highlight.style.display = ''
    highlight.style.width = `${width}px`
    highlight.style.height = `${height}px`

    // 區域
    // highlight.style.top = now.offsetTop + 'px'
    // highlight.style.left = now.offsetLeft + 'px'

    // 全域
    highlight.style.top = top + window.scrollY + 'px'
    highlight.style.left = left + window.scrollX + 'px'
  }

  function enterHandler() {
    now = this
    setPosition()
  }

  // 摸到需要的
  target.forEach(a => a.addEventListener('mouseenter', enterHandler))
  // For RWD
  window.addEventListener('resize', setPosition)
})()
