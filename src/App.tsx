import Hero from './components/Hero';
import Skills from './components/Skills';
import Works from './components/Works';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Profile from './components/Profile';
function App() {

  return (
    <>
    <Hero/>
    <Skills/>
    <Profile/>
    <Works id="works"/>
    <Experience/>
<Contact id="contact"/>
</>
  );
}
export default App
