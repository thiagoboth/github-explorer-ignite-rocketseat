import { render } from 'react-dom';
import { App } from './App';

//render recebe dois parametros, o primeiro é o que eu quero renderizar e o segundo o que dentro do  que eu quero renderizar;
// nesse caso estou renderizando dentro de root;
render(<App />, document.getElementById('root'));