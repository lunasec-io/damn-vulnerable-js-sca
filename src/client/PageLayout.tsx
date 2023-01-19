import {BaseProvider, LightTheme, styled, useStyletron} from "baseui";
import {AppNavBar, NavItem} from "baseui/app-nav-bar";
import {Block} from "baseui/block";
import {Layer} from "baseui/layer";
import {Cell, Grid} from "baseui/layout-grid";
import React from "react";
import {LabelSmall} from "baseui/typography";
import {useHistory} from "react-router-dom";
import {Provider as StyletronProvider} from "styletron-react";
import {Client as Styletron} from "styletron-engine-atomic";
import logout from "@wasp/auth/logout.js";

const engine = new Styletron();

const Centered = styled("div", {
	boxSizing: "border-box",
	width: "100vw",
	position: "fixed",
	top: "0",
	left: "0",
});

const Nav: React.FC = ({ children }) => {
	const [css] = useStyletron();
	const history = useHistory();

	const controlledNavItem = (
		label: string,
		route: string,
		overrides?: Partial<NavItem>,
	): NavItem => ({
		label: label,
		info: {
			route,
		},
		...overrides,
	});

	const mainItems = [
		{ label: "Logout" },
	];

	function handleMainItemSelect(item: NavItem) {
		if (item.info?.route) {
			history.push(item.info.route);
		}

		if (item.label === "Logout") {
			logout();
		}
	}

	return (
		<>
			<Layer>
				<Centered>
					<AppNavBar
						title={
							<a
								onClick={(e) => {
									e.stopPropagation();
									history.push("/");
								}}
								className={css({
									userSelect: "none",
									textDecoration: "inherit",
									textColor: "inherit",
								})}
							>
								<LabelSmall>Damn Vulnerable Javascript SCA</LabelSmall>
							</a>
						}
						mainItems={mainItems}
						onMainItemSelect={handleMainItemSelect}
					/>
				</Centered>
			</Layer>
			<Block height={["80px"]} backgroundColor="background" />
			<Grid>
				<Cell skip={[0, 1, 1]} span={[4, 6, 10]}>
					{children}
				</Cell>
			</Grid>
		</>
	);
};

export const PageLayout: React.FC = ({ children }) => {
	return (
		<StyletronProvider value={engine}>
			<BaseProvider theme={LightTheme}>
				<Nav children={children} />
			</BaseProvider>
		</StyletronProvider>
	);
};
