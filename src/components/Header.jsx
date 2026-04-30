import Button from './Button'
import content from '../content.json'

function Header() {
  const navLinks = content.navLinks

  return (
    <header className="header">
      <div className="container header__content">
        <img src="/images/logo-dark.svg" alt="Digitalbank" className="logo" />

        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link} href="#" className="header__link">
              {link}
            </a>
          ))}
        </nav>

        <Button>{content.hero.button}</Button>
      </div>
    </header>
  )
}

export default Header
