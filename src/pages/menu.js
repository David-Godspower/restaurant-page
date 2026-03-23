export default function loadMenu() {
  const content = document.getElementById("content");

  const container = document.createElement("div");


  const title = document.createElement("h1");
  title.textContent = "Menu";

  container.appendChild(title);

  const menuItems = [
    { name: "Spaghetti Carbonara", 
      price: "$12",
      description: "Classic Italian pasta with eggs, cheese, pancetta, and pepper.",
      image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BhZ2hldHRpfGVufDB8fDB8fHww"},
    { name: "Margherita Pizza", 
      price: "$10", 
      description: "Classic pizza with tomato sauce, mozzarella, and basil.", 
      image: "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpenphfGVufDB8MHwwfHx8MA%3D%3D" },
    { name: "Caesar Salad", 
      price: "$8", 
      description: "Romaine lettuce with Caesar dressing, croutons, and parmesan cheese.", 
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FsYWR8ZW58MHwwfDB8fHww" },
    { name: "Grilled Salmon", 
      price: "$15", 
      description: "Fresh salmon fillet grilled to perfection with lemon and herbs.", 
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FsbW9uJTIwZmlsbGV0fGVufDB8fDB8fHww" },
    { name: "Tiramisu", 
      price: "$6", 
      description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.", 
      image: "https://images.unsplash.com/photo-1712262582593-e13609aaf12b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRpcmFtaXN1fGVufDB8MHwwfHx8MA%3D%3D" }
  ];


const grid = document.createElement("div");
grid.classList.add("menu-grid");

menuItems.forEach((item) => {
  const food = document.createElement("div");
  food.classList.add("menu-item");

  const foodImage = document.createElement("img");
  foodImage.src = item.image;
  foodImage.alt = item.name;

  const foodInfo = document.createElement("div");
  foodInfo.classList.add("food-info");

  const nameLabel = document.createElement("h3");
  nameLabel.textContent = item.name;

  const priceLabel = document.createElement("p");
  priceLabel.classList.add("price");
  priceLabel.textContent = item.price;

  const descriptionLabel = document.createElement("p");
  descriptionLabel.classList.add("description");
  descriptionLabel.textContent = item.description;

  foodInfo.appendChild(nameLabel);
  foodInfo.appendChild(priceLabel);
  foodInfo.appendChild(descriptionLabel);

  food.appendChild(foodImage);
  food.appendChild(foodInfo);

  grid.appendChild(food); 
});

container.appendChild(grid);
content.appendChild(container);
}                                                                           

