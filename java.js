window.onload = function() {
var tb=[["Day","1 hour","2 hour","3 hour","4 hour","5 hour","6 hour","7 hour"],
[1,"COA","OOPD","OS","PDTNM","BE","PDBD","OOPD"],
[2,"BE","COA","PDBD","COA","OOPD","PDTNM","OS"],
[3,"COA","PDTNM","PDBD","OS","BE","OS","PDBD"],
[4,"PDBD","LAB","LAB","LAB","COA","OOPD","PDTNM"],
[5,"OS","OOPD","BE","PDTNM","LAB","LAB","LAB"]];
/*switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}*/
//create table
var table= document.getElementById("tablee");

//get column number
var column= tb[0].length;

//add the header rows
var row= table.insertRow(-1);
for (var i=0;i<column;i++){
  var thead= document.createElement("TH");
  thead.innerHTML=tb[0][i];
  row.appendChild(thead);
  }

//add the data
for (var i=1; i < tb.length; i++){
  row = table.insertRow(-1);
  for (var j = 0; j < column; j++) {
    var cell = row.insertCell(-1);
    cell.innerHTML = tb[i][j];
  }
}

}
/*
console.log(tb.length);
console.log(tb[1][1]);
}*/