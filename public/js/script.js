const API_BASE_URL = 'https://belajarportofoliobe-production.up.railway.app';

const contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const target = e.target,
        name = target.querySelector('#name').value,
        from = target.querySelector('#from').value, 
        subject = target.querySelector('#subject').value,
        message = target.querySelector('#message').value;

    try {
        const response = await fetch(`${API_BASE_URL}/api/email`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                from, 
                subject,
                message
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            const data = await response.json();
            alert(data.message);
            contactForm.reset();
        } else {
            const text = await response.text();
            alert(text);
        }
    } catch (error) {
        console.error(error);
        alert('Something went wrong with the request.');
    }
});
