angular.module('salesforce').component('login', {
    templateUrl: './views/login.html',
    controller: function (mainService) {
        let vm = this;
        vm.login = () => {
            mainService.login().then(res => {
                console.log(res.data);
            })
        }
    }
})