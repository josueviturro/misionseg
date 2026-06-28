// Service.tsx
import React from "react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags?: string[];
};

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, tags }) => {
  return (
    <article className="ms-card">
      <div className="ms-cardIcon">{icon}</div>

      <h3 className="ms-cardTitle">{title}</h3>
      <p className="ms-cardDesc">{description}</p>

      {tags?.length ? (
        <div className="ms-tags">
          {tags.map((t) => (
            <span key={t} className="ms-tag">
              {t}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
};

const IconHome = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 3 3 10v11h6v-6h6v6h6V10l-9-7Zm-1 16H8v-4h3v4Zm5 0h-3v-4h3v4Z"
    />
  </svg>
);

const IconTruck = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M3 6h11v10H3V6Zm12 3h4l2 3v4h-2a2 2 0 1 1-4 0h-1V9Zm-9 9a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm11 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z"
    />
  </svg>
);

const IconCamera = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M4 7h3l1-2h8l1 2h3v14H4V7Zm8 3a4 4 0 1 0 0 8a4 4 0 0 0 0-8Z"
    />
  </svg>
);

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2 4 5v6c0 5 3.4 9.7 8 11c4.6-1.3 8-6 8-11V5l-8-3Zm0 18c-3-1.2-5-4.5-5-8.4V6.4l5-1.9l5 1.9v5.2c0 3.9-2 7.2-5 8.4Z"
    />
  </svg>
);

const Service = () => {
  return (
    <main className="ms-wrap">
      <section className="ms-services">
        <header className="ms-head">
          <h2 className="ms-title">Nuestros Servicios</h2>
          <div className="ms-underline" />
          <p className="ms-subtitle">
            Ofrecemos soluciones integrales de seguridad adaptadas a las necesidades específicas de cada
            cliente.
          </p>
        </header>

        <div className="ms-grid">
          <ServiceCard
            icon={<IconHome />}
            title="Barrios Privados"
            description="La seguridad es un factor clave por el cual muchas personas prefieren vivir en urbanizaciones privadas. Por eso, estos espacios deben implementar medidas de protección y diseñar sistemas que identifiquen riesgos, permitiendo prevenir problemas y responder eficazmente ante situaciones normales, imprevistas o emergencias."
          />

          <ServiceCard
            icon={<IconTruck />}
            title="Custodia de Tránsito"
            description="El patrimonio de una empresa incluye no solo sus instalaciones, sino también bienes que se trasladan (materias primas, productos, valores) y deben protegerse. Para eso, la seguridad busca prevenir y vigilar, disuadir con presencia física, detectar riesgos temprano mediante comunicaciones y actuar con capacidad de reacción y procedimientos para anular amenazas."
          />

          <ServiceCard
            icon={<IconCamera />}
            title="Vigilancia Electrónica"
            description="Equipos de última tecnología conectados las 24 hrs a nuestra central de monitoreo."
            tags={["SISTEMA DE ALARMAS", "VIDEO CÁMARAS", "CONTROL DE ACCESOS", "GPS PERSONAL"]}
          />

          <ServiceCard
            icon={<IconShield />}
            title="Personal de Vigilancia Física"
            description="Personal de vigilancia física seleccionado en función de la necesidad de cada cliente."
            tags={["EDIFICIOS", "FÁBRICAS", "CASAS QUINTAS"]}
          />
        </div>
      </section>

      {/* Banner SIN la parte de “Contáctenos” */}
      <section className="ms-banner" aria-label="Banner de servicios">
        <div className="ms-bannerCard">
          <div className="ms-bannerOverlay" />
          <div className="ms-bannerContent">
            <p className="ms-bannerKicker">PROFESIONAL</p>
            <h3 className="ms-bannerTitle">Comprometidos con tu seguridad</h3>
            <p className="ms-bannerText">
              Soluciones profesionales de seguridad que combinan tecnología, experiencia y personal capacitado para proteger lo que más importa.
            </p>
          </div>

          <div className="ms-bannerWatermark">
          </div>
        </div>
      </section>

      <style>{`
    

        
      `}</style>
    </main>
  );
}

export default Service;