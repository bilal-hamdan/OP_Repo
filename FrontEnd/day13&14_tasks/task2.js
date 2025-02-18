let userId = 1; 

async function fetchUser() {
    const usersDiv = document.getElementById("users");

    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

        if (!response.ok) throw new Error("Failed to fetch user data");

        let user = await response.json();

        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Username:</strong> ${user.username}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>City:</strong> ${user.address.city}</p>
        `;

        usersDiv.appendChild(userCard);

        if (userId < 10) {
            userId = userId + 1;
        } else {
            alert("end of users")
            userId = 1;
        }

    } catch (error) {
        console.error("Error:", error);
    }
}
