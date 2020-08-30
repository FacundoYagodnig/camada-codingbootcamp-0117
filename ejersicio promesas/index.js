// class pokemon {
//     constructor(id, noticia, img){
//         this.id = id
//         this.noticia = noticia
//         this.getImg();

//     }



    // getImg(){
    //     fetch('https://source.unspash.com/user/erondu/1600x900', {})
    //     .then(Response => {
    //         this.img = response.url
    //     })
    // }





// let pok = new pokemon(
//     1,
//     "Soy el mapa"
// )



function cambiarImagen() {
    fetch("https://dog.ceo/api/breeds/image/random").then(function(response) {
        return response.json();

    }).then(function(data) {
        document.getElementById("img-pet").src = data.message
    });
}
