function adaugaProduse() {
    var nume = document.getElementById("nume:").value;
    var cantitate = document.getElementById("cantitate").value;

    var table = document.getElementById("tabelProduse");
    var rowCount = table.rows.length; 
    var row = table.insertRow(rowCount); 

    
    var cellId = row.insertCell(0);
    var cellNume = row.insertCell(1);
    var cellCantitate = row.insertCell(2);

    cellId.innerHTML = rowCount;
    cellNume.innerHTML = nume;
    cellCantitate.innerHTML = cantitate;

    var optiuneLocalStorage = document.getElementById("local_storage").checked;
    var optiuneIndexDB = document.getElementById("index_DB").checked;

    if (optiuneLocalStorage) {
        var produs = {
            id: rowCount + 1,
            nume: nume,
            cantitate: cantitate
        };
        localStorage.setItem("produs" + produs.id, JSON.stringify(produs));
    } else if (optiuneIndexDB) {
        console.log("Salvare în IndexDB... (nu este implementat ÎNCĂ)");
    } else {
        alert("Vă rugăm să selectați o opțiune pentru modul de salvare!");
    }

    
    document.getElementById("nume:").value = "";
    document.getElementById("cantitate").value = "";
}



const worker = new Worker('./worker.js');


const addButton = document.querySelector('button[type="submit"]');


addButton.addEventListener('click', function() {
   
    worker.postMessage('Notificare de la scriptul principal');
});


worker.addEventListener('message', function(event) {
    
    console.log("Mesaj de la Web Worker:", event.data);

});