import uniform from "../../assets/images/Uniform.png";
import shell from "../../assets/images/Shell.png";
import {useState} from "react";
import emailjs from "@emailjs/browser";

const ContactPanel = () => {


    type  ContactData = {
        name: string,
        phone: string,
        email: string,
        company: string,
        address: string,
        message: string
    }

    const [contactData, setContactData] = useState<ContactData>({
        name: "",
        phone: "",
        email: "",
        company: "",
        address: "",
        message: ""
    });

    const hanldleData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const {name, value} = e.target;
        setContactData(d =>({
            ...d,
            [name]: value
        }))
    }

const sendData = (e: React.FormEvent) => {
    e.preventDefault();
     emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            contactData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            console.log("Email enviado correctamente ✅");
            alert("¡Gracias por contactarnos! Su solicitud ha sido enviada.")
        })
        .catch((error) => {
            console.error("Error al enviar ❌", error);
            alert("Error al enviar ❌, porfavor intente por whatsapp o vuelva a intentarlo mas tarde");
            
        });

    setContactData({
        name: "",
        phone: "",
        email: "",
        company: "",
        address: "",
        message: ""

        
    });
    
};

    return (
        <div className="Contact_panel_containter">
         <img src={uniform} alt="" className="Contact_image"/>  {/*esta es la imagen de fondo*/}

            <div className="Panel_contact">
                <div className="Panel_contact_left">
                        <img
                            src={shell}
                            alt="Contacto"
                            className="Contact_image_card"
                        />
                    <div className="Panel_contact_hero_text">
                        <h3 className="Panel_contact_hero_title">
                            Expertos en seguridad a su servicio.
                        </h3>
                        <p className="Panel_contact_hero_description">
                            Nuestro equipo de consultores está listo para diseñar la solución de seguridad que su empresa necesita.
                            Coordinamos visitas técnicas sin cargo.
                        </p>
                        <p className="Panel_contact_hero_badge">
                            asesores disponibles hoy
                        </p>
                    </div>
                </div>

                <div className="Panel_contact_right">
                    <div className="Panel_contact_header">
                        <h2>Coordiná una visita</h2>
                        <p className="Panel_contact_subtitle">
                            (No apto para entrevistas laborales, solo para consultas de clientes)
                        </p>
                    </div>

                    <a href="https://wa.me/5491124500440" className="Button_wp_container">
                        <span className="Button_wp">
                            <div className="Text_wp">Contactar por WhatsApp</div>
                        </span>
                    </a>

                    <div className="Panel_contact_divider">
                        <div className="Panel_contact_divider_line"/>
                        <div className="Panel_contact_divider_text">o completá el formulario</div>
                        <div className="Panel_contact_divider_line"/>
                    </div>

                    <div className="Contact_field_stack">
                        <div className="Contact_field_group">
                            <label className="Contact_label">Nombre y apellido</label>
                            <input className="Contact_input" type="text" placeholder="Juan Pérez" value={contactData.name} onChange={hanldleData} name="name" />
                        </div>

                        <div className="Contact_field_pair">
                            <div className="Contact_field_column Contact_field_column-small">
                                <label className="Contact_label">Teléfono</label>
                                <input className="Contact_input" type="tel" placeholder="+54 11 ..." value={contactData.phone} onChange={hanldleData} name="phone" />
                            </div>

                            <div className="Contact_field_column Contact_field_column-large">
                                <label className="Contact_label">Correo electrónico</label>
                                <input className="Contact_input" type="email" placeholder="juan@empresa.com" value={contactData.email} onChange={hanldleData} name="email" />
                            </div>
                        </div>

                        <div className="Contact_field_group">
                            <label className="Contact_label">Empresa</label>
                            <input className="Contact_input" type="text" placeholder="Nombre de su organización" value={contactData.company} onChange={hanldleData} name="company"/>
                        </div>

                        <div className="Contact_field_group">
                            <label className="Contact_label">Dirección</label>
                            <input className="Contact_input" type="text" placeholder="Calle 123, Ciudad" value={contactData.address} onChange={hanldleData} name="address"/>
                        </div>

                        <div className="Contact_field_group">
                            <label className="Contact_label">Mensaje</label>
                            <textarea name="message" placeholder="Cuéntanos sobre sus necesidades de seguridad..." className="Contact_text_area" value={contactData.message} onChange={hanldleData}></textarea>
                        </div>
                    </div>

                    <button className="Button_send_contact" type="button" onClick={sendData}>
                        Enviar solicitud
                    </button>

                    <div className="Contact_policy_text">
                        Al enviar, acepta nuestra política de privacidad y el tratamiento de sus datos.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactPanel;