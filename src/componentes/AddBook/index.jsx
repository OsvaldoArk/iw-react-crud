import React, { useEffect, useState } from "react";
import LivroDataService from '../../services/services';

function AddBook({codigoLivro,setCodigoLivro}){
    
    const [titulo,setTitulo] = useState("");
    const [autor,setAutor] = useState("");


    const updateHandler = async ()=>{

        try{
            const copiaLivro = await LivroDataService.mostraLivro(codigoLivro);
            console.log(copiaLivro.data());
            setTitulo(copiaLivro.data().titulo);
            setAutor(copiaLivro.data().autor);
        }catch(error){

        }
    }

    useEffect(()=>{
        if(codigoLivro !==undefined || codigoLivro !== ""){
            console.log(codigoLivro);
            updateHandler();
        }
        

    },[codigoLivro]);

    const handleSubmit = async (evento)=>{
        evento.preventDefault();
    
        const novoLivro = {
            titulo,
            autor
        }

        try{
            if(codigoLivro !== undefined || codigoLivro !== ""){
                await LivroDataService.updateLivro(codigoLivro, novoLivro);
            }
            await LivroDataService.addLivros(novoLivro);

            console.log("livro adicionado com sucesso.");

            setTitulo("");
            setAutor("");
        }catch(erro){

        }

        console.log(novoLivro);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Título</label>
                    <input
                    value={titulo}
                    onChange={evento => setTitulo(evento.target.value)}
                    className="form-control" type="text" required/>
                </div>
                <div className="mb-3">
                    <label>Autor</label>
                    <input 
                    value={autor}
                    onChange={evento => setAutor(evento.target.value)}
                    className="form-control" type="text" required/>
                </div>
                <button className="btn btn-primary">cadastrar</button>
            </form>
        </>
    );
}

export default AddBook;