window.onload = display_info()
function save_data(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    if(check_input(email, phone)){
        alert("information saved");

        set_localstorage(name, email, phone);

        set_sessionstorage(name, email, phone);

        storeInCookie(name, email, phone, 14);

        console.log("cookie username = ", getCookie('username'));
        
        display_info()
    }
    else alert ("wrong email or phone number")
}

function getCookie(name) {
    let cookies = document.cookie.split("; ");
    
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key === name) {
            return value;
        }
    }
    return null;
}

function storeInCookie(name, email, phone, days) {
    let expires = "";
    
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Convert days to milliseconds
        expires = "; expires=" + date.toUTCString();
    }

    document.cookie = `username=${name}${expires}; path=/`;
    document.cookie = `email=${email}${expires}; path=/`;
    document.cookie = `phone=${phone}${expires}; path=/`;
}


function set_sessionstorage(name, email, phone) {
    sessionStorage.setItem("username", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("phone", phone);
}

function set_localstorage(name, email, phone) {
    localStorage.setItem("username", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone number", phone);
}

function check_input(email, phone) {
    let email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let phone_pattern = /^07[789]\d{7}$/;
    if(email_pattern.test(email) && phone_pattern.test(phone)) {
        return true;
    }
    return false;
}

function display_info() {
    let name = localStorage.getItem("username");
    let email = localStorage.getItem("email");
    let phone = localStorage.getItem("phone number");
    info = document.getElementsByClassName('info')[0]
    info.innerHTML = `<h4>your name is ${name} <h4/> <h4>your phone number is ${phone} <h4/> <h4>your email is ${email}<h4/>  `;
    // document.getElementById("b").appendChild(new_div)
}