import { useEffect } from "react";
import { themeChange } from "theme-change";

const Theme = () => {
	useEffect(() => {
		themeChange(false);
		// 👆 false parameter is required for react project
	}, []);

	return (
		<li className="flex lg:items-center font-semibold text-lg">
			<select data-choose-theme>
				<option value="dark">Dark</option>
				<option value="light">Light</option>
			</select>
		</li>
	);
};

export default Theme;
