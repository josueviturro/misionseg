import logo from "../../assets/images/Solo logo.png"

const Footer = () => {
    return (
        <footer className="Footer_container">
            <div className="Footer_text_container">
                <div className="Image_box_footer">
                    <div className="Footer_brand_row">
                        <img src={logo} className="Logo_footer" alt="Misión Seguridad Argentina S.R.L." />
                        <div className="Footer_brand_text">
                            <div className="Footer_brand_title">
                                MISIÓN SEGURIDAD <span className="Footer_brand_accent">ARGENTINA</span> S.R.L.
                            </div>
                            <div className="Footer_brand_description">
                                Líderes en servicios de seguridad privada y monitoreo inteligente para empresas y residencias en todo el país.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Contact_footer">
                    <div className="Footer_section_title">Contactos</div>
                    <div className="Footer_contact_item">
                        <span className="Footer_icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="20" height="18" fill="none">
                                <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Z" stroke="currentColor" strokeWidth="1.6"/>
                                <path d="M6.5 7.5 12 12l5.5-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <a className="Footer_link" href="mailto:contacto@misionseg.com.ar">contacto@misionseg.com.ar</a>
                    </div>
                    <div className="Footer_contact_item">
                        <span className="Footer_icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                                <path d="M6.7 3.8c.8-.8 2.1-.8 2.9 0l1.4 1.4c.7.7.8 1.8.2 2.6l-.8 1.1c-.3.4-.3 1 0 1.4 1.5 2.1 3.3 3.9 5.4 5.4.4.3 1 .3 1.4 0l1.1-.8c.8-.6 1.9-.5 2.6.2l1.4 1.4c.8.8.8 2.1 0 2.9l-1 1c-1.1 1.1-2.7 1.5-4.2 1.1-6.8-1.8-12.1-7.1-13.9-13.9-.4-1.5 0-3.1 1.1-4.2l1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                            </svg>
                        </span>
                        <div className="Footer_contact_lines">
                            <a className="Footer_link" href="tel:+541124500440">(+54) 11 2450 0440</a>
                            <a className="Footer_link" href="tel:+541123448947">(+54) 11 2344 8947</a>
                            <a className="Footer_link" href="tel:+541138538684">(+54) 11 3853 8684</a>
                        </div>
                    </div>
                </div>

                <div className="Address_info">
                    <div className="Footer_section_title">Dirección</div>
                    <div className="Footer_address_card">
                        <div className="Footer_contact_item Footer_contact_item-tight">
                            <span className="Footer_icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                                    <path d="M12 22s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
                                    <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.6"/>
                                </svg>
                            </span>
                            <div>
                                <div className="Footer_address_title">Oficina Central</div>
                                <div className="Text_address">Uruguay 3420 PA Of. 4</div>
                                <div className="Text_address">Béccar – San Isidro – Bs As</div>
                            </div>
                        </div>
                        <a
                            className="Footer_maps_link"
                            href="https://www.google.com/maps/search/?api=1&query=Uruguay%203420%20B%C3%A9ccar%20San%20Isidro%20Buenos%20Aires"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Ver en Google Maps
                        </a>
                    </div>
                </div>
            </div>

            <div className="Footer_bottom">
                <div>
                    <div className="Footer_bottom_left">© 2024 Misión Seguridad Argentina S.R.L. Todos los derechos reservados.</div>
                    <a href="https://www.josueviturro.com" target="_blank" rel="noreferrer" className="Footer_bottom_left_credit">Pagina creada por Josue Viturro Developer haga click</a>
                </div>
                
                    <div>
                        <button
                            type="button"
                            className="Footer_to_top"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            aria-label="Volver arriba"
                        >
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden="true">
                                <path d="M12 5l-7 7h4v7h6v-7h4l-7-7Z" fill="currentColor"/>
                            </svg>
                        </button>
                    </div>
                
            </div>
        </footer>
    )
}

export default Footer