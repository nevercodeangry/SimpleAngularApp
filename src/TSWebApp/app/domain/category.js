var app;
(function (app) {
    var domain;
    (function (domain) {
        var Category = (function () {
            function Category(categoryId, categoryName, description, imageUrl) {
                this.categoryId = categoryId;
                this.categoryName = categoryName;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            return Category;
        }());
        domain.Category = Category;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
//# sourceMappingURL=category.js.map