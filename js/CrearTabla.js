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
			ancho: 120
		},
		{
			nombre: 'nombre',
			queSon: 'texto',
			tipo: 'nombres',
			filtro: 'convertirHTML',
			ancho: 120
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
			nombre: 'cargo',
			queSon: 'select',
			valoresSelect:    ['Diseñador','Programador','Usabilidad','Director'],
			valoresReales:    ['diseñador','programador','Usabilidad','Director'], /**opcional*/
			funcionPorSelect: [function() {  }, function() {  }], /**opcional*/
			funcionAlSeleccionar: function(valorRealSeleccionado) {  }, /**opcional*/
			filtro: 'convertirHTML',
			ancho: 100,
			alineacion: 'center'
		},
		{
			nombre: 'ciudad',
			queSon: 'autocompletar',
			valoresSelect:    ['Bogota D.C.','Medellin','Cali','Neiva','Pasto','otra..'],
			funcionPorSelect: [function() {  }, function() {  }], /**opcional*/
			funcionAlSeleccionar: function(valorRealSeleccionado) {  }, /**opcional*/
			tipo: 'pesosColombianos',
			ancho: 150,
			alineacion: 'left'
		},
		{
			nombre: 'dinero',
			queSon: 'input',
			tipo: 'pesosColombianos',
			ancho: 85,
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
			ancho: 85,
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
				colspan: 3
			},
			{
				titulo: 'Datos empresariales',
				alineacion: 'center',
				colspan: 2
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
				titulo: 'Cargo'
			},
			{
				titulo: 'Ciudad'
			}
		]
	],
	funcionesPorFila: function()
	{
		setValor('total',getValor('dinero')*getValor('cantidad'));
	},
	contenido:
	[
		['Josue David','Guitierres Pinilla',25,'programador','Bogota D.C.',2000,32],
		['Nula Alexandra','Medina Rut',25,'diseñador','',200,84],
		['Carlos Camilo','Medina Castro',25,'diseñador','',1200,23],
		['Carlos Andres','Guille Luis',25,'diseñador','',3000,12]
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

//	contenidoDeLaColumna_ESt='25 años';
//	campo_ESt={
//		nombre: 'edad',
//		queSon: 'texto',
//		tipo: 'numeros',
//		filtro: 'soloNumeros',
//		ancho: 50,
//		alineacion: 'center'
//	};
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
				
				//	Colocamos los valores del campo
				oDiv_.campo_ESt=campo_ESt;
				
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
				
				//	Colocamos los valores del campo
				oInput_.campo_ESt=campo_ESt;
				
				//	Coloca la clase del texto
				oInput_.className='cTablaTbodyTrTdInput_ESt';
				//	Colocamos el ancho del objeto - bordeInput - paddingInput - paddingTd
				oInput_.style.width=(anchoDelTexto_-2-4-2)+'px';
				//	Colocamos el ancho del objeto - bordeInput - paddingInput - paddingTd
				oInput_.style.textAlign=alineacionDelTexto_;
				//	Colocamos el valor tal cual es cargado en esta variable
				oInput_.valorReal=contenidoDeLaColumna_ESt;
				//	Mostramos la mascara
				oInput_.value=mascaraInput_ESt(oInput_.campo_ESt.tipo,oInput_.valorReal);
				
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
						this.valorReal=filtroInput_ESt(this.campo_ESt.tipo,this.value);
						//	Ejecutamos cada una de las funciones de las lineas
						if(this.campo_ESt.objetoTabla) { this.campo_ESt.objetoTabla.ejecutarFunciones(); }
					}
					
				//	Cuando se quita el foco hacemos un filtro y mostramos la mascara
				oInput_.onblur=
					function()
					{
						//	Guardamos el valor real
						this.valorReal=filtroInput_ESt(this.campo_ESt.tipo,this.value);
						//	Se coloca una mascara
						this.value=mascaraInput_ESt(this.campo_ESt.tipo,this.valorReal);
					}
				
				//	Retorna el objeto
				return oInput_;
			break;
		case 'select':
				//	Crea el input donde estara el 
				var oInput_=document.createElement('input');
				
				//	Los valores que falta los cambia por los de por defecto
				if(!campo_ESt.valoresReales)       { campo_ESt.valoresReales=campo_ESt.valoresSelect; }
				if(!campo_ESt.background_select)   { campo_ESt.background_select='#CCC'; }
				if(!campo_ESt.texto_select)        { campo_ESt.texto_select='#333'; }
				if(!campo_ESt.background_selected) { campo_ESt.background_selected='#EEE'; }
				if(!campo_ESt.texto_selected)      { campo_ESt.texto_selected='#333'; }
				
				//	Colocamos los valores del campo
				oInput_.campo_ESt=campo_ESt;
				
				//	Coloca la clase del texto
				oInput_.className='cTablaTbodyTrTdSelect_ESt';
				//	valor del padding left, menos 2 de la clase coloca
				var paddingLeft=8;
				//	ancho del input
				oInput_.ancho=(anchoDelTexto_-2-4-2-(paddingLeft-2));
				//	Colocamos el ancho del objeto - bordeInput - paddingInput - paddingTd - (paddinIzquierdaParaFlechaDeSelect - padingInput)
				oInput_.style.width=oInput_.ancho+'px';
				//	Colocamos el padding, para colocar la flecha a la izquierda
				oInput_.style.paddingLeft=paddingLeft+'px';
				//	Colocamos la alineacion del texto
				oInput_.style.textAlign=alineacionDelTexto_;
				//	Colocamos el valor tal cual es cargado en esta variable
				oInput_.valorReal=contenidoDeLaColumna_ESt;
				//	valorReal <- oInput_.valorRealDelSelect[valorSelect]
				oInput_.arValorSelectDelReal=new Array();
				//	va a llenar el arreglo oInput_.valorRealDelSelect
				for(var contParaContDeCol=0;contParaContDeCol<campo_ESt.valoresSelect.length;contParaContDeCol++)
				{
					if(oInput_.valorReal==campo_ESt.valoresReales[contParaContDeCol])
					{
						//	
						oInput_.arValorSelectDelReal[campo_ESt.valoresReales[contParaContDeCol]]=campo_ESt.valoresSelect[contParaContDeCol];
					
					}
				}
				//	Mostramos el contenido de la tabla
				oInput_.value=oInput_.arValorSelectDelReal[oInput_.valorReal];
				
				//	Valores necesarios para crear el objeto autocompletar
				var valoresDelAutocompletar=
				{
					objetoDeSelect: oInput_
					/**
					ancho: ,
					posicionEnX: ,
					posicionEnY: ,
					valoresSelect: campo_ESt.valoresSelect,
					valoresReales: campo_ESt.valoresReales,
					funcionPorSelect: campo_ESt.funcionPorSelect,
					funcionAlSeleccionar: campo_ESt.funcionAlSeleccionar,
					colores:
						{
							background_select: campo_ESt.background_select,
							texto_select: campo_ESt.texto_select,
							background_selected: campo_ESt.background_selected,
							texto_selected: campo_ESt.texto_selected
						}
					**/
				};
				
				//	Guardamos los valores dentro para ser consultados
				oInput_.valoresDelAutocompletar=valoresDelAutocompletar;
				//	true, si esta activado el autocompletar en este objeto
				oInput_.bnVisibleAutocompletar=false;
				//	Cuando es seleccionado cargamos el valor real
				oInput_.onfocus=
					function()
					{
						//	Crea el objeto autocompletar
						this.objetoAutocompletar=crearAutocompletar_ESt(this);
						//	Aparece el autocompletar
						this.apareceAutocompletar(this.objetoAutocompletar);
					};
				//	Aparece, mas no crea el autocompletar
				oInput_.apareceAutocompletar=
					function(objetoAutocompletar_ESt)
					{
						//	Desaparece los autocompletar anterirmente activos
						if(_objetoInputAutocompletarActual) { _objetoInputAutocompletarActual.desaparecerAutocompletar(); }
//	ALERT
//	Cambiar el id por algo que lo coloque sin este
						document.getElementById('iDondeEstaraTEmporalmeneElAutocompletar').appendChild(objetoAutocompletar_ESt);
						
						objetoAutocompletar_ESt.style.position='absolute';
						objetoAutocompletar_ESt.style.left=(objetoPosX_ESt(this)+8+1+2)+'px';
						objetoAutocompletar_ESt.style.top=(objetoPosY_ESt(this)+20)+'px';
						
						//	true, si esta activado el autocompletar en este objeto
						this.bnVisibleAutocompletar=true;
						//	guarda el input del autocompletar actual;
						if(_objetoInputAutocompletarActual) { _objetoInputAutocompletarAnterior=_objetoInputAutocompletarActual; }
						//	guarda el input del autocompletar actual;
						_objetoInputAutocompletarActual=this;
					}
				//	Cuando se quita el foco
				oInput_.onblur=
					function()
					{
						//	Guarda el objeto que consultara en 500ms para desaparecer
						_objetoInputAutocompletarAnterior=_objetoInputAutocompletarActual;
						//	Borra el autocompletar que ahora esta visible
						this.desaparecerAutocompletar_=
							function()
							{
								_objetoInputAutocompletarAnterior.desaparecerAutocompletar();
							}
						//	Desaparece el autocompletar
						window.setTimeout(this.desaparecerAutocompletar_,500);
					};
				//	Desaparece el autocompletar
				oInput_.desaparecerAutocompletar=
					function()
					{
						//	Coloca visible el autocompletar
						if(this.bnVisibleAutocompletar)
						{
//	ALERT
//	Cambiar el id por algo que lo coloque sin este
							document.getElementById('iDondeEstaraTEmporalmeneElAutocompletar').removeChild(this.objetoAutocompletar);
							//	true, si esta activado el autocompletar en este objeto
							this.bnVisibleAutocompletar=false;
							
							//	objeto con el autocompletar anteriormente activo
							_objetoInputAutocompletarAnterior=this;
						}
					}
				//	Colocamos el readonly
				oInput_.readOnly=true;
				//	Coloca los campos del autocompletar
				oInput_.valoresSelect=campo_ESt.valoresSelect;
				//	Retorna el objeto
				return oInput_;
			break;
		case 'autocompletar':
				//	Crea el input donde estara el 
				var oInput_=document.createElement('input');
				
				//	Los valores que falta los cambia por los de por defecto
				if(!campo_ESt.valoresReales)       { campo_ESt.valoresReales=campo_ESt.valoresSelect; }
				if(!campo_ESt.background_select)   { campo_ESt.background_select='#CCC'; }
				if(!campo_ESt.texto_select)        { campo_ESt.texto_select='#333'; }
				if(!campo_ESt.background_selected) { campo_ESt.background_selected='#EEE'; }
				if(!campo_ESt.texto_selected)      { campo_ESt.texto_selected='#333'; }
				
				//	Colocamos los valores del campo
				oInput_.campo_ESt=campo_ESt;
				
				//	Coloca la clase del texto
				oInput_.className='cTablaTbodyTrTdSelect_ESt';
				//	valor del padding left, menos 2 de la clase coloca
				var paddingLeft=8;
				//	ancho del input
				oInput_.ancho=(anchoDelTexto_-2-4-2-(paddingLeft-2));
				//	Colocamos el ancho del objeto - bordeInput - paddingInput - paddingTd - (paddinIzquierdaParaFlechaDeSelect - padingInput)
				oInput_.style.width=oInput_.ancho+'px';
				//	Colocamos el padding, para colocar la flecha a la izquierda
				oInput_.style.paddingLeft=paddingLeft+'px';
				//	Colocamos la alineacion del texto
				oInput_.style.textAlign=alineacionDelTexto_;
				//	Colocamos el valor tal cual es cargado en esta variable
				oInput_.valorReal=contenidoDeLaColumna_ESt;
				//	valorReal <- oInput_.valorRealDelSelect[valorSelect]
				oInput_.arValorSelectDelReal=new Array();
//	AlERTA
//	Puede optimizarce al meter el contenido en campo_ESt, y realizarlo una vez
				//	va a llenar el arreglo oInput_.valorRealDelSelect
				for(var contParaContDeCol=0;contParaContDeCol<campo_ESt.valoresSelect.length;contParaContDeCol++)
				{
					if(oInput_.valorReal==campo_ESt.valoresReales[contParaContDeCol])
					{
						//	
						oInput_.arValorSelectDelReal[campo_ESt.valoresReales[contParaContDeCol]]=campo_ESt.valoresSelect[contParaContDeCol];
					
					}
				}
				//	Mostramos el contenido de la tabla
				if(oInput_.valorReal!='')
				{
					oInput_.value=oInput_.arValorSelectDelReal[oInput_.valorReal];
				}
				
				//	Valores necesarios para crear el objeto autocompletar
				var valoresDelAutocompletar=
				{
					objetoDeSelect: oInput_,
					valorBuscador: oInput_.value
				};
				
				//	Guardamos los valores dentro para ser consultados
				oInput_.valoresDelAutocompletar=valoresDelAutocompletar;
				//	true, si esta activado el autocompletar en este objeto
				oInput_.bnVisibleAutocompletar=false;
				//	Cuando es seleccionado cargamos el valor real
				oInput_.onkeyup=
					function(e_ESt)
					{
						//	Coloca el objeto para poder buscarlo
						this.valoresDelAutocompletar.valorBuscador=this.value;
						//	Crea el objeto autocompletar
						this.objetoAutocompletar=crearAutocompletar_ESt(this);
						//	Aparece el autocompletar
						this.apareceAutocompletar(this.objetoAutocompletar);
					};
				//	Aparece, mas no crea el autocompletar
				oInput_.apareceAutocompletar=
					function(objetoAutocompletar_ESt)
					{
						//	Desaparece los autocompletar anterirmente activos
						if(_objetoInputAutocompletarActual) { _objetoInputAutocompletarActual.desaparecerAutocompletar(); }
//	ALERT
//	Cambiar el id por algo que lo coloque sin este
						document.getElementById('iDondeEstaraTEmporalmeneElAutocompletar').appendChild(objetoAutocompletar_ESt);
						
						objetoAutocompletar_ESt.style.position='absolute';
						objetoAutocompletar_ESt.style.left=(objetoPosX_ESt(this)+8+1+2)+'px';
						objetoAutocompletar_ESt.style.top=(objetoPosY_ESt(this)+20)+'px';
						
						//	true, si esta activado el autocompletar en este objeto
						this.bnVisibleAutocompletar=true;
						//	guarda el input del autocompletar actual;
						if(_objetoInputAutocompletarActual) { _objetoInputAutocompletarAnterior=_objetoInputAutocompletarActual; }
						//	guarda el input del autocompletar actual;
						_objetoInputAutocompletarActual=this;
					}
				//	Cuando se quita el foco
				oInput_.onblur=
					function()
					{
						//	Guarda el objeto que consultara en 500ms para desaparecer
						_objetoInputAutocompletarAnterior=_objetoInputAutocompletarActual;
						//	Borra el autocompletar que ahora esta visible
						this.desaparecerAutocompletar_=
							function()
							{
								_objetoInputAutocompletarAnterior.desaparecerAutocompletar();
							}
						//	Desaparece el autocompletar
						window.setTimeout(this.desaparecerAutocompletar_,500);
					};
				//	Desaparece el autocompletar
				oInput_.desaparecerAutocompletar=
					function()
					{
						//	Coloca visible el autocompletar
						if(this.bnVisibleAutocompletar)
						{
//	ALERT
//	Cambiar el id por algo que lo coloque sin este
							document.getElementById('iDondeEstaraTEmporalmeneElAutocompletar').innerHTML='';//removeChild(this.objetoAutocompletar);
							//	true, si esta activado el autocompletar en este objeto
							this.bnVisibleAutocompletar=false;
							//	objeto con el autocompletar anteriormente activo
							_objetoInputAutocompletarAnterior=this;
						}
					};
				//	Coloca los campos del autocompletar
				oInput_.valoresSelect=campo_ESt.valoresSelect;
				//	Retorna el objeto
				return oInput_;
			break;
		
		//	En caso de no tener tipo solo coloca el contenido
		default:
				//	Crea el div donde estara el 
				var oDiv_=document.createElement('div');
				//	Coloca el famoso ID, en caso de no ser parte de una tabla
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
//	objeto con el autocompletar activo
var _objetoInputAutocompletarActual;
//	objeto con el autocompletar anteriormente activo
var _objetoInputAutocompletarAnterior;
//	Crea el autocompletar debajo del objeto indicado
function crearAutocompletar_ESt(oInput_ESt)
{
	//	Pasamos los valores a una variable temporal para ser usados
	var ancho_ESt=oInput_ESt.ancho;
	var valoresSelect_ESt=oInput_ESt.campo_ESt.valoresSelect;
	var valoresReales_ESt=oInput_ESt.campo_ESt.valoresReales;
	if(oInput_ESt.campo_ESt.funcionPorSelect) { var funcionPorSelect_ESt=oInput_ESt.campo_ESt.funcionPorSelect; }
	if(oInput_ESt.campo_ESt.funcionAlSeleccionar) { var funcionAlSeleccionar_ESt=oInput_ESt.campo_ESt.funcionAlSeleccionar; }
	
	if(oInput_ESt.campo_ESt.alineacion)
	{ alineacionDelTexto_=oInput_ESt.campo_ESt.alineacion; } else { alineacionDelTexto_='left'; }
	
	
	if(oInput_ESt.campo_ESt.colores)
	{
		if(oInput_ESt.campo_ESt.colores.background_select) { var colores_background_select=oInput_ESt.campo_ESt.colores.background_select; }
		if(oInput_ESt.campo_ESt.colores.texto_select) { var colores_texto_select=oInput_ESt.campo_ESt.colores.texto_select; }
		if(oInput_ESt.campo_ESt.colores.background_selected) { var colores_background_selected=oInput_ESt.campo_ESt.colores.background_selected; }
		if(oInput_ESt.campo_ESt.colores.texto_selected) { var colores_texto_selected=oInput_ESt.campo_ESt.colores.texto_selected; }
	}
	else
	{
		//	var colores_background_select=oInput_ESt.campo_ESt.colores.background_select;
		//	var colores_texto_select=oInput_ESt.campo_ESt.colores.texto_select;
		//	var colores_background_selected=oInput_ESt.campo_ESt.colores.background_selected;
		//	var colores_texto_selected=oInput_ESt.campo_ESt.colores.texto_selected;
	}
	
	//	Crea el div donde esta el 
	var oDivPrincipalAutocompletar_ESt=document.createElement('div');
	
	//	Pasa por cada uno de los seleccionables
	for(var contValoresSelect=0;contValoresSelect<valoresSelect_ESt.length;contValoresSelect++)
	{
		//	Valor visible al señeccionar
		var valorSelect_ESt=valoresSelect_ESt[contValoresSelect];
		//	Valor real no mostrado
		var valorReal_ESt=valoresReales_ESt[contValoresSelect];
		
		//	Verificamos si este tiene el valor parecido al que se esta escribiendo
		var bnMostrarEsteValorReal=true;
		//	Mira si existe el valor a comparar con este
		if(oInput_ESt.valoresDelAutocompletar.valorBuscador)
		{
			//	Mira si tienen algo de similar entre los dos
			if(!(valorReal_ESt.toUpperCase().match(oInput_ESt.valoresDelAutocompletar.valorBuscador.toUpperCase())))
			{
				//	Si no se parece no lo anota
				var bnMostrarEsteValorReal=false;
			}
		}
		//	Si se acepta que se creee este valor como real
		if(bnMostrarEsteValorReal)
		{
			//	Crea el div donde estara uno de los autocompletar
			var oDivPrDivAutocompletar_ESt=document.createElement('div');
			//	oDivPrincipalAutocompletar_ESt_ <- oDivPrDivAurocompletar_ESt_
			oDivPrincipalAutocompletar_ESt.appendChild(oDivPrDivAutocompletar_ESt);
			
			//	Colocamos el nombre de la clase
			oDivPrDivAutocompletar_ESt.className='cDivDivAutocompletar_ESt';
			
			//	Colocamos la alineacion del texto
			oDivPrincipalAutocompletar_ESt.style.textAlign=alineacionDelTexto_;
			
			//	Agregamos el ancho del autocompletar
			oDivPrincipalAutocompletar_ESt.style.width=oInput_ESt.ancho+'px';
			
			//	Agregamos el input al que corresponde este autocompletar
			oDivPrDivAutocompletar_ESt.oInput_ESt=oInput_ESt;
			
			//	Los valores del select
			oDivPrDivAutocompletar_ESt.valorSelect=valorSelect_ESt;
			oDivPrDivAutocompletar_ESt.valorReal=valorReal_ESt;
			//	Al hacer click
			oDivPrDivAutocompletar_ESt.onclick=
				function()
				{
					//	Colocamos el valor real
					this.oInput_ESt.valorReal=this.valorReal;
					//	Colocamos el valor visible
					this.oInput_ESt.value=this.valorSelect;
					//	Al seleccionar desaperece el autocompletar
					this.oInput_ESt.desaparecerAutocompletar();
				};
			//	Colocamos el contenido del select
			oDivPrDivAutocompletar_ESt.innerHTML=valorSelect_ESt;
		}
	}
	//	Retorna el objeto a crear el autocompletar
	return oDivPrincipalAutocompletar_ESt;
}
//	Objeto tabla
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
		switch(objetoCampo_ESt.campo_ESt.queSon)
		{
			case 'texto':
				//	Guardamos el nuevo valor real
				objetoCampo_ESt.valorReal=valorDelCampo;
				//	Colocamos lo que debe verse
				objetoCampo_ESt.innerHTML=mascaraInput_ESt(objetoCampo_ESt.campo_ESt.tipo,valorDelCampo);
				break;
			case 'input':
			case 'select':
				//	Guardamos el nuevo valor real
				objetoCampo_ESt.valorReal=valorDelCampo;
				//	Colocamos lo que debe veres
				objetoCampo_ESt.value=mascaraInput_ESt(objetoCampo_ESt.campo_ESt.tipo,valorDelCampo);
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
/***********************
Autocompletar {
*/



/*
} Autocompletar
***********************/