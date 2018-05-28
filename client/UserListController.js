(function () {
    'use strict';

    angular
        .module('app')
        .controller('UserListController', UserListController);


    UserListController.$inject = ['$http'];

    function UserListController($http) {
        var userListVm = this;

        init();

        userListVm.retrieveUsers = retrieveUsers;

        function init() {

            retrieveUsers();
            //console.log("UserListController");

        }

        function retrieveUsers() {
            $http.get('https://j6u7loc31m.execute-api.us-east-1.amazonaws.com/dev/retrieveusers')
                .then(function (res) {
                        userListVm.users = res.data.Items;
                        // console.log(userListVm.users);
                    },
                    function (error) {
                        console.log(error);
                    });
        }
    }


})();
