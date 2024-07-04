function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', loadFooter);

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir el envío predeterminado del formulario

        fetch('https://formspree.io/f/xovaqlzp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            })
        })
        .then(response => {
            // Restablecer los valores de los campos después de enviar el formulario
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
            alert('Mensaje enviado correctamente!');
        })
        .catch(error => {
            console.error('Error al enviar el formulario:', error);
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
        });
    });
});
