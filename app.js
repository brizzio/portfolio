const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

const btn_en = document.querySelector("#btn-flag-en")
const btn_it = document.querySelector("#btn-flag-it")
const btn_pt = document.querySelector("#btn-flag-pt")

var language = 'en'

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM completamente carregado e analisado");
  

  /* btn_en.addEventListener("click", flagAction)
  btn_it.addEventListener("click", flagAction)
  btn_pt.addEventListener("click", flagAction) */
});

hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

moon.addEventListener("click", ()=>{
  body.classList.toggle("dark")
})



const flagAction = (event)=>{
  console.log(event.target.alt)
  language = event.target.alt
  console.log(language)
}


function getContent(){
  return{
    lang: 'en'
  }
}

//fetch example with alpine.js
/* function pokeSearch() {
  return {
    // other default properties
    isLoading: false,
    pokemon: null,
    fetchPokemon() {
      this.isLoading = true;
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.pokemonSearch}`)
        .then(res => res.json())
        .then(data => {
          this.isLoading = false;
          this.pokemon = data;
        });
    }
  }
} */