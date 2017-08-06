angular.module('salesforce').component('accounts', {
    templateUrl: './views/accounts.html',
    controller: function () {
        let vm = this;

        vm.showButton = true;

        vm.showData = () => {
            vm.showButton = false;
        }

    }
});
