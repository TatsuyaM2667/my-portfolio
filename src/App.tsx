// src/App.tsx
import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Works from './components/Works';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Timeline from './components/Timeline'; // Profileとしてインポートされていたもの

/**
 * ポートフォリオ メインコンポーネント
 * * 全体の背景色を bg-[#600000] (深い赤) に設定し、
 * 各セクション間のデザインが途切れないように構成しています。
 */
function App() {
  return (
    <div className="bg-[#600000] min-h-screen font-sans selection:bg-red-500 selection:text-white">
      {/* ヒーローセクション（メインビジュアル） */}
      <Hero />

      {/* スキル一覧 */}
      <Skills />

      {/* タイムライン（学歴・経歴の歩み） */}
      <div className="max-w-7xl mx-auto">
        <Timeline />
      </div>

      {/* 制作物一覧（ここがカード型グリッドになります） */}
      <Works id="works" />

      {/* 実務経験・活動実績 */}
      <Experience />

      {/* お問い合わせフォーム */}
      <Contact id="contact" />
      
      {/* フッター（おまけ） */}
      <footer className="py-10 text-center text-red-300 text-sm border-t border-red-900/50">
        <p>© 2026 Tatsuya's Portfolio. Built with React & Tailwind CSS v4</p>
      </footer>
    </div>
  );
}

export default App;