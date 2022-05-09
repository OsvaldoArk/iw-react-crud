import {db} from "../firebase";
import { collection,getDocs,getDoc,addDoc,updateDoc,deleteDoc,doc } from "firebase/firestore";

const livroColectionRef = collection(db,"loja");

class LivroDataService{

    addLivros = (novoLivro) => {
        return addDoc(livroColectionRef,novoLivro);
    }

    updateLivro = (id, livroAtualizado) =>{
        const livroReq = doc(db, "loja", id);

        return updateDoc(livroReq, livroAtualizado);
    }

    deletaLivro = (id) =>{
        const livroReq = doc(db, "loja", id);

        return deleteDoc(livroReq);
    }
    
    mostraLivro = (id) =>{
        const livroReq = doc(db,"loja",id);
        
        return getDoc(livroReq);
    }

    mostraLivros = () =>{ return getDocs(livroColectionRef)}
}

export default new LivroDataService();