import "../footer/footer.css";

export const Footer = () => {
  return (
    <div className=" footerContainer">
      <div className="footerContent">
        <div className="colum-1">
          <img src="..\src\assets\image 1.png" alt="logo" className="Logo" />
          <p>
            Deliciosos chipa calentitos y opciones pensadas para cada paladar.
            ¡Ven a disfrutar de la tradición con nosotros!
          </p>
          <div className="col-">
            {/* falta agregar los a y enlazarlo con las redes */}
            <img
              src="..\src\assets\footer\facebook.png"
              alt="facebook"
              className="redes"
            />
            <img
              src="..\src\assets\footer\instagram.png"
              alt="instagram"
              className="redes"
            />
          </div>
        </div>
        <div className="colum-2">
          <p className="titleList">Menú</p>
          <ul>
            {/* faltaria agregar los puntos de color naranja y arreglar el href para que se desplaze entre secciones*/}
            <li>
              <a href="#">Nosotros</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Tienda</a>
            </li>
            <li>
              <a href="#">Contactanos</a>
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
            <p>Italia 546 Sexta Sección Mendoza, Argentina</p>
          </div>
          <div className="Content">
            <img src="..\src\assets\footer\phone.png" alt="" className="png" />
            <a href="tel:+56 2613663231"> +56 2613663231</a>
          </div>
          <div className="Content">
            <img src="..\src\assets\footer\mail.png" alt="" className="png" />
            <p>tajychipaceria@gmail.com</p>
          </div>
        </div>
      </div>
      <img src="..\src\assets\footer\line.png" className="line" />
    </div>
  );
};
