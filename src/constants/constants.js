const { __ } = wp.i18n;
const {Dashicon} = wp.components;

// the consts defined here should be unique from one another
export const WRAPPER_MARGIN = "wrpMargin";
export const WRAPPER_PADDING = "wrpPadding";
export const WRAPPER_BORDER_SHADOW = "wrpBorderShadow";
export const WRAPPER_BG = "wrpBG";

export const COLUMNS = "columns";
export const COLUMN_GAP = "columnGap";
export const COLUMN_PADDING = "columnPadding";
export const COLUMN_BG = "columnBG";
export const COLUMN_BORDER_SHADOW = "columnBorderShadow";

export const THUMBNAIL_IMAGE_SIZE = "thumbnailImageSize";
export const THUMBNAIL_BORDER_RADIUS = "thumbnailBDR";
export const THUMBNAIL_MARGIN = "thumbnailMargin";
export const TITLE_MARGIN = "titleMargin";
export const CONTENT_MARGIN = "contentMargin";
export const READMORE_MARGIN = "readmoreMargin";
export const READMORE_PADDING = "readmorePadding";
export const META_MARGIN = "metaMargin";
export const AVATAR_BORDER_RADIUS = "avatarBDR";

export const UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
	{ label: "%", value: "%" },
];

export const HEIGHT_UNIT_TYPES = [
	{ label: "px", value: "px" },
	{ label: "em", value: "em" },
	{ label: "vh", value: "vh" },
];

export const NORMAL_HOVER = [
	{ label: "Normal", value: "normal" },
	{ label: "Hover", value: "hover" },
];

export const META_POSITION = [
	{ label: "Header", value: "header" },
	{ label: "Footer", value: "hover" },
	{ label: "Under Thumbnail", value: "thumbnail" },
];

export const TITLE_TAGS = [
	{ label: "H1", value: "h1" },
	{ label: "H2", value: "h2" },
	{ label: "H3", value: "h3" },
	{ label: "H4", value: "h4" },
	{ label: "H5", value: "h5" },
	{ label: "H6", value: "h6" },
	{ label: "P", value: "p" },
];

export const PRESETS = [
	{ label: __("Preset 1"), value: "preset-1" },
	{ label: __("Preset 2"), value: "preset-2" },
	{ label: __("Preset 3"), value: "preset-3" },
	{ label: __("Preset 4"), value: "preset-4" },
];

export const TEXT_ALIGN = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "left" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "right" }
];

export const CONTENT_POSITION = [
	{ label: __(<Dashicon icon={"editor-alignleft"} />), value: "flex-start" },
	{ label: __(<Dashicon icon={"editor-aligncenter"} />), value: "center" },
	{ label: __(<Dashicon icon={"editor-alignright"} />), value: "flex-end" }
];