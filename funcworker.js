onmessage = function (message) {
    var params = message.data.params;
    var newParam = {};
    for (var el in params) {
        if (params[el].slice(0, 8) == "function") {
            var x = new Function("", params[el]);
        }
        else {
            var x = JSON.parse(params[el]);
        }
        newParam[el] = x;
    }

    debugger;
    for (var el in newParam) {
        this[el] = eval(newParam[el]);
    }
    //var book = message.data.params;
    eval(message.data.func);
    main(newParam);
    function main(newParam) {
        //x.apply(this, param);
        //var finished = x.apply(this, param);
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

