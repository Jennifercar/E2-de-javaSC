const INPUT_NAMBER = document.getElementById('input-namber')
const INPUT_BUTON = document.getElementById('input-buton')
const conteiner = document.getElementById('conteiner')
const listasPizzas = document.getElementById("listasPizzas");
INPUT_BUTON.addEventListener('click', ()=> {
    console.log(INPUT_NAMBER.value);
});

function mostrarValorInput(){
    console.log(INPUT_NAMBER.value)
}
let pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];

const saveLocalStorage = () => {
  localStorage.setItem("pizzas", JSON.stringify(pizzas));
};

const saveDate = () => {
	pizzas = [
	  ...pizzas,
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
};


const renderPizza=(list)=> {
  const {id,tipo,precio}= list;

  return `

	  <div id="conteiner" >
	  <h2 >Pizza: ${tipo} N°${id} </h2>
	  <h3 >Pizza: ${tipo} Cuesta: ${precio}</h3>
	
		</div>
		`;
	};
	const renderList = () => {
		conteiner.innerHTML = pizzas.map((list) => renderPizza(list)).join("");
	  };


	  const submitLis = (e) => {
		e.preventDefault();
		if (isValid()) {
		  saveDate();
		  console.log(pizzas);
		  listasPizzas.reset();
		  saveLocalStorage();
		  renderList();
		  setDateIntervals();
		}
	  };
	  
	  const init = () => {
		
		renderList();
	  
		window.addEventListener("DOMContentLoaded", setDateIntervals);
		listasPizzas.addEventListener("submit", submitLis);
	  };
	  
	  init();


