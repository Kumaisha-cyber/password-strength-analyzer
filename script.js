function analyzePassword() {

    const password =
        document.getElementById("password").value;

    let score = 0;

    const lengthCheck =
        document.getElementById("length");

    const uppercaseCheck =
        document.getElementById("uppercase");

    const lowercaseCheck =
        document.getElementById("lowercase");

    const numberCheck =
        document.getElementById("number");

    const symbolCheck =
        document.getElementById("symbol");


    if (password.length >= 8) {

        score++;

        lengthCheck.textContent =
            "✅ At least 8 characters";

    } else {

        lengthCheck.textContent =
            "❌ At least 8 characters";
    }


    if (/[A-Z]/.test(password)) {

        score++;

        uppercaseCheck.textContent =
            "✅ Contains uppercase letter";

    } else {

        uppercaseCheck.textContent =
            "❌ Contains uppercase letter";
    }


    if (/[a-z]/.test(password)) {

        score++;

        lowercaseCheck.textContent =
            "✅ Contains lowercase letter";

    } else {

        lowercaseCheck.textContent =
            "❌ Contains lowercase letter";
    }


    if (/[0-9]/.test(password)) {

        score++;

        numberCheck.textContent =
            "✅ Contains a number";

    } else {

        numberCheck.textContent =
            "❌ Contains a number";
    }


    if (/[^A-Za-z0-9]/.test(password)) {

        score++;

        symbolCheck.textContent =
            "✅ Contains a special character";

    } else {

        symbolCheck.textContent =
            "❌ Contains a special character";
    }


    const strength =
        document.getElementById("strength");

    const scoreDisplay =
    document.getElementById("score");

    const progress =
        document.getElementById("progress");


 scoreDisplay.textContent =
    "Score: " + score + " / 5";
    
 if (score <= 2) {

    strength.textContent =
        "Strength: Weak";

    progress.style.width =
        "30%";

    progress.style.backgroundColor =
        "red";

  strength.style.color =
        "red";

} else if (score <= 4) {

    strength.textContent =
        "Strength: Medium";

    progress.style.width =
        "65%";

    progress.style.backgroundColor =
        "orange";

} else {

    strength.textContent =
        "Strength: Strong";

    progress.style.width =
        "100%";

    progress.style.backgroundColor =
        "green";
    }
}


function togglePassword() {

    const passwordBox =
        document.getElementById("password");

    const button =
        document.querySelector(".show-btn");


    if (passwordBox.type === "password") {

        passwordBox.type =
            "text";

        button.textContent =
            "🙈 Hide Password";

    } else {

        passwordBox.type =
            "password";

        button.textContent =
            "👁️ Show Password";
    }
}
function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("darkMode", "enabled");

    } else {

        localStorage.setItem("darkMode", "disabled");

    }

}


window.onload = function() {

    if (localStorage.getItem("darkMode") === "enabled") {

        document.body.classList.add("dark-mode");

    }

};
