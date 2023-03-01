let alunos = [
    { nome: "Danilo", nota: 8 },
    { nome: "Filipe", nota: 7 },
    { nome: "Andre", nota: 5 },
    { nome: "Julio", nota: 9 },
    { nome: "Rafael", nota: 8 }
];

// com ECMASCRIPT // 
const alunoAPR = alunos.filter(aluno => aluno.nota >= 6);
// console.log(alunoAPR)

// JAVASCRIPT //
const alunoAPP = alunos.filter(function filtrar(alunos){
    return alunos.nota >= 6
} )
// console.log(alunoAPP)

// Utilizando loop For
let alunoAPRs = [];
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nota >= 6) {
        alunoAPRs.push(alunos[i]);
    }
}
// console.log(alunoAPRs);