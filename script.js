const hamburgerMenu = document.querySelector("div.hamburger")
const menuElements = document.querySelectorAll(".menu")

function toggleMenu(x) {
  x.classList.toggle("change")
}
hamburgerMenu.addEventListener("click", () => {
  toggleMenu(hamburgerMenu)
  menuElements.forEach((el) => el.classList.toggle("change"))
})

function reveal() {
  var reveals = document.querySelectorAll(".reveal")

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight
    var elementTop = reveals[i].getBoundingClientRect().top
    var elementVisible = 150

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active")
    } else {
      reveals[i].classList.remove("active")
    }
  }
}

window.addEventListener("scroll", reveal)
