import React, { useState, createContext } from "react";
import "./home-page.css";
import Items from "../components/items/Items";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const HomePage = () => {
	const ToggleContext = createContext();
	const [toggleShow, setToggleShow] = useState(true);

	return (
		<div className="homepage">
			<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
				<div>
					<div
						className="item-header"
						onClick={() => setToggleShow((toggleShow) => !toggleShow)}
					>
						<h1>Smoothies</h1>
						<KeyboardArrowDownIcon fontSize="large" />
					</div>
					{toggleShow ? <Items /> : null}
				</div>
				<div>
					<div className="item-header">
						<h1>Burgers</h1>
						<KeyboardArrowDownIcon fontSize="large" />
					</div>{" "}
				</div>
				<div>
					<div className="item-header">
						<h1>Pizza</h1>
						<KeyboardArrowDownIcon fontSize="large" />
					</div>
				</div>
				<button>
					<h1>Check my orders</h1>
					<span>
						8.0<span>SAR</span>
					</span>
				</button>
			</ToggleContext.Provider>
		</div>
	);
};

export default HomePage;
