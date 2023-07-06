function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // o toggle faz toda essa lógica
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add('light')
  } */
}
