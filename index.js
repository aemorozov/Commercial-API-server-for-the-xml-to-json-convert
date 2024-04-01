const key = 'aemorozov'

const url = `http://localhost:3000/api/keys?key=${encodeURIComponent(key)}`

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));