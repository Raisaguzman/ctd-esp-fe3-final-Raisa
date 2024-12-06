import "../index.css";

const Footer = () => {
  return (
    <footer>
      <p>Powered by</p>
      <div>
        <img src="./images/DH.png" alt="DH-logo" className="logo-DH"/>
        <div>
          <img src="./images/ico-facebook.png" alt="facebook" className="redes-sociales"/>
          <img src="./images/ico-instagram.png" alt="instagram"  className="redes-sociales"/>
          <img src="./images/ico-tiktok.png" alt="tiktok" className="redes-sociales" />
          <img src="./images/ico-whatsapp.png" alt="whatsapp"  className="redes-sociales"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
