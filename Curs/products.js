(function(){
    var app=angular.module('store-products',[]);
    app.directive('productTitle', function(){
        return{
        restrict: 'E',
        templateUrl: 'product-title.html'
        };
    });

    app.directive('productPanels', function(){
        return {
        restrict: 'E',
        templateUrl: './product-panels.html',
        controller: function(){
            this.tab = 1;
            this.setTab = function(newValue){
                this.tab = newValue;
            };
            this.isSet = function(tabName){
                return this.tab === tabName;
            };
        },
        controllerAs: "tab"
        };
    });
})();