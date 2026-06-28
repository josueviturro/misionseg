import Security from "../assets/images/security.png"


const Aboutus = () => {
  return (
    <section className="aboutus_page">
      <header className="aboutus_hero">
        <p className="aboutus_hero_kicker">¿Quiénes somos?</p>
        <h1 className="aboutus_hero_title">
          Comprometidos con la excelencia en seguridad integral, protegiendo lo
          que más importa con tecnología de vanguardia y capital humano
          altamente capacitado.
        </h1>
      </header>

      <main className="aboutus_main">
        <section className="aboutus_company_block">
          <div className="aboutus_company_text">
            <div className="aboutus_company_badges">
              <span className="aboutus_company_badge">La compañía</span>
            </div>
            <h2 className="aboutus_company_text_title">
              Expertos en seguridad de carácter nacional
            </h2>
            <p className="aboutus_company_text_body">
              <span className="aboutus_company_text_highlight">MISIONSEG</span>{" "}
              es una empresa joven, compuesta por un selecto equipo de
              profesionales, con el fin de brindar a nuestros clientes un
              excelente servicio de seguridad, protegiendo su integridad física
              y activos.
            </p>
            <p className="aboutus_company_text_body">
              Dada la situación actual en materia de inseguridad en nuestro
              país, la prevención es un elemento primordial a tener en cuenta.
              Por ello, el equipo técnico de MISIONSEG pone a disposición de
              sus clientes todos los avances tecnológicos disponibles,
              complementando la seguridad física con seguridad electrónica,
              estudios de seguridad y asesoramientos.
            </p>
            <p className="aboutus_company_text_body">
              Actualmente MISIONSEG es una empresa líder en el segmento de
              seguridad residencial, empresarial con los saldos mas competitivos del mercado.
            </p>
          </div>

          <div className="aboutus_illustration_container">
            <img src={Security} alt="imagen de seguridad" className="Aboutus_image_security" />
          </div>
        </section>

        <section className="aboutus_bottom_cards">
          <article className="aboutus_bottom_card">
            <h3 className="aboutus_bottom_title">Misión</h3>
            <p className="aboutus_bottom_text">
              Servicio de excelencia en protección de personas y sus bienes,
              presentando soluciones ágiles y personalizadas con la mayor
              transparencia y responsabilidad.
            </p>
          </article>

          <article className="aboutus_bottom_card">
            <h3 className="aboutus_bottom_title">Visión</h3>
            <p className="aboutus_bottom_text">
              Mantenernos como una compañía de mediano porte, con fuerte foco y
              presencia en nuestros clientes y una profunda orientación hacia
              servicios personalizados.
            </p>
          </article>

          <article className="aboutus_bottom_card">
            <h3 className="aboutus_bottom_title">Política de Calidad</h3>
            <p className="aboutus_bottom_text">
              Contamos con un sistema de gestión de calidad y un proceso de
              mejora continua, con la finalidad de alcanzar e inclusive superar
              las expectativas de nuestros clientes.
            </p>
          </article>
        </section>
      </main>
    </section>
  );
};

export default Aboutus;