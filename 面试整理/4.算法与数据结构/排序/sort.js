/** 
 * 冒泡排序
 * 两两比较，大者沉底
 * 外层循环控制循环次数，即 length - 1 此循环即可
 * 内层循环每次可以获取一个最大值
 * 
 * 稳定排序
 */
var ary = [1,4,2,5,7,3,1,2,0,-1,9,6]

function bubleSort(source){
  var ary = [...source]
  for(var i = 0; i < ary.length - 1 ; i++){
    for(var j = 0;j<ary.length - i ; j++){
      if(ary[j] > ary[j + 1]){
        [ary[j],ary[j+1]] = [ary[j+1],ary[j]]
      }
    }
  }
  return ary
}

var res = bubleSort(ary)
console.log('bubleSort - res: ', res);

/** 
 * 选择排序
 * 与其后所有数据依次比较，满足条件者交换数值
 * 
 * 外层循环控制次数 len-1
 * 内层循环每次获取一个最小值
 * 
 * 不稳定排序 如   5 5 2 8 
 */
function selectSort(source){
  let arr = [...source]
  let len = arr.length
  for(var i=0;i<len-1;i++){
    for(var j=i+1;j<len;j++){
      if(arr[i] < arr[j]){
        [arr[i],arr[j]] = [arr[j],arr[i]]
      }
    }
  }
  return arr
}
const selectSortRes = selectSort(ary)
console.log('selectSort - res: ', res);

/** 
 * 插入排序
 * 将数组分成两部分，前一部分已完成排序，后一部分为乱序
 * 默认 arr[0] 为已排序数据
 * 取未排序数据中第一个数据 current
 * 将 current 在已排序数据中依次从后向前比较:
 * 不符合条件者与 current 调换位置
 * 符合条件时，不做操作，即完成一次插入排序的过程
 * 
 * 时间复杂度：最好结果：已是排序数字 O(n)；
 *           最坏结果：倒序数字O(n2)
 *           平均：O(n2)
 * 
 * 稳定排序
 */
function insertSort(source){
  let arr = [...source]
  let len = arr.length
  for(var i =1;i<len;i++){
    for(var j = i;j>0;j--){
      if(arr[j-1] > arr[j]){
        [arr[j-1],arr[j]] = [arr[j],arr[j-1]]
      }else{
        break
      }
    }
  }
  return arr
}
const insertSortRes = insertSort(ary)
console.log('insertSortRes: ', insertSortRes);


/** 
 * 快速排序
 */
function quickSort(source,low,high){
  if(low < high){
    var idx = getIndex(source,low,high)
    quickSort(source,low,idx-1)
    quickSort(source,idx+1,high)
  }
}
function getIndex(source,low,high){
  let base = source[low]
  while(low < high){
    while(source[high]>=base && low < high){
      high--
    }
    source[low] = source[high]
    while(source[low]<=base && low < high){
      low++
    }
    source[high] = source[low]
  }
  source[low] = base
  return low
}

const testQuickArr = [...ary]
quickSort(testQuickArr,0,testQuickArr.length-1)
console.log('testQuickArr: ', testQuickArr);





/** 
 * 插冒归基稳定，快选堆希不稳定
 */