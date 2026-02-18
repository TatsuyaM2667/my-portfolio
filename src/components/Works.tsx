import React from 'react';
import Projects from './canvas/Projects';


const Works = ({ id }: { id?: string }) => {
  const projectList = [
    {
      title: "Music App",
      subtitle: "Cloudflare / React / Firebase Hosting",
      description: "Cloudflare R2を使用した音楽配信プラットフォーム。高音質なストリーミングを実現。",
      imageUrl: "/Projects/2026-02-18_15-03.png",
     href: "https://github.com/TatsuyaM2667/FluxAudio-MusicApp", 
     target: "_blank", 
     rel: "noopener noreferrer"
    },
    {
      title: "ChatApp",
      subtitle: "Google AppScript/Firebase",
      description: "",
      imageUrl: "/Projects/2026-02-18_14-58.png"
    },
    {
      title: "Browser App",
      subtitle: "React Native,electron,vite",
      description: "",
      imageUrl: "/Projects/Screenshot From 2026-02-17 22-25-13.png"
    },
     {
      title: "Browser App",
      subtitle: "React Native,electron,vite",
      description: "",
      imageUrl: "/Projects/Screenshot From 2026-02-17 22-25-13.png"
    }
  ];

  return (
    <section id={id} className="bg-[#600000] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black text-white mb-20 border-l-8 border-red-500 pl-6 italic uppercase tracking-tighter">
          Works Zone
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectList.map((p, i) => (
            <Projects key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;