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

            if(!posts){
                
                document.body.innerHTML = 'Problem';
                return;
            }

            posts.forEach(({ title, body }) => {
                document.body.innerHTML += `
                            <figure>
                                <h2>${title}</h2>
                                <p>${body}</p>
                            </figure>
                        `;
            });
        })
});
