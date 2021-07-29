import { useEffect, useState } from 'react';
import './filme.css';
import { useParams, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { toast } from 'react-toastify';

export default function Filme (){
    const { id } = useParams();
    const [filme, setFilme ] = useState([]);
    const [laoding, setLaoding] = useState(true);
    const history = useHistory();

    useEffect(()=> {
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            if (response.data.length === 0){
                ///a api retornou sem dado, mando para home
                history.replace('/');
                return;
            }
            //console.log(response.data.id);
            setFilme(response.data);
            setLaoding(false);
        }
        loadFilme();
        return () => {
            console.log('componente desmontado');
        }
    }, [id,history])

    function salvarFilme(){
        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        //se tiver algum filme salvo com o mesmo id, a função some do js vai retornar verdadeiro
        const hasFilme = filmesSalvos.some((filmeSalvo)=> filmeSalvo.id === filme.id);

        if(hasFilme){
            //alert('Essa filme ja está salvo...');
            toast.info('Essa filme ja está salvo...');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        //alert('Filme salvo');
        toast.success(`${filme.nome} salvo com sucesso!`);
    }

    if(laoding){
        return(
            <div className="filme-info">
                <h1>Caregando seu Filme... </h1>
            </div>
        );
    }else{
        return(
            <div className="filme-info">
                <h1>{filme.nome}</h1>
                <img src={filme.foto} alt={filme.nome} />
                <h3>Sinopse</h3>
                {filme.sinopse} <br/>
                id : {filme.id}

                <div className="botoes">
                    <button onClick={salvarFilme}>Salvar</button>
                    <button>
                        <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} Trailer`}>
                            Trailer</a>
                    </button>
                </div>
            </div>
        );
    }
}