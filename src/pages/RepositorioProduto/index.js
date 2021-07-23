import React, {useState, useEffect} from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


export default function ProductTable() {
  const history = useHistory();
  const [productRepository, setRepositories] = useState([]);
  const [headers, setHeaders] = useState([]);

  useEffect(()=>{
    let productRepository = localStorage.getItem('productRepository');
    if(productRepository!== null){
        let productRepositoryTable = JSON.parse(productRepository);
        setRepositories(productRepositoryTable);
        setHeaders(Object.keys(productRepositoryTable[0]));
    }else{
        alert('Não existem Produtos Cadastrados Ainda!')
        history.push('/product')
    }
    }, [history]);


    return(
        <S.HomeContainer>
        <S.Title>Tabela de Produtos Cadastrados</S.Title>
        <S.Content>
        <S.Table>
            <S.TableHead>
            <S.TableRow key={"Header"}>
                <S.TableIndex>ID</S.TableIndex>
                <S.TableIndex>Nome</S.TableIndex>
                <S.TableIndex>Preço</S.TableIndex>
                <S.TableIndex>Marca</S.TableIndex>
                <S.TableIndex>Tamanho</S.TableIndex>
                <S.TableIndex>Quantidade</S.TableIndex>
            </S.TableRow>
            </S.TableHead>
            <S.TableBody>
            { productRepository.map(produto => {
                return <tr>{ headers.map(header => <S.TableColumn>{produto[header]}</S.TableColumn>) }</tr>
              }) }
            </S.TableBody>
        </S.Table>
        </S.Content>
          <S.Label></S.Label>
          <S.Button type="button" onClick={()=>{history.push('/')}}>Home</S.Button>
          <S.Label></S.Label>
          <S.Button type="button" onClick={()=>{history.push('/product')}}>Tela Cadastro</S.Button>
          
        </S.HomeContainer>
      );
}
