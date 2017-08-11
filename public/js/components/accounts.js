angular.module('salesforce').component('accounts', {
    templateUrl: './views/accounts.html',
    controller: function (mainService) {
        let vm = this;
        vm.showButton = true;
        vm.showData = () => {
            vm.showButton = false;
            mainService.getAccts().then(res => {
                console.log(res.data);
                vm.data = res.data;
            })
        }

    }
});
