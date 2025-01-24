import "./Cards.css";

function Cards({ personagem, nome, descricao }) {
  return (
    <>
      <div className="Cards">
        <div className="flip-container">
          <div className="flip">
            <div className="frente">
              <img
                src={personagem}
                alt="foto do personagem"
                className="personagem"
              />
            </div>
            <div className="verso">
              <p className="descricao">{descricao}</p>
            </div>
          </div>
          <p className="nome">{nome}</p>
        </div>
      </div>
    </>
  );
}

export default Cards;
