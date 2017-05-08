angular.module('HomeCtrl', [])
    .controller('HomeCtrl', function($scope) {

        $scope.facebook = function() {
            window.location = 'https://www.facebook.com/collin.shelby';
        };

        $scope.github = function() {
            window.location = 'https://github.com/collinL34/';
        };

        $scope.linkedin = function() {
            window.location = 'https://www.linkedin.com/in/collin-shelby/';
        };

        $scope.resume = function() {
            window.location = 'https://www.visualcv.com/collin-shelby';
        };

    });
