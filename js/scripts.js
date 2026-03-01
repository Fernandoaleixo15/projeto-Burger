//mapear meus itens.
const container = document.getElementById("container");
const texto = document.getElementById("titulo");
const conteudo = document.getElementById("conteudo");

// quando o mouse passar por cima.
texto.addEventListener("mouseover", function () {
  this.style.backgroundColor = "black";
  this.style.color = "red";
  this.style.borderRadius = "20px";
  this.style.marginBottom = "20px";
});

// Quando o mouse sai
texto.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
  this.style.color = "";
  this.style.marginBottom = "10px";
});
conteudo.addEventListener("mouseover", function () {
  this.style.backgroundColor = "black";
  this.style.color = "#ae5d01";
  this.style.borderRadius = "20px";
});

// Quando o mouse sai
conteudo.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
  this.style.color = "";
});

//Mapeando os itens
const list = document.querySelector(".list-card");
const buttonShowAll = document.querySelector("#show-all");
const buttonMapAll = document.querySelector("#map-all");
const buttonSumAll = document.querySelector("#sum-all");
const buttonFilterAll = document.querySelector("#filter-all");


//Formatação dos paragrafos (R$)
function formatCurrency(value){
  return newValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
};


// chamar o cardapio forEach
function showAll(productsArray) {
  let myLi = " ";
  productsArray.forEach((product) => {
    myLi += `
              <li class="cards">
                <img src=${product.src} alt="imagem do lanche">
                <h3  class="subt">${product.name}</h3>
                <p class="value">R$ ${formatCurrency(product.price)}</p>
              </li>  
            `;
  });
  list.innerHTML = myLi;
}
// Calculando 10% a menos map
function mapAlItems(){
 const newPrices = menuOptions.map((product)  => ({
      ...product,// Spread Operator
      price:product.price * 0.9,
      
 }
 ))
 showAll(newPrices)
};
//redus e soma os valores do lanches
function sumAllItems(){
  const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
  list.innerHTML = `
          <li class="cards">
          <p>O Valor total dos Lanches é R$: ${formatCurrency(totalValue)}</p>
          </li>
  
  `
};

//Separa so os lanches Veganos
function filterAllItems(){
  const filterJustVegan = menuOptions.filter((product) => product.vegan)

  showAll(filterJustVegan)
};


buttonShowAll.addEventListener("click", () => showAll (menuOptions));
buttonMapAll.addEventListener("click",mapAlItems);
buttonSumAll.addEventListener("click", sumAllItems);
buttonFilterAll.addEventListener("click", filterAllItems);



