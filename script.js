const form = document.getElementById('form-email');
var produtosCarrinho = [];
 
configButtonAdicionar();

form.addEventListener("submit",(e) => {
  e.preventDefault();

  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
 
  let data = {
        nome,
        email,
   }

   let convertData = JSON.stringify(data);

   localStorage.setItem("lead", convertData);
   let content = document.getElementById('content');

   let carregando = "<p> Cadastrando seus dados, por favor aguarde </p>"
   let pronto = "<p> Cadastro realizado com sucesso!</p>"

   content.innerHTML = carregando;

   setTimeout (() => {
    content.innerHTML = pronto
   },1000)
   
})

//Função que realiza configuração dinamica dos botões de adicionar item no carrinho
//Para que cada botão tenha o id do produto que se quer realizar o pedido.
function configButtonAdicionar(){
  var botaoAdicionar = document.getElementsByClassName('botao-adicionar');
   for ( var i=0; i < botaoAdicionar.length; i++){
    botaoAdicionar[i].id = i; 
    botaoAdicionar[i].addEventListener ("click",adicionarCarrinho);
   }
 }

function adicionarCarrinho(){
  var idProduto = document.activeElement.id;
//Buscar disponibilidade em estoque , Ao vuscar do estoqur , trazer tambem a descirção e o preço
// Por questões de segurança não vou buscar o valor do produto da tela. mas sim do banco local.


//Se exitir dipoível em estoque vamos adicionar o itme no carrinho
produtosCarrinho.push(consultaEstoque(idProduto));
document.getElementById('qtdcarrinho').innerText = produtosCarrinho.length;
}
 

function consultaEstoque(idProduto){
  var produto = {"id":idProduto, "description": "Bolo de Morango", "price":"100.00", 'idPedido':""}
  // TODO realizar consulta de estoque no localstorage
  return produto


}


//Criar ID pedido
// Guardar ID e Pedido que está na variavel produtosCarrinho 
// Enviar ID de pedido para página de pagamento.
function enviarParaPagamento(){
var idPedido = "Pedido_" + (Math.floor(Math.random() * 1000)); // controlador de id pedido "mocado"ideal ter controlado via db.
gravarPedidoNoBanco(idPedido);
 window.location ="pagamento.html?pedido=" + idPedido;

}

// Função responsável por guardar pedido no banco de dados 
// Ela associa o ID do pedido com a lista de produtos que o cliente adicionou no carrinho
// 
function gravarPedidoNoBanco(idPedido){
  var produto //= {"id":idProduto, "description": "Bolo de Morango", "price":"100.00"}
  for (var i = 0; i < produtosCarrinho.length; i++) { 
    produtosCarrinho[i].idPedido = idPedido;
   console.log (produtosCarrinho[i]);
  }
  let convertData = JSON.stringify(produtosCarrinho);
  localStorage.setItem( idPedido, convertData);
}






  