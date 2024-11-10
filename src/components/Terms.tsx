import { AlertTriangle, Shield, HelpCircle } from "lucide-react";

const Terms = () => {
	const sections = [
		{
			title: "Service Usage",
			content:
				"Kid-Safe Link Checker is provided as-is for checking website safety. While we strive for accuracy, we cannot guarantee the complete safety of any website.",
		},
		{
			title: "User Responsibilities",
			content:
				"Users must supervise children's online activities regardless of our safety assessments. Our tool is a supplement to, not a replacement for, parental oversight.",
		},
		{
			title: "Limitations",
			content:
				"We are not liable for any damages arising from the use of our service. Safety checks are based on available data and may not catch all inappropriate content.",
		},
		{
			title: "Modifications",
			content:
				"We reserve the right to modify or discontinue the service at any time. Changes to terms will be communicated to users.",
		},
	];

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Use</h1>

			<div className="prose max-w-none mb-8">
				<p className="text-lg text-gray-600">
					By using Kid-Safe Link Checker, you agree to these terms and
					conditions. Please read them carefully.
				</p>
			</div>

			<div className="space-y-6 mb-12">
				{sections.map((section, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-3">
							{section.title}
						</h2>
						<p className="text-gray-600">{section.content}</p>
					</div>
				))}
			</div>

			<div className="bg-blue-50 p-8 rounded-lg space-y-6">
				<div className="flex items-start space-x-3">
					<AlertTriangle className="w-6 h-6 text-yellow-500 mt-1" />
					<div>
						<h3 className="font-semibold text-gray-900 mb-2">Disclaimer</h3>
						<p className="text-gray-600">
							Our service provides automated safety checks but cannot guarantee
							complete accuracy. Always use parental judgment and supervision.
						</p>
					</div>
				</div>

				<div className="flex items-start space-x-3">
					<Shield className="w-6 h-6 text-blue-500 mt-1" />
					<div>
						<h3 className="font-semibold text-gray-900 mb-2">Safety First</h3>
						<p className="text-gray-600">
							This tool should be used as part of a comprehensive approach to
							online safety, including active parental involvement and
							education.
						</p>
					</div>
				</div>

				<div className="flex items-start space-x-3">
					<HelpCircle className="w-6 h-6 text-blue-500 mt-1" />
					<div>
						<h3 className="font-semibold text-gray-900 mb-2">Questions?</h3>
						<p className="text-gray-600">
							If you have any questions about these terms, please contact us
							through our support channels.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Terms;
