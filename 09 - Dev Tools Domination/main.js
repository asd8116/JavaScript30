;(function() {
  const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]

  function makeGreen() {
    const p = document.querySelector('p')
    p.style.color = '#BADA55'
    p.style.fontSize = '50px'
  }

  // console 小工具
  // let console = {
  //   isDev: true,
  //   log(...args) {
  //     if (!this.isDev) return
  //     window.console.log(...args)
  //   },
  //   warn(...args) {
  //     if (!this.isDev) return
  //     window.console.warn(...args)
  //   },
  //   error(...args) {
  //     if (!this.isDev) return
  //     window.console.error(...args)
  //   },
  //   info(...args) {
  //     if (!this.isDev) return
  //     window.console.info(...args)
  //   },
  //   assert(...args) {
  //     if (!this.isDev) return
  //     window.console.assert(...args)
  //   },
  //   dir(...args) {
  //     if (!this.isDev) return
  //     window.console.dir(...args)
  //   },
  //   table(...args) {
  //     if (!this.isDev) return
  //     window.console.table(...args)
  //   },
  //   count(...args) {
  //     if (!this.isDev) return
  //     window.console.count(...args)
  //   },
  //   time(...args) {
  //     if (!this.isDev) return
  //     window.console.time(...args)
  //   },
  //   timeEnd(...args) {
  //     if (!this.isDev) return
  //     window.console.timeEnd(...args)
  //   },
  // }

  // Regular
  console.log('Hello')

  // Interpolated
  let name = 'Wanaka'
  console.log('Hello I am %s string 1!', 'Wanaka')
  console.log(`Hello I am ${name} string 2!`)

  // Styled
  console.log('%c住手!!!不要玩程式碼', 'font-size:50px; color:red;')

  // warning!
  console.warn('OH NOOO')

  // Error :|
  console.error('Shit!')

  // Info
  console.info('好像跟LOG一樣')

  // Testing
  console.assert(false, '訊息')
  console.assert('', '訊息')
  console.assert(0, '訊息')
  console.assert(null, '訊息')
  console.assert(NaN, '訊息')
  console.assert(undefined, '訊息')

  // clearing
  // CTRL + L
  console.clear()

  // Viewing DOM Elements
  let p = document.querySelector('p')
  console.log(p)
  console.log(dogs)

  console.dir(p)
  console.dir(dogs)

  // Grouping together
  dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years old`)
    console.log(`${dog.name} is ${dog.age * 7} dog years old`)
    console.groupEnd(`${dog.name}`)
  })

  console.table(dogs)

  // counting
  console.count('Wes')
  console.count('Wes')
  console.count('Steve')
  console.count('Steve')
  console.count('Wes')
  console.count('Steve')
  console.count('Wes')
  console.count('Steve')
  console.count('Steve')
  console.count('Steve')
  console.count('Steve')
  console.count('Steve')

  // timing
  console.time('time out') // slow
  let i1
  let j1
  for (i1 = 1; i1 < 10000000; i1++) {
    j1 = i1
  }
  console.timeEnd('time out')

  console.time('time in') // quick
  for (let i2 = 1; i2 < 10000000; i2++) {
    let j2 = i2
  }
  console.timeEnd('time in')

  console.time('time i') // quick
  let j3
  for (let i3 = 1; i3 < 10000000; i3++) {
    j3 = i3
  }
  console.timeEnd('time i')

  console.time('time j') // slow
  let i4
  for (i4 = 1; i4 < 10000000; i4++) {
    let j4 = i4
  }
  console.timeEnd('time j')

  let array1 = []
  for (let i = 1; i < 10000000; i++) {
    array1.push(i)
  }
  console.time('time array1')
  array1.forEach(item => {
    let j = item
  })
  console.timeEnd('time array1')

  let array2 = []
  for (let i = 1; i < 10000000; i++) {
    array2.push({ count: i })
  }
  console.time('time array2')
  array2.forEach(item => {
    let j = item
  })
  console.timeEnd('time array2')

  let array3 = []
  for (let i = 1; i < 10000000; i++) {
    array3.push(i % 2 ? i : { count: i })
  }
  console.time('time array3')
  array3.forEach(item => {
    let j = item
  })
  console.timeEnd('time array3')
})()
