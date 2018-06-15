const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

// Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));
current.addEventListener('animationend', fadeAnimation);

function imgClick(e) {
   //  Reset the opacity for all images
   imgs.forEach(img => (img.style.opacity = 1))

   // Change the opacity to const opacity of target image
   e.target.style.opacity = opacity;

   // Change current img to src of target image
   if (current.src === e.target.src) {
      return;
   } else {
      current.src = e.target.src;
   }

   // Add fade-in class
   current.classList.add('fade-in');

}

function fadeAnimation() {
   current.classList.remove('fade-in');
}

