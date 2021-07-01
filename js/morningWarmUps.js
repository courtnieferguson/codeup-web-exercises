// TODO: Create a function named countSpaces that accepts a string and returns the total number of spaces in the string.

function countSpaces(input) {
    return ((input.toString()).split("").length - 1)
}


// TODO: Add validation to function above, if the argument pass is not a string it should return false.

    if (typeof (input) == "string") {
        return ((input).split("").length - 1)
    }


countSpaces("taco")


