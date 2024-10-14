document.getElementById('ajaxForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    console.log('Submit button clicked'); // Debugging

    let formData = new FormData(document.getElementById('ajaxForm'));

    fetch('process.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').textContent = 'Form submitted successfully!';
        } else {
            document.getElementById('message').textContent = 'Error: ' + data.error;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'There was an error processing the request.';
    });
});
