(function (window) {

    var dataService = {};

    var buildResponse = function(status, responseText){
        try{
            return {
                status: status,
                data: JSON.parse(responseText)
            };
        } catch (e) {
            return {
                status: status,
                errorMessage: {
                    message: "test"
                }
            };
        }
    };



    dataService.loadDataFromURL = function loadDataFromURL(httpMethod, requestURL, callback){
        var request;

        if(window.XMLHttpRequest){
            request = new XMLHttpRequest();
        } else {
            request = new ActiveXObject('Microsoft.XMLHTTP');
        }

        request.onreadystatechange = function(){
            if(request.readyState === 4){ // Quand la requete est terminée
                callback(buildResponse(request.status, request.responseText));
            }
        };

        try {
            request.open(httpMethod, requestURL, true);
            request.send();
        } catch (e) {
            throw new Error(e.message);
        }
    }

    window.dataService = dataService;
})(window);

