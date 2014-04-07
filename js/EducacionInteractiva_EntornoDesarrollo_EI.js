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
				//_oCrearObjetos_LugarDelCodigo_ESt.style.top=-_oSombreDeCrearObjetos_LugarDelCodigo_ESt.offsetHeight+'px';
				_oCrearObjetos_LugarDelCodigo_ESt.style.height=_oSombreDeCrearObjetos_LugarDelCodigo_ESt.offsetHeight+'px';
				break;
			case 'Animacion':
				//_oAnimacion_LugarDelCodigo_ESt.style.top=-_oSombreDeAnimacion_LugarDelCodigo_ESt.offsetHeight+'px';
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
	var _DivisorDePalabras='�';
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
		//	Solo entra si encuentra algun tipo de comilla
		if(noPosicionDelElementoMasCercano!=-1)
		{
			//	Contendra la posici�n mas cercana de los caracteres dentro de los cuales no se actua
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
					//	Cambia los espacios para que funcionen como tal pero tambien como divizores
					stEntreComillas_ESt=ReplaceAll_ESt('  ',' &nbsp;',stEntreComillas_ESt);
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
					
//	Borrar estas dos linea:
					//	Coloca el resultado sin el cierre de comillas
					//	valor_ESt_=stAntesComillas_ESt+nuevoStEntreComillas_ESt;
					
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
					//	Contendra la posici�n mas cercana de los caracteres dentro de los cuales no se actua
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
		var arPalabrasQueSimbolisanElFinDeUnaPlabra=[' ','(',')','[',']','+',';','.','\r','\n',',','='];
		//	Coloco un simbolo al comienzo y al final
		valor_ESt_=_DivisorDePalabras+valor_ESt_+_DivisorDePalabras;
		//	Pasa por cada una de estas y le coloca antes y despues de las mismas un '[%]' de tal manera que divida estas palabras
		for(contPalabrasQSEFDUP=0;contPalabrasQSEFDUP<arPalabrasQueSimbolisanElFinDeUnaPlabra.length;contPalabrasQSEFDUP++)
		{
			var valor_ESt_=ReplaceAll_ESt(arPalabrasQueSimbolisanElFinDeUnaPlabra[contPalabrasQSEFDUP],_DivisorDePalabras+arPalabrasQueSimbolisanElFinDeUnaPlabra[contPalabrasQSEFDUP]+_DivisorDePalabras,valor_ESt_);
		}
		/**	"%o%(%LasComillasSeRemplazanPorTextosUnicos%)%%.%posicionEnX%(%12%)%;" **/
		
		//	Cambia los espacios por s simil en HTML
		valor_ESt_=ReplaceAll_ESt('  ','&nbsp;',valor_ESt_);
		valor_ESt_=ReplaceAll_ESt('<','&#60;',valor_ESt_);
		valor_ESt_=ReplaceAll_ESt('>','&#62;',valor_ESt_);
		
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
		var valor_ESt_=ReplaceAll_ESt("\r",'<br/>',valor_ESt_);
		
		//	Vuelve a convertir lo que esta entre comillas pero con un span
		for(var contDentroDeLasComillas_ESt=0;contDentroDeLasComillas_ESt<arDentroDeLasComillas.length;contDentroDeLasComillas_ESt++)
		{
			valor_ESt_=valor_ESt_.replace(textoParaRemplazarContenidoDeComillas_ESt+contDentroDeLasComillas_ESt,_DivisorDePalabras+'<span cml="ESt" >'+arIniContenidoANoTenerEnCuenta[contDentroDeLasComillas_ESt]+arDentroDeLasComillas[contDentroDeLasComillas_ESt]+(arBnLasComillasFinalizaron[contDentroDeLasComillas_ESt]?arIniContenidoANoTenerEnCuenta[contDentroDeLasComillas_ESt]:'')+'</span>'+_DivisorDePalabras);
		}
		
		//	Coloca un epacio al final para que sea visible el <br> al final
		valor_ESt_=valor_ESt_+'&nbsp;'+_DivisorDePalabras;
		
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
		
		//	Al final quita los divizores de la pabras
		valor_ESt_=arPorPalabrasValor_ESt.join('');
		
		return valor_ESt_;
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
	
