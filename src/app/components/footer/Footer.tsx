import Image from 'next/image'
import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__sections">
        <section className="footer__about">
          <Image
            src="/logo_multinacional-service_white.svg"
            alt="Logo de Multinacional Service Corp. S.A.C."
            width={300}
            height={200}
          />
          <p>
            Somos Multinacional Service Corp. S.A.C., una empresa de transporte de carga ubicada en
            el distrito de Comas. Llámenos, estaremos encantados de atenderlo.
          </p>
        </section>

        <section className="footer__social">
          <h4>Encuéntranos en:</h4>
          <div className="footer__social-links">
            <Link
              className="footer__link"
              href="https://www.facebook.com/MultinacionalService/"
              target="_blank"
              title="Facebook - Multinacional Service Corp."
              aria-label="Síguenos en Facebook"
            >
              <Image src="/facebook.svg" alt="Facebook" width={50} height={50} />
            </Link>

            <Link
              className="footer__link"
              href="https://api.whatsapp.com/send/?phone=51983806682"
              target="_blank"
              title="WhatsApp - Multinacional Service Corp."
              aria-label="Contáctanos por WhatsApp"
            >
              <Image src="/whatsApp.svg" alt="WhatsApp" width={50} height={50} />
            </Link>
          </div>
        </section>

        <section className="footer__contact">
          <h4>Contáctanos:</h4>
          <Link
            className="footer__contact-link button__animation"
            href="tel:51983806682"
            title="Llamar a Multinacional Service Corp."
            aria-label="Llamar al +51 983 806 682"
          >
            <Image src="/phone.svg" alt="Teléfono" width={50} height={50} />
            <p>+51 983 806 682</p>
          </Link>
          <ul className="footer__email-list">
            <li>
              <Link
                className="footer__email-link"
                href="mailto:contactos@multinacional-service.com"
                title="Enviar correo a contactos@multinacional-service.com"
                aria-label="Correo a contactos@multinacional-service.com"
              >
                <Image src="/email.svg" alt="Email" width={50} height={50} />
                <p>contactos@multinacional-service.com</p>
              </Link>
            </li>
            <li>
              <Link
                className="footer__email-link"
                href="mailto:drosales@multinacional-service.com"
                title="Enviar correo a drosales@multinacional-service.com"
                aria-label="Correo a drosales@multinacional-service.com"
              >
                <Image src="/email.svg" alt="Email" width={50} height={50} />
                <p>drosales@multinacional-service.com</p>
              </Link>
            </li>
          </ul>
        </section>

        <section className="footer__info">
          <h4>Información empresarial:</h4>
          <div className="footer__company">
            <h5>MULTINACIONAL SERVICE CORP S.A.C.</h5>
            <h5>RUC: 20606198826</h5>
          </div>
          <div className="footer__payments">
            <Image
              src="/dollar.svg"
              alt="Depósitos en efectivo y transferencias"
              width={50}
              height={50}
            />
            <p>Depósitos en efectivo y transferencias</p>
          </div>
        </section>
      </div>
      <Link href="/complaints-book" className="footer__claims">
        <Image
          src="/libro-de-reclamaciones-removebg-preview.png"
          alt="libro de reclamaciones M ultinacional Service Corp. S.A.C."
          width={200}
          height={200}
        />
        <p>
          Copyright © {new Date().getFullYear()}
          <b>Multinacional Service Corp. S.A.C.</b> Todos los derechos reservados.
        </p>
      </Link>
    </footer>
  )
}
