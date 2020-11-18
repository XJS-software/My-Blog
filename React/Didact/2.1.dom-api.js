
/**
 * DOM API
 */
const domRoot = document.getElementById('root')
const domInput = document.createElement('input')
const domText = document.createTextNode('')

domInput.type = 'text'
domInput.value = 'test input'
domInput.addEventListener('change', (e) => console.log(e.target.value))

domText.nodeValue = 'a text node'

domRoot.appendChild(domInput)
domRoot.insertBefore(domText, domInput)