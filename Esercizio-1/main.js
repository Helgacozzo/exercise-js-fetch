// # Esercizio 1 - Posts
// Studiati come funzionano le API di https://jsonplaceholder.typicode.com/.
// Crea una pagina HTML in cui, dopo aver richiesto dei post all’API, 
// vengono create delle card nel documento: per ogni card mostra titolo e contenuto.


window.addEventListener('load', () => {

    let posts;
    
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(response => response.json())
        .then(obj => posts = obj)
        .catch(error => console.error(error))
        .finally(() => {
            // console.log(posts);
            posts.forEach(({ title, body }) => {
                document.body.innerHTML += `
                            <figure>
                                <h2>${title}</h2>
                                <p>${body}</p>
                                <img src="https://via.placeholder.com/150" alt="Placeholder Image">
                            </figure>
                        `;
            });
        })
});

// # Esercizio 3 - Ricerca paesi per lingua
// Studiati come funzionano le API di https://restcountries.com/.
// Crea una pagina HTML in cui l’utente può inserire del testo ed effettuare 
// una ricerca di paesi a partire dalla lingua. Dopo che l’utente ha scritto del testo
//  e dato conferma d’invio (con un bottone), interroga l’API e crea una lista di cards,
//  di cui ciascuna card è un risultato della ricerca. Ogni card rappresenta un paese cercato
//  a partire dalla stringa inserita dall’utente (una lingua parlata nel paese).