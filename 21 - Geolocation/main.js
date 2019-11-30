;(function() {
  const arrow = document.querySelector('.arrow')
  const speed = document.querySelector('.speed-value')

  // navigator.geolocation.getCurrentPosition(data => {})
  // 使用 watchPosition 來取得使用者的地理位置及海拔、速度
  let watchID = navigator.geolocation.watchPosition(
    // 若成功取回，則會回傳一組 Position (這裡定義名稱為data)
    data => {
      console.log(data)
      speed.textContent = data.coords.speed
      arrow.style.transform = `rotate(${data.coords.heading}deg)`
    },
    err => {
      console.error(err)
      navigator.geolocation.clearWatch(watchID)
    }
  )
})()
