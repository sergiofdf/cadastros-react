import styled from 'styled-components';


export const HomeContainer = styled.div`
box-sizing: border-box;
display: box;
justify-content: center;
height: 100vh;
background: #0044c2  ;
padding:1rem;
`


export const Title = styled.p`
font-size: 1.5rem;
color: cornsilk;
`

export const Content = styled.div`
width: 100vw; 
resize: both; 
overflow: auto;
`

export const Form = styled.form`
width: 80%;
display: grid;
grid-template-columns: 80px 250px;
grid-gap:10px;
margin: 10px 0;
`

export const Label = styled.label`
color: #fff;
`
export const InputTexto = styled.input`

`

export const Button = styled.button`
width:250px;
height: 2rem;
font-size: 1rem;
border: 1px solid #000;
background: #000;
color: #fff;
border-radius:.25rem;
cursor:pointer;
`
