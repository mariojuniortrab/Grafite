Ext.define("Grafite.view.matricula.MatriculaJanela",{
	extend: "Grafite.view.desktop.JanelaPadrao",
	requires: [
	    'Grafite.view.matricula.Aluno'
	],

	id:'matricula-janela',

	janela:{
		title:'Matrícula'
	},
	
	items : [{
		xtype: 'matricula-aluno'
	}]
})