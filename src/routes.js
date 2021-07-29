import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './componetes/Header';
import Erro from './paginas/Erro';
import Favoritos from './paginas/Favoritos';
import Filme from './paginas/Filme';
import Home from './paginas/Home';


const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/filme/:id" component={Filme}/>
            <Route exact path="/favoritos" component={Favoritos}/>
            <Route path="*" component={Erro}/>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;