angular.module('salesforce').service('mainService', function ($http) {
    let vm = this;
    vm.login = () => {
        return $http({
            method: 'GET',
            url: '/oauth/auth'
        })
    }

    vm.getAccts = () => {
        return $http({
            method: 'GET',
            url: '/accountspersonal'
        })
    }
})
