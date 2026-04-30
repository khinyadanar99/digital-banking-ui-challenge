import FeatureCard from './FeatureCard'
import content from '../content.json'

function FeaturesSection() {
  const features = content.features

  return (
    <section className="features">
      <div className="container">
        <h2>{features.heading}</h2>
        <p className="features__intro">{features.intro}</p>

        <div className="features__grid">
          {features.items.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
