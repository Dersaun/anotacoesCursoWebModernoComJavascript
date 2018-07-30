//FLAT MAP ACHATA UMA MATRIZ EM UM ÚNICO ARRAY

const escola = [
    {
        nome:'Turma M1',
        alunos: [
            { nome: 'Gustavo', nota: 8.1 },
            { nome: 'Ana', nota: 9.3 }
        ]
    },
    {
        nome:'Turma M2',
        alunos: [
            { nome: 'Rebeca', nota: 8.9 },
            { nome: 'Roberto', nota: 7.3 }
        ]
    },
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)

Array.prototype.flatMap = function(call) {
    return Array.prototype.concat.apply([], this.map(call))
}

const notas2 = escola.flatMap(getNotasDaTurma)

console.log(notas2)