import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X } from "lucide-react";

const Navigation = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const location = useLocation();

	const links = [
		{ path: "/", label: "Home" },
		{ path: "/guide", label: "Parent Guide" },
		{ path: "/resources", label: "Resources" },
		{ path: "/about", label: "About" },
	];

	return (
		<nav className="bg-white shadow-sm">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<Link to="/" className="flex items-center space-x-2">
						<Shield className="w-8 h-8 text-blue-600" />
						<span className="font-bold text-xl text-gray-900">KidSafe</span>
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{links.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`${
									location.pathname === link.path
										? "text-blue-600 font-semibold"
										: "text-gray-600 hover:text-blue-600"
								} transition-colors`}
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-blue-50"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>

				{/* Mobile Navigation */}
				{isOpen && (
					<div className="md:hidden py-4">
						{links.map((link) => (
							<Link
								key={link.path}
								to={link.path}
								className={`${
									location.pathname === link.path
										? "text-blue-600 font-semibold bg-blue-50"
										: "text-gray-600"
								} block py-2 px-4 hover:bg-blue-50 rounded-md`}
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
