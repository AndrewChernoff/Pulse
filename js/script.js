const slider = tns({
    container: '.slick__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    /* responsive: {
        640: {
            edgePadding: 20,
            gutter: 20,
            items: 2
        },
        700: {
            gutter: 30
        },
        900: {
            items: 3
        }
    } */
});

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.next').onclick = function () {
    slider.goTo('next');
};
