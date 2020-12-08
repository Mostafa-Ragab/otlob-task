import React from "react";
import "./items.css";
import MenuItem from "../menu-item/Menu-item";

class Items extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: [
				{
					title: "Smoothies",
					price: "14,99$",
					imageUrl:
						"https://simply-delicious-food.com/wp-content/uploads/2016/08/Hash-brown-cheeseburgers-2.jpg",
					id: 1,
				},
				{
					title: "Burgers",
					price: "14,99$",
					imageUrl:
						"https://simply-delicious-food.com/wp-content/uploads/2016/08/Hash-brown-cheeseburgers-2.jpg",
					id: 2,
				},
				{
					title: "Pizza",
					price: "14,99$",
					imageUrl:
						"https://simply-delicious-food.com/wp-content/uploads/2016/08/Hash-brown-cheeseburgers-2.jpg",
					id: 3,
				},
			],
			toggleItem: false,
		};
	}
	render() {
		return (
			<div className="items-menu">
				{this.state.sections.map(({ id, ...OtherProps }) => (
					<MenuItem key={id} {...OtherProps} />
				))}
			</div>
		);
	}
}

export default Items;
