import React, { useState } from "react";
import { Mail, MessageSquare, Send, AlertCircle } from "lucide-react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Form submission logic would go here
		console.log("Form submitted:", formData);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<div className="max-w-4xl mx-auto">
			<h1 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h1>

			<div className="prose max-w-none mb-8">
				<p className="text-lg text-gray-600">
					Have questions or concerns? We're here to help. Fill out the form
					below or use our other contact methods.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
				<div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
					<Mail className="w-6 h-6 text-blue-500 mb-3" />
					<h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
					<p className="text-gray-600">support@kidsafe.example.com</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
					<MessageSquare className="w-6 h-6 text-blue-500 mb-3" />
					<h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
					<p className="text-gray-600">Available Mon-Fri, 9am-5pm EST</p>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100">
					<AlertCircle className="w-6 h-6 text-blue-500 mb-3" />
					<h3 className="font-semibold text-gray-900 mb-2">Emergency</h3>
					<p className="text-gray-600">For urgent concerns: 1-800-XXX-XXXX</p>
				</div>
			</div>

			<div className="bg-white p-8 rounded-lg shadow-sm border border-blue-100">
				<h2 className="text-2xl font-semibold text-gray-900 mb-6">
					Send Us a Message
				</h2>

				<form onSubmit={handleSubmit} className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								required
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700 mb-1"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
								required
							/>
						</div>
					</div>

					<div>
						<label
							htmlFor="subject"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Subject
						</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							required
						/>
					</div>

					<div>
						<label
							htmlFor="message"
							className="block text-sm font-medium text-gray-700 mb-1"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							rows={5}
							className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
							required
						></textarea>
					</div>

					<button
						type="submit"
						className="flex items-center justify-center space-x-2 w-full md:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
					>
						<Send className="w-5 h-5" />
						<span>Send Message</span>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
