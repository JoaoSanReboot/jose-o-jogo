const changeThemeBtn = document.querySelector("#mudar-tema")

changeThemeBtn.addEventListener("change", function() {

    document.body.classList.toggle("light");
})