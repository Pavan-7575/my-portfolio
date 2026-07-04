import { Mail, MapPin, Phone } from 'lucide-react'

function Contact() {
  return (
    <section className="section-pad contact-section" id="contact">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Contact us</p>
          <h2>Let us build something</h2>
        </div>
        <div className="contact-grid">
          <a href="mailto:pothulapavan015@gmail.com">
            <Mail size={20} />
            pothulapavan015@gmail.com
          </a>
          <a href="tel:8125373436">
            <Phone size={20} />
            8125373436
          </a>
          <span>
            <MapPin size={20} />
            Krishna District, Andhra Pradesh
          </span>
        </div>
      </div>
    </section>
  )
}

export default Contact
