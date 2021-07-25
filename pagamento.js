//função utilizada pela página de confirmar pedido e pagamento para 
// buscar do localstorage os pedidos, consultando através da key pagamento.html?pedido=* que vem pelo request
function receberPedido(){
    var urlParams = new URLSearchParams(window.location.search);
    var idPedido = urlParams.get('pedido');
    document.getElementById('pedido').innerText = idPedido; // mostrar Id do pedido na tela.
    var pedido = (getData(idPedido))[0];
    var valorTotalDoPedidoN = 0;
    for (var i=0; i< pedido.length; i++) {
        valorTotalDoPedidoN =  parseInt(valorTotalDoPedidoN) + parseInt(pedido[i].price);
    }
    document.getElementById('valorTotalDoPedido').value = valorTotalDoPedidoN;
    // TODO: Criar uma funcao carregarTabelaPedidos(pedido) que carrega os dados do pedido na tela de pagamento.

}

function getData(chave) {
    return Object.keys(localStorage).filter(function(key) {
        return key.indexOf(chave) == 0;
    }).map(function(key) {
        return JSON.parse(localStorage[key]);
    });
}

 function pagar(){
    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('endereco').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var idPedido= document.getElementById('pedido').innerText;
    var idPagamento = "Pagamento_" + Math.floor(Math.random() * 1000);
    var pagamento = {"idPagamento":idPagamento, "idPedido": idPedido, "nome": nome, "endereco":endereco, "email": email, "telefone":telefone};
    let convertData = JSON.stringify(pagamento);
    localStorage.setItem( idPagamento, convertData);
    window.location.href = "index.html"
    alert("Pagamento realizado com sucesso!");
 }
 // Funcão responsável por redirecionar para a pagina principal após confirmacao de pagamento.
 function redireciona(){
    var urlParams = new URLSearchParams(window.location.search);
    var idPedido = urlParams.get('pedido');
    if (idPedido == "" || idPedido == null ){
        window.location.href="index.html";
    }
    
 }
 
