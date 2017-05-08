angular.module('appRoutes', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state({
                name: 'home',
                url: '/',
                templateUrl: 'views/home.html',
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

        .state({
            name: 'information',
            url: '/information',
            templateUrl: 'views/information.html',
            controller: 'InfoCtrl'
        })
        
        .state({
            name: 'autism',
            url: 'http://www.google.com',
            external: true
        })

        .state({
            name: 'bearhugs',
            url: 'bear-hugs.herokuapp.com'
        })


        $urlRouterProvider.when('', '/');

    });
