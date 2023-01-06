const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function() {
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');

    if(moon.classList.contains('hidden')) {
        document.querySelector('body').style.backgroundColor = '#262626';
        document.querySelector('.card').style.backgroundColor = '#464646';
        document.querySelector('.title').style.color = '#E6E5A3';
        document.querySelector('.code').style.color = '#fdffcd';
        document.querySelector('.valid').style.color = '#fdffcd';
        document.querySelector('.date').style.color = '#fdffcd';
        document.querySelector('.id').style.color = '#fdffcd';

    } else {
        document.querySelector('body').style.backgroundColor = '#EAD2AC';
        document.querySelector('.card').style.backgroundColor = '#e7eaf6';
        document.querySelector('.title').style.color = '#000000';
        document.querySelector('.code').style.color = '#282A3A';
        document.querySelector('.valid').style.color = '#735F32';
        document.querySelector('.date').style.color = '#C69749';
        document.querySelector('.id').style.color = '#C69749';
    }
});