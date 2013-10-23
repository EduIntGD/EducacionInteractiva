var tabla=
{
	nombreTabla: 'Pagos01',
	campos=
	[
		{
			nombre: 'nombre',
			titulo: 'Nombre',
			tipo: 'input',
			queSon: 'nombres',
			filtro: 'convertirHTML',
			colspan: 2,
		},
		{
			nombre: 'apellido',
			tipo: 'input',
			queSon: 'nombres',
			filtro: 'convertirHTML',
		},
		{
			nombre: 'edad',
			titulo: 'Edad',
			tipo: 'input',
			queSon: 'numeros',
			filtro: 'soloNumeros',
		},
		{
			nombre: 'genero',
			titulo: 'Genero',
			tipo: {select: [['masculino','Masculino'],['femenino','Femenino']]},
			filtro: 'convertirHTML',
		},
		{
			nombre: 'dinero',
			titulo: 'Dinero',
			tipo: 'input',
			queSon: 'pesosColombianos',
		},
	],
	funcionesPorFila: function()
	{
		setMyR('dinero',2);
	},
	contenido: 
	[
		['Julian David','Guerrero Pinilla',25,'masculino',2000],
		['Nelly Alexandra','Medina Rojas',25,'femenino',2000],
		['Carlos Andres','Guille Luis',25,'femenino',2000]
	]
}