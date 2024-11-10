import React from "react";
import { AlertTriangle, Shield, Heart, HelpCircle } from "lucide-react";

const WarningSigns = () => {
	const signs = [
		{
			category: "Behavioral Changes",
			items: [
				"Sudden secretiveness about online activities",
				"Excessive time spent online",
				"Emotional reactions when internet access is limited",
				"Changes in sleep patterns or appetite",
			],
		},
		{
			category: "Online Activity Red Flags",
			items: [
				"Unknown people in contact lists",
				"Inappropriate content in browsing history",
				"Suspicious downloads or apps",
				"Multiple accounts on same platforms",
			],
		},
		{
			category: "Social Indicators",
			items: [
				"Withdrawal from family activities",
				"Declining grades or school performance",
				"Loss of interest in offline activities",
				"Changes in friend groups",
			],
		},
	];

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold text-gray-900 mb-6">
				Recognizing Warning Signs
			</h1>

			<div className="prose max-w-none mb-8">
				<p className="text-lg text-gray-600">
					Learn to identify potential red flags in online behavior and content
					that might indicate your child is exposed to inappropriate or
					dangerous situations.
				</p>
			</div>

			<div className="space-y-8 mb-12">
				{signs.map((section, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							{section.category}
						</h2>
						<ul className="space-y-3">
							{section.items.map((item, itemIndex) => (
								<li key={itemIndex} className="flex items-start space-x-3">
									<AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />
									<span className="text-gray-600">{item}</span>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="bg-blue-50 p-8 rounded-lg">
				<h2 className="text-2xl font-semibold text-gray-900 mb-6">
					How to Respond
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div>
						<Shield className="w-6 h-6 text-blue-500 mb-3" />
						<h3 className="font-semibold text-gray-800 mb-2">Stay Calm</h3>
						<p className="text-gray-600">
							Maintain composure and approach the situation with understanding
							rather than judgment.
						</p>
					</div>
					<div>
						<Heart className="w-6 h-6 text-blue-500 mb-3" />
						<h3 className="font-semibold text-gray-800 mb-2">
							Open Communication
						</h3>
						<p className="text-gray-600">
							Create a safe space for your child to share concerns and
							experiences.
						</p>
					</div>
					<div>
						<HelpCircle className="w-6 h-6 text-blue-500 mb-3" />
						<h3 className="font-semibold text-gray-800 mb-2">Seek Help</h3>
						<p className="text-gray-600">
							Don't hesitate to consult professionals or counselors when needed.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WarningSigns;
