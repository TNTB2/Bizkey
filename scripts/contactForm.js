document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // prevent default submit

    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');

    // Collect form data
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            headers: {
                'Accept': 'application/json',
            },
            body: formData,
        });

        if (response.ok) {
            // Hide submit button
            submitButton.style.display = 'none';

            // Show thank you message
            const thankYou = document.createElement('p');
            thankYou.textContent = "Thank you for contacting us! We'll get back to you shortly.";
            thankYou.style.color = '#107bab';
            thankYou.style.fontWeight = 'bold';
            thankYou.style.marginTop = '1rem';

            form.appendChild(thankYou);

            // Optionally reset the form
            form.reset();
        } else {
            alert('Oops! There was a problem submitting your form.');
        }
    } catch (error) {
        alert('Oops! There was a problem submitting your form.');
        console.error(error);
    }
});
