var app;
(function (app) {
    var categoryList;
    (function (categoryList) {
        var CategoryListCtrl = (function () {
            function CategoryListCtrl(dataAccessService) {
                var _this = this;
                this.dataAccessService = dataAccessService;
                this.title = "Category List";
                this.showImage = false;
                this.categories = [];
                var categoryResource = dataAccessService.getCategoryResource();
                categoryResource.query(function (data) {
                    _this.categories = data;
                });
            }
            CategoryListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            CategoryListCtrl.$inject = ["dataAccessService"];
            return CategoryListCtrl;
        }());
        angular
            .module("categoryManagement")
            .controller("CategoryListCtrl", CategoryListCtrl);
    })(categoryList = app.categoryList || (app.categoryList = {}));
})(app || (app = {}));
//# sourceMappingURL=categoryListCtrl.js.map