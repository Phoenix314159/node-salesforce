angular.module('salesforce').component('login', {
    templateUrl: './views/login.html',
    controller: function ($http, $state) {
        let vm = this;
        vm.login = () => {
            console.log('yo');
            return $http({
                method: 'GET',
                url: '/oauth/auth'
            })
            // $state.go('accounts');
        }
    }
});