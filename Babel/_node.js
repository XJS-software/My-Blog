const fs = require('fs')
const glob = require('glob')

const files = glob.sync('./*.js')

const codeMap = {}

files.forEach(file=>{
    if(file === './_node.js') return
    const code = fs.readFileSync(file)
    codeMap[file] = {
        exports: {
            // default: 
        },
        code: `(function(exports, require){${code}})`
    }
})

function _require(id){
    const {exports, code} = codeMap[id]
    var foo = eval(code)
    foo(exports, _require)
    return exports
}

const entry = './index.js'

_require(entry)
