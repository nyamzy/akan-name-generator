function getUserInput() {
  let inputArr = [];
  let date = prompt("Please enter the date of your birthday.");
  date = parseInt(date);

  if (date < 1 || date > 31) {
    alert("Invalid date. Please try again");
  } else {
    inputArr.push(date);
    let month = prompt("Please enter the month of your birthday.");
    month = parseInt(month);
    if (month < 1 || month > 12) {
      alert("Invalid month. Please try again");
    } else {
      inputArr.push(month);
      let year = prompt("Please enter the year of your birthday.");
      if (year.length !== 4) {
        alert("Invalid year. Please try again");
      } else {
        year = parseInt(year);
        inputArr.push(year);
        return inputArr;
      }
    }
  } return [0, 0, 0000];
}

function calculateDayIndex(inputArr) {
  let day = inputArr[0];
  let month = inputArr[1];
  let year = inputArr[2];
  let century = 19;
  let index = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7;
  return parseInt(index.toString().split(".")[0]);
}


function getDayAndName() {
  let daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  let userInputArr = getUserInput();
  if (userInputArr[0] === 0) {
    alert("Input is invalid. Please try again.");
    return ["", ""];
  } else {
    let index = calculateDayIndex(userInputArr);
    let day = daysOfTheWeek(index);
    let name = "";
    let gender = prompt("Please enter your gender:");
    if (gender.toLowerCase().startsWith("m")) {
      name = maleNames[index];
    } else {
      name = femaleNames[index];
    }
    alert("You were born on " + day + "\nAnd your Akan name is " + name + ".");
  }

}
