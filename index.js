const key = 'aemorozov1';
const url = 'https://bzden-server.vercel.app/api/keys';

fetch(url, {
    method: 'GET',
    headers: {
        'Authorization': key
    }
})
    .then(response => response.json())
    .then(isKeyValid => {
        console.log(isKeyValid);
    })
    .catch(error => { error });