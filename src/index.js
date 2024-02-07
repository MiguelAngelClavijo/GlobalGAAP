window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar-container');
    var list = document.getElementById('navbar-list');
    var logoBlanco = document.getElementById('logo-blanco');
    var logoColor = document.getElementById('logo-color');
    
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scroll');
      logoBlanco.style.display = 'none';
      logoColor.style.display = 'block';
    } else {
      navbar.classList.remove('navbar-scroll');
      logoBlanco.style.display = 'block';
      logoColor.style.display = 'none';
    }
  });

  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar-container');
    if (window.pageYOffset > 100) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });

  window.addEventListener('scroll', function() {
    var list = document.getElementById('navbar-list');
    if (window.pageYOffset > 100) { 
        list.classList.add('list-scroll');
    } else {
        list.classList.remove('list-scroll');
    }
  });
  
  