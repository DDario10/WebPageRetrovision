document.addEventListener("DOMContentLoaded", function() {
    // Selectăm butonul de înregistrare
    var registerButton = document.querySelector('button');

    // Adăugăm un eveniment de clic butonului
    registerButton.addEventListener('click', function() {
        // Obținem datele introduse de utilizator din câmpurile de input
        var username = document.querySelector('input[name="uname"]').value;
        var password = document.querySelector('input[name="psw"]').value;

        // Construim obiectul JSON cu datele utilizatorului
        var userData = {
            utilizator: username,
            parola: password
            // se pot adăuga și alte câmpuri aici, în funcție de necesități
        };

        // Trimitem cererea POST către server
        fetch('/api/utilizatori', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(function(response) {
            // Verificăm dacă cererea a fost efectuată cu succes
            if (response.ok) {
                return response.json(); // Parsăm răspunsul JSON dacă este ok
            }
            throw new Error('Network response was not ok.'); // Aruncăm o eroare în caz contrar
        })
        .then(function(data) {
            // Aici poți gestiona răspunsul de la server, de exemplu afișând un mesaj de succes
            console.log(data);
            alert('Înregistrare reușită!');
        })
        .catch(function(error) {
            // Aici gestionăm orice eroare care apare în timpul procesării cererii
            console.error('There was an error!', error);
            alert('A apărut o eroare în timpul înregistrării.');
        });
    });
});
