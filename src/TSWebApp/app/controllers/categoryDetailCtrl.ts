module app.categoryDetail {
    interface ICategoryDetailModel {
        title: string;
        category: app.domain.ICategory;
    }

    interface ICategoryParams extends ng.route.IRouteParamsService {
        categoryId: number;
    }
    class CategoryDetailCtrl implements ICategoryDetailModel {
        title: string;
        category: app.domain.ICategory;
        static $inject = ["$routeParams", "dataAccessService"];
        constructor(private $routeParams: ICategoryParams,
            private dataAccessService: app.common.DataAccessService) {
            this.title = "Category Detail";

            var id = $routeParams.categoryId;
            var categoryResource = dataAccessService.getCategoryResource();
            categoryResource.get({ categoryId: id },
                (data: app.domain.ICategory) => {
                    this.category = data;
                });
        }
    }
    angular
        .module("categoryManagement")
        .controller("CategoryDetailCtrl",
        CategoryDetailCtrl);
}