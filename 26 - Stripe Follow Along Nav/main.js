const menus = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function enterHandler() {
  this.classList.add('trigger-enter')
  // 這段 code 的重點在於狀態的控制，2 個階段的 class
  setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 100)
  background.classList.add('open')

  const dropdown = this.querySelector('.dropdown')
  // 取得定位與大小資訊
  const rect = dropdown.getBoundingClientRect()
  const navRect = nav.getBoundingClientRect()
  // console.log(rect)

  background.style.width = `${rect.width}px`
  background.style.height = `${rect.height}px`
  background.style.top = `${rect.top - navRect.top}px`
  background.style.left = `${rect.left}px`
}

function leaveHandler() {
  this.classList.remove('trigger-enter', 'trigger-enter-active')
  background.classList.remove('open')
}

menus.forEach(menu => {
  menu.addEventListener('mouseenter', enterHandler)
  menu.addEventListener('mouseleave', leaveHandler)
})
