document.getElementById('obtener-materias').addEventListener('click', () => {
    console.log('Botón clickeado');  // Confirmar que el evento se dispara
    fetch('http://localhost:64000/materias', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Datos recibidos:', data);
        const materiasList = document.getElementById('materiasList');
        materiasList.innerHTML = data.map(materia => `<p>${materia.name}</p>`).join('');
    })
    .catch(error => console.error('Error:', error));
});
