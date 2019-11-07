const secretCode = [38, 38, 40, 40]
const input = []

window.addEventListener('keyup', function(e) {
  input.push(e.keyCode)
  input.splice(-secretCode.length - 1, input.length - secretCode.length)
  // input.splice(0, input.length - secretCode.length)

  if (input.join() === secretCode.join()) return cornify_add()
  console.log(input)
})
