import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import icon from "../../../public/icon.png";

function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto py-6 px-4">
        <div className="md:flex md:justify-center md:items-center">
          <div className="flex justify-center items-center md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <img src={icon} alt="Logo" className="w-20 h-20 mr-2" />
            <h2 className="text-2xl font-bold text-white">Kitchen Zen</h2>
          </div>
          <div className="flex justify-center items-center md:w-1/2 lg:w-1/3 mb-4 md:mb-0">
            <p className="text-gray-500 text-xl">Follow us:</p>

            <div className="flex mx-2 gap-2">
              <a href="#" className="text-blue-500 hover:text-white transition duration-300 text-2xl "><FaFacebook /></a>
              <a href="#" className="text-blue-500  hover:text-white transition duration-300 text-2xl "><FaTwitter /></a>
              <a href="#" className="text-gray-500 hover:text-white transition duration-300 text-pink-600 text-2xl "><FaInstagram /></a>
            </div>
          </div>
          <div className="md:w-1/2 lg:w-1/3">
            <ul className="text-gray-500 text-sm md:text-base lg:text-lg">
              <li className="mb-2 md:mb-4"><a href="#" className="hover:text-white transition duration-300">About Us</a></li>
              <li className="mb-2 md:mb-4"><a href="#" className="hover:text-white transition duration-300">Contact Us</a></li>
              <li className="mb-2 md:mb-4"><a href="#" className="hover:text-white transition duration-300">Privacy Policy</a></li>
              <li className="mb-2 md:mb-4"><a href="#" className="hover:text-white transition duration-300">Terms and Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 text-gray-500 text-sm md:text-base lg:text-lg">
          <p>&copy; 2023 Kitchen Zen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
