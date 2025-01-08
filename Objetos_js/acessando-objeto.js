const estudante = {
    nome: 'Zé',
    idade: 12,
    cpf: '12222',
    turma: 'JavaScript'
  }
  
  estudante.nome //Zé
  
  function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
  }
  
  console.log(estudante.pet); //undefined
  console.log(estudante['pet']); //undefined
  
  console.log(estudante['nome']);
  console.log(estudante['cpf']);
  
  console.log(exibeInfoEstudante(estudante, 'nome'));
  console.log(exibeInfoEstudante(estudante, 'cpf'));