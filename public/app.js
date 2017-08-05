angular.module('salesforce', ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider){

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {
                url: '/',
                template: '<login></login>',
                component: 'login'
            })
            // .state('accounts', {
            //     url: '/accounts',
            //     template: '<accounts></accounts>',
            // })

    })
