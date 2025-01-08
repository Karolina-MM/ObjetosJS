const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123121212',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['55111118', '5511933333'],
    endereco: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 73'
    }]
  }
  
  estudante.endereco.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: null
  })
  
  // console.log(estudante.endereco);
  // console.log(estudante.endereco[1]);
  
  const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)
  
  console.log(listaEnderecosComComplemento);