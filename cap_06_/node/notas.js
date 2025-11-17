const prompt = require('prompt-sync')();
/*
 *      01- Elabore um programa que leia nome e nota de 'n'alunos até o usuário digitar 'fim'
 *          no nome. Após, verifique e exiba a maior nota da turma. Se a maior nota for superior
 *          ou igual a 7, exiba os alunos que a obtiveram. Caso Contrário, exiba a menssagem 
 *          "Não há alunos destaques na turma". 
 */
const boletimTurma = []; 
do{
    const userName = prompt('Digite o nome do aluno: ');
    if(userName.toLowerCase() === 'fim'){
        console.log('\n');
        break;
    }
    const notaAluno = Number(prompt('Digite a nota do Aluno: '));
    boletimTurma.push({nome: userName, nota:notaAluno});
    console.log('\n');
}while(true);
const aprovados = boletimTurma.filter((alunos) => alunos.nota >= 7);
const maiorNota = aprovados.reduce((a,b) => Math.max(a, b.nota), 0);
const destaques = boletimTurma.filter((alunos) => alunos.nota === maiorNota);
console.log("\n----------------Alunos Destaques----------------\n");
destaques.forEach((alunos) => {
    console.log(`Aluno: ${alunos.nome} - Nota ${alunos.nota}\n`);
});
console.log("\n----------------APROVADOS----------------\n");
if(aprovados.length == 0){
    console.log("Não há alunos destaques na turma.");
}else{
    aprovados.forEach((alunos) => {
        console.log(`Aluno: ${alunos.nome} - Nota: ${alunos.nota}\n`)
    });
}