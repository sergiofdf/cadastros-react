import styled from 'styled-components';

export const HomeContainer = styled.div`
display: box;
height: 100vh;
width:100vw;
padding:0;
margin:0;
box-sizing: border-box;
`


// background-image:url('./bg-image.jpg');
// background-repeat: no-repeat;
// background-size: cover;

export const HeaderContent = styled.div`
width: 100vw;
height: 20vh;
margin: 0;
padding:0;
background: #16191f;
`

export const Title = styled.p`
font-family: Roboto;
margin:0;
padding:1.5rem;
font-size: 1.5rem;
color: cornsilk;
`
export const Texto = styled.p`
font-family: Roboto;
margin: 0 0 0 1.5rem;
padding:0;
font-size: 1.3rem;
color: cornsilk;
`



export const Content = styled.div`
width: 100vw;
height: 65vh;
display: flex;
flex-direction: column; 
align-items: center;
background-image:url('https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
background-size:cover;
background-repeat: no-repeat;
opacity:0.89;
`

export const Lista = styled.ul`
list-style: none;
padding:0;
margin: 0;
`

export const Itens = styled.li`
margin: 20px 0;
`

export const Button = styled.button`
width:250px;
height: 2rem;
font-size: 1.5rem;
border: 1px solid #fff;
background: #16191f;
color: #fff;
border-radius:.25rem;
cursor:pointer;
margin-left: 1rem;
`

export const Footer = styled.footer`
height: 15vh;
margin:0;
background: #16191f;
display: flex;
align-items: center;
justify-content: space-between;
`
export const TextoFooter = styled.p`
font-family: Roboto;
font-size: 1rem;
color: cornsilk;
margin: 10px;
`

export const iconsDiv = styled.div`
display:flex;
flex-wrap: nowrap;
margin-right: 100px;
@media(max-width: 600px) {
    margin-right: 20px;
  }
`

export const Icones = styled.img`
margin:0 5px;
cursor: pointer;
`