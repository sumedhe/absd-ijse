//$("#txtUserName").val("IJSE");

//$("#btnLogin").on("click",btnLogin_Click);

//function btnLogin_Click(eventData){
//    alert("This is working");
//}
//
//$("#btnLogin").click(btnLogin_Click);

$("#btnLogin").click(function(){
    var userName = $("#txtUserName").val();
    var password = $("#txtPassword").val().trim();
    
    if (isNaN(userName) === false && userName === "38.5" 
            && password === "IJSE"){
        alert("Login details are correct");
    }else{
        alert("Login details are incorrect. Please enter valid login details");
    }
});