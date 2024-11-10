import React from "react";
import { Lock, Shield, Eye, Database } from "lucide-react";

const PrivacyPolicy = () => {
	const sections = [
		{
			icon: <Database />,
			title: "Information We Collect",
			content:
				"We collect only the URLs submitted for safety checking. We do not store personal information or browsing history.",
		},
		{
			icon: <Lock />,
			title: "Data Security",
			content:
				"All URL submissions are encrypted and processed securely. We employ industry-standard security measures to protect your data.",
		},
		{
			icon: <Eye />,
			title: "Data Usage",
			content:
				"Submitted URLs are only used for safety analysis and improving our detection algorithms. We never share or sell your data.",
		},
		{
			icon: <Shield />,
			title: "Your Rights",
			content:
				"You have the right to know how your data is used and request its deletion. Contact us for any privacy-related concerns.",
		},
	];

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

			<div className="prose max-w-none mb-8">
				<p className="text-lg text-gray-600">
					At Kid-Safe Link Checker, we take your privacy seriously. This policy
					explains how we handle your data and protect your privacy while using
					our service.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
				{sections.map((section, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
					>
						<div className="flex items-center space-x-3 mb-4">
							<div className="text-blue-500">{section.icon}</div>
							<h2 className="font-semibold text-gray-900">{section.title}</h2>
						</div>
						<p className="text-gray-600">{section.content}</p>
					</div>
				))}
			</div>

			<div className="bg-blue-50 p-8 rounded-lg">
				<h2 className="text-2xl font-semibold text-gray-900 mb-4">
					Updates to Privacy Policy
				</h2>
				<p className="text-gray-600 mb-4">
					We may update this privacy policy from time to time to reflect changes
					in our practices or for legal and regulatory reasons. We will notify
					users of any material changes.
				</p>
				<p className="text-gray-600">Last updated: March 2024</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
