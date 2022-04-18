let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional stafull pricetement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

if (age < 6) {
    value = "free"
} else if (age <= 17) {
    value = "child discount"
} else if (age <= 26) {
    value = "student discount"
} else if (age <= 66) {
    value = "full price"
} else {
    value = "senior citizen discount"
}

console.log(value)