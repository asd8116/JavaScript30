;(function() {
  let length = 100
  let text = document.querySelector('h1')

  document.querySelector('.hero').addEventListener('mousemove', function(e) {
    // No.1
    // let x = e.offsetX
    // let y = e.offsetY
    // No.2
    let { offsetX, offsetY } = e
    // No.3
    // let { offsetX: x, offsetY: y } = e

    if (e.target !== this) {
      offsetX += e.target.offsetLeft
      offsetY += e.target.offsetTop
    }

    let lengthX = Math.floor((offsetX / this.offsetWidth) * length) * 2 - length
    let lengthY = Math.floor((offsetY / this.offsetHeight) * length) * 2 - length

    text.style.textShadow = `
      ${lengthX * -0.3}px ${lengthY * -0.3}px 5px rgba(255, 0, 0, 0.8),
      ${lengthX * -0.6}px ${lengthY * -0.6}px 5px rgba(0, 255, 0, 0.8),
      ${lengthX * -1}px ${lengthY * -1}px 5px rgba(0, 0, 255, 0.8)
    `

    // text.style.textShadow = `
    //   ${lengthX}px ${lengthY}px 5px rgba(255,0,255,0.7),
    //   ${lengthX * -1}px ${lengthY}px 5px rgba(0,255,255,0.7),
    //   ${lengthY}px ${lengthX * -1}px 5px rgba(0,255,0,0.7),
    //   ${lengthY * -1}px ${lengthX}px 5px rgba(0,0,255,0.7)
    // `
  })
})()
