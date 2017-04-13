angular.module('profileDir', [])
    .directive('profile', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/profile.html',
            controller: 'ContactCtrl'
        }
    })
