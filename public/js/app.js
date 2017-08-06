angular.module('salesforce', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/',
                component: 'login'
            })
            .state('accounts', {
                url: '/authenticate',
                component: 'accounts'
            })

    })
