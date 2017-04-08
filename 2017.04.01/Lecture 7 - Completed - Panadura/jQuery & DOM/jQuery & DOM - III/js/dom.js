function function_1(eventData){
    $('#output').append("<div>Function 1</div>");
}

function function_2(eventData){
    $('#output').append("<div>Function 2</div>");
}

function function_3(eventData){
    $('#output').append("<div>Function 3</div>");
}

function function_4(eventData){
    $('#output').append("<div>Function 4</div>");
}

function function_5(eventData){
    $('#output').append("<div>Function 5</div>");
}

$('#btnShowOutput').on("click",function_1);
$('#btnShowOutput').on("click",function_2);
$('#btnShowOutput').on("click",function_3);
$('#btnShowOutput').on("click",function_4);
$('#btnShowOutput').on("click",function_5);

$('#btnRemove').on("click",function(){
    $("#btnShowOutput").off("click",function_2);
});

$('#btnRemoveAll').on("click",function(){
    $("#btnShowOutput").off("click");
});