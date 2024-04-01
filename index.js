const key = 'aemorozov'

const url = `https://bzden-server-4xdsz9u8a-aemorozov.vercel.app:3000/api/keys?key=${encodeURIComponent(key)}`

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));