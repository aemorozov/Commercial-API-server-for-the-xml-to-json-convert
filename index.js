// document.addEventListener('DOMContentLoaded', function () {
const key = 'den';
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
        // здесь вы можете обработать полученные данные
    })
    .catch(error => console.error('Error:', error));
// });