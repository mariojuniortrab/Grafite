
Ext.define("Grafite.view.matricula.Aluno",{
    extend: "Ext.form.Panel",
    controller: "matricula-aluno",
    xtype: 'matricula-aluno',
    viewModel: {
        type: "matricula-aluno"
    },

    requires: [
        'Grafite.view.matricula.AlunoController',
        'Ext.layout.container.Card'
    ],

    title: 'Aluno',
    width: 600,
    bodyPadding: 10,

    defaults: {
        anchor: '100%',
        labelWidth: 100
    },
    layout:'card',

    items: [{
        id:'card-0',
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
        id:'card-1',
        xtype: 'fieldset',
        title: 'Coco',
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
    },{
        itemId: 'card-prev',
        text: '&laquo; Previous',
        handler: 'showPrevious',
        disabled: true
    },
    {
        itemId: 'card-next',
        text: 'Next &raquo;',
        handler: 'showNext'
    }]
});