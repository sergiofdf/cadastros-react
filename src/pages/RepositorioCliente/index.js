import React, {useState, useEffect} from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


export default function ClientTable() {
  const history = useHistory();
  const [clientRepository, setRepositories] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(()=>{
    let clientRepository = localStorage.getItem('clientRepository');
    if(clientRepository!== null){
        let clientRepositoryTable = JSON.parse(clientRepository);
        setRepositories(clientRepositoryTable);
        setHeaders(Object.keys(clientRepositoryTable[0]));
    }else{
      alert('Não existem Clientes Cadastrados Ainda!')
      history.push('/product')
    }
    }, [history]);


    return(
        <S.HomeContainer>
        <S.Title>Tabela de Clientes Cadastrados</S.Title>
        <S.Content>
        <S.Table>
            <S.TableHead>
            <S.TableRow key={"Header"}>
                <S.TableIndex>CPF</S.TableIndex>
                <S.TableIndex>Nome</S.TableIndex>
                <S.TableIndex>Email</S.TableIndex>
                <S.TableIndex>Tel</S.TableIndex>
                <S.TableIndex>Endereço</S.TableIndex>
                <S.TableIndex>Cidade</S.TableIndex>
                <S.TableIndex>UF</S.TableIndex>
                <S.TableIndex>CEP</S.TableIndex>
            </S.TableRow>
            </S.TableHead>
            <S.TableBody>
            { clientRepository.map(cliente => {
                return <tr>{ headers.map(header => <S.TableColumn>{cliente[header]}</S.TableColumn>) }</tr>
              }) }
            </S.TableBody>
        </S.Table>
        </S.Content>
          <S.Label></S.Label>
          <S.Button type="button" onClick={()=>{history.push('/')}}>Home</S.Button>
          <S.Label></S.Label>
          <S.Button type="button" onClick={()=>{history.push('/client')}}>Tela Cadastro</S.Button>
          
        </S.HomeContainer>
      );
}
