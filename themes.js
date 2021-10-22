const themeSwitch = document.getElementById("switch");
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "second") {
        themeSwitch.value = "2";
    } else if (currentTheme === "third") {
        themeSwitch.value = "3";
    } else {
        themeSwitch.value = "1";
    }
}

function switchTheme() {
    if (themeSwitch.value == "2") {
        document.documentElement.setAttribute("data-theme", "second");
        localStorage.setItem("theme", 'second');
    } else if (themeSwitch.value == "3") {
        document.documentElement.setAttribute("data-theme", "third");
        localStorage.setItem("theme", 'third');
    } else {
        document.documentElement.setAttribute("data-theme", "first");
        localStorage.setItem("theme", "first");
    }
}

themeSwitch.addEventListener("input", switchTheme);