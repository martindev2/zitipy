
app.directive('sidebar', function () {
    return {
        restrict: 'A', //This means that it will be used as an attribute and NOT as an element. I don't like creating custom HTML elements
        replace: true,
        templateUrl: "app/shared/sidebar/sidebarView.js.html",
        controller: ['$scope', '$filter', function ($scope) {
            $scope.searches = [];
        }]
    }
});