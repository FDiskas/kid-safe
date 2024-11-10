import { Shield } from "lucide-react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LinkChecker from "./components/LinkChecker";
import SafetyTips from "./components/SafetyTips";
import ParentalGuide from "./components/ParentalGuide";
import Resources from "./components/Resources";
import About from "./components/About";
import Navigation from "./components/Navigation";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import Contact from "./components/Contact";
import ParentalControls from "./components/sections/ParentalControls";
import MonitoringGuide from "./components/sections/MonitoringGuide";
import ScreenTime from "./components/sections/ScreenTime";
import WarningSigns from "./components/sections/WarningSigns";

function App() {
	return (
		<BrowserRouter>
			<div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
				<Navigation />

				<div className="container mx-auto px-4 py-12">
					<Routes>
						<Route
							path="/"
							element={
								<>
									<header className="text-center mb-12">
										<div className="flex items-center justify-center mb-4">
											<Shield className="w-12 h-12 text-blue-600" />
										</div>
										<h1 className="text-4xl font-bold text-gray-900 mb-4">
											Kid-Safe Link Checker
										</h1>
										<p className="text-lg text-gray-600 max-w-2xl mx-auto">
											Ensure websites are safe for children before they visit.
											Our tool helps parents and guardians make informed
											decisions about online content.
										</p>
									</header>
									<main>
										<LinkChecker />
										<SafetyTips />
									</main>
								</>
							}
						/>
						<Route path="/guide" element={<ParentalGuide />} />
						<Route path="/resources" element={<Resources />} />
						<Route path="/about" element={<About />} />
						<Route path="/privacy" element={<PrivacyPolicy />} />
						<Route path="/terms" element={<Terms />} />
						<Route path="/contact" element={<Contact />} />

						{/* Section Pages */}
						<Route
							path="/guide/parental-controls"
							element={<ParentalControls />}
						/>
						<Route path="/guide/monitoring" element={<MonitoringGuide />} />
						<Route path="/guide/screen-time" element={<ScreenTime />} />
						<Route path="/guide/warning-signs" element={<WarningSigns />} />
					</Routes>

					<footer className="text-center mt-16 text-gray-500 text-sm">
						<p className="mb-4">
							Remember: No automated check is perfect. Always supervise
							children's online activities.
						</p>
						<div className="flex flex-wrap justify-center gap-6">
							<div className="space-x-4">
								<Link to="/about" className="hover:text-blue-600">
									About
								</Link>
								<Link to="/guide" className="hover:text-blue-600">
									Guide
								</Link>
								<Link to="/resources" className="hover:text-blue-600">
									Resources
								</Link>
							</div>
							<div className="space-x-4">
								<Link to="/privacy" className="hover:text-blue-600">
									Privacy Policy
								</Link>
								<Link to="/terms" className="hover:text-blue-600">
									Terms of Use
								</Link>
								<Link to="/contact" className="hover:text-blue-600">
									Contact
								</Link>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
