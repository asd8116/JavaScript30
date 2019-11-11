// 使用者至少停多久(20ms)才會執行動作
function debounce(func, wait = 20, immediate = true) {
  // 閉包跟作用域有很大的關聯，保護裡面的參數
  // timeout 只能在 debounce() 被調用時才改變
  var timeout
  return function() {
    var context = this,
      args = arguments

    var later = function() {
      timeout = null
      // if (!immediate)
      func.apply(context, args)
    }

    if (timeout) return
    var callNow = immediate && !timeout

    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

let images = document.querySelectorAll('img')

function scrollHandler() {
  // console.log(window.scrollY)
  let windowTop = window.scrollY
  let windowBottom = windowTop + window.innerHeight

  images.forEach(img => {
    imgMid = img.offsetTop + img.height / 2
    if (imgMid < windowBottom && imgMid > windowTop) {
      img.classList.add('active')
    } else {
      img.classList.remove('active')
    }
  })
}

window.addEventListener('scroll', debounce(scrollHandler))
