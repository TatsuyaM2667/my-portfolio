

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src="/favicon.ico" alt="Profile" className="profile-image" />

        <h1>Tatsuya.M</h1>
        <h2>Web Developer</h2>
        <p>Hello I'm Tatsuya.M</p>

        <div className="hero-buttons" >
          <button onClick={() => document.getElementById('works')?.scrollIntoView()}>
            作品を見る
             </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView()}>連絡する</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
