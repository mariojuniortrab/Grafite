
Ext.define("Grafite.view.desktop.JanelaPadrao",{
extend: 'Ext.ux.desktop.Module',

    requires: [
        'Ext.data.ArrayStore',
        'Ext.util.Format',
        'Ext.grid.Panel',
        'Ext.grid.RowNumberer'
    ],
   
    id:'janela-padrao',
    iconCls: 'icon-grid',
    texto: 'Janela Padrão',

    
    janela :{

    },

    init : function(){
        this.launcher = {
            text: this.texto,
            iconCls:this.iconCls
        };
    },

    createWindow : function(){
        var desktop = this.app.getDesktop(),
        win = desktop.getWindow(this.id);
        
        if(!win){
            win = desktop.createWindow(Ext.apply({
            	id: this.id,
				title:'Janela padrão',
		        width:740,
		        height:480,
		        iconCls: this.iconCls,
		        animCollapse:false,
		        constrainHeader:true,
		        layout: 'fit',
		        items: this.items
    		},this.janela));
        }
        win.show();
       
        return win;
    }
});
