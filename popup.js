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

function startTimer() {
  var startDate = new Date();
  var startTime = startDate.getTime();
  setTimeout(times, 3000);
}

function setAlarms() {

}

