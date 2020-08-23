class Noticias {
    constructor(titulo, subtitulo, imagen, urlImagen, contenido,  urlNoticia, id){
    this.titulo = titulo
    this.subtitulo = subtitulo
    this.imagen = imagen
    this.urlImagen = urlImagen
    this.contenido = contenido
    this.urlNoticia = urlNoticia
    this.id = id
    }
}


let Tecnologia = new Noticias (
    'Nuevas tecnologias',
    'Se viene la ps5',
    'Ps5',
    "ps5.jpg",
    '¿Ps5 o Xbox One S ? La Ps5 es mas barata pero menos potente... Leer màs',
    'Noticia.html',
    1
    
)


let Amd = new Noticias (
'Noticias importantes sobre Amd',
'Tecnologìa de punta',
'Procesadores Amd',
 "images.jpg",
'Los procesadores Amd, dieron un salto mas grande que los de intel, siendo estos más baratos y eficientes... Leer màs',
'Noticia2.html',
2
)

let Gaming = new Noticias (
    'Informacion sobre gaming importante',
    'Riot Games, la empresa mas importante',
    'riot',
 "riot.jpg",
 'Riot Games, el lider en la plataforma pc, expande su paso sin descanso... Leer màs ',
    'Noticia3.html',
    3
)

let Coronavirus = new Noticias (
    'Informacion sobre el coronavirus y su afecciòn al mundo gamer',
    '¿Como ha afectado el coronavirus al mundo del gaming, streaming y tecnològico?',
    'Avion de aerolineas',
 "coronagaming.jpg",
 'Los streamers y youtubers son los actores del movimiento tecnològico mas beneficiados por la pandemia mundial.. Leer màs',
    'Noticia4.html',
    4
)

let listadenoticias = []

listadenoticias.push(Tecnologia)
listadenoticias.push(Amd)
listadenoticias.push(Gaming)
listadenoticias.push(Coronavirus)

console.log(listadenoticias)
recorrerListadenoticias()

var abrirNoticia = document.getElementById("bton")

function recorrerListadenoticias(){
    let containerNoticias = document.getElementById("Noticias-container")
    containerNoticias.innerHTML = ''
    listadenoticias.forEach(x=>{
        createCard(x)
    })
}


function clickButton (event){
    recorrer = listadenoticias.filter(x=>x.id.toString() === event.target.id)
     console.log(recorrer)
  

}


function createCard(Noticia){
    let containerNoticias = document.getElementById("Noticias-container")
    let div_card = document.createElement ("div")
    div_card.classList.add("card")
    let h1_card = document.createElement ("h1")
    h1_card.classList.add("h1-card")
    h1_card.textContent = `${Noticia.titulo}`
    div_card.appendChild(h1_card)
    let sub_card = document.createElement("h2")
    sub_card.textContent =  `${Noticia.subtitulo} `
    sub_card.classList.add("sub-text")
    div_card.appendChild(sub_card)
    let a_card = document.createElement("a")
    a_card.classList.add("a-card")
    a_card.setAttribute("id", Noticia.id)
    a_card.setAttribute("href", Noticia.urlNoticia)
    a_card.setAttribute("target", self)
    a_card.addEventListener('click', clickButton)
    div_card.appendChild(a_card)
    let img_card = document.createElement("img")
    img_card.classList.add('img-card')
    img_card.src =  "./img/" + Noticia.urlImagen 
    img_card.setAttribute("id", Noticia.id)
    document.createElement("img");
img_card.classList.add("img-card");
fetch('https://source.unsplash.com/user/erondu/1600x900', {})
    .then(function(response){
        img_card.src = response.url
       
    })

    a_card.appendChild(img_card)
    let a_card2 = document.createElement('a')
    a_card2.classList.add("a-card2")
    a_card2.setAttribute("id", Noticia.id)
    a_card2.setAttribute("href", Noticia.urlNoticia)
    a_card2.setAttribute("target", self)
    a_card2.textContent = `Leer mas` 
    a_card2.addEventListener('click', clickButton)
    div_card.appendChild(a_card2)
    let texto_card = document.createElement('p')
    texto_card.textContent = `${Noticia.contenido}`
    texto_card.classList.add("texto-card")
    a_card2.appendChild(texto_card)
    containerNoticias.appendChild(div_card)

}



