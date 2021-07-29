import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './favoritos.css';
import { toast } from 'react-toastify';

export default function Favoritos(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista || []));
    },[]);

    function filmeDelet(id, nome){
        let filtroFilmes = filmes.filter((item)=> {
            return(item.id !== id);
        });

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
        toast.success(`${nome} excluido com sucesso!`);
    }

    return(
        <div id="meus-filmes">
            <h1>Favoritos</h1>

            {filmes.length === 0 && <span>Você não tem filme salvo :(</span>}

            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.nome}</span>

                            <div>
                                <button><Link to={`/filme/${item.id}`}>Ver detahles</Link></button>
                                <button onClick={() => filmeDelet(item.id, item.nome)}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );

}