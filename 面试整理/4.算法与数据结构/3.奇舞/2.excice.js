const arr = [9,23,5,1,4,7,9,3,12,45,2,5,7,3]

/** 冒泡排序 */
function bubleSort(ary){
  const arr = [...ary]
  const len = arr.length
  for(var i=0;i<len-1;i++){
    for(var j=0;j<len-1-i;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

const res1 = bubleSort(arr)
console.log('res1: ', res1);

/** 
 * 快速排序
 */
function quickSort(arr,left,right){
  const index = findIndex(arr,left,right)
  if(left < right){
    quickSort(arr,left,index-1)
    quickSort(arr,index+1,right)
  }
}
function findIndex(arr,left,right){
  var base = arr[left]
  while(left < right){
    while(arr[right] >= base && left !== right){
      right--
    }
    [arr[left],arr[right]] = [arr[right],arr[left]]
    while(arr[left] <= base && left !== right){
      left++ 
    }
    [arr[left],arr[right]] = [arr[right],arr[left]]
  }
  return left
}
quickSort(arr,0,arr.length-1)
console.log('arr: ', arr);

/** 
 * 快排2
 * 利用递归，更简单易懂
 */
var arr2 = [1,0,-1,9,23,5,1,4,7,9,3,12,45,2,5,7,3]
function quickSort2(arr){
  if(arr.length <= 1){
    return arr
  }
  const left = []
  const right = []
  const base = arr[0]
  for(var i=1;i<arr.length;i++){
    if(arr[i] < base){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
  return [...quickSort2(left),base,...quickSort2(right)]
}
var res2 = quickSort2(arr2)
console.log('res2: ', res2);

