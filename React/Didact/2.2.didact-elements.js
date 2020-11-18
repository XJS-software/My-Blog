/** 
 * Didact Elements
 * to simulate virtual-dom
 */

/** 
 * DidactElement {
 *    type: string, 
 *    props: {
 *        [key in Element]: string,
 *        children: DidactElement[]  
 *    }
 * }
 */
const de = {
    type: 'div',
    props: {
        id: 'app',
        children: [
            {
                type: 'span',
                props: {}
            },
            {
                type: 'input',
                props: {
                    value: 'input test',                    
                }
            },
            {
                type: 'a',
                props: {
                    href: 'baidu.com'
                }
            }
        ]
    }
}