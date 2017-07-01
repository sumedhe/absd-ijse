$("#btn-send").click(function(){

    $.getJSON("json-processing-1", {}, function (response) {
        $("#div-output").text(JSON.stringify(response));
    })
});

