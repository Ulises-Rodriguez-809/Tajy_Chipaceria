import { ContaactUs } from "../../assets/js/ContaactUs";
import { TitleBox } from "../TitleBox";
import "./contactUs.css";

export const ContactUs = () => {
  return (
    <div className="container-fluid contact-container">
      <TitleBox topic={"NUESTRA TIENDA"} title={"¿Qué esperás para probarlos?"} textPosition={"center"} />
      <div className="grid-Container mt-5" id="ubicacion-section">
        <div className="imgContainer">
          <img
            src="../src/assets/nuestra_tienda/local.png"
            alt="tienda imagen"
            className="img1"
          />
        </div>
        <div className="locationContainer">
          <p className="subtitle">Lugar:</p>
          <div className="locationContent">
            <div className="svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt svg"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
            </div>
            <div className="locationText">
              <p>Italia 546 Sexta Sección Mendoza, Argentina</p>
            </div>
            <button type="button" className="btn-cu">
              <a
                href="https://maps.app.goo.gl/u9GteARiYRvDMRqCA"
                target={"_Blank "}
                className=" btn btn-outline-*"
              >
                VER MAPA
              </a>
            </button>
          </div>
        </div>
        <div className="imgContainer2">
          <img
            src="../src/assets/nuestra_tienda/dueños.png"
            alt="dueños imagen"
            className="img2"
          />
        </div>
        <div className="listContainer">
          <p className="subtitle ">Horario de atención:</p>

          <div className="horariosContent">
            <div className=" svg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-clock"
                viewBox="0 0 16 16"
              >
                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
              </svg>
            </div>
            <div className="horariosContainer">
              <ul>
                {ContaactUs.map((element) => (
                  <li key={element.id}>{element.day}</li>
                ))}
              </ul>
              <ul>
                {ContaactUs.map((element) => (
                  <li key={element.id}>{element.hour}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
