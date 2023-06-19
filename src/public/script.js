const d = document

const $svg = d.querySelector('.logo-tesla')
const $links = d.querySelectorAll('.links a')
const $title = d.querySelectorAll('.title')
const $description = d.querySelectorAll('.description')
const $content = d.querySelector('.content-main')

const $titleAnimation = d.querySelector('.title-animation')
const $text = d.querySelector('.text')
const $btnPrimary = d.querySelector('.btn-primary')

// Para detectar cuando el mouse baje a una determinada altura y cambiar los colores de los links de navbar
$content.onscroll = function (){
  // Obtenemos la posicion del scroll en pantalla
  var scroll = document.documentElement.scrollTop || $content.scrollTop;

  // Cuando el scroll es menor su recorrido en pixeles a 900 hara las siguientes lineas de codigo 
  if(scroll < 900){
    $svg.setAttribute('style', 'color: white;')
    $title.forEach(el => el.setAttribute('style', 'color: white;'))
    $description.forEach(el => el.setAttribute('style', 'color: white;'))
    $links.forEach(links => links.setAttribute('style', 'color: white;'))
    
    setTimeout(() => {
      $titleAnimation.setAttribute('style', 'transform: translateY(0px); opacity: 1;')
    }, 600)

    setTimeout(() => {
      $text.setAttribute('style', 'transform: translateY(0px); opacity: 1;')
    }, 800)

    setTimeout(() => {
      $btnPrimary.setAttribute('style', 'opacity: 1;')
    }, 1000)

  }

  // Cuando el scroll es mayor su recorrido en pixeles a 900 hara las siguientes lineas de codigo 
  if(scroll > 900){
    $svg.setAttribute('style', 'color: black;')
    $title.forEach(el => el.setAttribute('style', 'color: black;'))
    $description.forEach(el => el.setAttribute('style', 'color: black;'))
    $links.forEach(links => links.setAttribute('style', 'color: black;'))

    setTimeout(() => {
      $titleAnimation.setAttribute('style', 'transform: translateY(0px); opacity: 1;')
    }, 600)

    setTimeout(() => {
      $text.setAttribute('style', 'transform: translateY(0px); opacity: 1;')
    }, 800)
    
    setTimeout(() => {
      $btnPrimary.setAttribute('style', 'opacity: 1;')
    }, 1000)

  }
}

// Esto es para que a la carga del documento se ejecute una animacion con css puro. 
d.addEventListener('DOMContentLoaded', e => {

  setTimeout(() => {
    $titleAnimation.setAttribute('style', 'transform: translateY(0px); opacity: 1;')
  }, 600)

  setTimeout(() => {
    $text.setAttribute('style', 'transform: translateY(0px); opacity: 1;')
  }, 800)

  setTimeout(() => {
    $btnPrimary.setAttribute('style', 'opacity: 1;')
  }, 1000)

})