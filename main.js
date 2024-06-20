import { board } from './board.js';
const hamBtn = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const theboard = document.querySelector('.theboard');
const copyright = document.querySelector('.copyright');
const body = document.querySelector('body');

hamBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamBtn.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    navLinks.classList.contains('active') ? navLinks.style.display = 'flex' : navLinks.style.display = 'none';
    body.classList.toggle('disaable-scroll');
});

let boardHtml = ""
board.forEach(function(boardMember) {
    let {image,name_,universty,position} = boardMember
    boardHtml += `
                <div class="individual">
                <img class="avatar"  src="images/board/${image}" alt="individual avatar">
                <p class="board-name">${name_}</p>
                <p class="universty-name">${universty}</p>
                <p class="position">${position}</p>
                </div>`
  });
theboard.innerHTML = boardHtml;
copyright.innerHTML = `CTP ETHIOPIA © ${new Date().getFullYear()}`;