import { contatos } from "./bancoContatos.js";

const methods = {
  getTodosContatos: function () {
    return contatos;
  },

  getContato: function (i_cont) {
    return contatos[i_cont];
  },

  drawContacts: function (destinoDOM) {
    destinoDOM.innerHTML = "";

    contatos.forEach((contato, index) => {
      const div = document.createElement("div");
      div.setAttribute("class", "contato");
      const p_nome = document.createElement("p");
      p_nome.innerHTML = contato.nome;
      const p_telefone = document.createElement("p");
      p_telefone.innerHTML = contato.telefone;
      const p_email = document.createElement("p");
      p_email.innerHTML = contato.email;
      const botao = document.createElement("button");
      botao.setAttribute("class", "botao");
      const p_botao = document.createElement("p");
      botao.appendChild(p_botao);
      p_botao.innerHTML = "deletar";
      div.appendChild(botao);

      div.appendChild(p_nome);
      div.appendChild(p_telefone);
      div.appendChild(p_email);
      destinoDOM.appendChild(div);

      botao.addEventListener("click", () => {
        contatos.splice(index, 1);

        this.drawContacts(destinoDOM);
        console.log(this.getTodosContatos())
      });
    });
  },      

  addContato: function (novoContato, destinoDOM) {
    contatos.push({
      nome: novoContato.nome,
      telefone: novoContato.telefone,
      email: novoContato.email,
    });

    this.drawContacts(destinoDOM);
    console.log(this.getTodosContatos());
  },
};

export default methods;
