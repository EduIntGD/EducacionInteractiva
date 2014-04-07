function RegistrarCargado_EI(nombreGrupoDeDivs_EI,nombreDelDatoACargar_EI,idDivEnDondeCargar_EI)
{
	if(!_arCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI][nombreDelDatoACargar_EI])
	{
		arNombreCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI][arNoCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI]]=nombreDelDatoACargar_EI;
		arNombreDelIdEnDondeCargo_EI[nombreGrupoDeDivs_EI][arNoCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI]]=idDivEnDondeCargar_EI;
		arNoCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI]++;
	}
	_arCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI][nombreDelDatoACargar_EI]=true;
}
function OcultarCargarEnDivsCargadas_EI(nombreGrupoDeDivs_EI)
{
	for(contCargarEnDivsACargar_EI=0;contCargarEnDivsACargar_EI<arNoCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI];contCargarEnDivsACargar_EI++)
	{
		OcultarCargarEnDivsCargada_EI(nombreGrupoDeDivs_EI,arNombreCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI][contCargarEnDivsACargar_EI],arNombreDelIdEnDondeCargo_EI[nombreGrupoDeDivs_EI][contCargarEnDivsACargar_EI]);
	}
}
function OcultarCargarEnDivsCargada_EI(nombreGrupoDeDivs_EI,nombreDelDatoACargar_EI,idDivEnDondeCargar_EI)
{
	document.getElementById(idDivEnDondeCargar_EI).style.display="none";
}
function MostrarCargarEnDivsCargada_EI(nombreGrupoDeDivs_EI,nombreDelDatoACargar_EI,idDivEnDondeCargar_EI)
{
	document.getElementById(idDivEnDondeCargar_EI).style.display="block";
}
function idSubLugar_EI(nombreGrupoDeDivs_EI,nombreDelDatoACargar_EI)
{
	return "iSubLugar_"+nombreGrupoDeDivs_EI+"_"+nombreDelDatoACargar_EI+"_EI";
}
function IniciarVariableCargarCargarEnDiv_EI(nombreGrupoDeDivs_EI)
{
	if(!(_arCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI]))
	{ _arCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI]=new Array(); }
	if(!(arNombreCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI]))
	{ arNombreCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI]=new Array(); }
	if(!(arNoCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI]))
	{ arNoCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI]=0; }
	if(!(arNombreDelIdEnDondeCargo_EI[nombreGrupoDeDivs_EI]))
	{ arNombreDelIdEnDondeCargo_EI[nombreGrupoDeDivs_EI]=new Array();; }
}
function MostrarCargandoEnDiv_EI(idDivEnDondeCargar_EI)
{
	document.getElementById(this.idDivEnDondeCargar_EI).innerHTML='... cargando ...';
}
var _arCargarEnDivsYaCargadas_EI=new Array();
var arNombreCargarEnDivsYaCargadas_EI=new Array();
var arNoCargarEnDivsYaCargadas_EI=new Array();
var arNombreDelIdEnDondeCargo_EI=new Array();
var noGruposCargarEnDivsYaCargadas_EI=0;
var _arCargarSiempre_EI=new Array();
var _mensajeError_cargarPestanas='Problema al cargar las pestanas';
function cargarEnDivTipoRadioButton_EI(nombreDelDatoACargar_EI,idDivEnDondeCargar_EI,nombreGrupoDeDivs_EI,direccionACargar_EI)
{
	if(nombreGrupoDeDivs_EI==undefined)
	{
		nombreGrupoDeDivs_EI="GrupoDivUnico"+noGruposCargarEnDivsYaCargadas_EI++;
	}
	if(direccionACargar_EI==undefined)
	{
		direccionACargar_EI="../Tablas/";
	}
	
	OcultarCargarEnDivsCargadas_EI(nombreGrupoDeDivs_EI);
	
	IniciarVariableCargarCargarEnDiv_EI(nombreGrupoDeDivs_EI);
	
	if(_arCargarEnDivsYaCargadas_EI[nombreGrupoDeDivs_EI][nombreDelDatoACargar_EI] && !(_arCargarSiempre_EI[idDivEnDondeCargar_EI]))
	{
		MostrarCargarEnDivsCargada_EI(nombreGrupoDeDivs_EI,nombreDelDatoACargar_EI,idDivEnDondeCargar_EI);
	}
	else
	{
		RegistrarCargado_EI(nombreGrupoDeDivs_EI,nombreDelDatoACargar_EI,idDivEnDondeCargar_EI);
		MostrarCargarEnDivsCargada_EI(nombreGrupoDeDivs_EI,nombreDelDatoACargar_EI,idDivEnDondeCargar_EI);
		
		
		var xmlhttp;
		if (window.XMLHttpRequest)
		{	// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else
		{	// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		xmlhttp.nombreGrupoDeDivs_EI=nombreGrupoDeDivs_EI;
		xmlhttp.nombreDelDatoACargar_EI=nombreDelDatoACargar_EI;
		xmlhttp.idDivEnDondeCargar_EI=idDivEnDondeCargar_EI;
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4)
			{
				if(xmlhttp.status==200)
				{
					document.getElementById(this.idDivEnDondeCargar_EI).innerHTML=xmlhttp.responseText;
					
					if(xmlhttp.responseText.indexOf("<!--IniOnload_EI--")!=-1)
					{
						var valorInicialACortar_=xmlhttp.responseText.indexOf("<!--IniOnload_EI--");
						var valorFinalACortar_=xmlhttp.responseText.indexOf("--/FinOnload_EI-->");
						
						eval(xmlhttp.responseText.substring(valorInicialACortar_+("<!--IniOnload_EI--".length),valorFinalACortar_));
					}
					
					if(xmlhttp.responseText.indexOf("<!--Alto_EI-ini--")!=-1)
					{
						var valorInicialACortar_=xmlhttp.responseText.indexOf("<!--Alto_EI-ini--");
						var valorFinalACortar_=xmlhttp.responseText.indexOf("--fin-Alto_EI-->");
						
						xmlhttp.responseText.substring(valorInicialACortar_+("<!--Alto_EI-ini--".length),valorFinalACortar_);
					}
					
					if(xmlhttp.responseText.indexOf("<!--CargarSiempre-->")!=-1)
					{
						_arCargarSiempre_EI[this.idDivEnDondeCargar_EI]=true;
					}
				}
				else
				{
					document.getElementById(this.idDivEnDondeCargar_EI).innerHTML='<span class="Error_EI_Pestanas" >'+_mensajeError_cargarPestanas+'<span>';
					_arCargarSiempre_EI[this.idDivEnDondeCargar_EI]=true;
				}
			}
		}
		xmlhttp.open("POST",direccionACargar_EI,true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset:ISO-8859-1");
		xmlhttp.send("nombreDeLDatoACargar="+nombreDelDatoACargar_EI);
	}
}
