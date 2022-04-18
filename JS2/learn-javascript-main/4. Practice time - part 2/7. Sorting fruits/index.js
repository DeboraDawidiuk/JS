let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf

function apple() {
    appleShelf.textContent += fruit[0, 2, 3]
    }

    
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

for (i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍊") {
        orangeShelf.textContent += fruit[i] + " "
    }
    else {
        appleShelf.textContent += fruit[i] + " "
    }
}