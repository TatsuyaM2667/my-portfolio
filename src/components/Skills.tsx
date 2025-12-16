
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  const programmingData = [
    { name: 'C', value: 80 },
    { name: 'C++', value: 70 },
    { name: 'JavaScript', value: 90 },
    { name: 'TypeScript', value: 85 },
    { name: 'Python', value: 75 },
  ];

  const frontendData = [
    { name: 'HTML', value: 95 },
    { name: 'CSS', value: 90 },
    { name: 'Tailwind', value: 80 },
    { name: 'React', value: 85 },
  ];

  const mobileData = [
    { name: 'React Native', value: 70 },
    { name: 'Android', value: 65 },
  ];

  const frameworkData = [
    { name: 'Electron', value: 75 },
    { name: 'Next.js', value: 80 },
    { name: 'Expo', value: 70 },
    { name: 'Google Apps Script', value: 60 },
  ];

  const toolsData = [
    { name: 'Windows', value: 90 },
    { name: 'Arduino', value: 70 },
    { name: 'VS Code', value: 95 },
    { name: 'Git', value: 85 },
    { name: 'GitHub', value: 85 },
    { name: 'Vite', value: 80 },
    { name: 'Google Apps Script', value: 60 },
    { name: 'Android Studio', value: 65 },
  ];

  const databaseData = [
    { name: 'Firebase', value: 75 },
    { name: 'Cloudflare', value: 70 },
  ];

  const devopsData = [
    { name: 'GCP', value: 60 },
    { name: 'AWS', value: 65 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658'];

  const renderPieChart = (data: any[]) => (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
  return (
    <div className="skills-zone">
      <h2>Skills</h2>

      <div className="skill-section" ref={(el) => { sectionRefs.current[0] = el; }}>
        <h3>Programming Languages</h3>
        <img alt="my skills" src="https://skillicons.dev/icons?theme=dark&perline=9&i=c,cpp,js,ts,python" />
        {renderPieChart(programmingData)}
      </div>

      <div className="skill-section" ref={(el) => { sectionRefs.current[1] = el; }}>
        <h3>Frontend Development</h3>
        <img alt="my skills" src="https://skillicons.dev/icons?theme=dark&perline=9&i=html,css,tailwind,react" />
        {renderPieChart(frontendData)}
      </div>

      <div className="skill-section" ref={(el) => { sectionRefs.current[2] = el; }}>
        <h3>Mobile App Development</h3>
        <img alt="My Skills" src="https://go-skill-icons.vercel.app/api/icons?i=reactnative,android&titles=true&theme=dark" />
        {renderPieChart(mobileData)}
      </div>

      <div className="skill-section" ref={(el) => { sectionRefs.current[3] = el; }}>
        <h3>Framework</h3>
        <img alt="my skills" src="https://skillicons.dev/icons?theme=dark&perline=15&i=electron,next" />
        <img alt="My Skills" src="https://go-skill-icons.vercel.app/api/icons?i=expo,googleappscript&titles=true&theme=dark" />
        {renderPieChart(frameworkData)}
      </div>

      <div className="skill-section" ref={(el) => { sectionRefs.current[4] = el; }}>
        <h3>Tools</h3>
        <img alt="my skills" src="https://skillicons.dev/icons?theme=dark&perline=15&i=windows,arduino,vscode,git,github,vite" />
        <img alt="My Skills" src="https://go-skill-icons.vercel.app/api/icons?i=googleappsscript,androidstudio&titles=true&theme=dark" />
        {renderPieChart(toolsData)}
      </div>

      <div className="skill-section" ref={(el) => { sectionRefs.current[5] = el; }}>
        <h3>Database</h3>
        <img alt="My Skills" src="https://go-skill-icons.vercel.app/api/icons?i=firebase,cloudflare&titles=true&theme=dark" />
        {renderPieChart(databaseData)}
      </div>

      <div className="skill-section" ref={(el) => { sectionRefs.current[6] = el; }}>
        <h3>Devops</h3>
        <img alt="my skills" src="https://skillicons.dev/icons?theme=dark&perline=7&i=gcp,aws" />
        {renderPieChart(devopsData)}
      </div>
    </div>
  )
}

export default Skills
