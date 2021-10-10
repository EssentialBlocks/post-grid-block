import {
	WRAPPER_MARGIN,
	WRAPPER_PADDING,
	WRAPPER_BORDER_SHADOW,
	WRAPPER_BG,
	COLUMN_GAP,
	COLUMN_PADDING,
	COLUMN_BG,
	COLUMN_BORDER_SHADOW,
	THUMBNAIL_IMAGE_SIZE,
	THUMBNAIL_BORDER_RADIUS,
	TITLE_MARGIN,
	CONTENT_MARGIN,
	READMORE_MARGIN,
	READMORE_PADDING,
	META_MARGIN,
	AVATAR_BORDER_RADIUS
} from "./constants/constants";
import {
	generateDimensionsAttributes,
	generateTypographyAttributes,
	generateBackgroundAttributes,
	generateBorderShadowAttributes,
	generateResponsiveRangeAttributes
} from "../util/helpers";
import * as typographyObjs from "./constants/typographyPrefixConstants";

const attributes = {
	resOption: {
		type: "string",
		default: "desktop",
	},

	// blockId attribute for making unique className and other uniqueness
	blockId: {
		type: "string",
	},
	blockRoot: {
		type: "string",
		default: "essential_block",
	},
	blockMeta: {
		type: "object",
	},

	queryData: {
		type: "object"
	},
	queryResults: {
		type: "array"
	},

	preset: {
		type: "string",
		default: "button-1"
	},
	columns: {
		type: "number",
		default: 3
	},
	showThumbnail: {
		type: "boolean",
		default: true
	},
	showTitle: {
		type: "boolean",
		default: true
	},
	titleColor: {
		type: "string",
		default: "#333333"
	},
	titleHoverColor: {
		type: "string",
		default: "#333333"
	},
	titleColorStyle: {
		type: "string",
		default: "normal"
	},
	titleLength: {
		type: "number",
	},
	titleTextAlign: {
		type: "string",
		default: "left"
	},
	titleTag: {
		type: "string",
		default: "h2"
	},
	showContent: {
		type: "boolean",
		default: true
	},
	contentColor: {
		type: "string",
		default: "#333333"
	},
	contentTextAlign: {
		type: "string",
		default: "left"
	},
	contentLength: {
		type: "number",
		default: 20
	},
	expansionIndicator: {
		type: "string",
		default: "..."
	},
	showReadMore: {
		type: "boolean",
		default: true
	},
	readmoreText: {
		type: "string",
		default: "Read More"
	},
	readmoreColor: {
		type: "string",
		default: "#333333"
	},
	readmoreTextAlign: {
		type: "string",
		default: "left"
	},
	readmoreHoverColor: {
		type: "string",
		default: "#333333"
	},
	readmoreColorType: {
		type: "string",
		default: "normal"
	},
	showMeta: {
		type: "boolean",
		default: true
	},
	metaPosition: {
		type: "string",
		default: "footer"
	},
	metaColor: {
		type: "string",
		default: "#333333"
	},
	metaTextAlign: {
		type: "string",
		default: "left"
	},
	metaHoverColor: {
		type: "string",
		default: "#333333"
	},
	metaColorType: {
		type: "string",
		default: "normal"
	},
	showAvatar: {
		type: "boolean",
		default: true
	},
	showAuthor: {
		type: "boolean",
		default: true
	},
	showDate: {
		type: "boolean",
		default: true
	},
	showCategories: {
		type: "boolean",
		default: true
	},

	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(typographyObjs)),

	// margin padding attributes ⬇
	...generateDimensionsAttributes(WRAPPER_MARGIN),
	...generateDimensionsAttributes(WRAPPER_PADDING),
	...generateDimensionsAttributes(COLUMN_PADDING),
	...generateDimensionsAttributes(TITLE_MARGIN, {
		top: 0,
		bottom: 15,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(CONTENT_MARGIN, {
		top: 0,
		bottom: 15,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(READMORE_MARGIN, {
		top: 0,
		bottom: 15,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(READMORE_PADDING, {
		top: 10,
		bottom: 10,
		right: 15,
		left: 15,
		isLinked: false,
	}),
	...generateDimensionsAttributes(META_MARGIN, {
		top: 0,
		bottom: 15,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(THUMBNAIL_BORDER_RADIUS),
	...generateDimensionsAttributes(AVATAR_BORDER_RADIUS, {
		top: 50,
		bottom: 50,
		right: 50,
		left: 50,
		isLinked: true,
	}),

	// border shadow attributes ⬇
	...generateBorderShadowAttributes(WRAPPER_BORDER_SHADOW,{
		noShadow: true,
		// noBorder: true,
	}),
	// border shadow attributes ⬇
	...generateBorderShadowAttributes(COLUMN_BORDER_SHADOW,{
		noShadow: true,
		// noBorder: true,
	}),

	// background attributes ⬇
	...generateBackgroundAttributes(WRAPPER_BG),
	...generateBackgroundAttributes(COLUMN_BG),

	// range controller
	...generateResponsiveRangeAttributes(COLUMN_GAP, {
		defaultRange: 20,
	}),
	...generateResponsiveRangeAttributes(THUMBNAIL_IMAGE_SIZE),
};

export default attributes;
