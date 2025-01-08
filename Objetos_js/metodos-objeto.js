const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12666666',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['9999998', '5566666'],
    // enderecos: [{
    //   rua: 'Rua Joseph Climber',
    //   numero: '47',
    //   complemento: 'apto 43'
    // },
    // {
    //   rua: 'Rua Dona Clotilde',
    //   numero: '71',
    //   complemento: null
    // }]
  }
  
  const chavesObjeto = Object.keys(estudante);
  console.log(chavesObjeto);
  
  if (!chavesObjeto.includes('enderecos')) {
    console.error('É necessário ter um endereço cadastrado.')
  }

  //Object.keys() gera um array com todas as chaves.
  //Object.entries() cria um array com arrays contendo as duas informações: a chave e o valor.
  //Object.values() retorna um array com os valores.