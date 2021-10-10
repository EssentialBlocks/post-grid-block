/**
 * WordPress dependencies 
*/
const { __ } = wp.i18n;
const { RichText, useBlockProps } = wp.blockEditor;
const { useEffect } = wp.element;
const { select } = wp.data;

import {escapeAmpersand, escapeAttribute, escapeEditableHTML, escapeHTML} from "@wordpress/escape-html"

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
		columns,
		showThumbnail,
		showTitle,
		titleColor,
		titleHoverColor,
		titleColorStyle,
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
		readmoreTextAlign,
		readmoreHoverColor,
		readmoreColorType,
		showMeta,
		metaPosition,
		metaColor,
		metaTextAlign,
		metaHoverColor,
		metaColorType,
		showAvatar,
		showAuthor,
		showDate,
		showCategories,
	} = attributes;

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
		defaultFontSize: 20,
	});

	const {
		typoStylesDesktop: contentTypoStylesDesktop,
		typoStylesTab: contentTypoStylesTab,
		typoStylesMobile: contentTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: EBPG_CONTENT_TYPOGRAPHY,
		defaultFontSize: 16,
	});

	const {
		typoStylesDesktop: readmoreTypoStylesDesktop,
		typoStylesTab: readmoreTypoStylesTab,
		typoStylesMobile: readmoreTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: EBPG_READMORE_TYPOGRAPHY,
		defaultFontSize: 16,
	});

	const {
		typoStylesDesktop: metaTypoStylesDesktop,
		typoStylesTab: metaTypoStylesTab,
		typoStylesMobile: metaTypoStylesMobile,
	} = generateTypographyStyles({
		attributes,
		prefixConstant: EBPG_META_TYPOGRAPHY,
		defaultFontSize: 14,
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
		dimensionStylesDesktop: metaMarginStylesDesktop,
		dimensionStylesTab: metaMarginStylesTab,
		dimensionStylesMobile: metaMarginStylesMobile,
	} = generateDimensionsControlStyles({
		controlName: META_MARGIN,
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
		rangeStylesDesktop: columnGapDesktop,
		rangeStylesTab: columnGapTab,
		rangeStylesMobile: columnGapMobile,
	} = generateResponsiveRangeStyles({
		controlName: COLUMN_GAP,
		property: "margin",
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
		.eb-button-group-wrapper.${blockId}{
			display: flex;
			flex-direction: row;
			position: relative;
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
		}
	`;
	const wrapperStylesTab = `
		.eb-button-group-wrapper.${blockId}{
			${wrapperMarginStylesTab}

		}
	`;
	const wrapperStylesMobile = `
		.eb-button-group-wrapper.${blockId}{
			${wrapperMarginStylesMobile}

		}
	`;

	// all css styles for large screen width (desktop/laptop) in strings ⬇
	const desktopAllStyles = softMinifyCssStrings(`
			${isCssExists(wrapperStylesDesktop) ? wrapperStylesDesktop : " "}
		`);

	// all css styles for Tab in strings ⬇
	const tabAllStyles = softMinifyCssStrings(`
			${isCssExists(wrapperStylesTab) ? wrapperStylesTab : " "}
		`);

	// all css styles for Mobile in strings ⬇
	const mobileAllStyles = softMinifyCssStrings(`
			${isCssExists(wrapperStylesMobile) ? wrapperStylesMobile : " "}
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
				{typeof(queryResults) === 'object' && queryResults.length > 0 && queryResults.map((post) => (
					<article class="ebpg-grid-post ebpg-post-grid-column" data-id={post.id}>
						<div class="ebpg-grid-post-holder">
							<div class="ebpg-entry-media">
								{showThumbnail && (
									<div class="ebpg-entry-thumbnail">
										{post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'].length > 0 && (
											<img 
												width={post._embedded['wp:featuredmedia'][0].media_details.width} 
												height={post._embedded['wp:featuredmedia'][0].media_details.height} 
												src={post._embedded['wp:featuredmedia'][0].source_url} 
												class="attachment-medium size-medium" 
												alt={post.title.rendered}
											/>
										)}
									</div>
								)}
								
							</div>
							
							<div class="ebpg-entry-wrapper">
								<header class="ebpg-entry-header">
									<h2 class="ebpg-entry-title">
										<a class="ebpg-grid-post-link" href="" title={post.title.rendered}>
											{post.title.rendered}
										</a>
									</h2>
								</header>
								<div class="ebpg-entry-content">
									<div class="ebpg-grid-post-excerpt">
										<p>{}</p>
										<p>{post.content.rendered.replace(/<[^>]*>?/gm, '').substr(0, contentLength)}</p>
										<a href="" class="ebpg-post-elements-readmore-btn">Read More</a>
									</div>
								</div>
								<div class="ebpg-entry-footer">
									<div class="ebpg-author-avatar">
										<a href="http://templately.test/author/admin/">
											<img alt="" src="" srcset="http://0.gravatar.com/avatar/f2043d92f108cc1bb1e9f4f7792675c0?s=192&amp;d=mm&amp;r=g 2x" class="avatar avatar-96 photo" height="96" width="96" loading="lazy" />
										</a>
									</div>
									<div class="ebpg-entry-meta">
										<span class="ebpg-posted-by">
											<a href="http://templately.test/author/admin/" title="Posts by admin" rel="author">admin</a>
										</span>
										<span class="ebpg-posted-on">
											<time datetime="February 1, 2021">February 1, 2021</time>
										</span>
									</div>
								</div>
							</div>
						</div>
					</article>
				))}
				{!isSelected && queryResults.length < 1 && (
					<p>No Posts Found</p>
				)}
			</div>
		</div>,
	];
};