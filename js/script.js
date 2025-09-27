welcomMessage()

function welcomMessage() {
    let username = prompt("Enter Your Name:")
    if (username) {
        alert(`Welcome to my Portofolio, ${username}!` );
    } else {
        alert(`Welcome to my Portofolio`)
    }
};