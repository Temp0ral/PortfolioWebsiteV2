document.addEventListener('DOMContentLoaded', function() {

const showBtn = document.querySelector('.navbtn');
const topNav = document.querySelector('.nav-top');

showBtn.addEventListener('click', function(){
    if(topNav.classList.contains('showNav')){
        topNav.classList.remove('showNav');
        showBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    } else {
        topNav.classList.add('showNav');
        showBtn.innerHTML = '<i class="fa-solid fa-square-xmark"></i>';
    }
});
/* LIGHTBOX */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
});


