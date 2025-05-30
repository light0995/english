

const educationBtns = document.querySelectorAll('.education__btn');
const overlay = document.querySelector('.overlay');
const educationImg = document.querySelectorAll('.education__img-wrapper');
const closeBtn = document.querySelectorAll('.education__img-close');
const leftBtn = document.querySelector('.left__btn');
const rightBtn = document.querySelector('.right__btn');
const width = +getComputedStyle(document.querySelector('.work__photos')).width.replace(/px/, '');
const carouselItems = document.querySelectorAll('.carousel__item');
const carouselWrapper = document.querySelector('.carousel__wrapper');
let offset = 0;
const timerId = setInterval(() => {
    nextSlide();
}, 5000);
const modal = document.querySelector('.modal');
const modalToggle = document.querySelector('.action__btn');
const modalClose = document.querySelector('.modal__close');

function showEducation () {
    educationBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            overlay.classList.add('overlay__active');
            educationImg[index].classList.add('education__img-wrapper-active');    
        });
    })
};

function closeEducation () {
    closeBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            overlay.classList.remove('overlay__active');
            educationImg[index].classList.remove('education__img-wrapper-active');
        });
    });
    overlay.addEventListener('click', () => {
        overlay.classList.remove('overlay__active');
        educationImg.forEach(item => item.classList.remove('education__img-wrapper-active'));
        closeModal();
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay.classList.remove('overlay__active');
            educationImg.forEach(item => item.classList.remove('education__img-wrapper-active'));
            closeModal();
        }
    });
};


function nextSlide () {
    if (offset === width * (carouselItems.length - 1)) {
        offset = 0;
    } else {
        offset += width;
    }
    carouselWrapper.style.transform = `translateX(-${offset}px)`

};

function prevSlide () {
    if (offset === 0) {
        offset = width * (carouselItems.length - 1);
    } else {
        offset -= width;
    }
    carouselWrapper.style.transform = `translateX(-${offset}px)`;

};

function openModal () {
    modal.classList.add('modal__active');
    overlay.classList.add('overlay__active');
}


function closeModal () {
    modal.classList.remove('modal__active');
    overlay.classList.remove('overlay__active');
}



leftBtn.addEventListener('click', () => {
    clearInterval(timerId);
    prevSlide();
});

rightBtn.addEventListener('click', () => {
    clearInterval(timerId);
    nextSlide();
});


modalToggle.addEventListener('click', () => {
    openModal();
});

modalClose.addEventListener('click', () => {
    closeModal();
});



showEducation();
closeEducation();



