document.addEventListener("DOMContentLoaded", function(){
    console.log("Testing DOM");
});



// submitButton.addEventListener("click", event => {
//     event.preventDefault();
//     showCard();
// });

function showCard() {
    let form = document.getElementById("form");
    let cardPage = document.querySelector("#card-page");
    let submitButton = document.querySelector("#btn");
    let greetingMessage = document.querySelector("#greeting");
    let occasion = document.querySelector("occasion");
    let message = document.querySelector("#message");

    event.preventDefault();
    form.style.display = "none";
    cardPage.style.display = "block";
    console.log("working?");
    document.getElementById('p-message').innerHTML = message.value;
    document.getElementById('p-greeting').innerHTML = greetingMessage.value;
    // document.getElementById('p-occasion').innerHTML = occasion.value;
    occasion.innerHTML = form.event.value;
};

// function writeCard(){
  
// }


