var selectedMov = "Avengers: Infinity War";
var selectedDay = "Mon";

function updateFunc(curMov) {
  console.log(curMov);
  document.getElementById("dropdownMenuButton").innerHTML= curMov;
    selectedMov = curMov;
}

function updateDay(day) {
  selectedDay = day;
  console.log(selectedDay);
}
