document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.querySelector('.spaceship');
    const wormhole = document.querySelector('.wormhole');

    spaceship.addEventListener('animationend', () => {
        const spaceshipRect = spaceship.getBoundingClientRect();
        const wormholeRect = wormhole.getBoundingClientRect();

        if (spaceshipRect.right >= wormholeRect.left && spaceshipRect.left <= wormholeRect.right) {
            spaceship.classList.add('fade-out');
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const spaceship = document.querySelector('.spaceship');
    const wormhole = document.querySelector('.wormhole');
    const spaceshipSound = document.getElementById('spaceship-sound');
    const wormholeSound = document.getElementById('wormhole-sound');

    spaceship.addEventListener('animationend', () => {
        const spaceshipRect = spaceship.getBoundingClientRect();
        const wormholeRect = wormhole.getBoundingClientRect();

        if (spaceshipRect.right >= wormholeRect.left && spaceshipRect.left <= wormholeRect.right) {
            spaceship.classList.add('fade-out');
            spaceshipSound.pause(); 
            wormholeSound.play(); 
        }
    });
});

