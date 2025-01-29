document.addEventListener('DOMContentLoaded', () => {
    const textColorInput = document.getElementById('textColor');
    const bgColorInput = document.getElementById('bgColor');
    const cardColorInput = document.getElementById('cardColor');
    const homeColorInput = document.getElementById('homeColor');

    textColorInput.addEventListener('input', (e) => {
        document.body.style.color = e.target.value;
    });

    bgColorInput.addEventListener('input', (e) => {
        document.body.style.backgroundColor = e.target.value;
    });

    cardColorInput.addEventListener('input', (e) => {
        document.querySelectorAll('.card').forEach(card => {
            card.style.backgroundColor = e.target.value;
        });
    });

    homeColorInput.addEventListener('input', (e) => {
        document.querySelector('header').style.backgroundColor = e.target.value;
    });
});
