$("#sendMessageButton").click(function () {
    // get values from FORM
    var name = $("input#name").val();
    var email = $("input#email").val();
    var phone = $("input#phone").val();
    var message = $("textarea#message").val();

    $this = $("#sendMessageButton");
    $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
    $.ajax({
        url: "http://localhost:8080/test-post",
        type: "POST",
        data: {
            name: name,
            phone: phone,
            email: email,
            message: message,
        },
        datatype: "json",
        cache: false,
        success: function (data) {
            console.log(data);
        },
        error: function () {
            
        },
        complete: function () {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
        },
    });
})

$("#getData").click(function () {
    $this = $("#getData");
    $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
    $.ajax({
        url: "http://localhost:8080/test-get",
        type: "GET",
        cache: false,
        success: function (data) {
            // Success message
            console.log(data);
        },
        error: function (err) {
            // Fail message
            console.log(err);
        },
        complete: function () {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
        },
    });
})

/*When clicking on Full hide fail/success boxes */
$("#name").focus(function () {
    $("#success").html("");
});
