import React from 'react';

const Timeline = () => {
  const events = [
    { year: "2023", text: "プログラミング学習を開始。基礎を学ぶ。" },
    { year: "2024", text: "CanSat部門に参加。宇宙甲子園向けで準優勝。" },
    { year: "2026", text: "大学へ入学し、コンピュータサイエンスを専攻。" },
  ];

  return (
    <section className="bg-[#600000] py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-black mb-16 border-l-8 border-red-500 pl-6 tracking-tighter italic uppercase">
          Timeline
        </h2>
        
        <div className="relative border-l-2 border-red-900/50 ml-4 space-y-12">
          {events.map((event, i) => (
            <div key={i} className="relative pl-10 group">
              {/* 年代のドット */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)] group-hover:scale-125 transition-transform" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                <span className="text-3xl font-black text-red-500 italic">{event.year}</span>
                <p className="text-xl text-gray-200 font-medium leading-relaxed">
                  {event.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;