const navLink = document.querySelectorAll('.header__menu-nav a');

navLink.forEach((elem) => {
   elem.addEventListener('click', (event) => {
      event.preventDefault();
      const id = event.target.getAttribute('href').substr(1);

      document.getElementById(id).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
});