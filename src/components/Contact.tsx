import { IconContext } from 'react-icons'
import { FaGithub, FaTwitter, FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa';

interface ContactProps {
    id?: string;
}

const Contact = (props: ContactProps) => {
  return (
    <div id={props.id} className="contact-zone">
      <h2>Contact</h2>
      <div className="sns-icons">
      <IconContext.Provider value={{ color: '#fff', size: '80px' }}>

        <a href="https://github.com/TatsuyaM2667" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <h6>GitHub</h6>
        </a>
        <a href="https://x.com/TatsuyaM2667" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
          <h6>Twitter</h6>
        </a>
        <a href="https://discordapp.com/users/823935313410916372" target="_blank" rel="noopener noreferrer">
          <FaDiscord />
          <h6>Discord</h6>
        </a>
        <a href="https://www.instagram.com/tatsuya.m._.07/?__pwa=1" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
          <h6>Instagram</h6>
        </a>
        <a href="https://www.linkedin.com/in/tatsuya-miura-1bb48339a" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <h6>LinkedIn</h6>
        </a>
        </IconContext.Provider>

      </div>
      
    </div>

  )
}

export default Contact
