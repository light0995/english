

const educationBtns = document.querySelectorAll('.education__btn');
const overlay = document.querySelector('.overlay');
const educationImg = document.querySelectorAll('.education__img-wrapper');
const closeBtn = document.querySelectorAll('.education__img-close');


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
    
    });
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            overlay.classList.remove('overlay__active');
            educationImg.forEach(item => item.classList.remove('education__img-wrapper-active'));
        }
    });
};

showEducation();
closeEducation();



