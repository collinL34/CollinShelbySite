angular.module('profileDir', [])
    .directive('testimonial', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/profile.html',
            controller: 'ContactCtrl'
        }
    })
