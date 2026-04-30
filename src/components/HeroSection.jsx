import Button from './Button'
import content from '../content.json'

function HeroSection() {
  const hero = content.hero

  return (
    <section className="hero">
      <div className="container hero__content">
        <div className="hero__text">
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
          <Button>{hero.button}</Button>
        </div>

        <div className="hero__image-wrapper">
          <img src={hero.image} alt="" className="hero__image" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
