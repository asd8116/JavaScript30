const second = document.querySelector('.second-hand')
const min = document.querySelector('.min-hand')
const hour = document.querySelector('.hour-hand')

function setClock() {
  let data = new Date()
  let secondDeg = data.getSeconds() * 6
  let minDeg = data.getMinutes() * 6 + (data.getSeconds() * 6) / 60
  let hourDeg = data.getHours() * 30 + (data.getMinutes() * 30) / 60

  second.style.transform = `rotate(${secondDeg}deg)`
  min.style.transform = `rotate(${minDeg}deg)`
  hour.style.transform = `rotate(${hourDeg}deg)`
}

function timeoutHandler() {
  setClock()
  setTimeout(timeoutHandler, 1000)
}

function animationHandler() {
  setClock()
  window.requestAnimationFrame(animationHandler)
}

setClock() //初始化畫面

// 3種計時器
// setInterval(setClock, 1000) // 設定間隔 持續執行
// setTimeout(timeoutHandler, 1000) // 設定延遲 執行一次
window.requestAnimationFrame(animationHandler) // 處理畫面更新的 setTimeout
