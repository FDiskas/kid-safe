import { Clock, Sun, Moon } from "lucide-react";

const ScreenTime = () => {
	const ageGroups = [
		{
			age: "3-5 years",
			limit: "1 hour per day",
			activities: [
				"Educational games",
				"Interactive stories",
				"Supervised video calls with family",
			],
		},
		{
			age: "6-12 years",
			limit: "2 hours per day",
			activities: [
				"Homework and research",
				"Creative apps",
				"Limited social interaction",
			],
		},
		{
			age: "13+ years",
			limit: "Negotiable, with breaks",
			activities: ["School work", "Social media", "Digital creativity"],
		},
	];

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold text-gray-900 mb-6">
				Screen Time Management
			</h1>

			<div className="prose max-w-none mb-8">
				<p className="text-lg text-gray-600">
					Learn how to establish healthy screen time limits and create a
					balanced schedule for online and offline activities.
				</p>
			</div>

			<div className="grid gap-8 mb-12">
				{ageGroups.map((group, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
					>
						<h2 className="text-xl font-semibold text-gray-900 mb-4">
							{group.age}
						</h2>
						<div className="flex items-center space-x-2 text-blue-600 mb-3">
							<Clock className="w-5 h-5" />
							<span className="font-medium">{group.limit}</span>
						</div>
						<div className="space-y-2">
							<h3 className="font-medium text-gray-800">
								Recommended Activities:
							</h3>
							<ul className="space-y-2">
								{group.activities.map((activity, actIndex) => (
									<li
										key={actIndex}
										className="text-gray-600 flex items-center space-x-2"
									>
										<span className="text-blue-500">•</span>
										<span>{activity}</span>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>

			<div className="bg-blue-50 p-8 rounded-lg">
				<h2 className="text-2xl font-semibold text-gray-900 mb-6">
					Daily Schedule Template
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div>
						<div className="flex items-center space-x-2 mb-4">
							<Sun className="w-5 h-5 text-blue-500" />
							<h3 className="font-semibold text-gray-800">Morning Routine</h3>
						</div>
						<ul className="space-y-2 text-gray-600">
							<li>No screens during breakfast</li>
							<li>Educational content if needed</li>
							<li>Homework and research</li>
						</ul>
					</div>
					<div>
						<div className="flex items-center space-x-2 mb-4">
							<Moon className="w-5 h-5 text-blue-500" />
							<h3 className="font-semibold text-gray-800">Evening Routine</h3>
						</div>
						<ul className="space-y-2 text-gray-600">
							<li>Limited entertainment time</li>
							<li>No screens 1 hour before bed</li>
							<li>Device charging outside bedroom</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ScreenTime;
