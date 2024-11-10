import { Shield, Heart, Code } from "lucide-react";

const About = () => {
	return (
		<div className="max-w-4xl mx-auto">
			<div className="text-center mb-12">
				<h1 className="text-3xl font-bold text-gray-900 mb-6">
					About Kid-Safe Link Checker
				</h1>
				<p className="text-lg text-gray-600">
					Dedicated to creating a safer online environment for children through
					technology and education.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				<div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
					<div className="flex items-center space-x-3 mb-4">
						<Shield className="w-6 h-6 text-blue-500" />
						<h2 className="text-xl font-semibold text-gray-900">Our Mission</h2>
					</div>
					<p className="text-gray-600">
						To provide parents and guardians with reliable tools and resources
						for protecting children in the digital age, making the internet a
						safer space for young minds to explore and learn.
					</p>
				</div>

				<div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
					<div className="flex items-center space-x-3 mb-4">
						<Code className="w-6 h-6 text-blue-500" />
						<h2 className="text-xl font-semibold text-gray-900">
							How It Works
						</h2>
					</div>
					<p className="text-gray-600">
						Our tool analyzes websites using advanced algorithms and databases
						to identify potential risks and inappropriate content, providing
						real-time safety assessments for concerned parents.
					</p>
				</div>
			</div>

			<div className="bg-blue-50 p-8 rounded-lg mb-12">
				<h2 className="text-2xl font-semibold text-gray-900 mb-6">
					Why Choose Kid-Safe?
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<h3 className="font-semibold text-gray-800 mb-2">
							Real-Time Analysis
						</h3>
						<p className="text-gray-600">
							Get instant feedback on website safety with our advanced checking
							system.
						</p>
					</div>
					<div>
						<h3 className="font-semibold text-gray-800 mb-2">
							Educational Resources
						</h3>
						<p className="text-gray-600">
							Access comprehensive guides and tips for maintaining online
							safety.
						</p>
					</div>
					<div>
						<h3 className="font-semibold text-gray-800 mb-2">
							Regular Updates
						</h3>
						<p className="text-gray-600">
							Our database is continuously updated to protect against new online
							threats.
						</p>
					</div>
					<div>
						<h3 className="font-semibold text-gray-800 mb-2">User Privacy</h3>
						<p className="text-gray-600">
							We prioritize user privacy and never store personal information.
						</p>
					</div>
				</div>
			</div>

			<div className="text-center bg-white p-8 rounded-lg shadow-sm border border-blue-100">
				<div className="flex justify-center mb-4">
					<Heart className="w-8 h-8 text-red-500" />
				</div>
				<h2 className="text-2xl font-semibold text-gray-900 mb-4">
					Support Our Mission
				</h2>
				<p className="text-gray-600 max-w-2xl mx-auto">
					Kid-Safe Link Checker is a free tool maintained by a dedicated team of
					developers and online safety experts. Your support helps us continue
					protecting children online.
				</p>
			</div>
		</div>
	);
};

export default About;
