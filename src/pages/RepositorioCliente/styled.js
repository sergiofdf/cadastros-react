import styled from 'styled-components';


export const HomeContainer = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column; 
align-items: center;
justify-content: center;
height: 100vh;
background: #0044c2 ;
padding:1rem;
margin:0;
width=100%;
`


export const Title = styled.p`
font-size: 1.5rem;
color: cornsilk;
`

export const Content = styled.div`
width: 100%;
display:flex;
flex-direction: column; 
align-items: center;
justify-content: center;
resize: both; 
overflow: auto;  
`

export const Table = styled.table`
color:#fff;
font-family:'Roboto';
padding: 0.5rem;
text-align: Center;
border-collapse: collapse;
resize: both; 
overflow: auto; 
`

export const TableHead = styled.thead`
`

export const TableBody = styled.tbody`
`

export const TableRow = styled.tr`
`

export const TableIndex = styled.th`
font-family:'Roboto';
border: 1px solid #000;
  padding: 0.5rem;
  text-align: Center;
`

export const TableColumn = styled.td`
font-family:'Roboto';
border: 1px solid #000;
padding: 0.5rem;
text-align: Center;
`

export const Label = styled.label`
color:#fff;
`

export const Button = styled.button`
width:200px;
height: 2rem;
font-size: 1rem;
border: 1px solid #000;
background: #000;
color: #fff;
border-radius:.25rem;
cursor:pointer;
margin:5px;
`