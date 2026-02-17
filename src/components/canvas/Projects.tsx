import React from 'react';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
}

const Projects = ({ title, subtitle, description, imageUrl }: ProjectCardProps) => {
  return (
    <div className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 hover:border-red-500/50 transition-all duration-500 group shadow-2xl flex flex-col h-full">
      <div className="relative h-56 overflow-hidden">
        <img 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
          src={imageUrl} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{title}</h3>
        <p className="text-red-500 text-xs font-black uppercase tracking-[0.2em] mb-4">{subtitle}</p>
        <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
          {description}
        </p>
        
        <div className="mt-auto flex justify-between items-center">
          <button className="bg-red-600 hover:bg-red-500 text-white text-xs font-black py-3 px-8 rounded-full transition-all active:scale-95 shadow-lg shadow-red-900/40 uppercase tracking-widest">
            Read more
          </button>
          <div className="text-gray-600 hover:text-white transition-colors cursor-pointer">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.08-.737.08-.721.08-.721 1.192.083 1.815 1.229 1.815 1.229 1.065 1.814 2.802 1.289 3.492.986.108-.765.418-1.289.762-1.583-2.665-.297-5.464-1.333-5.464-5.937 0-1.312.465-2.387 1.229-3.22-.12-.3-.532-1.523.124-3.172 0 0 1-.322 3.272 1.225.96-.268 1.98-.401 2.992-.407 1.012.006 2.032.139 2.992.407 2.272-1.547 3.272-1.225 3.272-1.225.656 1.649.244 2.872.124 3.172.764.833 1.229 1.908 1.229 3.22 0 4.61-2.801 5.637-5.476 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.792 24 17.22 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;