//Document ready 
jQuery(function($) {
	// Defaults del date picker
	$.datepicker.setDefaults({
		showOn : "button",
		buttonImage : global_contextPath + "/imagenes/calendario.png",
		buttonImageOnly : true,
		dateFormat : 'dd/mm/yy',
	    changeYear: true,
	    changeMonth: true,
	    yearRange: "-100:+1"
	});

	$(".fecha_dp").datepicker();

	
	//Enlaces del paginador
	actualizarEnlacesPaginacion();
});




//Función para leer los enlaces de paginación y añadirle los parámetros que faltan
var actualizarEnlacesPaginacion = function (){
	
	//Ver si vienen cubiertos los parámetros que nos interesan
	var paramSort = getURLParameter("sort");
	var paramDir  = getURLParameter("dir");
	
	if (paramSort != null || paramDir != null){
		//Se compe la cadena para añadirlos al enlace
		var extraParam = "";
		if (paramSort != null){
			extraParam += "&sort="+paramSort;
		}
		if (paramDir != null){
			extraParam += "&dir="+paramDir;
		}
		
		//se actualizan todos los enlaces del grupo de navegación
		$(".pagelinks a").each(function(index){
			var href = $(this).attr('href');
			$(this).attr('href', href + extraParam);			
		});
		
		//Se actualizan los enlaces de exportación
		$(".exportlinks a").each(function(index){
			var href = $(this).attr('href');
			$(this).attr('href', href + extraParam);			
		});	
	}		
};

//Obtiene un parámetro de la queryString de la página
var getURLParameter =  function getURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        };
    }
    return null;
};



//Función para adaptar botones a IE7
var evClickBotonIE7 = function(elemento, nombre, opcion){
	$('#IE7_param').remove();
	$('<input>').attr({type:'hidden', name: nombre, value: opcion, id:'IE7_param'}).appendTo($(elemento).closest('form'));
	
};