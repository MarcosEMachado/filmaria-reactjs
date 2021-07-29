import './erro.css';
import { useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Erro(){

const [seconds, setSeconds] = useState(10);
const history = useHistory();

    useEffect(() => {
        const interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if(seconds < 0){
        history.replace('/');
    }

    return(
        <div className="erro">
            <h1>404</h1>
            <h2>Pagina não encontrada!</h2>
            <h3>{`Em 10 segundos você será direcinonado para HOME... ${seconds}`}</h3>
        </div>
    );
}