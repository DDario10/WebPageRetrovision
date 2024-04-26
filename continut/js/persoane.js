
function incarcaPersoane() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var table = "<table><tr><th>Nume</th><th>Prenume</th><th>Vârstă</th></tr>";
            var persoane = xmlDoc.getElementsByTagName("persoana");
            for (var i = 0; i < persoane.length; i++) {
                var nume = persoane[i].getElementsByTagName("nume")[0].childNodes[0].nodeValue;
                var prenume = persoane[i].getElementsByTagName("prenume")[0].childNodes[0].nodeValue;
                var varsta = persoane[i].getElementsByTagName("varsta")[0].childNodes[0].nodeValue;
                table += "<tr><td>" + nume + "</td><td>" + prenume+ "</td><td>" + varsta + "</td></tr>" ;
            }
            table += "</table>";
            document.getElementById("continut").innerHTML = table;
        }
    };
    xhttp.open("GET", "resurse/persoane.xml", true);
    xhttp.send();
}

function verificaUtilizator() {
    var utilizator = document.getElementById("utilizator").value;
    var parola = document.getElementById("parola").value;
    console.log(utilizator)
    console.log(parola)

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var gasit = false;
            for (var i = 0; i < data.length; i++) {
                if (data[i].utilizator === utilizator && data[i].parola === parola) {
                    gasit = true;
                    break;
                }
            }
            if (gasit) {
                document.getElementById("rezultat").innerHTML = "Autentificare reușită!";
            } else {
                document.getElementById("rezultat").innerHTML = "Numele utilizatorului sau parola sunt incorecte!";
            }
        }
    };
    xhttp.open("GET", "resurse/utilizatori.json", true);
    xhttp.send();
}