new Typewriter("h1", {
  strings: "CHARITY ORHORIDIOHWO",
  autoStart: true,
  cursor:"",
  delay:30,
});  

/*function displayEmail(){
  
  let emailElement = document.querySelector("#email-link");
  //emailElement.innerHTML="hello"
  emailElement.classList.add("custom-border");
}
  







let contactLink = document.querySelector("#contact");
contactLink.addEventListener("click", displayEmail);*/

function displayEmail() {
  // Add a delay before applying the custom border
  setTimeout(() => {
    let emailElement = document.querySelector("#email-link");
    emailElement.classList.add("custom-border");
  }, 5000); // Delay of 1000ms (1 second)
}

let contactLink = document.querySelector("#contact");
contactLink.addEventListener("click", displayEmail);



// Function to highlight the email link on the homepage
/*function highlightEmail() {
  let emailElement = document.querySelector("#email-link");
  emailElement.classList.add("custom-border"); // Add highlight style
  console.log(emailElement);
}

// Scroll to the email section on the homepage and highlight it
let contactLink = document.querySelector("#contact");
contactLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default behavior of the link
  window.location.href = "index.html#email-link"; // Redirect to the homepage and scroll to the email
  setTimeout(highlightEmail, 10); // Wait for the page to load and then highlight the email
});


// Function to highlight the email link
function highlightEmail() {
  let emailElement = document.querySelector("#email-link");
  emailElement.classList.add("custom-border"); // Add highlight style
}

// Check URL for query parameter
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("highlight") === "email") {
  // Highlight the email and optionally remove the query parameter from the URL
  highlightEmail();
  history.replaceState(null, "", window.location.pathname); // Clean URL
}*/
