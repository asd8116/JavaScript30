function removeTransition(e) {
  if (e.propertyName === 'transform') {
    e.target.classList.remove('playing')
  }
}

function playSound(e) {
  let keyOrNot = e.keyCode || this.getAttribute('data-key') // 判斷觸發點

  const audio = document.querySelector(`audio[data-key="${keyOrNot}"]`)
  const key = document.querySelector(`.key[data-key="${keyOrNot}"]`)

  if (audio) {
    audio.currentTime = 0
    audio.play()
  }

  if (key) {
    key.classList.add('playing')
  }
}

const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', removeTransition)) // 結束時移除特效

keys.forEach(key => key.addEventListener('click', playSound)) // 畫面點擊

window.addEventListener('keydown', playSound) // 鍵盤點擊
