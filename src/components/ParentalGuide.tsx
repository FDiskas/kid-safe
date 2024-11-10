import { Lock, Eye, AlertTriangle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ParentalGuide = () => {
	const guidelines = [
		{
			icon: <Lock />,
			title: "Set Up Parental Controls",
			content:
				"Learn how to configure parental controls across different devices and platforms to create a safer online environment.",
			link: "/guide/parental-controls",
		},
		{
			icon: <Eye />,
			title: "Monitor Online Activity",
			content:
				"Understand the importance of monitoring your child's online activities while respecting their privacy and building trust.",
			link: "/guide/monitoring",
		},
		{
			icon: <Clock />,
			title: "Screen Time Management",
			content:
				"Establish healthy screen time limits and create a balanced schedule for online and offline activities.",
			link: "/guide/screen-time",
		},
		{
			icon: <AlertTriangle />,
			title: "Recognize Warning Signs",
			content:
				"Identify potential red flags in online content and behavior that might indicate unsafe situations.",
			link: "/guide/warning-signs",
		},
	];

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold text-gray-900 mb-6">
				Parent's Guide to Online Safety
			</h1>

			<div className="prose max-w-none">
				<p className="text-lg text-gray-600 mb-8">
					Keeping children safe online requires a combination of technical
					tools, open communication, and active involvement. This guide provides
					comprehensive strategies for parents and guardians.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
				{guidelines.map((item, index) => (
					<Link
						key={index}
						to={item.link}
						className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 hover:border-blue-300 transition-colors"
					>
						<div className="flex items-center space-x-4 mb-4">
							<div className="text-blue-500">{item.icon}</div>
							<h3 className="font-semibold text-gray-900">{item.title}</h3>
						</div>
						<p className="text-gray-600">{item.content}</p>
					</Link>
				))}
			</div>

			<div className="bg-blue-50 p-8 rounded-lg mb-12">
				<h2 className="text-2xl font-bold text-gray-900 mb-4">
					Age-Appropriate Guidelines
				</h2>
				<div className="space-y-6">
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">
							Ages 3-5
						</h3>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Direct supervision during all online activities</li>
							<li>Use of kid-friendly browsers and apps only</li>
							<li>Limited screen time (30-60 minutes per day)</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">
							Ages 6-12
						</h3>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Supervised access to approved websites</li>
							<li>Introduction to digital literacy</li>
							<li>Discussion of online safety rules</li>
						</ul>
					</div>
					<div>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">
							Ages 13+
						</h3>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Gradual independence with continued oversight</li>
							<li>Regular discussions about online experiences</li>
							<li>Education about privacy and digital footprint</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParentalGuide;
