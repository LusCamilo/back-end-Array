
const listaProd = [
    'teclado',
    'branco',
    50.00,
    10
]
const listAlunos = ['Eduardo', 'Toninho' , 'Heitor' ,'Melissa', 'ana', 'perucci', 'Leozinhoooo']

const listaDisciplina = [
    'PWBE',
    'PWFE',
    'DB',
    'DM'
]
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
console.log('\n********************************\n')

listAlunos.push('arthur', 'lidia', 'isabelle')

console.log(listAlunos)
listAlunos.pop()

console.log('\n********************************\n')

listAlunos.unshift('enzo')
console.log(listAlunos)

console.log('\n********************************\n')

listAlunos.shift()
console.log(listAlunos)

console.log('\n********************************\n')

// let indice = listAlunos.indexOf('ana')
// console.log(indice)

console.log('\n********************************\n')

// listAlunos.splice(indice)
// console.log(listAlunos)

console.log('\n********************************\n')

const listaNovosAlunos = listAlunos.slice()
console.log(listaNovosAlunos)

console.log('\n********************************\n')

listaNovosAlunos.push(listaDisciplina)
console.log(listaNovosAlunos)

console.log('\n********************************\n')
let indice = listaNovosAlunos.indexOf(listaDisciplina)
console.log(listaNovosAlunos[indice].indexOf('DB'))

console.log('\n********************************\n')

console.log('\n********************************\n')



console.log('\n*********************************Trabalhando com JSON******************************\n')

const rep = 0


const listaContatos = [{

    nome: 'jose da silva',
    telefone: '11 1234-5678',
    email: 'jose.silva@gmail.com',
    carro: [
        {
            placa: 'abc-0666',
            modelo: 'corsa',
            cor: 'prata'
        },{
            placa: 'def-0777',
            modelo: 'fusca',
            cor: 'azul'
        }
    ]

},{

    nome: 'maria joaquina',
    telefone: '11 1458-8764',
    email: 'maria.joaquina@gmail.com'

}]






listaContatos[1].telefone = '11 8765-4321'


console.log('\nnome do contato: ' + listaContatos[rep].nome + '\nO email cadastrado ??:' + listaContatos[rep].email + '\ntelefone de contato: ' + listaContatos[rep].telefone)

console.log(listaContatos[0].carro[0].placa)


// splice == retira todos itens abaixo daquela posicao
// slice == copia uma estrutura de array em outra variavel
// forEach == varre toda a lista
// push == adiciona mais elementos
// pop == remove o ultimo elemento da lista
// unshift == adiciona ao primeiro lugar da lista um elemento
// indexOf == diz em que posicao o elemento esta
// length == lista quantas elementos tem na llista
//typeof == ediz de que tipo cada elemento ??
