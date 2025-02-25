export const renderMenuPage = () => {
    console.log("Loading Menu Page");
    const content = document.getElementById("content");
    content.appendChild(createMenuPanel());
}

const createMenuPanel = () => {
    const aboutTitle = "Menu";
    const aboutText = "When Georgios Giovanni departed the motherland in 1947 he had \
    nothing but a suitcase and a dream: To bring the best homestyle greek \
    cooking to his new home in Australia. For three generations the Giovanni \
    family has honoured Georgio's legacy by offering our patrons the \
    best Greek drinking and dining experience possible.";
    const panel = document.createElement("div");
    panel.id="menu";
    panel.classList = "info-panel";
    const title = document.createElement("h2");
    title.innerText = aboutTitle;
    const text = document.createElement("p");
    text.innerText = aboutText;
    panel.appendChild(title);
    panel.appendChild(text);
    return panel;
}