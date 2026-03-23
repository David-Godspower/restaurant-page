export default function loadHome() {
  const content = document.getElementById("content");

  const hero = document.createElement("div");
  hero.classList.add("hero"); // 🔥 THIS is the key line

  const title = document.createElement("h1");
  title.textContent = "David's Restaurant";

  const description = document.createElement("p");
  description.textContent =
    "Welcome! Enjoy the best meals in town. Fresh food, great taste, unforgettable experience.";

  hero.appendChild(title);
  hero.appendChild(description);

  content.appendChild(hero);
}