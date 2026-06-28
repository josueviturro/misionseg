import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Recruiter.module.css';


interface FormData {
  // Información Personal
  firstName: string;
  lastName: string;
  cuil: string;
  birthDate: string;
  phone: string;
  email: string;
  
  // Residencia y Dirección
  zone: string;
  address: string;
  locality: string;
  province: string;
  
  // Antecedentes y Experiencia
  secondaryComplete: string;
  hasCriminalRecord: string;
  privateSecurityExperience: string;
  
  // Preferencias Laborales
  positions: string[];
  hoursPreference: string;
  hoursAvailable: string;

  
  // Documentación
  cvFile: File | null;
}

const Recruiter: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    cuil: '',
    birthDate: '',
    phone: '+54 9',
    email: '',
    zone: '',
    address: '',
    locality: '',
    province: '',
    secondaryComplete: '',
    hasCriminalRecord: '',
    privateSecurityExperience: '',
    positions: [],
    hoursPreference: '',
    hoursAvailable: '',
    cvFile: null,
  });

  const positions = [
    'Vigilador General',
    'Operador de monitoreo',
    'Vigilador Principal',
    'Vigilador Bombero',
    'Supervisor',
    'Jefe de Servicios',
  ];

  const hoursPreferences = [
    'Jornadas de 8 hs',
    'Jornadas de 12 hs',
    'Indiferente'
  ]

  const hoursAvailable = [
    'Disponibilidad de día',
    'Disponibilidad de noche',
    'Indiferente'
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleZoneChange = (selectedZone: string) => {
    setFormData(prev => ({
      ...prev,
      zone: selectedZone,
    }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePositionChange = (position: string) => {
    setFormData(prev => ({
      ...prev,
      positions: prev.positions.includes(position)
        ? prev.positions.filter(p => p !== position)
        : [...prev.positions, position],
    }));
  };

    const handleHoursPreferenceChange = (hoursPreference: string) => {
        setFormData(prev => ({
            ...prev,
            hoursPreference: prev.hoursPreference.includes(hoursPreference)
            ? prev.hoursPreference
            : hoursPreference,
        }))
    }

    const handleHoursAvailableChange = (hoursAvailable: string) => {
        setFormData(prev => ({
            ...prev,
            hoursAvailable: prev.hoursAvailable.includes(hoursAvailable)
            ? prev.hoursAvailable
            : hoursAvailable,
        }))
    }



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      setFormData(prev => ({
        ...prev,
        cvFile: files[0],
      }));
    }
  };

const formRef = useRef<HTMLFormElement>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!formRef.current) return;

  if (formData.cvFile && formData.cvFile.size > 2 * 1024 * 1024) {
    alert('El CV no puede superar los 2MB');
    return;
  }

  try {
    await emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ALT,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    console.log('Solicitud enviada correctamente ✅');

    setFormData({
      firstName: '',
      lastName: '',
      cuil: '',
      birthDate: '',
      phone: '+54 9',
      email: '',
      zone: '',
      address: '',
      locality: '',
      province: '',
      secondaryComplete: '',
      hasCriminalRecord: '',
      privateSecurityExperience: '',
      positions: [],
      hoursPreference: '',
      hoursAvailable: '',
      cvFile: null,
    });

    formRef.current.reset();
    alert('Solicitud enviada correctamente');
  } catch (error) {
    console.error('Error al enviar la solicitud ❌', error);
    alert('Hubo un error al enviar la solicitud');
  }
};

  return (
    <div className={styles.recruiterContainer}>
      <div className={styles.recruiterHeader}>
        <div className={styles.headerIcon}>🛡️</div>
        <h1>Solicitud de Empleo</h1>
        <p className={styles.recruiterslogan}>Únase a nuestro equipo de seguridad profesional.</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className={styles.recruiterForm}>
        {/* Información Personal */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>👤 Información Personal</h2>
          
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="lastName">Apellido y Nombre *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Juan Pérez"
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="cuil">CUIL *</label>
              <input
                type="text"
                id="cuil"
                name="cuil"
                value={formData.cuil}
                onChange={handleInputChange}
                placeholder="20-XXXXXXXX-X"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="birthDate">Fecha de Nacimiento *</label>
              <input
                type="date"
                id="birthDate"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+54 9..."
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Correo Electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="ejemplo@correo.com"
                required
              />
            </div>
          </div>
        </section>

        {/* Residencia y Dirección */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>📍 Residencia y Dirección</h2>
          
          <div className={styles.zoneContainer}>
            <label>Zona de Residencia *</label>
            <div className={styles.zoneButtons}>
              {['CABA', 'ZONA NORTE', 'ZONA OESTE', 'ZONA SUR'].map(zone => (
                <button
                  key={zone}
                  type="button"
                  className={`${styles.zoneButton} ${
                    formData.zone === zone ? styles.active : ''
                  }`}
                  onClick={() => handleZoneChange(zone)}
                >
                  {zone}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="address">Dirección</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="locality">Localidad</label>
              <input
                type="text"
                id="locality"
                name="locality"
                value={formData.locality}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="province">Provincia</label>
              <input
                type="text"
                id="province"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>

        {/* Antecedentes y Experiencia */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>💼 Antecedentes y Experiencia</h2>
          
          <div className={styles.questionGroup}>
            <label>¿Posee secundario completo con analítico?</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="secondaryComplete"
                  value="si"
                  checked={formData.secondaryComplete === 'si'}
                  onChange={(e) => handleRadioChange('secondaryComplete', e.target.value)}
                />
                Sí
              </label>
              <label>
                <input
                  type="radio"
                  name="secondaryComplete"
                  value="no"
                  checked={formData.secondaryComplete === 'no'}
                  onChange={(e) => handleRadioChange('secondaryComplete', e.target.value)}
                />
                No
              </label>
            </div>
          </div>

          <div className={styles.questionGroup}>
            <label>¿Posee causa penal?</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="hasCriminalRecord"
                  value="si"
                  checked={formData.hasCriminalRecord === 'si'}
                  onChange={(e) => handleRadioChange('hasCriminalRecord', e.target.value)}
                />
                Sí
              </label>
              <label>
                <input
                  type="radio"
                  name="hasCriminalRecord"
                  value="no"
                  checked={formData.hasCriminalRecord === 'no'}
                  onChange={(e) => handleRadioChange('hasCriminalRecord', e.target.value)}
                />
                No
              </label>
            </div>
          </div>

          <div className={styles.questionGroup}>
            <label>Experiencia en seguridad privada</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  name="privateSecurityExperience"
                  value="si"
                  checked={formData.privateSecurityExperience === 'si'}
                  onChange={(e) => handleRadioChange('privateSecurityExperience', e.target.value)}
                />
                Sí
              </label>
              <label>
                <input
                  type="radio"
                  name="privateSecurityExperience"
                  value="no"
                  checked={formData.privateSecurityExperience === 'no'}
                  onChange={(e) => handleRadioChange('privateSecurityExperience', e.target.value)}
                />
                No
              </label>
            </div>
          </div>
        </section>

        {/* Preferencias Laborales */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>⭐ Preferencias Laborales</h2>
          <p className={styles.preferencesNote}>Seleccione 2 opciones</p>
          
          <div className={styles.preferencesGrid}>
            {positions.map((position, index) => (
              <div key={index} className={styles.preferenceGroup}>
                <label>
                  <input
                    type="checkbox"
                    checked={formData.positions.includes(position)}
                    onChange={() => handlePositionChange(position)}
                  />
                  {position}
                </label>
              </div>
            ))}
          </div>
          <p className={styles.preferencesNote}>Seleccione 1 opcion</p>
          <div className={styles.preferencesGrid}>
            {hoursPreferences.map((option, index) => (
                <div key={index} className={styles.preferenceGroup}>
                  <label>
                    <input
                      type="checkbox"
                      checked={formData.hoursPreference === option}
                      onChange={() => handleHoursPreferenceChange(option)}
                    />
                    {option}
                  </label>
                </div>
            ))}
          </div>

           <p className={styles.preferencesNote}>Seleccione 1 opcion</p>
          <div className={styles.preferencesGrid}>
            {hoursAvailable.map((option, index) => (
                <div key={index} className={styles.preferenceGroup}>
                  <label>
                    <input
                      type="checkbox"
                      checked={formData.hoursAvailable === option}
                      onChange={() => handleHoursAvailableChange(option)}
                    />
                    {option}
                  </label>
                </div>
            ))}

          </div>
        </section>

        {/* Documentación */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>📄 Documentación</h2>
          
          <div className={styles.uploadArea}>
            <label htmlFor="cvFile">Currículum Vitae *</label>
            <div className={styles.dropZone}>
              <div className={styles.uploadIcon}>📄</div>
              <p>Elegir Archivo o arrastrar y soltar</p>
              <p className={styles.fileTypes}>PDF, DOC o DOCX hasta 2MB</p>
              <input
                type="file"
                id="cvFile"
                name="cvFile"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                required
              />
            </div>
            {formData.cvFile && (
              <p className={styles.fileName}>Archivo seleccionado: {formData.cvFile.name}</p>
            )}
          </div>
        </section>

        {/* Términos y condiciones */}
        <div className={styles.termsContainer}>
          <p>
            Al presentar esta solicitud confirma que todos los datos proporcionados son correctos y verdaderos.
            El envío de solicitudes falsas conllevará a la eliminación del archivo.
          </p>
        </div>

        <input type="hidden" name="positions" value={formData.positions.join(', ')} />
        <input type="hidden" name="hoursPreference" value={formData.hoursPreference} />
        <input type="hidden" name="hoursAvailable" value={formData.hoursAvailable} />
        <input type="hidden" name="zone" value={formData.zone} />

        {/* Botón de envío */}
        <button type="submit" className={styles.submitButton}>
          ✉️ Enviar Solicitud
        </button>
      </form>
    </div>
  );
};

export default Recruiter;
