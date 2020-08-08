/**
 * 正则 
 * https://mp.weixin.qq.com/s/kDdikreTxYVFxXMQB6cYlA
 */
/** 
 * ^ & 
 * \b \B
 * \s \S
 * \d \D
 * \w \W
 * 
 * . 
 * ? + * {n} {n,} {n,m}
 * 
 * []  ()  |
 * 
 * 贪婪匹配(默认) / 非贪婪匹配( ? )
 * 
 */

/** test, */
var t = '2y8hv9f9 ,98u; q29 98u34/9'
var reg = /[\W]+/
var tRes = reg.test(t)
console.log('tRes: ', tRes);  // tRes:  true


/** replace, match  */
var m = 'ab982c ksd kso 12nsdn32'
var mRes = m.match(/[0-9]+/)
console.log('mRes: ', mRes);
/** 
 * mRes:  [ '982',
  index: 2,
  input: 'ab982c ksd kso 12nsdn32',
  groups: undefined ]
 */

var mRes2 = m.match(/[0-9]+/g)
console.log('mRes2: ', mRes2); // [ '982', '12', '32' ]

var r = 'sjf lkjdf 893rkjhskv ooiduqoi 9i0ef 0ew9'
var rRes1 = r.replace(/[0-9]+/, '++')
console.log('rRes1: ', rRes1); // rRes1:  sjf lkjdf ++rkjhskv ooiduqoi 9i0ef 0ew9

var rRes2 = r.replace(/[0-9]+/g, '++')
console.log('rRes2: ', rRes2); // rRes2:  rRes2: sjf lkjdf ++rkjhskv ooiduqoi ++i++ef ++ew++

