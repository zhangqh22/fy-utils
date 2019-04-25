module.exports = {
  // 数组处理
  fyArr: {
    // 删除数组中指定索引的值
    del(arr, index) {
      let arrLength = arr.length;
      for(let i=0; i<arrLength; i++) {
        if(i === index) {
          arr.splice(i, 1);
          break;
        } 
      }
    },
    // 数据元素
    isRepeat(v, arr, key) {
      var filterArr = [];
      if(key) {
        filterArr = arr.filter(function(v2) {
          if(v==v2[key]) return v2;
        });
      } else {
        filterArr = arr.filter(function(v2) {
          if(v==v2) return v2;
        });
      }
      return filterArr.length > 1;
    }
  },
  // 对象处理
  fyObj: {
    // 判断是否是json对象
    isJSON(data) {
      if(typeof data==='object' && Object.prototype.toString.call(data).toLowerCase()==='[object object]' && !data.length) {
        return true;
      }
      return false;
    },
    // 对比两JSON是否相等
    diffJSON(source, target) {
      var flag = false;
      function recursive(src, tgt) {
        var srcLen = Object.keys(src).length,
          tgtLen = Object.keys(tgt).length,
          maxData,
          minData;
        if(srcLen >= tgtLen) {
          maxData = src;
          minData = tgt;
        } else {
          maxData = tgt;
          minData = src;
        }
        for(var k in maxData) {
          if(maxData.hasOwnProperty(k)) {
            if(typeof maxData[k]==='object' && (Array.isArray(maxData[k])||this.isJSON(maxData[k]))) {
              if(minData[k] !== undefined) {
                recursive(maxData[k], minData[k]);
              } else {
                flag = true;
                return;
              }
            } else {
              if(maxData[k]!==minData[k]) {
                flag = true;
                return;
              }
            }
          }
        }
      }
      recursive(source, target);
      return flag;
    }
  },
  // url处理
  fyUrl: {
    // 查询参数转json
    query2json() {
      let search = location.href.split('?')[1];
      if (search) {
        let searchArr = search.split('&'),
            item = [];
        return searchArr.reduce((json, v) => {
          item = v.split('=');
          json[item[0]] = item[1];
          return json;
        }, {});
      }
      return {};
    }
  }
}