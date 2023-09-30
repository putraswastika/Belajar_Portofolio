const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const target = e.target,
        name = target.querySelector('#name').value,
        from = target.querySelector('#from').value, // Ubah dari 'email' menjadi 'to'
        subject = target.querySelector('#subject').value,
        message = target.querySelector('#message').value;

    try {
        const response = await fetch('http://localhost:5000/api/email', {
            method: 'POST',
            body: JSON.stringify({
                name,
                from, // Gunakan 'to' sebagai alamat email penerima
                subject,
                message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();

        if (response.status === 200) {
            alert(data.message);
            contactForm.reset();
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error(error);
        alert('Something went wrong with the request.');
    }
});
