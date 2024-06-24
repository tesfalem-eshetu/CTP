import {postArticle } from './resourceLink.js';
import {videoReccomendations} from './resourceLink.js';
const hamBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const copyright = document.querySelector('.copyright');
const body = document.querySelector('body');
const indNavLinks = document.querySelectorAll('.ind-nav-links');
const blogArticle = document.querySelector('.blog-article');
const indVideoRecommendation = document.querySelector('.ind-video-recommendation');



hamBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    navLinks.classList.contains('active') ? navLinks.style.display = 'flex' : navLinks.style.display = 'none';
    body.classList.toggle('disaable-scroll');
});
indNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamBtn.innerHTML = '<i class="fas fa-bars"></i>';
        navLinks.style.display = 'none';
        body.classList.remove('disaable-scroll');
    });
});

copyright.innerHTML = `CTP ETHIOPIA © ${new Date().getFullYear()}`;
// to calculate the height of the header and set the margin to of the main-image-container dynammically 
function adjustMainImgMargin() {
    const header = document.querySelector('header');
    const mainImgContainer = document.querySelector('.resource-img-container');
    const headerHeight = header.offsetHeight;
    mainImgContainer.style.marginTop = `${headerHeight}px`;
    navLinks.style.top = `${headerHeight}px`;
    
  }
  
  // Initial adjustment on page load
  adjustMainImgMargin();
  
  // Adjust on window resize
  window.addEventListener('resize', adjustMainImgMargin);
  blogArticle.innerHTML += "blogArticle";
  // to display the blog article
  blogArticle.innerHTML = postArticle.map((article) => {
    return `
      <div class="ind-blogArticle">
          <p class="blogTitle"><a href="${article.link}" target="_blank">${article.title}</a></p>
      </div>
    `;
    
  }).join('');
  // to display the video recommendations
  indVideoRecommendation.innerHTML = videoReccomendations.map((video) => {
    return `
    <div class= "eachVideo">
      <div>
          <p class="short-video-description">${video.shortDescription}</p>
      </div>
      
      <dvi class="video-embed-link">
          ${video.youtubeEmbedLink}
      </div>
  </div>
    `;
  }).join('');
  


  
  