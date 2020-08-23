// EJERCICIO 1//


let hola = "Hola NUCBA"
function decimehola(hola){

}

//EJERCICIO 2//
// decimehola(console.log(hola));


// let hello = prompt("Introduce tu nombre")
// let name = "Hola " + hello

// function prueba(name){
    
// }


// prueba(console.log(name))

//EJERCICIO 3//

// function factorial(numero){
//   if (numero === 1)
//   return 1;
  
//   else {
//     return numero*factorial(numero-1)
//   }
// }

//  var resultado = factorial(7)
//  console.log(resultado)
//asd

 function factorial(numero){
  let resultado = 1;
  for(i = 1; i <= numero; i++)
  {
      resultado *= i // resultado = resultado * i
  }

  return resultado
  
 
}
var resultado = factorial(10)
console.log(resultado)

 //EJERCICIO 4//
 var arrayNumeros = [2,3,4,5,6,10]

 console.log(cuadradoArray(arrayNumeros))
 
 function cuadradoArray(array)
{
    let cuadrado = []

    // array.forEach(x=>{
    //     cuadrado.push(x*x)
    // })

    for(let i = 0; i < array.length; i++){
        cuadrado.push(array[i] * array[i])
    }

    return cuadrado
}

//EJERCICIO 5
console.log(area_rectangulo(5,2))




function area_rectangulo(base,altura){
  let area = base*altura
  return area
}

var relacionnumero = (5,4)


//ejercicio 6
console.log(relacion(4, 4))



function relacion(a, b){
  if ( a > b  ){
    return 1

  } 

  else if (a < b) {
return -1
  }

  else if ( a === b){
    return 0
  }


}


//ejercicio 7

let email = prompt("ingrese email")
var str = email






function validar(str){
  let c = []
  for (var i = 0; i < str.length; i++) {
   c.push(str.charAt(i))
    if(str[i] === '@'){
      return true
    }else {
      return false
    
  }
  
  
  }
  
  
}
    
  