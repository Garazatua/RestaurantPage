function loadContact() {
    const content = document.querySelector("#content");
    content.textContent = ""; 

    const contactSection = document.createElement("section");
    contactSection.classList.add("contact-section");

    const contactTitle = document.createElement("h2");
    contactTitle.classList.add("contact-title");
    contactTitle.textContent = "How can we help you?";

    const contactSubtitle = document.createElement("p");
    contactSubtitle.classList.add("contact-subtitle");
    contactSubtitle.textContent = "We’re here to make your experience as delicious as your meal. Whether you have questions about reservations, catering, or anything else — let's get in touch!";

    const contactCards = document.createElement("div");
    contactCards.classList.add("contact-cards");

    const contactCard1 = document.createElement("div");
    contactCard1.classList.add("contact-card");
    const cardIcon1 = document.createElement("div");
    cardIcon1.classList.add("card-icon");
    cardIcon1.textContent = "📞";
    const cardTitle1 = document.createElement("h3");
    cardTitle1.classList.add("card-title");
    cardTitle1.textContent = "Contact Reservations";
    const cardDesc1 = document.createElement("p");
    cardDesc1.classList.add("card-desc");
    cardDesc1.textContent = "Planning a visit? Get in touch to reserve a table and enjoy our coastal flavors without the wait."
    const cardLink1 = document.createElement("a");
    cardLink1.classList.add("card-link");
    cardLink1.textContent = "Reserve a Table →";


    const contactCard2 = document.createElement("div");
    contactCard2.classList.add("contact-card");
    const cardIcon2 = document.createElement("div");
    cardIcon2.classList.add("card-icon");
    cardIcon2.textContent = "🛍️";
    const cardTitle2 = document.createElement("h3");
    cardTitle2.classList.add("card-title");
    cardTitle2.textContent = "Order Inquiries";
    const cardDesc2 = document.createElement("p");
    cardDesc2.classList.add("card-desc");
    cardDesc2.textContent = "Need help with a delivery or want to place a big order? We’ve got you covered — just reach out!"
    const cardLink2 = document.createElement("a");
    cardLink2.classList.add("card-link");
    cardLink2.textContent = "Contact Sales →";


    const contactCard3 = document.createElement("div");
    contactCard3.classList.add("contact-card");
    const cardIcon3 = document.createElement("div");
    cardIcon3.classList.add("card-icon");
    cardIcon3.textContent = "📝";
    const cardTitle3 = document.createElement("h3");
    cardTitle3.classList.add("card-title");
    cardTitle3.textContent = "Order Feedback & Suggestions";
    const cardDesc3 = document.createElement("p");
    cardDesc3.classList.add("card-desc");
    cardDesc3.textContent = "Loved your dish? Something we can improve? We’d love to hear your thoughts and make El Muellecito even better."
    const cardLink3 = document.createElement("a");
    cardLink3.classList.add("card-link");
    cardLink3.textContent = "Send Feedback →";


    const contactCard4 = document.createElement("div");
    contactCard4.classList.add("contact-card");
    const cardIcon4 = document.createElement("div");
    cardIcon4.classList.add("card-icon");
    cardIcon4.textContent = "🎉";
    const cardTitle4 = document.createElement("h3");
    cardTitle4.classList.add("card-title");
    cardTitle4.textContent = "Event Catering";
    const cardDesc4 = document.createElement("p");
    cardDesc4.classList.add("card-desc");
    cardDesc4.textContent = "Hosting an event or party? We offer catering with personalized menus and the full Muellecito experience."
    const cardLink4 = document.createElement("a");
    cardLink4.classList.add("card-link");
    cardLink4.textContent = "Request a Quote →";

    
    content.append(contactSection);
    contactSection.append(contactTitle, contactSubtitle, contactCards);
    contactCards.append(contactCard1, contactCard2, contactCard3, contactCard4);
    contactCard1.append(cardIcon1, cardTitle1, cardDesc1, cardLink1);
    contactCard2.append(cardIcon2, cardTitle2, cardDesc2, cardLink2);
    contactCard3.append(cardIcon3, cardTitle3, cardDesc3, cardLink3);
    contactCard4.append(cardIcon4, cardTitle4, cardDesc4, cardLink4);
}

export default loadContact;