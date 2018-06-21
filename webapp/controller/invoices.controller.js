sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
			"sap/ui/model/Filter"
], function(Controller,JSONModel,Filter) {
	"use strict";

	return Controller.extend("sap.erpERP.controller.invoices", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.erpERP.view.view.invoices
		 */
			onInit: function() {
		
			var oModel =  new JSONModel();

		oModel.loadData("./model/mockData/invoices.json");
		
	
			this.getView().setModel(oModel,"invModel");
		
		
		
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.erpERP.view.view.invoices
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.erpERP.view.view.invoices
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.erpERP.view.view.invoices
		 */
		//	onExit: function() {
		//
		//	}

	onPageBack: function() {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("dashboard");

		},
		onSearch: function(event) {
			// add filter for search
			var aFilters = [];
			var sQuery = event.getSource().getValue();
			if (sQuery && sQuery.length > 0) {
				var filter = new Filter("OrderID", sap.ui.model.FilterOperator.EQ, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("invoices");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");

		}





	});

});