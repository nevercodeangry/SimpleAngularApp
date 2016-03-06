var app;
(function (app) {
    var categoryDetail;
    (function (categoryDetail) {
        var CategoryDetailCtrl = (function () {
            function CategoryDetailCtrl($routeParams, dataAccessService) {
                var _this = this;
                this.$routeParams = $routeParams;
                this.dataAccessService = dataAccessService;
                this.title = "Category Detail";
                var id = $routeParams.categoryId;
                var categoryResource = dataAccessService.getCategoryResource();
                categoryResource.get({ categoryId: id }, function (data) {
                    _this.category = data;
                });
            }
            CategoryDetailCtrl.$inject = ["$routeParams", "dataAccessService"];
            return CategoryDetailCtrl;
        }());
        angular
            .module("categoryManagement")
            .controller("CategoryDetailCtrl", CategoryDetailCtrl);
    })(categoryDetail = app.categoryDetail || (app.categoryDetail = {}));
})(app || (app = {}));
//# sourceMappingURL=categoryDetailCtrl.js.map