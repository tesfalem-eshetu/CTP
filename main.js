
const hamBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    navLinks.classList.contains('active') ? navLinks.style.display = 'block' : navLinks.style.display = 'none';
});
