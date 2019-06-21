const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')
let cities = null

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => (cities = data))

function findMatch(wordToMatch, cities) {
  return cities.filter(p => {
    const regex = new RegExp(wordToMatch, 'gi')
    return p.city.match(regex) || p.state.match(regex)
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function displayInput() {
  const inputArray = findMatch(this.value, cities)
  const html = inputArray
    .map(p => {
      const regex = new RegExp(this.value, 'gi')
      const cityName = p.city.replace(regex, `<span class="hl">${this.value}</span>`)
      const stateName = p.state.replace(regex, `<span class="hl">${this.value}</span>`)
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(p.population)}</span>
        </li>
      `
    })
    .sort()
    .join('')

  suggestions.innerHTML = html
}

searchInput.addEventListener('change', displayInput)
searchInput.addEventListener('keyup', displayInput)
