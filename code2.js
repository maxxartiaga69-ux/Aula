function assarpizza(numero, deucerto){
    const promise = new Promise((resolve, reject) => {
        console.log(`começando a assar a pizza ${numero}...`)
        setTimeout(()=>{
            if(deucerto){
                console.log(`a pizza ${numero} está pronta!`)
                resolve(`dados da pizza ${numero}`)
            }else{
                reject(`a pizza ${numero} deu errado`)
            }
        }, 10000)
    })

    return promise
}

console.log("Iniciando pedido...")
assarpizza(1, true)
    .then(() => {
        return assarpizza(2, true)
    })
    .then(() => {
        console.log("Pedido finalizado")
    })