import { IconContext } from 'react-icons'
import { FaGithub, FaTwitter, FaDiscord, FaInstagram} from 'react-icons/fa';

interface ContactProps {
    id?: string;
}

const Contact = (props: ContactProps) => {
  return (
    <div id={props.id} className="contact-zone">
      <h2>Contact</h2>
      <div className="sns-icons">
      <IconContext.Provider value={{ color: '#ccc', size: '100px' }}>

        <a href="https://github.com/TatsuyaM2667" target="_blank" rel="noopener noreferrer">
          <FaGithub size={70} />
          <h3>GitHub</h3>
        </a>
        <a href="https://x.com/TatsuyaM2667" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={70} />
          <h3>Twitter</h3>
        </a>
        <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer">
          <FaDiscord size={70} />
          <h3>Discord</h3>
        </a>
        <a href="https://www.instagram.com/tatsuya.m._.07/?__pwa=1" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={70} />
          <h3>Instagram</h3>
        </a>
        </IconContext.Provider>

      </div>
      
    </div>

  )
}

export default Contact
