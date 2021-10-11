/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const { 
	PanelBody,
	SelectControl,
	ToggleControl,
	TextControl,
	Button,
	ButtonGroup,
	BaseControl,
	TabPanel,
	RangeControl,
} = wp.components;
const { useEffect, useState } = wp.element;
const { select } = wp.data;

/**
 * Internal depencencies
 */
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
	AVATAR_BORDER_RADIUS,

	UNIT_TYPES,
	HEIGHT_UNIT_TYPES,
	NORMAL_HOVER,
	PRESETS,
	TEXT_ALIGN,
	TITLE_TAGS,
	CONTENT_POSITION,
	META_POSITION,
} from "./constants/constants";
import { 
	EBPG_TITLE_TYPOGRAPHY, 
	EBPG_CONTENT_TYPOGRAPHY,
	EBPG_READMORE_TYPOGRAPHY,
	EBPG_META_TYPOGRAPHY,
 } from "./constants/typographyPrefixConstants";
import {
	mimmikCssForResBtns,
	mimmikCssOnPreviewBtnClickWhileBlockSelected,
} from "../util/helpers";
import ColorControl from "../util/color-control";
import ResponsiveDimensionsControl from "../util/dimensions-control-v2";
import TypographyDropdown from "../util/typography-control-v2";
import BorderShadowControl from "../util/border-shadow-control";
import ResponsiveRangeController from "../util/responsive-range-control";
import BackgroundControl from "../util/background-control";
import CustomQuery from "../util/custom-query";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		resOption,
		preset,
		queryData,
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

	console.log("Inspector", queryData, queryResults)

	// this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once
	useEffect(() => {
		setAttributes({
			resOption: select("core/edit-post").__experimentalGetPreviewDeviceType(),
		});
	}, []);

	// this useEffect is for mimmiking css for all the eb blocks on resOption changing
	useEffect(() => {
		mimmikCssForResBtns({
			domObj: document,
			resOption,
		});
	}, [resOption]);

	// this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
	useEffect(() => {
		const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
			domObj: document,
			select,
			setAttributes,
		});
		return () => {
			cleanUp();
		};
	}, []);

	const resRequiredProps = {
		setAttributes,
		resOption,
		attributes,
	};

	const changePreset = (selected) => {
		setAttributes({ preset: selected });
		switch(selected) {
			case 'preset-1':
				setAttributes({
					
				});
				break;
			case 'preset-2':
				setAttributes({
					
				});
				break;
			case 'preset-3':
				setAttributes({
					
				});
				break;
			case 'preset-4':
				setAttributes({
					
				});
				break;
			default:
			  return false;
		}
	};

	return (
		<InspectorControls key="controls">
			<div className="eb-panel-control">
			
				<TabPanel
					className="eb-parent-tab-panel"
					activeClass="active-tab"
					// onSelect={onSelect}
					tabs={ [
						{
							name: 'general',
							title: 'General',
							className: 'eb-tab general',
						},
						{
							name: 'styles',
							title: 'Styles',
							className: 'eb-tab styles',
						},
						{
							name: 'advance',
							title: 'Advance',
							className: 'eb-tab advance',
						},
					] }
				>
					{(tab) =>
						<div className={"eb-tab-controls" + tab.name}>
							{tab.name === "general" && (
								<>
									<CustomQuery 
										queryData={queryData} 
										queryResults={queryResults} 
										setAttributes={setAttributes} 
									/>

									<PanelBody 
										title={__("Layout Style")} 
										initialOpen={true}
									>
										<SelectControl
											label={__("Template")}
											value={preset}
											options={PRESETS}
											onChange={(selected) => changePreset(selected)}
										/>

										<ResponsiveRangeController
											baseLabel={__("Columns", "eb-post-grid")}
											controlName={COLUMNS}
											resRequiredProps={resRequiredProps}
											units={[]}
											min={1}
											max={6}
											step={1}
										/>

										<ResponsiveRangeController
											baseLabel={__("Column Gap", "eb-post-grid")}
											controlName={COLUMN_GAP}
											resRequiredProps={resRequiredProps}
											units={UNIT_TYPES}
											min={1}
											max={100}
											step={1}
										/>

										<ToggleControl
											label={__("Show Thumbnail?")}
											checked={showThumbnail}
											onChange={() => {
												setAttributes({ showThumbnail: !showThumbnail });
											}}
										/>

										{showThumbnail && (
											<ResponsiveRangeController
												baseLabel={__("Thumbnail Height", "eb-post-grid")}
												controlName={THUMBNAIL_IMAGE_SIZE}
												resRequiredProps={resRequiredProps}
												units={HEIGHT_UNIT_TYPES}
												min={1}
												max={500}
												step={1}
											/>
										)}

										<ToggleControl
											label={__("Show Title?")}
											checked={showTitle}
											onChange={() => {
												setAttributes({ showTitle: !showTitle });
											}}
										/>
										
										{showTitle && (
											<>
												<SelectControl
													label={__("Title Tag")}
													value={titleTag}
													options={TITLE_TAGS}
													onChange={(value) => {
														setAttributes({ titleTag: value });
													}}
												/>
		
												<RangeControl
													label="Title Words"
													value={ titleLength }
													onChange={ ( value ) => setAttributes({ titleLength: value }) }
													min={ 0 }
													max={ 100 }
												/>
											</>
										)}

										<ToggleControl
											label={__("Show Excerpt?")}
											checked={showContent}
											onChange={() => {
												setAttributes({ showContent: !showContent });
											}}
										/>
										
										{showContent && (
											<>
												<RangeControl
													label="Excerpt Words"
													value={ contentLength }
													onChange={ ( value ) => setAttributes({ contentLength: value }) }
													min={ 0 }
													max={ 100 }
												/>
		
												<TextControl
													label="Expansion Indicator"
													type={"text"}
													value={ expansionIndicator }
													onChange={ (text) => setAttributes({expansionIndicator: text}) }
												/>
											</>
										)}
		
										<ToggleControl
											label={__("Show Read More Button?")}
											checked={showReadMore}
											onChange={() => {
												setAttributes({ showReadMore: !showReadMore });
											}}
										/>

										{showReadMore && (
											<>
												<TextControl
													label="Button Text"
													type={"text"}
													value={ readmoreText }
													onChange={ (text) => setAttributes({readmoreText: text}) }
												/>
											</>
										)}
		
										<ToggleControl
											label={__("Show Meta?")}
											checked={showMeta}
											onChange={() => {
												setAttributes({ showMeta: !showMeta });
											}}
										/>

										{showMeta && (
											<>
												<SelectControl
													label={__("Meta Position")}
													value={metaPosition}
													options={META_POSITION}
													onChange={(value) => {
														setAttributes({ metaPosition: value });
													}}
												/>
		
												<ToggleControl
													label={__("Show Avatar?")}
													checked={showAvatar}
													onChange={() => {
														setAttributes({ showAvatar: !showAvatar });
													}}
												/>
		
												<ToggleControl
													label={__("Show Author?")}
													checked={showAuthor}
													onChange={() => {
														setAttributes({ showAuthor: !showAuthor });
													}}
												/>
		
												<ToggleControl
													label={__("Show Date?")}
													checked={showDate}
													onChange={() => {
														setAttributes({ showDate: !showDate });
													}}
												/>
		
												<ToggleControl
													label={__("Show Categories?")}
													checked={showCategories}
													onChange={() => {
														setAttributes({ showCategories: !showCategories });
													}}
												/>
											</>
										)}
										
										
										{/* <BaseControl label={__("Alignment")} id="eb-button-group-alignment">
											<ButtonGroup id="eb-button-group-alignment">
												{CONTENT_POSITION.map((item) => (
													<Button
														isLarge
														isPrimary={contentPosition === item.value}
														isSecondary={contentPosition !== item.value}
														onClick={() =>
															setAttributes({
																contentPosition: item.value,
															})
														}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>
										</BaseControl> */}

									</PanelBody>
								</>
							)}

							{tab.name === "styles" && (
								<>
									<PanelBody title={__("Title")} initialOpen={false}>
										<ColorControl
											label={__("Color")}
											color={titleColor}
											onChange={(color) =>
												setAttributes({ titleColor: color })
											}
										/>

										<TypographyDropdown
												baseLabel={__("Typography", "eb-post-grid")}
												typographyPrefixConstant={EBPG_TITLE_TYPOGRAPHY}
												resRequiredProps={resRequiredProps}
										/>

									</PanelBody>
								</>
							)}

							{tab.name === "advance" && (
								<>
									<PanelBody>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={WRAPPER_MARGIN}
											baseLabel="Margin"
										/>
										<ResponsiveDimensionsControl
											resRequiredProps={resRequiredProps}
											controlName={WRAPPER_PADDING}
											baseLabel="Padding"
										/>
									</PanelBody>
									<PanelBody title={__("Background")} initialOpen={false}>
										<BackgroundControl
											controlName={WRAPPER_BG}
											resRequiredProps={resRequiredProps}
											noOverlay
										/>
									</PanelBody>
									<PanelBody title={__("Border & Shadow")} initialOpen={false}>
										<BorderShadowControl
											controlName={WRAPPER_BORDER_SHADOW}
											resRequiredProps={resRequiredProps}
											// noShadow
											// noBorder
										/>
									</PanelBody>
								</>
							)}
							
						</div>
					}


				</TabPanel>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
