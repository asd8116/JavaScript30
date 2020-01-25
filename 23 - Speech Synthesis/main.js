const msg = new SpeechSynthesisUtterance()
msg.text = document.querySelector('[name="text"]').value

let voices = []
// good job
const options = document.querySelectorAll('[type="range"], [name="text"]')
const voicesDropdown = document.querySelector('[name="voice"]')

const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')

function populateVoices() {
  voices = this.getVoices()
  voicesDropdown.innerHTML = voices
    // .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('')
}

function play() {
  stop()
  speechSynthesis.speak(msg)
}

function stop() {
  speechSynthesis.cancel()
}

function setOption() {
  console.log(this.name, this.value)
  msg[this.name] = this.value
  play()
}

function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value)
  play()
}

speechSynthesis.addEventListener('voiceschanged', populateVoices)

speakButton.addEventListener('click', play)
stopButton.addEventListener('click', stop)
// stopButton.addEventListener("click", () => {
//   play(false);
// });s

options.forEach(option => option.addEventListener('change', setOption))
// rateInput.addEventListener("change",function(){
//   msg[this.name] = this.value
// })
// pitchInput.addEventListener("change",function(){
//   msg[this.name] = this.value
// })
// textInput.addEventListener("change",function(){
//   msg[this.name] = this.value
// })

voicesDropdown.addEventListener('change', setVoice)
