angular.module('menuApp')
    .controller("mainCtrl", function($scope, $http) {

        $scope.getFood = function() {
            $http.get('/api/food').then(function(response) {
                $scope.foods = response.data;
            });
        };
        $scope.getReview = function(foodId, reviewId) {
            $http.get('/api/food/review?foodId=' + foodId + '&reviewId=' + reviewId)
                .then(function(response) {
                    $scope.selectedReview = response.data;
            });
        };

        $scope.deleteFood = function (foodId) {
            $http.delete('/api/food/' + foodId).then(function(response) {
                $scope.getFood();
            });
        };

        $scope.getFood();

});
