
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>TatsuyaM</h1>
        <h2>フルスタック開発者</h2>
        <p>こんにちは、私は[あなたの名前]です。Web開発に情熱を持っています。最新のテクノロジーを使用して、ユーザーフレンドリーなアプリケーションを作成します。</p>
        <div className="hero-buttons">
          <button onClick={() => document.getElementById('works')?.scrollIntoView()}>作品を見る</button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView()}>連絡する</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
