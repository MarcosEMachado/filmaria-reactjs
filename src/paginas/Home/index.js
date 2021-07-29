import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom';
import './home.css';


function Home() {

  const [filmes, setFimes] = useState([]);
  const [laoding, setLaoding] = useState(true);

  useEffect(() =>{

    async function loadFilmes(){
      const response = await api.get('r-api/?api=filmes');
      //console.log(response.data);
      setFimes(response.data);
      setLaoding(false);
    }

    loadFilmes();

  }, []);

    if(laoding){
      return(
        <div className="filme-info">
            <h1>Caregando a lista de Filmes... </h1>
        </div>
    );
    }
    return (
      <div className="container">
        <div className="lista-filmes">
          {filmes.map((filme)=>{
            return(
              <article key={filme.id}>
                <strong>{filme.nome}</strong>
                <img src={filme.foto} alt={filme.nome} />
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Home;