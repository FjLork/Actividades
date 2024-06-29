/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "sap/ui/model/resource/ResourceModel",
        "lorkgroup/actividades/model/models"
    ],
    function (UIComponent, Device, ResourceModel, models) {
        "use strict";

        return UIComponent.extend("lorkgroup.actividades.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // Llamar al init de la clase base
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                // Establecer el modelo de recursos inicial
                var oResourceModel = new ResourceModel({ bundleName: "lorkgroup.actividades.i18n.i18n"
                                                        });
                this.setModel(oResourceModel, "i18n");
            
            },

        });
    }
);