/**
 * Created by liqing on 16/3/17.
 */
angular.module('customFilters' , [])
    //生成类型列表
    .filter('unique', function(){
        return function(data, propertyName){
            if(angular.isArray(data) && angular.isString(propertyName)){
                var results = [];
                var keys = {};
                for(var i=0; i<data.length; i++){
                    var val = data[i][propertyName];
                    if(angular.isUndefined(keys[val])){
                        keys[val] = true;
                        results.push(val);
                    }
                }
                return results;
            }else{
                return data;
            }
        }
    })
    //返回当前页的产品数据
    .filter('range', function($filter){
        return function(data, page, size){
            if(angular.isArray(data) && angular.isNumber(page) && angular.isNumber(size)){
                var start_index = (page - 1) * size;
                if(start_index > data.length){ // data.length < start_index
                    return [];
                }else{
                    return $filter('limitTo')(data.splice(start_index), size);
                }
            }else{
                return data;
            }
        }
    })
    //生成页码
    .filter('pageCount', function(){
        return function(data, size){
            if(angular.isArray(data)){
                var result = [];
                for(var i=0; i<Math.ceil(data.length / size); i++){
                    result.push(i);
                }
                return result;
            }else{
                return data;
            }
        }
    });
