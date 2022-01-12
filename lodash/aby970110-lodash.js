var Aby970110 = {
// chunk
  
  function(array, size) {

    var length = array.length

    if (!length || !size || size < 1) {
      return []
    }
    var index = 0   // 保存分割值
    var resIndex = 0 // 保存数组下标
    var result = new Array(Math.ceil(length / size))// // Math.ceil 大于或等于给定数字的最小整数
    while (index < length) {
      result[resIndex++] = array.slice(index, (index += size)) //slice()方法  以新的数组对象，返回数组中被选中的元素
    }
    return result
  }
}

// compact 

array => {
  var newarry = [];
  var len = length; 
  for (var i = 0; i < len; i++) {
    

  }
    
  }




