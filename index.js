
var output = "";


function fWrite(){
    var str = localStorage.getItem("information").split("|");
var tbody = document.getElementById("tbody");
   for(var i = 0; i < str.length;i++){
       var tr = document.createElement("tr");
       var td = document.createElement("td");
       var td_2 = document.createElement("td");
       var arr = str[i].split("...");
       var but = document.createTextNode(""+arr[0]);
       var tim = document.createTextNode(""+arr[1]);

       td.appendChild(but);
       td_2.appendChild(tim);
       tr.appendChild(td);
       tr.appendChild(td_2);
       tbody.appendChild(tr);

   }
    var blob = new Blob([localStorage.getItem("information")],
    {
        type:"application/json;utf - 8"
    }
    )
    var userLink = document.createElement("a");
    userLink.setAttribute("download", "information.txt");
    userLink.setAttribute("href",window.URL.createObjectURL(blob));
    userLink.click();
    }