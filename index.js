
const button = document.getElementById('btn');
const title = document.getElementById('ttl');

const value = ['ооо',
    'ммм',
    'лучше',
    'ага'];
const i = Math.floor(Math.random() * value.length);

title.innerHTML = value[i]
button.addEventListener('click', function () {
    const i = Math.floor(Math.random() * value.length);
    title.innerHTML = value[i];
});