document.addEventListener("DOMContentLoaded", function(){
    console.log("Testing DOM");
    
    



$(function() {
    $("#submitButtonRSVP").click(function(e) {
       event.preventDefault();
       
        if (($("#rsvp").val()) === "yes") {
            console.log("if works");
            
            $("#rsvp_div").slideUp(1000, function() {
               
                $(".form_heading").text("I will be there");
                $("#form_div").show(300);
              });
              
            } else if (($("#rsvp").val()) === "no") {
                
                $("#rsvp_div").slideUp(1000, function() {
                $(".form_heading").text("I will sadly not be there");
                $("#form_div").show(300);
            });
        }     
    });

    $("#submitButtonForm").click(function(e) {
        event.preventDefault();
        $("#p-greeting").html($("#greeting").val());

        $("#p-occasion").html(`I will sadly not be able to attend Your ${$("#occasion").val()}`);

        if (($("#rsvp").val()) === "yes") {
            $("#p-occasion").html(`I can't wait to attend your ${$("#occasion").val()}!`);
            
            } else if (($("#rsvp").val()) === "no") {
            $("#p-occasion").html(`Sadly, I won't be able to attend your ${$("#occasion").val()}. :(`);
            
        }     

        $("#p-message").html($("#message").val());
        $("#form").slideUp(1000, function() {
            $("#card-section").slideDown(3000);
        });
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


