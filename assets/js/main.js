var modal = document.getElementById('myModal');

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function submitnum() {
    var number = $("#myNumber").val();
    alert(number);
    $.ajax({
        type: 'GET',
        url: '/fibonacci/' + number,
        contentType: "application/json; charset=utf-8",
        success: function (data) {
        },
        error: function (data) {
        }
    });
}