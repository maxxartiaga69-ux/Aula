function assarpizza(numero){
    setTimeout(()=>{
        console.log(`a pizza ${numero} está pronta!`)
    }, 1000)
}

function preparandopedido(quantidade){
    console.log("Iniciando pedido...")
    for(let i = 1; i<= quantidade; i++){
        assarpizza(i)
    }
    console.log("pedido feito")
}

preparandopedido(4)