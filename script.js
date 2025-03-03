document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Email popup functionality
    const emailLink = document.querySelector("#contact a");
    if (emailLink) {
        emailLink.addEventListener("click", function (event) {
            event.preventDefault();
            if (!document.querySelector(".popup-overlay")) {
                openEmailPopup();
            }
        });
    }
});

// Function to create and show the email popup in the center
function openEmailPopup() {
    const popup = document.createElement("div");
    popup.classList.add("popup-overlay");

    popup.innerHTML = `
        <div class="email-popup">
            <h3>Send an Email</h3>
            <label for="email-subject">Subject:</label>
            <input type="text" id="email-subject" placeholder="Enter subject" required />
            <label for="email-message">Message:</label>
            <textarea id="email-message" placeholder="Write your message..." required></textarea>
            <div class="popup-buttons">
                <button id="send-email">Send</button>
                <button id="close-popup">Cancel</button>
            </div>
        </div>
    `;

    document.body.appendChild(popup);

    // Event listener to close the popup
    document.getElementById("close-popup").addEventListener("click", closePopup);

    // Event listener to send email
    document.getElementById("send-email").addEventListener("click", sendEmail);
}

// Function to close the popup
function closePopup() {
    const popup = document.querySelector(".popup-overlay");
    if (popup) popup.remove();
}

// Function to send email
function sendEmail() {
    const subject = document.getElementById("email-subject").value.trim();
    const message = document.getElementById("email-message").value.trim();
    const recipient = "laibaakhtar389@gmail.com";

    if (subject === "" || message === "") {
        alert("Please fill out both the subject and message fields.");
        return;
    }

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;

    closePopup();
}
