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
    img.setAttribute(
      "alt",
      "Foto de Ana Scorsim sorrindo, usando camiseta cinza e calça jeans, com mar ao fundo"
    )
  } else {
    // se tiver sem light mode manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Ana Scorsim sorrindo, usando camiseta curta e calça jeans, com árvore e carros ao fundo"
    )
  }
}
