export default function loadHome() {
  const content = document.getElementById("content");

  // --- 1. HERO SECTION ---
  const hero = document.createElement("div");
  hero.classList.add("hero");

  const title = document.createElement("h1");
  title.textContent = "David's Restaurant";

  const description = document.createElement("p");
  description.textContent =
    "Welcome! Enjoy the best meals in town. Fresh food, great taste, unforgettable experience.";

  const ctaBtn = document.createElement("button");
  ctaBtn.textContent = "View Our Menu";
  ctaBtn.classList.add("cta-btn");
  
  // This cleverly triggers your existing navbar routing!
  ctaBtn.addEventListener("click", () => {
    document.getElementById("menu").click(); 
  });

  hero.appendChild(title);
  hero.appendChild(description);
  hero.appendChild(ctaBtn);

  // --- 2. INFO SECTION (Hours & Location) ---
  const infoSection = document.createElement("div");
  infoSection.classList.add("info-section");

  const hoursDiv = document.createElement("div");
  hoursDiv.classList.add("info-card");
  hoursDiv.innerHTML = `
    <h3>🕒 Hours</h3>
    <p>Mon - Fri: 8am - 10pm</p>
    <p>Sat - Sun: 9am - 11pm</p>
  `;

  const locationDiv = document.createElement("div");
  locationDiv.classList.add("info-card");
  locationDiv.innerHTML = `
    <h3>📍 Location</h3>
    <p>123 Secretariat Road</p>
    <p>Ibadan, Oyo State</p>
  `;

  infoSection.appendChild(hoursDiv);
  infoSection.appendChild(locationDiv);

  // --- APPEND EVERYTHING ---
  content.appendChild(hero);
  content.appendChild(infoSection);
}              