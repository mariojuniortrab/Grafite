/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('Grafite.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Grafite',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    launch: function () {
    	
    }
});
