const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function() {
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');

    if(moon.classList.contains('hidden')) {
        document.querySelector('body').style.backgroundColor = '#262626';
        document.querySelector('.card').style.backgroundColor = '#464646';
        document.querySelector('.card h1').style.color = '#fdffcd';
        document.querySelector('.code').style.color = '#fdffcd';
        document.querySelector('.valid').style.color = '#fdffcd';
        document.querySelector('.date').style.color = '#fdffcd';
        document.querySelector('.id').style.color = '#fdffcd';

    } else {
        document.querySelector('body').style.backgroundColor = '#9fd3c7';
        document.querySelector('.card').style.backgroundColor = '#e7eaf6';
        document.querySelector('.title').style.color = '#233142';
        document.querySelector('.code').style.color = '#455d7a';
        document.querySelector('.valid').style.color = '#385170';
        document.querySelector('.date').style.color = '#113f67';
        document.querySelector('.id').style.color = '#113f67';
    }
});