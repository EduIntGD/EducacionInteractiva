	/**
	Globales
	************************************/
	
	//	variables usada para personas que hablan español
	verdadero=true;
	
	//	12 <- redondear_ESt(12.245,0);
	//	12.2 <- redondear_ESt(12.245,1);
	//	12.23 <- redondear_ESt(12.245,2);
	function redondear_ESt(valor_ESt,decimales_ESt)
	{
		var myDecimales_ESt = Math.pow(10,decimales_ESt);
		return Math.round(valor_ESt*myDecimales_ESt)/myDecimales_ESt;
	}
	
	//	12.343.345.38 <- 12343345.3789
	function numeroTipoMoneda_ESt(numero_MyR,numeroDecimales_ESt)
	{
		if(numeroDecimales_ESt==undefined) { numeroDecimales_ESt=2; }
		numero_MyR = redondear_ESt(numero_MyR,numeroDecimales_ESt);
		var stNumero_MyR=numero_MyR.toString();
		var valor_MyR=stNumero_MyR.split(".");
		if(valor_MyR[0]==undefined) valor_MyR[0]=0;
		if(valor_MyR[1]==undefined)
		{
			var pesitos_MyR='';
			for(contDecimales=0;contDecimales<numeroDecimales_ESt;contDecimales++)
			{
				pesitos_MyR=pesitos_MyR+'0';
			}
		}
		else
		{
			valor_MyR[1]=valor_MyR[1];
			var pesitos_MyR=redondear_ESt(valor_MyR[1],numeroDecimales_ESt).toString();
			while(pesitos_MyR.length<numeroDecimales_ESt) { pesitos_MyR=pesitos_MyR+'0'; }
		}
		var arNumero_MyR='';
		var tempNumero_MyR;
		while(valor_MyR[0].length>3)
		{
			tempNumero_MyR=valor_MyR[0].substr(valor_MyR[0].length-3,valor_MyR[0].length);
			if(arNumero_MyR=='') arNumero_MyR="."+tempNumero_MyR;
			else                 arNumero_MyR="."+tempNumero_MyR+arNumero_MyR;
			valor_MyR[0]=valor_MyR[0].substr(0,valor_MyR[0].length-3);
		}
		if(0<numeroDecimales_ESt)
		{ arNumero_MyR=valor_MyR[0]+arNumero_MyR+","+pesitos_MyR; }
		else
		{ arNumero_MyR=valor_MyR[0]+arNumero_MyR; }
		return arNumero_MyR;
	}
	
	//	Se asegura de que un codigo solo retorne true una sola vez
	var _arSolUnaVezLanzTruePrCod_ESt=new Array();
	//	Solo una vez lanza true por codigo, todas las demas false
	function bnCodigoNoUsado_ESt(codigo_ESt)
	{ if(_arSolUnaVezLanzTruePrCod_ESt[codigo_ESt]==undefined) {
	_arSolUnaVezLanzTruePrCod_ESt[codigo_ESt]=true; return true;
	} else { return false; } }
	
	
	//	Clona un objeto
	function cloneObject_ESt(obj_ESt) {
	if(null==obj_ESt || 'object'!=typeof obj_ESt) { return obj_ESt; } 
	var copy = obj_ESt.constructor(); for (var attr in obj_ESt) {
	if(obj_ESt.hasOwnProperty(attr)) copy[attr]= obj_ESt[attr]; }
	return copy; }
	
	
//	BORRAR
//	+-> Si no se usa
	//	Carga un archivo y lo lee
	function CargarArchivoCodigoLienzo_ESt(archivo,funcionAlCargar,noLienzo)
	{
		var xmlhttp;
		if (window.XMLHttpRequest)
		{	// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else
		{	// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlhttp.noLienzo=noLienzo;
		xmlhttp.funcionAlCargar=funcionAlCargar;
		xmlhttp.onreadystatechange=
			function()
			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					this.funcionAlCargar(xmlhttp.responseText,noLienzo);
				}
			}
		xmlhttp.open("GET",archivo,true);
		xmlhttp.send();
	}
	
	function ReplaceAll_ESt(aCambiar_MyR,aColocar,valor_MyR)
	{
		while(0<=valor_MyR.indexOf(aCambiar_MyR))
		{ valor_MyR=valor_MyR.replace(aCambiar_MyR,'¬'); }
		while(0<=valor_MyR.indexOf('¬'))
		{ valor_MyR=valor_MyR.replace('¬',aColocar); }
		return valor_MyR;
	}
	//	Cuando se tienen objetos estaticos el saca una vez la posicion, y el resto
	//	de veces solo lo carga de estas variables
	var _arPosicionesEnXObjetosEstaticos=new Array();
	var _arPosicionesEnYObjetosEstaticos=new Array();
	//	Funcion original creada por:
	//	Peter-Paul Koch y Alex Tingle.
	function objetoPosX_ESt(obj_MyR)
	{
		var curleft = 0; if(obj_MyR.offsetParent) while(1) { curleft += obj_MyR.offsetLeft;
		if(!obj_MyR.offsetParent) break; obj_MyR = obj_MyR.offsetParent; } else if(obj_MyR.x) curleft += obj_MyR.x;
		return curleft;
	}
	function findPosX_ESt(id_ESt,bnObjetoEstatico_ESt)
	{
		if(!bnObjetoEstatico_ESt) { bnObjetoEstatico_ESt=false; }
		
		if(bnObjetoEstatico_ESt)
		{ return _arPosicionesEnXObjetosEstaticos[id_ESt]; }
		else
		{
			var obj_MyR = document.getElementById(id_ESt);
			curleft=objetoPosX_ESt(obj_MyR);
			_arPosicionesEnXObjetosEstaticos[id_ESt]=curleft;
			return curleft;
		}
	}
	function objetoPosY_ESt(obj_MyR)
	{
		var curtop = 0; if(obj_MyR.offsetParent) while(1) { curtop += obj_MyR.offsetTop;
		if(!obj_MyR.offsetParent) break; obj_MyR = obj_MyR.offsetParent; } else if(obj_MyR.y) curtop += obj_MyR.y;
		return curtop; 
	}
	function findPosY_ESt(id_ESt,bnObjetoEstatico_ESt)
	{	
		if(!bnObjetoEstatico_ESt) { bnObjetoEstatico_ESt=false; }
		
		if(bnObjetoEstatico_ESt)
		{
			return _arPosicionesEnYObjetosEstaticos[id_ESt];
		}
		else
		{
			var obj_MyR=document.getElementById(id_ESt);
			curtop=objetoPosY_ESt(obj_MyR);
			_arPosicionesEnYObjetosEstaticos[id_ESt]=curtop;
			return curtop;
		}
	}
	function bnNumero_ESt(numero_ESt)
	{
		return !isNaN(numero_ESt%1);
	}
	
	function AgregarDatosSeparado_see(valor_MyR,separador_MyR,datosSeparados_MyR)
	{
		if(datosSeparados_MyR==undefined) { datosSeparados_MyR=""; }
		//	Mira si no existen datos antes
		var bnExtDatosAntes = false;
		if(datosSeparados_MyR!="") { var bnExtDatosAntes=true; }
		
		var arDatosSeparados_MyR = new Array();
		arDatosSeparados_MyR=datosSeparados_MyR.split(separador_MyR);
		//	Se vuelve true si el dato ya estaba antes
		var bnDatoRepetido = false;
		//	Pasa por cada numero y mira si el valor a agregar esta repetido, si no lo agrega
		for(var contDatosSeprds_MyR=0;contDatosSeprds_MyR<arDatosSeparados_MyR.length;contDatosSeprds_MyR++)
		{
			if(arDatosSeparados_MyR[contDatosSeprds_MyR]==valor_MyR)
			{
				bnDatoRepetido = true;
			}
		}
		
		//	Si ta esta el dato, no lo agrega, devuelce lo que esta antes
		if(bnDatoRepetido)
		{
			return datosSeparados_MyR;
		}
		else
		{
			//	Si no existe lo agrega
			if(bnExtDatosAntes)
			{
				return datosSeparados_MyR=datosSeparados_MyR+separador_MyR+valor_MyR;
			}
			else
			{
				return datosSeparados_MyR=valor_MyR;
			}
		}
	}
	
	function QuitarDatosSeparado_see(valor_MyR,separador_MyR,datosSeparados_MyR)
	{
		if(datosSeparados_MyR==undefined) { datosSeparados_MyR=""; }
		//	Mira si no existen datos antes
		var bnExtDatosAntes = false;
		if(datosSeparados_MyR!="") { var bnExtDatosAntes=true; }
		
		var arDatosSeparados_MyR = new Array();
		arDatosSeparados_MyR=datosSeparados_MyR.split(separador_MyR);
		
		var returnDatosSeparados_MyR = "";
		//	Se vuelve true si el dato ya estaba antes
		var bnDatoRepetido = false;
		//	true, si es la primera vez que pasa por el true
		var bnPrimeraVezEnFor_MyR=true;
		//	Pasa por cada numero y mira si el valor a agregar esta repetido, si no lo agrega
		for(var contDatosSeprds_MyR=0;contDatosSeprds_MyR<arDatosSeparados_MyR.length;contDatosSeprds_MyR++)
		{
			if(arDatosSeparados_MyR[contDatosSeprds_MyR]!=valor_MyR)
			{
				if(!bnPrimeraVezEnFor_MyR) { returnDatosSeparados_MyR=returnDatosSeparados_MyR+separador_MyR; }
				
				returnDatosSeparados_MyR=returnDatosSeparados_MyR+arDatosSeparados_MyR[contDatosSeprds_MyR];
				bnDatoRepetido = true;
				
				bnPrimeraVezEnFor_MyR=false;
			}
		}
		
		if(bnDatoRepetido)
		{
			return returnDatosSeparados_MyR;
		}
		else
		{
			return returnDatosSeparados_MyR;
		}
	}
	
	function Filtro_ESt(objeto,arExistePropiedad)
	{
		//	Tiene que ser un input
		if(objeto.getQueEs()=='input')
		{
			//	Si es tipo nombre se le aplica el filtro
			if(objeto.getTipo()=='nombre')
			{
				//	Miramos si existe o no una mascara
				if(arExistePropiedad['mascara'])
				{
					
				}
				//	Si no tiene mascara
				else
				{
					objeto.setValor(TipoNombre_ESt(objeto.getValor()));
				}
			}
		}
	}
	
	//	Filtro tipo nombre
	function TipoNombre_ESt(nombre_MyR)
	{
		nombre_MyR=Trim_ESt(nombre_MyR);
		var arNombre_MyR=nombre_MyR.split(" ");
		var noArNombre_MyR=arNombre_MyR.length;
		for(var contArNombre=0;contArNombre<noArNombre_MyR;contArNombre++)
		{
			if(0<arNombre_MyR[contArNombre].length)
			{
				arNombre_MyR[contArNombre]=arNombre_MyR[contArNombre].substr(0,1).toUpperCase()+arNombre_MyR[contArNombre].substr(1,arNombre_MyR[contArNombre].length).toLowerCase();
			}
			else
			{
				arNombre_MyR[contArNombre]=arNombre_MyR[contArNombre].toUpperCase();
			}
		}
		return arNombre_MyR.join(" ");
	}
	
	function Trim_ESt(valor_MyR)
	{
		while(0<=valor_MyR.indexOf("  "))
		{
			valor_MyR=valor_MyR.replace("  "," ");
		}
		var valorLength_MyR=valor_MyR.length;
		if(valor_MyR.substr(valorLength_MyR-1,valorLength_MyR)==" ")
		{
			valor_MyR=valor_MyR.substr(0,valorLength_MyR-1);
		}
		if(valor_MyR.substr(0,1)==" ")
		{
			valor_MyR=valor_MyR.substr(1,valorLength_MyR);
		}
		return valor_MyR;
	}
	
	/**
	Manejo de lo bonito del codigo :P
	************************************/
	
	//	id de la sombra dode donde se crean los bojetos
	_idSombreDeCrearObjetos_LugarDelCodigo_ESt='LienzoDeCreacion__iSombraTextAreaCrearObjetos_LugarDelCodigoJS_ESt';
	//	id de donde se crean los objetos
	_idCrearObjetos_LugarDelCodigo_ESt='LienzoDeCreacion__iTextAreaCrearObjetos_LugarDelCodigoJS_ESt';
	
	//	id de la sombra dode donde se crean los bojetos
	_idSombreDeAnimacion_LugarDelCodigo_ESt='LienzoDeCreacion__iSombraTextAreaAnimacion_LugarDelCodigoJS_ESt';
	//	id de donde se crean los objetos
	_idAnimacion_LugarDelCodigo_ESt='LienzoDeCreacion__iTextAreaAnimacion_LugarDelCodigoJS_ESt';
	
	//	Inicia todas las variables y objetos necesarios para el Lugar del codigo
	function iniciarVariablesDeLugarDelCodigo_ESt()
	{
		//	Donde el codigo bien bonito con colores
		_oSombreDeCrearObjetos_LugarDelCodigo_ESt=document.getElementById(_idSombreDeCrearObjetos_LugarDelCodigo_ESt);
		//	Donde ira el objeto como tal
		_oCrearObjetos_LugarDelCodigo_ESt=document.getElementById(_idCrearObjetos_LugarDelCodigo_ESt);
		//	Dondeira el objeto como tal
		_oSombreDeAnimacion_LugarDelCodigo_ESt=document.getElementById(_idSombreDeAnimacion_LugarDelCodigo_ESt);
		//	Donde ira el objeto como tal
		_oAnimacion_LugarDelCodigo_ESt=document.getElementById(_idAnimacion_LugarDelCodigo_ESt);
	}
	
	//	Se encarga de manejar todo el texto
	function manejoDelCodigoCrearObjetos_ESt()
	{
		filtrarCodigoDeRealASombra_ESt('CrearObjetos');
		colocarElTextAreaSobreSombra_ESt('CrearObjetos');
	}
	
	//	Se encarga de manejar todo el texto
	function manejoDelCodigoAnimacion_ESt()
	{
		filtrarCodigoDeRealASombra_ESt('Animacion');
		colocarElTextAreaSobreSombra_ESt('Animacion');
	}
	
	function filtrarCodigoDeRealASombra_ESt(nombreDelCodigo)
	{
		switch(nombreDelCodigo)
		{
			case 'CrearObjetos':
				_oSombreDeCrearObjetos_LugarDelCodigo_ESt.innerHTML=pasarDeCodigoAColor_ESt(_oCrearObjetos_LugarDelCodigo_ESt.value);
				break;
			case 'Animacion':
				_oSombreDeAnimacion_LugarDelCodigo_ESt.innerHTML=pasarDeCodigoAColor_ESt(_oAnimacion_LugarDelCodigo_ESt.value);
				break;
			case 'Cero':
				
				break;
		}
	}
	
	function colocarElTextAreaSobreSombra_ESt(nombreDelCodigo)
	{
		switch(nombreDelCodigo)
		{
			case 'CrearObjetos':
				//	_oCrearObjetos_LugarDelCodigo_ESt.style.left=objetoPosX_ESt(_oSombreDeCrearObjetos_LugarDelCodigo_ESt)+'px';
				_oCrearObjetos_LugarDelCodigo_ESt.style.top=-_oSombreDeCrearObjetos_LugarDelCodigo_ESt.offsetHeight+'px';
				_oCrearObjetos_LugarDelCodigo_ESt.style.height=_oSombreDeCrearObjetos_LugarDelCodigo_ESt.offsetHeight+'px';
				break;
			case 'Animacion':
				_oAnimacion_LugarDelCodigo_ESt.style.top=-_oSombreDeAnimacion_LugarDelCodigo_ESt.offsetHeight+'px';
				_oAnimacion_LugarDelCodigo_ESt.style.height=_oSombreDeAnimacion_LugarDelCodigo_ESt.offsetHeight+'px';
				break;
			case 'Cero':
				
				break;
		}
	}
	
	//	Verifica cual de los valores del arreglo[arDeElementos_ESt] esta mas cercano al origen
	//	0 <- cualEsElElementoMasCercano_ESt('abc',['a','b','c']);
	//	2 <- cualEsElElementoMasCercano_ESt('abc',['b','c','a']);
	//	1 <- cualEsElElementoMasCercano_ESt('abc',['c','a','b']);
	function cualEsElElementoMasCercano_ESt(valor_ESt,arDeElementos_ESt)
	{
		//	true, si encuentra alguno de los caracteres
		var bnEncntroAlgnLgrDndNSeTndrEnCuent_ESt=false;
		//	Retorna el lugar en el arreglo deonde esta el elemento mas cercano, pero si no encuentra devuelve -1
		var noDeLugaresDondeNoSeTendreEnCuenta_ESt=-1;
		//	Contenera la posicion mas sercana de los caracteres dentro de los cuales no se actua
		var posicionMasCercana=valor_ESt.length;
		//	Busca cual de los caracteres a no mostrar esta mas cercano
		for(var contDeLugaresDondeNoSeTendreEnCuenta=0;contDeLugaresDondeNoSeTendreEnCuenta<arDeElementos_ESt.length;contDeLugaresDondeNoSeTendreEnCuenta++)
		{
			//	Posicion mas cercana
			var posicionMasCercana_=valor_ESt.indexOf(arDeElementos_ESt[contDeLugaresDondeNoSeTendreEnCuenta]);
			//	Posicion mas cercana
			if(posicionMasCercana_<posicionMasCercana && posicionMasCercana_!=-1)
			{
				posicionMasCercana=posicionMasCercana_;
				//	Encontro algun lugar donde no se tendra en cuenta el contenido
				var bnEncntroAlgnLgrDndNSeTndrEnCuent_ESt=true;
				//	No del lugar donde se trendra en cuenta
				var noDeLugaresDondeNoSeTendreEnCuenta_ESt=contDeLugaresDondeNoSeTendreEnCuenta;
			}
		}
		return noDeLugaresDondeNoSeTendreEnCuenta_ESt;
	}
	
	//	Divizor de palabras, la idea es colocar uno antes y despues de cada cosa que divide una palabra,
	//	como un espacio o un parentesis
	var _DivisorDePalabras='¨';
	//	se encarga de pasar de un codigo div a otro sin problemas
	function pasarDeCodigoAColor_ESt(valor_ESt)
	{
		/**	pasarDeCodigoAColor_ESt("o('pedro').setPosicionEnX(12);"); **/
		
		//	Coloca un divizor al comienzo y al final
		var valor_ESt_=valor_ESt;
		
		//	Es un arreglo que tiene cosas como las comillas donde lo que este dentro no se tendra en cuenta
		var arIniDeLugaresDondeNoSeTendreEnCuenta=['"',"'"];
		var arFinDeLugaresDondeNoSeTendreEnCuenta=['"',"'"];
		
		//	Dividira el contenido en tres partes, antes de las primeras comillas
		//	dentro de las comillas, y por ultimo despues de las primeras comillas
		//	Esto con el fin de poder cambiar lo que esta dentro de ellas y colocarlo despues
		var stAntesComillas_ESt='';
		var stEntreComillas_ESt='';
		var stDespsComillas_ESt='';
		
		//	Busca cual es el elemento mas cercano al origen para continuar
		var noPosicionDelElementoMasCercano=cualEsElElementoMasCercano_ESt(valor_ESt_,arIniDeLugaresDondeNoSeTendreEnCuenta);
		//	Arreglo que contiene lo que esta dentro de las comillas
		var arDentroDeLasComillas=new Array();
		//	Solo entra si encuentra algun tipo de comill
		if(noPosicionDelElementoMasCercano!=-1)
		{
			//	Contendra la posición mas cercana de los caracteres dentro de los cuales no se actua
			var posicionMasCercana=valor_ESt_.indexOf(arIniDeLugaresDondeNoSeTendreEnCuenta[noPosicionDelElementoMasCercano]);
			//	TipoDeCaracterANoTenerEnCuenta, que esta mas cercano al comienzo
			var crtrIniConContenidoANoTenerEnCuenta=arIniDeLugaresDondeNoSeTendreEnCuenta[noPosicionDelElementoMasCercano];
			var crtrFinConContenidoANoTenerEnCuenta=arFinDeLugaresDondeNoSeTendreEnCuenta[noPosicionDelElementoMasCercano];
			
	//	BORRAR
			//	Estrara en true si existe por lo menos una comilla
			var bnExistPorLoMensUnaComilla_ESt=false;
			//	Posicion inicial de la primera comilla
			var posIniComilla_ESt=valor_ESt_.indexOf(crtrIniConContenidoANoTenerEnCuenta);
			//	Arreglo que contiene si las comillas finalizaron o no
			var arBnLasComillasFinalizaron=new Array();
			//	Arreglo que contiene el tipo de inicio y fin del contenido a no tener encuenta
			var arIniContenidoANoTenerEnCuenta=new Array();
			var arFinContenidoANoTenerEnCuenta=new Array();
			//	 Texto unico que remplazara las comillas
			var textoParaRemplazarContenidoDeComillas_ESt='EduSoftEntreComillasTemp';
			//	Mira que exista la primera posicion de la comilla
			for(var contValoresDentroDeComillas=0;posIniComilla_ESt!=-1;contValoresDentroDeComillas++)
			{
				//	Mira si existe por lo menos una comilla
				var bnExistPorLoMensUnaComilla_ESt=true;
				
				//	Coloca todo el contenido antes de la primera comilla
				var stAntesComillas_ESt=valor_ESt_.substr(0,posIniComilla_ESt);
				//	Coloca todo el conteido despues de la primera comilla(Tambien la segunda y demas)
				var stDesPrimComil_ESt=valor_ESt_.substr(posIniComilla_ESt+1,valor_ESt_.length);
				
				//	Cambia lo que esta dentro de las comillas por un caracter unico
				var nuevoStEntreComillas_ESt=_DivisorDePalabras+textoParaRemplazarContenidoDeComillas_ESt+contValoresDentroDeComillas+_DivisorDePalabras;
				//	Busca el final de la segunda comilla
				var posFinComilla_ESt=stDesPrimComil_ESt.indexOf(crtrFinConContenidoANoTenerEnCuenta);
				//	Si existe esta comilla que cierra la primera entra
				if(posFinComilla_ESt!=-1)
				{
					//	Coloca lo que en medio de las comillas
					stEntreComillas_ESt=stDesPrimComil_ESt.substr(0,posFinComilla_ESt);
					//	Guarda el contenido dentro de las comillas
					arDentroDeLasComillas[contValoresDentroDeComillas]=stEntreComillas_ESt;
					//	Coloca todo lo que existe despues de las comillas que cierran
					stDespsComillas_ESt=stDesPrimComil_ESt.substr(posFinComilla_ESt+1,stDesPrimComil_ESt.length);
					//	Guarda los caracteres iniciales y finales a no tener en cuenta
					arIniContenidoANoTenerEnCuenta[contValoresDentroDeComillas]=crtrIniConContenidoANoTenerEnCuenta;
					arFinContenidoANoTenerEnCuenta[contValoresDentroDeComillas]=crtrFinConContenidoANoTenerEnCuenta;
					//	Cambia los resultados cambiando el contenodo de las comillas
					valor_ESt_=stAntesComillas_ESt+nuevoStEntreComillas_ESt+stDespsComillas_ESt;
					//	
					arBnLasComillasFinalizaron[contValoresDentroDeComillas]=true;
				}
				else
				{
					//	SE DEBE INFORMAR DE QUE UNA COMILLA NO CIERRA
					
					//	Guarda el contenido dentro de las comillas
					arDentroDeLasComillas[contValoresDentroDeComillas]=stDesPrimComil_ESt;
					//	Coloca el resultado sin el cierre de comillas
					valor_ESt_=stAntesComillas_ESt+nuevoStEntreComillas_ESt;
					//	Guarda los caracteres iniciales y finales a no tener en cuenta
					arIniContenidoANoTenerEnCuenta[contValoresDentroDeComillas]=crtrIniConContenidoANoTenerEnCuenta;
					//	Si las comillas no finalizaron
					arBnLasComillasFinalizaron[contValoresDentroDeComillas]=false;
					//	Sale de manera preventiva
					break;
				}
				
				//	Busca cual es el elemento mas cercano al origen para continuar
				var noPosicionDelElementoMasCercano=cualEsElElementoMasCercano_ESt(valor_ESt_,arIniDeLugaresDondeNoSeTendreEnCuenta);
				//	Solo entra si encuentra algun tipo de comill
				if(noPosicionDelElementoMasCercano!=-1)
				{
					//	Contendra la posición mas cercana de los caracteres dentro de los cuales no se actua
					var posicionMasCercana=valor_ESt_.indexOf(arIniDeLugaresDondeNoSeTendreEnCuenta[noPosicionDelElementoMasCercano]);
					//	TipoDeCaracterANoTenerEnCuenta, que esta mas cercano al comienzo
					var crtrIniConContenidoANoTenerEnCuenta=arIniDeLugaresDondeNoSeTendreEnCuenta[noPosicionDelElementoMasCercano];
					var crtrFinConContenidoANoTenerEnCuenta=arFinDeLugaresDondeNoSeTendreEnCuenta[noPosicionDelElementoMasCercano];
				}
				//	Busca la siguiente comilla
				posIniComilla_ESt=valor_ESt_.indexOf(crtrIniConContenidoANoTenerEnCuenta);
			}
			/**	"o(LasComillasSeRemplazanPorTextosUnicos).setPosicionEnX(12);" **/
		}
		
		//	Colocamos un divizor al comienzo y final de las palabras
		var valor_ESt_=_DivisorDePalabras+valor_ESt_+_DivisorDePalabras;
		/**	"%o(LasComillasSeRemplazanPorTextosUnicos).setPosicionEnX(12);%" **/
		
		//	Estas son las palabras que tipicamente dividen una palabra de otra
		//	Estas son las palabras que tipicamente dividen una palabra de otra
		var arPalabrasQueSimbolisanElFinDeUnaPlabra=[' ','(',')','[',']','+',';','.','\r','\n',',','='];
		//	Pasa por cada una de estas y le coloca antes y despues de las mismas un '[%]' de tal manera que divida estas palabras
		for(contPalabrasQSEFDUP=0;contPalabrasQSEFDUP<arPalabrasQueSimbolisanElFinDeUnaPlabra.length;contPalabrasQSEFDUP++)
		{
			var valor_ESt_=ReplaceAll_ESt(arPalabrasQueSimbolisanElFinDeUnaPlabra[contPalabrasQSEFDUP],_DivisorDePalabras+arPalabrasQueSimbolisanElFinDeUnaPlabra[contPalabrasQSEFDUP]+_DivisorDePalabras,valor_ESt_);
		}
		/**	"%o%(%LasComillasSeRemplazanPorTextosUnicos%)%%.%posicionEnX%(%12%)%;" **/
		
		//	Las funciones tipicas
		var arPalabrasQueSimbolisanFunciones=
		[
		'o',
		'posicionEnX',
		'posicionEnY',
		'posicion',
		'mover',
		'moverEnX',
		'moverEnY',
		'enSegundos',
		'enSegundo',
		'enSegundos',
		'colorObjeto',
		'formaRectangulo',
		'formaCirculo',
		'objetoSobreEste',
		'esCursorEncimaDeEste',
		'consola',
		'eje',
		'es',
		'tipo',
		'valor'
		];
		//	Pasa por cada una de las funciones y le coloca en un span dandole color
		for(contPalabrasQueSimbolisanFunciones=0;contPalabrasQueSimbolisanFunciones<arPalabrasQueSimbolisanFunciones.length;contPalabrasQueSimbolisanFunciones++)
		{
			var valor_ESt_=ReplaceAll_ESt(_DivisorDePalabras+arPalabrasQueSimbolisanFunciones[contPalabrasQueSimbolisanFunciones]+_DivisorDePalabras,_DivisorDePalabras+'<span fnc="ESt" >'+arPalabrasQueSimbolisanFunciones[contPalabrasQueSimbolisanFunciones]+'</span>'+_DivisorDePalabras,valor_ESt_);
		}
		/**	"%<span .. >o</span>%(%LasComillasSeRemplazanPorTextosUnicos%)%%.%<span .. >posicionEnX</span>%(%12%)%;" **/
		
		//	palabras clave tipicas
		var arPalabrasClaves_ESt=
		[
		'if',
		'else',
		'for',
		'where',
		'switch',
		'var',
		'new'
		];
		//	Pasa por cada una de las funciones y le coloca en un span dandole color
		for(contPalabrasQueSimbolisanFunciones=0;contPalabrasQueSimbolisanFunciones<arPalabrasClaves_ESt.length;contPalabrasQueSimbolisanFunciones++)
		{
			var valor_ESt_=ReplaceAll_ESt(_DivisorDePalabras+arPalabrasClaves_ESt[contPalabrasQueSimbolisanFunciones]+_DivisorDePalabras,_DivisorDePalabras+'<span palclv="ESt" >'+arPalabrasClaves_ESt[contPalabrasQueSimbolisanFunciones]+'</span>'+_DivisorDePalabras,valor_ESt_);
		}
		/**	"%<span .. >o</span>%(%LasComillasSeRemplazanPorTextosUnicos%)%%.%<span .. >posicionEnX</span>%(%12%)%;" **/
		
		//	Colocarle color a los puntos claves
		var valor_ESt_=ReplaceAll_ESt(_DivisorDePalabras+'('+_DivisorDePalabras,_DivisorDePalabras+'<span prntesis="ESt">(</span>'+_DivisorDePalabras,valor_ESt_);
		var valor_ESt_=ReplaceAll_ESt(_DivisorDePalabras+')'+_DivisorDePalabras,_DivisorDePalabras+'<span prntesis="ESt">)</span>'+_DivisorDePalabras,valor_ESt_);
		var valor_ESt_=ReplaceAll_ESt(_DivisorDePalabras+';'+_DivisorDePalabras,_DivisorDePalabras+'<span pntoycom="ESt">;</span>'+_DivisorDePalabras,valor_ESt_);
		/**	"%<span .. >o</span>%<span .. >(</span>%LasComillasSeRemplazanPorTextosUnicos%<span .. >)</span>%%.%<span .. >posicionEnX</span>%<span .. >(</span>%12%<span .. >)</span>%;" **/
		
		//	Cambia los cambios de linea del tecto en cambios de linea HTML
		var valor_ESt_=ReplaceAll_ESt("\r"+_DivisorDePalabras+"\n",'<br/>',valor_ESt_);
		var valor_ESt_=ReplaceAll_ESt("\n",'<br/>',valor_ESt_);
		
		//	Vuelve a convertir lo que esta entre comillas pero con un span
		for(var contDentroDeLasComillas_ESt=0;contDentroDeLasComillas_ESt<arDentroDeLasComillas.length;contDentroDeLasComillas_ESt++)
		{
			valor_ESt_=valor_ESt_.replace(textoParaRemplazarContenidoDeComillas_ESt+contDentroDeLasComillas_ESt,_DivisorDePalabras+'<span cml="ESt" >'+arIniContenidoANoTenerEnCuenta[contDentroDeLasComillas_ESt]+arDentroDeLasComillas[contDentroDeLasComillas_ESt]+(arBnLasComillasFinalizaron[contDentroDeLasComillas_ESt]?arIniContenidoANoTenerEnCuenta[contDentroDeLasComillas_ESt]:'')+'</span>'+_DivisorDePalabras);
		}
		
		//	Divide el codigo por palabras para sacar los numeros y colocarle color
		arPorPalabrasValor_ESt=valor_ESt_.split(_DivisorDePalabras);
		//	Pasa por cada palabra
		for(var contPorPalabrasValor_ESt=0;contPorPalabrasValor_ESt<arPorPalabrasValor_ESt.length;contPorPalabrasValor_ESt++)
		{
			if(bnNumero_ESt(arPorPalabrasValor_ESt[contPorPalabrasValor_ESt]))
			{
				arPorPalabrasValor_ESt[contPorPalabrasValor_ESt]='<span num="ESt" >'+arPorPalabrasValor_ESt[contPorPalabrasValor_ESt]+'</span>';
			}
		}
		//	Al final quita los divizores de lapabras
		valor_ESt_=arPorPalabrasValor_ESt.join('');
		
		return valor_ESt_;
	}
	
	
	/**
	Iniciar el lienzo
	************************************/
	
	//	
	var _codigoDeCreacionParaLienzo=new Array();
	//	
	var _codigoDeAnimacionParaLienzo=new Array();
	//	Esta es la funcion necesaria para poder cargar un canvas
	function EducacionInteractivaGD(codigoUnico,ancho,alto)
	{
		//	Carga todos los parametros inciales para programar el canvas
		iniciarEduSoft_ESt(codigoUnico,ancho,alto);
		//	Guarda el codigo de creacion para este numero de lienzo
	//	_codigoDeCreacionParaLienzo[_arNumeroD,elLienzo_ESt[codigoUnico]]=getCodigo('JUsERytD','creacion');
		//	Guarda el codigo de animacion para este numero de lienzo
	//	_codigoDeAnimacionParaLienzo[_arNumeroDelLienzo_ESt[codigoUnico]]=getCodigo('JUsERytD','animacion');
//	Warning
// 	Eliminar
		//	Inicia todas las variables y objetos necesarios para el Lugar del codigo
	//	iniciarVariablesDeLugarDelCodigo_ESt();
		//	Crea las variables basicas
		EjecutarDesdeCeroLienzo_ESt(codigoUnico);
		//	Ejecuta la animacion
		EjecutarAnimacionLienzo_ESt(codigoUnico);
	}

//	Warning
//	Si no se usa favor eliminar
/*
		var _idCodigoCreacionLugarDelCanvas_ESt='iCreacionLugarDelCanvas_ESt';
		var _idCodigoAnimacionLugarDelCanvas_ESt='iAnimacionLugarDelCanvas_ESt';
		//	Regresa el codigo para su ejecución
		function getCodigo(codigoUnico,tipoCodigo)
		{
			switch(tipoCodigo)
			{
				case 'creacion':
					return '';//document.getElementById(codigoUnico+'__'+_idCodigoCreacionLugarDelCanvas_ESt).innerHTML;
					break;
				case 'animacion':
					return '';//document.getElementById(codigoUnico+'__'+_idCodigoAnimacionLugarDelCanvas_ESt).innerHTML;
					break;
			}
		}
*/	

	//	Carga todos los parametros inciales para programar el canvas
	function iniciarEduSoft_ESt(codigoUnicoLienzo_ESt,ancho_ESt,alto_ESt)
	{
		//	Es un codigo unico por cada lienzo, la idea es que carguen varios lienzos en una pagina
		if(codigoUnicoLienzo_ESt==undefined)
		{ var codigoUnicoLienzo_ESt='LienzoDeCreacion'; }
		//	Ancho y alto del lienzo
	//	var anchoLienzo_ESt=500;
	//	var altoLienzo_ESt=500;
		
		//	Iniciar variables para modificar el canvas
		//	colocarVariablesNecesariasParaCanvas_ESt(codigoUnicoLienzo_ESt,anchoLienzo_ESt,altoLienzo_ESt);
		colocarVariablesNecesariasParaCanvas_ESt(codigoUnicoLienzo_ESt);
		//	Crea el lugar done se desarrollara todo lo que es canvas
		crearLienzo_ESt(codigoUnicoLienzo_ESt,ancho_ESt,alto_ESt);
		//	Inicia el canvas sin codigo
		iniciarCanvas_ESt();
		//	Crea el rectangulo que esta alrededor del mouse
//	Warning
//	Obsoleto
		//	CrearRectanguloQueSigueElMouse_ESt();
		//	Finalizar variables para modificar el canvas
		finalizarVariablesNecesariasParaCanvas_ESt();
	}
	
		//	Variables globales necesarias para el Lienzo
		//	--------------------------------------------
		var _codigoUnicoLienzo_ESt='';
		var _anchoLienzo_ESt=0;
		var _altoLienzo_ESt=0;
		var _bnEjecutandoUnLienzo=false;
		
		//	Carga todas las variables globales necesarias para el Linezo
		function colocarVariablesNecesariasParaCanvas_ESt(codigoUnicoLienzo_ESt)
		{
			//	Es un codigo unico por cada lienzo, la idea es que carguen varios lienzos en una pagina
			if(codigoUnicoLienzo_ESt==undefined) { var codigoUnicoLienzo_ESt='JUsERytD'; }
			//	Cada lienzo maneja un codigo unico constante que va asociado a un numero unico variable
			//	que cuenta la cantidad de lienzos en la pagina(0,1,2,..)
			_codigoUnicoLienzo_ESt=codigoUnicoLienzo_ESt;
			//	Si este codigo tiene el numero del lienzo lo carga
			if(_arNumeroDelLienzo_ESt[_codigoUnicoLienzo_ESt]!==undefined)
			{
				//	Carga el numero del lienzo
				_noDelLienzo_ESt=_arNumeroDelLienzo_ESt[_codigoUnicoLienzo_ESt];
			}
			//	Si no existe la cagrara al crear el lienzo
			
			//	Si se esta ejecutando un lienzo
			_bnEjecutandoUnLienzo=true;
			//	
			//	Informa que hay variables temporales globales para el lienzo
			//	console.info('InicadasLasVariablesTemporalesGlobalesLienzo');
		}
		
		//	Finalizar variables para modificar el canvas
		function finalizarVariablesNecesariasParaCanvas_ESt()
		{
			_codigoUnicoLienzo_ESt='';
			_anchoLienzo_ESt=0;
			_altoLienzo_ESt=0;
			_noDelLienzo_ESt=NaN;
			
			//	Informa que no hay variables temporales globales para el lienzo
			//	console.info('FinalizadasLasVariablesTemporalesGlobalesLienzo');
		}
		
	//	Numero de lienzos del momento
	var _noDeLienzos_ESt=0;
	//	_arNumeroDelLienzo[CodigoUnico]=NumeroDelLienzo;
	var _arNumeroDelLienzo_ESt=new Array();
	//	_arCodigoUnicoDelLienzo_ESt[NumeroDelLienzo]=CodigoUnico;
	var _arCodigoUnicoDelLienzo_ESt=new Array();
	//	id basico en el cual crear el codigo unico
	var _idSinCodigoUnicoDelCanvas_ESt='iLugarDelCanvas_ESt';
	//	Arreglo de los Lienzos creados
	var _arODelDivDelLienzo_ESt=new Array();
	//	Crea el canvas que ira dentro del div del lienzo
	var _arOCanvas_ESt=new Array();
	//	Crea el div que ira dentro del div del lienzo
	var _arODiv_ESt=new Array();
	//	Ancho y alto de los lienzos
	var _arAnchoLienzo_ESt=new Array();
	var _arAltoLienzo_ESt=new Array();
	//	Funcion para colocar el ancho y alto al canvas
	function anchoYAltoDelLienzo_ESt(ancho_ESt,alto_ESt)
	{
		var noDelLienzo_ESt=_noDeLienzos_ESt;
		
		_arAnchoLienzo_ESt[noDelLienzo_ESt]=ancho_ESt;
		_arAltoLienzo_ESt[noDelLienzo_ESt]=alto_ESt;
	}
	//	Crea el lugar done se desarrollara todo lo que es canvas
	function crearLienzo_ESt(codigoUnico,ancho_ESt,alto_ESt)
	{
		//	Cada lienzo maneja un codigo unico constante que va asociado a un numero unico variable
		//	que cuenta la cantidad de lienzos en la pagina(0,1,2,..)
		var codigoUnicoLienzo_ESt=codigoUnico;
		//	Ancho del lienzo
		if(ancho_ESt==undefined) { var anchoLienzo_ESt=500; } else { var anchoLienzo_ESt=ancho_ESt; }
		//	Alto del lienzo
		if(alto_ESt==undefined) { var altoLienzo_ESt=500; } else { var altoLienzo_ESt=alto_ESt; }
		//	Id del lienzo donde se ibucara el canvas y lo demas del mismo
		var idDelDivDelLienzo_ESt=codigoUnicoLienzo_ESt+'__'+_idSinCodigoUnicoDelCanvas_ESt;
		//	Arreglo de los Lienzos creados
		_arODelDivDelLienzo_ESt[_noDeLienzos_ESt]=document.getElementById(idDelDivDelLienzo_ESt);
		//	Intenta crear el canvas y lo demas
		try
		{
			//	Ajustamos el ancho del div que contiene el lienzo para que no
			//	se desparrame si tiene mucho ancho
			_arODelDivDelLienzo_ESt[_noDeLienzos_ESt].style.width=(anchoLienzo_ESt+2)+'px';
			
			//	Creamos el canvas que va dentro
			//	-------------------------------
			
			//	Crea el canvas que ira dentro del div del lienzo
			_arOCanvas_ESt[_noDeLienzos_ESt]=document.createElement('canvas');
			//	divCanvas <- canvas
			_arODelDivDelLienzo_ESt[_noDeLienzos_ESt].appendChild(_arOCanvas_ESt[_noDeLienzos_ESt]);
			//	Colocamos el ancho y el alto
			_arOCanvas_ESt[_noDeLienzos_ESt].width=anchoLienzo_ESt;
			_arOCanvas_ESt[_noDeLienzos_ESt].height=altoLienzo_ESt;
			//	Colocamos el id, de acuerdo al codigoUnico
			_arOCanvas_ESt[_noDeLienzos_ESt].id=codigoUnicoLienzo_ESt+'__'+_idCanvas_ESt;
			//	Colocamos la clase, de acuerdo al codigoUnico
			_arOCanvas_ESt[_noDeLienzos_ESt].className=_classNameCanvas_ESt;
			//	Arreglo con el numero del lienzo
			_arNumeroDelLienzo_ESt[codigoUnicoLienzo_ESt]=_noDeLienzos_ESt;
			//	Arreglo con el codigo del lienzo
			_arCodigoUnicoDelLienzo_ESt[_noDeLienzos_ESt]=codigoUnicoLienzo_ESt;
			//	Carga la variable que falta cuando no se carga un lienzo que no existe
			_noDelLienzo_ESt=_arNumeroDelLienzo_ESt[codigoUnicoLienzo_ESt];
			//	Ancho del lienzo
			_arAnchoLienzo_ESt[_noDeLienzos_ESt]=anchoLienzo_ESt;
			//	Alto del lienzo
			_arAltoLienzo_ESt[_noDeLienzos_ESt]=altoLienzo_ESt;
			//	Inicia las variable para el numero de lienzo
			variablesInicialesParaUnNuevoLienzo();
			
			//	Creamos lo demas que va dentro
			//	------------------------------
			
			//	Crea el canvas que ira dentro del div del lienzo
			_arODiv_ESt[_noDeLienzos_ESt]=document.createElement('div');
			//	divCanvas <- div
			_arODelDivDelLienzo_ESt[_noDeLienzos_ESt].appendChild(_arODiv_ESt[_noDeLienzos_ESt]);
			//	Colocamos el id, de acuerdo al codigoUnico
			_arODiv_ESt[_noDeLienzos_ESt].id=codigoUnicoLienzo_ESt+'__'+_idDiv_LugarDelCanvas_ESt;
			//	Colocamos la clase, de acuerdo al codigoUnico
			_arODiv_ESt[_noDeLienzos_ESt].className=_classNameDiv_LugarDelCanvas_ESt;
			
			
			//	Colocamos las variables necesarias para los objetos del lienzo
			//	--------------------------------------------------------------
			
			//	Arreglo por numero con el nombre de las variables para el lienzo
			_arNoObjeto_ESt[_noDelLienzo_ESt]=new Array();
			//	Arreglo con los nombres de los objetos para el lienzo
			_arNombresObjetos_ESt[_noDelLienzo_ESt]=new Array();
			//	Arreglo con los objetos de este para el lienzo
			_arO_ESt[_noDelLienzo_ESt]=new Array();
			//	Numero de objetos para el lienzo
			_noObjetos_ESt[_noDelLienzo_ESt]=new Array();
			
			
			
			//	Arreglo con los objetos linea de este para el lienzo
			_arOLineas_ESt[_noDelLienzo_ESt]=new Array();
			//	Numero de objetos para el lienzo
			_noObjetosLineas_ESt[_noDelLienzo_ESt]=new Array();
			
			//	Fin de la creacion del lienzo
			//	-----------------------------
			
			//	Aumenta el numero de lienzos
			_noDeLienzos_ESt++;
			//	Retorna un true, que significa que todo salio bien
			return true;
		}
		catch(err)
		{
			//	Mensaje en caso de que no se pueda crear el cavas
			_arODelDivDelLienzo_ESt[_noDeLienzos_ESt].innerHTML='Tu navegador no soporta canvas, actualiza tu exoplorador, o intenta con chrome, explorer 9 o 10, firefox, opera, safari :)';
			//	Retorna un false :(, que significa no pudo crear el canvas y lo de adentro
			return false;
		}
	}
	
	//	Inicia las variable para el numero de lienzo
	function variablesInicialesParaUnNuevoLienzo()
	{
		//	Arreglo que retorna true si existe el objeto
		_arBnObjetos_ESt[_noDelLienzo_ESt]=new Array();
		//	Numero de objetos dentro de este lienzo
		_noObjetos_ESt[_noDelLienzo_ESt]=0;
		//	Arreglo que retorna true si existe el objeto lineaa
		_arBnObjetosLineas_ESt[_noDelLienzo_ESt]=new Array();
		//	Numero de objetos dentro de este lienzo
		_noObjetosLineas_ESt[_noDelLienzo_ESt]=0;
	}
	
//	Warning
//	Obsoleto, tiene que eliminarse, ya existe algo mejor que esto
/*
	//	true, si el rectangulo que sigue al mouse esta creado
	var _bnRectanguloQueSigueElMouse_ESt=false;
	//	Crea un rectangulo para seguir al mouse
	function CrearRectanguloQueSigueElMouse_ESt()
	{
		//	crea el rectangulo que sigue al mouse esta creado
		o('RectanguloQueSigueElMouse_ESt').formaRectangulo(-200,-300,20,20);
		//	true, si el rectangulo que sigue al mouse esta creado
		_bnRectanguloQueSigueElMouse_ESt=true;
	}
*/
	//	Id del canvas a animar
	var _idCanvas_ESt='iCanvas_LugarDelCanvas_ESt';
	//	className del canvas a animar
	var _classNameCanvas_ESt='cCanvas_LugarDelCanvas_ESt';
	//	Contexto de canvas
	var _arCtx_ESt=new Array();
	//	ancho del borde de este canvas
	var _achoBordeCanvas=1;
	//	Inicia todo lo que es canvas
	function iniciarCanvas_ESt()
	{
		//	Carga el bojeto canvas
		var oCanvas_ESt=_arOCanvas_ESt[_noDelLienzo_ESt];
		//	Colocamos la  accion cuando el mouse es soltado
		oCanvas_ESt.addEventListener('mousedown',_onMouseDown,false);
		oCanvas_ESt.addEventListener('touchstart',_onMouseDown,false);
		//	Cuando mueve el cursor este lo registra
		document.addEventListener('mousemove',_onCursorMove,false);
		oCanvas_ESt.addEventListener('touchmove',_onCursorMove,false);
		//	Cuando el cusor es retirado
		document.addEventListener('mouseup',_onCursorUp,false);
		document.addEventListener('touchend',_onCursorUp,false);
		//	Inicia los eventos de hacer click
		oCanvas_ESt.addEventListener('click',_onClick,false);
		//	Creamos el contexto necesario para poder manejarlo
		_arCtx_ESt[_noDelLienzo_ESt]=oCanvas_ESt.getContext('2d');
	}
	
	
	/**
	Funciones de la consola
	************************************/
	
	//	Id de donde esta anotando la consola
	var _iConsola_ESt='iDivConsola_LugarDelCanvas_ESt';
	//	Cuenta el numero de veces que la consola a sido iniciada y las borra a las 50
	//	Escribe dentro de la consola
	function consola(valor_ESt)
	{
		try
		{
			//	Objeto de la consola
			_oConsola_ESt=document.getElementById(_iConsola_ESt);
			//	Escribe en la consola
			_oConsola_ESt.innerHTML=valor_ESt+'<br/>'+_oConsola_ESt.innerHTML;
		}
		catch(err)
		{
			console.info(valor_ESt);
		}
	}
	
	/**
	Funciones basicas
	************************************/
	
//	IMPORTANT
//	NO funciona de manera correcta, se siguiere integrar MyRTools
	function pasarDeHTMLATexto_ESt(vHTML_ESt)
	{
		var vHTML_=vHTML_ESt;
		vHTML_=vHTML_.split('<div>').join('');
		vHTML_=vHTML_.split('<br>').join('');
		vHTML_=vHTML_.split('<br/>').join('');
		vHTML_=vHTML_.split('</div>').join('');
		
		return vHTML_;
	}
	
	//	Indica si una tecla esta presionada en ese momento
	var _bnTeclaPresionadaAhora=false;
	//	Muesta el numero de la ultima tecla oprimida
	var _ultimaTeclaOprimida;
	//	Evento cuando la tecla fue oprimida
	document.addEventListener('keydown',function(evt){ _ultimaTeclaOprimida=evt.keyCode; _bnTeclaPresionadaAhora[evt.keyCode]=true; },false);
	//	Evento cuando la tecla fue 
	document.addEventListener('keyup',function(evt){ _bnTeclaPresionadaAhora[evt.keyCode]=false; },false);
	
	//	Posicion del cursor(Mouse) en X para cada lienzo
	var _posixionDelCursorEnX=new Array();
	//	Posicion del cursor(Mouse) en Y para cada lienzo
	var _posixionDelCursorEnY=new Array();
	
	function conocerLaPosicionDelCursor_ESt(evento,noLienso)
	{
		//	En caso de ser touch
		if(evento.targetTouches)
		{
			//	Habilitado para touch
			var t=evento.targetTouches;
			
			//	Posicion en x y y del mouse, con respecto al 0,0 del canvas
			var posixionDelCursorEnX_ESt=t[0].pageX-findPosX_ESt(_arOCanvas_ESt[noLienso].id);
			var posixionDelCursorEnY_ESt=t[0].pageY-findPosY_ESt(_arOCanvas_ESt[noLienso].id);
			
			//	Posicion en x y y del mouse, con respecto al 0,0 del canvas
			_posixionDelCursorEnX[noLienso]=posixionDelCursorEnX_ESt;
			_posixionDelCursorEnY[noLienso]=posixionDelCursorEnY_ESt;
		}
		//	En caso de ser mouse
		else
		{
			//	Posicion en x y y del mouse, con respecto al 0,0 del canvas
			var posixionDelCursorEnX_ESt=evento.pageX-findPosX_ESt(_arOCanvas_ESt[noLienso].id);
			var posixionDelCursorEnY_ESt=evento.pageY-findPosY_ESt(_arOCanvas_ESt[noLienso].id);
			
			//	Posicion en x y y del mouse, con respecto al 0,0 del canvas
			_posixionDelCursorEnX[noLienso]=posixionDelCursorEnX_ESt;
			_posixionDelCursorEnY[noLienso]=posixionDelCursorEnY_ESt;
		}
		
		//	Informa si el curzor esta dentro del lienzo
		if(
			(0<=posixionDelCursorEnX_ESt && posixionDelCursorEnX_ESt<=_arOCanvas_ESt[noLienso].width)
			&&
			(0<=posixionDelCursorEnY_ESt && posixionDelCursorEnY_ESt<=_arOCanvas_ESt[noLienso].height)
		)
		{
			//	Informa que esta dentro del lienzo
			_bnCursorSobreEsteLienzo_ESt[noLienso]=true;
			return true;
		}
		else
		{
			//	Informa que esta dentro del false
			_bnCursorSobreEsteLienzo_ESt[noLienso]=false;
			return false;
		}
	}
	
	//	true, si esta el cursor sobre el lienzo
	var _bnCursorSobreEsteLienzo_ESt=new Array();
	//	true o false si el cursor esta en este lienzo o no
	//	Lo saca con la posicion de la funcion conocerLaPosicionDelCursor_ESt,
	//	que debio ser ejecutada antes de esta
	function bnEstaCursorEnEsteLienzo_ESt(noDelLienzo_ESt)
	{
		//	Informa que el cursor esta en este lienzo
		return _bnCursorSobreEsteLienzo_ESt[noDelLienzo_ESt];
	}
	//	Retorna true si el cursor estÃ¡ arrastrando algun objeto sobre este lienzo.
	function bnObjetoArrastrandoEnEsteLienzo_ESt(noDelLienzo_ESt)
	{
		//	Informa que el cursor esta en este lienzo
		return _bnObjetoArrastrandoEnEsteLienzo_ESt[noDelLienzo_ESt];
	}
	
	//	
	var _onCursorMove=
		function(evento)
		{
			//	Previene que las acciones por defecto se ejecuten, como el mover el scrol cuando arrastramos
			evento.preventDefault();
			
			//	Pasa por cada uno de los lienzos y sca la posicion del cursorEnX y cursorEnY
			for(var contLiensos=0;contLiensos<_noDeLienzos_ESt;contLiensos++)
			{
				//	Saca la posicion del cursor
				conocerLaPosicionDelCursor_ESt(evento,contLiensos);
				
				//	Evita que se salga de los limietes del canavas
				if(_posixionDelCursorEnX[contLiensos]<0)
				{ _posixionDelCursorEnX[contLiensos]=0; }
				if(_arOCanvas_ESt[contLiensos].width<_posixionDelCursorEnX[contLiensos])
				{ _posixionDelCursorEnX[contLiensos]=_arOCanvas_ESt[contLiensos].width; }
				if(_posixionDelCursorEnY[contLiensos]<0)
				{ _posixionDelCursorEnY[contLiensos]=0; }
				if(_arOCanvas_ESt[contLiensos].height<_posixionDelCursorEnY[contLiensos])
				{ _posixionDelCursorEnY[contLiensos]=_arOCanvas_ESt[contLiensos].height; }
			}
			
//	Warning
//	Obsoleto
/*
			//	true, si el rectangulo que sigue al cursor esta creado
			if(_bnRectanguloQueSigueElMouse_ESt)
			{
			//	o('RectanguloQueSigueElMouse_ESt').setColorObjeto('rgba(200,200,0,0.5);');
			//	o('RectanguloQueSigueElMouse_ESt').setEje('centro');
			//	o('RectanguloQueSigueElMouse_ESt').setPosicion(_posixionDelCursorEnX,_posixionDelCursorEnY);
			}
*/
			//	true, mientras el cursor se mantenga oprimido
			if(_bnCursorOprimido)
			{
			//	o('RectanguloAlArrastrarConCursor_ESt').setColorObjeto('rgba(0,200,200,0.5);');
			//	o('RectanguloAlArrastrarConCursor_ESt').setEje('centro');
			//	o('RectanguloAlArrastrarConCursor_ESt').setPosicion(_posixionDelCursorEnX,_posixionDelCursorEnY);
			}
		};
	
	//	true, mientras el mouse se mantenga oprimido
	var _bnCursorOprimido=false;
	//	nombre del objeto que esta arrastrando, diferente para cada lienzo
	var _nombreObjetoArrastrando=new Array();
	//	true, si hay algun objeto siendo arrastrado en este lienzo
	var _bnObjetoArrastrandoEnEsteLienzo_ESt=new Array();
	//	Cuando empiesa mantener oprimido el cursor
	var _onMouseDown=
		function(evento)
		{
			//	Previene que las acciones por defecto se ejecuten, como el mover el scrool cuando arrastramos
			//	evento.preventDefault();
			//	Solo se activa si no estaba oprimido
			if(!_bnCursorOprimido)
			{
				//	Pasa por cada uno de los lienzos y sca la posicion del cursorEnX y cursorEnY
				for(var contLiensos=0;contLiensos<_noDeLienzos_ESt;contLiensos++)
				{
					//	Saca la posicion del cursor
					conocerLaPosicionDelCursor_ESt(evento,contLiensos);
					
					//	Pasa por cada uno de los objetos y busca si tiene que empezar de arrastrar algun elemento
					for(var contObjetos_ESt=0;contObjetos_ESt<_noObjetos_ESt[contLiensos];contObjetos_ESt++)
					{
						//	Carga el nombre de cada uno de los objetos
						nombreObjeto_ESt=_arNombresObjetos_ESt[contLiensos][contObjetos_ESt];
						//	Con el nombre cargamos el objeto
						var objetoNombre=_arO_ESt[contLiensos][nombreObjeto_ESt];
						//	Si el objeto se puede arrastrar
						if(objetoNombre.bnExistePropiedad('arrastrable'))
						{
							//	Previene que las acciones por defecto se ejecuten, como el mover el scrool cuando arrastramos
							//	evento.stopPropagation();
							//	Si el cursor esta encima
							if(objetoNombre.bnObjetoSobreEste(punto(_posixionDelCursorEnX[contLiensos],_posixionDelCursorEnY[contLiensos])))
							{
								//	Posicion del cursor con respecto al eje de creacion
								objetoNombre.setPosicionDelCursorEnX(_posixionDelCursorEnX[contLiensos]-objetoNombre.myPosicionEnX+objetoNombre.myAddPorEjeEnX);
								objetoNombre.setPosicionDelCursorEnY(_posixionDelCursorEnY[contLiensos]-objetoNombre.myPosicionEnY+objetoNombre.myAddPorEjeEnY);
								//	Nombre del objeto a arrastrar
								_nombreObjetoArrastrando[contLiensos]=objetoNombre.nombreDelObjeto_ESt;
								//	Informara que hay un objeto siendo arrastrado en este lienzo
								_bnObjetoArrastrandoEnEsteLienzo_ESt[contLiensos]=true;
							}
						}
					}
					//	true, mientras el mouse se mantenga oprimido	
					_bnCursorOprimido=true;
				}
			}
		};
	
	//	Cuando deja de seleccionar un elemento
	var _onCursorUp=
		function(evento)
		{
			//	Solo se ejecuta si un canvas esta selecconado
			if(_bnEjecutandoUnLienzo)
			{
				//	Solo se activa si esta oprimido
				if(_bnCursorOprimido)
				{
					//	Desaparece de la vista el cursor
	//	ALERTA: deberia borrarce
	//				o('RectanguloAlArrastrarConCursor_ESt').setPosicion(-5000,-5000);
					
					//	Pasa por cada uno de los lienzos y busca si tiene que dejar de arrastrar algun elemento
					for(var contLiensos=0;contLiensos<_noDeLienzos_ESt;contLiensos++)
					{
						//	nombre del objeto que esta arrastrando
						_nombreObjetoArrastrando[contLiensos]='';
						//	Informara si hay un objeto siendo arrastrado en este lienzo
						_bnObjetoArrastrandoEnEsteLienzo_ESt[contLiensos]=false;
					}
					
					//	true, mientras el mouse se mantenga oprimido
					_bnCursorOprimido=false;
				}
			}
		};
	
	//	true, durante el frame que se hizo click en el lienzo correspindiente
	var _bnOnClick_ESt=new Array();
	var _onClick=
		function(evento)
		{
			consola('Click');
			
			//	Pasa por cada uno de los lienzos y sca la posicion del cursorEnX y cursorEnY
			for(var contLiensos=0;contLiensos<_noDeLienzos_ESt;contLiensos++)
			{
				//	Saca la posicion del cursor, y retorn true si hizo click dentro de este lienzo
				var bnHizoClickDentroDelLienzo=conocerLaPosicionDelCursor_ESt(evento,contLiensos);
				//	Evita que se salga de los limietes del canavas
				if(_posixionDelCursorEnX[contLiensos]<0)
				{_posixionDelCursorEnX[contLiensos]=0; }
				if(_arOCanvas_ESt[contLiensos].width<_posixionDelCursorEnX[contLiensos])
				{ _posixionDelCursorEnX[contLiensos]=_arOCanvas_ESt[contLiensos].width; }
				if(_posixionDelCursorEnY[contLiensos]<0)
				{ _posixionDelCursorEnY[contLiensos]=0; }
				if(_arOCanvas_ESt[contLiensos].height<_posixionDelCursorEnY[contLiensos])
				{ _posixionDelCursorEnY[contLiensos]=_arOCanvas_ESt[contLiensos].height; }
				
				//	SI hizo click en este lienzo
				if(bnHizoClickDentroDelLienzo)
				{
					//	true, informa que se realizo un click
					informarSobreClick_ESt(contLiensos,true);
				}
			}
			
//	Warning
//	Obsoleto, borrar despues de un tiempo
/*
			//	true, si el rectangulo que sigue al mouse esta creado
			if(_bnRectanguloQueSigueElMouse_ESt)
			{
			//	o('RectanguloAlHacerClick_ESt').setEje('centro');
			//	o('RectanguloAlHacerClick_ESt').setPosicion(_posixionDelCursorEnX,_posixionDelCursorEnY);
			}
*/
		};
	
	
	function informarSobreClick_ESt(noLienso,bnDelClick_ESt)
	{
		_bnOnClick_ESt[noLienso]=bnDelClick_ESt;
	}
	
	//  Retorna la posicion en el lienzo del cursor en X y Y
	function getPosicionDelCursorEnX(noLienso_ESt) { return _posixionDelCursorEnX[noLienso_ESt]; }
	function getPosicionDelCursorEnY(noLienso_ESt) { return _posixionDelCursorEnY[noLienso_ESt]; }
	
	function getUltimaTeclaOprimida()
	{
		switch(_ultimaTeclaOprimida)
		{
			case 38:
				return 'arriba';
			case 39:
				return 'derecha';
			case 40:
				return 'abajo';
			case 37:
				return 'izquierda';
			default:
				return _ultimaTeclaOprimida;
		}
	}
	
	function soloNumeros(valor_ESt)
	{
		var valorARetornar=parseFloat(valor_ESt);
		if(isNaN(valorARetornar))
		{ return 0; }
		else
		{ return valorARetornar; }
	}
	
	/**
	Funciones globales del div de elementos
	************************************/
	
	//	Arreglo con paramentro el nombre, si ya fue creado esta en este arreglo
	var _arInput_ESt=new Array();
	//	Acumula el alto anterior para que sigan en la posicion deseada
	var _altoAcumulado=new Array();
	//	Contiene true los que estan con foco
	var	_arInputsConFoco=new Array();
	//	Id del lugar donde inicia el 
	var _idDiv_LugarDelCanvas_ESt='iDiv_LugarDelCanvas_ESt';
	//	ClassName del lugar donde inicia el 
	var _classNameDiv_LugarDelCanvas_ESt='cDiv_LugarDelCanvas_ESt';
	//	Borde comun de los input
	var _achoBordeInput=1;
	//	Un arreglo con el objeto del div donde esta cada uno de los inputs creados, esto con el fin de no volver a crearlos si no es necesario
	var _arDivInputsCanvas=new Array();
	//	Un arreglo con el objeto de los inputs creados, esto con el fin de no volver a crearlos si no es necesario
	var _arInputsCanvas=new Array();
	//	Guarda el resultado del filtro, para identificar si toca volver a aplicarlo
	var _arResultadoDelFilro=new Array();
	//	Crea un imput el el lugar deseado
	function CrearInput_ESt(nombreObjeto_ESt,posicionEnX,posicionEnY,ancho,alto,propiedades)
	{
		//	si existe la pripiedad esta qudara aca asi: arExistePropiedad[nombrePropiedad]=true;
		var arExistePropiedad=new Array();
		//	Pasa las propiedades si existen un arreglo para ser usado
		if(propiedades!=undefined)
		{
			//	Divide las propiedades en cada uno de sus tipos
			arPropiedades=propiedades.split(_divizorDePropiedadesObjeto);
			//	Pasa por cada propiead
			for(contPropiedades=0;contPropiedades<arPropiedades.length;contPropiedades++)
			{
				//	Pasa la propiedad a esta variable
				var propiedad=arPropiedades[contPropiedades];
				//	Informa que esta pripiedad existe
				arExistePropiedad[propiedad]=true;
			}
		}
		
		//	Si este input ya habia sido creado
		if(_arInput_ESt[_noDelLienzo_ESt][nombreObjeto_ESt])
		{
			if(!_arInputsConFoco[nombreObjeto_ESt])
			{
				//	Si a lo ingresado se le aplicara algun filtro
				if(arExistePropiedad['filtro'])
				{
					//	true, si va a efectuar el filtro
					var bnEfectuarElFiltro=false;
					//	Si ya sa habia filtrado alguna vez
					if(_arResultadoDelFilro[nombreObjeto_ESt])
					{
						//	Si el resultado del filtro anterior es diferente a lo que esta ahora
						if(_arResultadoDelFilro[nombreObjeto_ESt]!=o(nombreObjeto_ESt).getValor())
						{
							//	Efectuar el filtro
							bnEfectuarElFiltro=true;
						}
					}
					else
					{
						//	Efectuar el filtro
						bnEfectuarElFiltro=true;
					}
					
					//	Si efectua el filtro
					if(bnEfectuarElFiltro)
					{
						//	Filtra el objeto y tambien envia el arreglo con las propiedades
						Filtro_ESt(o(nombreObjeto_ESt),arExistePropiedad);
						_arResultadoDelFilro[nombreObjeto_ESt]=o(nombreObjeto_ESt).getValor();
						_arInput_ESt[_noDelLienzo_ESt][nombreObjeto_ESt].value=o(nombreObjeto_ESt).getValor();
					}
				}
				//	Si no se le aplica algun filtro
				else
				{
					//	Pasa el valor que tiene en el myValor, siempre que NO tenga foco
					if(o(nombreObjeto_ESt).getValor()!=_arInput_ESt[_noDelLienzo_ESt][nombreObjeto_ESt].value)
					{
						_arInput_ESt[_noDelLienzo_ESt][nombreObjeto_ESt].value=o(nombreObjeto_ESt).getValor();
					}
				}
			}
		}
		else
		{
			//	Creamos el input, si no esta creado
			if(_arDivInputsCanvas[_noDelLienzo_ESt][nombreObjeto_ESt]==undefined)
			{
				//	Creamos el input
				var oNewDivInput=document.createElement('div'); 
				//	Lo guardamos para no tener que volver a crearlo
				_arDivInputsCanvas[_noDelLienzo_ESt][nombreObjeto_ESt]=oNewDivInput;
				
				//	Creamos el input
				var oNewInput=document.createElement('input'); 
				//	Lo guardamos para no tener que volver a crearlo
				_arInputsCanvas[_noDelLienzo_ESt][nombreObjeto_ESt]=oNewInput;
			}
			else
			//	Si ya habia sido creado el solo lo llama
			{
				//	El input en vez de crearlo de nuevo lo carga
				var oNewDivInput=_arDivInputsCanvas[_noDelLienzo_ESt][nombreObjeto_ESt]; 
				//	El input en vez de crearlo de nuevo lo carga
				var oNewInput=_arInputsCanvas[_noDelLienzo_ESt][nombreObjeto_ESt]; 
			}
			
			//	Lo creamos en el objeto correspondiente
			_arODiv_ESt[_noDelLienzo_ESt].appendChild(oNewDivInput);
			//	Lo creamos en el objeto correspondiente
			oNewDivInput.appendChild(oNewInput);
			
			//	Miramos si solo es de lectura
			if(arExistePropiedad['readonly'])
			{ oNewInput.readOnly=true; }
			
			//	Guarda el nombre del objeto
			oNewInput.nombreObjeto_ESt=nombreObjeto_ESt;
			//	Le colocamos el numero del lienzo
			oNewInput.myNoLienzo=_noDelLienzo_ESt;
			//	Colocamos la posición
			oNewInput.style.position='relative';
			//	Lo colocamos en la posicion en X
			oNewInput.style.left=(posicionEnX)+'px';
			//	Lo colocamos en la posicion en Y
			oNewInput.style.top=(posicionEnY-_arOCanvas_ESt[_noDelLienzo_ESt].height-_achoBordeCanvas-_altoAcumulado[_noDelLienzo_ESt])+'px';
			//	Colocamos el ancho
			oNewInput.style.width=(ancho-2*_achoBordeInput)+'px';
				//	Acumula el alto necesario
				_altoAcumulado[_noDelLienzo_ESt]+=alto+_achoBordeInput*2;
			//	Colocamos el alto
			oNewInput.style.height=(alto-2*_achoBordeInput)+'px';
			//	La idea es que cuando tenga foco no se le asigne el valor a lo escrito (No permite escribir)
			oNewInput.onfocus=
				function()
				{
					_arInputsConFoco[this.nombreObjeto_ESt]=true;
				}
			//	Funcion para guardar el valor
			oNewInput.onkeyup=
				function(event)
				{
					_arO_ESt[this.myNoLienzo][this.nombreObjeto_ESt].setValor(_arInputsCanvas[this.myNoLienzo][this.nombreObjeto_ESt].value);
				};
			//	La idea es que cuando tenga foco no se le asigne el valor a lo escrito (No permite escribir)
			oNewInput.onblur=
				function()
				{
					_arInputsConFoco[this.nombreObjeto_ESt]=false;
				}
			//	Coloca el valor del input que tiene ahora
			oNewInput.value=o(nombreObjeto_ESt).getValor();
			//	Guarda el objeto para no volver a crearlo
			_arInput_ESt[_noDelLienzo_ESt][nombreObjeto_ESt]=oNewInput;
		}
	}
	
	/**
	Funciones globales del lienzo
	************************************/
	
	//	La animacion se detiene
	function DetenerLaAnimacion_ESt()
	{
		//	Si existe borra los parametros la animacion anterior
		if(_bnSeEstaEjecuntandoLaAnimacion)
		{ clearInterval(_noAnimacion); }
	}
	
	//	Aca se reinicaran todas las variables
	function ReiniciarVariables_ESt()
	{
		//	Arreglo por numero con el nombre de las variables
		_arNoObjeto_ESt[_noDelLienzo_ESt]=new Array();
		//	Arreglo con el numero los Inputs
		_altoAcumulado[_noDelLienzo_ESt]=0;
		//	Arreglo con el numero los Inputs
		_arInput_ESt[_noDelLienzo_ESt]=new Array();
		//	Arreglo con los nombres de los objetos
		_arNombresObjetos_ESt[_noDelLienzo_ESt]=new Array();
		//	Arreglo con los objetos de este
		_arO_ESt[_noDelLienzo_ESt]=new Array();
		//	Arreglo con los objetos lineas de este
		_arOLineas_ESt[_noDelLienzo_ESt]=new Array();
		//	Limpia las imagenes guardadas
		_arImagenesYaCargadas=new Array();
		//	Limpia los div de los inputs ya creados
		_arDivInputsCanvas[_noDelLienzo_ESt]=new Array();
		//	Limpia los inputs ya creados
		_arInputsCanvas[_noDelLienzo_ESt]=new Array();
		//	Limpia el ancho acumulado de los objetos creados sin lienzo
		_anchoAcumulado=0;
		//	Numero de objetos
		_noObjetos_ESt[_noDelLienzo_ESt]=0;
		//	Inicia las variable para el numero de lienzo
		variablesInicialesParaUnNuevoLienzo();
	}
	
	//	Limpia todo el contenido del lienzo
	function LimpiarLienzo_ESt()
	{
		//	Limpia el canvas
		_arCtx_ESt[_noDelLienzo_ESt].clearRect(0,0,_arOCanvas_ESt[_noDelLienzo_ESt].width,_arOCanvas_ESt[_noDelLienzo_ESt].height);
	}
	//	Limpia los objetos que no son del lienzo
	function LimpiarDivDelLienzo_ESt()
	{
		//	Limpia los objetos que son del div
		_arODiv_ESt[_noDelLienzo_ESt].innerHTML='';
	}
	//	arreglo con las imagenes que ya han sido cargadas
	//	_arImagenesYaCargadas[DireccionDeLaImagen+'__'+QueEsEsteObjeto]
	//	Se utilizan estos dos porque en caso de que alguno de los dos cambie se carga algo diferente
	var _arImagenesYaCargadas=new Array();
	//	Dibuja en el lienso las variables
	function DibujarEnElLienzoLasVariables_ESt()
	{
		for(var contObjetos_ESt=0;contObjetos_ESt<_noObjetos_ESt[_noDelLienzo_ESt];contObjetos_ESt++)
		{
			//	Carga el nombre de cada uno de los objetos
			nombreObjeto_ESt=_arNombresObjetos_ESt[_noDelLienzo_ESt][contObjetos_ESt];
			
			//	Coloca el movimiento
			o(nombreObjeto_ESt).myPosicionEnX+=o(nombreObjeto_ESt).myMovimientoEnX;
			o(nombreObjeto_ESt).myPosicionEnY+=o(nombreObjeto_ESt).myMovimientoEnY;
			
			// 	Coloca el color del objeto
			_arCtx_ESt[_noDelLienzo_ESt].fillStyle=o(nombreObjeto_ESt).myColorObjeto;
			
			//	Consigue la posicion del ancho y alto respecto al eje
			var posicionDeLaFiguraEnX=o(nombreObjeto_ESt).getPosicionDeLaFiguraEnX();
			var posicionDeLaFiguraEnY=o(nombreObjeto_ESt).getPosicionDeLaFiguraEnY();
			
			if(o(nombreObjeto_ESt).getForma()=='rectangulo')
			{
				if(o(nombreObjeto_ESt).getQueEs()=='forma')
				{
					if(o(nombreObjeto_ESt).getTipo()=='rectangulo')
					{
						if(!o(nombreObjeto_ESt).bnHayImagen())
						{
							//	Dibuja el objeto en canvas
							_arCtx_ESt[_noDelLienzo_ESt].fillRect(o(nombreObjeto_ESt).getPosicionDeLaFiguraEnX(),o(nombreObjeto_ESt).getPosicionDeLaFiguraEnY(),o(nombreObjeto_ESt).myAncho,o(nombreObjeto_ESt).myAlto);
						}
						else
						{
							DibujarImagenDelObjetoConNmbr(nombreObjeto_ESt);
						}
					}
					else if(o(nombreObjeto_ESt).getTipo()==='circulo')
					{
						_arCtx_ESt[_noDelLienzo_ESt].beginPath();
						_arCtx_ESt[_noDelLienzo_ESt].arc(o(nombreObjeto_ESt).getPosicionDeLaFiguraEnX(),o(nombreObjeto_ESt).getPosicionDeLaFiguraEnY(),o(nombreObjeto_ESt).myRadio,0,Math.PI*2,true);
						_arCtx_ESt[_noDelLienzo_ESt].fill();
					}
				}
				//	En caso de ser un swish
				else if(o(nombreObjeto_ESt).getQueEs()=='swish')
				{
					DibujarImagenDelObjetoConNmbr(nombreObjeto_ESt);
				}
				//	Si es un objeto arrastrable
				else if(o(nombreObjeto_ESt).getQueEs()=='arrastrable')
				{
					DibujarImagenDelObjetoConNmbr(nombreObjeto_ESt);
				}
				//	Si es una entrada de texto
				else if(o(nombreObjeto_ESt).getQueEs()=='input')
				{
					//	Carga un rectangulo negro detras de esta para poder identigicarla con el canvas
					_arCtx_ESt[_noDelLienzo_ESt].fillRect(posicionDeLaFiguraEnX,posicionDeLaFiguraEnY,o(nombreObjeto_ESt).myAncho,o(nombreObjeto_ESt).myAlto);
					//	Crea el input para poder ingresar datos
					CrearInput_ESt(nombreObjeto_ESt,posicionDeLaFiguraEnX,posicionDeLaFiguraEnY,o(nombreObjeto_ESt).myAncho,o(nombreObjeto_ESt).myAlto,o(nombreObjeto_ESt).myPropiedades); 
				}
			}
			else
			{
				_arCtx_ESt[_noDelLienzo_ESt].beginPath();
				_arCtx_ESt[_noDelLienzo_ESt].arc(posicionDeLaFiguraEnX,posicionDeLaFiguraEnY,o(nombreObjeto_ESt).myRadio,0,Math.PI*2,true);
				_arCtx_ESt[_noDelLienzo_ESt].fill();
			}
			
			//	Reinicia lo que tenga que reiniciar por frame
			o(nombreObjeto_ESt).reiniciaVariablesPorFrame();
		}
	}
	
	//	arreglo con las imagenes que ya han sido cargadas
	//	_arImagenesYaCargadas[DireccionDeLaImagen+'__'+QueEsEsteObjeto]
	//	Se utilizan estos dos porque en caso de que alguno de los dos cambie se carga algo diferente
	var _arImagenesYaCargadas=new Array();
	//	Dibuja en el lienso las variables
	function DibujarEnElLienzoLasVariablesLineas_ESt()
	{
		for(var contObjetosLineas_ESt=0;contObjetosLineas_ESt<_noObjetosLineas_ESt[_noDelLienzo_ESt];contObjetosLineas_ESt++)
		{
			//	Coloca el objeto en una variable
			var objetoLinea_ESt_=oLineas(contObjetosLineas_ESt);
			//	Coloca el color del objeto
			_arCtx_ESt[_noDelLienzo_ESt].fillStyle=objetoLinea_ESt_.getColorObjeto();
			
			//	Consigue la posicion del ancho y alto respecto al eje
			var posicionEnX=objetoLinea_ESt_.getPosicionEnX();
			var posicionEnY=objetoLinea_ESt_.getPosicionEnY();
			
			//	Dibuja el objeto en canvas
			_arCtx_ESt[_noDelLienzo_ESt].beginPath();
			//	true, si es la primera vez que pasa por el for
			var bnPrimeraVezPorElFor_=true;
			//	Pasa por cada punto a crear en la linea
			for(var contPosicionesCreadas=0;contPosicionesCreadas<objetoLinea_ESt_.getNoPosicionesCreadas();contPosicionesCreadas++)
			{
				
				if(bnPrimeraVezPorElFor_)
				{
					_arCtx_ESt[_noDelLienzo_ESt].moveTo(objetoLinea_ESt_.getPosicionEnX(contPosicionesCreadas),objetoLinea_ESt_.getPosicionEnY(contPosicionesCreadas));
				}
				else
				{
					_arCtx_ESt[_noDelLienzo_ESt].lineTo(objetoLinea_ESt_.getPosicionEnX(contPosicionesCreadas),objetoLinea_ESt_.getPosicionEnY(contPosicionesCreadas));
				}
				//	true, si es la primera vez que pasa por el for
				var bnPrimeraVezPorElFor_=false;
			}
			//Trazar linea
			_arCtx_ESt[_noDelLienzo_ESt].stroke();
		}
	}
	
	
	
	//	Dibuja la imagen en el lienzo, el motivo por el cual tambien se envia la posciion de la figura es porque esta puede cambar con respecto al eje
	function DibujarImagenDelObjetoConNmbr(nombreObjeto_ESt)
	{
		//	Pasa el  objeto a una variable
		var objeto_ESt=o(nombreObjeto_ESt);
		//	Si la imagen ya habia sido creada solo la carga
		if(_arImagenesYaCargadas[objeto_ESt.myImagenFondo+'__'+objeto_ESt.getQueEs()]==undefined)
		{
			//	Crea un <img>, necesario para cargar imagenes en canvas
			var ImagenFondo_=new Image();
			//	Carga las propiedades 
			ImagenFondo_.objetoNombre=objeto_ESt;
			ImagenFondo_.bnYaCargoImagen=false;
			//	Arreglo con los nombres de los objetos que tienen la imagen sin cargar
			ImagenFondo_.arNombreDeObjetosSinCargar=new Array();
			//	Arreglo con los objetos que tienen la imagen sin cargar
			ImagenFondo_.arObjetosSinCargar=new Array();
			//	Arreglo con el contexto del canvas
			ImagenFondo_.arContextoCanvasSinCargar=new Array();
			//	Cuando no se a cargado la imagen almacena en un arreglo los objetos y propiedades de estas para crearlo cuando cargue
			ImagenFondo_.addNombreObjetoConImgSinCargar=
				function(nombreImagenSinCargar,posicionDeLaFiguraEnX,posicionDeLaFiguraEnY)
				{
					//	Guarda en un arreglo los nombres de los objetos sin cargar
					this.arNombreDeObjetosSinCargar[this.arNombreDeObjetosSinCargar.length]=nombreImagenSinCargar;
					//	Guarda en un arreglo los objetos sin cargar
					this.arObjetosSinCargar[this.arObjetosSinCargar.length]=o(nombreImagenSinCargar);
					//	Arreglo con el contexto del canvas
					ImagenFondo_.arContextoCanvasSinCargar[this.arContextoCanvasSinCargar.length]=_arCtx_ESt[_noDelLienzo_ESt];
					
				}
			//	Para dibujar la imagen
			ImagenFondo_.cargarImagen=
				function(bnVieneDelOnLoad)
				{
					var imagen=this;
					var objeto=this.objetoNombre;
					//	Si viene del onload
					if(bnVieneDelOnLoad)
					{
						//	crea todos los objetos que no habian sido creados
						for(contObjetosSinCargar=0;contObjetosSinCargar<this.arNombreDeObjetosSinCargar.length;contObjetosSinCargar++)
						{
							//	Carga el objeto
							var objeto=this.arObjetosSinCargar[contObjetosSinCargar];
							//	Posicion de la imagen
							var posicionDeImagenEnX=objeto.getPosicionImagenEnX();
							var posicionDeImagenEnY=objeto.getPosicionImagenEnY();
							//	En caso de ser swish
							if(objeto.getQueEs()=='swish')
							{
								//	Si esta seleccionado el cambia el valor
								if(this.objetoNombre.getValor()!=0)
								{
									//	Crea la imagen
									posicionDeImagenEnX=objeto.getPosicionImagenSwishOffEnX();
									posicionDeImagenEnY=objeto.getPosicionImagenSwishOffEnY();
								}
							}
							
							//	Crea la imagen
							this.arContextoCanvasSinCargar[contObjetosSinCargar].drawImage(imagen,posicionDeImagenEnX,posicionDeImagenEnY,objeto.myAncho,objeto.myAlto,objeto.getPosicionDeLaFiguraEnX(),objeto.getPosicionDeLaFiguraEnY(),objeto.myAncho,objeto.myAlto);
						}
					}
					else
					{
						//	Posicion de la imagen
						var posicionDeImagenEnX=objeto.getPosicionImagenEnX();
						var posicionDeImagenEnY=objeto.getPosicionImagenEnY();
						//	En caso de ser swish
						if(o(nombreObjeto_ESt).getQueEs()=='swish')
						{
							//	Si esta seleccionado el cambia el valor
							if(this.objetoNombre.getValor()!=0)
							{
								//	Crea la imagen
								posicionDeImagenEnX=objeto.getPosicionImagenSwishOffEnX();
								posicionDeImagenEnY=objeto.getPosicionImagenSwishOffEnY();
							}
						}
						
						//	Crea la imagen
						_arCtx_ESt[_noDelLienzo_ESt].drawImage(imagen,posicionDeImagenEnX,posicionDeImagenEnY,objeto.myAncho,objeto.myAlto,objeto.getPosicionDeLaFiguraEnX(),objeto.getPosicionDeLaFiguraEnY(),objeto.myAncho,objeto.myAlto);
					}
				}
			//	Ejecuta al cargar la imagen
			ImagenFondo_.alCargarImagen=
				function()
				{
					//	Crea la imagen en el canvas
					this.cargarImagen(true);
					//	Informa que ya se creo la imagen
					this.bnYaCargoImagen=true;
				};
			//	Añade los objetos para que sean creados cuando cargue la imagen
			ImagenFondo_.addNombreObjetoConImgSinCargar(nombreObjeto_ESt,ImagenFondo_.setPosicionDeLaFiguraEnX,ImagenFondo_.setPosicionDeLaFiguraEnY);
			//	Informa que funcuon usara al cargar la imagen
			ImagenFondo_.onload=ImagenFondo_.alCargarImagen;
			//	Pide que carge la imagen
			ImagenFondo_.src=o(nombreObjeto_ESt).myImagenFondo;
			//	Guarda la imagen por si vulelven a cargarla
			_arImagenesYaCargadas[o(nombreObjeto_ESt).myImagenFondo+'__'+o(nombreObjeto_ESt).getQueEs()]=ImagenFondo_;
		}
		else
		{
			var ImagenFondo_=_arImagenesYaCargadas[o(nombreObjeto_ESt).myImagenFondo+'__'+o(nombreObjeto_ESt).getQueEs()];
			//	Se le agrega el objeto que tiene este, por si llega a ser otro objeto el que pide la misma imagen
			ImagenFondo_.objetoNombre=o(nombreObjeto_ESt);
			//	Carga una imagen ya creada
			if(!ImagenFondo_.bnYaCargoImagen)
			{ ImagenFondo_.addNombreObjetoConImgSinCargar(nombreObjeto_ESt); }
			else
			{ ImagenFondo_.cargarImagen(); }
		}
	}
		/**
		Tiempo
		************************************/
		
		function bnSegundos(NumeroDeSegundos)
		{
			
		}
		
		/**
		Objetos
		************************************/
		
		//	Arreglo por numero con el nombre de las variables
		var _arNoObjeto_ESt=new Array();
		//	Arreglo con los nombres de los objetos
		var _arNombresObjetos_ESt=new Array();
		//	Arreglo que retorna true si existe el objeto
		var _arBnObjetos_ESt=new Array();
		//	Arreglo con los objetos de este
		var _arO_ESt=new Array();
		//	Numero de objetos
		var _noObjetos_ESt=new Array();
		//	Declara un objeto de manera sencilla
		function o(nombreDelObjeto_ESt)
		{
			//	Mira si ya creo el objeto
			if(_arBnObjetos_ESt[_noDelLienzo_ESt][nombreDelObjeto_ESt])
			{	//	Si esta creado lo retorna
				//	=========================
				
				//	Carga el objeto ya creado
				return _arO_ESt[_noDelLienzo_ESt][nombreDelObjeto_ESt];
			}
			else
			{	//	Si NO esta creado lo crea y luego lo retorna
				//	============================================
				
				//	NombreObjeto <- _arNoObjeto_ESt[_noDelLienzo_ESt][numeroObjeto]
				_arNombresObjetos_ESt[_noDelLienzo_ESt][_noObjetos_ESt[_noDelLienzo_ESt]]=nombreDelObjeto_ESt;
				//	Informa que el objeto existe
				_arBnObjetos_ESt[_noDelLienzo_ESt][nombreDelObjeto_ESt]=true;
				//	Crea el nuevo objeto con el nombre
				_arO_ESt[_noDelLienzo_ESt][nombreDelObjeto_ESt]=new o_ESt(nombreDelObjeto_ESt);
				//	Carga uno mas al numero de objetos
				_noObjetos_ESt[_noDelLienzo_ESt]++;
				
				//	Retorna el objeto
				return _arO_ESt[_noDelLienzo_ESt][nombreDelObjeto_ESt];
			}
		}
		
		//	Las priedades de los objetos son un gran sitring, dividido por el siguiente divizor
		var _divizorDePropiedadesObjeto='[[+]]';
		//	Objeto
		function o_ESt(nombreDelObjeto_ESt)
		{
			//	Valores por defecto:
			this.nombreDelObjeto_ESt=nombreDelObjeto_ESt;
			//	Posicion en X
			this.myPosicionEnX=0;
			//	Posicion en Y
			this.myPosicionEnY=0;
			//	Cuando el eje no es arriba a la izquierda este es la suma de esta
			//	posicion al eje
			this.myAddPorEjeEnX=0;
			this.myAddPorEjeEnY=0;
			//	Ancho del objeto
			this.myAncho=10;
			//	Alto del objeto
			this.myAlto=10;
			//	Radio en caso de ser un circulo
			this.myRadio=5;
			//	Color del objeto en caso de solo ser una forma
			this.myColorObjeto='#000';
			//	Manejan como sera visto este ante otros objetos, en cuanto a relacion de posicion y clicks
			this.myForma='rectangulo';
			//	Que tipo de objeto es forma,swish,input
			this.myQueEs='forma';
			//	Que tipo es en caso de ser forma, es el mismo tipo que la forma (rectangulo,circulo)
			//	Pero en caso de ser swish, puede tener diferentes tipos
			this.myQueTipo='rectangulo';
			//	Caracteristicas del objeto
			this.myPropiedades='';
			//	Informa si tiene imagenes de fondo
			this.myBnImagenFondo=false;
			//	Posición del cursor con respecto al eje del objeto
			this.myPosicionDelCursorEnX=0;
			this.myPosicionDelCursorEnY=0;
			//	Direccion de la imagen de fondo
			this.myImagenFondo='';
			//	Posicion en la imagen de esta imagen
			this.myPosicionImagenEnX=0;
			this.myPosicionImagenEnY=0;
			//	Posicion en la imagen de la imagen cuando esta off
			this.myPosicionImagenSwishOffEnX=0;
			this.myPosicionImagenSwishOffEnY=0;
			//	Cuanto tiene que moverse en este turno
			this.myMovimientoEnX=0;
			this.myMovimientoEnY=0;
			//	Que tipo de eje tiene; centro...
			this.myTipoDeEje='';
			//	Todo los objetos tienen un valor por defecto cero
			this.myValor=0;
			//	Numero del lienzo de este objeto
			this.noDelLienzo=_noDelLienzo_ESt;
			
			this.setEje=
				function(tipoDeEje)
				{
					this.myTipoDeEje=tipoDeEje;
					switch(tipoDeEje)
					{
						case "centro":
								this.ejeCentroEnX();
								this.ejeCentroEnY();
							break;
					}
				};
			this.getEje=function() { return this.myTipoDeEje; };
				this.ejeCentroEnX=
					function()
					{
						if(this.myTipoDeEje=='centro')
						{
							this.myAddPorEjeEnX=-this.myAncho/2;
						}
					};
				this.ejeCentroEnY=
					function()
					{
						if(this.myTipoDeEje=='centro')
						{
							this.myAddPorEjeEnY=-this.myAlto/2;
						}
					};
				
			this.setForma=
				function(forma)
				{
					this.myForma=forma;
				}
			this.getForma=function() { return this.myForma; }
			
			//	En caso de crear un rectangulo
			this.formaRectangulo=
				function(posicionEnX,posicionEnY,ancho,alto)
				{
					if(posicionEnX)
					{ this.setPosicionEnX(posicionEnX); }
					if(posicionEnY)
					{ this.setPosicionEnY(posicionEnY); }
					if(ancho)
					{ this.setAncho(ancho); }
					if(alto)
					{ this.setAlto(alto); }
					
					//	
					this.setForma('rectangulo');
					//	Si es una forma tambien el tipo es rectangulo
					if(this.getQueEs()=='forma') { this.setQueTipo('rectangulo'); }
				};
			this.setFormaCirculo=
				function(posicionEnX,posicionEnY,radio)
				{
					if(posicionEnX)
					{ this.setPosicionEnX(posicionEnX); }
					if(posicionEnY)
					{ this.setPosicionEnY(posicionEnY); }
					if(radio)
					{ this.setRadio(radio); }
					
					
					this.setForma('circulo');
					//	Si es una forma tambien el tipo es circulo
					if(this.getQueEs()=='forma') { this.setQueTipo('circulo'); }
				};
				this.setRadio=
					function(radio)
					{
						this.myRadio=radio;
					};
				this.getRadio=function() { return this.myRadio; };
			this.setQueEs=
				function(queEs)
				{
					//	Traduce el nombre de un idioma a otro
					switch(queEs)
					{
						case 'draggable':
							queEs='arrastrable';
							break;
					}
					
					//	Tona las acciones respectivas dependiendo de que es
					switch(queEs)
					{
						case 'swish':
							
							break;
						case 'input':
							this.setAncho(100);
							this.setAlto(24);
							break;
						case 'arrastrable':
							this.setPropiedad('arrastrable');
							this.habilitarElOnClick();
							break;
					}
					
					//	Informa que es
					this.myQueEs=queEs;
				};
			this.getQueEs=function() { return this.myQueEs; };
			
			this.setQueTipo=
				function(tipo)
				{
					//	Si cambia de tipo cambian las propiedades
					if(this.getTipo()!=tipo)
					{ this.myPropiedades=''; }
					//	Tona las acciones respectivas dependiendo de que tipo es
					switch(tipo)
					{
						case 'swishBasico01':
							this.setPosicionImagenEnX(0);
							this.setPosicionImagenEnY(0);
							this.setPosicionImagenSwishOffEnX(0);
							this.setPosicionImagenSwishOffEnY(44);
							this.setAncho(44);
							this.setAlto(44);
							this.setImagenFondo('images/Basicas/Basica.png');
							this.habilitarElOnClick();
							break;
						case 'nombre':
							this.setPropiedad('filtro');
							break;
						case 'monedaPeso':
							this.setPropiedad('filtro');
							this.setPropiedad('mascara');
							break;
					}
					//	Informa que tipo es
					this.myQueTipo=tipo;
				};
			this.getTipo=function() { return this.myQueTipo; };
			this.setPropiedad=
				function(propiedad)
				{
					//	Agrega la nueva propiedad
					this.myPropiedades=AgregarDatosSeparado_see(propiedad,_divizorDePropiedadesObjeto,this.myPropiedades);
				}
			this.bnExistePropiedad=
				function(propiedad)
				{
					//	Devuelve un arreglo con las propieades existente = true
					var arPropiedades_=arPropiedadesExistentes(this.myPropiedades);
					//	Mira si existe la propiedad en la lista
					if(arPropiedades_[propiedad])
					{ return true; }
					else
					{ return false; }
				}
			
			this.setPosicionDelCursorEnX=
				function(posicionDelCursorEnX)
				{ this.myPosicionDelCursorEnX=posicionDelCursorEnX; };
			this.getPosicionDelCursorEnX=function() { return this.myPosicionDelCursorEnX; };
			
			this.setPosicionDelCursorEnY=
				function(posicionDelCursorEnY)
				{ this.myPosicionDelCursorEnY=posicionDelCursorEnY; };
			this.getPosicionDelCursorEnY=function() { return this.myPosicionDelCursorEnY; };
			
			this.setPosicionImagenEnX=
				function(posicionImagenEnX)
				{ this.myPosicionImagenEnX=posicionImagenEnX; };
			this.getPosicionImagenEnX=function() { return this.myPosicionImagenEnX; };
			
			this.setPosicionImagenEnY=
				function(posicionImagenEnY)
				{ this.myPosicionImagenEnY=posicionImagenEnY; };
			this.getPosicionImagenEnY=function() { return this.myPosicionImagenEnY; };
			
			this.setPosicionImagenSwishOffEnX=
				function(posicionImagenSwishOffEnX)
				{ this.myPosicionImagenSwishOffEnX=posicionImagenSwishOffEnX; };
			this.getPosicionImagenSwishOffEnX=function() { return this.myPosicionImagenSwishOffEnX; };
			
			this.setPosicionImagenSwishOffEnY=
				function(posicionImagenSwishOffEnY)
				{ this.myPosicionImagenSwishOffEnY=posicionImagenSwishOffEnY; };
			this.getPosicionImagenSwishOffEnY=function() { return this.myPosicionImagenSwishOffEnY; };
			
			//	true, si ya se creo el onclick
			this._bnOnClick=false;
			//	No solo lo habilita sino que lo crea
			this.habilitarElOnClick=
				function()
				{
					this._bnOnClick=true;
				};
			
			//	true, si va a seguir el mouse
			this._bnSeguirCursor=false;
			//	true, si va a seguir el mouse
			this.bnSiguiendoAlCursor=
				function()
				{
					return (this.nombreDelObjeto_ESt==_nombreObjetoArrastrando[this.noDelLienzo]);
				};
			this.setValor=
				function(valor)
				{
					this.myValor=valor;
				};
			this.getValor=function() { return this.myValor; };
			
			this.reiniciaVariablesPorFrame=
				function()
				{
					this.myMovimientoEnX=0;
					this.myMovimientoEnY=0;
				};
			//	Cambia unicamente la posicion en X ý Y
			this.setPosicion=
				function(posicionEnX,posicionEnY)
				{
					this.setPosicionEnX(posicionEnX);
					this.setPosicionEnY(posicionEnY);
				};
				//	Mueve en x y y por cada fotograma
				this.setMover=
					function(movimientoEnX,movimientoEnY)
					{
						//	Coloca el movimiento que tiene que hacer en X
						this.setMoverEnX(movimientoEnX);
						//	Coloca el movimiento que tiene que hacer en Y
						this.setMoverEnY(movimientoEnY);
						//	Se coloca si el movimiento se demora un segundo
						this.enSegundo=function() { this.enSegundos(1); }
						//	Colocando en cuantos segundos realiza esto
						this.enSegundos=
							function(segundosDelMovimiento)
							{
								//	Pasa para pasar de segundos a milisegundos
								var milisegundosDelMovimiento=segundosDelMovimiento*1000;
								
								//	Informa cuanto se tiene que mover por segundo en X
								this.setMoverEnX((this.myMovimientoEnX*getMilisegundosDeUnFrame_ESt())/milisegundosDelMovimiento);
								//	Informa cuanto se tiene que mover por segundo en Y
								this.setMoverEnY((this.myMovimientoEnY*getMilisegundosDeUnFrame_ESt())/milisegundosDelMovimiento);
							}
						return this;
					}
			this.setPosicionEnX=
				function(posicionEnX)
				{
					this.myPosicionEnX=posicionEnX;
				};
			this.getPosicionEnX=function() { return this.myPosicionEnX; };
			
				this.setMoverEnX=
					function(movimientoEnX)
					{
						//	Coloca el movimiento que tiene que hacer en X
						this.myMovimientoEnX=movimientoEnX;
						//	Se coloca si el movimiento se demora un segundo
						this.enSegundo=function() { this.enSegundos(1); }
						//	Colocando en cuantos segundos realiza esto
						this.enSegundos=
							function(segundosDelMovimiento)
							{
								//	Pasa para pasar de segundos a milisegundos
								var milisegundosDelMovimiento=segundosDelMovimiento*1000;
								
								//	Informa cuanto se tiene que mover por segundo en X
								this.myMovimientoEnX=(this.myMovimientoEnX*getMilisegundosDeUnFrame_ESt())/milisegundosDelMovimiento;
							}
						return this;
					}
				this.getMoverEnX=function() { return this.myMovimientoEnX; };
				
			this.getPosicionDeLaFiguraEnX=
				function()
				{
					return this.myPosicionEnX+this.myAddPorEjeEnX;
				}
			this.getPosicionDeLaFiguraEnX=function() { return this.myPosicionEnX; };
			
			this.setPosicionEnY=
				function(posicionEnY)
				{
					this.myPosicionEnY=posicionEnY;
				};
			this.getPosicionEnY=function() { return this.myPosicionEnY; };
			
				this.setMoverEnY=
					function(movimientoEnY)
					{
						//	Coloca el movimiento que tiene que hacer en Y
						this.myMovimientoEnY=movimientoEnY;
						//	Se coloca si el movimiento se demora un segundo
						this.enSegundo=function() { this.enSegundos(1); }
						//	Colocando en cuantos segundos realiza esto
						this.enSegundos=
							function(segundosDelMovimiento)
							{
								//	Pasa para pasar de segundos a milisegundos
								var milisegundosDelMovimiento=segundosDelMovimiento*1000;
								
								//	Informa cuanto se tiene que mover por segundo en Y
								this.myMovimientoEnY=(this.myMovimientoEnY*getMilisegundosDeUnFrame_ESt())/milisegundosDelMovimiento;
							}
						return this;
					}
					this.getMoverEnY=function() { return this.myMovimientoEnY; };
			
			this.getPosicionDeLaFiguraEnY=
				function()
				{
					return this.myPosicionEnY+this.myAddPorEjeEnY;
				}
				
			//	Coloca el ancho y el alto
			this.setMedidas=
				function(ancho,alto)
				{
					this.setAncho(ancho);
					this.setAlto(alto);
				};
				this.setAncho=
					function(ancho)
					{
						this.myAncho=ancho;
						this.ejeCentroEnX();
					}
				this.getAncho=function() { return this.myAncho; };
				this.setAlto=
					function(alto)
					{
						this.myAlto=alto;
						this.ejeCentroEnY();
					}
				this.getAlto=function() { return this.myAlto; };
				
			//	Coloca el color del objeto
			this.setColorObjeto=
				function(color)
				{
					this.myColorObjeto=color;
				};
			this.getColorObjeto=function() { return this.myColorObjeto; };
			
			this.setImagenFondo=
				function(imagenFondo)
				{
					//	Guarda la imagen de fondo
					this.myImagenFondo=imagenFondo;
					//	Informa que existe una imagen de fondo
					this.myBnImagenFondo=true;
				};
			this.getImagenFondo=function() { return this.myImagenFondo; };
				//	true, si hay imagen
				this.bnHayImagen=
					function()
					{
						return this.myBnImagenFondo;
					};
				//	true, si hay imagen
				this.getImagen=
					function()
					{
						return this.myImagenFondo;
					};
			
			//	Mira si hay un objeto sobre este
			this.bnObjetoEnEste=
				function(objeto)
				{
					if(
					this.bnObjetoSobreEste(objeto)
					&&
					!this.bnCursorArrastrando()
					&&
					!objeto.bnCursorArrastrando()
					)
					{
						return true;
					}
					else
					{
						return false;
					}
				}
			this.bnObjetoSobreEste=
				function(objeto)
				{
					if(this.getForma()=='rectangulo' && objeto.getForma()=='rectangulo')
					{
						// Posiciones de nuestro objeto
						var myPosIzq=this.myPosicionEnX+this.myAddPorEjeEnX;
						var myPosDer=this.myPosicionEnX+this.myAncho+this.myAddPorEjeEnX;
						var myPosSup=this.myPosicionEnY+this.myAddPorEjeEnX;
						var myPosInf=this.myPosicionEnY+this.myAlto+this.myAddPorEjeEnX;
						
						//	Posicion del otro objeto
						var objPosIzq=objeto.myPosicionEnX+objeto.myAddPorEjeEnX;
						var objPosDer=objeto.myPosicionEnX+objeto.myAncho+objeto.myAddPorEjeEnX;
						var objPosSup=objeto.myPosicionEnY+objeto.myAddPorEjeEnX;
						var objPosInf=objeto.myPosicionEnY+objeto.myAlto+objeto.myAddPorEjeEnX;
						
						return (
							(	//	Esquina superior izquierda del objeto dentro de este?
								myPosIzq<=objPosIzq && objPosIzq<=myPosDer
								&&
								myPosSup<=objPosSup && objPosSup<=myPosInf
							)
							||
							(	//	Esquina superior derecha del objeto dentro de este?
								myPosIzq<=objPosDer && objPosDer<=myPosDer
								&&
								myPosSup<=objPosSup && objPosSup<=myPosInf
							)
							||
							(	//	Esquina inferior izquierda del objeto dentro de este?
								myPosIzq<=objPosIzq && objPosIzq<=myPosDer
								&&
								myPosSup<=objPosInf && objPosInf<=myPosInf
							)
							||
							(	//	Esquina inferior derecha del objeto dentro de este?
								myPosIzq<=objPosDer && objPosDer<=myPosDer
								&&
								myPosSup<=objPosInf && objPosInf<=myPosInf
							)
						);
					}
					else if((this.getForma()=='rectangulo' && objeto.getForma()=='circulo') || (this.getForma()=='circulo' && objeto.getForma()=='rectangulo'))
					{
						if(this.getForma()=='rectangulo' && objeto.getForma()=='circulo')
						{
							var rectangulo_=this;
							var circulo_=objeto;
						}
						else if(this.getForma()=='circulo' && objeto.getForma()=='rectangulo')
						{
							var rectangulo_=objeto;
							var circulo_=this;
						}
						
						//              | -  DXmX - | 
						//                          
						//	     x1     xm      x2  |
						//	     |      |      |
						//	y1 - +-------------+    |
						//	     |             |
						//	     |             |    |
						//	     |          A  |
						//	ym - |      o------|    |
						//	     |       ¬¬¬   | B  
						//	     |        C ¬¬¬|    |
						//	     |           E |¬¬¬ __
						//	y2 - +-------------+   |__|
						//	
						
						var rectanguloX1=rectangulo_.myPosicionEnX+rectangulo_.myAddPorEjeEnX;
						var rectanguloX2=rectangulo_.myPosicionEnX+rectangulo_.myAncho+rectangulo_.myAddPorEjeEnX;
						var rectanguloY1=rectangulo_.myPosicionEnY+rectangulo_.myAddPorEjeEnX;
						var rectanguloY2=rectangulo_.myPosicionEnY+rectangulo_.myAlto+rectangulo_.myAddPorEjeEnX;
						
						var rectanguloXm=(rectanguloX2+rectanguloX1)/2;
						var rectanguloYm=(rectanguloY2+rectanguloY1)/2;
						
						//	Posicion del otro objeto circulo
						var circuloX=circulo_.myPosicionEnX;
						var circuloY=circulo_.myPosicionEnY;
						
						var DXmX=Math.abs(rectanguloXm-circuloX);
						var DYmY=Math.abs(rectanguloYm-circuloY);
						
						
						if(DYmY<DXmX)
						{
							//	Sacamos A en el grafico anterior
							var rectanguloA=rectangulo_.myAncho/2;
							//	La distancia entre el medio de los dos objetos
							var rectanguloE=Math.sqrt(DXmX*DXmX+DYmY*DYmY);
							
							//	Regla de 3 para encontrar C
							//	A -> DXmX
							//	C -> E
							var rectanguloC=rectanguloE*rectanguloA/DXmX;
							
							if(rectanguloE<(rectanguloC+circulo_.myRadio))
							{
								return true;
							}
						}
						else if(DXmX<DYmY)
						{
							//	Sacamos A en el grafico anterior
							var rectanguloA=rectangulo_.myAlto/2;
							//	La distancia entre el medio de los dos objetos
							var rectanguloE=Math.sqrt(DXmX*DXmX+DYmY*DYmY);
							
							//	Regla de 3 para encontrar C
							//	A -> DXmX
							//	C -> E
							var rectanguloC=rectanguloE*rectanguloA/DYmY;
							
							//	Esta uno dentro del otro
							if(rectanguloE<(rectanguloC+circulo_.myRadio))
							{
								return true;
							}
						}
						else
						{
							//	La distancia entre el medio de los dos objetos
							var rectanguloE=Math.sqrt(DXmX*DXmX+DYmY*DYmY);
							//	Regla de 3 para encontrar C
							var dx_=rectangulo_.myAncho/2;
							var dy_=rectangulo_.myAlto/2;
							var rectanguloC=Math.sqrt(dx_*dx_+dy_*dy_);
							
							//	Esta uno dentro del otro
							if(rectanguloE<(rectanguloC+circulo_.myRadio))
							{
								return true;
							}
						}
					}
					else if(this.getForma()=='circulo' && objeto.getForma()=='circulo')
					{
						var dx_=this.myPosicionEnX-objeto.myPosicionEnX;
						var dy_=this.myPosicionEnY-objeto.myPosicionEnY;
						if(Math.sqrt(dx_*dx_+dy_*dy_)<=(this.myRadio+objeto.myRadio))
						{ return true; }
						else
						{ return false; }
					}
					else if(this.getForma()=='rectangulo' && objeto.getForma()=='punto')
					{
						// Posiciones de nuestro objeto
						var myPosIzq=this.myPosicionEnX+this.myAddPorEjeEnX;
						var myPosDer=this.myPosicionEnX+this.myAncho+this.myAddPorEjeEnX;
						var myPosSup=this.myPosicionEnY+this.myAddPorEjeEnX;
						var myPosInf=this.myPosicionEnY+this.myAlto+this.myAddPorEjeEnX;
						
						//	Posicion del otro objeto
						var objPosHor=objeto.myPosicionEnX;
						var objPosVer=objeto.myPosicionEnY;
						
						return (	//	Esquina superior izquierda del objeto dentro de este?
								myPosIzq<=objPosHor && objPosHor<=myPosDer
								&&
								myPosSup<=objPosVer && objPosVer<=myPosInf
							);
					}
					return false;
				};
			//	true, si el cursor esta sobre este
			this.bnCursorSobreEste=
				function()
				{
					return this.bnObjetoSobreEste(punto(_posixionDelCursorEnX[this.noDelLienzo],_posixionDelCursorEnY[this.noDelLienzo]));
				};
			//	Esta funcion hace que si es el objeto de mas arriba con el mouse arrastrando encima sea el objeto a arrastrar
			this.bnCursorArrastrando=
				function()
				{
					//	Si el mouse esta arrastrandose sobre este
					if(this.nombreDelObjeto_ESt==_nombreObjetoArrastrando[this.noDelLienzo])
					{ return true; }
					else
					{ return false; }
				}
		}
		
		//	Arreglo que retorna true si existe el objeto
		var _arBnObjetosLineas_ESt=new Array();
		//	Arreglo con los objetos de este
		var _arOLineas_ESt=new Array();
		//	Numero de objetos
		var _noObjetosLineas_ESt=new Array();
		//	Declara un objeto de manera sencilla
		function oLineas(noObjetoLinea_ESt)
		{
			//	Mira si ya creo el objeto
			if(_arBnObjetosLineas_ESt[_noDelLienzo_ESt][noObjetoLinea_ESt])
			{	//	Si esta creado lo retorna
				//	=========================
				
				//	Carga el objeto ya creado
				return _arOLineas_ESt[_noDelLienzo_ESt][noObjetoLinea_ESt];
			}
			else
			{	//	Si NO esta creado lo crea y luego lo retorna
				//	============================================
				
				//	Informa que el objeto existe
				_arBnObjetosLineas_ESt[_noDelLienzo_ESt][noObjetoLinea_ESt]=true;
				//	Crea el nuevo objeto con el nombre
				_arOLineas_ESt[_noDelLienzo_ESt][noObjetoLinea_ESt]=new oLineas_ESt(noObjetoLinea_ESt);
				//	Carga uno mas al numero de objetos
				_noObjetosLineas_ESt[_noDelLienzo_ESt]++;
				
				//	Retorna el objeto
				return _arOLineas_ESt[_noDelLienzo_ESt][noObjetoLinea_ESt];
			}
		}
		
		//	Son objetos tipo lineas
		function oLineas_ESt(noObjetoLinea_ESt)
		{
			//	Numero del objeto
			this.noObjetoLinea=noObjetoLinea_ESt;
			//	Ancho de la linea
			this.myAncho=5;
			//	Arreglo con las posicuiones
			this.myArPosicionesEnX=new Array();
			this.myArPosicionesEnY=new Array();
			//	Numero de posiciones creadas
			this.myNoPosicionesCreadas=0;
			//	Color del objeto
			this.myColorObjeto='#000';
			//	Obtener y cambiar el ancho
			this.setAncho= function(ancho) { this.myAncho=ancho; };
			this.getAncho= function() { return this.myAncho; };
			//	Obtener y cambiar la posicion
			this.setPosicion=
				function(posicionEnX,posicionEnY)
				{
					//	true, si esta repitiendo la misma posicion que la vez anterior
					var bnMismaPosicionQueLaAnterior_=false;
					//	Averigua si esta es la misma posicion anterior para no guardarla
					if(0<this.myNoPosicionesCreadas)
					{
						if(this.myArPosicionesEnX[this.myNoPosicionesCreadas-1]==posicionEnX && this.myArPosicionesEnY[this.myNoPosicionesCreadas-1]==posicionEnY)
						{
							bnMismaPosicionQueLaAnterior_=true;
						}
					}
					
					//	Si no repite dos veces la posicion anterior la guarda
					if(!bnMismaPosicionQueLaAnterior_)
					{
						//	Coloca las posiciones nuevas
						this.myArPosicionesEnX[this.myNoPosicionesCreadas]=posicionEnX;
						this.myArPosicionesEnY[this.myNoPosicionesCreadas]=posicionEnY;
						//	Guarda que ahora hay una posicion mas
						this.myNoPosicionesCreadas++;
					}
				};
			this.getPosicionEnX=function(noDeLaPosicion) { return this.myArPosicionesEnX[noDeLaPosicion]; };
			this.getPosicionEnY=function(noDeLaPosicion) { return this.myArPosicionesEnY[noDeLaPosicion]; };
			//	Coloca el numero de posiciones que hay
			this.getNoPosicionesCreadas=function() { return this.myNoPosicionesCreadas; };
			//	Obtener y cambiar el color del objeto
			this.setColorObjeto=function(colorObjeto) { this.myColorObjeto=colorObjeto; };
			this.getColorObjeto=function() { return this.myColorObjeto; };
		}
		
		//	Simula un objeto punto con solo lo necesario
		function punto(posicionEnX,posicionEnY)
		{
			this.myForma='punto';
			this.getForma=function() { return this.myForma; }
			this.myPosicionEnX=posicionEnX;
			this.getPosicionEnX=function() { return this.myPosicionEnX; }
			this.myPosicionEnY=posicionEnY;
			this.getPosicionEnY=function() { return this.myPosicionEnY; }
			
			return this;
		}
		
		//	Funciones de los objetos
		//	========================
		//		Muy importante para no hacer objetos tan pesados
		
		//	Devuelve un arreglo con las propieades existente = true
		//		arPropiedadesExistentes['nombrePorpiedadExistente01']=true;
		//		arPropiedadesExistentes['nombrePorpiedadExistente03']=true;
		//		arPropiedadesExistentes['nombrePorpiedadExistente05']=true;
		function arPropiedadesExistentes(propiedades)
		{
			//	si existe la pripiedad esta qudara aca asi: arExistePropiedad[nombrePropiedad]=true;
			var arExistePropiedad=new Array();
			//	Pasa las propiedades si existen un arreglo para ser usado
			if(propiedades!=undefined)
			{
				//	Divide las propiedades en cada uno de sus tipos
				arPropiedades=propiedades.split(_divizorDePropiedadesObjeto);
				//	Pasa por cada propiead
				for(contPropiedades=0;contPropiedades<arPropiedades.length;contPropiedades++)
				{
					//	Pasa la propiedad a esta variable
					var propiedad=arPropiedades[contPropiedades];
					//	Informa que esta pripiedad existe
					arExistePropiedad[propiedad]=true;
				}
			}
			//	devuelve el arreglo
			return arExistePropiedad;
		}
		
	/**
	Ejecutar los primeros pasos del lienzo
	************************************/
	
	//	Esta funcion ejecuta desde cero todo lo que se realizara con el lienzo
	function EjecutarDesdeCeroLienzo_ESt(codigoUnicoLienzo_ESt)
	{
		//	Iniciar variables para modificar el canvas
		colocarVariablesNecesariasParaCanvas_ESt(codigoUnicoLienzo_ESt);
		//	Si esta corriendo la animacion la detiene
		DetenerLaAnimacion_ESt();
		//	Reiniciar variables globales
		ReiniciarVariables_ESt();
		//	Leer el codigo de crear objetos
		LeerCrearObjetos_ESt();
		//	Limpia el lienzo
		LimpiarLienzo_ESt();
		//	Limpia los objetos que no estan en el lienzo
		LimpiarDivDelLienzo_ESt();
		//	Dibuja en el lienso las variables
		DibujarEnElLienzoLasVariablesLineas_ESt();
		//	Dibuja en el lienso las variables
		DibujarEnElLienzoLasVariables_ESt();
		//	Finalizar variables para modificar el canvas
		finalizarVariablesNecesariasParaCanvas_ESt();
	}
	
	//	idDondeEstaElCodigoPuro
	var _idDondeEstaElCodigoPuro_ESt='iTextAreaCrearObjetos_LugarDelCodigoJS_ESt';
	//	Leer el codigo de crear objetos
	function LeerCrearObjetos_ESt()
	{
		if(_codigoDeCreacionParaLienzo[_noDelLienzo_ESt]!==undefined)
		{
			eval(' try{ '+_codigoDeCreacionParaLienzo[_noDelLienzo_ESt]+' } catch(err) { DetenerLaAnimacion_ESt(); consola(err.message); }');
		}
		else
		{
			var oDondeEstaElCodigoPuro_ESt=document.getElementById(_arCodigoUnicoDelLienzo_ESt[_noDelLienzo_ESt]+'__'+_idDondeEstaElCodigoPuro_ESt);
			//	Ejecuta el codigo si este existe
			if(oDondeEstaElCodigoPuro_ESt)
			{
				eval(' try{ '+oDondeEstaElCodigoPuro_ESt.value+' } catch(err) { DetenerLaAnimacion_ESt(); consola(err.message); }');
			}
		}
	}

	/**
	Ejecutar los primeros pasos de animación
	************************************/
	
	//	Numero de frames por segundo
	var _noDeFramesPorSegundo=25;
	//	true, cuando a sacado por lomenos una ves el tiempo en milisegundos de un frame
	var _bnExisteMilisegundosDeUnFrame_ESt=false;
	//	milisegundos de un frame
	var _milisegundosDeUnFrame;
	//	Retorna el numero de milisegundos que dura un frame
	function getMilisegundosDeUnFrame_ESt()
	{
		if(_bnExisteMilisegundosDeUnFrame_ESt)
		{
			return _milisegundosDeUnFrame;
		}
		else
		{
			_milisegundosDeUnFrame=(1000/_noDeFramesPorSegundo);
			return _milisegundosDeUnFrame;
		}
	}
	//	true, si se esta ejecutando la animacion
	var _bnSeEstaEjecuntandoLaAnimacion=false;
	//	Valor de la animacion
	var _noAnimacion;
	//	Esta la animacion, debe ir despues del EjecutarDesdeCeroLienzo_ESt()
	function EjecutarAnimacionLienzo_ESt(codigoUnicoLienzo_ESt)
	{
		//	Si existe borra los parametros la animacion anterior
		if(_bnSeEstaEjecuntandoLaAnimacion)
		{ clearInterval(_noAnimacion); }
		//	Planear	entrar esta en un tiempo determinado
		_noAnimacion=setInterval("EjecutarAnimacion_ESt('"+codigoUnicoLienzo_ESt+"'); ",getMilisegundosDeUnFrame_ESt());
	}
	
	function EjecutarAnimacion_ESt(codigoUnicoLienzo_ESt)
	{
		//	Iniciar variables para modificar el canvas
		colocarVariablesNecesariasParaCanvas_ESt(codigoUnicoLienzo_ESt);
		//	Crea las lineas que se esten cargando en el momento
		CargarLosTrazosDelPizarron();
		//	Leer el codigo de crear objetos
		LeerAnimacion_ESt();
		//	Limpia el lienzo
		LimpiarLienzo_ESt();
		//	Verificar Onclicks
		VerificarOnClicks();
		//	Verificar seguir al cursor
		ObjetosQueSeguenAlCursor();
		//	Dibuja en el lienzo las lineas de las variables
		DibujarEnElLienzoLasVariablesLineas_ESt();
		//	Dibuja en el lienzo las variables
		DibujarEnElLienzoLasVariables_ESt();
		//	Limpiar variables por frame
		LimpiarVariablesAlFinalDelFrame();
		//	Finalizar variables para modificar el canvas
		finalizarVariablesNecesariasParaCanvas_ESt();
		//	Informa que se esta ejecutando la animacion
		_bnSeEstaEjecuntandoLaAnimacion=true;
	}
	
		//	Numero de trazos creados
		var _noTrazos=new Array();
		//	Bandera que indica que se esta creando un trazo
		var _bnCreandoUnTrazo=new Array();
		//	Crea las lineas que se esten cargando en el momento
		function CargarLosTrazosDelPizarron()
		{
			//	Si el cursor esta oprimido
			if(_bnCursorOprimido)
			{
				if(!bnObjetoArrastrandoEnEsteLienzo_ESt(_noDelLienzo_ESt))
				{
					if(bnEstaCursorEnEsteLienzo_ESt(_noDelLienzo_ESt))
					{
						//	Si no existe el arreglo del numero de lienzo lo crea
						if(!_noTrazos[_noDelLienzo_ESt]) { _noTrazos[_noDelLienzo_ESt]=0; }
						//	Coloca la posicion de las lineas hasta que suelte el arrastrar
						oLineas(_noTrazos[_noDelLienzo_ESt]).setPosicion(_posixionDelCursorEnX[_noDelLienzo_ESt],_posixionDelCursorEnY[_noDelLienzo_ESt]);
						//	Informa que se esta creando un trazo
						_bnCreandoUnTrazo[_noDelLienzo_ESt]=true;
					}
				}
			}
			//	Si no esta el cursor oprimido
			else
			{
				//	Informa que ya no se esta creando un trazo
				if(_bnCreandoUnTrazo[_noDelLienzo_ESt])
				{
					//	Cuenta un trazo mas para este lienzo
					_noTrazos[_noDelLienzo_ESt]++;
				}
				else
				{
					_bnCreandoUnTrazo[_noDelLienzo_ESt]=false;
				}
			}
		}
		
		//	Limpia todas las variables que toca borrar por frame
		function LimpiarVariablesAlFinalDelFrame()
		{
//	ALERTA
//	Toca borrar el objeto no ocultarlo
//			o('RectanguloAlHacerClick_ESt').setPosicion(-5000,-5000);
//			o('RectanguloAlArrastrarConCursor_ESt').setPosicion(-5000,-5000);
			//	Limpia el ancho acumulado de lso objetos que no son del liexo
			_anchoAcumulado=0;
		}
	
		//	idDondeEstaElCodigoPuro
		var _idDondeEstaElCodigoPuro_LeerAnimacion_ESt='iTextAreaAnimacion_LugarDelCodigoJS_ESt';
		//	Leer el codigo de crear objetos
		function LeerAnimacion_ESt()
		{
			if(_codigoDeAnimacionParaLienzo[_noDelLienzo_ESt]!==undefined)
			{
				eval('try{ '+_codigoDeAnimacionParaLienzo[_noDelLienzo_ESt]+' } catch(err) { DetenerLaAnimacion_ESt(); consola(err.message); } ');
			}
			else
			{
				var oDondeEstaElCodigoPuro_Animacion_ESt=document.getElementById(_arCodigoUnicoDelLienzo_ESt[_noDelLienzo_ESt]+'__'+_idDondeEstaElCodigoPuro_LeerAnimacion_ESt);
				//	Ejecuta este codigo si existe
				if(oDondeEstaElCodigoPuro_Animacion_ESt)
				{
					eval('try{ '+oDondeEstaElCodigoPuro_Animacion_ESt.value+' } catch(err) { DetenerLaAnimacion_ESt(); consola(err.message); } ');
				}
			}
		}
		
		function VerificarOnClicks()
		{
			for(var contObjetos_ESt=0;contObjetos_ESt<_noObjetos_ESt[_noDelLienzo_ESt];contObjetos_ESt++)
			{
				//	Carga el nombre de cada uno de los objetos
				nombreObjeto_ESt=_arNombresObjetos_ESt[_noDelLienzo_ESt][contObjetos_ESt];
				//	Con el nombre cargamos el objeto
				var objetoNombre=o(nombreObjeto_ESt);
				//	Si realizo un click actua
				if(_bnOnClick_ESt[_noDelLienzo_ESt])
				{
					//	Si tiene habilitado el onclick actua
					if(objetoNombre._bnOnClick)
					{
						//	Si es un swisn cambia el valor
						if(objetoNombre.getQueEs()=='swish')
						{
							//	Si el click se hizo sobre este
							if(objetoNombre.bnObjetoSobreEste(punto(_posixionDelCursorEnX[_noDelLienzo_ESt],_posixionDelCursorEnY[_noDelLienzo_ESt])))
							{
								//	Si el valor es 0 lo cambia a 1
								if(objetoNombre.getValor()==0)
								{
									objetoNombre.setValor(1);
								}
								else
								{
									objetoNombre.setValor(0);
								}
							}
						}
					}
				}
				//	Informa que no hay mas click realizados
				informarSobreClick_ESt(_noDelLienzo_ESt,false);
			}
		}
		
		function ObjetosQueSeguenAlCursor()
		{
			//	Pasa por cada uno de los objetos
			for(var contObjetos_ESt=0;contObjetos_ESt<_noObjetos_ESt[_noDelLienzo_ESt];contObjetos_ESt++)
			{
				//	Carga el nombre de cada uno de los objetos
				nombreObjeto_ESt=_arNombresObjetos_ESt[_noDelLienzo_ESt][contObjetos_ESt];
				//	Con el nombre cargamos el objeto
				var objetoNombre=_arO_ESt[_noDelLienzo_ESt][nombreObjeto_ESt];
				//	Si el objeto  es attastrable el lo arrastra cuando llegue el momento
				if(objetoNombre.bnExistePropiedad('arrastrable'))
				{
					//	Si el click se hizo sobre este
					if(objetoNombre.bnCursorArrastrando())
					{
						//	Mueve el objeto a la posicion del mouse
						objetoNombre.setPosicion(_posixionDelCursorEnX[_noDelLienzo_ESt]-objetoNombre.getPosicionDelCursorEnX(),_posixionDelCursorEnY[_noDelLienzo_ESt]-objetoNombre.getPosicionDelCursorEnY());
					}
				}
			}
		}