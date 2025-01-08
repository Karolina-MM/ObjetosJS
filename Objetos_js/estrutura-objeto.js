const estudante = {
    nome: 'Karol',
    idade: 21,
    cpf: '121233333',
    turma: 'JavaScript'
  }
  
  console.log(estudante.nome);
  console.log(`O nome de estudante é: ${estudante.nome}`);
  console.log(`Os três primeiros números do CPF são: ${estudante.cpf.substring(0, 3)}`);