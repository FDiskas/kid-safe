import { Shield, Eye, Lock, Users } from "lucide-react";

const SafetyTips = () => {
	const tips = [
		{
			icon: <Shield className="w-6 h-6" />,
			title: "Use Parental Controls",
			description: "Enable built-in parental controls on devices and browsers",
		},
		{
			icon: <Eye className="w-6 h-6" />,
			title: "Monitor Activity",
			description: "Keep an eye on browsing history and online activities",
		},
		{
			icon: <Lock className="w-6 h-6" />,
			title: "Secure Browsing",
			description: "Use safe search and kid-friendly browsers",
		},
		{
			icon: <Users className="w-6 h-6" />,
			title: "Open Communication",
			description: "Discuss online safety with children regularly",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-12">
			{tips.map((tip, index) => (
				<div
					key={index}
					className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 hover:border-blue-300 transition-colors"
				>
					<div className="flex items-center space-x-4">
						<div className="text-blue-500">{tip.icon}</div>
						<div>
							<h3 className="font-semibold text-gray-900">{tip.title}</h3>
							<p className="text-gray-600 text-sm mt-1">{tip.description}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default SafetyTips;
