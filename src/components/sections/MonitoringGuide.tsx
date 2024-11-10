import { Eye, Users, MessageCircle, AlertTriangle } from "lucide-react";

const MonitoringGuide = () => {
	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold text-gray-900 mb-6">
				Monitoring Online Activity
			</h1>

			<div className="prose max-w-none mb-8">
				<p className="text-lg text-gray-600">
					Learn how to effectively monitor your child's online activities while
					maintaining trust and open communication.
				</p>
			</div>

			<div className="grid gap-8 mb-12">
				<div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
					<div className="flex items-center space-x-3 mb-4">
						<Users className="w-6 h-6 text-blue-500" />
						<h2 className="text-xl font-semibold text-gray-900">
							Balancing Privacy and Safety
						</h2>
					</div>
					<p className="text-gray-600 mb-4">
						While monitoring is important, respecting your child's privacy helps
						maintain trust. Be transparent about your monitoring activities and
						explain why they're necessary.
					</p>
					<ul className="space-y-2 text-gray-600">
						<li className="flex items-start space-x-2">
							<span className="text-blue-500">•</span>
							<span>Discuss monitoring practices openly</span>
						</li>
						<li className="flex items-start space-x-2">
							<span className="text-blue-500">•</span>
							<span>Set clear boundaries and expectations</span>
						</li>
						<li className="flex items-start space-x-2">
							<span className="text-blue-500">•</span>
							<span>Adjust monitoring based on age and maturity</span>
						</li>
					</ul>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
					<div className="flex items-center space-x-3 mb-4">
						<Eye className="w-6 h-6 text-blue-500" />
						<h2 className="text-xl font-semibold text-gray-900">
							Monitoring Strategies
						</h2>
					</div>
					<div className="space-y-4">
						<p className="text-gray-600">
							Implement these effective monitoring strategies while maintaining
							a healthy parent-child relationship:
						</p>
						<ul className="space-y-2 text-gray-600">
							<li className="flex items-start space-x-2">
								<span className="text-blue-500">1.</span>
								<span>Regular check-ins and discussions</span>
							</li>
							<li className="flex items-start space-x-2">
								<span className="text-blue-500">2.</span>
								<span>Review browsing history together</span>
							</li>
							<li className="flex items-start space-x-2">
								<span className="text-blue-500">3.</span>
								<span>Use family-sharing features</span>
							</li>
							<li className="flex items-start space-x-2">
								<span className="text-blue-500">4.</span>
								<span>Monitor screen time and app usage</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="bg-blue-50 p-8 rounded-lg">
				<h2 className="text-2xl font-semibold text-gray-900 mb-4">
					Communication Tips
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<MessageCircle className="w-6 h-6 text-blue-500 mb-2" />
						<h3 className="font-semibold text-gray-800 mb-2">Open Dialogue</h3>
						<p className="text-gray-600">
							Maintain regular conversations about online experiences and
							encourage your child to share concerns.
						</p>
					</div>
					<div>
						<AlertTriangle className="w-6 h-6 text-blue-500 mb-2" />
						<h3 className="font-semibold text-gray-800 mb-2">Warning Signs</h3>
						<p className="text-gray-600">
							Learn to recognize signs that may indicate online issues and
							address them promptly.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MonitoringGuide;
