(function () {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(moduleConfig)
        .run(moduleRun);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/user-list', {
                templateUrl: 'user-list.tmpl.html',
                controller: 'UserListController',
                controllerAs: 'userListVm'
            })
            .when('/new-user', {
                templateUrl: 'newuser.tmpl.html',
                controller: 'NewUserController',
                controllerAs: 'newUserVm'
            })
            .otherwise({
                redirectTo: '/user-list'
            });
    }

    moduleRun.$inject = [];

    function moduleRun() {
        console.log("app started");
    }

})();
