let button = document.querySelector('button')

function buttonHandler() {
  console.log('Button')
}

button.addEventListener('click', buttonHandler, { capture: false, once: false })

let divs = document.querySelectorAll('div')

function domHandler(e) {
  e.stopPropagation() // stop bubbling!

  // console.log(e.target === this)
  console.log(e.path)
  console.log(this.className)
  console.log(this.classList.value)
}

divs.forEach(dom => {
  dom.addEventListener('click', domHandler, { capture: false, once: false })
})

let as = document.querySelectorAll('a')

function aHandler(e) {
  e.preventDefault()

  console.log('Binding A Click', this)
}

as.forEach(a => {
  a.addEventListener('click', aHandler, { capture: false, once: false, passive: false })
})

let ul = document.querySelector('ul')

function ulHandler(e) {
  // console.log('target:', e.target, 'currentTarget:', e.currentTarget)

  // ​e.path 在 firefox 和 safari 都沒有
  console.log(
    e.target.classList.contains('button'),
    e.composedPath().find(dom => {
      return dom.classList && dom.classList.contains('button')
    })
  )

  if (e.target.nodeName === 'A') {
    e.preventDefault()

    console.log('Delegate A Click', e.target)
  }
}

ul.addEventListener('click', ulHandler)
