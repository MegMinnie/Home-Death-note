import "./Footer.css";

function Footer({ logoAnime }) {
  return (
    <>
      <footer className="Footer">
        <h2>Mundo dos animes</h2>
        <img className="logoAnime" src={logoAnime} alt="Logo" />
        <p>Desenvolvido por Mirele Oliveira da Silva &copy; 2025.</p>
      </footer>
    </>
  );
}

export default Footer;
