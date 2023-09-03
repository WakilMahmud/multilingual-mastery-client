const Contact = () => {
	return (
		<div className="bg-slate-50 my-32">
			<div className="max-w-screen-xl mx-auto py-20 lg:px-0 px-5">
				<h1 className="text-4xl font-bold  text-center">Contact With Us</h1>

				<div className="py-12 grid md:grid-cols-2 grid-cols-1 gap-10">
					<div className="w-full lg:w-3/5">
						<p>Have questions or need assistance? Feel free to get in touch with us. We&apos;re here to help!</p>
						<div className="mt-10 flex gap-x-6 items-center">
							<div>
								<img src="https://i.ibb.co/17476Nb/contact-location.png" alt="" className="w-[50px]" />
							</div>
							<div className="w-full">
								<h4 className="text-xl font-bold text-black">Address </h4>
								<p className="text-base mt-2">123 Main Street, California, USA</p>
							</div>
						</div>
						<div className="mt-10 flex gap-x-6 items-center">
							<div>
								<img src="https://i.ibb.co/0ZvgXY5/contact-phone.png" alt="" className="w-[50px]" />
							</div>
							<div>
								<h4 className="text-xl font-bold text-black">Phone </h4>
								<p className="text-base mt-2">123-456-7890</p>
							</div>
						</div>
						<div className="mt-10 flex gap-x-6 items-center">
							<div>
								<img src="https://i.ibb.co/wBv187q/contact-email.png" alt="" className="w-[50px]" />
							</div>
							<div>
								<h4 className="text-xl font-bold text-black">Email </h4>
								<p className="text-base mt-2">info@multiLingualmastery.com</p>
							</div>
						</div>
					</div>
					<div>
						<div>
							<div className="flex justify-center gap-x-5">
								<input className="py-3 px-3 w-full box-border border rounded-lg" placeholder="Enter your first name" />
								<input className="py-3 px-3 w-full box-border border rounded-lg" placeholder="Enter your last name" />
							</div>
							<input className="mt-5 py-3 px-3 w-full box-border border  rounded-lg" placeholder="Enter your email" />
							<input className="mt-5 py-3 px-3 w-full box-border border  rounded-lg" placeholder="Enter subject" />
							<textarea rows="4" cols="" className="mt-5 py-3 px-3 w-full box-border border rounded-lg"></textarea>
							<input
								className="btn btn-info btn-outline mt-5 hover:bg-white hover:text-primary text-white font-medium text-lg capitalize transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
								type="submit"
								value="Send Message"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
