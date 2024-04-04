function ShowAlert() {
    alert('show this message');
    }
    
   

function DateAndTime()
{
    
    const date = new Date();
    //onsole.log(document.getElementById("DataSiOra"));
   document.getElementById("DataSiOra").innerHTML = date;
    console.log(date);
    
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
//ShowAlert()
DateAndTime()
AdresaUrl()
getLocation()
getBrowserName();
getUsersOS()
window.setInterval(DateAndTime,1000)