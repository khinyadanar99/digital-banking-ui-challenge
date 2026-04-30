function FeatureCard({ icon, title, description }) {
  return (
    <article className="feature-card">
      <img src={icon} alt="" className="feature-card__icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default FeatureCard
