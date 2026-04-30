import Button from './Button'
import content from '../content.json'

function Footer() {
  const footer = content.footer

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__branding">
          <img src="/images/logo-light.svg" alt="Digitalbank" className="logo" />
          <div className="footer__socials">
            {footer.socialLinks.map((social) => (
              <a key={social.label} href="#" aria-label={social.label}>
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          {footer.links.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </nav>

        <div className="footer__cta">
          <Button>{footer.ctaButton}</Button>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
