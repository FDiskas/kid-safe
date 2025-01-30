import { ExternalLink } from "lucide-react";

const Resources = () => {
	const resources = [
		{
			category: "Educational Resources",
			items: [
				{
					title: "Common Sense Media",
					description: "Age-based media reviews and digital literacy resources",
					url: "https://www.commonsensemedia.org",
				},
				{
					title: "Internet Safety 101",
					description: "Comprehensive internet safety education program",
					url: "https://internetsafety101.org",
				},
			],
		},
		{
			category: "Safety Tools",
			items: [
				{
					title: "Family Online Safety Institute",
					description: "Tools and research for online safety",
					url: "https://www.fosi.org",
				},
				{
					title: "Google Family Link",
					description: "Parental controls for Android devices",
					url: "https://families.google.com/familylink",
				},
			],
		},
	];

	const ResourceCard = ({
		title,
		description,
		url,
	}: {
		title: string;
		description: string;
		url: string;
	}) => (
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			className="block bg-white p-6 rounded-lg shadow-sm border border-blue-100 hover:border-blue-300 transition-colors"
		>
			<div className="flex items-center justify-between mb-2">
				<h3 className="font-semibold text-gray-900">{title}</h3>
				<ExternalLink className="w-5 h-5 text-blue-500" />
			</div>
			<p className="text-gray-600">{description}</p>
		</a>
	);

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold text-gray-900 mb-6">
				Online Safety Resources
			</h1>

			<div className="prose max-w-none mb-8">
				<p className="text-lg text-gray-600">
					Explore these carefully curated resources to help keep your children
					safe online. Each resource has been verified and is regularly updated
					with the latest safety information.
				</p>
			</div>

			<div className="space-y-12">
				{resources.map((section, index) => (
					<div key={index}>
						<h2 className="text-2xl font-semibold text-gray-800 mb-6">
							{section.category}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{section.items.map((item, itemIndex) => (
								<ResourceCard key={itemIndex} {...item} />
							))}
						</div>
					</div>
				))}
			</div>

			<div className="mt-12 bg-blue-50 p-8 rounded-lg">
				<h2 className="text-2xl font-semibold text-gray-800 mb-4">
					Emergency Resources
				</h2>
				<div className="space-y-4">
					<p className="text-gray-700">
						If you encounter inappropriate content or suspicious behavior
						online:
					</p>
					<ul className="list-disc list-inside text-gray-600 space-y-2">
						<li>Report to your local law enforcement</li>
						<li>
							Contact the National Center for Missing and Exploited Children
						</li>
						<li>Use platform-specific reporting tools</li>
					</ul>
					<p className="text-gray-700 mt-4">
						Emergency Contact: National Center for Missing and Exploited
						Children
						<br />
						<span className="font-semibold">Hotline: 1-800-843-5678</span>
					</p>
					<div className="sellmore">
					  <link rel="stylesheet" href="https://sellmoreprotection.com/resources/13058324172/assets/index-CVJdq1U5.css" />
					  <script type="application/json">
					    {`{
					      "API_KEY": "kazkoks-raktas",
					      "--sm-color-brand-dark": "#3b5660",
					      "--sm-color-gradient-to-light": "#395038"
					    }`}
					  </script>
					  <script async src="https://sellmoreprotection.com/resources/13058324172/assets/index-DYZF71J9.js"></script>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resources;
