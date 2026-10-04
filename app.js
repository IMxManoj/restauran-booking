// ========================================
// TABLELY — REALISTIC RESTAURANT BOOKING DEMO
// ========================================

const restaurants = [
  {
    id: 1, name: "KOKO", city: "Mumbai", cuisine: "Asian", location: "Lower Parel",
    rating: 4.6, reviews: 1284, price: "₹₹₹₹", priceForTwo: 3500, distance: "1.2 km",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
    description: "Contemporary Asian dining with sushi, robata and polished late-night energy.",
    amenities: ["Indoor", "Bar", "Valet parking"],
    menu: [["Sushi Platter", "₹1,250"], ["Truffle Edamame", "₹650"], ["Chicken Gyoza", "₹720"], ["Prawn Tempura", "₹980"], ["Miso Black Cod", "₹1,850"]]
  },
  {
    id: 2, name: "Peshwa Pavilion", city: "Mumbai", cuisine: "Indian", location: "Andheri East",
    rating: 4.7, reviews: 962, price: "₹₹₹₹", priceForTwo: 2800, distance: "2.4 km",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=85",
    description: "Elegant North Indian cooking with rich classics and a refined dining room.",
    amenities: ["Indoor", "Private dining", "Parking"],
    menu: [["Paneer Tikka", "₹650"], ["Butter Chicken", "₹850"], ["Dal Bukhara", "₹720"], ["Biryani", "₹780"], ["Gulab Jamun", "₹350"]]
  },
  {
    id: 3, name: "Bandra Born", city: "Mumbai", cuisine: "Indian", location: "Bandra West",
    rating: 4.3, reviews: 842, price: "₹₹₹", priceForTwo: 2200, distance: "4.1 km",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
    description: "Modern Indian plates in a relaxed Bandra setting, ideal for long dinners.",
    amenities: ["Indoor", "Outdoor", "Live music"],
    menu: [["Butter Chicken", "₹795"], ["Malai Paneer", "₹650"], ["Lamb Kebab", "₹950"], ["Dal Makhani", "₹550"], ["Kulfi", "₹300"]]
  },
  {
    id: 4, name: "Smoke House Deli", city: "Mumbai", cuisine: "European", location: "Colaba",
    rating: 4.4, reviews: 1106, price: "₹₹₹", priceForTwo: 1900, distance: "5.8 km",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=85",
    description: "All-day European comfort food, cocktails and a warm neighbourhood atmosphere.",
    amenities: ["Indoor", "Outdoor", "Wi-Fi"],
    menu: [["Classic Burger", "₹650"], ["Chicken Steak", "₹850"], ["Pasta Alfredo", "₹720"], ["Caesar Salad", "₹550"], ["Cheesecake", "₹420"]]
  },
  {
    id: 5, name: "Saffron", city: "Mumbai", cuisine: "Indian", location: "Juhu",
    rating: 4.8, reviews: 1572, price: "₹₹₹₹", priceForTwo: 3200, distance: "6.7 km",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    description: "Celebratory Indian dining with polished service and a broad regional menu.",
    amenities: ["Indoor", "Private dining", "Valet parking"],
    menu: [["Galouti Kebab", "₹950"], ["Murgh Tikka", "₹850"], ["Dal Saffron", "₹700"], ["Lamb Biryani", "₹1,100"], ["Rasmalai", "₹400"]]
  },
  {
    id: 6, name: "Leopold Cafe", city: "Mumbai", cuisine: "Cafe", location: "Colaba",
    rating: 4.2, reviews: 3214, price: "₹₹", priceForTwo: 1200, distance: "5.6 km",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
    description: "A lively, casual cafe for coffee, comfort food and an easygoing evening.",
    amenities: ["Indoor", "Outdoor", "Wi-Fi"],
    menu: [["Chicken Steak", "₹650"], ["Penne Pasta", "₹550"], ["Chicken Tikka", "₹600"], ["Margherita Pizza", "₹500"], ["Chocolate Brownie", "₹350"]]
  },
  {
    id: 7, name: "Lucky Restaurant", city: "Mumbai", cuisine: "Indian", location: "Bandra West",
    rating: 4.0, reviews: 2261, price: "₹₹", priceForTwo: 900, distance: "4.3 km",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
    description: "Classic North Indian favourites served in a bustling, no-fuss setting.",
    amenities: ["Indoor", "Family friendly"],
    menu: [["Chicken Biryani", "₹450"], ["Mutton Biryani", "₹550"], ["Chicken Kebab", "₹420"], ["Butter Chicken", "₹500"], ["Falooda", "₹250"]]
  },
  {
    id: 8, name: "Bagdadi Restaurant", city: "Mumbai", cuisine: "Indian", location: "Colaba",
    rating: 4.0, reviews: 1850, price: "₹", priceForTwo: 650, distance: "5.4 km",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
    description: "Affordable comfort food and biryani in the heart of Colaba.",
    amenities: ["Indoor", "Family friendly"],
    menu: [["Chicken Biryani", "₹300"], ["Mutton Biryani", "₹380"], ["Chicken Curry", "₹320"], ["Fish Fry", "₹350"], ["Caramel Custard", "₹180"]]
  },
  {
    id: 9, name: "Ishaara", city: "Mumbai", cuisine: "Modern Indian", location: "Lower Parel",
    rating: 4.6, reviews: 914, price: "₹₹₹₹", priceForTwo: 3000, distance: "1.5 km",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    description: "Modern Indian dining with thoughtful presentation and a lively atmosphere.",
    amenities: ["Indoor", "Accessible", "Private dining"],
    menu: [["Paneer Tikka", "₹750"], ["Truffle Khichdi", "₹850"], ["Lamb Chops", "₹1,250"], ["Butter Chicken", "₹900"], ["Kulfi", "₹400"]]
  },
  {
    id: 10, name: "Eat Around the Corner", city: "Mumbai", cuisine: "European", location: "Bandra West",
    rating: 4.4, reviews: 768, price: "₹₹₹", priceForTwo: 1700, distance: "4.0 km",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
    description: "Bright neighbourhood dining for brunches, casual dates and relaxed dinners.",
    amenities: ["Indoor", "Outdoor", "Brunch"],
    menu: [["Pancakes", "₹450"], ["Eggs Benedict", "₹550"], ["Chicken Burger", "₹650"], ["Pasta", "₹600"], ["Chocolate Cake", "₹350"]]
  },
  {
    id: 11, name: "Lake View Cafe", city: "Mumbai", cuisine: "Multi-Cuisine", location: "Powai",
    rating: 4.7, reviews: 1320, price: "₹₹₹₹", priceForTwo: 2400, distance: "7.2 km",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=85",
    description: "A scenic Powai dining spot for leisurely meals with a view.",
    amenities: ["Outdoor", "Lake view", "Parking"],
    menu: [["Margherita Pizza", "₹650"], ["Chicken Tikka", "₹750"], ["Pasta", "₹700"], ["Grilled Fish", "₹950"], ["Tiramisu", "₹450"]]
  },
  {
    id: 12, name: "Oye Kake", city: "Mumbai", cuisine: "North Indian", location: "Lower Parel",
    rating: 4.2, reviews: 624, price: "₹₹", priceForTwo: 900, distance: "1.8 km",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
    description: "Punjabi comfort food, generous portions and a casual family-friendly vibe.",
    amenities: ["Indoor", "Family friendly"],
    menu: [["Amritsari Kulcha", "₹350"], ["Chole Bhature", "₹300"], ["Butter Chicken", "₹550"], ["Dal Makhani", "₹400"], ["Lassi", "₹180"]]
  },
  {
    id: 13, name: "Doolally Taproom", city: "Thane", cuisine: "Italian", location: "Hiranandani Estate",
    rating: 4.8, reviews: 1425, price: "₹₹₹", priceForTwo: 2100, distance: "1.1 km",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=85",
    description: "Easygoing Italian-inspired plates, pizzas and a social taproom setting.",
    amenities: ["Outdoor", "Live music", "Parking"],
    menu: [["Wood Fired Pizza", "₹750"], ["Mac & Cheese", "₹650"], ["Chicken Wings", "₹700"], ["Loaded Fries", "₹500"], ["Chocolate Brownie", "₹350"]]
  },
  {
    id: 14, name: "FOO Asian Tapas", city: "Thane", cuisine: "Asian", location: "Majiwada",
    rating: 4.8, reviews: 1196, price: "₹₹₹₹", priceForTwo: 3000, distance: "2.0 km",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85",
    description: "Bold Asian small plates, sushi and cocktails in a high-energy room.",
    amenities: ["Indoor", "Bar", "Valet parking"],
    menu: [["Sushi Platter", "₹1,200"], ["Dim Sum", "₹750"], ["Crispy Chicken", "₹850"], ["Ramen", "₹900"], ["Mochi", "₹450"]]
  },
  {
    id: 15, name: "Bustling Brew Bistro Cafe", city: "Thane", cuisine: "Cafe", location: "Wagle Estate",
    rating: 4.7, reviews: 874, price: "₹₹", priceForTwo: 1000, distance: "2.8 km",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
    description: "Coffee, brunch plates and casual comfort food in a relaxed bistro.",
    amenities: ["Indoor", "Wi-Fi", "Brunch"],
    menu: [["Cappuccino", "₹220"], ["Pasta", "₹450"], ["Veg Burger", "₹400"], ["Chicken Sandwich", "₹450"], ["Cheesecake", "₹350"]]
  },
  {
    id: 16, name: "Ming Ching Chinese", city: "Thane", cuisine: "Chinese", location: "Hiranandani Estate",
    rating: 4.7, reviews: 706, price: "₹₹", priceForTwo: 1100, distance: "1.4 km",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=85",
    description: "Family-friendly Chinese classics with generous portions and quick service.",
    amenities: ["Indoor", "Family friendly", "Delivery"],
    menu: [["Chicken Manchurian", "₹450"], ["Schezwan Noodles", "₹400"], ["Fried Rice", "₹380"], ["Chilli Paneer", "₹400"], ["Spring Rolls", "₹300"]]
  },
  {
    id: 17, name: "D'Crepes Cafe", city: "Thane", cuisine: "Cafe", location: "Manpada",
    rating: 4.7, reviews: 584, price: "₹₹₹", priceForTwo: 1200, distance: "3.1 km",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85",
    description: "Dessert-led cafe with crepes, waffles, pancakes and excellent coffee.",
    amenities: ["Indoor", "Desserts", "Wi-Fi"],
    menu: [["Nutella Crepe", "₹350"], ["Berry Pancakes", "₹400"], ["Belgian Waffle", "₹380"], ["Pasta", "₹500"], ["Cold Coffee", "₹250"]]
  },
  {
    id: 18, name: "China Bistro", city: "Thane", cuisine: "Asian", location: "Vasant Vihar",
    rating: 4.5, reviews: 932, price: "₹₹₹", priceForTwo: 1800, distance: "2.6 km",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=85",
    description: "Asian favourites, dim sum and noodles in a modern family dining room.",
    amenities: ["Indoor", "Family friendly", "Private dining"],
    menu: [["Dim Sum", "₹650"], ["Sushi", "₹850"], ["Kung Pao Chicken", "₹700"], ["Hakka Noodles", "₹550"], ["Fried Rice", "₹500"]]
  },
  {
    id: 19, name: "Veeraswamy", city: "Thane", cuisine: "South Indian", location: "Manpada",
    rating: 4.7, reviews: 1042, price: "₹₹", priceForTwo: 800, distance: "3.0 km",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1200&q=85",
    description: "South Indian classics, crisp dosas and filter coffee in a welcoming room.",
    amenities: ["Indoor", "Family friendly", "Breakfast"],
    menu: [["Masala Dosa", "₹280"], ["Idli Sambar", "₹220"], ["Medu Vada", "₹220"], ["Paneer Dosa", "₹350"], ["Filter Coffee", "₹160"]]
  },
  {
    id: 20, name: "PINK MARTINI By Punjab Mail", city: "Thane", cuisine: "Indian", location: "Thane West",
    rating: 4.7, reviews: 688, price: "₹₹₹", priceForTwo: 1900, distance: "2.2 km",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85",
    description: "Punjabi favourites and modern cocktails in a colourful evening setting.",
    amenities: ["Indoor", "Bar", "Live music"],
    menu: [["Tandoori Chicken", "₹750"], ["Paneer Tikka", "₹600"], ["Butter Chicken", "₹800"], ["Dal Makhani", "₹550"], ["Gulab Jamun", "₹300"]]
  },
  {
    id: 21, name: "Namaste Nepal", city: "Thane", cuisine: "Nepalese", location: "Thane West",
    rating: 4.8, reviews: 612, price: "₹₹", priceForTwo: 1000, distance: "2.4 km",
    image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=1200&q=85",
    description: "Momos, thukpa and Himalayan comfort food with plenty of vegetarian options.",
    amenities: ["Indoor", "Family friendly"],
    menu: [["Chicken Momos", "₹300"], ["Veg Momos", "₹250"], ["Thukpa", "₹350"], ["Chowmein", "₹320"], ["Nepali Thali", "₹450"]]
  },
  {
    id: 22, name: "Kath N Ghat", city: "Thane", cuisine: "Maharashtrian", location: "Panch Pakhadi",
    rating: 4.0, reviews: 410, price: "₹₹", priceForTwo: 850, distance: "2.7 km",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=85",
    description: "Comforting Maharashtrian food with regional thalis and homestyle favourites.",
    amenities: ["Indoor", "Family friendly", "Vegetarian options"],
    menu: [["Misal Pav", "₹220"], ["Maharashtrian Thali", "₹450"], ["Pithla Bhakri", "₹350"], ["Kothimbir Vadi", "₹280"], ["Puran Poli", "₹200"]]
  }
];

const restaurantGrid = document.getElementById("restaurantGrid");
const searchInput = document.getElementById("searchInput");
const locationInput = document.getElementById("locationInput");
const searchBtn = document.getElementById("searchBtn");
const searchDate = document.getElementById("searchDate");
const sortSelect = document.getElementById("sortSelect");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const toast = document.getElementById("toast");
const bookingList = document.getElementById("bookingList");
const bookingCount = document.getElementById("bookingCount");
const resultsCount = document.getElementById("resultsCount");

const today = new Date();
const todayString = today.toISOString().split("T")[0];
searchDate.value = todayString;
searchDate.min = todayString;

const slots = ["6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"];
const bookedSlots = JSON.parse(localStorage.getItem("tablelyBookedSlots") || "[]");

function getBookings() {
  return JSON.parse(localStorage.getItem("tablelyBookings") || "[]");
}

function saveBookings(bookings) {
  localStorage.setItem("tablelyBookings", JSON.stringify(bookings));
}

function getFavorites() {
  return JSON.parse(localStorage.getItem("tablelyFavorites") || "[]");
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id) {
  const favorites = getFavorites();
  const next = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
  localStorage.setItem("tablelyFavorites", JSON.stringify(next));
  renderRestaurants();
  showToast(next.includes(id) ? "Saved to your favourites ♡" : "Removed from favourites");
}

function availabilityFor(restaurant, date = searchDate.value) {
  const seed = restaurant.id + date.replaceAll("-", "").slice(-2);
  return slots.map((time, index) => {
    const occupied = bookedSlots.some(b => b.restaurantId === restaurant.id && b.date === date && b.time === time);
    const busy = ((Number(seed) + index * 7) % 11) < 2;
    return { time, available: !occupied && !busy };
  });
}

function getActiveFilter() {
  return document.querySelector(".filter.active")?.dataset.filter || "All";
}

function renderRestaurants(filter = getActiveFilter(), searchTerm = searchInput.value) {
  const term = searchTerm.toLowerCase().trim();
  const location = locationInput.value.toLowerCase().trim();
  let filtered = restaurants.filter(restaurant => {
    const matchesFilter = filter === "All" || restaurant.cuisine === filter || (filter === "Indian" && restaurant.cuisine.includes("Indian"));
    const searchable = `${restaurant.name} ${restaurant.cuisine} ${restaurant.location} ${restaurant.city} ${restaurant.description}`.toLowerCase();
    const matchesTerm = !term || searchable.includes(term);
    const matchesLocation = !location || restaurant.city.toLowerCase().includes(location) || restaurant.location.toLowerCase().includes(location);
    return matchesFilter && matchesTerm && matchesLocation;
  });

  const sort = sortSelect?.value || "recommended";
  if (sort === "rating") filtered.sort((a, b) => b.rating - a.rating);
  if (sort === "price-low") filtered.sort((a, b) => a.priceForTwo - b.priceForTwo);
  if (sort === "price-high") filtered.sort((a, b) => b.priceForTwo - a.priceForTwo);
  if (sort === "reviews") filtered.sort((a, b) => b.reviews - a.reviews);

  resultsCount.textContent = `${filtered.length} restaurant${filtered.length !== 1 ? "s" : ""} available`;

  if (!filtered.length) {
    restaurantGrid.innerHTML = `<div class="no-results"><div class="empty-icon">⌕</div><h3>No tables found</h3><p>Try a different cuisine, restaurant, neighbourhood or city.</p><button class="clear-search" onclick="clearSearch()">Clear filters</button></div>`;
    return;
  }

  restaurantGrid.innerHTML = filtered.map(restaurant => {
    const next = availabilityFor(restaurant).find(slot => slot.available)?.time || "Join waitlist";
    const favorite = isFavorite(restaurant.id);
    return `
      <article class="restaurant-card">
        <div class="restaurant-image" style="background-image:url('${restaurant.image}')">
          <span class="restaurant-tag">${restaurant.cuisine}</span>
          <button class="favorite-btn ${favorite ? "saved" : ""}" aria-label="${favorite ? "Remove from favourites" : "Save restaurant"}" onclick="toggleFavorite(${restaurant.id})">${favorite ? "♥" : "♡"}</button>
          <span class="city-tag">${restaurant.city}</span>
        </div>
        <div class="restaurant-body">
          <div class="card-topline"><span class="restaurant-rating">★ ${restaurant.rating} <small>(${restaurant.reviews.toLocaleString("en-IN")})</small></span><span class="price-label">${restaurant.price}</span></div>
          <h3>${restaurant.name}</h3>
          <div class="restaurant-meta">📍 ${restaurant.location} · ${restaurant.distance}</div>
          <p class="restaurant-description">${restaurant.description}</p>
          <div class="card-features">${restaurant.amenities.slice(0, 2).map(item => `<span>${item}</span>`).join("")}<span>₹${restaurant.priceForTwo.toLocaleString("en-IN")} for two</span></div>
          <div class="next-slot"><span>Next available</span><strong>${next}</strong></div>
          <div class="card-buttons"><button class="menu-btn" onclick="openMenu(${restaurant.id})">View menu</button><button class="reserve-btn" onclick="openBooking(${restaurant.id})">Reserve</button></div>
        </div>
      </article>`;
  }).join("");
}

function clearSearch() {
  searchInput.value = "";
  locationInput.value = "Mumbai";
  sortSelect.value = "recommended";
  document.querySelectorAll(".filter").forEach(btn => btn.classList.toggle("active", btn.dataset.filter === "All"));
  renderRestaurants();
}

function openMenu(id) {
  const restaurant = restaurants.find(item => item.id === id);
  modalContent.innerHTML = `
    <div class="modal-hero" style="background-image:url('${restaurant.image}')"><span>${restaurant.cuisine}</span></div>
    <div class="eyebrow">RESTAURANT MENU</div><h2>${restaurant.name}</h2>
    <p class="restaurant-meta">★ ${restaurant.rating} (${restaurant.reviews.toLocaleString("en-IN")}) · 📍 ${restaurant.location} · ${restaurant.price}</p>
    <p class="modal-description">${restaurant.description}</p>
    <div class="menu-list">${restaurant.menu.map(item => `<div class="menu-item"><div><strong>${item[0]}</strong><small>Chef's selection</small></div><span>${item[1]}</span></div>`).join("")}</div>
    <button class="confirm-btn" onclick="openBooking(${restaurant.id})">Book a table</button>`;
  modal.classList.remove("hidden");
}

function renderTimeSlots(restaurant, date, selected = "") {
  return availabilityFor(restaurant, date).map(slot => `<button type="button" class="time-slot ${selected === slot.time ? "selected" : ""} ${slot.available ? "" : "disabled"}" ${slot.available ? `onclick="selectTime('${slot.time}')"` : "disabled"}>${slot.time}</button>`).join("");
}

function selectTime(time) {
  document.querySelectorAll(".time-slot").forEach(btn => btn.classList.toggle("selected", btn.textContent === time));
  document.getElementById("bookingTime").value = time;
}

function updateBookingSlots(restaurant) {
  const date = document.getElementById("bookingDate").value;
  const current = document.getElementById("bookingTime").value;
  document.getElementById("timeSlots").innerHTML = renderTimeSlots(restaurant, date, current);
  const firstAvailable = availabilityFor(restaurant, date).find(item => item.available)?.time || "";
  if (!availabilityFor(restaurant, date).some(item => item.time === current && item.available)) document.getElementById("bookingTime").value = firstAvailable;
  document.getElementById("availabilityNote").textContent = firstAvailable ? "Most tables are available for this date." : "This date is fully booked. Try another date.";
}

function openBooking(id) {
  const restaurant = restaurants.find(item => item.id === id);
  const available = availabilityFor(restaurant, searchDate.value).filter(item => item.available);
  const defaultTime = available[0]?.time || "";
  modalContent.innerHTML = `
    <div class="booking-heading"><div><div class="eyebrow">TABLE RESERVATION</div><h2>${restaurant.name}</h2><p class="restaurant-meta">★ ${restaurant.rating} (${restaurant.reviews.toLocaleString("en-IN")}) · 📍 ${restaurant.location}</p></div><span class="live-pill">● Bookable now</span></div>
    <div class="form-row"><div class="form-group"><label>DATE</label><input type="date" id="bookingDate" value="${searchDate.value}" min="${todayString}"></div><div class="form-group"><label>GUESTS</label><select id="guestCount"><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5 guests</option><option value="6">6 guests</option><option value="8">8 guests</option></select></div></div>
    <div class="form-group"><label>CHOOSE A TIME</label><div class="time-slots" id="timeSlots">${renderTimeSlots(restaurant, searchDate.value, defaultTime)}</div><input type="hidden" id="bookingTime" value="${defaultTime}"><p class="availability-note" id="availabilityNote">${defaultTime ? "Most tables are available for this date." : "This date is fully booked. Try another date."}</p></div>
    <div class="form-row"><div class="form-group"><label>SEATING</label><select id="tableType"><option>Indoor</option><option>Window</option><option>Outdoor</option><option>Bar</option><option>Private</option></select></div><div class="form-group"><label>PHONE NUMBER</label><input type="tel" id="customerPhone" maxlength="10" placeholder="10 digit mobile number"></div></div>
    <div class="form-group"><label>YOUR NAME</label><input type="text" id="customerName" placeholder="Enter your name"></div>
    <div class="summary"><strong>Good to know</strong><br>✓ Free cancellation up to 2 hours before your reservation.<br>✓ No payment required to reserve.<br>✓ Confirmation is stored in your My bookings section.</div>
    <button class="confirm-btn" onclick="confirmBooking(${restaurant.id})">Confirm reservation</button>`;
  document.getElementById("bookingDate").addEventListener("change", () => updateBookingSlots(restaurant));
  modal.classList.remove("hidden");
}

function confirmBooking(id) {
  const restaurant = restaurants.find(item => item.id === id);
  const date = document.getElementById("bookingDate").value;
  const time = document.getElementById("bookingTime").value;
  const guests = document.getElementById("guestCount").value;
  const table = document.getElementById("tableType").value;
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();

  if (!date) return showToast("Please select a date.");
  if (!time) return showToast("Please choose an available time.");
  if (!availabilityFor(restaurant, date).some(item => item.time === time && item.available)) return showToast("That time is no longer available.");
  if (!name) return showToast("Please enter your name.");
  if (!/^[0-9]{10}$/.test(phone)) return showToast("Enter a valid 10 digit phone number.");

  const bookingId = `TB-${Math.floor(10000 + Math.random() * 89999)}`;
  const booking = { id: Date.now(), bookingId, restaurantId: restaurant.id, restaurant: restaurant.name, location: restaurant.location, city: restaurant.city, date, time, guests: `${guests} guests`, table, name, phone, status: "Confirmed" };
  const bookings = getBookings();
  bookings.unshift(booking);
  saveBookings(bookings);
  bookedSlots.push({ restaurantId: restaurant.id, date, time });
  localStorage.setItem("tablelyBookedSlots", JSON.stringify(bookedSlots));
  showConfirmation(booking, restaurant);
}

function showConfirmation(booking, restaurant) {
  const formattedDate = new Date(`${booking.date}T12:00:00`).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
  modalContent.innerHTML = `<div class="confirmation"><div class="success-mark">✓</div><div class="eyebrow">RESERVATION CONFIRMED</div><h2>Your table is booked.</h2><p class="confirmation-sub">You're all set for a great meal at ${restaurant.name}.</p><div class="confirmation-card"><div><span>Restaurant</span><strong>${restaurant.name}</strong></div><div><span>Date & time</span><strong>${formattedDate} · ${booking.time}</strong></div><div><span>Party</span><strong>${booking.guests} · ${booking.table}</strong></div><div><span>Reservation</span><strong>${booking.bookingId}</strong></div></div><div class="confirmation-actions"><button class="menu-btn" onclick="modal.classList.add('hidden'); document.getElementById('bookings').scrollIntoView({behavior:'smooth'})">View booking</button><button class="confirm-btn" onclick="modal.classList.add('hidden')">Done</button></div></div>`;
  renderBookings();
  renderRestaurants();
  showToast("Reservation confirmed ✓");
}

function renderBookings() {
  const bookings = getBookings();
  bookingCount.textContent = bookings.length ? `${bookings.length} reservation${bookings.length > 1 ? "s" : ""}` : "";
  if (!bookings.length) {
    bookingList.innerHTML = `<div class="empty-bookings"><div class="empty-icon">◷</div><h3>Your table is waiting</h3><p>Reserve a restaurant above and your upcoming plans will appear here.</p><a href="#restaurants">Explore restaurants</a></div>`;
    return;
  }
  bookingList.innerHTML = bookings.map(booking => {
    const restaurant = restaurants.find(r => r.id === booking.restaurantId);
    const date = new Date(`${booking.date}T12:00:00`);
    const dateText = date.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
    return `<div class="booking-card"><div class="booking-main"><div class="booking-image" style="background-image:url('${restaurant?.image || ""}')"></div><div><div class="booking-title-row"><h3>${booking.restaurant}</h3><span class="status">Confirmed</span></div><div class="booking-details">📍 ${booking.location}, ${booking.city}<br><strong>${dateText} · ${booking.time}</strong><br>${booking.guests} · ${booking.table} seating</div><small class="booking-ref">Reservation ${booking.bookingId}</small></div></div><div class="booking-actions"><button class="cancel-btn" onclick="cancelBooking(${booking.id})">Cancel reservation</button></div></div>`;
  }).join("");
}

function cancelBooking(id) {
  const bookings = getBookings();
  const booking = bookings.find(item => item.id === id);
  if (!booking) return;
  saveBookings(bookings.filter(item => item.id !== id));
  const index = bookedSlots.findIndex(slot => slot.restaurantId === booking.restaurantId && slot.date === booking.date && slot.time === booking.time);
  if (index >= 0) bookedSlots.splice(index, 1);
  localStorage.setItem("tablelyBookedSlots", JSON.stringify(bookedSlots));
  renderBookings();
  renderRestaurants();
  showToast("Reservation cancelled.");
}

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelectorAll(".filter").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");
  renderRestaurants(button.dataset.filter, searchInput.value);
}));

searchBtn.addEventListener("click", () => { renderRestaurants(); document.getElementById("restaurants").scrollIntoView({ behavior: "smooth" }); });
searchInput.addEventListener("input", () => renderRestaurants());
locationInput.addEventListener("input", () => renderRestaurants());
sortSelect.addEventListener("change", () => renderRestaurants());
document.getElementById("savedLink").addEventListener("click", event => {
  event.preventDefault();
  const saved = getFavorites();
  if (!saved.length) { showToast("You have no saved restaurants yet."); return; }
  const original = restaurants.filter(r => saved.includes(r.id));
  restaurantGrid.innerHTML = original.map(restaurant => {
    const next = availabilityFor(restaurant).find(slot => slot.available)?.time || "Join waitlist";
    return `<article class="restaurant-card"><div class="restaurant-image" style="background-image:url('${restaurant.image}')"><span class="restaurant-tag">${restaurant.cuisine}</span><button class="favorite-btn saved" aria-label="Remove from favourites" onclick="toggleFavorite(${restaurant.id})">♥</button><span class="city-tag">${restaurant.city}</span></div><div class="restaurant-body"><div class="card-topline"><span class="restaurant-rating">★ ${restaurant.rating} <small>(${restaurant.reviews.toLocaleString("en-IN")})</small></span><span class="price-label">${restaurant.price}</span></div><h3>${restaurant.name}</h3><div class="restaurant-meta">📍 ${restaurant.location} · ${restaurant.distance}</div><p class="restaurant-description">${restaurant.description}</p><div class="next-slot"><span>Next available</span><strong>${next}</strong></div><div class="card-buttons"><button class="menu-btn" onclick="openMenu(${restaurant.id})">View menu</button><button class="reserve-btn" onclick="openBooking(${restaurant.id})">Reserve</button></div></div></article>`;
  }).join("");
  resultsCount.textContent = `${saved.length} saved restaurant${saved.length !== 1 ? "s" : ""}`;
  document.getElementById("restaurants").scrollIntoView({ behavior: "smooth" });
});
searchDate.addEventListener("change", () => renderRestaurants());

closeModal.addEventListener("click", () => modal.classList.add("hidden"));
modal.addEventListener("click", event => { if (event.target === modal) modal.classList.add("hidden"); });
document.addEventListener("keydown", event => { if (event.key === "Escape") modal.classList.add("hidden"); });

const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("tablelyDarkMode", document.body.classList.contains("dark"));
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
});
if (localStorage.getItem("tablelyDarkMode") === "true") { document.body.classList.add("dark"); themeBtn.textContent = "☀"; }

document.getElementById("loginBtn").addEventListener("click", () => {
  modalContent.innerHTML = `<div class="eyebrow">WELCOME BACK</div><h2>Sign in to Tablely</h2><p class="modal-description">Manage your reservations, saved restaurants and dining preferences.</p><div class="form-group"><label>EMAIL</label><input type="email" id="loginEmail" placeholder="you@example.com"></div><div class="form-group"><label>PASSWORD</label><input type="password" id="loginPassword" placeholder="••••••••"></div><button class="confirm-btn" onclick="loginUser()">Sign in</button>`;
  modal.classList.remove("hidden");
});

function loginUser() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;
  if (!email || !password) return showToast("Please enter email and password.");
  modal.classList.add("hidden");
  showToast("Signed in successfully ✓");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.tablelyToastTimer);
  window.tablelyToastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

renderRestaurants();
renderBookings();
