let hamburgerButton = document.querySelector('#hamburger-btn');
let xmark = document.querySelector('#xmark');
let ulItems = document.querySelector('.items');
let logo = document.querySelector('.logo');




hamburgerButton.addEventListener('click', () => {
    xmark.style.display = 'block';
    hamburgerButton.style.display = 'none';
    if (logo.style.display === 'block') {
        logo.style.display = 'none';
    } else {
        logo.style.display = 'block';
    }

    if (ulItems.style.display === 'block') {
        ulItems.style.display = 'none';
    } else {
        ulItems.style.display = 'block';
    }
});

xmark.addEventListener('click', () => {
    xmark.style.display = 'none';
    hamburgerButton.style.display = 'block';
    if (logo.style.display === 'block') {
        logo.style.display = 'none';
    } else {
        logo.style.display = 'block';
    }

    if (ulItems.style.display === 'block') {
        ulItems.style.display = 'none';
    } else {
        ulItems.style.display = 'block';
    }
});