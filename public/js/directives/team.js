angular.module('teamDir', [])
    .directive('team', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/team.html',
            controller: 'PortfolioCtrl'
        };
    });
