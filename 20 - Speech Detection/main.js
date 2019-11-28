;(function() {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

  const recognition = new SpeechRecognition()
  recognition.interimResults = true
  recognition.lang = 'zh-TW'

  let p = document.createElement('p')
  const words = document.querySelector('.words')
  words.appendChild(p)

  recognition.addEventListener('result', e => {
    console.log(e)
    const transcript = Array.from(e.results)
      .map(result => result[0])
      // 取得第 0 筆中的 transcript
      .map(result => result.transcript)
      // 用 join 把連結符號消掉
      .join('')

    const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩')
    p.textContent = poopScript

    if (e.results[0].isFinal) {
      p = document.createElement('p')
      words.appendChild(p)
    }
  })

  recognition.addEventListener('end', recognition.start)

  recognition.start()
})()
