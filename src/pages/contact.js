export default function loadContact(){
    const content = document.getElementById("content");
    const container = document.createElement("div")

    const title = document.createElement("h1");
    title.textContent = "Contact";

    content.appendChild(title);


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

  const contactDetails = document.createElement("div");
  contactDetails.classList.add("info-card");
  contactDetails.innerHTML = `
    <h3> Contact Details</h3>
    <p>Whatsapp - +2347026111130</p>
    `;

  infoSection.appendChild(hoursDiv);
  infoSection.appendChild(locationDiv);
  infoSection.appendChild(contactDetails);


  content.appendChild(infoSection);


}