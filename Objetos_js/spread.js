const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12212121',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['999999', '99993'],
    enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '45',
      complemento: 'apto 43'
    },
    {
      rua: 'Rua Dona Clotilde',
      numero: '71',
      complemento: null
    }]
  }
  
  function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
  }
  
  exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
  exibirTelefones(...estudante.telefones);
  
  const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
  }
  
  console.log(dadosEnvio);

  //Espalhamos o objeto endereço com o Spread Operator e sempre vamos querer buscar o primeiro endereço.