angular.module('PortfolioCtrl', [])
    .controller('PortfolioCtrl', function($scope) {
        $scope.Autism = function() {
            window.location = 'http://autism-talks.herokuapp.com/';
        };

        $scope.bearHugs = function() {
            window.location = 'http://bear-hug.herokuapp.com/';
        };
    })
