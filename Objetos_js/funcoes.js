const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '123444444',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['9999998', '5555555'],
    media: 9.5,
    estaAprovado: function(mediaBase) {
      return this.media >= mediaBase ? true : false
    }
  }
  
  console.log('Oi!');
  console.log(estudante.estaAprovado(7));