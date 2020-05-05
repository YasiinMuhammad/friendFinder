
// $("submit").on("click", function(event) {

//     console.log(res)
//         // Don't reload the page
//         event.preventDefault();

//         // Make sure all form elements were selected
//             var formAnswers = {
//                 "name": $("#yourName").val().trim(),
//                 "photo": $("#yourImage").val().trim(),
//                 "answers": [
//                     parseInt($("#q0").val()),
//                     parseInt($("#q1").val()),
//                     parseInt($("#q2").val()),
//                     parseInt($("#q3").val()),
//                     parseInt($("#q4").val()),
//                     parseInt($("#q5").val()),
//                     parseInt($("#q6").val()),
//                     parseInt($("#q7").val()),
//                     parseInt($("#q8").val()),
//                     parseInt($("#q9").val())
//                 ]
//             };

//             // AJAX POST to api/friends.
//             $.post("/api/friends", formAnswers, function(data) {
//                 // Update the match modal with the correct name & image
//                 $("#match-name").html("<h2>" + data.name + "</h2>");
//                 $("#match-img").attr("src", data.photo);

//                 // Show the match modal
//                 $("#results-modal").modal("toggle");
//             });
//         }
// );

