
document.getElementById('cargarGato').addEventListener('click', cargarImagenDeGato);

function cargarImagenDeGato() {
    const apiUrl = 'https://api.thecatapi.com/v1/images/search';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {

            const imageUrl = data[0].url;

            document.getElementById('imagenGato').src = imageUrl;
        })
        .catch(error => console.error('Error al cargar la imagen de gato:', error));
}
