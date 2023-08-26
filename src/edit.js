import { __ } from "@wordpress/i18n";
import { useState } from "@wordpress/element";
import { useBlockProps, HeightControl } from "@wordpress/block-editor";
import {
	TextControl,
	ColorPicker,
	RangeControl,
	__experimentalBorderControl as BorderControl,
	__experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const [values, setValues] = useState({
		top: "0px",
		left: "0px",
		right: "0px",
		bottom: "0px",
	});

	const colors = [
		{ name: "Blue 20", color: "#72aee6" },
		// ...
	];

	const layerOne = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: Number(attributes.height),
		width: Number(attributes.width),
		background: attributes.color,
		borderTopLeftRadius: attributes.borderRadius.top,
		borderTopRightRadius: attributes.borderRadius.right,
		borderBottomRightRadius: attributes.borderRadius.bottom,
		borderBottomLeftRadius: attributes.borderRadius.left,
		borderColor: attributes.border.color,
		borderStyle: attributes.border.style,
		borderWidth: attributes.border.width,
	};

	const layerTwo = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: Number(attributes.heightTwo),
		width: Number(attributes.widthTwo),
		background: attributes.colorTwo,
		borderTopLeftRadius: attributes.borderRadiusTwo.top,
		borderTopRightRadius: attributes.borderRadiusTwo.right,
		borderBottomRightRadius: attributes.borderRadiusTwo.bottom,
		borderBottomLeftRadius: attributes.borderRadiusTwo.left,
		borderColor: attributes.borderTwo.color,
		borderStyle: attributes.borderTwo.style,
		borderWidth: attributes.borderTwo.width,
	};

	const layerThree = {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: Number(attributes.heightThree),
		width: Number(attributes.widthThree),
		background: attributes.colorThree,
		borderTopLeftRadius: attributes.borderRadiusThree.top,
		borderTopRightRadius: attributes.borderRadiusThree.right,
		borderBottomRightRadius: attributes.borderRadiusThree.bottom,
		borderBottomLeftRadius: attributes.borderRadiusThree.left,
		borderColor: attributes.borderThree.color,
		borderStyle: attributes.borderThree.style,
		borderWidth: attributes.borderThree.width,
	};

	console.log(typeof attributes.height);
	console.log(attributes.borderRadius);
	console.log(attributes.borderRadius.top);
	console.log(typeof attributes.borderRadius.top);
	console.log(attributes.color);
	console.log(`This is linkOne: ${attributes.linkOne}`);
	console.log(`The borderColor is: ${attributes.border.color}`);
	return (
		<flex {...useBlockProps()}>
			<flex className="back2top-container">
				<flex className="top-rows">
					<flex>
						<RangeControl
							colors={colors}
							label={__("Height", "gutenpride")}
							onChange={(val) => setAttributes({ height: val })}
							initialPosition={Number(attributes.height)}
							max={300}
							withInputField={false}
						/>
					</flex>
					<flex>
						<RangeControl
							colors={colors}
							label={__("Width", "gutenpride")}
							onChange={(val) => setAttributes({ width: val })}
							initialPosition={Number(attributes.width)}
							value={attributes.width}
							max={300}
							withInputField={false}
						/>
					</flex>
					<flex>
						<BorderControl
							colors={colors}
							label={__("Border", "gutenpride")}
							onChange={(val) => setAttributes({ border: val })}
							value={attributes.border}
							withSlider
						/>
					</flex>
					<flex>
						<BoxControl
							label={__("Border Radius", "gutenpride")}
							values={attributes.borderRadius}
							onChange={(val) => setAttributes({ borderRadius: val })}
						/>
					</flex>
				</flex>
				<flex className="top-rows">
					<flex>
						<RangeControl
							colors={colors}
							label={__("Height 2", "gutenpride")}
							onChange={(val) => setAttributes({ heightTwo: val })}
							initialPosition={Number(attributes.heightTwo)}
							max={300}
							withInputField={false}
						/>
					</flex>
					<flex>
						<RangeControl
							colors={colors}
							label={__("Width 2", "gutenpride")}
							onChange={(val) => setAttributes({ widthTwo: val })}
							initialPosition={Number(attributes.width)}
							value={attributes.widthTwo}
							max={300}
							withInputField={false}
						/>
					</flex>
					<flex>
						<BorderControl
							colors={colors}
							label={__("Border 2", "gutenpride")}
							onChange={(val) => setAttributes({ borderTwo: val })}
							value={attributes.borderTwo}
							withSlider
						/>
					</flex>
					<flex>
						<BoxControl
							label={__("Border Radius 2", "gutenpride")}
							values={attributes.borderRadiusTwo}
							onChange={(val) => setAttributes({ borderRadiusTwo: val })}
						/>
					</flex>
				</flex>
				<flex className="top-rows">
					<flex>
						<RangeControl
							colors={colors}
							label={__("Height 3", "gutenpride")}
							onChange={(val) => setAttributes({ heightThree: val })}
							initialPosition={Number(attributes.heightThree)}
							max={300}
							withInputField={false}
						/>
					</flex>
					<flex>
						<RangeControl
							colors={colors}
							label={__("Width 3", "gutenpride")}
							onChange={(val) => setAttributes({ widthThree: val })}
							initialPosition={Number(attributes.widthThree)}
							value={attributes.widthThree}
							max={300}
							withInputField={false}
						/>
					</flex>
					<flex>
						<BorderControl
							colors={colors}
							label={__("Border 3", "gutenpride")}
							onChange={(val) => setAttributes({ borderThree: val })}
							value={attributes.borderThree}
							withSlider
						/>
					</flex>
					<flex>
						<BoxControl
							label={__("Border Radius", "gutenpride")}
							values={attributes.borderRadiusthree}
							onChange={(val) => setAttributes({ borderRadiusThree: val })}
						/>
					</flex>
				</flex>
				<flex className="second-row">
					<flex className="elements-container">
						<flex className="elements">
							<TextControl
								className="selector-boxes"
								autoComplete="off"
								label={__("Selector", "gutenpride")}
								help="Choose a class or id to add to the container for further edits."
								value={attributes.selector}
								onChange={(val) => setAttributes({ selector: val })}
							/>
							<TextControl
								className="selector-boxes"
								autoComplete="off"
								label={__("Link 1", "gutenpride")}
								help="Provide a link to the image that you want to use as a background."
								value={attributes.linkOne}
								onChange={(val) => setAttributes({ linkOne: val })}
							/>
							<TextControl
								className="selector-boxes"
								autoComplete="off"
								label={__("Link 2", "gutenpride")}
								help="Provide a link to the image that you want to use as a background."
								value={attributes.linkTwo}
								onChange={(val) => setAttributes({ linkTwo: val })}
							/>
						</flex>
					</flex>
					<flex className="button-prototype-container">
						<flex className="layerOne" style={layerOne}>
							<flex className="layerTwo" style={layerTwo}>
								<flex className="layerThree" style={layerThree}></flex>
							</flex>
						</flex>
					</flex>
					<flex className="color-container">
						<flex className="colorModule">
							<ColorPicker
								className="colorPicker"
								label={__("Background Color", "gutenpride")}
								color={attributes.color}
								onChange={(val) => setAttributes({ color: val })}
								value={attributes.color}
								defaultValue="#000"
							/>
						</flex>
						<flex className="colorModule">
							<ColorPicker
								className="colorPicker"
								label={__("noob", "gutenpride")}
								color={attributes.colorTwo}
								onChange={(val) => setAttributes({ colorTwo: val })}
								value={attributes.colorTwo}
								defaultValue="#000"
							/>
						</flex>
						<flex className="colorModule">
							<ColorPicker
								className="colorPicker"
								label={__("Background Color", "gutenpride")}
								color={attributes.colorThree}
								onChange={(val) => setAttributes({ colorThree: val })}
								value={attributes.colorThree}
								defaultValue="#000"
							/>
						</flex>
					</flex>
				</flex>
			</flex>
		</flex>
	);
}
