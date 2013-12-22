function CargarEnDivCargado_ESt(nombreGrupoDeDivs_ESt,nombreDelDatoACargar_ESt,idDivEnDondeCargar_ESt)
{
	if(!_arCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt][nombreDelDatoACargar_ESt])
	{
		arNombreCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt][arNoCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt]]=nombreDelDatoACargar_ESt;
		arNombreDelIdEnDondeCargo_ESt[nombreGrupoDeDivs_ESt][arNoCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt]]=idDivEnDondeCargar_ESt;
		arNoCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt]++;
	}
	MostrarCargarEnDivsCargada_ESt(nombreGrupoDeDivs_ESt,nombreDelDatoACargar_ESt,idDivEnDondeCargar_ESt);
	_arCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt][nombreDelDatoACargar_ESt]=true;
}
function OcultarCargarEnDivsCargadas_ESt(nombreGrupoDeDivs_ESt)
{
	for(contCargarEnDivsACargar_ESt=0;contCargarEnDivsACargar_ESt<arNoCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt];contCargarEnDivsACargar_ESt++)
	{
		OcultarCargarEnDivsCargada_ESt(nombreGrupoDeDivs_ESt,arNombreCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt][contCargarEnDivsACargar_ESt],arNombreDelIdEnDondeCargo_ESt[nombreGrupoDeDivs_ESt][contCargarEnDivsACargar_ESt]);
	}
}
function OcultarCargarEnDivsCargada_ESt(nombreGrupoDeDivs_ESt,nombreDelDatoACargar_ESt,idDivEnDondeCargar_ESt)
{
	document.getElementById(idDivEnDondeCargar_ESt).style.display="none";
}
function MostrarCargarEnDivsCargada_ESt(nombreGrupoDeDivs_ESt,nombreDelDatoACargar_ESt,idDivEnDondeCargar_ESt)
{
	document.getElementById(idDivEnDondeCargar_ESt).style.display="block";
}
function idSubLugar_ESt(nombreGrupoDeDivs_ESt,nombreDelDatoACargar_ESt)
{
	return "iSubLugar_"+nombreGrupoDeDivs_ESt+"_"+nombreDelDatoACargar_ESt+"_ESt";
}
function IniciarVariableCargarCargarEnDiv_ESt(nombreGrupoDeDivs_ESt)
{
	if(!(_arCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt]))
	{ _arCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt]=new Array(); }
	if(!(arNombreCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt]))
	{ arNombreCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt]=new Array(); }
	if(!(arNoCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt]))
	{ arNoCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt]=0; }
	if(!(arNombreDelIdEnDondeCargo_ESt[nombreGrupoDeDivs_ESt]))
	{ arNombreDelIdEnDondeCargo_ESt[nombreGrupoDeDivs_ESt]=new Array();; }
}
var _arCargarEnDivsYaCargadas_ESt=new Array();
var arNombreCargarEnDivsYaCargadas_ESt=new Array();
var arNoCargarEnDivsYaCargadas_ESt=new Array();
var arNombreDelIdEnDondeCargo_ESt=new Array();
var noGruposCargarEnDivsYaCargadas_ESt=0;
var _arCargarSiempre_ESt=new Array();
function cargarEnDivTipoRadioButton_ESt(nombreDelDatoACargar_ESt,idDivEnDondeCargar_ESt,nombreGrupoDeDivs_ESt,direccionACargar_ESt)
{
	if(nombreGrupoDeDivs_ESt==undefined)
	{
		nombreGrupoDeDivs_ESt="GrupoDivUnico"+noGruposCargarEnDivsYaCargadas_ESt++;
	}
	if(direccionACargar_ESt==undefined)
	{
		direccionACargar_ESt="../Tablas/";
	}
	
	OcultarCargarEnDivsCargadas_ESt(nombreGrupoDeDivs_ESt);
	
	IniciarVariableCargarCargarEnDiv_ESt(nombreGrupoDeDivs_ESt);
	
	if(_arCargarEnDivsYaCargadas_ESt[nombreGrupoDeDivs_ESt][nombreDelDatoACargar_ESt] && !(_arCargarSiempre_ESt[idDivEnDondeCargar_ESt]))
	{
		MostrarCargarEnDivsCargada_ESt(nombreGrupoDeDivs_ESt,nombreDelDatoACargar_ESt,idDivEnDondeCargar_ESt);
	}
	else
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
		
		xmlhttp.nombreGrupoDeDivs_ESt=nombreGrupoDeDivs_ESt;
		xmlhttp.nombreDelDatoACargar_ESt=nombreDelDatoACargar_ESt;
		xmlhttp.idDivEnDondeCargar_ESt=idDivEnDondeCargar_ESt;
		xmlhttp.onreadystatechange=function()
		{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				document.getElementById(this.idDivEnDondeCargar_ESt).innerHTML=xmlhttp.responseText;
				
				if(xmlhttp.responseText.indexOf("<!--IniOnload_ESt--")!=-1)
				{
					var valorInicialACortar_=xmlhttp.responseText.indexOf("<!--IniOnload_ESt--");
					var valorFinalACortar_=xmlhttp.responseText.indexOf("--/FinOnload_ESt-->");
					
					eval(xmlhttp.responseText.substring(valorInicialACortar_+("<!--IniOnload_ESt--".length),valorFinalACortar_));
				}
				
				if(xmlhttp.responseText.indexOf("<!--Alto_ESt-ini--")!=-1)
				{
					var valorInicialACortar_=xmlhttp.responseText.indexOf("<!--Alto_ESt-ini--");
					var valorFinalACortar_=xmlhttp.responseText.indexOf("--fin-Alto_ESt-->");
					
					xmlhttp.responseText.substring(valorInicialACortar_+("<!--Alto_ESt-ini--".length),valorFinalACortar_);
				}
				
				if(xmlhttp.responseText.indexOf("<!--CargarSiempre-->")!=-1)
				{
					_arCargarSiempre_ESt[this.idDivEnDondeCargar_ESt]=true;
				}
				
				CargarEnDivCargado_ESt(this.nombreGrupoDeDivs_ESt,this.nombreDelDatoACargar_ESt,this.idDivEnDondeCargar_ESt);
				
				OcultarCargarEnDivsCargadas_ESt(this.nombreGrupoDeDivs_ESt);
				MostrarCargarEnDivsCargada_ESt(this.nombreGrupoDeDivs_ESt,this.nombreDelDatoACargar_ESt,this.idDivEnDondeCargar_ESt);
			}
		}
		xmlhttp.open("POST",direccionACargar_ESt,true);
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset:ISO-8859-1");
		xmlhttp.send("nombreDeLDatoACargar="+nombreDelDatoACargar_ESt);
	}
}