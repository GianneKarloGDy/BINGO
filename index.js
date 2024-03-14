console.log("Hellow World");

generateNumber(15)


function generateNumber(max) {
    // addition = +
    // subtraction = -
    // mivision = /
    // multiplication = *
    let randomNumber = Math.floor(Math.random() * max) + 1;

    if (randomNumber <= 15) {
        console.log('The numberis in B.')
    } else if (randomNumber >= 16 && randomNumber <= 30) {
        console.log('The number is in I')
    } else {
        console.log('The number is invalid')
    }

    return console.log(randomNumber);
}