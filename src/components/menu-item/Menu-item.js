import React from "react";
import "./menu-item.css";

const MenuItem = ({ price, imageUrl }) => (
	<div className="item">
		<div className="content">
			<div className="background-image">
				<img src={imageUrl} alt="item" />
			</div>
			<div className="detailes">
				<p>
					Hash brown Cheeseburger with pickled Jalapeños. <br />
					Hash brown Cheeseburger with pickled Jalapeños.
				</p>
			</div>
			<div className="price-container">
				<h2 className="price">{price}</h2>
			</div>
		</div>
	</div>
);

export default MenuItem;
