// import giorgiosImage from "./young-giorgios.jpg";

export const renderLandingPage = () => {
    console.log("Loading Landing Page");
    const content = document.getElementById("content");
    content.appendChild(createLandingPanel());
    content.appendChild(createAboutPanel());
}

const createLandingPanel = () => {
    const panel = document.createElement("div");
    panel.id = "landing-page";
    const title = document.createElement("h1");
    title.innerText = "Γιώργος";
    panel.appendChild(title);

    return panel;
}

const createAboutPanel = () => {
    const aboutTitle = "About Georgio's";
    const aboutText = "When Georgios Aetos departed the motherland in 1947 he had \
    nothing but a suitcase and a dream: To bring the best homestyle greek \
    cooking to his new home in Australia. For three generations the Aetos \
    family has honoured Georgio's legacy by offering our patrons the \
    best Greek drinking and dining experience possible.";
    const panel = document.createElement("div");
    panel.id="about";
    panel.classList = "info-panel";
    const title = document.createElement("h2");
    title.innerText = aboutTitle;
    const text = document.createElement("p");
    text.innerText = aboutText;
    panel.appendChild(title);
    panel.appendChild(document.createElement("hr"));
    panel.appendChild(text);
    return panel;
}