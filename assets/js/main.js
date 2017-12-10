function submitlocal() {
    alert("local");
    var number = $("#myNumber").val();
    $.ajax({
        type: 'GET',
        url: '/fibonacci/' + number,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            alert("success");
            window.location.assign('/fibonacci/' + number);
        },
        error: function (data) {
            alert("error");
        }
    });
}

function submitlambda() {
    alert("lambda");
    var number = $("#myNumber").val();
    $.ajax({
        type: 'GET',
        url: '/lfibonacci/' + number,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            alert("success");
            window.location.assign('/lfibonacci/' + number);
        },
        error: function (data) {
            alert("error");
        }
    });
}
