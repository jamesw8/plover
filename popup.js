function addObj() {
   var obj = document.getElementById("newObjective").value;
   var ded = document.getElementById("newDeadline").value;
   if(obj == "" || ded == "") {
     alert("Objective text field is empty");
  } else {
    alert("obj is "+obj+" and ded is "+ded);
    alert(document.getElementById("lifegiver").outerHTML);
    d=document.getElementById("lifegiver");
    var stringerino = "<tr><td>"+obj+"</td>\t\t<td>"+ded+"</td></tr><br><br id='lifegiver'>";
    d.outerHTML = stringerino;
  }
}