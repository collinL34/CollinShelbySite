angular.module('PortfolioCtrl', [])
    .controller('PortfolioCtrl', function($scope) {
        $scope.Autism = function() {
            window.location = 'http://autism-talks.herokuapp.com/';
        };

        $scope.bearHugs = function() {
            window.location = 'http://bear-hug.herokuapp.com/';
        };

        $scope.magic = function() {
          window.location = 'https://board-game-tracker.herokuapp.com/';
        };
    })
