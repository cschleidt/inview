// COMPONENTS
import { FooterIcons } from './components/FooterIcons';
// STYLES
import './Footer.scss';

const Footer = () => (
  <footer className='mainFooter'>
    <FooterIcons />
    <p className='footerCopyright'> &copy; Inview 2023 </p>
  </footer>
);

export default Footer;
