const key = 'aemorozov';
const url = 'https://bzden-server.vercel.app/api/keys';

fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': key
    }
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error:', error));