angular.module('salesforce').component('login', {
    templateUrl: './views/login.html',
    controller: function (mainService, $window) {
        let vm = this;
        vm.login = () => {
            mainService.login().then(res => {
                $window.location.href = res.data;
            })
        }
    }
})