angular.module('appRoutes', ['ui.router'])
    .config(function($stateProvider) {
        $stateProvider
            .state({
                name: 'home',
                url: '/',
                templateUrl: 'index.html',
                controller: 'HomeCtrl'
            })

        .state({
            name: 'contact',
            url: '/contact',
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })

        .state({
            name: 'portfolio',
            url: '/portfolio',
            templateUrl: 'views/portfolio.html',
            controller: 'PortfolioCtrl'
        })

    });
