<<<<<<< HEAD
(function () {
    'use strict';

    angular
        .module('app')
        .controller('NewUserController', NewUserController);


    NewUserController.$inject = ['$http'];

    function NewUserController($http) {
        var newUserVm = this;

        init();

        newUserVm.getUser = getUser;

        function init() {
            //console.log("NewUserController");

            getUser();
        }

        function getUser() {
            $http.get('https://1y9gvnez47.execute-api.us-east-1.amazonaws.com/dev/getuser')
                .then(function (res) {
                        newUserVm.user = res.data;
                        //console.log(newUserVm.user);

                    },
                    function (error) {
                        console.log(error);
                    });
        }
    }


})();
=======
(function () {
    'use strict';

    angular
        .module('app')
        .controller('NewUserController', NewUserController);


    NewUserController.$inject = ['$http'];

    function NewUserController($http) {
        var newUserVm = this;

        init();

        newUserVm.getUser = getUser;

        function init() {
            //console.log("NewUserController");

            getUser();
        }

        function getUser() {
            $http.get('https://j6u7loc31m.execute-api.us-east-1.amazonaws.com/dev/getuser')
                .then(function (res) {
                        newUserVm.user = res.data;
                        //console.log(newUserVm.user);

                    },
                    function (error) {
                        console.log(error);
                    });
        }
    }


})();
>>>>>>> ed6c8c1b904722b2f3b8a69025816304f4bc429c
