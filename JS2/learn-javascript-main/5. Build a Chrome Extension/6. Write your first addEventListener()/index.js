// 1. Grab the box from the DOM and store it in a variable

let box = document.getElementById("box")


// 2. Add a click event listener to the box 

box.addEventListener("click", function() {
    box.textContent = "I want to open the box!"
    console.log("I want to open the box!")
})
// 3. Log out "I want to open the box!" when it's clicked
