const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


const input = document.querySelector(".input");
const button = document.querySelector(".button");
const mesage = document.querySelector(".span");

button.addEventListener("click", () => {
    if (re.test(input.value)){
        mesage.style.display = "none"
    }else {
        mesage.style.display = "block"
    }
})

