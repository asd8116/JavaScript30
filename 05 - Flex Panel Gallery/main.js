;(function() {
  const panels = document.querySelectorAll('.panel')
  let lastPanel = document.querySelector('.panels')

  function toggleOpen() {
    if (this !== lastPanel) {
      lastPanel.classList.remove('open')
      lastPanel = this
    }
    this.classList.toggle('open')
  }

  function toggleActive(e) {
    console.log(e.propertyName)
    if (e.propertyName.indexOf('flex') !== -1) {
      this.classList.toggle('open-active')
    }
  }

  panels.forEach(panel => {
    panel.addEventListener('click', toggleOpen)
    panel.addEventListener('transitionend', toggleActive)
  })
})()
