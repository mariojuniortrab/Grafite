Ext.define('Grafite.view.matricula.AlunoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.matricula-aluno',
    
    requires: [
        'Grafite.model.Aluno'
    ],

    onLoadClick: function() {
    	var view = this.getView();
        this.getView().loadRecord(Ext.create('Grafite.model.Aluno', {
            'email'    : 'abe@sencha.com',
            'title'    : 'mr',
            'firstName': 'Abraham',
            'lastName' : 'Elias',
            'startDate': '01/10/2003',
            'endDate'  : '12/11/2009',
            'phone-1'  : '555',
            'phone-2'  : '123',
            'phone-3'  : '4567',
            'hours'    : 7,
            'minutes'  : 15
        }));
    },

    onSaveClick: function() {
        var form   = this.getView(),
            encode = Ext.String.htmlEncode,
            s      = '';
        if (form.isValid()) {
            Ext.iterate(form.getValues(), function(key, value) {
                value = encode(value);
                
                s += Ext.util.Format.format("{0} = {1}<br />", key, value);
            }, this);

            Ext.Msg.alert('Form Values', s);
        }
    },

    onResetClick: function() {
        this.getView().reset();
    },

    showNext: function () {
        this.doCardNavigation(1);
    },

    showPrevious: function (btn) {
        this.doCardNavigation(-1);
    },

    doCardNavigation: function (incr) {
        var view = this.getView();
        var l = view.getLayout();
        var i = l.activeItem.id.split('card-')[1];
        var next = parseInt(i, 10) + incr;
        l.setActiveItem(next);
        view.down('#card-prev').setDisabled(next===0);
        view.down('#card-next').setDisabled(next===1);
    }
});