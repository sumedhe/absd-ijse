$("#txtFullName, #txtAddress, #txtNIC").focus(function (eventData) {
    this.select();
});

$("#txtFullName").keydown(function (eventData) {
    var char = String.fromCharCode((96 <= eventData.which && eventData.which <= 105) ? eventData.which - 48 : eventData.which);
    if (eventData.which === 9) return; //tab
    if (!isNaN(char)) {
        eventData.preventDefault();
    }
});

$("#txtFullName, #txtAddress").keyup(function (eventData) {
    if ($(this).val().length > 0) {
        $(this).removeClass("error");
    }
});

$("#txtNIC").keydown(function (eventData) {
    var char = String.fromCharCode((96 <= eventData.which && eventData.which <= 105) ? eventData.which - 48 : eventData.which);
    var acceptKeys = [8, 46, 37, 39, 38, 40, 36, 35];
    for (var index in acceptKeys) {
        if (acceptKeys[index] === eventData.which) {
            return;
        }
    }
    if (isNaN(char)) {
        eventData.preventDefault();
    } else {
        $("#txtNIC").removeClass("error");
    }
});

$("#btnAdd").click(function (eventData) {

    var name = $("#txtFullName").val().toString();
    var address = $("#txtAddress").val().toString();
    var nic = $("#txtNIC").val().toString();

    if (name.trim().length === 0) {
        $("#txtFullName").focus();
        $("#txtFullName").addClass('error');
        return;
    } else if (address.trim().length === 0) {
        $("#txtAddress").focus();
        $("#txtAddress").addClass('error');
        return;
    } else {
        if ($("#txtNIC").val().length !== 9) {
            $("#txtNIC").focus();
            $("#txtNIC").addClass('error');
            return;
        }
    }

    var id = getLastNumber() + 1;
    var trHtml = '<tr> \
                    <td class="center aligned">' + id + "</td>\
                    <td>" + name + "</td>\
                    <td>" + address + '</td>\
                    <td class="center aligned">' + nic + '</td>\
                    <td><div class="recycle"></div></td>\
                  </tr>';
    $("#tblStudents").find("tbody").append(trHtml);
    showFooter();

    $("#txtFullName").val("");
    $("#txtAddress").val("");
    $("#txtNIC").val("");
    $("#txtFullName").focus();

    $("div.recycle").click(function (eventData) {
        $(this).parents("tr").fadeOut(500);
        setTimeout(function (element) {
            $(element).parents("tr").remove();
            showFooter();
        },500, this);

    })

});

function getLastNumber() {
    var firstCell = $("#tblStudents tbody tr:last-child td:first-child");
    if (firstCell.length === 0) {
        return 0;
    } else {
        return parseInt(firstCell.text());
    }
}

function showFooter() {
    var rowCount = $("#tblStudents tbody tr:last-child").length;
    if (rowCount > 0) {
        $("#tblStudents tfoot").addClass("t-footer");
    } else {
        $("#tblStudents tfoot").removeClass("t-footer");
    }
}

