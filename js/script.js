WelcomeMessege ();

function WelcomeMessege() {
    let userResponse = prompt("What is your name?");
    if (userResponse === null || userResponse.trim() === "") {
        userResponse = "Guest";
    }
    document.getElementById("welcome-speech").innerText = `Welcome, ${userResponse}! to Shara Company Website.`;
    console.log(userResponse);
}
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let genderInput = document.querySelector('input[name="gender"]:checked');

    if (name.trim() === "") {
        alert("Name is required!");
        return;
    }

    if (genderInput === null) {
        alert("Gender is required!");
        return;
    }

    let gender = genderInput.value;

    if (email.trim() === "") {
        alert("Email is required!");
        return;
    }

    // Message BOLEH kosong
    if (message.trim() === "") {
        message = "(Nothing messege)";
    }

    alert(
        "Pesan berhasil dikirim!\n\n" +
        "Name: " + name +
        "\nGender: " + gender +
        "\nE-mail: " + email +
        "\nMessage: " + message   
    );

    document.querySelector("form").reset();
}