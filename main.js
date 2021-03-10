/// START

let isLoaded = () => {

    let loading = document.querySelector('#loading');

    loading.style.opacity = 0;
    loading.remove();

}

let moveToLeft = () => {

    // Contenedor de slides
    const slidesWrap = document.querySelector('div.slides-wrap');

    // Obtengo todos los slides en un array
    const slides = document.querySelectorAll('.slide');

    // 
    let firstSlide = slides[0];
    let lastSlide = slides[slides.length - 1];

    slidesWrap.insertBefore(lastSlide, firstSlide);


}

let moveToRight = () => {

    // Contenedor de slides
    var slidesWrap = document.querySelector('div.slides-wrap');

    // Obtengo todos los slides en un array
    var slides = document.querySelectorAll('.slide');

    // 
    let firstSlide = slides[0];

    slidesWrap.insertBefore(firstSlide, null);

}

let onClickPrev = () => {

    // Contenedor de slides
    var slidesWrap = document.querySelector('div.slides-wrap');

    slidesWrap.classList.add('moveToLeft');

    moveToLeft();

    slidesWrap.addEventListener("animationend", alAcabarLaAnimacion);

    function alAcabarLaAnimacion(e) {

        e.srcElement.classList.remove('moveToLeft');
        slidesWrap.removeEventListener("animationend", alAcabarLaAnimacion);

    }

}

let onClickNext = () => {

    // Contenedor de slides
    var slidesWrap = document.querySelector('div.slides-wrap');

    slidesWrap.classList.add('moveToRight');

    slidesWrap.addEventListener("animationend", alAcabarLaAnimacion);

    function alAcabarLaAnimacion(e) {
        e.srcElement.classList.remove('moveToRight');
        moveToRight();
        slidesWrap.removeEventListener("animationend", alAcabarLaAnimacion);
    }

}

let moveToLeftA = () => {

    // console.log('to left');
    // Contenedor de slides
    let slidesWrap2 = document.querySelector('div.file-list-wrap');

    // Obtengo todos los slides en un array
    let slides = document.querySelectorAll('.file-list-image');

    // 
    let firstSlide = slides[0];
    let lastSlide = slides[slides.length - 1];

    slidesWrap2.insertBefore(lastSlide, firstSlide);

}

let moveToRightA = () => {

    // Contenedor de slides
    let slidesWrap2 = document.querySelector('div.file-list-wrap');

    // Obtengo todos los slides en un array
    let slides = document.querySelectorAll('.file-list-image');

    // 
    let firstSlide = slides[0];

    slidesWrap2.insertBefore(firstSlide, null);

}

let onClickPrev2 = () => {

    // Contenedor de slides
    var slidesWrap2 = document.querySelector('div.file-list-wrap');

    slidesWrap2.classList.add('moveToLeftA');

    for (let index = 0; index < 4; index++) {
        moveToRightA();
    }

}

let onClickNext2 = () => {

    // Contenedor de slides
    var slidesWrap2 = document.querySelector('div.file-list-wrap');

    slidesWrap2.classList.add('moveToRightA');

    
    for (let index = 0; index < 4; index++) {
        moveToLeftA();
    }

}

let moveToLeftB = () => {

    // Contenedor de slides
    let slidesWrap3 = document.querySelector('div.file-list-wrap-sponsors');

    // Obtengo todos los slides en un array
    let slides = document.querySelectorAll('.file-list-image-sponsors');

    // 
    let firstSlide = slides[0];
    let lastSlide = slides[slides.length - 1];

    slidesWrap3.insertBefore(lastSlide, firstSlide);


}

let moveToRightB = () => {

    // Contenedor de slides
    let slidesWrap3 = document.querySelector('div.file-list-wrap-sponsors');

    // Obtengo todos los slides en un array
    let slides = document.querySelectorAll('.file-list-image-sponsors');

    // 
    let firstSlide = slides[0];

    slidesWrap3.insertBefore(firstSlide, null);

}



// Cuando carga el DOM
document.addEventListener('DOMContentLoaded', () => {

     


    // Botones Slider principal
    const btnNext = document.querySelector('div#btn-next');
    const btnPrev = document.querySelector('div#btn-prev');

    if (btnNext && btnPrev) {

        btnPrev.addEventListener('click', () => {
            onClickPrev();
        });

        btnNext.addEventListener('click', () => {
            onClickNext();
        });

    }

    // Botones Slider confian
    const btnNext2 = document.querySelector('div#btn-next2');
    const btnPrev2 = document.querySelector('div#btn-prev2');

    if (btnNext2 && btnPrev2) {

        btnPrev2.addEventListener('click', () => {
            onClickPrev2();
        });

        btnNext2.addEventListener('click', () => {
            onClickNext2();
        });

    }

        // Botones Slider partners
        const btnNext3 = document.querySelector('div#btn-next3');
        const btnPrev3 = document.querySelector('div#btn-prev3');
    
        if (btnNext3 && btnPrev3) {
    
            btnPrev3.addEventListener('click', () => {
                for (let index = 0; index < 4; index++) {
                    moveToRightB();                
                }
            });
    
            btnNext3.addEventListener('click', () => {
                for (let index = 0; index < 4; index++) {
                    moveToLeftB();
                }
            });
    
        }

    // Cuando carga imgs
    window.addEventListener('load', () => {

        isLoaded();

    });// FIN WINDOW LOAD

}); // FIN READY