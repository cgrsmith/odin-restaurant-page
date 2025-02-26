export const renderContactPage = () => {
    console.log("Loading Contact Page");
    const content = document.getElementById("content");
    content.appendChild(createContactPanel());
}

const createContactPanel = () => {
    const aboutTitle = "Contact";

    const panel = document.createElement("div");
    panel.id="contact";
    panel.classList = "info-panel";
    const title = document.createElement("h2");
    title.innerText = aboutTitle;

    panel.appendChild(title);
    panel.appendChild(document.createElement("hr"));

    return panel;
}