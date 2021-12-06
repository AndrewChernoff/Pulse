const slider = tns({
    container: '.slick__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').onclick = function () {
    slider.goTo('prev');
};

document.querySelector('.next').onclick = function () {
    slider.goTo('next');
};



let more = document.querySelectorAll('.catalog-item__link');
let content = document.querySelectorAll('.catalog-items__content__active');
let back = document.querySelectorAll('.catalog-item__back');
let list = document.querySelectorAll('.catalog-items__list');

function hideContent(i = 0) {
    content[i].classList.remove('catalog-items__content__active');
    content[i].classList.toggle('catalog-items__content');
}

function showList(i = 0) {
    list[i].classList.remove('catalog-items__list');
    list[i].classList.toggle('catalog-items__list__active');
}

more.forEach((m, i) => {
    m.addEventListener('click', function (e) {
        hideContent(i);
        showList(i);
    })
})


function showContent(i = 0) {
    content[i].classList.toggle('catalog-items__content__active');
    content[i].classList.remove('catalog-items__content');
}

function hideList(i = 0) {
    list[i].classList.toggle('catalog-items__list');
    list[i].classList.remove('catalog-items__list__active');
}


back.forEach((b, i) => {
    b.addEventListener('click', function () {
        showContent(i);
        hideList(i);
    })
})

function switchTab(evt, tabId) {
    let i, catalogItems, catalogTab;
    catalogItems = document.getElementsByClassName("catalog-items__show");
    for (i = 0; i < catalogItems.length; i++) {
        catalogItems[i].className = "catalog-items__notshow";
        catalogTab = document.querySelectorAll(".catalog__tab");

        for (i = 0; i < catalogTab.length; i++) {
            catalogTab[i].className = "catalog__tab__inactive";
        }
    }

    document.getElementById(tabId).className = "catalog-items__show";
    evt.currentTarget.className = "catalog__tab";
}

/////Modal
let consultation = document.querySelectorAll("[data-consultation]");
let consultMododal = document.querySelector("#consultation");
let orderMododal = document.querySelector("#order");
let overlay = document.querySelector(".overlay");
const closeConsult = document.querySelector('#consultation .modal__close');
const closeOrder = document.querySelector('#order .modal__close');
const order = document.querySelectorAll(".button__catalog-item");

//consultation
consultation.forEach(el => {
    el.addEventListener('click', function () {
        overlay.style.display = 'block';
        consultMododal.style.display = 'block';
        document.body.style.overflow = 'hidden'
    })
})

closeConsult.addEventListener('click', function () {
    overlay.style.display = 'none';
    consultMododal.style.display = 'none';
    document.body.style.overflow = ''
})

//order
let catalogItem = document.querySelectorAll(".catalog-item__title");

order.forEach((el, i) => {
    el.addEventListener('click', function () {
        overlay.style.display = 'block';
        orderMododal.style.display = 'block';
        document.querySelector("#order .modal__subtitle").innerHTML = catalogItem[i].innerHTML;
        document.body.style.overflow = 'hidden';
    })
})

closeOrder.addEventListener('click', function (e) {
    overlay.style.display = 'none';
    orderMododal.style.display = 'none';
    document.body.style.overflow = '';
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        overlay.style.display = 'none';
        orderMododal.style.display = 'none';
        document.body.style.overflow = '';
    }
})

