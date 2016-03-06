﻿module app {
    var main = angular.module("categoryManagement", ["ngRoute",
        "common.services",
        "categoryResourceMock"]);

    main.config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {

        $routeProvider
            .when("/categoryList",
            {
                templateUrl: "/app/views/categoryListView.html",
                controller: "CategoryListCtrl as vm"
            })
            .when("/categoryDetail/:categoryId",
            {
                templateUrl: "/app/views/categoryDetailView.html",
                controller: "CategoryDetailCtrl as vm"
            })
            .otherwise("/categoryList");
    }
}
