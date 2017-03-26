angular.module('HomeCtrl', [])
    .controller('HomeCtrl', function($scope) {
        $scope.greeting = 'hey there you';

        $scope.facebook = function() {
            window.location = 'https://www.facebook.com/collin.shelby';
        };

        $scope.github = function() {
          window.location = 'https://github.com/collinL34/';
        };

        $scope.linkedin = function() {
          window.location = 'https://www.linkedin.com/in/collin-shelby/';
        };

    })
