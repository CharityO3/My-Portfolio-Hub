new Typewriter("h1", {
  strings: "CHARITY ORHORIDIOHWO",
  autoStart: true,
  cursor:"",
  delay:30,
});  

function displayEmail(event){
  let emailElement = document.querySelector("#email-link");
  emailElement.classList.add("custom-border", "generating");
  setTimeout(() => {
    emailElement.classList.remove("generating");
  }, 6000); // 5000ms = 5 seconds
}
  

let contactLink = document.querySelector("#contact");
contactLink.addEventListener("click", displayEmail);