export const renderMenuPage = () => {
    console.log("Loading Menu Page");
    const content = document.getElementById("content");
    content.appendChild(createMenuPanel());
}

const createMenuPanel = () => {
    const aboutTitle = "Menu";

    const panel = document.createElement("div");
    panel.id="menu";
    panel.classList = "info-panel";
    const title = document.createElement("h2");
    title.innerText = aboutTitle;

    panel.appendChild(title);
    panel.appendChild(document.createElement("hr"));
    const menuItems = document.createElement("ul");
    menuItems.appendChild(createMenuItem("Tzatziki and Pita","9.00"));
    menuItems.appendChild(createMenuItem("Spanikopita","12.00"));
    menuItems.appendChild(createMenuItem("Greek Salad","9.00"));
    menuItems.appendChild(createMenuItem("Moussaka","11.00"));
    menuItems.appendChild(createMenuItem("Chicken Souvlaki","14.00"));


    panel.appendChild(menuItems);
    return panel;
}

function createMenuItem(name, price) {
    const item = document.createElement("li");
    const itemName = document.createElement("span");
    itemName.classList = "menu-item-name";
    itemName.innerText = name;
    const itemPrice = document.createElement("span");
    itemPrice.classList = "menu-item-price";
    itemPrice.innerText = "$" + price;
    item.appendChild(itemName);
    item.appendChild(itemPrice);
    return item;
}