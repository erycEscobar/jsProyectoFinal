const cartBtn = document.querySelector('.cart-btn');
const cartModalBg = document.querySelector('.cartModal-bg');

cartBtn.addEventListener('click', () => {
    cartModalBg.classList.add('bg-active');
})

window.addEventListener('click', function(e) {
   // console.log(e.target);
    if(e.target === cartModalBg) {
        cartModalBg.classList.remove('bg-active');
    }
})