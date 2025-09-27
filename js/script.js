welcomMessage()

function welcomMessage() {
    let username = prompt("Enter Your Name:");
    if (username) {
        document.getElementById("username").innerText = username;
    } else {
        alert("Welcome to my Portofolio");
    }
};

function validateForm() {
    let firstname = document.getElementById("first-name").value;
    let lastname = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    console.log(firstname, lastname, email, subject, message )
    if (firstname === "" || lastname === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all required fields.");
        } else {
            alert("Thank you for your message, " + firstname + lastname + "! We will get back to you shortly.");
        }
};