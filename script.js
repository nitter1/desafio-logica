let cadastro = {
    nome:"",
    idade:"",
    cidade:"",
    nota:"",
}

//ultilizar um estrutura logica para adicionar um valor a propriedade


if (cadastro.nome === "") {
    cadastro.nome = prompt("Digite o seu nome")
    console.log(cadastro.nome)
} else {
    prompt("Vazio")
}

if (cadastro.idade === "") {
    cadastro.idade = Number(prompt("Digite a sua idade"))
    console.log(cadastro.idade)
} else {
    prompt("Vazio")
}

if (cadastro.cidade === "") {
    cadastro.cidade = prompt("Digite a sua cidade")
    console.log(cadastro.cidade)
} else {
    prompt("Vazio")
}

if (cadastro.nota === "") {
    cadastro.nota = Number(prompt("Digite a sua nota"))
    console.log(cadastro.nota)
} else {
    prompt("Vazio")
}