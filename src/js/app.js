import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  }); 

});

function myFunction() {
    for (let i = 0; i <= 4; i++) {
      var x = document.createElement("ARTICLE");
      x.setAttribute("class", "message");
      document.body.appendChild(x);
  } 

}

myFunction()
