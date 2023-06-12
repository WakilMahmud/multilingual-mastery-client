import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../../../assets/react.svg";
const Footer = () => {
	return (
		<footer className="bg-gray-900 pt-6 pb-20">
			<div className="container mx-auto flex flex-col lg:flex-row justify-evenly">
				<div className="logo flex items-center gap-4 text-white justify-center">
					<Link to="/">
						<img className="h-12 w-12 rounded-full" src={logo} alt="Logo" />
					</Link>
					<h2 className="text-xl font-bold">MultiLingual Mastery</h2>
				</div>
				<div className="contact-info text-white space-y-2 mt-16 text-center">
					<p>Email: info@toycar.com</p>
					<p>Phone: 123-456-7890</p>
					<p>Address: 123 Main Street, City, Country</p>
				</div>

				<div className="social-media flex items-center justify-center my-8 lg:mt-0">
					<span className="footer-title mb-0 text-white">Social</span>
					<Link to="https://www.facebook.com" className="text-white hover:text-blue-500 mx-2">
						<FaFacebook></FaFacebook>
					</Link>
					<Link to="https://www.instagram.com" className="text-white hover:text-purple-500 mx-2">
						<FaTwitter></FaTwitter>
					</Link>
					<Link to="https://www.twitter.com" className="text-white hover:text-blue-400 mx-2">
						<FaInstagram></FaInstagram>
					</Link>
				</div>
			</div>
			<div className="flex justify-center text-white mt-8">
				<p>Copywright &copy; {new Date().getFullYear()} MultiLingual Mastery. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
