/**
 * Created by liqing on 16/3/17.
 */
angular.module('sportsStore')
    .controller('productListCtrl', function($scope, $filter){
        var selectedCategory = null;

        $scope.selectCategory = function(newCategory){
            selectedCategory = newCategory;
        }

        $scope.categoryFilterFn = function(product){
            return selectedCategory == null || product.category == selectedCategory;
        }
    });
