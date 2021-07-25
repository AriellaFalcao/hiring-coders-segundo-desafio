//função utilizada pela página de confirmar pedido e pagamento para 
// buscar do local storage os pedidos, consultando através da key pagamento.html?pedido=* que vem pelo request
function receberPedido(){
    var urlParams = new URLSearchParams(window.location.search);
    var idPedido = urlParams.get('pedido');
    document.getElementById('pedido').innerText = idPedido; // mostrar Id do pedido na tela.
    var pedido = JSON.stringify((getData(idPedido)));
 // buscar pedido no localstorage
//carregarTabelaPedidos(pedido);// mostrar pedido na tela

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
    alert(nome);
    var pagamento = {"idPagamento":idPagamento, "idPedido": idPedido, "nome": nome, "endereco":endereco, "email": email, "telefone":telefone}

    let convertData = JSON.stringify(pagamento);
    localStorage.setItem( idPagamento, convertData);
 }
 










/* function carregarTabelaPedidos(){ 
    var urlParams = new URLSearchParams(window.location.search);
    var idPedido = urlParams.get('pedido');
    var pedido = JSON.stringify((getData(idPedido)));
    alert(pedido);
    var source = $("#tmpl-pedidos").html();
    var template = Handlebars.compile(source);
    var tabela = $('#tbody');
    
    var html = template(pedido);
    tabela.html(html)

}*/


    
