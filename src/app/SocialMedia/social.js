import Image from 'next/image';
import FacebookLogo from '../../../public/images/Logo/FacebookLogo.svg';
import InstagramLogo from '../../../public/images/Logo/InstagramLogo.svg';
import LinkedinLogo from '../../../public/images/Logo/LinkedinLogo.svg';
import TwitterLogo from '../../../public/images/Logo/TwitterLogo.svg';

const iconStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};
const iconImageStyle = {
  filter: 'grayscale(100%)', // Converts the icons to black and white
};

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-10">
      <div style={iconStyle}>
        <a href="https://www.facebook.com/vosovyapar" target="_blank" className="hover:opacity-80 transition">
          <Image
            alt="Facebook Logo"
            src="/images/Logo/FacebookLogo.svg"
            width={30} 
            height={30} 
            loading="lazy"
          />
        </a>
      </div>
      <div style={iconStyle}>
        <a href="https://www.instagram.com/vosovyapar/" target="_blank" className="hover:opacity-80 transition">
          <Image
            alt="Instagram Logo"
            src="/images/Logo/InstagramLogo.svg"
            width={30} 
            height={30} 
            loading="lazy"
          />
        </a>
      </div>
      <div style={iconStyle}>
        <a href="https://www.linkedin.com/company/vosovyapar/" target="_blank" className="hover:opacity-80 transition">
          <Image
            alt="LinkedIn Logo"
            src="/images/Logo/LinkedinLogo.svg"
            width={30} 
            height={30} 
            loading="lazy"
          />
        </a>
      </div>
      <div style={iconStyle}>
        <a href="https://twitter.com/VosoStore" target="_blank" className="hover:opacity-80 transition">
          <Image
            alt="Twitter Logo"
            src="/images/Logo/TwitterLogo.svg"
            width={30} 
            height={30} 
            loading="lazy"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
