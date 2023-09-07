const btn = document.getElementById("btnBuscar")
const container = document.getElementById("contenedor")

async function search(url){
let response = await fetch (url);
if (response.ok){
    let responseContents= await response.json();
    console.log(responseContents.collection.items)
    let data=responseContents.collection.items
    showInfo(data)
} else {
    alert ("HTTP Error: " + response.status)
}
}

function showInfo(data){
         data.forEach(function (item){
            const imageUrl = item.links[0].href;
        const title = item.data[0].title;
        const description = item.data[0].description;
        const dateCreated = item.data[0].date_created;
         
         let contenido = `<div class=title>
         <h2 class=titulo>${title}</h2>
         <img src=${imageUrl}>
         <p class= description> Descripción: ${description}</p>
         <p>Fecha de creación: ${dateCreated}</p>
         </div>
         `
         container.innerHTML += contenido}
   ) }

btn.addEventListener("click", ()=>{
    container.innerHTML=""
    const input = document.getElementById("inputBuscar")
let contenido = input.value;
let URL = "https://images-api.nasa.gov/search?q=" + contenido
    console.log(contenido)
search(URL)
})
