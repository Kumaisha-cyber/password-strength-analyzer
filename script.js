function analyzePassword() {

    const password =
        document.getElementById("password").value;

    let score = 0;

    let tips = [];

    const tip =
    document.getElementById("tip");

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


    if (password.length === 0) {

        tip.textContent =
    "Enter a password to get security tips";

        document.getElementById("strength").textContent =
            "Strength: Not Checked";

        document.getElementById("score").textContent =
            "Score: 0 / 5";

        document.getElementById("progress").style.width =
            "0%";

        lengthCheck.textContent =
            "❌ At least 8 characters";

        uppercaseCheck.textContent =
            "❌ Contains uppercase letter";

        lowercaseCheck.textContent =
            "❌ Contains lowercase letter";

        numberCheck.textContent =
            "❌ Contains a number";

        symbolCheck.textContent =
            "❌ Contains a special character";

        return;
    }


    if (password.length >= 8) {

        score++;

        lengthCheck.textContent =
            "✅ At least 8 characters";

    } else {

        lengthCheck.textContent =
            "❌ At least 8 characters";

        tips.push(
    "💡 Add at least 8 characters"
);
    }


    if (/[A-Z]/.test(password)) {

        score++;

        uppercaseCheck.textContent =
            "✅ Contains uppercase letter";

    } else {

        uppercaseCheck.textContent =
            "❌ Contains uppercase letter";

        tips.push(
    "💡 Add an uppercase letter (A-Z)"
);
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

    if (score === 5) {

    tip.textContent =
        "🎉 Excellent! Your password meets all requirements";

} else {

    tip.textContent =
        "💡 Try adding missing requirements to improve your password";
}


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

        strength.style.color =
            "orange";


    } else {

        strength.textContent =
            "Strength: Strong";

        progress.style.width =
            "100%";

        progress.style.backgroundColor =
            "green";

        strength.style.color =
            "green";
    }

}


// Show / Hide Password
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


// Clear Password
function clearPassword() {

    const passwordBox =
        document.getElementById("password");

    passwordBox.value = "";

    analyzePassword();

}


// Dark Mode
function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem(
            "darkMode",
            "enabled"
        );


    } else {

        localStorage.setItem(
            "darkMode",
            "disabled"
        );
    }

}


// Remember Dark Mode
window.onload = function() {

    if (
        localStorage.getItem("darkMode")
        ===
        "enabled"
    ) {

        document.body.classList.add(
            "dark-mode"
        );
    }

};
