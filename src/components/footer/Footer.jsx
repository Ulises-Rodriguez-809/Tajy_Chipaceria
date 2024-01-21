import { Brand } from "../Brand";
import "../footer/footer.css";

export const Footer = () => {
  return (
    <div className="footerContainer" id="contactos-section">
      <div className="footerContent">
        <div className="colum-1">
          <Brand />
          <p>
            Deliciosos chipa calentitos y opciones pensadas para cada paladar.
            ¡Ven a disfrutar de la tradición con nosotros!
          </p>
          <div>
            <a
              href="https://m.facebook.com/profile.php/?id=100064161999349"
              target={"_Blank "}
            >
              <img
                src="./imgFooter/facebook.png"
                alt="facebook"
                className="redes"
              />
            </a>

            <a
              href="https://www.instagram.com/tajy_chipaceria?igsh=YzVkODRmOTdmMw=="
              target={"_Blank "}
            >
              <img
                src="./imgFooter/instagram.png"
                alt="instagram"
                className="redes"
              />
            </a>
          </div>
        </div>
        <div className="colum-2">
          <p className="titleList">Menú</p>
          <ul>
            {/* faltaria arreglar el href para que se desplaze entre secciones*/}
            <li>
              <img src="./imgFooter/punto.png" alt="punto" />
              <a href="#aboutUs-section">Nosotros</a>
            </li>
            <li>
              <img src="./imgFooter/punto.png" alt="punto" />
              <a href="#productos-section">Productos</a>
            </li>
            <li>
              <img src="./imgFooter/punto.png" alt="punto" />
              <a href="#ubicacion-section">Tienda</a>
            </li>
            <li>
              <img src="./imgFooter/punto.png" alt="punto" />
              <a href="#Contactanos">Contáctanos</a>
            </li>
          </ul>
        </div>
        <div className="colum-3">
          <p className="titleList">Ubícanos</p>
          <div className="Content">
            <img
              src="./imgFooter/location.png"
              alt="mapa imagen"
              className="png"
            />
            <a
              href="https://maps.app.goo.gl/u9GteARiYRvDMRqCA"
              target={"_Blank "}
            >
              Italia 546 Sexta Sección Mendoza, Argentina
            </a>
          </div>
          <div className="Content">
            <img src="./imgFooter/phone.png" alt="celular imagen" className="png" />
            <a href="https://wa.me/562613663231" target={"_blank "}>
              +56 2613663231
            </a>
          </div>
          <div className="Content">
            <img src="./imgFooter/mail.png" alt="email imagen" className="png" />
            {/* acomodar el enlace */}
            <a href="https://mail.google.com/mail" target={"_blank "}>
              tajychipaceria@gmail.com
            </a>
          </div>
        </div>
      </div>
      <img src="./imgFooter/line.png" alt="linea imagen" className="line" />
    </div>
  );
};
