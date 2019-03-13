// Survey Result Crunching
// Should probably do input validation

$("#submit-survey").on("click", function(event){
    // Discussed in Class
    event.preventDefault();

    var userResponse = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val()
          ]
    };
});

// Really want to start doing AJAX calls in Vanilla JS but I looked at the code and I just flat out ran out of time

// $.post("/api/friends")