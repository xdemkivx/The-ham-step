<!--______________________________Services-section__________________________________________________-->

const tabsContents = document.getElementsByClassName('our-services-tabs-description');

const clickHandler = (event) => {
    const clickedLi = event.target;
    const activeTab = document.getElementsByClassName('active');
    if (activeTab.length > 0) activeTab[0].classList.remove('active');
    clickedLi.classList.add('active');

    for (let element of tabsContents) {
        element.classList.add('tab-hidden');
        if (element.dataset.tab === clickedLi.dataset.tab) {
            element.classList.remove('tab-hidden');
        }
    }
};
const tabsWrapper = document.getElementById('tabs');
tabsWrapper.addEventListener('click', clickHandler);


<!--__________________________ Our amazing work section_____________________________________________________-->


// tabs with categories

const $tabs2 = $('.img-gallery-item');
console.log($tabs2)


$('.tabs2-title').click((event) => {

// removing of button on other categories
    const LoadMoreBtn = document.querySelector('.load-more-btn');
    if (event.target.dataset.category === 'all') {
        LoadMoreBtn.style.display = 'inline-block';

        const First12imgs = $('.img-gallery-item').slice(0, 12);
        for (let i = 0; i < First12imgs.length; i++) {
            const everyOf12 = First12imgs[i];
            console.log(everyOf12);
            everyOf12.classList.remove('tab-hidden');
        }
    } else {
        LoadMoreBtn.style.display = 'none';
    }
    
// ----------------


// tabs

    $('.active').removeClass('active');
    const clickedLi = $(event.target);
    clickedLi.addClass("active");

    $tabs2.each((elemIndex, el) => {
        $(el).addClass('tab-hidden');
        if ((clickedLi.data("category")) === 'all') {

            const First12imgs = $('.img-gallery-item').slice(0, 12);
            for (let i = 0; i < First12imgs.length; i++) {
                const everyOf12 = First12imgs[i];
                console.log(everyOf12);
                everyOf12.classList.remove('tab-hidden');
            }
        } else if ($(el).data("category") === (clickedLi.data("category"))) {
            $(el).removeClass('tab-hidden');
        } else if ($(el).data("category") !== (clickedLi.data("category"))) {
            $(el).addClass('tab-hidden');
        }
    });
});

// Див, появляющийся по ховеру

const $img = $('.img-gallery-item');
$img.on('mouseenter', hoverDivGeneration);

function hoverDivGeneration(event) {

// Имя текущей категории
    let $categoryName = $(this).data("category");
// генерим дивак
    const $hoverDiv = $('<div class="div-on-hover">' +
        '<div>' +

        '<img src="./img/10.svg" alt="icon"> ' +
        '</div>' +
        '<p class="creative-design t">creative design</p>' +
        ' <p>' + $categoryName + ' </p> ' +
        '</div>');
    $(event.target).css.position = "relative";
    $(event.target).before($hoverDiv);
};

$img.on('mouseleave', () => {
    $('.div-on-hover').remove();
});


// load more button

$('#load-more-gallery-btn').on('click', () => {

    const Second12imgs = $('.img-gallery-item').slice(12, 24);
    for (let i = 0; i <= Second12imgs.length; i++) {
        $(Second12imgs[i]).removeClass('tab-hidden');
    }
    LoadMoreBtn.style.display = 'none';

});

let galleryThumbs = new Swiper('.gallery-bottom', {
    spaceBetween: 36,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 5, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,

});
let galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 36,
    loop: true,
    loopedSlides: 5,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: galleryThumbs,
    },
});




