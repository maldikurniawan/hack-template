import { Card, Tabs } from "@/components";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const TabsPage = () => {
	const { themeColor } = useContext(ThemeContext);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{/* Basic */}
			<Card>
				<div className="text-lg font-normal mb-4">Basic</div>
				<div className="text-sm mb-3">
					Tabs component is used to create a tabbed interface. It can be used to
					create horizontal or vertical tabs.
				</div>

				<div>
					<Tabs tab={["Tabs 1", "Tabs 2"]}>
						<Card variant="secondary">
							<div>Content 1</div>
						</Card>
						<Card variant="secondary">
							<div>Content 2</div>
						</Card>
					</Tabs>
				</div>
			</Card>

			{/* Vertical */}
			<Card>
				<div className="text-lg font-normal mb-4">Vertical</div>
				<div className="text-sm mb-3">
					The <span style={{ color: themeColor }}>vertical</span> prop is used
					to set the tabs to vertical.
				</div>

				<div>
					<Tabs vertical tab={["Tabs 1", "Tabs 2"]}>
						<Card variant="secondary">
							<div>
								Content 1 Lorem ipsum dolor sit amet consectetur adipisicing
								elit. Inventore enim, odio veniam in quisquam soluta incidunt
								minima eum quae reiciendis aspernatur, aperiam, nam at quis
								similique excepturi esse ex? Possimus?
							</div>
						</Card>
						<Card variant="secondary">
							<div>
								Content 2
							</div>
						</Card>
					</Tabs>
				</div>
			</Card>
		</div>
	);
};

export default TabsPage;
