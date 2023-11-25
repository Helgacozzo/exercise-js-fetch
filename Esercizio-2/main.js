// # Esercizio 2 - Barzellette
// Studiati come funzionano le API di https://v2.jokeapi.dev/.
// Crea una pagina HTML in cui l’utente può decidere quante barzellette visualizzare.
// Dopo che l’utente ha deciso e dato conferma d’invio (con un bottone),
// interroga l’API e crea una lista di barzellette che contiene tante barzellette 
// (a tema Programming) quante ne ha richieste l’utente.


window.addEventListener('load', () => {

    const searchBar = document.getElementById('searchBar');
    const searchButton = document.getElementById('searchButton');
    const resultsDiv = document.getElementById('resultsDiv');

    const listaBarzellette = (barzellette) => {
        const ul = document.createElement('ul');

        barzellette.forEach(barzelletta => {
            const li = document.createElement('li');
            li.innerHTML = `<figure>${barzelletta.setup} ${barzelletta.delivery}</figure>`;
            ul.appendChild(li);
        });

        resultsDiv.innerHTML = '';
        
        resultsDiv.appendChild(ul);
    };

    searchButton.addEventListener('click', () => {
        const searchValue = searchBar.value.trim();

        if (!searchValue) {
            return;
        }

        fetch(`https://v2.jokeapi.dev/joke/Programming?amount=${searchValue}`)
            .then(response => response.json())
            .then(data => listaBarzellette(data.jokes))
            .catch(error => console.error(error));
    });
});