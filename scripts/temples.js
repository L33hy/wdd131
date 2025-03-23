document.getElementById("currentyear").textContent = new Date().getFullYear();

document.getElementById("lastmodified").textContent =
	"Last Modification: " + document.lastModified;

const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', function() {
    navList.classList.toggle('open');
    if (navList.classList.contains('open')) {
        hamburger.textContent = 'X';
    } else {
        hamburger.textContent = '☰';
    }
  }); 
});