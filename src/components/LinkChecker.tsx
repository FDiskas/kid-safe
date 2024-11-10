import React, { useState, useRef, useEffect } from "react";
import { Shield, ShieldAlert, Search, X } from "lucide-react";

interface SafetyResponse {
	status: boolean;
	url: string;
}

const LinkChecker = () => {
	const [url, setUrl] = useState("");
	const [isChecking, setIsChecking] = useState(false);
	const [result, setResult] = useState<"safe" | "unsafe" | null>(null);
	const [error, setError] = useState<string>("");
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		// Focus input on component mount
		inputRef.current?.focus();
	}, []);

	const formatUrl = (inputUrl: string): string => {
		let formattedUrl = inputUrl.trim();
		if (
			!formattedUrl.startsWith("http://") &&
			!formattedUrl.startsWith("https://")
		) {
			formattedUrl = `https://${formattedUrl}`;
		}
		return formattedUrl;
	};

	const checkLink = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsChecking(true);
		setError("");
		setResult(null);

		try {
			const formattedUrl = formatUrl(url);
			const response = await fetch(
				`https://not-safe-api.onrender.com?site=${encodeURIComponent(formattedUrl)}`,
			);

			if (!response.ok) {
				throw new Error("Failed to check URL safety");
			}

			const data: SafetyResponse = await response.json();
			// API returns true if domain is NOT safe for kids
			setResult(data.status ? "unsafe" : "safe");
		} catch (err) {
			setError("Unable to check the URL safety. Please try again later.");
			console.error("Error checking URL:", err);
		} finally {
			setIsChecking(false);
		}
	};

	const clearInput = () => {
		setUrl("");
		setResult(null);
		setError("");
		// Focus input after clearing
		inputRef.current?.focus();
	};

	return (
		<div className="w-full max-w-3xl mx-auto p-6">
			<form onSubmit={checkLink} className="space-y-6">
				<div className="relative">
					<input
						ref={inputRef}
						type="url"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						placeholder="Enter website URL (e.g., example.com)"
						className="w-full px-4 py-3 rounded-lg border-2 border-blue-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all pl-12 pr-10"
						required
						disabled={isChecking}
					/>
					<Search className="absolute left-4 top-3.5 text-blue-500 w-5 h-5" />
					{url && (
						<button
							type="button"
							onClick={clearInput}
							className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600 p-0.5 rounded-full hover:bg-gray-100 transition-colors"
							aria-label="Clear input"
							disabled={isChecking}
						>
							<X className="w-5 h-5" />
						</button>
					)}
				</div>

				<button
					type="submit"
					disabled={isChecking}
					className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
				>
					{isChecking ? (
						<div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
					) : (
						<>
							<Shield className="w-5 h-5" />
							<span>Check Safety</span>
						</>
					)}
				</button>
			</form>

			{error && (
				<div className="mt-8 p-6 rounded-lg bg-red-50">
					<div className="flex items-center space-x-3">
						<ShieldAlert className="w-6 h-6 text-red-600" />
						<h3 className="text-lg font-semibold text-red-800">Error</h3>
					</div>
					<p className="mt-2 text-red-700">{error}</p>
				</div>
			)}

			{result && !error && (
				<div
					className={`mt-8 p-6 rounded-lg ${
						result === "safe" ? "bg-green-50" : "bg-red-50"
					}`}
				>
					<div className="flex items-center space-x-3">
						{result === "safe" ? (
							<Shield className="w-6 h-6 text-green-600" />
						) : (
							<ShieldAlert className="w-6 h-6 text-red-600" />
						)}
						<h3
							className={`text-lg font-semibold ${
								result === "safe" ? "text-green-800" : "text-red-800"
							}`}
						>
							{result === "safe"
								? "Website appears safe"
								: "Caution recommended"}
						</h3>
					</div>
					<p
						className={`mt-2 ${
							result === "safe" ? "text-green-700" : "text-red-700"
						}`}
					>
						{result === "safe"
							? "This website seems appropriate for children. Always supervise online activity."
							: "This website might contain inappropriate content for children. Adult supervision is strongly recommended."}
					</p>
				</div>
			)}
		</div>
	);
};

export default LinkChecker;
