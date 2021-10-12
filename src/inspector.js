/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const { 
	PanelBody,
	PanelRow,
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
 * External Dependencies
*/
import Select2 from 'react-select';

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
	THUMBNAIL_MARGIN,
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
		readmoreBGColor,
		readmoreTextAlign,
		readmoreHoverColor,
		readmoreBGHoverColor,
		readmoreColorType,
		showMeta,
		headerMeta,
		footerMeta,
		metaColor,
		metaTextAlign,
		metaHoverColor,
		metaColorType,
	} = attributes;

	const metaOptions = [
		{ value: 'date', label: 'Published Date' },
		{ value: 'categories', label: 'Categories' },
		{ value: 'tags', label: 'Tags' },
		{ value: 'author', label: 'Author Name' },
		{ value: 'avatar', label: 'Author Avatar' }
	  ];

	// console.log("Inspector", queryData, queryResults)

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
												<PanelRow>Header Meta</PanelRow>
												<Select2
													name='select-header-meta'
													value={ headerMeta.length > 0 ? JSON.parse( headerMeta ) : '' }
													onChange={ (selected) => setAttributes({headerMeta: JSON.stringify(selected)})}
													options={ metaOptions }
													isMulti='true'
												/>

												<PanelRow>Footer Meta</PanelRow>
												<Select2
													name='select-footer-meta'
													value={ footerMeta.length > 0 ? JSON.parse( footerMeta ) : '' }
													onChange={ (selected) => setAttributes({footerMeta: JSON.stringify(selected)})}
													options={ metaOptions }
													isMulti='true'
												/>
											</>
										)}

									</PanelBody>
								</>
							)}

							{tab.name === "styles" && (
								<>
									{showThumbnail && (
										<PanelBody title={__("Thumbnail")} initialOpen={false}>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={THUMBNAIL_BORDER_RADIUS}
												baseLabel="Border Radius"
											/>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={THUMBNAIL_MARGIN}
												baseLabel="Margin"
											/>
										</PanelBody>
									)}

									{showTitle && (
										<PanelBody title={__("Title")} initialOpen={false}>
											<ButtonGroup className="eb-inspector-btn-group">
												{NORMAL_HOVER.map((item) => (
													<Button
														isLarge
														isPrimary={titleColorStyle === item.value}
														isSecondary={titleColorStyle !== item.value}
														onClick={() => setAttributes({ titleColorStyle: item.value })}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>

											{titleColorStyle === "normal" && (
												<PanelColorSettings
													className={"eb-subpanel"}
													title={__("Normal Color")}
													initialOpen={true}
													colorSettings={[
														{
															value: titleColor,
															onChange: (newColor) =>
																setAttributes({ titleColor: newColor }),
															label: __("Color"),
														}
													]}
												/>
											)}

											{titleColorStyle === "hover" && (
												<PanelColorSettings
													className={"eb-subpanel"}
													title={__("Hover Color")}
													initialOpen={true}
													colorSettings={[
														{
															value: titleHoverColor,
															onChange: (newColor) =>
																setAttributes({ titleHoverColor: newColor }),
															label: __("Hover Color"),
														}
													]}
												/>
											)}
											<BaseControl label={__("Alignment")} id="eb-post-grid">
												<ButtonGroup id="eb-post-grid">
													{TEXT_ALIGN.map((item) => (
														<Button
															isLarge
															isPrimary={titleTextAlign === item.value}
															isSecondary={titleTextAlign !== item.value}
															onClick={() =>
																setAttributes({
																	titleTextAlign: item.value,
																})
															}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>
											<TypographyDropdown
												baseLabel={__("Typography", "eb-post-grid")}
												typographyPrefixConstant={EBPG_TITLE_TYPOGRAPHY}
												resRequiredProps={resRequiredProps}
											/>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={TITLE_MARGIN}
												baseLabel="Margin"
											/>
										</PanelBody>
									)}

									{showContent && (
										<PanelBody title={__("Excerpt")} initialOpen={false}>
											<ColorControl
												label={__("Color")}
												color={contentColor}
												onChange={(color) =>
													setAttributes({ contentColor: color })
												}
											/>
											<BaseControl label={__("Alignment")} id="eb-post-grid">
												<ButtonGroup id="eb-post-grid">
													{TEXT_ALIGN.map((item) => (
														<Button
															isLarge
															isPrimary={contentTextAlign === item.value}
															isSecondary={contentTextAlign !== item.value}
															onClick={() =>
																setAttributes({
																	contentTextAlign: item.value,
																})
															}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>
											<TypographyDropdown
												baseLabel={__("Typography", "eb-post-grid")}
												typographyPrefixConstant={EBPG_CONTENT_TYPOGRAPHY}
												resRequiredProps={resRequiredProps}
											/>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={CONTENT_MARGIN}
												baseLabel="Margin"
											/>
										</PanelBody>
									)}

									{showReadMore && (
										<PanelBody title={__("Read More Button")} initialOpen={false}>
											<ButtonGroup className="eb-inspector-btn-group">
												{NORMAL_HOVER.map((item) => (
													<Button
														isLarge
														isPrimary={readmoreColorType === item.value}
														isSecondary={readmoreColorType !== item.value}
														onClick={() => setAttributes({ readmoreColorType: item.value })}
													>
														{item.label}
													</Button>
												))}
											</ButtonGroup>

											{readmoreColorType === "normal" && (
												<PanelColorSettings
													className={"eb-subpanel"}
													title={__("Normal Color")}
													initialOpen={true}
													colorSettings={[
														{
															value: readmoreColor,
															onChange: (newColor) =>
																setAttributes({ readmoreColor: newColor }),
															label: __("Color"),
														},
														{
															value: readmoreBGColor,
															onChange: (newColor) =>
																setAttributes({ readmoreBGColor: newColor }),
															label: __("Background Color"),
														}
													]}
												/>
											)}

											{readmoreColorType === "hover" && (
												<PanelColorSettings
													className={"eb-subpanel"}
													title={__("Hover Color")}
													initialOpen={true}
													colorSettings={[
														{
															value: readmoreHoverColor,
															onChange: (newColor) =>
																setAttributes({ readmoreHoverColor: newColor }),
															label: __("Hover Color"),
														},
														{
															value: readmoreBGHoverColor,
															onChange: (newColor) =>
																setAttributes({ readmoreBGHoverColor: newColor }),
															label: __("Hover Background Color"),
														}
													]}
												/>
											)}
											<BaseControl label={__("Alignment")} id="eb-post-grid">
												<ButtonGroup id="eb-post-grid">
													{TEXT_ALIGN.map((item) => (
														<Button
															isLarge
															isPrimary={readmoreTextAlign === item.value}
															isSecondary={readmoreTextAlign !== item.value}
															onClick={() =>
																setAttributes({
																	readmoreTextAlign: item.value,
																})
															}
														>
															{item.label}
														</Button>
													))}
												</ButtonGroup>
											</BaseControl>
											<TypographyDropdown
												baseLabel={__("Typography", "eb-post-grid")}
												typographyPrefixConstant={EBPG_READMORE_TYPOGRAPHY}
												resRequiredProps={resRequiredProps}
											/>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={READMORE_MARGIN}
												baseLabel="Margin"
											/>
											<ResponsiveDimensionsControl
												resRequiredProps={resRequiredProps}
												controlName={READMORE_PADDING}
												baseLabel="Padding"
											/>
										</PanelBody>
									)}
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
