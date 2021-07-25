
function salvarInventario() {

    var nomeProduto = document.getElementById('nomeProduto').value;
    var caracteristicas = document.getElementById('caracteristicas').value;
    var quantidadeProduto = document.getElementById('quantidadeProduto').value;
    var valorUnitario = document.getElementById('valorUnitario').value;
    var idInventario = "Inventario_" + Math.floor(Math.random() * 1000);
    alert(inventario)
 
    var inventario = {"idInventario":idInventario, "nomeProduto": nomeProduto, "caracteristicas": caracteristicas, "quantidadeProduto":quantidadeProduto, "valorUnitario": valorUnitario}

    let convertData = JSON.stringify(inventario);
    alert(convertData)
    localStorage.setItem( idInventario, convertData);


}

