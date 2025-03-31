document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    document.getElementById("lastmodified").textContent =
    	"Last Modification: " + document.lastModified;

    const hamburger = document.getElementById('hamburger');
    const navBar = document.querySelector('.nav-bar');

    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('active');
    //     if (navList.classList.contains('open')) {
    //         hamburger.textContent = 'X';
    //     } else {
    //         hamburger.textContent = '☰';
    //     }
    //   }); 
    });
});