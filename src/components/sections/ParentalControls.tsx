import { Lock, Settings, Shield } from "lucide-react";

const ParentalControls = () => {
	const platforms = [
		{
			title: "Windows",
			steps: [
				"Open Windows Settings",
				"Navigate to Accounts > Family",
				"Add a child account",
				"Configure content restrictions",
			],
		},
		{
			title: "macOS",
			steps: [
				"Open System Preferences",
				"Click on Screen Time",
				"Enable parental controls",
				"Set content & privacy restrictions",
			],
		},
		{
			title: "iOS",
			steps: [
				"Go to Settings",
				"Tap Screen Time",
				"Enable Content & Privacy Restrictions",
				"Configure allowed content",
			],
		},
		{
			title: "Android",
			steps: [
				"Install Google Family Link",
				"Create a child account",
				"Set digital ground rules",
				"Monitor activity",
			],
		},
	];

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold text-gray-900 mb-6">
				Setting Up Parental Controls
			</h1>

			<div className="prose max-w-none mb-8">
				<p className="text-lg text-gray-600">
					Learn how to configure parental controls across different devices and
					platforms to create a safer online environment for your children.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
				{platforms.map((platform, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
					>
						<h3 className="font-semibold text-gray-900 mb-4">
							{platform.title}
						</h3>
						<ol className="space-y-2">
							{platform.steps.map((step, stepIndex) => (
								<li key={stepIndex} className="text-gray-600 flex items-start">
									<span className="mr-2 text-blue-500">{stepIndex + 1}.</span>
									{step}
								</li>
							))}
						</ol>
					</div>
				))}
			</div>

			<div className="bg-blue-50 p-8 rounded-lg">
				<h2 className="text-2xl font-semibold text-gray-900 mb-4">
					Additional Tips
				</h2>
				<ul className="space-y-4">
					<li className="flex items-start space-x-3">
						<Lock className="w-5 h-5 text-blue-500 mt-1" />
						<span className="text-gray-700">
							Regularly update passwords and security settings
						</span>
					</li>
					<li className="flex items-start space-x-3">
						<Settings className="w-5 h-5 text-blue-500 mt-1" />
						<span className="text-gray-700">
							Review and adjust settings periodically
						</span>
					</li>
					<li className="flex items-start space-x-3">
						<Shield className="w-5 h-5 text-blue-500 mt-1" />
						<span className="text-gray-700">
							Use additional security software when needed
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ParentalControls;
