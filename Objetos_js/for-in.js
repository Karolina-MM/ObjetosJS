const estudante = {
    nome: 'Karol',
    idade: 32,
    cpf: '11212121',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['888998', '999999993'],
    enderecos: [{
      rua: 'Rua Joseph Climber',
      numero: '44',
      complemento: 'apto 43'
    },
    {
      rua: 'Rua Dona Clotilde',
      numero: '73',
      complemento: null
    }]
  }
  
  for (let chave in estudante) {
    const tipo = typeof estudante[chave]; //Não existe typeof array
    if (tipo !== 'object' && tipo !== 'function') {
      const texto = `A chave ${chave} tem o valor: ${estudante[chave]}`
      console.log(texto);
    }
  }