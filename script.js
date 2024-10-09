

const enterBtn = document.getElementById("button");

//add event listener to make button run all functions once clicked.
enterBtn.addEventListener("click", largestNumberChecker);

//create function
function largestNumberChecker() {
    //get user's input and value
    let userInput = document.getElementById("userinput").value;
    //split the user's input using "comma"
    let myArray = userInput.split(",");

    //convert strings to numbers
    myArray = myArray.map((num) => {
        return parseInt(num, 10);
    });
    let max = myArray[0];

    for (let i = 1; i < myArray.length; i++) {
        if (myArray[i] > max) {
            max = myArray[i];
        }
    }

    result.style.color = "white";
    result.innerHTML = `${max} is the largest number`;


};

