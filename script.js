const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', function() {
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');

    if(moon.classList.contains('hidden')) {
        document.querySelector('body').style.backgroundColor = '#262626';
    } else {
        document.querySelector('body').style.backgroundColor = '#9fd3c7';
    }
});