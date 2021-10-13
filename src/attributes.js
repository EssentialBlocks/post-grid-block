import {
	WRAPPER_MARGIN,
	WRAPPER_PADDING,
	WRAPPER_BORDER_SHADOW,
	WRAPPER_BG,
	COLUMNS,
	COLUMN_GAP,
	COLUMN_PADDING,
	COLUMN_BG,
	COLUMN_BORDER_SHADOW,
	THUMBNAIL_IMAGE_SIZE,
	THUMBNAIL_BORDER_RADIUS,
	THUMBNAIL_MARGIN,
	TITLE_MARGIN,
	CONTENT_MARGIN,
	READMORE_MARGIN,
	READMORE_PADDING,
	HEADER_META_MARGIN,
	FOOTER_META_MARGIN,
	HEADER_META_SPACE,
	FOOTER_META_SPACE,
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
		default: false
	},
	readmoreText: {
		type: "string",
		default: "Read More"
	},
	readmoreColor: {
		type: "string",
		default: "#3d8fd4"
	},
	readmoreBGColor: {
		type: "string",
		default: "#ffffff"
	},
	readmoreTextAlign: {
		type: "string",
		default: "left"
	},
	readmoreHoverColor: {
		type: "string",
		default: "#333333"
	},
	readmoreBGHoverColor: {
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
	headerMeta: {
		type: "string",
		default: '[{"value":"categories","label":"Categories"}]'
	},
	footerMeta: {
		type: "string",
		default: '[{"value":"avatar","label":"Author Avatar"},{"value":"author","label":"Author Name"},{"value":"date","label":"Published Date"}]'
	},
	headerMetaTextAlign: {
		type: "string",
		default: "left"
	},
	footerMetaTextAlign: {
		type: "string",
		default: "left"
	},
	authorMetaColor: {
		type: "string",
		default: "#3d8fd4"
	},
	authorMetaHoverColor: {
		type: "string",
		default: "#549edc"
	},
	metaColorType: {
		type: "string",
		default: "normal"
	},
	categoryMetaColor: {
		type: "string",
		default: "#ffffff"
	},
	categoryMetaHoverColor: {
		type: "string",
		default: "#ffffff"
	},
	categoryMetaBgColor: {
		type: "string",
		default: "#d18df1"
	},
	categoryMetaBgHoverColor: {
		type: "string",
		default: "#ac61d0"
	},
	tagMetaColor: {
		type: "string",
		default: "#ffffff"
	},
	tagMetaHoverColor: {
		type: "string",
		default: "#ffffff"
	},
	tagMetaBgColor: {
		type: "string",
		default: "#3f6ddc"
	},
	tagMetaBgHoverColor: {
		type: "string",
		default: "#2d59c3"
	},
	dateMetaColor: {
		type: "string",
		default: "#9e9e9e"
	},

	// typography attributes ⬇
	...generateTypographyAttributes(Object.values(typographyObjs)),

	// margin padding attributes ⬇
	...generateDimensionsAttributes(WRAPPER_MARGIN),
	...generateDimensionsAttributes(WRAPPER_PADDING),
	...generateDimensionsAttributes(COLUMN_PADDING),
	...generateDimensionsAttributes(TITLE_MARGIN, {
		top: 0,
		bottom: 10,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(CONTENT_MARGIN, {
		top: 0,
		bottom: 10,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(READMORE_MARGIN, {
		top: 0,
		bottom: 10,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(READMORE_PADDING, {
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(HEADER_META_MARGIN, {
		top: 0,
		bottom: 10,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(FOOTER_META_MARGIN, {
		top: 0,
		bottom: 10,
		right: 0,
		left: 0,
		isLinked: false,
	}),
	...generateDimensionsAttributes(THUMBNAIL_MARGIN, {
		top: 0,
		bottom: 10,
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
		// noShadow: true,
		// noBorder: true,
	}),

	// background attributes ⬇
	...generateBackgroundAttributes(WRAPPER_BG),
	...generateBackgroundAttributes(COLUMN_BG),

	// range controller
	...generateResponsiveRangeAttributes(COLUMNS, {
		defaultRange: 3,
	}),
	...generateResponsiveRangeAttributes(COLUMN_GAP, {
		defaultRange: 10,
	}),
	...generateResponsiveRangeAttributes(HEADER_META_SPACE, {
		defaultRange: 10,
	}),
	...generateResponsiveRangeAttributes(FOOTER_META_SPACE, {
		defaultRange: 10,
	}),
	...generateResponsiveRangeAttributes(THUMBNAIL_IMAGE_SIZE, {
		defaultRange: 250
	}),
};

export default attributes;