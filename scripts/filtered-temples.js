// scripts/filtered-temples.js
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = document.getElementById("currentyear");
  const lastModified = document.getElementById("lastmodified");
  const hamburger = document.getElementById('hamburger');
  const navBar = document.querySelector('.nav-bar');
  const navList = document.getElementById('nav-list');
  const resGrid = document.querySelector('.res-grid');
  const navLinks = navList.querySelectorAll('a');

  if (currentYear) {
      currentYear.textContent = new Date().getFullYear();
  }

  if (lastModified) {
      lastModified.textContent = `Last Modification: ${document.lastModified}`;
  }

  if (hamburger && navBar) {
      hamburger.addEventListener('click', () => {
          navBar.classList.toggle('active');
      });

      // Close the menu if a link is clicked (for better mobile experience)
      navList.addEventListener('click', (event) => {
          if (event.target.tagName === 'A') {
              navBar.classList.remove('active');
          }
      });
  }

  const temples = [
      {
          templeName: "Aba Nigeria Temple",
          location: "Aba, Nigeria",
          dedicated: "August 7, 2005",
          area: 11500,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
          dedicatedYear: 2005,
          isLarge: false
      },
      {
          templeName: "Manti Utah Temple",
          location: "Manti, Utah, United States",
          dedicated: "May 21, 1888",
          area: 74792,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
          dedicatedYear: 1888,
          isLarge: false
      },
      {
          templeName: "Payson Utah Temple",
          location: "Payson, Utah, United States",
          dedicated: "June 7, 2015",
          area: 96630,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
          dedicatedYear: 2015,
          isLarge: true
      },
      {
          templeName: "Yigo Guam Temple",
          location: "Yigo, Guam",
          dedicated: "May 2, 2020",
          area: 6861,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
          dedicationYear: 2020,
          isLarge: false
      },
      {
          templeName: "Washington D.C. Temple",
          location: "Kensington, Maryland, United States",
          dedicated: "November 19, 1974",
          area: 156558,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
          dedicatedYear: 1974,
          isLarge: true
      },
      {
          templeName: "Lima Perú Temple",
          location: "Lima, Perú",
          dedicated: "January 10, 1986",
          area: 9600,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
          dedicatedYear: 1986,
          isLarge: false
      },
      {
          templeName: "Mexico City Mexico Temple",
          location: "Mexico City, Mexico",
          dedicated: "December 2, 1983",
          area: 116642,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
          dedicatedYear: 1983,
          isLarge: true
      },
      {
          templeName: "Phoenix Arizona Temple",
          location: "5220 W Pinnacle Peak Rd, Phoenix, Arizona",
          dedicated: "November 16, 2014",
          area: 6027,
          imageUrl: "https://newsroom.churchofjesuschrist.org/media/960x540/Phoenix_Exterior3.jpg",
          dedicatedYear: 2014,
          isLarge: false
      },
      {
          templeName: "St. George Utah Temple",
          location: "St. George, Utah",
          dedicated: "April 6, 1877",
          area: 13375,
          imageUrl: "https://www.churchofjesuschrist.org/bc/content/locations/st-george-utah-temple-visitors-center/images/SGVCExterior2_Detail.jpg",
          dedicatedYear: 1877,
          isLarge: false
      },
      {
          templeName: "Porto Alegre Brazil Temple",
          location: "Rua General Salvador Pinheiro, 50 Vila Jardim",
          dedicated: "December 17, 2000",
          area: 1238,
          imageUrl: "https://www.churchofjesuschrist.org/imgs/4e35ef2858432da81d11185b5e6dece42f7b1105/full/500%2C/0/default",
          dedicatedYear: 2000,
          isLarge: false
      },
  ];

  function createTempleCard(temple) {
      const card = document.createElement('section');
      const name = document.createElement('h3');
      const location = document.createElement('p');
      const dedication = document.createElement('p');
      const area = document.createElement('p');
      const img = document.createElement('img');

      name.innerHTML = `<strong>${temple.templeName}</strong>`; // Make temple name bold
      location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
      dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
      area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;
      img.src = temple.imageUrl;
      img.alt = `${temple.templeName} Temple`;
      img.loading = 'lazy';

      card.appendChild(name);
      card.appendChild(img);
      card.appendChild(location);
      card.appendChild(dedication);
      card.appendChild(area);

      return card;
  }

  function displayTemples(templesToDisplay) {
      if (resGrid) {
          resGrid.innerHTML = ''; // Clear existing cards
          for (let i = 0; i < templesToDisplay.length; i++) {
              const temple = templesToDisplay[i];
              const card = createTempleCard(temple);
              resGrid.appendChild(card);
          }
      }
  }

  // Function to set the active link style
  function setActiveLink(target) {
    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });
    target.classList.add('active-link');
}

// Initially set the 'Home' link as active
const homeLink = document.querySelector('nav a[href="#home"]');
if (homeLink) {
    setActiveLink(homeLink);
}

  // Initial display of all temples
  displayTemples(temples);

  // Filter functionality for navigation links
  if (navList) {
      navList.addEventListener('click', (event) => {
          if (event.target.tagName === 'A') {
              event.preventDefault(); // Prevent default link behavior
              const filter = event.target.getAttribute('href').substring(1); // Get the filter type

              let filteredTemples = [];
              if (filter === 'home') {
                  filteredTemples = temples;
              } else if (filter === 'old') {
                  filteredTemples = temples.filter(temple => temple.dedicatedYear < 1900);
              } else if (filter === 'new') {
                  filteredTemples = temples.filter(temple => temple.dedicatedYear > 2000);
              } else if (filter === 'large') {
                  filteredTemples = temples.filter(temple => temple.area > 90000);
              } else if (filter === 'small') {
                  filteredTemples = temples.filter(temple => temple.area < 10000);
              }

              displayTemples(filteredTemples);
              setActiveLink(event.target);
              navBar.classList.remove('active'); // Close the menu after clicking
          }
      });
  }
});