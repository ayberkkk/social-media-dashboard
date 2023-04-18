const body = document.querySelector("body")
const switchInput = document.querySelector(".input-switch")
const currentTheme = localStorage.getItem("theme")

if (currentTheme) {
	body.setAttribute("data-mode", currentTheme)

	if (currentTheme === "dark") {
		switchInput.checked = true
	}
}

const handleDarkMode = () => {
	if (body.getAttribute("data-mode") === "dark") {
		body.setAttribute("data-mode", "light")
		localStorage.setItem("theme", "light")
	} else {
		body.setAttribute("data-mode", "dark")
		localStorage.setItem("theme", "dark")
	}
}

switchInput.addEventListener("change", handleDarkMode)