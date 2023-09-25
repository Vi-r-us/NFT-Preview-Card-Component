//Play an animation back on second click

let iconMenu = document.querySelector('.bodymovinanim');

let animationMenu = bodymovin.loadAnimation({
        container: iconMenu,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "images/eyeAnimAlt.json"
});

var directionMenu = 1;
    iconMenu.addEventListener('mouseenter', (e) => {
    animationMenu.setDirection(directionMenu);
    animationMenu.play();
});

    iconMenu.addEventListener('mouseleave', (e) => {
    animationMenu.setDirection(-directionMenu);
    animationMenu.play();
});