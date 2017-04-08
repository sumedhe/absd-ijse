$(document).ready(function(){
    $("#txtFullName").focus();
});

$("#txtFullName").on("keyup", function(){
    var regExp = /^[a-zA-Z ]+$/;
    var result = regExp.test($("#txtFullName").val());
    if(result){
        $("#txtFullName").css({color: 'blue'});
    }else{
        $("#txtFullName").css({color: 'red'});
    }
})

$("#txtTelephoneNumber").on("keyup", function(){
    var regExp = /^\d{3}-\d{7}$/;
    var result = regExp.test($("#txtTelephoneNumber").val());
    if(result){
        $("#txtTelephoneNumber").css({color: 'blue'});
    }else{
        $("#txtTelephoneNumber").css({color: 'red'});
    }
})

$("#txtEmail").on("keyup", function(){
    var regExp = /^[a-zA-Z ]+$/;
    var result = regExp.test($("#txtEmail").val());
    if(result){
        $("#txtEmail").css({color: 'blue'});
    }else{
        $("#txtEmail").css({color: 'red'});
    }
})

$("#txtBirthday").on("keyup", function(){
    var regExp = /^\d{4}-\d\d-\d\d$/;
    var result = regExp.test($("#txtBirthday").val());
    if(result){
        $("#txtBirthday").css({color: 'blue'});
    }else{
        $("#txtBirthday").css({color: 'red'});
    }
})