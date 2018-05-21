var returnedJson
var selectedMov = 0;
var selectedDay = 0;

var adultCost = 8;
var oapCost = 6;
var studentCost = 6;
var childCost = 4;

function updateFunc(curMov, id) {
  //console.log(curMov);
  document.getElementById("dropdownMenuButton").innerHTML= curMov;
    selectedMov = id;
  updateTimes();
}

function updateDay(day) {
  selectedDay = day;
  //console.log(selectedDay);
  updateTimes();
}

function updateTimes() {
  var outPut = "";
  switch(selectedDay) {
    case 0:
        for (var i = 0; i < returnedJson[selectedMov].day.mon.length; i++) {
            outPut += "<label class='radio-inline'><input type='radio' name='optradio' id='day" + i + "'>" + returnedJson[0].day.mon[i] + "</label>";
        }
        break;
    case 1:
        for (var i = 0; i < returnedJson[selectedMov].day.tue.length; i++) {
            outPut += "<label class='radio-inline'><input type='radio' name='optradio' id='day" + i + "'>" + returnedJson[0].day.tue[i] + "</label>";
        }
        break;
    case 2:
        for (var i = 0; i < returnedJson[selectedMov].day.wed.length; i++) {
            outPut += "<label class='radio-inline'><input type='radio' name='optradio' id='day" + i + "'>" + returnedJson[0].day.wed[i] + "</label>";
        }
        break;
    case 3:
        for (var i = 0; i < returnedJson[selectedMov].day.thu.length; i++) {
            outPut += "<label class='radio-inline'><input type='radio' name='optradio' id='day" + i + "'>" + returnedJson[0].day.thu[i] + "</label>";
        }
        break;
    case 4:
        for (var i = 0; i < returnedJson[selectedMov].day.fri.length; i++) {
            outPut += "<label class='radio-inline'><input type='radio' name='optradio' id='day" + i + "'>" + returnedJson[0].day.fri[i] + "</label>";
        }
        break;
    case 5:
        for (var i = 0; i < returnedJson[selectedMov].day.sat.length; i++) {
            outPut += "<label class='radio-inline'><input type='radio' name='optradio' id='day" + i + "'>" + returnedJson[0].day.sat[i] + "</label>";
        }
        break;
    case 6:
        for (var i = 0; i < returnedJson[selectedMov].day.sun.length; i++) {
            outPut += "<label class='radio-inline'><input type='radio' name='optradio' id='day" + i + "'>" + returnedJson[0].day.sun[i] + "</label>";
        }
        break;
  }
  document.getElementById("radio").innerHTML = outPut;
}



$( document ).ready(function() {
  jQuery.ajaxSetup({async:false});
  $.getJSON('http://localhost:3000/Movies', function(data) {
    console.log(data);
    returnedJson = data;
  });
  console.log(returnedJson);

  var outPut = "";
  for (var i = 0; i < returnedJson[0].day.mon.length; i++) {
      outPut += "<label class='radio-inline'><input type='radio' name='optradio'>" + returnedJson[0].day.mon[i] + "</label>";
  }
  document.getElementById("radio").innerHTML = outPut;
}
)

$( "#adMinus" ).click(function() {
    document.getElementById("adVal").value -= 1;
    if (document.getElementById("adVal").value < 0) {
      document.getElementById("adVal").value = 0;
    }
});


$( "#adPlus" ).click(function() {
  document.getElementById("adVal").value = parseInt(document.getElementById("adVal").value) + 1;
  if (document.getElementById("adVal").value > 20) {
    document.getElementById("adVal").value = 20
  }
});

  $( "#oapMinus" ).click(function() {
    document.getElementById("oapVal").value -= 1;
    if (document.getElementById("oapVal").value < 0) {
      document.getElementById("oapVal").value = 0
    }
  });

  $( "#oapPlus" ).click(function() {
    document.getElementById("oapVal").value = parseInt(document.getElementById("oapVal").value) + 1;
    if (document.getElementById("oapVal").value > 20) {
      document.getElementById("oapVal").value = 20
    }
  });

  $( "#studMinus" ).click(function() {
    document.getElementById("studVal").value -= 1;
    if (document.getElementById("studVal").value < 0) {
      document.getElementById("studVal").value = 0
    }
  });

  $( "#studPlus" ).click(function() {
    document.getElementById("studVal").value = parseInt(document.getElementById("studVal").value) + 1;
    if (document.getElementById("studVal").value > 20) {
      document.getElementById("studVal").value = 20
    }
  });

  $( "#childMinus" ).click(function() {
    document.getElementById("childVal").value -= 1;
    if (document.getElementById("childVal").value < 0) {
      document.getElementById("childVal").value = 0
    }
  });

  $( "#childPlus" ).click(function() {
    document.getElementById("childVal").value = parseInt(document.getElementById("childVal").value) + 1;
    if (document.getElementById("childVal").value > 20) {
      document.getElementById("childVal").value = 20
    }
  });


  function totalCalc() {
    if(selectedDay != 2){
      var total = 0;
      if($('#adVal').val() != 0) {
        total = total + (parseInt($('#adVal').val()) * adultCost);
      }
      console.log(total);
      if($('#oapVal').val() != 0) {
        total = total + (parseInt($('#oapVal').val()) * oapCost);
      }
      if($('#studVal').val() != 0) {
        total = total + (parseInt($('#studVal').val()) * studentCost);
      }
      console.log(total);
      if($('#childVal').val() != 0) {
        total = total + (parseInt($('#childVal').val()) * childCost);
      }
      console.log(total);
      console.log(total);
    }
    else {
      var total = 0;
      if($('#adVal').val() != 0) {
        total = total + (parseInt($('#adVal').val()) * (adultCost - 2));
      }
      console.log(total);
      if($('#oapVal').val() != 0) {
        total = total + (parseInt($('#oapVal').val()) * (oapCost - 2));
      }
      if($('#studVal').val() != 0) {
        total = total + (parseInt($('#studVal').val()) * (studentCost - 2));
      }
      console.log(total);
      if($('#childVal').val() != 0) {
        total = total + (parseInt($('#childVal').val()) * (childCost - 2));
      }
      console.log(total);
      console.log(total);
    }


    //var totalCost;
    //var cost = 0;
    //console.log(cost);
    //if (selectedDay == 2) {
    //  console.log($('#adVal').val());
    //  if (parseInt($('#adVal').val()) != 0){
    //    cost = (parseInt(cost) + parseInt($('#adVal').val()) * parseInt(adultCost - 2));
    //    console.log(cost);
    //  }
    //  if(parseInt($('#oapVal').val()) != 0) {
    //    cost = parseInt(cost) + parseInt($('#oapVal').val()) * parseInt(oapCost - 2);
    //  }
    //  if(parseInt($('#studVal').val()) != 0) {
    //    cost = parseInt(cost) + parseInt($('#studVal').val()) * parseInt(studentCost - 2);
    //  }
    //  if(parseInt($('#child').val()) != 0) {
    //    cost = cost + parseInt($('#childVal').val()) * parseInt(childVal - 2);
    //  }
    //  cost = parseInt(cost);
    //  console.log(cost);
    //  console.log(parseInt(document.getElementById("adVal").value) * (adultCost - 2));
    //  console.log(cost);
    //}
    //else {
    //  cost += parseInt(document.getElementById("adVal").value) * (adultCost);
    //  cost += parseInt(document.getElementById("oapVal").value) * (oapCost);
    //  cost += parseInt(document.getElementById("studVal").value) * (studentCost);
    //  cost += parseInt(document.getElementById("childVal").value) * (childVal);
    //}
    //console.log("The Total cost is: £");
    document.getElementById("total").innerHTML = "The total cost is: £" + total;

  }
  //console.log(returnedJson[0].Title);
  //console.log(returnedJson[0].day.fri[0]);
  //console.log(returnedJson[0].day.fri.length);
