/************************************************************
 * 
 * Objetivo:        arquivo que organiza númneros pares e ímpares
 * autor:           lucas camilo
 * Data Criacao:    25/08/2022
 * versao:          1.0
 * 
 *************************************************************/




const par = function (numeroI, numeroF) {
    
    let numI = numeroI
    let numF = numeroF
    const pares = []

    for (numI ; numI <= numF; numI++) {
        if (numI % 2 == 0) {
            pares.push(numI)
        }
    }
    return pares
}
const impar = function (numeroI, numeroF) {
    
    let numI = numeroI
    let numF = numeroF
    const impares = []

    for (numI ; numI <= numF; numI++) {
        if (numI % 2 != 0) {
    
            impares.push(numI)   
        }
    } 
    return  impares
}
const ParImpar = function (pares, impares) {
        
   const exibicao = [
        pares,
        impares
    ]
   return exibicao
}

module.exports = {
    par,
    impar,
    ParImpar
}