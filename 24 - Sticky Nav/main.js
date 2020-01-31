const nav = document.querySelector('#main')
let navTop = nav.offsetTop

function fixNav() {
  // console.log(window.scrollY, nav.offsetTop)

  if (window.scrollY >= navTop) {
    // 防 nav 吸住
    document.body.style.paddingTop = nav.offsetHight + 'px'

    document.body.classList.add('fixedNav')
  } else {
    document.body.classList.remove('fixedNav')
    document.body.style.paddingTop = ''
  }
}

window.addEventListener('scroll', fixNav)

window.addEventListener('resize', function() {
  navTop = nav.offsetTop
})
