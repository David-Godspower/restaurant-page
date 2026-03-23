export default function loadAbout(){
    const content = document.getElementById("content");
    const container = document.createElement("div")

    const title = document.createElement("h1");
    title.textContent = "About Us";

    container.appendChild(title);

    const aboutDetails = document.createElement("p");
    aboutDetails.textContent = "We are a team of passionate food enthusiasts dedicated to providing the best dining experience.";

    container.appendChild(aboutDetails);

    content.appendChild(container);

}