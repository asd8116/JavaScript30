/* Get Our Elements */
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('.skip')
const ranges = player.querySelectorAll('.player__slider')
const fullScreenBtn = player.querySelector('.fullScreen')

/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause'
  video[method]()
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚'
  console.log(icon)
  toggle.textContent = icon
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  // video.volume, video.playbackRate
  video[this.name] = this.value
}

// 進度條顯示
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`
}

// 進度條操作（點擊、拖曳
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
}

// 全螢幕
function fullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen()
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen()
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen()
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen()
  }
}

/* Hook up the event listeners */
// 隨著影片狀態的改變而進行變動
video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)

video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))

let mousedown = false
progress.addEventListener('mousedown', () => (mousedown = true))
progress.addEventListener('mouseup', () => (mousedown = false))
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', e => mousedown && scrub(e))

fullScreenBtn.addEventListener('click', fullScreen)
