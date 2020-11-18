/**
 * Rendering DOM Elements
 * https://engineering.hexacta.com/didact-rendering-dom-elements-91c9aa08323b
 */

// DidactElement
const de = {
    type: 'div',
    props: {
        id: 'app',
        children: [
            {
                type: 'span',
                props: {
                    innerText: 'a span ',
                },
            },
            {
                type: 'input',
                props: {
                    value: 'input test',
                    onInput: (e) => {
                        console.log(e.target.value)
                    },
                },
            },
            {
                type: 'a',
                props: {
                    href: 'baidu.com',
                    innerText: 'a link',
                },
            },
            {
                type: 'TEXT',
                props: {
                    nodeValue: 'a text node'
                }
            }
        ],
    },
}

/**
 * element: DidactElement
 * parentNode: DOMElement
 */
function render(element, parentNode) {
    const { type, props } = element
    const dom = getNode(type)
    const children = props.children || []

    Object.keys(props)
        .filter(isListener)
        .forEach((prop) => {
            const eventName = prop.substring(2).toLowerCase()
            dom.addEventListener(eventName, props[prop])
        })

    Object.keys(props)
        .filter(isAttribute)
        .forEach((prop) => {
            dom[prop] = props[prop]
        })

    children.forEach((chi) =>  render(chi, dom))

    parentNode.appendChild(dom)
}

function isListener(prop) {
    return prop.indexOf('on') === 0
}

function isAttribute(prop) {
    return !isListener(prop) && prop !== 'children'
}

function getNode(type){
    if(type === 'TEXT'){
        return document.createTextNode('')
    }else{
        return document.createElement(type)
    }
}

render(de, document.getElementById('root'))
