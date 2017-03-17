angular.module('navBarDir', [])
    .directive('navBar', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/navbar.html',
            controller: 'HomeCtrl'
        }
    })
