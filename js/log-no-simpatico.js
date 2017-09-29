window.onload = function (){

    //var logService = "https://simpatico.morelab.deusto.es/log.php?id=1&timestamp=000&status=test";
    var logService = "https://simpatico.morelab.deusto.es/log.php";

    // Make an unique id for the visitor.
    var userID = new Date().valueOf();

    var enlaceIniciar = document.getElementById('inicioSolicitudeLateralPDF');
    enlaceIniciar.addEventListener('click', logIniciarPresentacion);

    function logIniciarPresentacion(userId)
    {
        console.log("Empezando el tema->"+userID);
        sendLog(userID, 'init');
        setInterval(function() {
            logIdleStatus(userID);
        }, 60 * 1000); // Mandamos un log cada minuto
    }

    function logIdleStatus(userID)
    {
        var timeStamp = new Date().toISOString();
        console.log('Log de cada minuto: userID->' + userID + ' Timestamp->'+timeStamp);
        sendLog(userID, 'idle');
    }

    function sendLog(userID, status)
    {
        var request;
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
          request = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE
          try {
            request = new ActiveXObject('Msxml2.XMLHTTP');
          } 
          catch (e) {
            try {
              request = new ActiveXObject('Microsoft.XMLHTTP');
            } 
            catch (e) {}
          }
        }

        var timeStamp = new Date().toISOString();

        request.open('GET', logService+'?id='+userID+'&timestamp='+timeStamp+'&status='+ status, true);
        request.send(null);
    }


}