const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
const items = JSON.parse(localStorage.getItem('items')) || []

// 使用 LocalStorage 要記得如何 Get & Set Item
function createList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
      <li>
        <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `
    })
    .join('')
}

function addItem(e) {
  e.preventDefault()
  // let input = document.querySelector('input:first-child')
  let input = document.querySelector('[name=item]')
  items.push({ text: input.value, done: false }) // 更新 JS 資料
  localStorage.setItem('items', JSON.stringify(items)) // 更新 LS 資料
  this.reset()
  createList(items, itemsList) // 更新畫面
}

function toggleItem(e) {
  if (!e.target.matches('input')) return // skip this unless it's an input
  let index = e.target.dataset['index']
  items[index].done = !items[index].done // 更新 JS 資料
  localStorage.setItem('items', JSON.stringify(items)) // 更新 LS 資料
  createList(items, itemsList) // 更新畫面
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleItem)

createList(items, itemsList)
