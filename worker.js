onmessage = function(message){

    http(message.data.openRequest);

    function http(openRequest)
    {
        var request = new XMLHttpRequest();
        request.open(openRequest.type, openRequest.url, openRequest.async);
        request.onload = function (e) {
            postMessage(JSON.parse(this.response));
            close();
        }
        request.send();
    }
}

