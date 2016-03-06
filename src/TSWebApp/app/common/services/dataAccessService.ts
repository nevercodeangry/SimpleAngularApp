module app.common {
    interface IDataAccessService {
        getCategoryResource(): ng.resource.IResourceClass<ICategoryResource>;
    }

    interface ICategoryResource
        extends ng.resource.IResource<app.domain.ICategory> {


    }
    export class DataAccessService
        implements IDataAccessService {

        static $inject = ['$resource'];
        constructor(private $resource: ng.resource.IResourceService) {

        }
        getCategoryResource(): ng.resource.IResourceClass<ICategoryResource> {
            return this.$resource("/api/categories/:categoryId");
        }
    }

    angular
        .module("common.services")
        .service("dataAccessService",
        DataAccessService);

}