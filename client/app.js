var app = angular.module('app', []);
app.controller('MainController', MainController);

MainController.$inject = ['$http'];

function MainController($http) {
    var mainVm = this;

    mainVm.users = [];

    init();

    function init() {
        console.log("init");
    }

    mainVm.getUser = () => {
        $http.get('https://fx1ke63sf1.execute-api.us-east-1.amazonaws.com/dev/getuser')
            .then(function (res) {
                    mainVm.users = res.data;
                },
                function (error) {
                    console.log(error);
                });
    }

    mainVm.retrieveUsers = () => {
        $http.get('https://fx1ke63sf1.execute-api.us-east-1.amazonaws.com/dev/retrieveusers')
            .then(function (res) {
                    mainVm.users = res.data;
                },
                function (error) {
                    console.log(error);
                });
    }
}
