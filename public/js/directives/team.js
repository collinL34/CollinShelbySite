angular.module('teamDir', [])
    .directive('team', function() {
        return {
            restrcit: 'E',
            templateUrl: 'views/team.html',
            controller: 'PortfolioCtrl'
        };
    });
