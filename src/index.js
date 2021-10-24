const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

import "./style.scss";
import Edit from "./edit";
import icon from "./icon";
import attributes from "./attributes";
import Example from "./example";

registerBlockType("post-grid-block/post-grid", {
	title: __("Post Grid Block", "post-grid-block"),
	description: __(
		"Create a stunning and interactive visualization for your blogs in a grid layout",
		"post-grid-block"
	),
	keywords: [__("posts", "post grid", "posts block")],
	icon,
	attributes,
	supports: {
		align: true,
	},
	category: "widgets",
	edit: Edit,
	save: () => null,
	example: {},
});