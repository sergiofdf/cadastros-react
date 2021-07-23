import { createGlobalStyle } from 'styled-components';
import myFont from './Roboto-Regular.ttf';
// import {Roboto} from './Roboto.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${myFont}) format('ttf');
        font-weight: 400;
        font-style: normal;
    }
`;