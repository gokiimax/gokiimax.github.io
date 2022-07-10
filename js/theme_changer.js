const change_button = document.getElementById("nav-links-themeChanger");

change_button.addEventListener("click", () => {
    document.body.classList.toggle("light")

    if(document.body.classList.contains("light")) {
        window.localStorage.setItem("theme", "light");
    } else {
        window.localStorage.setItem("theme", "dark");
    }
})

if(window.localStorage.getItem("theme")) {
    let theme = window.localStorage.getItem("theme");

    if(theme === "light") {
        document.body.classList.add("light")
    }
}