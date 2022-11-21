sap.ui.define([
    'emc2/sd/products/controller/BaseController',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(BaseController, Filter, FilterOperator) {
    'use strict';
    return BaseController.extend("emc2.sd.products.controller.View1",{
        //This is the constructor of the class
        //where we can put all the initialization code
        onInit: function(){
        },
        onSearch: function(oEvent){
            //check the event documentation for search, there is a query parameter
            var sQuery = oEvent.getParameter("query");
            //construct a model filter object - operand OPERATOR operand 
            var oFilter1 = new Filter("name", FilterOperator.Contains, sQuery);
            var oFilter2 = new Filter("type", FilterOperator.Contains, sQuery);
            var oFilter = new Filter({
                filters : [oFilter1, oFilter2],
                and: false
            });
            var aFilter = [oFilter];
            //Pass the filter object on our items aggregation
            var oAgg = this.getView().byId("idFruitsColl").getBinding("items");
            //Inject our filter to the binding
            oAgg.filter(aFilter);

        },
        onNext: function(){
            //to nav to view 2
            // var oView = this.getView();
            // var oAppCon = oView.getParent();
            // oAppCon.to("idView2");
            this.getView().getParent().to("idView2");
        }
    });
});