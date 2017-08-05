angular.module('salesforce').component('login', {
    templateUrl: './views/login.html',
    controller: function ($http, $state) {
        let vm = this;
        vm.login = () => {
            $state.go('accounts');
            return $http({
                method: 'GET',
                url: '/oauth/auth'
            })
        }
    }
});