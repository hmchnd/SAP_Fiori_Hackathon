sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel"
], function(Controller,JSONModel) {
	"use strict";

	return Controller.extend("sap.erpERP.controller.dashboard", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.erpERP.view.view.dashboard
		 */
			onInit: function() {
				var oVizFrame = this.getView().byId("idcolumn");
					var oDataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{

					name: 'Months',
					value: "{Months}"
				}],
				measures: [{
						name: 'Products',
						value: '{NOP}'
					}
				

				],
				data: {
					path: "/data"
				}
			});
			
			var oModel = new sap.ui.model.json.JSONModel();
			
			var data = {
				'data': [{
					"Months": "JAN",
					"NOP": "20"
				}, {
					"Months": "FEB",
					"NOP": "30"
				}, {
					"Months": "MAR",
					"NOP": "45"
				}, {
					"Months": "APR",
					"NOP": "56"
				}, {
					"Months": "MAY",
					"NOP": "45"
				}]
			};
			
			
				oModel.setData(data);
				
					oVizFrame.setDataset(oDataset);
		         	oVizFrame.setModel(oModel);
			
			/*	oVizFrame.setVizProperties({
				plotArea: {
					colorPalette: d3.scale.category20().range()
				}
			});*/
			
			
				var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "valueAxis",
					'type': "Measure",
					'values': ["Products"]
				}),
				feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
					'uid': "categoryAxis",
					'type': "Dimension",
					'values': ["Months"]
				});
			
				oVizFrame.addFeed(feedValueAxis);
			oVizFrame.addFeed(feedCategoryAxis);
			

			
			
			
			
			
			
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.erpERP.view.view.dashboard
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.erpERP.view.view.dashboard
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.erpERP.view.view.dashboard
		 */
		//	onExit: function() {
		//
		//	}
		
		
		onPressCustomer:function(){
			
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("customer");
	
			
		},
			onPressSupplier:function(){
			
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("supplier");
	
			
		},
		onPressProducts:function(){
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("products");
	
			
			
		},
		onPressInvoices:function(){
			
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("invoices");
			
		}
		
		

	});

});