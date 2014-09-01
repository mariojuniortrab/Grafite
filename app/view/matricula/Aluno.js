
Ext.define("Grafite.view.matricula.Aluno",{
    extend: "Ext.form.Panel",
    controller: "matricula-aluno",
    xtype: 'matricula-aluno',
    viewModel: {
        type: "matricula-aluno"
    },

    requires: [
        'Grafite.view.matricula.AlunoController'
    ],

    title: 'Employee Information',
    width: 600,
    bodyPadding: 10,

    defaults: {
        anchor: '100%',
        labelWidth: 100
    },

    items: [{
        xtype: 'fieldset',
        title: 'Básico',
        collapsible: false,
        defaults: {
            labelWidth: 89,
            anchor: '100%',
            layout: {
                type: 'hbox',
                defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
            }
        },
        items: [{
            xtype: 'fieldcontainer',
            combineErrors: true,
            msgTarget : 'side',
            layout: 'hbox',
            defaults: {
                flex: 1,
                labelWidth: 89,
                anchor: '100%',
                layout: {
                    type: 'hbox'
                }
            },
            items: [{
                name: 'nome',
                xtype: 'textfield',
                fieldLabel: 'Nome',
                msgTarget: 'side',
                allowBlank: false
            },{
                xtype: 'datefield',
                name: 'nascimento',
                fieldLabel: 'Dt. Nasc.',
                margin: '0 0 0 10',
                labelWidth: 70,
                allowBlank: false
            },{
                //the width of this field in the HBox layout is set directly
                //the other 2 items are given flex: 1, so will share the rest of the space
                width: 75,
                xtype: 'combo',
                queryMode: 'local',
                value: 'sexo',
                triggerAction: 'all',
                forceSelection: true,
                editable: false,
                fieldLabel: 'Sexo',
                name: 'sexo',
                displayField: 'name',
                valueField: 'value',
                margin: '0 0 0 10',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name : 'Sim',   value: 'S'},
                        {name : 'Não',  value: 'N'}
                    ]
                }
            }]
        }]
    },{
        xtype: 'textfield',
        name: 'email',
        fieldLabel: 'Email Address',
        vtype: 'email',
        msgTarget: 'side',
        allowBlank: false
    }, {
        xtype: 'fieldcontainer',
        fieldLabel: 'Availability',
        combineErrors: true,
        msgTarget : 'side',
        layout: 'hbox',
        defaults: {
            flex: 1,
            hideLabel: true
        },
        items: [{
            xtype: 'datefield',
            name: 'startDate',
            fieldLabel: 'Start',
            margin: '0 5 0 0',
            allowBlank: false
        }, {
            xtype     : 'datefield',
            name      : 'endDate',
            fieldLabel: 'End',
            allowBlank: false
        }]
    }, {
        xtype: 'fieldset',
        title: 'Details',
        collapsible: true,
        defaults: {
            labelWidth: 89,
            anchor: '100%',
            layout: {
                type: 'hbox',
                defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
            }
        },
        items: [{
            xtype: 'fieldcontainer',
            fieldLabel: 'Phone',
            combineErrors: true,
            msgTarget: 'under',
            defaults: {
                hideLabel: true
            },
            items: [
                {xtype: 'displayfield', value: '('},
                {xtype: 'textfield',    fieldLabel: 'Phone 1', name: 'phone-1', width: 45, allowBlank: false},
                {xtype: 'displayfield', value: ')'},
                {xtype: 'textfield',    fieldLabel: 'Phone 2', name: 'phone-2', width: 45, allowBlank: false, margin: '0 5 0 0'},
                {xtype: 'displayfield', value: '-'},
                {xtype: 'textfield',    fieldLabel: 'Phone 3', name: 'phone-3', width: 60, allowBlank: false}
            ]
        }, {
            xtype: 'fieldcontainer',
            fieldLabel: 'Time worked',
            combineErrors: false,
            defaults: {
                hideLabel: true
            },
            items: [{
               name : 'hours',
               xtype: 'numberfield',
               width: 95,
               allowBlank: false
           }, {
               xtype: 'displayfield',
               value: 'hours'
           }, {
               name : 'minutes',
               xtype: 'numberfield',
               width: 95,
               allowBlank: false
           }, {
               xtype: 'displayfield',
               value: 'mins'
            }]
        }, {
            xtype : 'fieldcontainer',
            combineErrors: true,
            msgTarget: 'side',
            fieldLabel: 'Full Name',
            defaults: {
                hideLabel: true
            },
            items: [{
                //the width of this field in the HBox layout is set directly
                //the other 2 items are given flex: 1, so will share the rest of the space
                width: 75,
                xtype: 'combo',
                queryMode: 'local',
                value: 'mrs',
                triggerAction: 'all',
                forceSelection: true,
                editable: false,
                fieldLabel: 'Title',
                name: 'title',
                displayField: 'name',
                valueField: 'value',
                store: {
                    fields: ['name', 'value'],
                    data: [
                        {name : 'Mr',   value: 'mr'},
                        {name : 'Mrs',  value: 'mrs'},
                        {name : 'Miss', value: 'miss'}
                    ]
                }
            }, {
                xtype: 'textfield',
                flex : 1,
                name : 'firstName',
                fieldLabel: 'First',
                allowBlank: false
            }, {
                xtype: 'textfield',
                flex : 1,
                name : 'lastName',
                fieldLabel: 'Last',
                allowBlank: false
            }]
        }]
    }],
    
    buttons: [{
        text   : 'Load test data',
        handler: 'onLoadClick'
    }, {
        text   : 'Save',
        handler: 'onSaveClick'
    }, {
        text   : 'Reset',
        handler: 'onResetClick'
    }]
});