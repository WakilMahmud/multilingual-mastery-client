import Support from "../../../assets/Support.svg";

const Services = () => {
	const servicesData = [
		{
			title: "Interactive Language Lessons",
			description: "Engage in interactive lessons with certified language instructors.",
			icon: "https://img.freepik.com/free-vector/social-interaction-concept-illustration_114360-4864.jpg?w=2000",
		},
		{
			title: "Customized Learning Plans",
			description: "Receive personalized learning plans tailored to your language goals.",
			icon: "https://static.vecteezy.com/system/resources/previews/002/746/188/original/studying-goals-flat-color-icon-focus-on-education-learning-plan-skill-development-program-learning-course-cartoon-style-clip-art-for-mobile-app-isolated-rgb-illustration-vector.jpg",
		},
		{
			title: "Multilingual Resources",
			description: "Access a vast library of multilingual resources, including videos, books, and more.",
			icon: "https://icon-library.com/images/multi-language-icon/multi-language-icon-17.jpg",
		},
		{
			title: "Community of Learners",
			description: "Join a vibrant community of language learners from around the world.",
			icon: "https://static.vecteezy.com/system/resources/previews/002/210/213/non_2x/community-education-concept-icon-vector.jpg",
		},
	];

	return (
		<section className="my-32 max-w-screen-xl mx-auto px-2">
			<h1 className="font-bold text-3xl text-center">Services We Provide</h1>
			<p className="mt-16 mb-8">Explore our range of services to enhance your language learning experience.</p>

			<div className="flex flex-col lg:flex-row justify-between">
				<div className="w-full lg:w-3/5">
					{servicesData.map((service, index) => (
						<div key={index} className="flex gap-4 items-center mb-4">
							<div className="">
								<img src={service.icon} alt={`${service.title} Icon`} className="w-20 h-20" />
							</div>
							<div className="w-full lg:w-3/4">
								<h3 className="text-xl font-semibold">{service.title}</h3>
								<p className="text-gray-500 text-sm">{service.description}</p>
							</div>
						</div>
					))}
				</div>
				<div className="w-full lg:w-2/5">
					<img src={Support} alt="Support" className="w-full rounded-lg" />
				</div>
			</div>
		</section>
	);
};

export default Services;
