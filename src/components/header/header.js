import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Cart } from "../../assets/cart-dropdown.svg";
import { ReactComponent as Icon } from "../../assets/icon.svg";

const Header = () => (
	<div className="header">
		<div className="logo-container">
			<Logo className="logo" />
			<div className="title">
				<h1>McDonald's</h1>
				<p>Al Hamra</p>
			</div>
		</div>
		<div className="options">
			<div className="option">
				{" "}
				<Cart />
			</div>
			<div className="option">
				<Icon />
			</div>
		</div>
	</div>
);

export default Header;
