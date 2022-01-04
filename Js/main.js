/*Carrusel 1, Clothing store, Nosotros */
document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 3,
        numVisible: 3,
        noWrap: false,
    });
});

const slickWidth = slick[0].offesetWidth;

buttonPrev.onclick = () => Move(1);
buttonNext.onclick = () => Move(2);

function Move(value) {
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == "" ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    if (leftPosition < (trackWidth - listWidth) && value == 2) {
        track.style.left = '${-1 * (leftPosition + slickWidth)}px';
    } else if (leftPosition > 0 && value == 1) {
        track.style.left = '${-1 * (leftPosition - slickWidth)}px';
    }

}


