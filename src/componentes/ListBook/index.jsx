import React, { useEffect, useState } from "react";
import LivroDataService from "../../services/services";

function ListBook({recuperaLivro}){

    const [livros,setLivros] = useState([]);

    useEffect(()=>{
        mostraLivros();
    },[]);

    const mostraLivros = async ()=>{
        
        try{
            const dados = await LivroDataService.mostraLivros();
            
            setLivros(dados.docs.map((doc)=>({...doc.data(),id:doc.id})));

        }catch(erro){
            console.log(erro);
        }
    }

    const handlerDelete = async (id) =>{

        try{
            await LivroDataService.deletaLivro(id);
            mostraLivros();
        }catch(error){
            console.log(error)
        }
    }

    const handlerLivroZ = (id) =>{
        //setLivroId(id);
        console.log(id);
      }

    return (
        <>
            <hr />
            <button className="btn btn-success mt-2 mb-2" onClick={mostraLivros}>refresh</button>
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro,index)=>{
                            return(
                                <tr key={livro.id}>
                                    <td>{livro.id}</td>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.autor}</td>
                                    <td>
                                        <button className="btn btn-primary m-1" onClick={evento => recuperaLivro(livro.id)}>update</button>
                                        <button className="btn btn-danger m-1" onClick={evento=>handlerDelete(livro.id)}>delete</button>
                                    </td>
                                </tr>
                            );
                        })}              
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListBook;