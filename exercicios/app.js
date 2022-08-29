/************************************************************
 * 
 * Objetivo:        arquivo que exibe todos os núimeros pares e ímpares
 * autor:           lucas camilo
 * Data Criacao:    25/08/2022
 * versao:          1.0
 * 
 *************************************************************/

const { ParImpar, impar, par } = require('./modulos/ParImpar.js')

var readline = require('readline')
const { exit } = require('process')

var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o primeiro numero \n', function (numeroI){
    let numI = parseFloat(numeroI)

    if( numeroI == ''){
        console.log('O campo deve ser prenchido')
        exit()
    }

    entradaDados.question('Digite o segundo numero \n', function(numeroF){
        let numF = parseFloat(numeroF)

        if( numeroF == ''){
            console.log('O campo deve ser prenchido')
            exit()
        }
        let NumPar = par(numI, numF) 
        let NumImpar = impar(numI, numF)
        let exibicao = ParImpar(NumPar, NumImpar)
        console.log(exibicao)
    })
})
