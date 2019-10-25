;(function() {
  const checkboxes = Array.from(document.querySelectorAll('.inbox input[type="checkbox"]'))

  let lastCheck = null
  function clickHandler(e) {
    if (this.checked) {
      if (e.shiftKey && lastCheck !== null) {
        let nowCheck = checkboxes.indexOf(this)
        checkboxes
          .slice(Math.min(nowCheck, lastCheck), Math.max(nowCheck, lastCheck))
          .forEach(input => (input.checked = true))
      }

      lastCheck = checkboxes.indexOf(this)
    }
  }

  checkboxes.forEach(input => input.addEventListener('click', clickHandler))
})()
