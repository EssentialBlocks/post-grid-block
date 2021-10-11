/**
 * WordPress dependencies 
*/
const { __ } = wp.i18n;
const { RichText, useBlockProps } = wp.blockEditor;
const { useEffect, renderToString } = wp.element;
const { select } = wp.data;
const { dateI18n, format, __experimentalGetSettings } = wp.date;

/**
 * External dependencies
 */
import { get, includes, invoke, isUndefined, pickBy } from 'lodash';
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
	COLUMNS,
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
		}
	`;
	const wrapperStylesTab = `
		.eb-post-grid-wrapper.${blockId}{
			${wrapperMarginStylesTab}

		}
	`;
	const wrapperStylesMobile = `
		.eb-post-grid-wrapper.${blockId}{
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

					const metaData = showMeta ? (
						<>
							{showAvatar ?
								<div class="ebpg-author-avatar">
									<a href={post._embedded.author[0].link}>
										<img 
											alt={post._embedded.author[0].name ? post._embedded.author[0].name : post._embedded.author[0].slug} 
											src={post._embedded.author[0].avatar_urls[96] ? post._embedded.author[0].avatar_urls[96] : ''} 
										/>
									</a>
								</div>
							: ''}

							<div class="ebpg-entry-meta-data">
								{showAuthor ?
									<span class="ebpg-posted-by">
										<a 
											href={post._embedded.author[0].link}
											title={post._embedded.author[0].name ? post._embedded.author[0].name : post._embedded.author[0].slug} 
											rel="author"
										>
											{post._embedded.author[0].name ? post._embedded.author[0].name : post._embedded.author[0].slug}
										</a>
									</span>
								: ''}

								{showDate ?
									<span class="ebpg-posted-on">
										<time dateTime={ format( 'c', post.date_gmt ) }>{ dateI18n( dateFormat, post.date_gmt ) }</time>
									</span>
								: ''}
							</div>
						</>
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

									{showContent && (
										<div class="ebpg-entry-content">
											<div class="ebpg-grid-post-excerpt">
												<p>{ excerptWithLimitWords }{__( expansionIndicator )}</p>
												<a href={post.link} class="ebpg-readmore-btn">{ __( readmoreText ) }</a>
											</div>
										</div>
									)}
									
									{showMeta && (
										<div class="ebpg-entry-meta">{metaData}</div>
									)}
									
									
									
								</div>
							</div>
						</article>
					)
				})}
				{!isSelected && queryResults.length < 1 && (
					<p>No Posts Found</p>
				)}
			</div>
		</div>,
	];
};