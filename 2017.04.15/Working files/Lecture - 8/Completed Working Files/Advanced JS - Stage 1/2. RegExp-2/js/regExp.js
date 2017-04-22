$(document).ready(function(){
    $("#txtFullName").focus();
});

$("#btnValidate").click(function(){

    var name = $("#txtFullName").val();
    var tel = $("#txtTelephoneNumber").val();
    var mail = $("#txtEmail").val();
    var dob = $("#txtBirthday").val();

    var regEx = /^[A-Za-z. ]+$/;
    if (!regEx.test(name)){
        $("#txtFullName").focus();
        return;
    }

    regEx = /^\d{3}-\d{7}$/;
    if (!regEx.test(tel)){
        $("#txtTelephoneNumber").focus();
        return;
    }

    regEx = /[A-Za-z0-9_.]+@[A-Za-z0-9_.]+\.[A-Za-z0-9_.]+/;
    if (!regEx.test(mail)){
        $("#txtEmail").focus();
        return;
    }

    regEx = /\d{4}-\d{2}-\d{2}/;
    if (!regEx.test(dob)){
        $("#txtbirthday").focus();
        return;
    }

});
