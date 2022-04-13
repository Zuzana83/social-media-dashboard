const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("change", () => {
    console.log("theme will be switch soon!");
    document.documentElement.classList.toggle("dark-theme");
})