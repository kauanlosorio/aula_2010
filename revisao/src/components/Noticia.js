import '../App.css';

const NoticiaComponente = ({titulo, imagem, descricao, categoria}) => {
    return(
        <div className="noticia">
            <h2 className="titulo-noticia">{titulo}</h2>
            <img src={imagem} />
            <p className="descricao">{descricao}</p>
            <p className="categoria">{categoria}</p>
        </div>
    );
};

export default NoticiaComponente