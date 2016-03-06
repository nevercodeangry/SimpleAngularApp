var app;
(function (app) {
    var common;
    (function (common) {
        var mockResource = angular
            .module("categoryResourceMock", ["ngMockE2E"]);
        mockResource.run(mockRun);
        mockRun.$inject = ["$httpBackend"];
        function mockRun($httpBackend) {
            var categories = [];
            var category;
            category = new app.domain.Category(1, "Leaf Rake", "Leaf rake with 48-inch wooden handle.", "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png");
            categories.push(category);
            category = new app.domain.Category(2, "Garden Cart", "15 gallon capacity rolling garden cart", "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png");
            categories.push(category);
            category = new app.domain.Category(3, "Saw", "15-inch steel blade hand saw", "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png");
            categories.push(category);
            category = new app.domain.Category(4, "Hammer", "Curved claw steel hammer", "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png");
            categories.push(category);
            category = new app.domain.Category(5, "Video Game Controller", "Standard five-button video game controller", "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png");
            categories.push(category);
            var categoryUrl = "/api/categories";
            $httpBackend.whenGET(categoryUrl).respond(categories);
            var editingRegex = new RegExp(categoryUrl + "/[0-9][0-9]*", '');
            $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
                var category = { "categoryId": 0 };
                var parameters = url.split('/');
                var length = parameters.length;
                var id = +parameters[length - 1];
                if (id > 0) {
                    for (var i = 0; i < categories.length; i++) {
                        if (categories[i].categoryId == id) {
                            category = categories[i];
                            break;
                        }
                    }
                }
                return [200, category, {}];
            });
            // Catch all for testing purposes
            $httpBackend.whenGET(/api/).respond(function (method, url, data) {
                return [200, categories, {}];
            });
            // Pass through any requests for application files
            $httpBackend.whenGET(/app/).passThrough();
        }
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=categoryResourceMock.js.map