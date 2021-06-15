function getDayIndex(day, month, year) {
  var dd = day;
  var mm = month;
  var temp = year.split("");
  var temp2 = temp.slice()
  var yy = parseInt("".join(((temp.split("")).slice(0,2))))
  var cc = parseInt("".join(((temp2.split("")).slice(2,2))))
  var dayIndex = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
}

function getDayAndName(){
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  let index = getDayIndex(dd,mm,yy);
  let day = days[index];
  let gender = "";
  let name = "";

  if (gender === "male"){
    return maleNames;
  }else {
    return femaleNames;
  }
return dd && name
}
