export default function loadContact(){
    const content = document.getElementById("content");
    const container = document.createElement("div")

    const title = document.createElement("h1");
    title.textContent = "Contact";

    container.appendChild(title);

    const contactDetails = document.createElement("p");
    contactDetails.textContent = "Whatsapp - +2347026111130";

    container.appendChild(contactDetails);

    content.appendChild(container);

}