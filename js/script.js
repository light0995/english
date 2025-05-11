

const educationBtns = document.querySelectorAll('.education__btn');
const overlay = document.querySelector('.overlay');
const educationImg = document.querySelector('.education__img-wrapper');
const closeBtn = document.querySelector('.education__img-close');


function showEducation () {
    educationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            overlay.classList.add('overlay__active');
            educationImg.classList.add('education__img-wrapper-active');    
        });
    })
};

function closeEducation () {
    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('overlay__active');
        educationImg.classList.remove('education__img-wrapper-active');
    });
    overlay.addEventListener('click', () => {
        overlay.classList.remove('overlay__active');
        educationImg.classList.remove('education__img-wrapper-active');
    
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay.classList.remove('overlay__active');
            educationImg.classList.remove('education__img-wrapper-active');
        }
    });
};

showEducation();
closeEducation();



