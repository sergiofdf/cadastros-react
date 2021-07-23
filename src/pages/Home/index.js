import React from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import faceLogo from '../imagesPages/facebook.svg'
import instaLogo from '../imagesPages/instagram.svg'
import githubLogo from '../imagesPages/github.svg'

function App() {
  const history = useHistory();

  function handleCliente(){
      history.push('/client');
  }

  function handleProduto(){
    history.push('/product');
  }
  
  return (
    <S.HomeContainer>
      <S.HeaderContent>
          <S.Title>Loja de Sapatos SML</S.Title>
          <S.Texto>Cadastro de clientes e produtos</S.Texto>
      </S.HeaderContent>
      <S.Content>
        <S.Lista>
            <S.Itens>
                <S.Button type="button" onClick={handleCliente}>Cadastrar cliente</S.Button>
            </S.Itens>
            <S.Itens>
                <S.Button type="button" onClick={handleProduto}>Cadastrar produtos</S.Button>
            </S.Itens>
        </S.Lista>
      </S.Content>
      <S.Footer>
        <S.TextoFooter>Desafio 2 | Programa Hiring Coders</S.TextoFooter>
        <S.iconsDiv>
          <S.Icones src={faceLogo}></S.Icones>
          <S.Icones src={instaLogo}></S.Icones>
          <S.Icones src={githubLogo}></S.Icones>
        </S.iconsDiv>
      </S.Footer>
    </S.HomeContainer>
  );
}

export default App;