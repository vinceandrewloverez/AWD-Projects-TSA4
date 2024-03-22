const restaurants = [
  {
    name: "Le Du",
    overlayText: "<div class=\"ratings\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon></div>",
    image:
      "https://scontent.fmnl2-2.fna.fbcdn.net/v/t1.6435-9/118119428_3011334585660248_2258507305623934799_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGBfRY-GhI7lTv3l8_7KeUD6wAnWrQUkL_rACdatBSQv1xQAc6qMYtIKfCL4AAW1hDFyvtUwZRe2FbC3FulGx9T&_nc_ohc=FrTyU3VrZLcAX__vzm2&_nc_ht=scontent.fmnl2-2.fna&oh=00_AfCOADTrHdBtinBK3sgisYeI1I0Wpf4JqDznoRZVzCFI9w&oe=661C13FB",
    description:
      "Le Du actually comes from a Thai word “ฤดู”, a synonym for the word “season” in Thai. The name reflects an emphasis on our culinary creations out of seasonal produce. Le Du is a modern Thai-inspired eatery. We offer 4 courses and tasting menus featuring the extraordinary agricultural bounty of Thailand and on the centuries-old culinary cultures that have taken roots here. Our wines are carefully chosen by our certified sommelier. The wine list features many unique and intriguing wines from around the world.",
    address: "399/3 Silom 7 Alley, Silom, Bang Rak Bangkok 10500",
    email: "info@ledubkk.com",
    openingHours: "12:00 AM – 2:00 PM, 6:00 PM – 11:00 PM",
    priceRange: "PHP 8, 500 per person",
    reservations: "Required",
    dishes: "Soft Shell Crab, Golden Snapper",
  },
  {
    name: "Toyo Eatery",
    overlayText: "<div class=\"ratings\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star-half\"></ion-icon></div>",
    image:
      "https://www.willflyforfood.net/wp-content/uploads/2019/03/toyo-eatery15.jpg.webp",
    description:
      "With both à la carte and tasting options, Toyo Eatery presents Filipino ingredients in modern ways, playing with fermentation and preservation techniques to create the boldest flavours. The signature dish is a collection of 18 vegetables in a unique salad, named Bahay Kubo after a popular Tagalog children’s folk song. Other highlights include an adaptation of a popular street food pork barbecue dish, served three ways, and the Tortang Talong eggplant omelette with banana catsup.  ",
    address: "The Alley at Karrivin, Karrivin Plaza, Chino Roces Ext., Makati, Philippines",
    email: "reservations@toyoeatery.com",
    openingHours: "6:00 PM – 11:00 PM",
    priceRange: "PHP 5, 500 per person",
    reservations: "Required",
    dishes: "Bahay Kubo",
  },

  {
    name: "Hapag",
    overlayText: "<div class=\"ratings\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star-half\"></ion-icon></div>",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi3bkSu4IlfI3rLupJJn8P7lHEZY9f2EWirxQU48cvLQ&s",
    description: "Hapag is the Filipino dining table; a low, short-legged table where Filipinos gather over their love for good food. For Chefs Nav and Thirdy, Hapag is built from the values that were instilled into them by their respective households—where meals are a sacred time for bonding with people who matter most. Hapag is where everyone can share stories about their day, bring joy and woes to the table, but still feel safe. A place where nothing else matters but this very moment every single day.",
    address: "201 Katipunan Avenue, Project 4, Quezon City",
    email: "hello@hapagmnl.com",
    openingHours: "6:00 PM – 11:00 PM",
    priceRange: "PHP 5, 945 per person",
    reservations: "Required",
    dishes: "Pan de Kalinga, Sinigang Cocktail, Snackbox",
  },

  {
    name: "MŌDAN.MNL",
    overlayText: "<div class=\"ratings\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star\"></ion-icon><ion-icon name=\"star-half\"></ion-icon></div>",
    image: "https://mb.com.ph/wp-content/uploads/2023/01/Amaebi-capsicum-jicama-tosaka-1024x768.jpg",
    description: "MŌDAN means Modern in Japanese. We serve a progressive Japanese Degustation Menu focused on local and Japan-flown ingredients with the use of Neo-traditional Japanese techniques cultivated by Chef Jorge Mendez.",
    address: "Escalades East Tower, 20th Ave, Cubao, Quezon City, 1100 Metro Manila",
    email: "modan.mnl@gmail.com",
    openingHours: "5:30 PM - 8:30 PM",
    priceRange: "PHP 7, 000 per person",
    reservations: "Required",
    dishes: "Debasaki",
  },
  
];

let popupOpen = false;

function generateRestaurantCards() {
  const restaurantList = document.getElementById("restaurantList");
  restaurantList.innerHTML = "";
  

  restaurants.forEach((restaurant, index) => { 
    const card = document.createElement("div");
    card.classList.add("card", "mb-4", "position-relative");
    card.setAttribute("data-index", index);

    card.innerHTML = `
      <h5 class="card-title">${restaurant.name}</h5>
      <img src="${restaurant.image}" class="card-img-top" alt="${restaurant.name}">
      <div class="card-overlay">
        <p class="overlay-text">${restaurant.overlayText}</p>
      </div>
    `;
    card.addEventListener("click", () => openPopup(restaurant));
    restaurantList.appendChild(card);
  });
}

function openPopup(restaurant) {
  const popup = document.getElementById("popup");

  if (!popupOpen) {
    popup.innerHTML = `
      <div class="popup-content">
        <div class="popup-image">
          <img src="${restaurant.image}" class="popup-img" alt="${restaurant.name}">
        </div>
        <div class="popup-info">
          <h1>${restaurant.name}</h1>
          <p><strong>Address:</strong> ${restaurant.address}</p>
          <p><strong>Email:</strong> ${restaurant.email}</p>
          <p><strong>Open Time:</strong> ${restaurant.openingHours}</p>
          <p><strong>Price:</strong> ${restaurant.priceRange}</p>
          <p><strong>Reservations:</strong> ${restaurant.reservations}</p>
          <p><strong>Notable dishes:</strong> ${restaurant.dishes}</p>

          <p>${restaurant.description}</p>
        </div>
      </div>
    `;
    popup.style.display = "block";
    popupOpen = true;
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  popupOpen = false;
}

document.getElementById("exit-btn").addEventListener("click", closePopup);
generateRestaurantCards();

