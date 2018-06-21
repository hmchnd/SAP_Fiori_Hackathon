sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
		"sap/m/MessageToast"
], function(Controller, JSONModel, Filter,MessageToast) {
	"use strict";

	return Controller.extend("sap.erpERP.controller.customer", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf sap.erpERP.view.view.customer
		 */
		onInit: function() {

			//var data = .results;

			var oModel = new JSONModel();

			oModel.loadData("./model/mockData/customer.json");

			this.getView().setModel(oModel);

			//console.log(oModel.getData());

			/*	this.getView().byId("customer")
										.setModel(oTableModel,
											"itemTableModel");*/

		},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf sap.erpERP.view.view.customer
		 */
		onBeforeRendering: function() {
			console.log(this.oModel);

		},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf sap.erpERP.view.view.customer
		 */
		onAfterRendering: function() {

		},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf sap.erpERP.view.view.customer
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
				var filter = new Filter("CustomerID", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("customer");
			var binding = list.getBinding("items");
			binding.filter(aFilters, "Application");

		},
		getAddDialog: function() {

			var oView = this.getView();

			if (!this.oDialog) {

				this.oDialog = sap.ui.xmlfragment("idDialogAddfrag", "sap.erpERP.fragment.DialogAddcustomer", this);

				oView.addDependent(this.oDialog);
			}
			return this.oDialog;

		},
		addCustomer: function() {

			this.getAddDialog().open();

		},
		onDialogAddClose: function() {

			this.getAddDialog().close();

		},
		onDialogAdd: function() {

			var TableModel = this.getView().getModel();
			var TableData = TableModel.getData();
			var EntryValue=["CustomerID","CompanyName","ContactName","ContactTitle","Address","Country","City","Phone"];
var newCust={};

			for (var i = 0; i <= EntryValue.length - 1; i++) {
				var ID = EntryValue[i];
				newCust[ID] = sap.ui.getCore().byId("idDialogAddfrag--"+ID).getValue();
					

			}
			console.log(newCust);
			
			
			if(newCust.CustomerID===""){
			    
			    sap.ui.getCore().byId("idDialogAddfrag--CustomerID").setValueState(sap.ui.core.ValueState.Error);
			    
			    
			}else{
			     sap.ui.getCore().byId("idDialogAddfrag--CustomerID").setValueState(sap.ui.core.ValueState.Success);
			   	TableData.data.push(newCust);
			TableModel.setData(TableData);
			MessageToast.show("Entry Added successfully"); 
				this.getAddDialog().close();    
			    
			}
			
	     
			

		},
		EditCustomer:function(){
		    
		    	var oTable = this.getView().byId("customer");

				var table1Rows = oTable.getItems();
		    
		    	for (var i = 0; i < table1Rows.length; i++) {
		    	    
		    	 	var table1RowCells = table1Rows[i].getCells();

						table1RowCells[0].setEditable(true);
						table1RowCells[1].setEditable(true);
						table1RowCells[2].setEditable(true);
						table1RowCells[3].setEditable(true);
						table1RowCells[4].setEditable(true);   
							table1RowCells[5].setEditable(true);   
								table1RowCells[6].setEditable(true);   
									table1RowCells[7].setEditable(true);   
										table1RowCells[8].setEditable(true);   
		    	    
		    	    
		    	}
		    	
		    	
		    	this.getView().byId("save").setVisible(true);
		    		this.getView().byId("edit").setVisible(false);
		    
		    
		    
		},
		saveCustomer:function(){
		    
		    
		    	var oTable = this.getView().byId("customer");

				var table1Rows = oTable.getItems();
		    
		    	for (var i = 0; i < table1Rows.length; i++) {
		    	    
		    	 	var table1RowCells = table1Rows[i].getCells();

						table1RowCells[0].setEditable(false);
						table1RowCells[1].setEditable(false);
						table1RowCells[2].setEditable(false);
						table1RowCells[3].setEditable(false);
						table1RowCells[4].setEditable(false);   
							table1RowCells[5].setEditable(false);   
								table1RowCells[6].setEditable(false);   
									table1RowCells[7].setEditable(false);   
										table1RowCells[8].setEditable(false);   
		    	    
		    	    
		    	}
		    	
		    	
		    	this.getView().byId("save").setVisible(false);
		    		this.getView().byId("edit").setVisible(true);
		    
		    
		    
		}

	});

});