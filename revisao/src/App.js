import './App.css';
import Imagem from './Img/it.png';
import NoticiaComponente from './components/Noticia';

function App() {
  return (
    <div className="App">
      <h1>Minha primeira noticia </h1>
      <NoticiaComponente
      titulo="Um titulo top"
      imagem={Imagem}
      descricao="Descrição breve sobre filmes de terror"
      categoria="Não sei" 
      />
    </div>
  );
}

export default App;
