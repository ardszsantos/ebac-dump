type aluno = {
    nome: string;
    cursos?: string[];
    idade: number;
}



const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-End", 'UX/UI'],
        idade: 27,
    },

    {
        nome: "Ana",
        cursos: ["Front-End", 'Python'],
        idade: 23,
    }
]


const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}

alunos.push



function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}