import Marquee from "react-fast-marquee";

const Partners = () => {
	return (
		<div className="container my-32">
			<div className="mx-auto max-w-screen-xl" data-aos="flip-left">
				<h1 className="font-bold text-3xl text-center">Our Partners</h1>
			</div>
			<div className="text-gray-500 md:grid-cols-6 lg:mt-20">
				<Marquee loop={0} speed={60} pauseOnHover>
					<img className="h-40  lg:mr-20" src="https://img.freepik.com/premium-vector/online-record-logo-design_28897-887.jpg" alt="logo" />
					<img
						className="h-40  lg:mr-20"
						src="https://marketplace-images-production.s3-us-west-2.amazonaws.com/vault/items/preview-533eb27f-ce88-4c88-a2f9-70fb0a140b29-1180x660-CxFob.jpg"
						alt="logo"
					/>
					<img
						className="h-40  lg:mr-20"
						src="https://images-platform.99static.com//qml5KA4-8H2nuEniBENMb_UzSnA=/850x100:1392x642/fit-in/500x500/99designs-contests-attachments/123/123874/attachment_123874618"
						alt="logo"
					/>
					<img
						className="h-40  lg:mr-20"
						src="https://img.freepik.com/vector-premium/concepto-curso-logo-escuela-espanol-espanol-vector-habla-diseno-fluido-curso_41737-946.jpg"
						alt="logo"
					/>
					<img
						className="h-40  lg:mr-20"
						src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-abstract-modern-international-language-center-logo-template-vector-logo-for-business-png-image_5375414.jpg"
						alt="logo"
					/>
				</Marquee>
			</div>
		</div>
	);
};

export default Partners;
