import { Fade } from "react-awesome-reveal";

import { Disclosure } from "@headlessui/react";
import { HiChevronUp } from "react-icons/hi";

const FAQ = () => {
	return (
		<Fade>
			<h2 className="font-bold text-2xl lg:text-3xl text-center max-w-screen-xl mx-auto">Frequently Asked Questions</h2>
			<div className="w-full px-4 mt-10 mb-32">
				<div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
					<Disclosure>
						{({ open }) => (
							<>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span>How do I enroll in a course?</span>
									<HiChevronUp className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
									To enroll in a course, visit our website, browse the available courses, and click on the &quot;Enroll&quot; button for the course
									you wish to take. Follow the prompts to complete the enrollment process.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
					<Disclosure as="div" className="mt-2">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span>Can I access the course materials on multiple devices?</span>
									<HiChevronUp className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
									Yes, you can access the course materials on multiple devices. Our platform is responsive and accessible from desktops, laptops,
									tablets, and smartphones.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
					<Disclosure as="div" className="mt-2">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span>What payment methods do you accept?</span>
									<HiChevronUp className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
									We accept various payment methods, including credit cards, debit cards, and online payment platforms such as PayPal. You can choose
									your preferred payment option during the enrollment process.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
					<Disclosure as="div" className="mt-2">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span>How long do I have access to the course materials?</span>
									<HiChevronUp className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
									Once enrolled in a course, you will have unlimited access to the course materials for the duration of the course. You can revisit
									the materials and review the content at your own pace.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
					<Disclosure as="div" className="mt-2">
						{({ open }) => (
							<>
								<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
									<span>Is Multilingual Mastery worth it?</span>
									<HiChevronUp className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
								</Disclosure.Button>
								<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
									Whether or not Multilingual Mastery is worth it depends on your individual needs and goals. If you&apos;re serious about learning a
									new language, and you&apos;re willing to put in the time and effort, then Multilingual Mastery can be a valuable resource. However,
									if you&apos;re just looking for a quick and easy way to learn a language, then Multilingual Mastery may not be the best option for
									you.
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</div>
			</div>
		</Fade>
	);
};

export default FAQ;
