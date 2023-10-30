import Image from "next/image";
import ProfileImage from "../../../../public/images/Profile.png";
import MakeupImage from "../../../../public/images/makeup.jpg";

const Header = () => {
  const headerStyle = {
    height: "700px",
    width: "100%",
    backgroundImage: `url(${MakeupImage.src})`,
    backgroundRepeat: "no-repeat", 
    backgroundPosition: "center", // Center the background image
    backgroundSize: "cover", // Set the background size to "cover" for wide screens
  };

  // For small screens, adjust backgroundSize to "contain"
  const smallScreenStyles = {
    ...headerStyle,
    '@media (maxWidth: 767px)': {
      backgroundSize: "contain", // Set the background size to "contain" for small screens
    },
  };

  const imageContainerStyle = {
    borderRadius: "50%",
    overflow: "hidden",
    height: "288px", // Set the exact height for the image container
    width: "288px", // Set the exact width for the image container
  };

  return (
    <div className="bg-[url('/images/background.png')] bg-cover">
      <div className="relative w-full h-80 bg-[url('/images/makeup.jpg')] bg-cover bg-center flex items-end justify-center" style={smallScreenStyles}>
        <div className="absolute bottom-0 mb-[-7.5rem]">
          <div className="rounded-full overflow-hidden h-72 w-72 transition duration-300 transform" style={imageContainerStyle}>
            <Image 
              src={ProfileImage} 
  height={72}
  width={72}
              alt="img" 
              layout="responsive" 
              objectFit="cover" 
              style={{ 
                maskImage: 'radial-gradient(circle, transparent 0%, black 100%)',
                borderRadius: '50%',
                border: '10px solid #888888',
    backgroundColor: '#fff', // Set the background color to white to prevent transparency
              }} 
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
