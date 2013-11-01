var tabla=
{
	nombreTabla: 'Pagos01',
	campos:
	[
		{
			nombre: 'apellido',
			queSon: 'texto',
			tipo: 'nombres',
			filtro: 'convertirHTML',
			ancho: 100
		},
		{
			nombre: 'nombre',
			queSon: 'texto',
			tipo: 'nombres',
			filtro: 'convertirHTML',
			ancho: 100
		},
		{
			nombre: 'edad',
			queSon: 'texto',
			tipo: 'numeros',
			filtro: 'soloNumeros',
			ancho: 50,
			alineacion: 'center'
		},
		{
			nombre: 'genero',
			queSon: {select: [['masculino','Masculino'],['femenino','Femenino']]},
			filtro: 'convertirHTML',
			ancho: 70,
			alineacion: 'center'
		},
		{
			nombre: 'dinero',
			queSon: 'input',
			tipo: 'pesosColombianos',
			ancho: 120,
			alineacion: 'right'
		},
		{
			nombre: 'cantidad',
			queSon: 'input',
			ancho: 40,
			alineacion: 'center'
		},
		{
			nombre: 'total',
			queSon: 'texto',
			tipo: 'pesosColombianos',
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
		setValor('total',getValor('dinero')*getValor('cantidad'));
	},
	contenido:
	[
		['Julian David','Guerrero Pinilla',25,'masculino',2000,32],
		['Nula Alexandra','Medina Rut',25,'femenino',200,84],
		['Carlos Camilo','Medina Castro',25,'masculino',1200,23],
		['Carlos Andres','Guille Luis',25,'masculino',3000,12],
		['Julian David','Guerrero Pinilla',25,'masculino',5000,23],
		['Andrea Alexandra','Medina Une',25,'femenino',4000,43],
		['Carlos Camilo','Medina Castro',25,'masculino',3000,64],
		['Carlos Andres','Guille Luis',25,'masculino',5000,12]
	]
}
//	Arreglo con el numero de cada tabla
var _arNoDeTabla_ESt=new Array();
//	Objeto que crea la tabla
//	Objeto que crea la tabla
//	Objeto que crea la tabla
//	Objeto que crea la tabla
function CrearTabla_ESt(myTabla,id_ESt,JSON_Tabla_ESt)
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
	
	//	Coloca y guarda el contenido para ser usado
	myTabla.tablaJSON=JSON_Tabla_ESt;
	
	//	Convertimos el id en un objeto
	myTabla.oPrincipal_ESt=document.getElementById(id_ESt);
	
	//	El primer div que va dentro
	var oDivNv01_ESt=document.createElement('div');
	//	objetoPrincipal <- oDivNivel01
	myTabla.oPrincipal_ESt.appendChild(oDivNv01_ESt);
	//	Colocarle la clase
	oDivNv01_ESt.className='cDivDeTablaNvl01_ESt';
	//	El primer div que va dentro
	var oDivNv02_ESt=document.createElement('div');
	//	oDivNivel01 <- oDivNivel02
	oDivNv01_ESt.appendChild(oDivNv02_ESt);
	//	Colocarle la clase
	oDivNv02_ESt.className='cDivDeTablaNvl02_ESt';
	
	//	Creamos la tabla
	myTabla.oTable_ESt=document.createElement('table');
	//	oDivNivel02 <- myTabla.oTable_ESt
	oDivNv02_ESt.appendChild(myTabla.oTable_ESt);
	
	//	Nombre de la tabla
	myTabla.nombreTabla_ESt=JSON_Tabla_ESt.nombreTabla;
	//	Numero de la tabla
	if(JSON_Tabla_ESt.noTabla==undefined)
	{ if(_arNoDeTabla_ESt[myTabla.nombreTabla_ESt]==undefined) { _arNoDeTabla_ESt[myTabla.nombreTabla_ESt]=0; } else { _arNoDeTabla_ESt[myTabla.nombreTabla_ESt]++; } myTabla.noTabla_ESt=_arNoDeTabla_ESt[myTabla.nombreTabla_ESt]; }
	else
	{ var noTabla_ESt=JSON_Tabla_ESt.noTabla; }
	
	//	Arreglo de cada uno de los campos con las caracteristicas del head
	myTabla.camposDeLasFilasDelHead_ESt=JSON_Tabla_ESt.camposEnHead;
	//	Arreglo de cada uno de los campos y sus caracteristicas
	myTabla.camposDeLasFilas_ESt=JSON_Tabla_ESt.campos;
	
	//	HEAD
	//	----
	
	//	Crea el thead
	myTabla.oTableTHead_ESt=document.createElement('thead');
	//	myTabla.oTable <- myTabla.oTableTr[contFilaHead]
	myTabla.oTable_ESt.appendChild(myTabla.oTableTHead_ESt);
	//	Donde estaran todas las filas, los tr
	myTabla.oTableTheadTr_ESt=new Array();
	//	Donde estaran todas las columnas, los td
	myTabla.oTableTheadTrTd_ESt=new Array();
	//	Los 'div' dentro de las columnas, los td
	myTabla.oTableTheadTrTdDiv_ESt=new Array();
	
		//	Crea una primera fila que no contendra nada,mas que los anchis de la tabla
		myTabla.oTableTheadTrInicial_ESt=document.createElement('tr');
		//	myTabla.oTableTHead_ESt <- myTabla.oTableTheadTrInicial_ESt
		myTabla.oTableTHead_ESt.appendChild(myTabla.oTableTheadTrInicial_ESt);
		//	Pasa las el arreglo de caracteristicas a una variable
		myTabla.camposDeLasFilas_ESt=JSON_Tabla_ESt.campos;
		//	Creamos el arreglo con las columnas, los td
		myTabla.oTableTheadTrTdInicial_ESt=new Array();
		//	Pasa por cada una de las columnas
		for(var contColumnasHead_ESt=0;contColumnasHead_ESt<myTabla.camposDeLasFilas_ESt.length;contColumnasHead_ESt++)
		{
			//	Pasa las caracteristicas de esta columna
			var caracteristicasCampo_ESt=myTabla.camposDeLasFilas_ESt[contColumnasHead_ESt];
			
			//	Crea la columa
			myTabla.oTableTheadTrTdInicial_ESt[contColumnasHead_ESt]=document.createElement('td');
			//	myTabla.oTableTr_ESmyTabla.oTableTheadTrInicial[contFilaHead_ESt] <- myTabla.oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt]
			myTabla.oTableTheadTrInicial_ESt.appendChild(myTabla.oTableTheadTrTdInicial_ESt[contColumnasHead_ESt]);
			//	Coloca el titulo que tiene esta
			
			//	Colocamos el ancho a cada una de estas
			myTabla.oTableTheadTrTdInicial_ESt[contColumnasHead_ESt].width=caracteristicasCampo_ESt.ancho;
		}
		
	//	Pasa por cada una de las filas del Head
	for(var contFilaHead_ESt=0;contFilaHead_ESt<myTabla.camposDeLasFilasDelHead_ESt.length;contFilaHead_ESt++)
	{
		//	Saca los arrelgos de la columna
		var camposDeLaColumnaDelHead_ESt=myTabla.camposDeLasFilasDelHead_ESt[contFilaHead_ESt];
		//	Crea la fila, el tr
		myTabla.oTableTheadTr_ESt[contFilaHead_ESt]=document.createElement('tr');
		//	myTabla.oTableTHeadTr_ESt <- myTabla.oTableTr[contFilaHead]
		myTabla.oTableTHead_ESt.appendChild(myTabla.oTableTheadTr_ESt[contFilaHead_ESt]);
		//	Donde estaran todas las columnas, los td
		myTabla.oTableTheadTrTd_ESt[contFilaHead_ESt]=new Array();
		//	Los 'div' dentro de las columnas, los td
		myTabla.oTableTheadTrTdDiv_ESt[contFilaHead_ESt]=new Array();
		//	Pasa por cada una de las columnas
		for(var contColumnasHead_ESt=0;contColumnasHead_ESt<camposDeLaColumnaDelHead_ESt.length;contColumnasHead_ESt++)
		{
			//	Caracteristicas de la columna
			var crDelCamposDeLaColumna=camposDeLaColumnaDelHead_ESt[contColumnasHead_ESt];
			
			//	Crea la columa
			myTabla.oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt]=document.createElement('td');
			//	myTabla.oTableTheadTr_ESt[contFilaHead_ESt] <- myTabla.oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt]
			myTabla.oTableTheadTr_ESt[contFilaHead_ESt].appendChild(myTabla.oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt]);
			
			//	Los div que van dentro de cada columna
			myTabla.oTableTheadTrTdDiv_ESt[contFilaHead_ESt][contColumnasHead_ESt]=document.createElement('div');
			//	myTabla.oTableTheadTrTd_ESt <- myTabla.oTableTheadTrTdDiv_ESt
			myTabla.oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt].appendChild(myTabla.oTableTheadTrTdDiv_ESt[contFilaHead_ESt][contColumnasHead_ESt]);
			//	Coloca un nombre de clase distintivo para que no este tan pegado a la pared el texto del titulo
			myTabla.oTableTheadTrTdDiv_ESt[contFilaHead_ESt][contColumnasHead_ESt].className='cTablaTheadTrTdDivDeTitulo_ESt';
			//	Colocamos la alineacion al texto
			if(crDelCamposDeLaColumna.alineacion)
			{ alineacionDelTexto_=crDelCamposDeLaColumna.alineacion; } else { alineacionDelTexto_='left'; }
			myTabla.oTableTheadTrTdDiv_ESt[contFilaHead_ESt][contColumnasHead_ESt].style.textAlign=alineacionDelTexto_;
			
			//	Coloca si existe el colspan
			if(crDelCamposDeLaColumna.colspan)
			{ myTabla.oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt].colSpan=crDelCamposDeLaColumna.colspan; }
			//	Coloca si existe el rowspan
			if(crDelCamposDeLaColumna.rowspan)
			{ myTabla.oTableTheadTrTd_ESt[contFilaHead_ESt][contColumnasHead_ESt].rowSpan=crDelCamposDeLaColumna.rowspan; }
			
			//	Coloca el titulo que tiene esta
			myTabla.oTableTheadTrTdDiv_ESt[contFilaHead_ESt][contColumnasHead_ESt].innerHTML=crDelCamposDeLaColumna.titulo;
		}
	}
	
	//	Tbody
	//	-----
	
	//	Crea el tbody
	myTabla.oTableTBody_ESt=document.createElement('tbody');
	//	myTabla.oTable <- myTabla.oTableTBodyTr[contFilaHead]
	myTabla.oTable_ESt.appendChild(myTabla.oTableTBody_ESt);
}

//	Coloca el contenido de la tabña
function colocarContenido_ESt(myTabla,JSON_Tabla_ESt)
{
	//	Arreglo de cada uno de los campos y sus caracteristicas
	myTabla.contenidoDeLasFilas_ESt=JSON_Tabla_ESt.contenido;
	
	//	Donde estaran todas las filas, los tr
	myTabla.oTableTBodyTr_ESt=new Array();
	//	Donde estaran todas las columnas, los td
	myTabla.oTableTBodyTrTd_ESt=new Array();
	
	//	Matriz con el objeto de los campos de esta tabla [numeroFila][nombreColumna]=objetoEnElla
	myTabla.objetoCampoTablaNoFilaNombCol=new Array();
	
	//	Pasa por cada una de las filas del Body
	for(var contFilaBody_ESt=0;contFilaBody_ESt<myTabla.contenidoDeLasFilas_ESt.length;contFilaBody_ESt++)
	{
		//	Saca los arrelgos de la columna
		var camposDeLaColumnaDelBody_ESt=myTabla.contenidoDeLasFilas_ESt[contFilaBody_ESt];
		//	Crea la fila, el tr
		myTabla.oTableTBodyTr_ESt[contFilaBody_ESt]=document.createElement('tr');
		//	myTabla.oTableTBodyTr_ESt <- myTabla.oTableTr[contFilaBody]
		myTabla.oTableTBody_ESt.appendChild(myTabla.oTableTBodyTr_ESt[contFilaBody_ESt]);
		//	Donde estaran todas las columnas, los td
		myTabla.oTableTBodyTrTd_ESt[contFilaBody_ESt]=new Array();
		//	Matriz con el objeto de los campos de esta tabla [numeroFila][nombreColumna]=objetoEnElla
		myTabla.objetoCampoTablaNoFilaNombCol[contFilaBody_ESt]=new Array();
		//	Pasa por cada una de las columnas
		for(var contColumnasBody_ESt=0;contColumnasBody_ESt<myTabla.camposDeLasFilas_ESt.length;contColumnasBody_ESt++)
		{
			//	Nombre del campo
			var nombreDelCampo_ESt=myTabla.camposDeLasFilas_ESt[contColumnasBody_ESt].nombre;
			//	Saca los arrelgos de la columna
			if(myTabla.contenidoDeLasFilas_ESt[contFilaBody_ESt][contColumnasBody_ESt])
			{ var contenidoDeLaColumna_ESt=myTabla.contenidoDeLasFilas_ESt[contFilaBody_ESt][contColumnasBody_ESt]; }
			else
			{ var contenidoDeLaColumna_ESt=''; }
			
			//	Donde estan todas las caracteristicas de la columna
			var campo_ESt=myTabla.camposDeLasFilas_ESt[contColumnasBody_ESt];
			
			//	Crea la columa
			myTabla.oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt]=document.createElement('td');
			//	myTabla.oTableTBodyTr_ESt[contFilaBody_ESt] <- myTabla.oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt]
			myTabla.oTableTBodyTr_ESt[contFilaBody_ESt].appendChild(myTabla.oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt]);
			
			//	Agregamos el id que tiene que tener
			campo_ESt.id=myTabla.nombreTabla_ESt+'__'+myTabla.noTabla_ESt+'__'+nombreDelCampo_ESt+'__'+contFilaBody_ESt;
			//	Agregamos el objeto de la tabla para que lo use
			campo_ESt.objetoTabla=myTabla;
			//	Creamos el objeto y lo cargamos aca
			objetoCreado=crearElemento_ESt(contenidoDeLaColumna_ESt,campo_ESt);
			//	oTableTBodyTrTd_ESt <- objetoCreado
			myTabla.oTableTBodyTrTd_ESt[contFilaBody_ESt][contColumnasBody_ESt].appendChild(objetoCreado);
			//	Matriz con el objeto de los campos de esta tabla [numeroFila][nombreColumna]=objetoEnElla
			myTabla.objetoCampoTablaNoFilaNombCol[contFilaBody_ESt][nombreDelCampo_ESt]=objetoCreado;
			
		}
	}
}

// 	El lugar donde crea los input, select, texto entre otros
function crearElemento_ESt(contenidoDeLaColumna_ESt,campo_ESt)
{
	if(campo_ESt.alineacion)
	{ alineacionDelTexto_=campo_ESt.alineacion; } else { alineacionDelTexto_='left'; }
	anchoDelTexto_=campo_ESt.ancho;
	
	switch(campo_ESt.queSon)
	{
		case 'texto':
				//	Crea el div donde estara el 
				var oDiv_=document.createElement('div');
				//	Coloca la clase del texto
				oDiv_.className='cTablaTbodyTrTdDivParaTexto_ESt';
				//	Coloca el famoso ID
				if(campo_ESt.id) { oDiv_.id=campo_ESt.id; }
				
				//	Colocamos la alineacion del texto
				oDiv_.style.textAlign=alineacionDelTexto_;
				
				//	Guarda el valor real
				oDiv_.valorReal=contenidoDeLaColumna_ESt;
				//	Colocamos que es cada input, dentro de ellos
				oDiv_.tipo=campo_ESt.tipo;
				//	Mostramos la mascara
				oDiv_.innerHTML=mascaraInput_ESt(oDiv_.tipo,oDiv_.valorReal);
				
				//	Colocamos el tipo para que lo vea
				oDiv_.queSon=campo_ESt.queSon;
				//	Retornamos el objeto creado
				return oDiv_;
			break;
		case 'input':
				//	Crea el input donde estara el 
				var oInput_=document.createElement('input');
				
				//	Coloca la tabla
				if(campo_ESt.objetoTabla) { oInput_.oTabla=campo_ESt.objetoTabla; }
				//	Coloca la clase del texto
				oInput_.className='cTablaTbodyTrTdInput_ESt';
				//	Coloca el famoso ID
				if(campo_ESt.id) { oInput_.id=campo_ESt.id; }
				//	Colocamos el ancho del objeto - bordeInput - paddingInput - paddingTd
				oInput_.style.width=(anchoDelTexto_-2-4-2)+'px';
				//	Colocamos el ancho del objeto - bordeInput - paddingInput - paddingTd
				oInput_.style.textAlign=alineacionDelTexto_;
				//	Colocamos el valor tal cual es cargado en esta variable
				oInput_.valorReal=contenidoDeLaColumna_ESt;
				//	Colocamos que es cada input, dentro de ellos
				oInput_.tipo=campo_ESt.tipo;
				//	Mostramos la mascara
				oInput_.value=mascaraInput_ESt(oInput_.tipo,oInput_.valorReal);
				
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
						this.valorReal=filtroInput_ESt(this.tipo,this.value);
						//	Ejecutamos cada una de las funciones de las lineas
						if(this.oTabla) { this.oTabla.ejecutarFunciones(); }
					}
					
				//	Cuando se quita el foco hacemos un filtro y mostramos la mascara
				oInput_.onblur=
					function()
					{
						//	Guardamos el valor real
						this.valorReal=filtroInput_ESt(this.tipo,this.value);
						//	Se coloca una mascara
						this.value=mascaraInput_ESt(this.tipo,this.valorReal);
					}
				
				//	Colocamos el tipo para que lo vea
				oInput_.queSon=campo_ESt.queSon;
				//	Retorna el objeto
				return oInput_;
			break;
		//	En caso de no tener tipo solo coloca el contenido
		default:
				//	Crea el div donde estara el 
				var oDiv_=document.createElement('div');
				//	Coloca el famoso ID
				if(campo_ESt.id) { oDiv_.id=campo_ESt.id; }
				
				//	Colocamos la alineacion del texto
				oDiv_.style.textAlign=alineacionDelTexto_;
				
				//	Guarda el valor real
				oDiv_.valorReal=contenidoDeLaColumna_ESt;
				//	Colocamos el valor real
				oDiv_.innerHTML=oDiv_.valorReal;
				//	Retornamos el objeto creado
				return oDiv_;
			break;
	}
}

function oTabla()
{
	this.crearTabla=
		function(id_ESt,JSON_Tabla_ESt)
		{
			CrearTabla_ESt(this,id_ESt,JSON_Tabla_ESt);
		};
	this.colocarContenido=
		function(JSON_Tabla_ESt)
		{
			colocarContenido_ESt(this,JSON_Tabla_ESt);
		};
	this.ejecutarFunciones=
		function()
		{
			//	Ejecuta las funciones de la tabla
			ejecutarFuncinesDeLaTabla_ESt(this);
		};
}
//	Fila en la que esta pasoando
var _filaActual_ESt=-1;
//	La pagina en la que esta ahora
var _paginaVisible_ESt=0;
//	Objeto actual de la tabla
var _oTablaActual_ESt;
//	true mientras se este ejecutando una funcion por filas
var _bnEjecuntandoFuncionPorFilas_ESt=false;
//	Ejecuta las funciones linea por linea
function ejecutarFuncinesDeLaTabla_ESt(myTabla)
{

	//	Pasamos por cada fila suponiendo que sea una sola pagina
	for(var contFilas_=0;contFilas_<myTabla.contenidoDeLasFilas_ESt.length;contFilas_++)
	{
		//	Fila en la que esta pasoando
		_filaActual_ESt=contFilas_;
		//	Pagina en que esta ahora
		_paginaVisible_ESt=myTabla.noDeLaPaginaVisible;
		//	Objeto actual de la tabla
		_oTablaActual_ESt=myTabla;
		//	Si existe la funcion por fila
		if(myTabla.tablaJSON.funcionesPorFila)
		{
			//	true mientras se este ejecutando una funcion por filas
			_bnEjecuntandoFuncionPorFilas_ESt=true;
			//	Ejecuta la funcion creada por el usuario
			myTabla.tablaJSON.funcionesPorFila();
			//	true mientras se este ejecutando una funcion por filas
			_bnEjecuntandoFuncionPorFilas_ESt=false;
		}
	}
}
//	Funcion para obtener el valor
function getValor(nombreDelCampo)
{
	//	Si esta siendo ejecutado para la fila de una tabla
	if(_bnEjecuntandoFuncionPorFilas_ESt)
	{
		//	Pasa el objeto del campo a una variable
		var objetoCampo_ESt=_oTablaActual_ESt.objetoCampoTablaNoFilaNombCol[_filaActual_ESt][nombreDelCampo];
		//	Retorna el valor real
		return objetoCampo_ESt.valorReal;
	}
	else
	{
		//	Devuelve el valor que hay
		return document.getElementById(nombreDelCampo).value;
	}
}
//	Funcion para obtener el valor
function setValor(nombreDelCampo,valorDelCampo)
{
	//	Si esta siendo ejecutado para la fila de una tabla
	if(_bnEjecuntandoFuncionPorFilas_ESt)
	{
		//	Pasa el objeto del campo a una variable
		var objetoCampo_ESt=_oTablaActual_ESt.objetoCampoTablaNoFilaNombCol[_filaActual_ESt][nombreDelCampo];
		//	Mira que objeto es
		switch(objetoCampo_ESt.queSon)
		{
			case 'texto':
				//	Guardamos el nuevo valor real
				objetoCampo_ESt.valorReal=valorDelCampo;
				//	Colocamos lo que debe verse
				objetoCampo_ESt.innerHTML=mascaraInput_ESt(objetoCampo_ESt.tipo,valorDelCampo);
				break;
			case 'input':
				//	Guardamos el nuevo valor real
				objetoCampo_ESt.valorReal=valorDelCampo;
				//	Colocamos lo que debe veres
				objetoCampo_ESt.value=mascaraInput_ESt(objetoCampo_ESt.tipo,valorDelCampo);
				break;
			default:
				objetoCampo_ESt.value=valorDelCampo;
		}
	}
	else
	{
		//	Devuelve el valor que hay
		return document.getElementById(nombreDelCampo).value=valorDelCampo;
	}
}

/*
	//	Caracteristicas de la tabla
	this.tablaJSON=JSON_Tabla_ESt;
	//	Nombre de la tabla
	this.nombreTabla=myTabla.nombreTabla_ESt;
	//	La pagina que esta visible
	this.noDeLaPaginaVisible=0;
	//	Numero de filas por pagina
	this.noFilasPorPagina[this.noDeLaPaginaVisible]=myTabla.camposDeLasFilas_ESt.length;
	//	Numero de paginas que existen
	this.noPaginas=1;
	//	Funciones propias de este
	this.EjecutarFormulasDeLaTabla=
		function()
		{
			//	Pasamos por cada fila suponiendo que sea una sola pagina
			for(var contFilas_=0;contFilas_<this.noFilasPorPagina[this.noDeLaPaginaVisible];contFilas_++)
			{
				//	
				_filaActual=contFilas_;
				//	
				_paginaVisible=this.noDeLaPaginaVisible;
				//	
				if(tablaJSON.funcionesPorFila)
				{
					//	true mientras se este ejecutando una funcion por filas
					_bnEjecuntandoFuncionPorFilas=true;
					//	Ejecuta la funcion creada por el usuario
					tablaJSON.funcionesPorFila();
					//	true mientras se este ejecutando una funcion por filas
					_bnEjecuntandoFuncionPorFilas=false;
				}
			}
		}
*/

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
//	Cambiar lo escrito, y quitar el foco
//	+------------+
//	|  15113,72
//	+------------+
//	
//	Filtro
//		Cuando se quita el foco
//		Cambia la coma(,) por el punto (.)
//	
//	Mascara
//		Cuando se quita el foco
//		Coloca el numero en $14,454.73
//	
//	Sin seleccionar
//	+---------------+
//	|  $15,113.72
//	+---------------+
//	
//	Al seleccionar
//	+---------------+
//	|  15113.72
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
					if(valorReturn_ESt.split(',').length==2  && valorReturn_ESt.split('.').length==1)
					{ valorReturn_ESt=valorReturn_ESt.replace(',','.'); }
					break;
				default:
					valorReturn_ESt=valorReturn_ESt;
					break;
			}
		}
	}
	//	
	return valorReturn_ESt;
}

//	
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

//	
function EjecutarFormulasDeLaTabla()
{
	
}
