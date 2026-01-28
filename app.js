var readline =require("readline")

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite seu nome: ", function(nomeUsuario){
    entradaDeDados.question("Digite o primeiro número: ", function(n1){
        entradaDeDados.question("Digite o segundo número: ", function(n2){
            entradaDeDados.question("Digite o terceiro número: ", function(n3){
                console.log(`Seu nome é: ${nomeUsuario}, e a soma dos três números é ${Number(n1) + Number(n2) + Number(3)} `)
            })
        })
    })
}) 