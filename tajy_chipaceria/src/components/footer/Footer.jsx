import "../footer/footer.css";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="colum-1">
          <img src="..\src\assets\image 1.png" alt="logo" className="logo" />
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
                src="..\src\assets\footer\facebook.png"
                alt="facebook"
                className="redes"
              />
            </a>

            <a
              href="https://www.instagram.com/tajy_chipaceria?igsh=YzVkODRmOTdmMw=="
              target={"_Blank "}
            >
              <img
                src="..\src\assets\footer\instagram.png"
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
              <img src="..\src\assets\footer\punto.png" alt="" />
              <a href="#">Nosotros</a>
            </li>
            <li>
              <img src="..\src\assets\footer\punto.png" alt="" />
              <a href="#">Productos</a>
            </li>
            <li>
              <img src="..\src\assets\footer\punto.png" alt="" />
              <a href="#">Tienda</a>
            </li>
            <li>
              <img src="..\src\assets\footer\punto.png" alt="" />
              <a href="#">Contáctanos</a>
            </li>
          </ul>
        </div>
        <div className="colum-3">
          <p className="titleList">Ubícanos</p>
          <div className="Content">
            <img
              src="..\src\assets\footer\location.png"
              alt=""
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
            <img src="..\src\assets\footer\phone.png" alt="" className="png" />
            <a href="https://wa.me/562613663231" target={"_blank "}>
              +56 2613663231
            </a>
          </div>
          <div className="Content">
            <img src="..\src\assets\footer\mail.png" alt="" className="png" />
            {/* acomodar el enlace */}
            <a href="https://mail.google.com/mail" target={"_blank "}>
              tajychipaceria@gmail.com
            </a>
          </div>
        </div>
      </div>
      <img src="..\src\assets\footer\line.png" className="line" />
    </div>
  );
};
