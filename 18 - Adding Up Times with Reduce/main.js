;(function() {
  let li = document.querySelectorAll('li')

  // let a = Array.from(li).map(item => item)
  // let b = [].map.call(li, item => item)
  // let c = [].map.apply(li, [item => item])
  let d = [...li]
    .map(item => item.dataset.time)
    .map(time => {
      let [mins, secs] = time.split(':')
      return mins * 60 + secs * 1
    })
    // .reduce((prev, next) => prev + next)
    .reduce((prev, next) => prev + next, 0)
  console.log(d)

  // let sec = d % 60
  // let min = (d - sec) / 60
  // let hour = Math.floor(min / 60)
  // min %= 60

  // let sec = d % 60
  // let min = ((d - sec) / 60) % 60
  // let hour = (d - min * 60 - sec) / 3600

  let hour = Math.floor(d / 3600)
  let min = Math.floor((d % 3600) / 60)
  let sec = d % 60

  console.log(`${hour}:${min}:${sec}`)

  // 概念補充：forEach 循环里 break
  let array = [1, 2, 3, 4, 5]
  array.forEach(function(item, index) {
    if (item === 2) {
      array = array.concat(array.splice(index, array.length - index))
    }
    console.log(item) //只输出1,2
  })
})()
