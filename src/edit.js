/**
 * WordPress dependencies 
*/
const { __ } = wp.i18n;
const { RichText, useBlockProps } = wp.blockEditor;
const { useEffect, renderToString, RawHTML } = wp.element;
const { select } = wp.data;
const { dateI18n, format, __experimentalGetSettings } = wp.date;

/**
 * External dependencies
 */
// import { get, includes, invoke, isUndefined, pickBy } from 'lodash';
// import {escapeAmpersand, escapeAttribute, escapeEditableHTML, escapeHTML} from "@wordpress/escape-html"

/**
  * Internal depencencies
*/
import Inspector from "./inspector";
import "./editor.scss";
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
	EBPG_TITLE_TYPOGRAPHY, 
	EBPG_CONTENT_TYPOGRAPHY,
	EBPG_READMORE_TYPOGRAPHY,
	EBPG_META_TYPOGRAPHY,
 } from "./constants/typographyPrefixConstants";
import {
	softMinifyCssStrings,
	isCssExists,
	generateTypographyStyles,
	generateDimensionsControlStyles,
	generateBorderShadowStyles,
	generateResponsiveRangeStyles,
	generateBackgroundControlStyles,
	mimmikCssForPreviewBtnClick,
	duplicateBlockIdFix,
} from "../util/helpers";

export default function Edit(props) {
	const { attributes, setAttributes, clientId, isSelected } = props;
	const {
		blockId,
		blockMeta,
		// responsive control attribute ⬇
		resOption,
		preset,
		queryResults,
		showThumbnail,
		showTitle,
		titleColor,
		titleHoverColor,
		titleLength,
		titleTextAlign,
		titleTag,
		showContent,
		contentColor,
		contentTextAlign,
		contentLength,
		expansionIndicator,
		showReadMore,
		readmoreText,
		readmoreColor,
		readmoreBGColor,
		readmoreTextAlign,
		readmoreHoverColor,
		readmoreBGHoverColor,
		showMeta,
		headerMeta,
		footerMeta,
		headerMetaTextAlign,
		footerMetaTextAlign,
		authorMetaColor,
		authorMetaHoverColor,
		categoryMetaColor,
		categoryMetaHoverColor,
		categoryMetaBgColor,
		categoryMetaBgHoverColor,
		tagMetaColor,
		tagMetaHoverColor,
		tagMetaBgColor,
		tagMetaBgHoverColor,
		dateMetaColor,
	} = attributes;

	const dateFormat = __experimentalGetSettings().formats.date;

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
	useEffect(() => {
		const bodyClasses = document.body.className;

		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});

	}, []);

	// this useEffect is for creating a unique id for each block's unique className by a random unique number
	useEffect(() => {
		const BLOCK_PREFIX = "eb-post-grid";
		duplicateBlockIdFix({
			BLOCK_PREFIX,
			blockId,
			setAttributes,
			select,
			clientId,
		});
	}, []);

	// this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
	useEffect(() => {
		mimmikCssForPreviewBtnClick({
			domObj: document,
			select,
		});
	}, []);

	const blockProps = useBlockProps({
		className: `eb-guten-block-main-parent-wrapper`,
	});

	//
	// CSS/styling Codes Starts from Here

	const {
		typoStylesDesktop: titleTypoStylesDesktop,
		typoStylesTab: titleTypoStylesTab,
		typoStylesMobile: titleTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: EBPG_TITLE_TYPOGRAPHY,
		defaultFontSize: 18,
	});

	const {
		typoStylesDesktop: contentTypoStylesDesktop,
		typoStylesTab: contentTypoStylesTab,
		typoStylesMobile: contentTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: EBPG_CONTENT_TYPOGRAPHY,
		defaultFontSize: 15,
	});

	const {
		typoStylesDesktop: readmoreTypoStylesDesktop,
		typoStylesTab: readmoreTypoStylesTab,
		typoStylesMobile: readmoreTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: EBPG_READMORE_TYPOGRAPHY,
		defaultFontSize: 13,
	});

	const {
		typoStylesDesktop: metaTypoStylesDesktop,
		typoStylesTab: metaTypoStylesTab,
		typoStylesMobile: metaTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: EBPG_META_TYPOGRAPHY,
		defaultFontSize: 13,
	});

	const {
		dimensionStylesDesktop: wrapperMarginStylesDesktop,
		dimensionStylesTab: wrapperMarginStylesTab,
		dimensionStylesMobile: wrapperMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: WRAPPER_MARGIN,
		styleFor: "margin",
		attributes,
	});

	const {
		dimensionStylesDesktop: wrapperPaddingStylesDesktop,
		dimensionStylesTab: wrapperPaddingStylesTab,
		dimensionStylesMobile: wrapperPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: WRAPPER_PADDING,
		styleFor: "padding",
		attributes,
	});

	const {
		dimensionStylesDesktop: columnPaddingStylesDesktop,
		dimensionStylesTab: columnPaddingStylesTab,
		dimensionStylesMobile: columnPaddingStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: COLUMN_PADDING,
		styleFor: "padding",
		attributes,
	});

	const {
		dimensionStylesDesktop: titleMarginStylesDesktop,
		dimensionStylesTab: titleMarginStylesTab,
		dimensionStylesMobile: titleMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: TITLE_MARGIN,
		styleFor: "margin",
		attributes,
	});

	const {
		dimensionStylesDesktop: contentMarginStylesDesktop,
		dimensionStylesTab: contentMarginStylesTab,
		dimensionStylesMobile: contentMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: CONTENT_MARGIN,
		styleFor: "margin",
		attributes,
	});

	const {
		dimensionStylesDesktop: readmoreMarginStylesDesktop,
		dimensionStylesTab: readmoreMarginStylesTab,
		dimensionStylesMobile: readmoreMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: READMORE_MARGIN,
		styleFor: "margin",
		attributes,
	});

	const {
		dimensionStylesDesktop: readmorePaddingStylesDesktop,
		dimensionStylesTab: readmorePaddingStylesTab,
		dimensionStylesMobile: readmorePaddingStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: READMORE_PADDING,
		styleFor: "padding",
		attributes,
	});

	const {
		dimensionStylesDesktop: headerMetaMarginStylesDesktop,
		dimensionStylesTab: headerMetaMarginStylesTab,
		dimensionStylesMobile: headerMetaMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: HEADER_META_MARGIN,
		styleFor: "margin",
		attributes,
	});

	const {
		dimensionStylesDesktop: footerMetaMarginStylesDesktop,
		dimensionStylesTab: footerMetaMarginStylesTab,
		dimensionStylesMobile: footerMetaMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: FOOTER_META_MARGIN,
		styleFor: "margin",
		attributes,
	});

	const {
		dimensionStylesDesktop: thumbnailMarginStylesDesktop,
		dimensionStylesTab: thumbnailMarginStylesTab,
		dimensionStylesMobile: thumbnailMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: THUMBNAIL_MARGIN,
		styleFor: "margin",
		attributes,
	});

	const {
		dimensionStylesDesktop: thumbnailBdrSdwStylesDesktop,
		dimensionStylesTab: thumbnailBdrSdwStylesTab,
		dimensionStylesMobile: thumbnailBdrSdwStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: THUMBNAIL_BORDER_RADIUS,
		styleFor: "border-radius",
		attributes,
	});

	const {
		dimensionStylesDesktop: avatarBdrSdwStylesDesktop,
		dimensionStylesTab: avatarBdrSdwStylesTab,
		dimensionStylesMobile: avatarBdrSdwStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: AVATAR_BORDER_RADIUS,
		styleFor: "border-radius",
		attributes,
	});

	const {
		styesDesktop: wrapperBDShadowDesktop,
		styesTab: wrapperBDShadowTab,
		styesMobile: wrapperBDShadowMobile,
		stylesHoverDesktop: wrapperBDShadowHoverDesktop,
		stylesHoverTab: wrapperBDShadowHoverTab,
		stylesHoverMobile: wrapperBDShadowHoverMobile,
	} = generateBorderShadowStyles({
		controlName: WRAPPER_BORDER_SHADOW,
		attributes,
		noShadow: true,
	});

	const {
		styesDesktop: columnBDShadowDesktop,
		styesTab: columnBDShadowTab,
		styesMobile: columnBDShadowMobile,
		stylesHoverDesktop: columnBDShadowHoverDesktop,
		stylesHoverTab: columnBDShadowHoverTab,
		stylesHoverMobile: columnBDShadowHoverMobile,
	} = generateBorderShadowStyles({
		controlName: COLUMN_BORDER_SHADOW,
		attributes,
		noShadow: true,
	});

	const {
		rangeStylesDesktop: columnNumberDesktop,
		rangeStylesTab: columnNumberTab,
		rangeStylesMobile: columnNumberMobile,
	} = generateResponsiveRangeStyles({
		controlName: COLUMNS,
		property: "",
		attributes,
	});

	const {
		rangeStylesDesktop: columnGapDesktop,
		rangeStylesTab: columnGapTab,
		rangeStylesMobile: columnGapMobile,
	} = generateResponsiveRangeStyles({
		controlName: COLUMN_GAP,
		property: "gap",
		attributes,
	});

	const {
		rangeStylesDesktop: thumbnailImageHeightDesktop,
		rangeStylesTab: thumbnailImageHeightTab,
		rangeStylesMobile: thumbnailImageHeightMobile,
	} = generateResponsiveRangeStyles({
		controlName: THUMBNAIL_IMAGE_SIZE,
		property: "height",
		attributes,
	});

	const {
		rangeStylesDesktop: headerMetaSpaceDesktop,
		rangeStylesTab: headerMetaSpaceTab,
		rangeStylesMobile: headerMetaSpaceMobile,
	} = generateResponsiveRangeStyles({
		controlName: HEADER_META_SPACE,
		property: "gap",
		attributes,
	});

	const {
		rangeStylesDesktop: footerMetaSpaceDesktop,
		rangeStylesTab: footerMetaSpaceTab,
		rangeStylesMobile: footerMetaSpaceMobile,
	} = generateResponsiveRangeStyles({
		controlName: FOOTER_META_SPACE,
		property: "gap",
		attributes,
	});

	//Generate Background
	const {
		backgroundStylesDesktop: wrapperBackgroundStylesDesktop,
		hoverBackgroundStylesDesktop: wrapperHoverBackgroundStylesDesktop,
		backgroundStylesTab: wrapperBackgroundStylesTab,
		hoverBackgroundStylesTab: wrapperHoverBackgroundStylesTab,
		backgroundStylesMobile: wrapperBackgroundStylesMobile,
		hoverBackgroundStylesMobile: wrapperHoverBackgroundStylesMobile,
		bgTransitionStyle: wrapperBgTransitionStyle,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: WRAPPER_BG,
		noOverlay: true,
	});

	//Generate Background
	const {
		backgroundStylesDesktop: columnBackgroundStylesDesktop,
		hoverBackgroundStylesDesktop: columnHoverBackgroundStylesDesktop,
		backgroundStylesTab: columnBackgroundStylesTab,
		hoverBackgroundStylesTab: columnHoverBackgroundStylesTab,
		backgroundStylesMobile: columnBackgroundStylesMobile,
		hoverBackgroundStylesMobile: columnHoverBackgroundStylesMobile,
		bgTransitionStyle: columnBgTransitionStyle,
	} = generateBackgroundControlStyles({
		attributes,
		controlName: COLUMN_BG,
		noOverlay: true,
	});

	// wrapper styles css in strings ⬇
	const wrapperStylesDesktop = `
		.eb-post-grid-wrapper.${blockId}{
			display: grid;
			position: relative;
			grid-template-columns: repeat(${columnNumberDesktop.replace(/\D/g,'')}, minmax(0, 1fr));
			${columnGapDesktop}
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${wrapperBackgroundStylesDesktop}
			${wrapperBgTransitionStyle}
			${wrapperBDShadowDesktop}
		}
		.eb-post-grid-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesDesktop}
			${wrapperBDShadowHoverDesktop}
		}
	`;
	const wrapperStylesTab = `
		.eb-post-grid-wrapper.${blockId}{
			grid-template-columns: repeat(${columnNumberTab.replace(/\D/g,'')}, minmax(0, 1fr));
			${columnGapTab}
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${wrapperBackgroundStylesTab}
			${wrapperBDShadowTab}
		}
		.eb-post-grid-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesTab}
			${wrapperBDShadowHoverTab}
		}
	`;
	const wrapperStylesMobile = `
		.eb-post-grid-wrapper.${blockId}{
			grid-template-columns: repeat(${columnNumberMobile.replace(/\D/g,'')}, minmax(0, 1fr));
			${columnGapMobile}
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}
			${wrapperBackgroundStylesMobile}
			${wrapperBDShadowMobile}
		}
		.eb-post-grid-wrapper.${blockId}:hover {
			${wrapperHoverBackgroundStylesMobile}
			${wrapperBDShadowHoverMobile}
		}
	`;

	const gridColumnStylesDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-post-grid-column {
			${columnPaddingStylesDesktop}
			${columnBDShadowDesktop}
			${columnBackgroundStylesDesktop}
			${columnBgTransitionStyle}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-post-grid-column:hover {
			${columnHoverBackgroundStylesDesktop}
			${columnBDShadowHoverDesktop}
		}
	`;

	const gridColumnStylesTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-post-grid-column {
			${columnPaddingStylesTab}
			${columnBDShadowTab}
			${columnBackgroundStylesTab}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-post-grid-column:hover {
			${columnHoverBackgroundStylesTab}
			${columnBDShadowHoverTab}
		}
	`;

	const gridColumnStylesMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-post-grid-column {
			${columnPaddingStylesMobile}
			${columnBDShadowMobile}
			${columnBackgroundStylesMobile}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-post-grid-column:hover {
			${columnHoverBackgroundStylesMobile}
			${columnBDShadowHoverMobile}
		}
	`;

	const thumbnailStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-thumbnail img {
			${thumbnailImageHeightDesktop};
			${thumbnailBdrSdwStylesDesktop}
			${thumbnailMarginStylesDesktop}
		}
	`;

	const thumbnailStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-thumbnail img {
			${thumbnailImageHeightTab};
			${thumbnailBdrSdwStylesTab}
			${thumbnailMarginStylesTab}
		}
	`;

	const thumbnailStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-thumbnail img {
			${thumbnailImageHeightMobile};
			${thumbnailBdrSdwStylesMobile}
			${thumbnailMarginStylesMobile}
		}
	`;

	const titleStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title {
			text-align: ${titleTextAlign};
			${titleTypoStylesDesktop}
			${titleMarginStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title a {
			color: ${titleColor};
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title a:hover {
			color: ${titleHoverColor};
		}
	`;

	const titleStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title {
			${titleTypoStylesTab}
			${titleMarginStylesTab}
		}
	`;

	const titleStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title {
			${titleTypoStylesMobile}
			${titleMarginStylesMobile}
		}
	`;

	const contentStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-grid-post-excerpt {
			color: ${contentColor};
			text-align: ${contentTextAlign};
			${contentTypoStylesDesktop}
			${contentMarginStylesDesktop}
		}
	`;

	const contentStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-grid-post-excerpt {
			${contentTypoStylesTab}
			${contentMarginStylesTab}
		}
	`;

	const contentStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-grid-post-excerpt {
			${contentTypoStylesMobile}
			${contentMarginStylesMobile}
		}
	`;

	const readmoreStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn {
			text-align: ${readmoreTextAlign};
			${readmoreTypoStylesDesktop}
			${readmoreMarginStylesDesktop}
			${readmorePaddingStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn a {
			color: ${readmoreColor};
			background-color: ${readmoreBGColor};
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-entry-title a:hover {
			color: ${readmoreHoverColor};
			color: ${readmoreBGHoverColor};
		}
	`;

	const readmoreStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn {
			${readmoreTypoStylesTab}
			${readmoreMarginStylesTab}
			${readmorePaddingStylesTab}
		}
	`;

	const readmoreStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-readmore-btn {
			${readmoreTypoStylesMobile}
			${readmoreMarginStylesMobile}
			${readmorePaddingStylesMobile}
		}
	`;

	const avatarStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-author-avatar img {
			${avatarBdrSdwStylesDesktop}
		}
	`;

	const avatarStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-author-avatar img {
			${avatarBdrSdwStylesTab}
		}
	`;

	const avatarStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-author-avatar img {
			${avatarBdrSdwStylesMobile}
		}
	`;

	const dateStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-on {
			color: ${dateMetaColor};
			${metaTypoStylesDesktop}
		}
	`;

	const dateStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-on {
			${metaTypoStylesTab}
		}
	`;

	const dateStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-on {
			${metaTypoStylesMobile}
		}
	`;

	const authorStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-by {
			color: ${authorMetaColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-by:hover {
			color: ${authorMetaHoverColor};
		}
	`;

	const authorStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-by {
			${metaTypoStylesTab}
		}
	`;

	const authorStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-posted-by {
			${metaTypoStylesMobile}
		}
	`;

	const categoriesStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-categories-meta a {
			color: ${categoryMetaColor};
			background-color: ${categoryMetaBgColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-categories-meta a:hover {
			color: ${categoryMetaHoverColor};
			background-color: ${categoryMetaBgHoverColor};
		}
	`;

	const categoriesStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-categories-meta a {
			${metaTypoStylesTab}
		}
	`;

	const categoriesStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-categories-meta a {
			${metaTypoStylesMobile}
		}
	`;

	const tagsStyleDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-tags-meta a {
			color: ${tagMetaColor};
			background-color: ${tagMetaBgColor};
			${metaTypoStylesDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-tags-meta a:hover {
			color: ${tagMetaHoverColor};
			background-color: ${tagMetaBgHoverColor};
		}
	`;

	const tagsStyleTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-tags-meta a {
			${metaTypoStylesTab}
		}
	`;

	const tagsStyleMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-tags-meta a {
			${metaTypoStylesMobile}
		}
	`;

	const headerMetaDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta {
			justify-content: ${headerMetaTextAlign};
			${headerMetaMarginStylesDesktop}
			${headerMetaSpaceDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta .ebpg-entry-meta-items {
			justify-content: ${headerMetaTextAlign};
		}
	`;

	const headerMetaTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta {
			${headerMetaMarginStylesTab}
			${headerMetaSpaceTab}
		}
	`;

	const headerMetaMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-header-meta {
			${headerMetaMarginStylesMobile}
			${headerMetaSpaceMobile}
		}
	`;

	const footerMetaDesktop = `
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta {
			justify-content: ${footerMetaTextAlign};
			${footerMetaMarginStylesDesktop}
			${footerMetaSpaceDesktop}
		}
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta .ebpg-entry-meta-items {
			justify-content: ${footerMetaTextAlign};
		}
	`;

	const footerMetaTab = `
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta {
			${footerMetaMarginStylesTab}
			${footerMetaSpaceTab}
		}
	`;

	const footerMetaMobile = `
		.eb-post-grid-wrapper.${blockId} .ebpg-footer-meta {
			${footerMetaMarginStylesMobile}
			${footerMetaSpaceMobile}
		}
	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		${isCssExists(gridColumnStylesDesktop) ? gridColumnStylesDesktop : " "}
		${isCssExists(thumbnailStyleDesktop) ? thumbnailStyleDesktop : " "}
		${isCssExists(titleStyleDesktop) ? titleStyleDesktop : " "}
		${isCssExists(contentStyleDesktop) ? contentStyleDesktop : " "}
		${isCssExists(readmoreStyleDesktop) ? readmoreStyleDesktop : " "}
		${isCssExists(avatarStyleDesktop) ? avatarStyleDesktop : " "}
		${isCssExists(dateStyleDesktop) ? dateStyleDesktop : " "}
		${isCssExists(authorStyleDesktop) ? authorStyleDesktop : " "}
		${isCssExists(categoriesStyleDesktop) ? categoriesStyleDesktop : " "}
		${isCssExists(tagsStyleDesktop) ? tagsStyleDesktop : " "}
		${isCssExists(headerMetaDesktop) ? headerMetaDesktop : " "}
		${isCssExists(footerMetaDesktop) ? footerMetaDesktop : " "}
	`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
		${isCssExists(gridColumnStylesTab) ? gridColumnStylesTab : " "}
		${isCssExists(thumbnailStyleTab) ? thumbnailStyleTab : " "}
		${isCssExists(titleStyleTab) ? titleStyleTab : " "}
		${isCssExists(contentStyleTab) ? contentStyleTab : " "}
		${isCssExists(readmoreStyleTab) ? readmoreStyleTab : " "}
		${isCssExists(avatarStyleTab) ? avatarStyleTab : " "}
		${isCssExists(dateStyleTab) ? dateStyleTab : " "}
		${isCssExists(authorStyleTab) ? authorStyleTab : " "}
		${isCssExists(categoriesStyleTab) ? categoriesStyleTab : " "}
		${isCssExists(tagsStyleTab) ? tagsStyleTab : " "}
		${isCssExists(headerMetaTab) ? headerMetaTab : " "}
		${isCssExists(footerMetaTab) ? footerMetaTab : " "}
	`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
		${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
		${isCssExists(gridColumnStylesMobile) ? gridColumnStylesMobile : " "}
		${isCssExists(thumbnailStyleMobile) ? thumbnailStyleMobile : " "}
		${isCssExists(titleStyleMobile) ? titleStyleMobile : " "}
		${isCssExists(contentStyleMobile) ? contentStyleMobile : " "}
		${isCssExists(readmoreStyleMobile) ? readmoreStyleMobile : " "}
		${isCssExists(avatarStyleMobile) ? avatarStyleMobile : " "}
		${isCssExists(dateStyleMobile) ? dateStyleMobile : " "}
		${isCssExists(authorStyleMobile) ? authorStyleMobile : " "}
		${isCssExists(categoriesStyleMobile) ? categoriesStyleMobile : " "}
		${isCssExists(tagsStyleMobile) ? tagsStyleMobile : " "}
		${isCssExists(headerMetaMobile) ? headerMetaMobile : " "}
		${isCssExists(footerMetaMobile) ? footerMetaMobile : " "}
	`);

	// Set All Style in "blockMeta" Attribute
	useEffect(() => {
		const styleObject = {
			desktop: desktopAllStyles,
			tab: tabAllStyles,
			mobile: mobileAllStyles,
		};
		if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
			setAttributes({ blockMeta: styleObject });
		}
	}, [attributes]);

	return [
		isSelected && <Inspector {...props} />,
		//Edit view here
		<div {...blockProps}>
			<style>
				{`
				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "tab" ? tabAllStyles : " "}
				${resOption === "mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`}
			</style>

			<div className={`eb-post-grid-wrapper ${blockId} ${preset}`} data-id={blockId}>
				{typeof(queryResults) === 'object' && queryResults.length > 0 && queryResults.map((post) => {

					//Generate Featured Image
					const {
						featuredImageInfo: {
							url: imageSourceUrl,
							alt: featuredImageAlt,
						} = {},
					} = post;
					const featuredImage = showThumbnail && (
						<img
							src={ imageSourceUrl }
							alt={ featuredImageAlt }
						/>
					);

					//Generate Title
					const title = post.title.rendered;
					const titleWithLimitWords = titleLength > 0 ? title.trim().split( ' ', titleLength ).join( ' ' ) : title;
					const titleHTML = `
						<${titleTag} class="ebpg-entry-title">
							<a class="ebpg-grid-post-link" href="${post.link}" title="${titleWithLimitWords}">
								${titleWithLimitWords}
							</a> 
						</${titleTag}>
					`;

					//Generate Excerpt & Read More
					let excerpt = post.excerpt.rendered;
					const excerptElement = document.createElement( 'div' );
					excerptElement.innerHTML = excerpt;
					excerpt = excerptElement.textContent || excerptElement.innerText || '';
					const excerptWithLimitWords = contentLength > 0 ? excerpt.trim().split( ' ', contentLength ).join( ' ' ) : excerpt;

					const avatar =
						<div class="ebpg-author-avatar">
							<a href={post._embedded.author[0].link}>
								<img 
									alt={post._embedded.author[0].name ? post._embedded.author[0].name : post._embedded.author[0].slug} 
									src={post._embedded.author[0].avatar_urls[96] ? post._embedded.author[0].avatar_urls[96] : ''} 
								/>
							</a>
						</div>
					;

					const date =
						<span class="ebpg-posted-on">
							on <time dateTime={ format( 'c', post.date_gmt ) }>{ dateI18n( dateFormat, post.date_gmt ) }</time>
						</span>
					;

					const author = 
						<span class="ebpg-posted-by">
							by <a 
								href={post._embedded.author[0].link}
								title={post._embedded.author[0].name ? post._embedded.author[0].name : post._embedded.author[0].slug} 
								rel="author"
							>
								{post._embedded.author[0].name ? post._embedded.author[0].name : post._embedded.author[0].slug}
							</a>
						</span>
					;

					const postTerms = {};
					const terms = post._embedded['wp:term'] 
					&& post._embedded['wp:term'].length > 0 
					&& post._embedded['wp:term'].map(item => {
						let termObj = {};
						let termName = "";
						item.length > 0 && item.map(term => {
							termName = term.taxonomy
							termObj[term.slug] = {
								name: term.name,
								id: term.id,
								link: term.link,
								slug: term.slug,
							}
						})
						postTerms[termName] = termObj
					})

					const categories = postTerms.category ? (
						<div class="ebpg-categories-meta">
							{Object.keys(postTerms.category).map(item => (
								<a 
									href={postTerms.category[item].link} 
									title={postTerms.category[item].name}
								>
									{postTerms.category[item].name}
								</a>
							))}
						</div>
					) : "";

					const tags = postTerms.post_tag ? (
						<div class="ebpg-tags-meta">
							{Object.keys(postTerms.post_tag).map(item => (
								<a 
									href={postTerms.post_tag[item].link} 
									title={postTerms.post_tag[item].name}
								>
									{postTerms.post_tag[item].name}
								</a>
							))}
						</div>
					) : "";
						
					const metaObject = { date, author, categories, tags}

					const headerMetaItems = JSON.parse(headerMeta).map(item => item.value);
					const headerMetaHtml = showMeta ? (
						<div class="ebpg-entry-meta ebpg-header-meta">
							{headerMetaItems.includes('avatar') && (
								avatar
							)}
							<div class="ebpg-entry-meta-items">
								{headerMetaItems.map(item=>{
									return metaObject[item]
								})}
							</div>
						</div>
					) : "";

					const footerMetaItems = JSON.parse(footerMeta).map(item => item.value);
					const footerMetaHtml = showMeta ? (
						<div class="ebpg-entry-meta ebpg-footer-meta">
							{footerMetaItems.includes('avatar') && (
								avatar
							)}
							<div class="ebpg-entry-meta-items">
								{footerMetaItems.map(item=>{
									return metaObject[item]
								})}
							</div>
						</div>
					) : "";
					
					return (
						<article class="ebpg-grid-post ebpg-post-grid-column" data-id={post.id}>
							<div class="ebpg-grid-post-holder">
								<div class="ebpg-entry-media">
									{showThumbnail && (
										<div class="ebpg-entry-thumbnail">
											{post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
												<img
													src={post._embedded['wp:featuredmedia'][0].source_url}
													alt={post.title.alt_text}
												/>
											)}
											{!post._embedded['wp:featuredmedia'] && (
												<img
													src="https://via.placeholder.com/250x250.png"
													alt="No Thumbnail Available"
												/>
											)}
										</div>
									)}
								</div>
								
								<div class="ebpg-entry-wrapper">
									{showTitle && (
										<header 
											class="ebpg-entry-header"
											dangerouslySetInnerHTML={{__html: titleHTML}}
										>
										</header>
									)}
									
									{/* Header Meta */}
									{showMeta && (
										headerMetaHtml
									)}

									{showContent && (
										<div class="ebpg-entry-content">
											<div class="ebpg-grid-post-excerpt">
												<p>{ excerptWithLimitWords }{__( expansionIndicator )}</p>
											</div>
											{showReadMore && (
												<div class="ebpg-readmore-btn">
													<a href={post.link}>{ __( readmoreText ) }</a>
												</div>
											)}
										</div>
									)}
									
									{/* Footer Meta */}
									{showMeta && (
										footerMetaHtml
									)}
									
								</div>
							</div>
						</article>
					)
				})}
				{ queryResults.length < 1 && (
					<p>No Posts Found</p>
				)}
			</div>
		</div>,
	];
};