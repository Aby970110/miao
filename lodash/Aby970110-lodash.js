var Aby970110 = {

  // function chunk (array, size) {

  // var size = Math.max(size, 0); // 寻找一组数中最大的值
  // var length = array == null ? 0 : array.length; // 定义length

  // if (!length || size < 1) {
  //   return []; // 当length为0或者 size 小于1 返回空数组
  // }

  // var index = 0; // 保存分割值
  // var resIndex = 0; // 保存数组下标



  // // Math.ceil 大于或等于给定数字的最小整数
  // var result = new Array(Math.ceil(length / size)); // result是一个只有数组长度的数组，通过length 和size 确定分割后数组的长度

  // while (index < length) {
  //   result[resIndex++] = slice(array, index, (index += size)); // slice()方法以新的数组对象，返回数组中被选中的元素
  // }

  // return result;
  
  
  function(array, size) {

    var length = array.length
    if (!length || !size || size < 1) {
      return []
    }
    var index = 0
    var resIndex = 0
    var result = new Array(Math.ceil(length / size))
    while (index < length) {
      result[resIndex++] = array.slice(index, (index += size))
    }
    return result
  }
    
    // console.log (chunk([1, 2, 3], 1)) // [[1], [2], [3]]
    
    // console.log (chunk([1, 2, 3, 4], 2)) // [[1, 2], [3,4]]
    
    // console.log (chunk([1, 2, 3, 4], 3)) // [[1, 2, 3], [4]]
    
    
  }





