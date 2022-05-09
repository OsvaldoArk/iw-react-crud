import AddBook from "./componentes/AddBook";
import ListBook from "./componentes/ListBook";
import 'bootstrap/dist/css/bootstrap.min.css';
import './estilo.css';
import { useState } from "react";

function App() {

  const [livroId,setLivroId] = useState('');

  const handlerLivro = (id) =>{
    console.log(id);
    setLivroId(id);
  }

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="">
            <AddBook codigoLivro={livroId}  setCodigoLivro={setLivroId}/>
          </div>
          <div className="">
            <ListBook recuperaLivro={handlerLivro}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
