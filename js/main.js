const menu = () => {
   const menuBtn = document.querySelector('.burger-menu');
   const menu = document.querySelector('.header__menu-nav');
   const navLink = document.querySelectorAll('.header__menu-nav a');
   const body = document.querySelector('body');
   const logo = document.querySelector('#logo-icon');
   const language = document.querySelector('.language');

   menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
      logo.classList.toggle('active');
      body.classList.toggle('lock');
      language.classList.toggle('active');
   });

   navLink.forEach((elem) => {
      elem.addEventListener('click', (event) => {
         event.preventDefault();
         const id = event.target.getAttribute('href').substr(1);
         document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
         menuBtn.classList.remove('active');
         menu.classList.remove('active');
         logo.classList.remove('active');
         body.classList.remove('lock');
         language.classList.remove('active');
      });
   });
};
menu();