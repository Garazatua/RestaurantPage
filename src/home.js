function loadHome() {
    const content = document.querySelector("#content");
    content.textContent = ""; 

    const heroContainer = document.createElement("div");
    heroContainer.classList.add("hero-container");

    const slogan = document.createElement("h1");
    slogan.textContent = "A Taste of the Peruvian Coast";
    slogan.classList.add("slogan");
  
    const description = document.createElement("p");
    description.textContent = "Traditional Peruvian seafood dishes, made fresh daily with local passion.";
    description.classList.add("description");
  
    const button = document.createElement("button");
    button.textContent = "Order Now";
    button.classList.add("main-button");
  
    const cevicheImg = document.createElement("img");
    cevicheImg.src = "https://imgs.search.brave.com/9Egau2AUWbwd0irAAmGDP4i3grCshH0V3J4w6YLEWFI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEyLzY4LzQzLzI5/LzM2MF9GXzEyNjg0/MzI5NzZfR1pQQ2Fx/NXlWaDVmR3FoVFdh/RncyMHJ5SGNDY2V0/MUouanBn";
    cevicheImg.alt = "ceviche image";
    cevicheImg.classList.add("ceviche-image");
    content.append(heroContainer);
    heroContainer.append(slogan, description, button, cevicheImg);

  } 

  export default loadHome;
