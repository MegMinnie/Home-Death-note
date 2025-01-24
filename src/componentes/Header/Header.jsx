import "./Header.css";

function Header({ logoAnime }) {
  return (
    <>
      <header className="Header">
        <img className="logoAnime" src={logoAnime} alt="Logo" />
        <h2>Mundo dos animes</h2>
        <div className="input">
          <input type="text" placeholder="Pesquise aqui" />
          <i class="bi bi-search"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
