const ClassReviewsSection = () => {
	const reviewsData = [
		{
			author: "John Doe",
			review: "I had a fantastic experience learning a new language with this platform. The instructors were knowledgeable and supportive.",
			imageUrl:
				"https://ishtailista.files.wordpress.com/2018/01/jlf-2018-men-potraits-indian-men-jaipur-literature-festivalq-2018-street-style-by-abhimanyu-singh-rathore-jaipur-men-6.jpg?w=1075",
		},
		{
			author: "Jane Smith",
			review: "The interactive lessons made learning fun and engaging. I highly recommend this platform to anyone looking to learn a new language.",
			imageUrl:
				"https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=",
		},
		{
			author: "Mike Johnson",
			review: "Tailored learning plans facilitated my language goals, culminating in heightened language proficiency and newfound confidence.",
			imageUrl: "https://st2.depositphotos.com/1743476/11581/i/450/depositphotos_115812380-stock-photo-cool-african-man.jpg",
		},
	];

	return (
		<section className="my-32">
			<h2 className="font-bold text-3xl text-center my-10">Class Reviews</h2>

			<div className="flex flex-col lg:flex-row justify-center items-center gap-4 ">
				{reviewsData.map((review, index) => (
					<div key={index} className="card card-compact w-80 h-96 bg-base-100 shadow-xl md:mb-0 mb-10">
						<figure>
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXv5fwKlezm0Tj0nWJhKfbTRkMG_Hd32Xh7p_d_7XZ1W3kQOJg2NTTrG_w0sgmqJe61sQ&usqp=CAU"
								className="w-96 h-96"
							/>
						</figure>
						<div className="avatar ">
							<div className="w-20 rounded-full mx-auto relative bottom-12 ring  ring-yellow-700 ring-offset-base-100 ring-offset-2">
								<img src={review.imageUrl} className="" />
							</div>
						</div>
						<div className="card-body relative bottom-10">
							<h2 className="card-title justify-center">{review.author}</h2>
							<p>{review.review}</p>
						</div>
						<footer className="footer footer-center p-4 bg-base-200 text-base-content"></footer>
					</div>
				))}
			</div>
		</section>
	);
};

export default ClassReviewsSection;
