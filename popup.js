document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#newGoal').addEventListener('click', addObj);
    document.querySelector('#start').addEventListener('click', startTimer);

}); 
// addObj adds the new objective and deadline to the list
// of existing objectives and deadlines



var array=[];

function addObj() {
   var obj = document.getElementById("newObjective").value;
    // var ded = document.getElementsByName("rating").value;
    for (var i = 0; i < document.getElementsByName('rating').length; i++){
      if (document.getElementsByName('rating')[i].checked){
        var ded=document.getElementsByName('rating')[i].value;
      }
    }
   if(obj == "" || ded == "") {
     alert("Objective text field is empty");
  } else {
    array.push(ded);
  
    console.log(array);
    //alert("obj is "+obj+" and ded is "+ded);
    //alert(document.getElementById("lifegiver").outerHTML);
    d=document.getElementById("lifegiver");
    var stringerino = "<tr><td>"+obj+"</td>\t\t\t\t<td>"+ded+"</td></tr><br><br id='lifegiver'>";
    d.outerHTML = stringerino;
  }
}
var start=false;
var total=0;
var k=0;
function startTimer() {
  var totalHrs = document.getElementById("totalHours").value;
  if(!start)
    for(var i = 0; i<array.length; i++) {
      total+=parseInt(array[i]);
    }
    start = true;
    for(var j = 0; j<array.length; j++) {
      k=j+1;
      array[j] = (parseFloat(array[j])/parseFloat(total))*totalHrs;
    alert("You have "+array[j]+" hours to complete task "+k);
    
    }
    
  
  /*var startTime = new Date();
  var halfTime = startTime.getMilliseconds()+(totalHrs*60*60*1000)/2;
  var endTime = startTime.getMilliseconds()+totalHrs*60*60*1000;
  var alarmInfo = {
      'when':halfTime
    };
    var alarmInfoL = {
      'when':endTime
    };
  chrome.alarms.create(alarmInfo);
  chrome.alarms.create(alarmInfoL);
  //setTimeout(times, 3000);*/
}

