import axios from "axios"
import {use, useState} from "react"

function App() {
  function MostrarDados() {
    const response = axios.get('http://localhost:8000/api/')
      .then((data) => setDados(data.data))
      .catch((err) => console.log(err));
     
  }

  async function EnviarDados(e) {
    e.preventDefault()
    const dados = {
      nome: nome,
      preco: preco,
    };

    const response = await axios.post("http://localhost:8000/api/", dados)
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
  }



  const [nome, setNome] = useState()
  const [preco, setPreco] = useState()
  const [dados, setDados] = useState([])



  return (
    <div>

      <div>
          <button onClick={MostrarDados}> MOSTRAR DADOS DO BACKEND</button>
      </div>
      <div>
            <form onSubmit={EnviarDados}>
                <div>
                    <label htmlFor="name">Digite o nome</label>
                    <input 
                    type='text'
                    id='name'
                    onChange={(e)=> setNome(e.target.value)}  />
                </div>
              
      
                <div>
                    <label htmlFor="preco">Digite o preco</label>
                    <input 
                    type='text' 
                    id='preco'
                    onChange={(e)=> setPreco(e.target.value)}/>
                </div>

                <div>
                  <input type='submit' value='cadastrar'/>
                </div>

                <div>
                  <h1>Dados do backend</h1>
                  <ul>
                    {dados.map((item,index)=>
                      <li key={index}> {item.nome} - {item.preco}
                        <button>Editar</button>
                      </li>
                    )}
                  </ul>
                </div>
          



            </form>

      </div>



    </div>




);
}

export default App;
