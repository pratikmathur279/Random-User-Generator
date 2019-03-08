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
        userListVm.removeUser = removeUser;

        function init() {

            retrieveUsers();
            //console.log("UserListController");

        }

        function retrieveUsers() {
            $http.get('https://1y9gvnez47.execute-api.us-east-1.amazonaws.com/dev/retrieveusers')
                .then(function (res) {
                        userListVm.users = res.data.Items;
                        // console.log(userListVm.users);
                    },
                    function (error) {
                        console.log(error);
                    });
        }

        function removeUser(id) {
            console.log("remove user" + id);
            $http.get('https://1y9gvnez47.execute-api.us-east-1.amazonaws.com/dev/removeuser/' + id)
                .then(function (res) {
                        console.log("deleted");
                    },
                    function (error) {
                        console.log("error");
                    });
        }
    }


})();
