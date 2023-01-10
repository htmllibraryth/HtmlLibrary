$(document).ready(function () {
    var e = ace.edit("code");
    e.getSession().setMode("ace/mode/html");
    e.setTheme("ace/theme/merbivore");

    $("#btn").on("click", function () {
        $("#output").html(e.getValue());
    });
});

