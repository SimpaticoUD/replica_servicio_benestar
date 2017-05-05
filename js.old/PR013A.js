$(function() {
     func1();
	 func2();
     })

function func1() {
    var sel = document.getElementById("ProcedimientoXunta.PR013A_2.Delegacion.cmbUnidad");
    var combo = sel.options[sel.selectedIndex].text;
	if(document.getElementById("ProcedimientoXunta.PR013A_2.Delegacion.rbRadio.2").checked && combo != "Seleccione") {
		var idioma = document.getElementById("idioma").value;
		document.getElementById("ProcedimientoXunta.PR013A_2.Destinatario.cmbConselleria").value=sel.value.substring(0,2);
		document.getElementById("ProcedimientoXunta.PR013A_2.Destinatario.cmbUnidad").value=sel.value.substring(2,8);
        if(idioma === "es" ){
			document.getElementById("ProcedimientoXunta.PR013A_2.Destinatario.txtUnidad").value="Secretaría General Técnica de la Consellería de " + combo;
		}else{
			document.getElementById("ProcedimientoXunta.PR013A_2.Destinatario.txtUnidad").value="Secretaría Xeral Técnica da Consellería de " + combo;
		}
	}
}
 
 function func2(){
	if(document.getElementById("ProcedimientoXunta.PR013A_2.Delegacion.rbRadio.1").checked){
        document.getElementById("ProcedimientoXunta.PR013A_2.Delegacion.cmbUnidad").value="";
    
    document.getElementById("ProcedimientoXunta.PR013A_2.Destinatario.cmbConselleria").value="PX";
    document.getElementById("ProcedimientoXunta.PR013A_2.Destinatario.cmbUnidad").value="120000";
	var idioma = document.getElementById("idioma").value;
	if(idioma === "es" ){
		document.getElementById("ProcedimientoXunta.PR013A_2.Destinatario.txtUnidad").value="Secretaría General Técnica de la Presidencia";
    }else{
        document.getElementById("ProcedimientoXunta.PR013A_2.Destinatario.txtUnidad").value="Secretaría Xeral Técnica da Presidencia";
    }
	}
}

