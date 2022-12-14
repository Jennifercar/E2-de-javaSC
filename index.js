const pizzas =  [
    {   
	    id: 1 ,
		tipo: "caprese",
		ingredientes: ["tomate", "albaca"],
		precio: 1500,
	},
	{   
	    id: 2 ,
		tipo: "jyq",
		ingredientes: ["jamon","queso"],
		precio: 1200,
	},
	{   
	    id: 3 ,
		tipo: "anchoas",
		ingredientes: ["anchoas","anchoas" , "morron"],
		precio: 1800,
	},
	{   
	    id: 4 ,
		tipo: "muzza",
		ingredientes: ["anchoas","anchoas" , "morron"],
		precio: 1800,
	},
	{   
	    id: 5 ,
		tipo: "especial",
		ingredientes: ["pollo", "salsa de tomate" , "muzarella"],
		precio: 1200,
	},
	{   
	    id: 6 ,
		tipo: "humita",
		ingredientes: ["humita","cebolla", "choclo" , "muzarela"],
		precio: 1500,
	},
]

const input_number = document.getElementById('input-number')
const conteiner = document.getElementById('conteiner')
const form = document.getElementById("form")
const input_buton = document.getElementById('input-buton')

input_buton.addEventListener('click', ()=> {
    console.log(input_number.value);
});

function mostrarValorInput(){
    console.log(input_number.value)
}

const buscaPizza = (value) => pizzas.find((pizza) => pizza.id === value)

const renderBusqueda = (pizza) => {
    if (pizza) {
		conteiner.innerHTML = `
      <div >
      <h2 >${pizza.tipo}</h2>
      <h3 > Precio: $${pizza.precio} </h3>
      </div>
      `
    }
}

const submitSearch = (e) => {
    e.preventDefault()
	const searchValue = input_number.value;
    if (!searchValue || searchValue == "") 
     return console.log ("Ingrese un numero del 1 al 6");

    const searchedPizza = buscaPizza(parseInt(searchValue));
	console.log(searchedPizza);
    renderBusqueda(searchedPizza);
};

const init = () => {
form.addEventListener("submit", submitSearch)
}

init()



