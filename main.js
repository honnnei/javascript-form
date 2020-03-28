document.addEventListener("DOMContentLoaded", function(){
    console.log("Testing DOM");
    



$(function() {
    $("#submitButtonRSVP").click(function(e) {
       console.log($("#rsvp").val());
        if (($("#rsvp").val()) === "yes") {
            console.log("if works");
            $("#rsvp_div").slideUp(1000, function() {
                $("#form_if_yes").slideDown(2000);
            });
            } else if (($("#rsvp").val()) === "no") {
            console.log("no");
            $("#rsvp_div").slideUp(1000, function() {
                $("#form_if_no").slideDown(2000);
            });
            
        }      
        
    });
});
});



// $("#p-message").html($("#greeting").val());
//         $("#form").slideUp(3000, function() {
//             $("#card-section").slideDown(3000);
//         });

// submitButton.addEventListener("click", event => {
//     event.preventDefault();
//     showCard();
// });

// function showCard() {
//     let form = document.getElementById("form");
//     let cardPage = document.querySelector("#card-page");
//     let submitButton = document.querySelector("#btn");
//     let greetingMessage = document.querySelector("#greeting");
//     let occasion = document.querySelector("#p-occasion");
//     let message = document.querySelector("#message");

//     event.preventDefault();
//     form.style.display = "none";
//     cardPage.style.display = "block";
//     console.log("working?");
//     document.getElementById('p-message').innerHTML = message.value;
//     document.getElementById('p-greeting').innerHTML = greetingMessage.value;
//     // document.getElementById('p-occasion').innerHTML = occasion.value;
//     occasion.innerHTML = form.occasion1git .value;
// };

// // function writeCard(){
  
// // }


