;(function() {
  const canvas = document.querySelector('#draw')
  const ctx = canvas.getContext('2d')
  let drawing = false
  let x = 0,
    y = 0
  let hue = 0
  let lineWidth = 100
  let direction = -1

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  ctx.lineWidth = lineWidth
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  // ctx.globalCompositeOperation = 'multiply'

  function draw(e) {
    if (!drawing) return
    console.log('draw')

    ctx.beginPath()
    hue = hue < 360 ? hue + 1 : 0
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

    if (lineWidth < 1 || lineWidth > 100) {
      direction *= -1
    }
    lineWidth += direction
    ctx.lineWidth = lineWidth

    ctx.moveTo(x, y)
    ctx.lineTo(e.offsetX, e.offsetY)
    ;[x, y] = [e.offsetX, e.offsetY]
    ctx.stroke()
  }

  canvas.addEventListener('mousedown', e => {
    drawing = true
    ;[x, y] = [e.offsetX, e.offsetY]
  })
  canvas.addEventListener('mousemove', draw)
  canvas.addEventListener('mouseup', () => (drawing = false))
  canvas.addEventListener('mouseleave', () => (drawing = false))
})()
