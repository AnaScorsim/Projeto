function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // o toggle faz toda essa lógica
  /* if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add('light')
  } */

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
