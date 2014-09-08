
Ext.define("Grafite.view.desktop.Desktop",{
    extend: 'Ext.ux.desktop.App',

    requires: [
        'Ext.window.MessageBox',
        'Ext.ux.desktop.ShortcutModel',
        'Grafite.view.desktop.Settings',
        'Grafite.view.desktop.ModulosMenu'
    ],

    init: function() {
        // custom logic before getXYZ methods get called...

        this.callParent();

        // now ready...
    },

    getModulosSistema : function(){
        return [
            'ModulosMenu'
        ];
    },

    getModules : function(){
        var me  = this, 
        modules = [];
        
        me.modulos = me.getModulosSistema();

        Ext.each(me.modulos, function (module) {
            modules.push(Ext.create('Grafite.view.desktop.' + module));
            //modules.push(Ext.create('widget.modulo'));
        });
        
        return modules;
    },

    getDesktopConfig: function () {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            //cls: 'ux-desktop-black',

            contextMenuItems: [
                { text: 'Change Settings', handler: me.onSettings, scope: me }
            ],

            shortcuts: Ext.create('Ext.data.Store', {
                model: 'Ext.ux.desktop.ShortcutModel',
                data: [
                    { name: 'Grid Window', iconCls: 'grid-shortcut', module: 'janela-padrao' },
                    { name: 'Matricula', iconCls: 'grid-shortcut', module: 'matricula-janela' }
                ]
            }),

            wallpaper: 'resources/images/wallpapers/Blue-Sencha.jpg',
            wallpaperStretch: false
        });
    },

    // config for the start menu
    getStartConfig : function() {
        var me = this, ret = me.callParent();

        return Ext.apply(ret, {
            title: 'Don Griffin',
            iconCls: 'user',
            height: 300,
            toolConfig: {
                width: 100,
                items: [
                    {
                        text:'Settings',
                        iconCls:'settings',
                        handler: me.onSettings,
                        scope: me
                    },
                    '-',
                    {
                        text:'Logout',
                        iconCls:'logout',
                        handler: me.onLogout,
                        scope: me
                    }
                ]
            }
        });
    },

    getTaskbarConfig: function () {
        var ret = this.callParent();

        return Ext.apply(ret, {
            quickStart: [
               { name: 'Grid Window', iconCls: 'icon-grid', module: 'janela-padrao' }
            ],
            trayItems: [
                { xtype: 'trayclock', flex: 1,  timeFormat: 'G:i' }
            ]
        });
    },

    onLogout: function () {
        Ext.Msg.confirm('Logout', 'Are you sure you want to logout?');
    },

    onSettings: function () {
        var dlg = new Desktop.Settings({
            desktop: this.desktop
        });
        dlg.show();
    },

    getModule : function(name) {
        var me = this, ms = me.modules;
        return me.getModuleTree(name, ms);
    },

    getModuleTree : function(name, ms) {
        var me = this, retorno = null;

        for (var i = 0, len = ms.length; i < len; i++) {
            var m = ms[i];
            if (m.id == name || m.appType == name) {
                return m;
            }else if(m.modules){
                retorno = me.getModuleTree(name, m.modules);
            }
        }
        return retorno;
    },

    initModules : function(modules) {
        var me = this;
        Ext.each(modules, function (module) {
            module.app = me;
            if (module.modules) {
               me.initModules(module.modules);
            }
        });
    }
});
