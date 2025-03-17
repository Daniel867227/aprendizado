import listas from "./bancoDeDados.js";

class Pessoa {
  constructor(nome, nota) {
    this.nome = nome;
    this.nota = nota;
  }

  salvarBanco(lista) {
    lista.push({
      nome: this.nome,
      nota: this.nota,
    });

    return lista;
  }

  drawDados(destinoDom, lista) {

    lista.forEach((index) => {

      destinoDom.innerHTML=''
      
      const div = document.createElement("div");
      div.getAttribute("class", "resultados");
      const pNome = document.createElement("p");
      pNome.innerHTML = this.nome;
      const pNota = document.createElement("p");
      pNota.innerHTML = this.nota;
      const botaoDelete = document.createElement("button");
      const pBotao = document.createElement("p");
      pBotao.innerHTML = "Deletar";

      div.appendChild(pNome);
      div.appendChild(pNota);
      botaoDelete.appendChild(pBotao);
      div.appendChild(botaoDelete);

      destinoDom.appendChild(div);

      botaoDelete.addEventListener("click", () => {
        lista.splice(index, 1);
        this.drawDados(destinoDom, lista);
        console.log(lista);
      });
    });
  }
}

const botaoAluno = document.getElementById("botaoAluno");
botaoAluno.addEventListener("click", clicarAluno);

function clicarAluno() {
  let nomeAluno = document.getElementById("nomeAluno").value;
  let notaAluno = document.getElementById("notaAluno").value;

  let alunoCadastrado = new Pessoa(nomeAluno, notaAluno);

  let resultados = document.getElementById("resultados");

  alunoCadastrado.drawDados(resultados, listas.alunos);

  alunoCadastrado.salvarBanco(listas.alunos);

  console.log(listas.alunos);
}

const botaoProfessor = document.getElementById("botaoProfessor");
botaoProfessor.addEventListener("click", clicarProfessor);

function clicarProfessor() {
  let nomeProfessor = document.getElementById("nomeProfessor").value;
  let notaProfessor = document.getElementById("notaProfessor").value;

  let professorCadastrado = new Pessoa(nomeProfessor, notaProfessor);

  let resultados = document.getElementById("resultados");

  professorCadastrado.drawDados(resultados, listas.professores);

  professorCadastrado.salvarBanco(listas.professores);

  console.log(listas.professores);
}
