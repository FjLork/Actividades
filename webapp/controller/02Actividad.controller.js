sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel',
    "sap/ui/core/Fragment",
    "sap/m/Dialog",
	'sap/m/MessagePopover',
	'sap/m/MessageItem',
	'sap/m/MessageToast',
	'sap/ui/core/message/Message',
	'sap/ui/core/Element'
],
    function (Controller, JSONModel, Fragment, Dialog,
        MessagePopover,
        MessageItem,
        MessageToast,
        Message,
        Element       
    ) {
        "use strict";

        return Controller.extend("lorkgroup.actividades.controller.02Actividad", {

    
            _setInitialData: function () {
                var oData = {
                    "SelectedPaises":  "ESP",
                    "PaisesCollect": [
                        {   "ProductId": "ESP", "Name": "España"  },
                        {   "ProductId": "DEU", "Name": "Alemania"  },
                        {   "ProductId": "FRA", "Name": "Francia"  },
                        {   "ProductId": "GBR", "Name": "Reino Unido"  }
                                        ],   

                    "SelectedDepart":  "D01",                     
                    "DepartCollect": [
                        {   "ProductId": "D01", "Name": "Departamento 01"    },
                        {   "ProductId": "D02", "Name": "Departamento 02"  },
                        {   "ProductId": "D03", "Name": "Departamento 03"  },
                        {   "ProductId": "D04", "Name": "Departamento 04"  }
                                        ],  
                    
                    "SelectedCapital": "C01",        
                    "CapitalCollect": [
                        {   "ProductId": "C01", "Name": "Capital 01"    },
                        {   "ProductId": "C02", "Name": "Capital 02"  },
                        {   "ProductId": "C03", "Name": "Capital 03"  },
                        {   "ProductId": "C04", "Name": "Capital 04"  }
                                        ],  
                    "Editable": true,
                    "Enabled": true
                };
       		// set explored app's demo model on this sample
             var  oModel = new JSONModel(oData);
			this.getView().setModel(oModel);

            },

            onPopupButtonPress1: function() {
                MessageToast.show("Botón presionado");
            },

            onPopupButtonPress: function () {
                // create dialog lazily
                if (!this.oMPDialog) {
                    this.oMPDialog = this.loadFragment({
                                                             name: "lorkgroup.actividades.fragment.Form02Dialogo"
                                                        });
                }
                this.oMPDialog.then(function (oDialog) {
                                                            this.oDialog = oDialog;
                                                            this.oDialog.open();
                                                            this._oMessageManager.registerObject(this.oView.byId("formContainer"), true);
    
                                                            MessageToast.show('Press "Save" to trigger validation.');
                                                            this.createMessagePopover();
                                                        }.bind(this));
            },

            onButtonCerrar: function () {
                var oDialog = this.byId("myDialog");
                if (oDialog) {
                    oDialog.close();
                }
            },

            onInit: function () {
                this._setInitialData();
            },

        });



    });