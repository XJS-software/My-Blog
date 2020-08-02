/** 
 * Set
 * size , 
 * add, has, delete, 
 * values, entries
 */
var s = new Set([1,2,3,3,4,5])
console.log('s: ', s);
console.log('s.size: ', s.size);

s.add(6)
var res = s.has(1)
console.log('s.has(1): ', s.has(1));
s.delete(2)
console.log('s: ', s);

var val = s.values()
console.log('val: ', val);
var entries = s.entries()
console.log('entries: ', entries);

/** 
 * Map
 * size 
 * has, add, delete, 
 * values, entries
 */
var m = new Map([[1,2],[{},2],[null,3]])
console.log('m: ', m);
console.log('m.size: ', m.size);

m.has(1)
console.log('m.has(1): ', m.has(1));

m.delete(1)
console.log('m: ', m);

var mKeys = m.keys()
console.log('mKeys: ', mKeys);

var mValue =  m.values()
console.log('mValue: ', mValue);

var mEntries = m.entries()
console.log('mEntries: ', mEntries);
