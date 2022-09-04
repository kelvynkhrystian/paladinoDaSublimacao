import { produtos } from "./produtos.js";

// Teste produtos
const listaProdutos = produtos.map( produto => {

  console.log(produto.id);
  console.log(produto.image);
  console.log(produto.name);
  console.log(produto.title);
  console.log(produto.price);
  console.log(produto.category);

});
