class Local {

    constructor(articulo,color,talle,){
    this.articulo = articulo
    this.color = color
    this.talle = talle
    }
}


let Jogging = new Local(
"jogging",
"rojo",
"talle unico"
)

let Remeramc = new Local(
    "remera",
    "azul",
    'talle l'
    )
let campera = new Local(
    'campera',
    'verde',
    'talle l'

)

let sweater = new Local(
    'sweater',
    'verde',
    'talle m'

)

let remeraml = new Local(
    'remera manga larga',
    'azul',
    'talle xl'
)
let pantalon = new Local(
    'pantalon',
    'rojo',
    'talle xl'
)
let remeraestampa = new Local(
    'remera con estampa',
    'verde',
    'talle s'
)
let jean = new Local(
    'Jean',
    'rojo',
    'talle xl'
)
let calza = new Local(
    'calza',
    'verde',
    'talle s'
)
let guantes = new Local(
    'guantes',
    'azul',
    'talle xs'

)
let listadeproductos = []


listadeproductos.push(Jogging)
listadeproductos.push(Remeramc)
listadeproductos.push(campera)
listadeproductos.push(sweater)
listadeproductos.push(remeraml)
listadeproductos.push(pantalon)
listadeproductos.push(remeraestampa)
listadeproductos.push(jean)
listadeproductos.push(calza)
listadeproductos.push(guantes)


console.log('Lista sin filtrar')
console.log(listadeproductos)

listadeproductos.filter


let productosazules = listadeproductos.filter(x => x.color === 'azul')
console.log('Lista de productos azules')
console.log(productosazules)

let productosrojos = listadeproductos.filter(x => x.color === 'rojo' && x.talle === 'talle xl')
   

console.log('Lista de productos rojos y talle xl')
console.log(productosrojos)


let ahoraverdes = listadeproductos.map(function(x){
return x.color = 'verde'

})

console.log('Lista de productos verdes')
console.log(ahoraverdes)

let elementotalleS = listadeproductos.find(x=> x.talle === 'talle s')
console.log('Lista de productos talle s')
console.log(elementotalleS)


let primerelementotipoPantalon = listadeproductos.findIndex( x=> x.articulo === 'pantalon')

console.log('Lista de productos pantalon')
console.log(primerelementotipoPantalon)