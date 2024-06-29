sap.ui.define([
	"sap/ui/core/mvc/Controller",
    'sap/ui/model/json/JSONModel'
], function( Controller, JSONModel ) {
	"use strict";

	return Controller.extend("lorkgroup.actividades.controller.03Actividad", {

        onInit: function () {

            var oData = {
                "SelectedIdioma":  "S",
                "IdiomaCollect": [
                    {   "ProductId": "S", "Name": "Español"    },
                    {   "ProductId": "E", "Name": "Ingles"     }
                                    ]
            };
           // set explored app's demo model on this sample
         var  oModel = new JSONModel(oData);
        this.getView().setModel(oModel);
        },

        onLanguageChange: function (oEvent) {
            var sSelectedKey = oEvent.getSource().getSelectedKey();
            this._changeLanguage(sSelectedKey);
        },

        _changeLanguage: function (sLanguage) {
            // Establecer el nuevo idioma
            sap.ui.getCore().getConfiguration().setLanguage(sLanguage);

            // Recargar el i18n model con el nuevo idioma
            var oResourceModel = new sap.ui.model.resource.ResourceModel({
                bundleName: "lorkgroup.actividades.i18n.i18n",
                bundleLocale: sLanguage
            });
            this.getView().setModel(oResourceModel, "i18n");
        }



	});
});