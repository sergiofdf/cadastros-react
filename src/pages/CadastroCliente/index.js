import {React, useState} from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';
import Select from "react-select";

export default function ClientRegister() {
  const history = useHistory();

  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientId, setClientId] = useState('');
  const [clientAdress, setClientAdress] = useState('');
  const [clientCity, setClientCity] = useState('');
  const [clientUF, setClientUF] = useState('');
  const [clientCEP, setClientCEP] = useState('')

  const customStyles = {
    control: base => ({
      ...base,
      height: 35,
      minHeight: 35
    })
  };

  const ufList = [
    { value: '', label: '' },
    { value: 'São Paulo', label: 'SP' },
    { value: 'Acre', label: 'AC' },
    { value: 'Alagoas', label: 'AL' },
    { value: 'Amapá', label: 'AP' },
    { value: 'Amazonas', label: 'AM' },
    { value: 'Bahia', label: 'BA' },
    { value: 'Ceará', label: 'CE' },
    { value: 'Distrito Federal', label: 'DF' },
    { value: 'Espírito Santo', label: 'ES' },
    { value: 'Goiás', label: 'GO' },
    { value: 'Maranhão', label: 'MA' },
    { value: 'Mato Grosso', label: 'MT' },
    { value: 'Mato Grosso do Sul', label: 'MS' },
    { value: 'Minas Gerais', label: 'MG' },
    { value: 'Pará', label: 'PA' },
    { value: 'Paraná', label: 'PR' },
    { value: 'Paraíba', label: 'PB' },
    { value: 'Pernambuco', label: 'PE' },
    { value: 'Rio de Janeiro', label: 'RJ' },
    { value: 'Rio Grande do Norte', label: 'RN' },
    { value: 'Rio Grande do Sul', label: 'RS' },
    { value: 'Rondônia', label: 'RO' },
    { value: 'Roraima', label: 'RR' },
    { value: 'Santa Catarina', label: 'SC' },
    { value: 'Sergipe', label: 'SE' },
    { value: 'Tocantins', label: 'TO' }
  ];

  function cadastrarCliente(){
    if(clientId===''  || clientName==='' || clientEmail==='' || clientPhone==='' || clientAdress==='' || clientCity==='' || clientUF==='' || clientCEP ===''){
      alert('Campo obrigatório vazio. Preencha por favor!');
    }else{

      if(localStorage.getItem('clientRepository') == null){
        let clientData = [{
          "cpf": clientId, 
          "nome": clientName, 
          "email": clientEmail,
          "phone": clientPhone,
          "endereco": clientAdress,
          "cidade": clientCity,
          "uf": clientUF,
          "cep": clientCEP
        }];
        localStorage.setItem('clientRepository', JSON.stringify(clientData));
      }else{
        let clientData = JSON.parse(localStorage.getItem('clientRepository'));
        clientData.push({
          "cpf": clientId, 
          "nome": clientName, 
          "email": clientEmail,
          "phone": clientPhone,
          "endereco": clientAdress,
          "cidade": clientCity,
          "uf": clientUF,
          "cep": clientCEP
      });
        localStorage.setItem('clientRepository', JSON.stringify(clientData));
      }
      setClientName('');
      setClientEmail('');
      setClientPhone('');
      setClientId('');
      setClientAdress('');
      setClientCity('');
      setClientUF('');
      setClientCEP('');
  };
    }

  
  return (
    <S.HomeContainer>
          <S.Title>Cadastro de clientes</S.Title>
      <S.Content>
        <S.Form>
          <S.Label>Nome</S.Label>
          <S.InputTexto className = "nome" placeholder="Digite seu nome" value={clientName} onChange={e => setClientName(e.target.value)}></S.InputTexto>
          <S.Label>Email</S.Label>
          <S.InputTexto className="email" type="email" placeholder="email@email.com" value={clientEmail} onChange={e => setClientEmail(e.target.value)}></S.InputTexto>
          <S.Label>Telefone</S.Label>
          <S.InputTexto className="telefone" type="number" placeholder="99 99999 9999" value={clientPhone} onChange={e => setClientPhone(e.target.value)}></S.InputTexto>
          <S.Label>CPF</S.Label>
          <S.InputTexto className="cpf" type="number" placeholder="Digite somente números" value={clientId} onChange={e => setClientId(e.target.value)}></S.InputTexto>
          <S.Label>Endereço</S.Label>
          <S.InputTexto className="endereco" value={clientAdress} onChange={e => setClientAdress(e.target.value)}></S.InputTexto>
          <S.Label>Cidade</S.Label>
          <S.InputTexto className="cidade" value={clientCity} onChange={e => setClientCity(e.target.value)}></S.InputTexto>
          <S.Label>UF</S.Label>
          <Select 
            className="uf"
            classNamePrefix="select"
            defaultValue={clientUF}
            name="uf"
            options={ufList}
            styles={customStyles}
            onChange={e => setClientUF(e.value)}
           />
          <S.Label>CEP</S.Label>
          <S.InputTexto className="cep" type="number" autoComplete="false" placeholder="Digite somente números" value={clientCEP} onChange={e => setClientCEP(e.target.value)}></S.InputTexto>
          <S.Label></S.Label>
          <S.Button type="button" onClick={cadastrarCliente}>Cadastrar cliente</S.Button>
          <S.Label></S.Label>
          <S.Button type="button" onClick={()=>{history.push('/clientRepository')}}>Clientes Cadastrados</S.Button>
          <S.Label></S.Label>
          <S.Button type="button" onClick={()=>{history.push('/')}}>Home</S.Button>
        </S.Form>
                
      </S.Content>
    </S.HomeContainer>
  );
}
