import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../../assets/logo.jpg";
const Footer = () => {
	return (
		<footer className="pt-6 pb-20 border-t">
			<div className="container mx-auto flex flex-col lg:flex-row justify-evenly ">
				<div className="logo flex items-center lg:gap-4  justify-center">
					<Link to="/">
						<img className="h-12 w-12 rounded-full" src={logo} alt="Logo" />
					</Link>
					<h2 className="text-xl font-bold">MultiLingual Mastery</h2>
				</div>
				<div className="contact-info  space-y-2 lg:mt-16 text-center">
					<p>Email: info@multiLingualmastery.com</p>
					<p>Phone: 123-456-7890</p>
					<p>Address: 123 Main Street, California, USA</p>
				</div>

				<div className="social-media flex items-center justify-center my-8 lg:mt-0">
					<span className="footer-title mb-0 ">Social</span>
					<Link to="https://www.facebook.com" className=" hover:text-blue-500 mx-2">
						<FaFacebook></FaFacebook>
					</Link>
					<Link to="https://www.instagram.com" className=" hover:text-purple-500 mx-2">
						<FaTwitter></FaTwitter>
					</Link>
					<Link to="https://www.twitter.com" className=" hover:text-blue-400 mx-2">
						<FaInstagram></FaInstagram>
					</Link>
				</div>
			</div>
			<div className="mb-4 lg:mt-8 flex justify-center lg:ml-32">
				<p className="text-sm lg:text-base">Copywright &copy; {new Date().getFullYear()} MultiLingual Mastery. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
