// Refactor the code so that it uses .addEventListener()
// when you click the SAVE INPUT button

let saveInput = document.getElementById("input-btn")

saveInput.addEventListener("click", function() {
    saveInput.textContent = "Button Clicked"
})



