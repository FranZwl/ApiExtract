document.getElementById("Boton").addEventListener("click", (event) => {
    const apiUrl = 'https://rickandmortyapi.com/api/character';
        fetch(apiUrl)
            .then(response => response.json()) 
            .then(data => {
                const list = data.results; 
                const cardsContainer = document.getElementById('cards-container');

                list.forEach(lista => {

                            const card = document.createElement('div');
                            card.classList.add('card');
                            card.innerHTML = `
                                <h3>${lista.name}</h3>
                                <img src="${lista.image}">
                            `;
                            cardsContainer.appendChild(card); 
                        })
                        .catch(error => console.error('Error al obtener detalles del Personaje:', error));
            });
});