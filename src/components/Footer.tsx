import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100010386438053",
      icon: FaFacebook,
      color: "#1877F2",
    },
    // {
    //   platform: "Instagram",
    //   url: "https://www.instagram.com/leeyahav",
    //   icon: FaInstagram,
    //   color: "#E4405F",
    // },
    // {
    //   platform: "LinkedIn",
    //   url: "https://www.linkedin.com/in/leeyahav",
    //   icon: FaLinkedin,
    //   color: "#0077B5",
    // },
    {
      platform: "WhatsApp",
      url: "https://wa.me/+9725244474",
      icon: FaWhatsapp,
      color: "#25D366",
    },
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@orlyweisman1597",
      icon: FaYoutube,
      color: "#FF0000",
    },
  ];

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-center space-x-6">
        {socialLinks.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-75 transition-opacity"
            style={{ color: link.color }}
          >
            <link.icon size={30} />
          </a>
        ))}
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2024 Lee Yahav. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
