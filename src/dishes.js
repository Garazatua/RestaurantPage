function loadDishes(){
    const content = document.querySelector("#content");
    content.textContent = ""; 

    const menuSection = document.createElement("section");
    menuSection.classList.add("menu-section");
    
    const menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Our Signature Dishes";

    const menuSubtitle = document.createElement("p");
    menuSubtitle.classList.add("menu-subtitle");
    menuSubtitle.textContent = "Explore the heart of Peruvian coastal cuisine. From tangy classic ceviche, to flavorful seafood rice, and golden fried fish — each dish is crafted with fresh local ingredients and seasoned with authentic tradition. Come taste the soul of Peru, one bite at a time."

    const menuFilters = document.createElement("div");
    menuFilters.classList.add("menu-filters");

    const allMenuBtn = document.createElement("button");
    allMenuBtn.classList.add("filter-btn");
    allMenuBtn.classList.add("active");
    allMenuBtn.textContent = "All Menu 🍽️";

    const seafoodBtn = document.createElement("button");
    seafoodBtn.classList.add("filter-btn");
    seafoodBtn.textContent = "Seafood Rice";
    
    const cevicheBtn = document.createElement("button");
    cevicheBtn.classList.add("filter-btn");
    cevicheBtn.textContent = "Ceviche";

    const crunchyFriedFishBtn = document.createElement("button");
    crunchyFriedFishBtn.classList.add("filter-btn");
    crunchyFriedFishBtn.textContent = "Crunchy Fried Fish";

    const menuItems = document.createElement("div");
    menuItems.classList.add("menu-items");

    const seafoodRiceCard = document.createElement("div");
    seafoodRiceCard.classList.add("menu-card")
    const seafoodRiceImage = document.createElement("img");
    seafoodRiceImage.classList.add("menu-card-img");
    seafoodRiceImage.src = "https://i.pinimg.com/736x/a3/82/13/a382138d375ccce106ba982c618e9f3d.jpg";
    seafoodRiceImage.alt = "Peruvian Seafood Rice photo";
    const seafoodRiceNameTag = document.createElement("p");
    seafoodRiceNameTag.classList.add("dish-name");
    seafoodRiceNameTag.textContent = "Peruvian Seafood Rice";


    const classicCevicheCard = document.createElement("div");
    classicCevicheCard.classList.add("menu-card")
    const classicCevicheImage = document.createElement("img");
    classicCevicheImage.classList.add("menu-card-img");
    classicCevicheImage.src = "https://imgs.search.brave.com/rB9WUk8OlD0NZgJT896LggvYSnA9jCmIuoA7bv4BrnU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzY3LzU5LzQ2/LzM2MF9GXzQ2NzU5/NDYzN19ybzJvRU5j/QktnOWhHVDhOY3Fn/cHlyTWtUT2FtMEFn/dC5qcGc";
    classicCevicheImage.alt = "Classic Ceviche photo";
    const classicCevicheNameTag = document.createElement("p");
    classicCevicheNameTag.classList.add("dish-name");
    classicCevicheNameTag.textContent = "Classic Ceviche";

    
    const crunchyFriedFishCard = document.createElement("div");
    crunchyFriedFishCard.classList.add("menu-card")
    const crunchyFriedFishImage = document.createElement("img");
    crunchyFriedFishImage.classList.add("menu-card-img");
    crunchyFriedFishImage.src = "https://img-global.cpcdn.com/recipes/209d1335fa20de8f/1200x630cq90/photo.jpg";
    crunchyFriedFishImage.alt = "Crunchy Fried Fish photo";
    const crunchyFriedFishNameTag = document.createElement("p");
    crunchyFriedFishNameTag.classList.add("dish-name");
    crunchyFriedFishNameTag.textContent = "Crunchy Fried Fish";


    content.append(menuSection);
    menuSection.append(menuTitle, menuSubtitle, menuFilters, menuItems);
    menuFilters.append(allMenuBtn, seafoodBtn, cevicheBtn, crunchyFriedFishBtn);
    menuItems.append(seafoodRiceCard, classicCevicheCard, crunchyFriedFishCard);
    seafoodRiceCard.append(seafoodRiceImage, seafoodRiceNameTag);
    classicCevicheCard.append(classicCevicheImage, classicCevicheNameTag);
    crunchyFriedFishCard.append(crunchyFriedFishImage, crunchyFriedFishNameTag);
}

export default loadDishes;