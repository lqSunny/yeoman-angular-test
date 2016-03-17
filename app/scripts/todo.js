/**
 * Created by liqing on 16/3/13.
 */
var model = {
  user: "liqing",
};

var todoApp = angular.module('todoApp' , []);

todoApp.run(function($http){
  $http.get('../../server/todo.json').success(function(data){
    model.items = data;
  });
});

todoApp.filter('checkedItems', function(){
  return function(items, showComplete){
    var resultArr = [];
    angular.forEach(items, function(item){
      if(item.done == false || showComplete == true){
        resultArr.push(item);
      }
    });
    return resultArr;
  }
});

todoApp.controller('todoCtrl' , function($scope){
  $scope.todo = model;
  //$scope.actionText = '输入您的待办事项...'

  $scope.incompleteCount = function(){
    var count = 0;
    angular.forEach($scope.todo.items, function(item){
      if(!item.done) count++;
    });
    return count;
  };

  $scope.warningLevel = function(){
    return $scope.incompleteCount() < 3 ? 'label-success' : 'label-warning';
  };

  $scope.addNewItem = function(actionText){
    if(actionText && actionText != ''){
      $scope.todo.items.push({action: actionText, done: false});
      $scope.actionText = '';
    }
  };

});

/* test javascript */
var testObj = {
  name: 'liqing',
  age: 26,
  love: function(){
    console.log('i love hahaha');
  }
};
var testArr = [
  {
    id: '11',
    title: '李女士低'
  },
  {
    id: '22',
    title: 'v 的事'
  }
];
//delete关键字删除对象的属性或方法
delete testObj.love;
//in表达式查看对象是否拥有某属性
console.log('name' in testObj); //true
console.log('love' in testObj); //false
for(i in testObj){
  console.log(i + '--' + testObj[i]);
}
console.log('----------------------------');
for(i in testArr){
  console.log(i + '--' + testArr[i].title);
}



