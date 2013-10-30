var tabla=
{
	nombreTabla: 'Pagos01',
	campos:
	[
		{
			nombre: 'apellido',
			tipo: 'texto',
			queSon: 'nombres',
			filtro: 'convertirHTML',
			ancho: 100
		},
		{
			nombre: 'nombre',
			tipo: 'texto',
			queSon: 'nombres',
			filtro: 'convertirHTML',
			ancho: 100
		},
		{
			nombre: 'edad',
			tipo: 'texto',
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
		{
			nombre: 'cantidad',
			tipo: 'texto',
			queSon: 'pesosColombianos',
			ancho: 40,
			alineacion: 'center'
		},
		{
			nombre: 'total',
			tipo: 'texto',
			queSon: 'pesosColombianos',
			ancho: 120,
			alineacion: 'right',
			propiedad: ['readonly']
		}
	],
	camposEnHead:
	[
		[
			{
				titulo: 'Datos personales',
				alineacion: 'center',
				colspan: 4
			},
			{
				titulo: 'Dinero',
				alineacion: 'center',
				rowspan: 2
			},
			{
				titulo: 'No.',
				alineacion: 'center',
				rowspan: 2
			},
			{
				titulo: 'Total',
				alineacion: 'center',
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
		setValorColumna('total',getValorColumna('dinero')*getValorColumna('cantidad'));
	},
	contenido:
	[
		['Julian David','Guerrero Pinilla',25,'masculino',2000,22],
		['Nelly Alexandra','Medina Rojas',25,'femenino',2000,22],
		['Carlos Camilo','Medina Castro',25,'femenino',2000,22],
		['Carlos Andres','Guille Luis',25,'femenino',2000,22],
		['Julian David','Guerrero Pinilla',25,'masculino',2000,22],
		['Nelly Alexandra','Medina Rojas',25,'femenino',2000,22],
		['Carlos Camilo','Medina Castro',25,'femenino',2000,22],
		['Carlos Andres','Guille Luis',25,'femenino',2000,22]
	]
}
//	Arreglo con el numero de cada tabla
var _arNoDeTabla_ESt=new Array();
//	Funcion que crea la tabla
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
	
	//	Nombre de la tabla
	var nombreTabla_ESt=JSON_Tabla_ESt.nombreTabla;
	//	Numero de la tabla
	if(JSON_Tabla_ESt.noTabla==undefined)
	{ if(_arNoDeTabla_ESt[nombreTabla_ESt]==undefined) { _arNoDeTabla_ESt[nombreTabla_ESt]=0; } else { _arNoDeTabla_ESt[nombreTabla_ESt]++; } noTabla_ESt=_arNoDeTabla_ESt[nombreTabla_ESt]; }
	else
	{ var noTabla_ESt=JSON_Tabla_ESt.noTabla; }
	
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
	//	Los 'div' dentro de las columnas, los td
	var oTableTheadTrTdDiv_ESt=new Array();
	
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
		//	Los 'div' dentro de las columnas, los td
		oTableTheadTrTdDiv_ESt[contFilaHead_ESt]=new Array();
		//	Pasa por cada una de las columnas
		for(var contColumnasHead_ESt=0;contColumnasHead_ESt<camposDeLaColumnaDelHead_ESt.length;contColumnasHead_ESt++)
		{
			//	Caracteristicas de la columna
			var crDelCamposDeLaColumna=camposDeLaColumnaDelHead_ESt[contColumnasHead_ESt];
			
			//	Crea la columa
			oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt]=document.createElement('td');
			//	oTableTheadTr_ESt[contFilaHead_ESt] <- oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt]
			oTableTheadTr_ESt[contFilaHead_ESt].appendChild(oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt]);
			
			//	Los div que van dentro de cada columna
			oTableTheadTrTdDiv_ESt[contFilaHead_ESt][contColumnasHead_ESt]=document.createElement('div');
			//	oTableTheadTrTd_ESt <- oTableTheadTrTdDiv_ESt
			oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt].appendChild(oTableTheadTrTdDiv_ESt[contFilaHead_ESt][contColumnasHead_ESt]);
			//	Coloca un nombre de clase distintivo para que no este tan pegado a la pared el texto del titulo
			oTableTheadTrTdDiv_ESt[contFilaHead_ESt][contColumnasHead_ESt].className='cTablaTheadTrTdDivDeTitulo_ESt';
			//	Colocamos la alineacion al texto
			if(crDelCamposDeLaColumna.alineacion)
			{ alineacionDelTexto_=crDelCamposDeLaColumna.alineacion; } else { alineacionDelTexto_='left'; }
			oTableTheadTrTdDiv_ESt[contFilaHead_ESt][contColumnasHead_ESt].style.textAlign=alineacionDelTexto_;
			
			//	Coloca si existe el colspan
			if(crDelCamposDeLaColumna.colspan)
			{ oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt].colSpan=crDelCamposDeLaColumna.colspan; }
			//	Coloca si existe el rowspan
			if(crDelCamposDeLaColumna.rowspan)
			{ oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt].rowSpan=crDelCamposDeLaColumna.rowspan; }
			
			//	Coloca el titulo que tiene esta
			oTableTheadTrTdDiv_ESt[contFilaHead_ESt][contColumnasHead_ESt].innerHTML=crDelCamposDeLaColumna.titulo;
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
		for(var contColumnasBody_ESt=0;contColumnasBody_ESt<camposDeLasFilas_ESt.length;contColumnasBody_ESt++)
		{
			//	Saca los arrelgos de la columna
			if(contenidoDeLasFilas_ESt[contFilaBody_ESt][contColumnasBody_ESt])
			{ var contenidoDeLaColumna_ESt=contenidoDeLasFilas_ESt[contFilaBody_ESt][contColumnasBody_ESt]; }
			else
			{ var contenidoDeLaColumna_ESt=''; }
			
			//	Donde estan todas las caracteristicas de la columna
			var campo_ESt=camposDeLasFilas_ESt[contColumnasBody_ESt];
			
			//	Crea la columa
			oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt]=document.createElement('td');
			//	oTableTBodyTr_ESt[contFilaBody_ESt] <- oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt]
			oTableTBodyTr_ESt[contFilaBody_ESt].appendChild(oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt]);
			
			if(campo_ESt.alineacion)
			{ alineacionDelTexto_=campo_ESt.alineacion; } else { alineacionDelTexto_='left'; }
			anchoDelTexto_=campo_ESt.ancho;
			
			switch(oArCaracteristicasCampos_ESt[contColumnasBody_ESt].tipo)
			{
				case 'texto':
					//	Crea el div donde estara el 
					var oDiv_=document.createElement('div');
					//	oTableTBodyTrTd_ESt <- oDiv_
					oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt].appendChild(oDiv_);
					
					//	Coloca la clase del texto
					oDiv_.className='cTablaTbodyTrTdDivParaTexto_ESt';
					//	Coloca el famoso ID
					oDiv_.id=nombreTabla_ESt+'__'+noTabla_ESt+'__'+oArCaracteristicasCampos_ESt[contColumnasBody_ESt].nombre+'__'+contFilaBody_ESt;
					//	Colocamos la alineacion del texto
					oDiv_.style.textAlign=alineacionDelTexto_;
					
					//	Coloca el contenido que tiene esta
					oDiv_.innerHTML=contenidoDeLaColumna_ESt;
					break;
				case 'input':
					//	Crea el input donde estara el 
					var oInput_=document.createElement('input');
					//	oTableTBodyTrTd_ESt <- oDiv_
					oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt].appendChild(oInput_);
					
					//	Coloca la clase del texto
					oInput_.className='cTablaTbodyTrTdInput_ESt';
					//	Coloca el famoso ID
					oInput_.id=nombreTabla_ESt+'__'+noTabla_ESt+'__'+oArCaracteristicasCampos_ESt[contColumnasBody_ESt].nombre+'__'+contFilaBody_ESt;
					//	Colocamos el ancho del objeto - bordeInput - paddingInput - paddingTd
					oInput_.style.width=(anchoDelTexto_-2-4-2)+'px';
					//	Colocamos el ancho del objeto - bordeInput - paddingInput - paddingTd
					oInput_.style.textAlign=alineacionDelTexto_;
					//	Colocamos el valor tal cual es cargado en esta variable
					oInput_.valorReal=contenidoDeLaColumna_ESt;
					//	Colocamos que es cada input, dentro de ellos
					oInput_.queSon=campo_ESt.queSon;
					//	Mostramos la mascara
					oInput_.value=mascaraInput_ESt(oInput_.queSon,oInput_.valorReal);
					
					//	Cuando es seleccionado cargamos el valor real
					oInput_.onfocus=
						function()
						{
							//	Coloca el valor real
							this.value=this.valorReal;
						}
					
					//	Cuando cambia ejecuta la funcion de por todas las columnas
					oInput_.onchange=
						function()
						{
							//	Se aplica el filtro
							this.valorReal=filtroInput_ESt(this.queSon,this.value);
							//	Ejecutamos cada una de las funciones de las lineas
							EjecutarFormulasDeLaTabla();
						}
						
					//	Cuando se quita el foco hacemos un filtro y mostramos la mascara
					oInput_.onblur=
						function()
						{
							//	Guardamos el valor real
							this.valorReal=filtroInput_ESt(this.queSon,this.value);
							//	Se coloca una mascara
							this.value=mascaraInput_ESt(this.queSon,this.valorReal);
						}
					
					break;
				//	En caso de no tener tipo solo coloca el contenido
				default:
					//	Coloca el contenido que tiene esta
					oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt].innerHTML=contenidoDeLaColumna_ESt;
					break;
			}
		}
	}
}

//	Escribo
//	+------------+
//	|  14454,73
//	+------------+
//	
//	Filtro,
//		Cuando se quita el foco
//		Cambia la coma(,) por el punto (.)
//	Mascara,
//		Cuando se quita el foco
//		Coloca el numero en $14,454.73
//	
//	Sin seleccionar
//	+---------------+
//	|  $14,454.73
//	+---------------+
//	
//	Al seleccionar
//	+---------------+
//	|  14454.73
//	+---------------+
//
//	Vuelvo al inicio
//	
function filtroInput_ESt(tipoDeFiltro,valor_ESt)
{
	//	Coloca el valor en otra variable para concervar el valor original en caso de ser necesario
	valorReturn_ESt=valor_ESt;
	//	Si existe algun tipo de filtro
	if(tipoDeFiltro)
	{
		//	Averigua si NO es un arreglo o un solo tipo
		if(tipoDeFiltro.constructor!=Array)
		{
			//	
			switch(tipoDeFiltro)
			{
				case 'pesosColombianos':
					//	El valor aceptado es el punto(.) NO la coma(,)
					valorReturn_ESt=valorReturn_ESt.replace(',','.');
					break;
			}
		}
	}
	return valorReturn_ESt;
}
function mascaraInput_ESt(tipoDeMascara,valor_ESt)
{
	//	Coloca el valor en otra variable para concervar el valor original en caso de ser necesario
	valorReturn_ESt=valor_ESt;
	//	Si existe algun tipo de mascara
	if(tipoDeMascara)
	{
		//	Averigua si NO es un arreglo o un solo tipo
		if(tipoDeMascara.constructor!=Array)
		{
			//	
			switch(tipoDeMascara)
			{
				case 'pesosColombianos':
					//	Si hat algo coloca la mascara
					if(valorReturn_ESt!='')
					{
						valorReturn_ESt='$ '+NumeroTipoMoneda_ESt(valorReturn_ESt);
					}
					break;
			}
		}
	}
	
	return valorReturn_ESt;
}

function EjecutarFormulasDeLaTabla()
{
	alert('casa');
}
