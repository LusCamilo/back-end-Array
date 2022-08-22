const lista = [
    'josé', 
    'maria', 
    'carlos'
]
const listaProd = [
    'teclado',
    'branco',
    50.00,
    10
]
const listAlunos = ['Eduardo', 'Toninho' , 'Heitor' ,'Melissa', 'Leozinhoooo']
//exibindo cada dado do array
console.log(lista)

//exibindo o tipo de dado 
console.log(typeof(listaProd[3]))

//exibindo um dado especifico
console.log(listaProd[0])


//exibindo qtde de itens dentro de uma array
console.log('qtde de itens dentro de uma array:' + listaProd.length)


//exibindo todos os itens dentro de uma array com lacos de repeticao
let cont = 0

//exemplo utilizando while
while (cont < listAlunos.length) {
    console.log('o aluno da turma DS2M ' + listAlunos[cont])
    cont++
}


for (let cont = 0; cont < listAlunos.length; cont++) {
    console.log('o aluno da turma DS2M ' + listAlunos[cont])
    cont++
    
}

listAlunos.forEach(function(item) {
    console.log('o aluno da turma DS2M e: ' + item)
})

for (const item of listAlunos) {
    console.log('\n o aluno da turma DS2M e: ' + item)
}
listAlunos.push('arthur', 'lidia', 'isabelle')
console.log(listAlunos)