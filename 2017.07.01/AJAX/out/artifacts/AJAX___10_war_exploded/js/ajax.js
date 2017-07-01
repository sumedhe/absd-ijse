$("#btn-addnewcustomer").click(function(){

    var ajaxConfig = {
        type:"POST",
        url:"send",
        async:true,
        data:$("#frm-customer").serialize(),
    };

    $.ajax(ajaxConfig)
        .done(function(response){
            $("#div-output").text(response);
        })
        .fail(function(xhr,status,errorMessage){
            console.log(xhr);
            console.log("Status Code : " + status);
            console.log("Error Message : " + errorMessage);
        })
        .always(function(xhr,status){
            console.log("This works always");
        });


});

