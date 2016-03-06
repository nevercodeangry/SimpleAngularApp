module app.categoryList {

    interface ICategoryListModel {
        title: string;
        showImage: boolean;
        categories: app.domain.ICategory[];
        toggleImage(): void;
    }

    class CategoryListCtrl implements ICategoryListModel {
        title: string;
        showImage: boolean;
        categories: app.domain.ICategory[];

        static $inject = ["dataAccessService"];
        constructor(private dataAccessService: app.common.DataAccessService) {
            this.title = "Category List";
            this.showImage = false;
            this.categories = [];

            var categoryResource = dataAccessService.getCategoryResource();
            categoryResource.query((data: app.domain.ICategory[]) => {
                this.categories = data;
            });

        }
        toggleImage(): void {
            this.showImage = !this.showImage;
        }
    }
    angular
        .module("categoryManagement")
        .controller("CategoryListCtrl", CategoryListCtrl);


}