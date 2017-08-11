angular.module('salesforce').component('accounts', {
    templateUrl: './views/accounts.html',
    controller: function (mainService) {
        let vm = this;

        vm.showButton = true;

        vm.showData = () => {
            vm.showButton = false;
        }

        vm.getAuth = () => {
            mainService.getAuth().then(res => {
                console.log(res);
            })
        }
        vm.getAuth();
    }
});
