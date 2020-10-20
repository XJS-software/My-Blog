/** 
 * 解析三种情况
 * age >= 45
 * var age = 40
 * 2+3*5 
 */
const INITIAL_STATUS = 'INITIAL_STATUS'
const Identifier = 'Identifier'
const Number = 'Number'
const GT = 'GT'
const GE = 'GE'
const EQ = 'EQ'
const RE = 'RE' // 保留字
const PLUS = 'PLUS' // +
const MU = 'MU' // *

const DefStatus = {
    INITIAL_STATUS,
    Identifier,
    Number,
    GT,
    GE,
    EQ,
    RE,
    PLUS,
    MU,
}
const reCharList = ['var','const','let']

class CodeParser{
    constructor(){
        this.initStatus()
    }
    initToken(ch){
        if(isAlpha(ch)){
            this.status = DefStatus.Identifier
            this.updateToken(this.status,ch)
        }else if(isNum(ch)){
            this.status = DefStatus.Number
            this.updateToken(this.status,ch)
        }else if(ch === '>'){
            this.status = DefStatus.GT
            this.updateToken(this.status,ch)
        }else if(ch === '='){
            this.status=DefStatus.EQ
            this.updateToken(this.status,ch)
        }else if(ch === '+'){
            this.status=DefStatus.PLUS
            this.updateToken(this.status,ch)
        }else if(ch === '*'){
            this.status = DefStatus.MU
            this.updateToken(this.status,ch)
        }
        else{
            this.status = DefStatus.INITIAL_STATUS
        }
    }
    makeStatus (ch){
        switch(this.status){
            case DefStatus.INITIAL_STATUS:
                this.initToken(ch)
                break;
            case DefStatus.Identifier:
                if(isAlpha(ch) || isNum(ch)){
                    this.updateToken(this.status,ch)
                }else{
                    this.collectToken(ch)
                }
                break
            case DefStatus.Number:
                if(isNum(ch)){
                    this.updateToken(this.status,ch)
                }else{
                    this.collectToken(ch)
                }
                break
            case DefStatus.GT:
                if(ch === '='){
                    this.status = DefStatus.GE
                    this.updateToken(this.status,ch)
                }else{
                    this.collectToken(ch)
                }
                break
            case DefStatus.GE:
            case DefStatus.EQ: 
            case DefStatus.PLUS:
            case DefStatus.MU:
                this.collectToken(ch)
                break
            default:
                console.warn('error');
        }
    }
    initStatus(){
        this._token = {}
        this._tokenCollection = []
        this.status = DefStatus.INITIAL_STATUS
    }
    updateToken(status,ch){
        this._token.type = status
        this._token.content || (this._token.content = '')
        this._token.content += ch
    }
    collectToken(ch){
        this._tokenCollection.push({...this._token})
        this._token = {}
        this.status = DefStatus.INITIAL_STATUS
        this.initToken(ch)
    }
    filterRECollection(){
        this._tokenCollection.forEach(ele=>{
            if(reCharList.indexOf(ele.content.toLowerCase()) > -1){
                ele.type = DefStatus.RE
            }
        })
    }
    parseCode(code){
        this.initStatus()
        let i = 0
        while(i < code.length){
            let ch = code[i]
            this.makeStatus(ch)
            i++
        }
        this.collectToken()
        this.filterRECollection()
        return this._tokenCollection
    }
}

function isAlpha(ch){
    const reg = /[a-zA-Z]/
    return reg.test(ch)
}

function isNum(ch){
    const reg = /[0-9]/
    return reg.test(ch)
}

const codeParser = new CodeParser()

var code1 = 'age1 = 45'
const parseRes1 = codeParser.parseCode(code1)
console.log('parseRes1: ', parseRes1);

var code2 = '1 + 2 * 4'
const parseRes2 = codeParser.parseCode(code2)
console.log('parseRes2: ', parseRes2);

var code3 = 'var age = 40'
const parseCode3 = codeParser.parseCode(code3)
console.log('parseCode3: ', parseCode3);

