
const Profile = () => {
  return (
    <div className="profile-zone">
      <h1>Profile</h1>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>2020 - 小学校卒業</h3>
            <p>小学校を卒業し、中学校に進学。</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>2023 - プログラミング学習を開始</h3>
            <p>Arduinoなどを使用してプログラミングを学び始めた。</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>2024 - CanSat部門 準優勝</h3>
            <p>宇宙甲子園缶サット部門で準優勝</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>2025 - 大学入学</h3>
            <p>大学に入学し、コンピュータサイエンスを専攻。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;