import React from 'react'
import './privacyPolicyPage.css'

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy">
      <h1 className="privacy-policy__title">Política de Privacidad — MSC Carga</h1>
      <p className="privacy-policy__update">Última actualización: 13 de abril de 2025</p>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__subtitle">1. Introducción</h2>
        <p className="privacy-policy__text">
          Esta Política de Privacidad describe cómo se maneja la información dentro de la aplicación{' '}
          <strong>MSC Carga</strong>, propiedad de <strong>Multinacional Service</strong>. Esta
          aplicación es de uso exclusivo para el personal de la empresa, y no está disponible para
          el público en general.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__subtitle">2. Acceso y Uso</h2>
        <p className="privacy-policy__text">
          MSC Carga no solicita registro público ni recolección de datos personales de los usuarios
          finales. El acceso a la aplicación se gestiona directamente a través del sistema interno
          de <strong>Multinacional Service</strong>, mediante credenciales proporcionadas por la
          misma.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__subtitle">3. Datos que se Gestionan</h2>
        <p className="privacy-policy__text">
          La aplicación no solicita ni recolecta información personal adicional a través de
          formularios o registros públicos. El único dato utilizado es la credencial de acceso que
          otorga la empresa para autenticación en el sistema.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__subtitle">4. Uso de la Información</h2>
        <p className="privacy-policy__text">La información de acceso se utiliza únicamente para:</p>
        <ul className="privacy-policy__list">
          <li>Validar las credenciales del usuario autorizado.</li>
          <li>Permitir el acceso a las funcionalidades de la aplicación.</li>
        </ul>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__subtitle">5. Compartición de Datos</h2>
        <p className="privacy-policy__text">
          MSC Carga no comparte información con terceros. Toda la gestión de credenciales y accesos
          se realiza de forma interna, controlada por el sistema corporativo de{' '}
          <strong>Multinacional Service</strong>.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__subtitle">6. Seguridad</h2>
        <p className="privacy-policy__text">
          MSC Carga cuenta con medidas de seguridad que garantizan la integridad y confidencialidad
          de las credenciales de acceso.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__subtitle">7. Cookies y Tecnologías Similares</h2>
        <p className="privacy-policy__text">
          La aplicación no utiliza cookies ni tecnologías de seguimiento.
        </p>
      </section>

      <section className="privacy-policy__section">
        <h2 className="privacy-policy__subtitle">8. Cambios en esta Política</h2>
        <p className="privacy-policy__text">
          Cualquier cambio en esta Política de Privacidad será notificado y actualizado en este
          apartado.
        </p>
      </section>
    </div>
  )
}
