function ShowAlert() {
    alert('show this message');
    }
    
   

function DateAndTime()
{
    
    const date = new Date();
    //onsole.log(document.getElementById("DataSiOra"));
   document.getElementById("DataSiOra").innerHTML = date;
   // console.log(date);
    
}
function AdresaUrl()
{
    adress = window.location.href;
    console.log(typeof adress);
    console.log(adress);
     //element = document.getElementById("adresa")
     console.log("aici");
     console.log(document.getElementById("adresa")); 
     document.getElementById("adresa").innerHTML = adress;
    //element.innerHTML = "adsres";
    //console.log(adress);
}
//console.log(typeof adress);
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("locatia").innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    document.getElementById("locatia").innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }
  console.log(navigator.userAgent);
  function getBrowserName()
  {
    
    document.getElementById("browser").innerHTML = navigator.userAgent;
    
    
  }
  function getUsersOS()
  {
    if(navigator.platform.includes("Win"))
    document.getElementById("os").innerHTML = "Windows";
    if(navigator.platform.includes("Mac"))
    document.getElementById("os").innerHTML = "Mac";
    if(navigator.platform.includes("Linux"))
    document.getElementById("os").innerHTML = "Linux";
    if(navigator.platform.includes("/Android/i"))
    document.getElementById("os").innerHTML = "Android";
    if(navigator.platform.includes("/iPhone|iPad|iPod/i"))
    document.getElementById("os").innerHTML = "iOS";
  }
  
  
  function schimbaContinut(resursa, jsFisier, jsFunctie)
  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("continut").innerHTML = this.responseText;
        if (jsFisier) {
          var elementScript = document.createElement('script');
          elementScript.onload = function () {
          console.log("hello");
          if (jsFunctie) {
          window[jsFunctie]();
          }
          };
          elementScript.src = jsFisier;
          document.head.appendChild(elementScript);
         } else {
          if (jsFunctie) {
          window[jsFunctie]();
          }
         }
         if(resursa == "invat")
         {
            DateAndTime();
            AdresaUrl()
            getLocation()
            getBrowserName();
            getUsersOS()
            window.setInterval(DateAndTime,1000)
        
           
         } 
    }
  };
  xhttp.open("GET", resursa + '.html', true);
  xhttp.send();
}
//ShowAlert()
//CANVAS

var puncte  = true;
var punct_2_x = null;
var punct_2_y = null;

function sectiunea_2(event)
{
    var canvas = document.getElementById("canvas");
    var pozitie_x = event.offsetX;
    var pozitie_y = event.offsetY;

    var ox = pozitie_x;
    var oy = pozitie_y;

    if(puncte == true)
    {
        puncte = false;
        punct_2_x = pozitie_x;
        punct_2_y = pozitie_y;
    }
    else
    {
        puncte = true;
        var ctx = canvas.getContext("2d");
        ctx.beginPath();

        if(punct_2_x < ox && punct_2_y < oy)
            ctx.rect(punct_2_x, punct_2_y, Math.abs(punct_2_x - ox), Math.abs(punct_2_y - oy));
        else if(punct_2_x > ox && punct_2_y > oy)
            ctx.rect(ox, oy, Math.abs(ox - punct_2_x), Math.abs(oy - punct_2_y));
        else if(punct_2_x > ox && punct_2_y < oy)
            ctx.rect(ox, punct_2_y, Math.abs(ox - punct_2_x), Math.abs(punct_2_y - oy));
        else if(punct_2_x < ox && punct_2_y > oy)
            ctx.rect(punct_2_x, oy, Math.abs(punct_2_x - ox), Math.abs(oy - punct_2_y));

        ctx.lineWidth = 3;
        ctx.strokeStyle = document.getElementById("contur").value;
        ctx.stroke();
        ctx.fillStyle = document.getElementById("umplere").value;
        ctx.fill();
    }
    
}

function schimba_culoarea()
{
    var pozitie = document.getElementById('pozitie').value;
    var tabel = document.getElementById('tabel').getElementsByTagName('td');
    var culoare = document.getElementById("fundal").value;
    tabel[pozitie].style.backgroundColor = culoare;
}

//!CANVAS

    function insertRow() {
      var position = document.getElementById("positionInput").value;
      var color = document.getElementById("colorPicker").value;
      
      var table = document.getElementById("myTable");
      var row = parseInt(position) - 1;
    
      if (row >= 0 && row <= table.rows.length) {
        var newRow = table.insertRow(row);
        for (var i = 0; i < table.rows[0].cells.length; i++) {
          var cell = newRow.insertCell(i);
          cell.style.backgroundColor = color;
        }
      } else {
        alert("Invalid row position.");
      }
    }
    
    function insertColumn() {
      var position = document.getElementById("positionInput").value;
      var color = document.getElementById("colorPicker").value;
      
      var table = document.getElementById("myTable");
      var column = parseInt(position) - 1;
    
      if (column >= 0 && column <= table.rows[0].cells.length) {
        for (var i = 0; i < table.rows.length; i++) {
          var cell = table.rows[i].insertCell(column);
          cell.style.backgroundColor = color;
        }
      } else {
        alert("Invalid column position.");
      }
    }


    // ASIDE
    document.getElementById('toggleButton').addEventListener('click', function() {
      var asideMenu = document.getElementById('asideMenu');
      var content = document.querySelector('.content');
      var isOpen = asideMenu.style.left === '0px';
  
      if (isOpen) {
        asideMenu.style.left = '-200px';
        content.style.marginLeft = '0';
      } else {
        asideMenu.style.left = '0';
        content.style.marginLeft = '200px';
      }
    });


    function writeToJSON() {
      var formData = {
          username: document.getElementsByName("uname")[0].value,
          password: document.getElementsByName("psw")[0].value
      };
  
      // Convert the form data to a JSON string
      var jsonData = JSON.stringify(formData);
  
      // Send the JSON data to the server
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "js/script.js", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
              console.log("Data saved successfully!");
          }
      };
      xhr.send(jsonData);
  
      // Prevent the form from submitting normally
      return false;
  }