var tabla=
{
	nombreTabla: 'Pagos01',
	campos:
	[
		{
			nombre: 'apellido',
			tipo: 'input',
			queSon: 'nombres',
			filtro: 'convertirHTML',
			ancho: 100
		},
		{
			nombre: 'nombre',
			tipo: 'input',
			queSon: 'nombres',
			filtro: 'convertirHTML',
			ancho: 100
		},
		{
			nombre: 'edad',
			tipo: 'input',
			queSon: 'numeros',
			filtro: 'soloNumeros',
			ancho: 50,
			alineacion: 'center'
		},
		{
			nombre: 'genero',
			tipo: {select: [['masculino','Masculino'],['femenino','Femenino']]},
			filtro: 'convertirHTML',
			ancho: 70
		},
		{
			nombre: 'dinero',
			tipo: 'input',
			queSon: 'pesosColombianos',
			ancho: 120,
			alineacion: 'right'
		},
	],
	camposEnHead:
	[
		[
			{
				titulo: 'Datos personales',
				colspan: 4
			},
			{
				titulo: 'Dinero',
				rowspan: 2
			}
		],
		[
			{
				titulo: 'Nombres',
				colspan: 2
			},
			{
				titulo: 'Edad'
			},
			{
				titulo: 'Genero'
			}
		]
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

function CrearTabla_ESt(id_ESt,JSON_Tabla_ESt)
{
	//	oPrincipal
	//	+--------------
	//	| oDivNv01
	//	| +------------
	//	| | oDivNv02
	//	| | +----------
	//	| | | oTable
	//	| | | +--------
	//	| | | |
	
	//	Convertimos el id en un objeto
	var oPrincipal_ESt=document.getElementById(id_ESt);
	
	//	El primer div que va dentro
	var oDivNv01_ESt=document.createElement('div');
	//	objetoPrincipal <- oDivNivel01
	oPrincipal_ESt.appendChild(oDivNv01_ESt);
	//	Colocarle la clase
	oDivNv01_ESt.className='cDivDeTablaNvl01_ESt';
	//	El primer div que va dentro
	var oDivNv02_ESt=document.createElement('div');
	//	oDivNivel01 <- oDivNivel02
	oDivNv01_ESt.appendChild(oDivNv02_ESt);
	//	Colocarle la clase
	oDivNv02_ESt.className='cDivDeTablaNvl02_ESt';
	
	//	Creamos la tabla
	var oTable_ESt=document.createElement('table');
	//	oDivNivel02 <- oTable_ESt
	oDivNv02_ESt.appendChild(oTable_ESt);
	
	//	Arreglo de cada uno de los campos con las caracteristicas del head
	var camposDeLasFilasDelHead_ESt=JSON_Tabla_ESt.camposEnHead;
	//	Arreglo de cada uno de los campos y sus caracteristicas
	var camposDeLasFilas_ESt=JSON_Tabla_ESt.campos;
	
	//	HEAD
	//	----
	
	//	Crea el thead
	oTableTHeadTr_ESt=document.createElement('thead');
	//	oTable <- oTableTr[contFilaHead]
	oTable_ESt.appendChild(oTableTHeadTr_ESt);
	//	Donde estaran todas las filas, los tr
	var oTableTheadTr_ESt=new Array();
	//	Donde estaran todas las columnas, los td
	var oTableTheadTrTd_ESt=new Array();
		
		//	Crea una primera fila que no contendra nada,mas que los anchis de la tabla
		oTableTheadTrInicial_ESt=document.createElement('tr');
		//	oTableTHeadTr_ESt <- oTableTheadTrInicial_ESt
		oTableTHeadTr_ESt.appendChild(oTableTheadTrInicial_ESt);
		//	Pasa las el arreglo de caracteristicas a una variable
		var oArCaracteristicasCampos_ESt=JSON_Tabla_ESt.campos;
		//	Creamos el arreglo con las columnas, los td
		var oTableTheadTrTdInicial_ESt=new Array();
		//	Pasa por cada una de las columnas
		for(var contColumnasHead_ESt=0;contColumnasHead_ESt<oArCaracteristicasCampos_ESt.length;contColumnasHead_ESt++)
		{
			//	Pasa las caracteristicas de esta columna
			var caracteristicasCampo_ESt=oArCaracteristicasCampos_ESt[contColumnasHead_ESt];
			
			//	Crea la columa
			oTableTheadTrTdInicial_ESt[contColumnasHead_ESt]=document.createElement('td');
			//	oTableTr_ESoTableTheadTrInicial[contFilaHead_ESt] <- oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt]
			oTableTheadTrInicial_ESt.appendChild(oTableTheadTrTdInicial_ESt[contColumnasHead_ESt]);
			//	Coloca el titulo que tiene esta
			
			//	Colocamos el ancho a cada una de estas
			oTableTheadTrTdInicial_ESt[contColumnasHead_ESt].width=caracteristicasCampo_ESt.ancho;
		}
		
	//	Pasa por cada una de las filas del Head
	for(var contFilaHead_ESt=0;contFilaHead_ESt<camposDeLasFilasDelHead_ESt.length;contFilaHead_ESt++)
	{
		//	Saca los arrelgos de la columna
		var camposDeLaColumnaDelHead_ESt=camposDeLasFilasDelHead_ESt[contFilaHead_ESt];
		//	Crea la fila, el tr
		oTableTheadTr_ESt[contFilaHead_ESt]=document.createElement('tr');
		//	oTableTHeadTr_ESt <- oTableTr[contFilaHead]
		oTableTHeadTr_ESt.appendChild(oTableTheadTr_ESt[contFilaHead_ESt]);
		//	Donde estaran todas las columnas, los td
		oTableTheadTrTd_ESt[contFilaHead_ESt]=new Array();
		//	Pasa por cada una de las columnas
		for(var contColumnasHead_ESt=0;contColumnasHead_ESt<camposDeLaColumnaDelHead_ESt.length;contColumnasHead_ESt++)
		{
			//	Caracteristicas de la columna
			var crDelCamposDeLaColumna=camposDeLaColumnaDelHead_ESt[contColumnasHead_ESt];
			
			//	Crea la columa
			oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt]=document.createElement('td');
			//	oTableTheadTr_ESt[contFilaHead_ESt] <- oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt]
			oTableTheadTr_ESt[contFilaHead_ESt].appendChild(oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt]);
			//	Coloca el titulo que tiene esta
			oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt].innerHTML=crDelCamposDeLaColumna.titulo;
			//	Coloca si existe el colspan
			if(crDelCamposDeLaColumna.colspan)
			{ oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt].colSpan=crDelCamposDeLaColumna.colspan; }
			//	Coloca si existe el rowspan
			if(crDelCamposDeLaColumna.rowspan)
			{ oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt].rowSpan=crDelCamposDeLaColumna.rowspan; }
		}
	}
	
	//	Tbody
	//	-----
	
	//	Arreglo de cada uno de los campos y sus caracteristicas
	var contenidoDeLasFilas_ESt=JSON_Tabla_ESt.contenido;
	
	//	Crea el tbody
	oTableTBody_ESt=document.createElement('tbody');
	//	oTable <- oTableTBodyTr[contFilaHead]
	oTable_ESt.appendChild(oTableTBody_ESt);
	//	Donde estaran todas las filas, los tr
	var oTableTBodyTr_ESt=new Array();
	//	Donde estaran todas las columnas, los td
	var oTableTBodyTrTd_ESt=new Array();
	
	//	Pasa por cada una de las filas del Body
	for(var contFilaBody_ESt=0;contFilaBody_ESt<contenidoDeLasFilas_ESt.length;contFilaBody_ESt++)
	{
		//	Saca los arrelgos de la columna
		var camposDeLaColumnaDelBody_ESt=contenidoDeLasFilas_ESt[contFilaBody_ESt];
		//	Crea la fila, el tr
		oTableTBodyTr_ESt[contFilaBody_ESt]=document.createElement('tr');
		//	oTableTBodyTr_ESt <- oTableTr[contFilaBody]
		oTableTBody_ESt.appendChild(oTableTBodyTr_ESt[contFilaBody_ESt]);
		//	Donde estaran todas las columnas, los td
		oTableTBodyTrTd_ESt[contFilaBody_ESt]=new Array();
		//	Pasa por cada una de las columnas
		for(var contColumnasBody_ESt=0;contColumnasBody_ESt<camposDeLaColumnaDelBody_ESt.length;contColumnasBody_ESt++)
		{
			//	Caracteristicas de la columna
			var crDelCamposDeLaColumna=camposDeLaColumnaDelBody_ESt[contColumnasBody_ESt];
			
			//	Crea la columa
			oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt]=document.createElement('td');
			//	oTableTBodyTr_ESt[contFilaBody_ESt] <- oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt]
			oTableTBodyTr_ESt[contFilaBody_ESt].appendChild(oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt]);
			//	Coloca el titulo que tiene esta
			oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt].innerHTML=contenidoDeLasFilas_ESt[contFilaBody_ESt][contColumnasBody_ESt];
		}
	}
	
}