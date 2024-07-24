document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('quiniela-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => data[key] = value);

        fetch('http://localhost:5000/api/quiniela', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            alert('Quiniela enviada con éxito');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al enviar la quiniela');
        });
    });
});