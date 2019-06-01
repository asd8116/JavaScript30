;(function() {
  const inputs = document.querySelectorAll('.controls input')

  function changeHandler() {
    const suffix = this.dataset.sizing || ''
    document.documentElement.style.setProperty('--' + this.name, this.value + suffix)
  }

  inputs.forEach(input => {
    input.addEventListener('change', changeHandler)
    input.addEventListener('mousemove', changeHandler)
  })
})()
