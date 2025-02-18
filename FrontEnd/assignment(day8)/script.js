document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let isValid = true;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    
    document.getElementById("nameError").textContent = name ? "" : "Name is required";
    document.getElementById("emailError").textContent = email ? "" : "Email is required";
    document.getElementById("messageError").textContent = message ? "" : "Message is required";
    
    if (!name || !email || !message) {
        isValid = false;
    }
    
    if (isValid) {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("contactForm").reset();
    }
});
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

document.querySelector(".theme-toggle").addEventListener("click", function() {
    let root = document.documentElement;
    if (root.style.getPropertyValue('--dark_primary') === '#255015') {
        root.style.setProperty('--dark_primary', '#97F774');
        root.style.setProperty('--dark_secondary', '#76D254');
        document.body.style.backgroundColor = "var(--dark_primary)";
        this.textContent = "🌞";
    } else {
        root.style.setProperty('--dark_primary', '#255015');
        root.style.setProperty('--dark_secondary', '#061003');
        document.body.style.backgroundColor = "var(--dark_primary)";
        this.textContent = "🌙";
    }});