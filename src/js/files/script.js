// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const buttonPlay = document.querySelector(".js-video__play");
const videoPlay = document.querySelector("video");

function showVideo(){
   videoPlay.play();
   buttonPlay.remove();
   buttonPlay.removeEventListener("click", showVideo);
};
if (buttonPlay) {
   buttonPlay.addEventListener("click", showVideo);
};

const serv = document.querySelector('.js-serv-page');
const about = document.querySelector('.js-ab-page');
const adv = document.querySelector('.js-adv-page');
const creat = document.querySelector('.js-creat-page');
const headerLinkServ = document.querySelector('.menu__link.js-serv');
const headerLinkAbout = document.querySelector('.menu__link.js-ab');
const headerLinkCreat = document.querySelector('.menu__link.js-creat');
const headerLinkAdv = document.querySelector('.menu__link.js-adv');

function headerLinkActive() {
   if (serv) {
      if (headerLinkServ) {
         headerLinkServ.classList.add('active-page');
      }
   } else if (about) {
      if (headerLinkAbout) {
         headerLinkAbout.classList.add('active-page');
      }
   } else if (adv) {
      if (headerLinkAdv) {
         headerLinkAdv.classList.add('active-page');
      }
   } else if (creat) {
      if (headerLinkCreat) {
         headerLinkCreat.classList.add('active-page');
      }
   }
};
headerLinkActive();