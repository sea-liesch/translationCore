onmessage = function(message){
    debugger;
    var x = new Function("book", message.data.func);
    main();
    function main(e)
    {
        x(e);
        debugger;
        // var request = new XMLHttpRequest();
        // request.open(openRequest.type, openRequest.url, openRequest.async);
        // request.onload = function (e) {
        //     postMessage(JSON.parse(this.response));
        //     close();
        // }
        // request.send();
    }
}

