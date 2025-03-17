document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const adminLink = document.getElementById("admin-link");
    const navMenu = document.querySelector("nav ul");
    let currentRole = null; // Store current logged-in role

    // Function to create a nav link dynamically
    function createOrUpdateNavLink(id, text, href) {
        let existingLink = document.getElementById(id);
        if (!existingLink) {
            const li = document.createElement("li");
            li.id = id;
            li.style.display = "none"; // Initially hidden
            li.innerHTML = `<a href="${href}">${text}</a>`;
            navMenu.appendChild(li);
        }
    }

    // Create nav links but keep them hidden
    createOrUpdateNavLink("student-link", "Student Portal", "student.html");
    createOrUpdateNavLink("reviewer-link", "Reviewer Portal", "reviewer.html");
    createOrUpdateNavLink("mentor-link", "Mentor Portal", "mentor.html"); // ✅ Fixed from professor-link
    adminLink.style.display = "none";

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // If a user is already logged in, prevent multiple logins
        if (currentRole) {
            alert("You are already logged in as " + currentRole + ". Please click on Home or refresh to change roles.");
            return;
        }

        // Dummy authentication logic (Replace with real backend validation)
        if (username === "admin" && password === "12345") {
            alert("Login successful! Admin access granted.");
            adminLink.style.display = "block";
            currentRole = "Admin";
        } else if (username === "student" && password === "12345") {
            alert("Login successful! Student access granted.");
            document.getElementById("student-link").style.display = "block";
            currentRole = "Student";
        } else if (username === "reviewer" && password === "12345") {
            alert("Login successful! Reviewer access granted.");
            document.getElementById("reviewer-link").style.display = "block";
            currentRole = "Reviewer";
        } else if (username === "mentor" && password === "12345") { // ✅ Fixed from professor
            alert("Login successful! Mentor access granted.");
            document.getElementById("mentor-link").style.display = "block"; // ✅ Fixed from professor-link
            currentRole = "Mentor";
        } else {
            alert("Invalid credentials.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById("file-upload");

    if (fileInput) {
        fileInput.addEventListener("change", function () {
            const file = fileInput.files[0];
            if (file) {
                alert(`Selected file: ${file.name}`);
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logout-button");

    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    }
});
