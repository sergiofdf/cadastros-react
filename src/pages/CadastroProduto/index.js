import React, {useState} from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function ProductRegister() {
  const history = useHistory();

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productSize, setProductSize] = useState('');
  const [productQuantity, setProductQuantity] = useState('');

  function cadastrarProduto(){
    if(productName==='' ||productPrice==='' ||productBrand==='' ||productSize==='' ||productQuantity===''){
      alert('Campo obrigatório vazio. Preencha por favor!');
    }else{

      if(localStorage.getItem('productRepository') == null){
        let id = 1;
        let productData = [{
          "id": "000"+ id.toString(), 
          "nome": productName, 
          "preco": "R$ " + productPrice,
        "marca": productBrand,
        "tamanho":productSize,
        "quantidade": productQuantity}];
        localStorage.setItem('productRepository', JSON.stringify(productData));
      }else{
        let productData = JSON.parse(localStorage.getItem('productRepository'));
        let id = productData.length + 1;
        productData.push({
          "id": "000"+ id.toString(),
          "nome": productName, 
          "preco": "R$ " + productPrice,
          "marca": productBrand,
          "tamanho":productSize,
          "quantidade": productQuantity
        });
        localStorage.setItem('productRepository', JSON.stringify(productData));
      }
      setProductName('');
      setProductPrice('');
      setProductBrand('');
      setProductSize('');
      setProductQuantity('');
  };
    };
  
  return (
    <S.HomeContainer>
          <S.Title>Cadastro de Produtos</S.Title>
      <S.Content>
        <S.Form>
          <S.Label>Nome</S.Label>
          <S.InputTexto className = "nomeProduto" placeholder="Digite o nome do produto" value={productName} onChange={e => setProductName(e.target.value)}></S.InputTexto>
          <S.Label>Preço</S.Label>
          <S.InputTexto className="preco" type="number" value={productPrice} onChange={e => setProductPrice(e.target.value)}></S.InputTexto>
          <S.Label>Marca</S.Label>
          <S.InputTexto className="marca" value={productBrand} onChange={e => setProductBrand(e.target.value)}></S.InputTexto>
          <S.Label>Tamanho</S.Label>
          <S.InputTexto className="tamanho" type="number" value={productSize} onChange={e => setProductSize(e.target.value)}></S.InputTexto>
          <S.Label>Quantidade</S.Label>
          <S.InputTexto className="quantidade" type="number" value={productQuantity} onChange={e => setProductQuantity(e.target.value)}></S.InputTexto>
          <S.Label></S.Label>
          <S.Button type="button" onClick={cadastrarProduto}>Cadastrar produto</S.Button>
          <S.Label></S.Label>
          <S.Button type="button" onClick={()=>{history.push('/productRepository')}}>Produtos Cadastrados</S.Button>
          <S.Label></S.Label>
          <S.Button type="button" onClick={()=>{history.push('/')}}>Home</S.Button>
        </S.Form>
                
      </S.Content>
    </S.HomeContainer>
  );
}
