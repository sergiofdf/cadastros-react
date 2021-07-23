import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import ClientRegister from './pages/CadastroCliente';
import ProductRegister from './pages/CadastroProduto';
import Home from './pages/Home';
import ProductTable from './pages/RepositorioProduto';
import ClientTable  from './pages/RepositorioCliente';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>  
                <Route path='/client' component={ClientRegister}/>
                <Route path='/product' component={ProductRegister}/>
                <Route path='/productRepository' component={ProductTable}/>
                <Route path='/clientRepository' component={ClientTable}/>
            </Switch>
        </BrowserRouter>
    )   
}